# =====================================================================
# AIMBA 공모전 보드 — 일일 자동 크롤 & 이중 배포 러너 (Windows 작업 스케줄러용)
# ---------------------------------------------------------------------
# 흐름: 위비티 크롤 → 안정성 가드 체크(exit2=보존/스킵) → 루트 /data 동기화
#       → git 커밋·푸시(GH Pages) → Vercel 미러 배포 + alias 갱신
# 가드: 크롤러 exit 0 = 스키마검증 + 급감/빈약 가드 모두 통과. exit 2 = 보존(스킵).
#
# ⚠ PowerShell 5.1 함정: 네이티브 exe(git/vercel/python)는 정상 성공 시에도
#    stderr에 진행상황을 쓴다(예: git push의 "To github.com..."). ErrorActionPreference
#    =Stop 상태에서 그 stderr를 리다이렉트하면 에러로 간주돼 throw된다. 그래서
#    네이티브 호출은 Run-Native 헬퍼로 감싸 Continue 컨텍스트에서 실행하고
#    $LASTEXITCODE 로만 성패를 판정한다(PowerShell cmdlet은 계속 Stop 유지).
# 로그: scripts/logs/auto_crawl.log (회차별 누적, 단계별, 일관 UTF-8)
# =====================================================================
$ErrorActionPreference = "Stop"
$repo    = "C:\Users\jun16\Desktop\sogang\SOGANG-AIMBA7th"
$logDir  = Join-Path $repo "scripts\logs"
if (-not (Test-Path -LiteralPath $logDir)) { New-Item -ItemType Directory -Force -Path $logDir | Out-Null }
$log     = Join-Path $logDir "auto_crawl.log"
$srcJson = Join-Path $repo "next-app\public\data\contests-extra.json"
$dstJson = Join-Path $repo "data\contests-extra.json"

function Log($m) {
  $ts = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
  Add-Content -LiteralPath $log -Value "[$ts] $m" -Encoding utf8
}

# 네이티브 명령 실행: stderr를 모아 로그에 남기고 exit code만 반환(throw 안 함).
function Run-Native {
  param([string]$exe, [string[]]$xargs)
  $prev = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  $out = (& $exe @xargs 2>&1 | Out-String)
  $code = $LASTEXITCODE
  $ErrorActionPreference = $prev
  if ($out -and $out.Trim()) { Add-Content -LiteralPath $log -Value $out.TrimEnd() -Encoding utf8 }
  return [pscustomobject]@{ Code = $code; Out = $out }
}

try {
  Set-Location -LiteralPath $repo
  Log "================ auto crawl 시작 ================"

  # 1) 크롤 — scripts/ 에서 실행(홈 inspect.py shadow 회피)
  Log "[1/6] 크롤 시작"
  Push-Location (Join-Path $repo "scripts")
  $r = Run-Native "python" @("crawl_contests.py", "--pages", "4")
  Pop-Location
  $rc = $r.Code
  Log "[1/6] crawler exit code = $rc"
  if ($rc -eq 2) { Log "안정성 가드 발동 — 기존 데이터 보존, 갱신 없음 (스킵 종료)"; exit 0 }
  if ($rc -ne 0) { Log "크롤러 비정상 종료(rc=$rc) — 중단"; exit $rc }

  # 2) 출력 파일 sanity (크롤러가 이미 스키마검증 완료)
  Log "[2/6] 출력 파일 점검"
  if (-not (Test-Path -LiteralPath $srcJson)) { Log "출력 파일 없음 — 중단"; exit 3 }
  $size = (Get-Item -LiteralPath $srcJson).Length
  if ($size -lt 500) { Log "출력 파일 비정상 크기($size bytes) — 중단"; exit 3 }
  Log "[2/6] OK ($size bytes)"

  # 3) 루트 /data 동기화 (GH Pages가 읽는 경로)
  Log "[3/6] 루트 /data 동기화"
  Copy-Item -LiteralPath $srcJson -Destination $dstJson -Force

  # 4) 변경 없으면 종료
  Log "[4/6] git 변경 확인"
  $ErrorActionPreference = "Continue"
  $changed = (& git status --short -- "next-app/public/data/contests-extra.json" "data/contests-extra.json" 2>&1 | Out-String).Trim()
  $ErrorActionPreference = "Stop"
  if (-not $changed) { Log "데이터 변경 없음 — 커밋/배포 생략"; exit 0 }

  # 5) 커밋 & 푸시 (GitHub Pages 라이브)
  Log "[5/6] git 커밋·푸시"
  Run-Native "git" @("add", "next-app/public/data/contests-extra.json", "data/contests-extra.json") | Out-Null
  Run-Native "git" @("commit", "-m", "chore(contests): 위비티 기획/아이디어 일일 자동 갱신 (스케줄러)") | Out-Null
  $push = Run-Native "git" @("push", "origin", "main")
  if ($push.Code -ne 0) { Log "[5/6] git push 실패(code=$($push.Code)) — 중단"; exit 5 }
  Log "[5/6] GitHub Pages 푸시 완료"

  # 6) Vercel 미러 배포 + alias — 타임아웃 가드(8분). Vercel 간헐적 hang이
  #    작업 전체를 30분 타임아웃 강제종료(0xC000013A)시키던 버그 차단.
  #    GH Pages가 메인 채널이므로 Vercel은 best-effort(실패/타임아웃=하드락 아님 → exit 0).
  Log "[6/6] Vercel 미러 배포 (8분 타임아웃 가드)"
  $vercelSb = {
    param($repo)
    Set-Location (Join-Path $repo "next-app")
    $dep = (& vercel --prod --yes --scope pointnlines-projects 2>&1 | Out-String)
    $depCode = $LASTEXITCODE
    $m = [regex]::Match($dep, "sogang-aimba7th-[a-z0-9]+-pointnlines-projects\.vercel\.app")
    $aliasOut = ""
    if ($depCode -eq 0 -and $m.Success) {
      $aliasOut = (& vercel alias set $m.Value sogang-aimba7th.vercel.app --scope pointnlines-projects 2>&1 | Out-String)
    }
    [pscustomobject]@{ Code = $depCode; Url = $(if ($m.Success) { $m.Value } else { "" }); Out = ($dep + "`n" + $aliasOut) }
  }
  $job = Start-Job -ScriptBlock $vercelSb -ArgumentList $repo
  if (Wait-Job $job -Timeout 480) {
    $vr = Receive-Job $job; Remove-Job $job -Force
    if ($vr.Out -and $vr.Out.Trim()) { Add-Content -LiteralPath $log -Value $vr.Out.TrimEnd() -Encoding utf8 }
    if ($vr.Code -eq 0 -and $vr.Url) { Log "[6/6] Vercel 미러 갱신 완료 → $($vr.Url)" }
    else { Log "[6/6] Vercel 배포/alias 미완(code=$($vr.Code)) — GH Pages는 갱신됨(미러 stale, 하드락 아님)" }
  } else {
    Stop-Job $job; Remove-Job $job -Force
    Log "[6/6] Vercel 타임아웃(8분 초과) 강제중단 — GH Pages는 갱신됨(미러 stale, 하드락 아님)"
  }

  Log "================ 완료 ================"
  exit 0
}
catch {
  Log "예외 발생: $($_.Exception.Message) @ $($_.InvocationInfo.ScriptLineNumber)줄: $($_.InvocationInfo.Line.Trim())"
  exit 9
}
