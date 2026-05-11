$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$nextApp = Join-Path $repoRoot "next-app"
$outDir = Join-Path $nextApp "out"

if (-not (Test-Path -LiteralPath $outDir)) {
  throw "Next export output not found: $outDir. Run from next-app with: npm run build"
}

$targetsToRefresh = @(
  (Join-Path $repoRoot "_next"),
  (Join-Path $repoRoot "brief"),
  (Join-Path $repoRoot "museum"),
  (Join-Path $repoRoot "interview")
)

foreach ($target in $targetsToRefresh) {
  $resolvedParent = Resolve-Path (Split-Path -Parent $target)
  if (-not ($resolvedParent.Path.StartsWith($repoRoot.Path))) {
    throw "Refusing to remove outside repo: $target"
  }
  if (Test-Path -LiteralPath $target) {
    Remove-Item -LiteralPath $target -Recurse -Force
  }
}

Copy-Item -LiteralPath (Join-Path $outDir "_next") -Destination (Join-Path $repoRoot "_next") -Recurse -Force
Copy-Item -LiteralPath (Join-Path $outDir "index.html") -Destination (Join-Path $repoRoot "index.html") -Force

New-Item -ItemType Directory -Force -Path (Join-Path $repoRoot "brief") | Out-Null
$briefHtml = Join-Path $outDir "brief.html"
Copy-Item -LiteralPath $briefHtml -Destination (Join-Path $repoRoot "brief\index.html") -Force
Copy-Item -LiteralPath $briefHtml -Destination (Join-Path $repoRoot "issues\vol_20260504.html") -Force

New-Item -ItemType Directory -Force -Path (Join-Path $repoRoot "museum") | Out-Null
$museumHtml = Join-Path $outDir "museum.html"
Copy-Item -LiteralPath $museumHtml -Destination (Join-Path $repoRoot "museum\index.html") -Force
Copy-Item -LiteralPath $museumHtml -Destination (Join-Path $repoRoot "issues\museum.html") -Force

New-Item -ItemType Directory -Force -Path (Join-Path $repoRoot "interview") | Out-Null
$interviewHtml = Join-Path $outDir "interview.html"
Copy-Item -LiteralPath $interviewHtml -Destination (Join-Path $repoRoot "interview\index.html") -Force

Write-Host "Updated GitHub Pages files from next-app export:"
Write-Host " - index.html"
Write-Host " - brief/index.html"
Write-Host " - museum/index.html"
Write-Host " - interview/index.html"
Write-Host " - issues/vol_20260504.html"
Write-Host " - issues/museum.html"
Write-Host " - _next/"
