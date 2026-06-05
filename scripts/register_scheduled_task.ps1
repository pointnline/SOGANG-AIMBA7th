# =====================================================================
# AIMBA 공모전 일일 자동 크롤 작업을 Windows 작업 스케줄러에 등록한다.
# - 매일 06:00 KST 실행, 놓치면(PC 꺼짐/절전) 가능해질 때 실행(StartWhenAvailable)
# - 배터리에서도 실행, 30분 제한, 현재 사용자 로그온 컨텍스트(PATH·git·vercel 자격 유지)
# 실행: scripts/ 에서  powershell -ExecutionPolicy Bypass -File register_scheduled_task.ps1
# 해제:  Unregister-ScheduledTask -TaskName "AIMBA-Contest-DailyCrawl" -Confirm:$false
# =====================================================================
$ErrorActionPreference = "Stop"
$taskName = "AIMBA-Contest-DailyCrawl"
$runner = "C:\Users\jun16\Desktop\sogang\SOGANG-AIMBA7th\scripts\auto_crawl_deploy.ps1"

$action = New-ScheduledTaskAction -Execute "powershell.exe" `
  -Argument "-NoProfile -NonInteractive -ExecutionPolicy Bypass -File `"$runner`""

$trigger = New-ScheduledTaskTrigger -Daily -At 6:00AM

$settings = New-ScheduledTaskSettingsSet `
  -StartWhenAvailable `
  -DontStopIfGoingOnBatteries `
  -AllowStartIfOnBatteries `
  -ExecutionTimeLimit (New-TimeSpan -Minutes 30) `
  -MultipleInstances IgnoreNew

$principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Limited

# 기존 동일 작업 있으면 교체
if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
  Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger `
  -Settings $settings -Principal $principal `
  -Description "위비티 기획/아이디어 공모전 일일 크롤 → GH Pages 푸시 + Vercel 미러 배포" | Out-Null

Write-Output "등록 완료: $taskName (매일 06:00, StartWhenAvailable)"
Get-ScheduledTask -TaskName $taskName | Select-Object TaskName, State | Format-List
