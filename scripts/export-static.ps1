$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$nextApp = Join-Path $repoRoot "next-app"
$outDir = Join-Path $nextApp "out"

if (-not (Test-Path -LiteralPath $outDir)) {
  throw "Next export output not found: $outDir. Run from next-app with: npm run build"
}

function Assert-InRepo($path) {
  $parent = Split-Path -Parent $path
  if (-not (Test-Path -LiteralPath $parent)) {
    New-Item -ItemType Directory -Force -Path $parent | Out-Null
  }
  $resolvedParent = Resolve-Path -LiteralPath $parent
  if (-not ($resolvedParent.Path.StartsWith($repoRoot.Path))) {
    throw "Refusing to write outside repo: $path"
  }
}

function Replace-Directory($source, $destination) {
  if (-not (Test-Path -LiteralPath $source)) {
    throw "Required export directory not found: $source"
  }
  Assert-InRepo $destination
  $newPath = "$destination.__new"
  $oldPath = "$destination.__old"
  if (Test-Path -LiteralPath $newPath) {
    Remove-Item -LiteralPath $newPath -Recurse -Force
  }
  if (Test-Path -LiteralPath $oldPath) {
    Remove-Item -LiteralPath $oldPath -Recurse -Force
  }
  Copy-Item -LiteralPath $source -Destination $newPath -Recurse -Force
  if (Test-Path -LiteralPath $destination) {
    Move-Item -LiteralPath $destination -Destination $oldPath -Force
  }
  Move-Item -LiteralPath $newPath -Destination $destination -Force
  if (Test-Path -LiteralPath $oldPath) {
    Remove-Item -LiteralPath $oldPath -Recurse -Force
  }
}

function Replace-File($source, $destination) {
  if (-not (Test-Path -LiteralPath $source)) {
    throw "Required export file not found: $source"
  }
  Assert-InRepo $destination
  $newPath = "$destination.__new"
  Copy-Item -LiteralPath $source -Destination $newPath -Force
  Move-Item -LiteralPath $newPath -Destination $destination -Force
}

$briefHtml = Join-Path $outDir "brief.html"
$museumHtml = Join-Path $outDir "museum.html"
$interviewHtml = Join-Path $outDir "interview.html"
$contestsHtml = Join-Path $outDir "contests.html"

Replace-Directory (Join-Path $outDir "_next") (Join-Path $repoRoot "_next")
Replace-File (Join-Path $outDir "index.html") (Join-Path $repoRoot "index.html")

Replace-File $briefHtml (Join-Path $repoRoot "brief\index.html")
# 날짜별 아카이브(issues\vol_YYYYMMDD.html) 생성은 build-pages.ps1 의 호별 빌드 루프에서 담당한다.

Replace-File $museumHtml (Join-Path $repoRoot "museum\index.html")
Replace-File $museumHtml (Join-Path $repoRoot "issues\museum.html")

Replace-File $interviewHtml (Join-Path $repoRoot "interview\index.html")

Replace-File $contestsHtml (Join-Path $repoRoot "contests\index.html")

Write-Host "Updated GitHub Pages files from next-app export:"
Write-Host " - index.html"
Write-Host " - brief/index.html"
Write-Host " - museum/index.html"
Write-Host " - interview/index.html"
Write-Host " - contests/index.html"
Write-Host " - issues/museum.html"
Write-Host " - _next/"
