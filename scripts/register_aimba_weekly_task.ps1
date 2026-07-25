# =====================================================================
# AIMBA 주간 브리핑 무인 발간을 Windows 작업 스케줄러에 등록한다.
# - 매주 토요일 04:00 KST 실행, 놓치면(PC 꺼짐/절전) 가능해질 때 실행(StartWhenAvailable)
# - 배터리에서도 실행, 90분 제한(리서치+빌드+배포 포함), 현재 사용자 로그온 컨텍스트(PATH·git·vercel 자격 유지)
# 실행: scripts/ 에서  powershell -ExecutionPolicy Bypass -File register_aimba_weekly_task.ps1
# 해제:  Unregister-ScheduledTask -TaskName "AIMBA-Weekly-Publish" -Confirm:$false
# =====================================================================
$ErrorActionPreference = "Stop"
$taskName = "AIMBA-Weekly-Publish"
$runner = "C:\Users\jun16\Desktop\sogang\SOGANG-AIMBA7th\scripts\aimba_weekly_runner.ps1"

$action = New-ScheduledTaskAction -Execute "powershell.exe" `
  -Argument "-NoProfile -NonInteractive -ExecutionPolicy Bypass -File `"$runner`""

$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Saturday -At 4:00AM

$settings = New-ScheduledTaskSettingsSet `
  -StartWhenAvailable `
  -DontStopIfGoingOnBatteries `
  -AllowStartIfOnBatteries `
  -ExecutionTimeLimit (New-TimeSpan -Minutes 90) `
  -MultipleInstances IgnoreNew

$principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Limited

# 기존 동일 작업 있으면 교체
if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
  Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger `
  -Settings $settings -Principal $principal `
  -Description "SOGANG AIMBA 7th 주간 브리핑 — /aimba 원샷 자율 발간(수집→작성→검증→빌드→배포→텔레그램), 매주 토 04:00" | Out-Null

Write-Output "등록 완료: $taskName (매주 토요일 04:00, StartWhenAvailable)"
Get-ScheduledTask -TaskName $taskName | Select-Object TaskName, State | Format-List
