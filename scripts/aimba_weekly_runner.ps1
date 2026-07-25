# =====================================================================
# AIMBA 주간 브리핑 — 무인 자동 발간 러너 (Windows 작업 스케줄러용)
# ---------------------------------------------------------------------
# 매주 토요일 04:00 KST 실행. 헤드리스 claude로 `/aimba` 스킬을 그대로 호출한다.
# 파이프라인 자체(수집→작성→검증→빌드→배포→텔레그램)는 /aimba 스킬 정의를 따른다.
# 하드락(팩트체크 미달·빌드 실패·push 실패)은 스킬 안에서 처리되며, 이 러너는
# 그 결과를 로그에 남기는 얇은 트리거일 뿐이다.
# 로그: scripts/logs/aimba_weekly_*.log
# =====================================================================
$ErrorActionPreference = "Continue"   # claude.exe 의 정상 진행 stderr를 에러로 오인하지 않도록
$repo    = "C:\Users\jun16\Desktop\sogang\SOGANG-AIMBA7th"
$claude  = "C:\Users\jun16\.local\bin\claude.exe"
$logDir  = Join-Path $repo "scripts\logs"
if (-not (Test-Path -LiteralPath $logDir)) { New-Item -ItemType Directory -Force -Path $logDir | Out-Null }
$stamp   = Get-Date -Format 'yyyy-MM-dd_HHmm'
$log     = Join-Path $logDir "aimba_weekly_$stamp.log"

function Log($m) {
  $ts = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
  Add-Content -LiteralPath $log -Value "[$ts] $m" -Encoding utf8
}

Set-Location -LiteralPath $repo
Log "================ AIMBA 주간 발간 무인 실행 시작 ================"

if (-not (Test-Path -LiteralPath $claude)) {
  Log "claude.exe 없음: $claude — 중단"
  exit 9
}

$out = (& $claude -p "/aimba" --dangerously-skip-permissions *>&1 | Out-String)
$code = $LASTEXITCODE
if ($out -and $out.Trim()) { Add-Content -LiteralPath $log -Value $out.TrimEnd() -Encoding utf8 }
Log "================ 종료 (exit=$code) ================"
exit $code
