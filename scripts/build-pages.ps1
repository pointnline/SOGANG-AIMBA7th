$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$nextApp = Join-Path $repoRoot "next-app"

# 신규 디자인 호 목록 — 최신호가 맨 앞(현재호/홈에 노출). 새 호 추가 시 이 배열만 갱신한다.
# Vol  : data.ts ISSUE_CONTENTS 의 vol 값과 일치해야 함
# Iso  : 발간일(YYYYMMDD) → issues/vol_<Iso>.html
$issues = @(
  @{ Vol = 12; Iso = "20260616" },
  @{ Vol = 11; Iso = "20260608" },
  @{ Vol = 10; Iso = "20260603" },
  @{ Vol = 9; Iso = "20260601" }
)

$latest = $issues[0]

function Copy-BriefArchive($iso) {
  $src = Join-Path $nextApp "out\brief.html"
  if (-not (Test-Path -LiteralPath $src)) {
    throw "Brief export not found: $src"
  }
  $dest = Join-Path $repoRoot "issues\vol_$iso.html"
  Copy-Item -LiteralPath $src -Destination $dest -Force
  Write-Host " - issues/vol_$iso.html (Vol 아카이브)"
}

Push-Location $nextApp
try {
  $env:NEXT_PUBLIC_BASE_PATH = "/SOGANG-AIMBA7th"

  # 1) 최신호 = 현재호: 전체 정적 표면(index/brief/museum/interview/contests/_next) 생성
  Write-Host "==> Building current issue (Vol $($latest.Vol)) + full site export"
  $env:NEXT_PUBLIC_ISSUE_VOL = "$($latest.Vol)"
  & npm.cmd run build
  & npm.cmd run export:pages
  Copy-BriefArchive $latest.Iso

  # sitemap.xml — Next 가 out/ 에 생성한 것을 repo 루트로 복사
  $sitemapSrc = Join-Path $nextApp "out\sitemap.xml"
  if (Test-Path -LiteralPath $sitemapSrc) {
    Copy-Item -LiteralPath $sitemapSrc -Destination (Join-Path $repoRoot "sitemap.xml") -Force
    Write-Host " - sitemap.xml"
  }

  # RSS feed.xml — issues/manifest.json 기반 생성
  & node (Join-Path $PSScriptRoot "gen-feed.mjs")
  Write-Host " - feed.xml (RSS)"

  # 2) 과거 호: brief 페이지만 날짜별 아카이브로 생성
  foreach ($issue in $issues[1..($issues.Count - 1)]) {
    Write-Host "==> Building archive issue (Vol $($issue.Vol))"
    $env:NEXT_PUBLIC_ISSUE_VOL = "$($issue.Vol)"
    & npm.cmd run build
    Copy-BriefArchive $issue.Iso
  }
}
finally {
  Remove-Item Env:\NEXT_PUBLIC_ISSUE_VOL -ErrorAction SilentlyContinue
  Pop-Location
}

Write-Host "All issues built. Current = Vol $($latest.Vol)."
