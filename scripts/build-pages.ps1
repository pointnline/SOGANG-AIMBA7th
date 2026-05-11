$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$nextApp = Join-Path $repoRoot "next-app"

Push-Location $nextApp
try {
  $env:NEXT_PUBLIC_BASE_PATH = "/SOGANG-AIMBA7th"
  & npm.cmd run build
  & npm.cmd run export:pages
}
finally {
  Pop-Location
}
