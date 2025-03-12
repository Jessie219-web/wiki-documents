---
description: reCamera OS version deployment and rollback guideline
title: OS Upgrade or Revert Guideline
keywords:
  - Edge
  - reCamera
  - recamera
  - Operating system
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /os_upgrade_guideline
last_update:
  date: 2/11/2024
  author: Parker Hu
---

# OS Update/Upgrade Guideline with Web
Connect the recamera to your computer using the type-c cable, and go to `http://192.168.42.1/#/system` in your computer's browser to configure your device's network. Make sure reCamera has access to the internet.

Click `System` Configuration, and if a new firmware is released, click `Apply` to update/upgrade the device system.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>
Wait for the progress bar to complete.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>
Click `Restart` to complete the system update/upgrade. Refresh the browser around 30 seconds to reconnect to the device.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>
The system will automatically check if there is a new version of firmware that can be updated/upgrade.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## OS Version management by command

### Device management by OTA
#### Update/Upgrade to latest OTA version
You can check out the latest version of the [reCamera OS here.](https://github.com/Seeed-Studio/reCamera-OS)

Manually update/upgrade the latest OTA firmware:
```bash
#Upgrade to the latest firmware version
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

/mnt/system/upgrade.sh start
```
or
#### Update/Upgrade or rollback to any specific OTA version
If you have a speicific version you would like to deploy, you can use the command below.
```bash
#E.g. install 0.1.4 as an example
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

/mnt/system/upgrade.sh start
```
If you are developing OS and you have your own branch in github, you can also update/upgrade the system version with your branch link.
```bash
/mnt/system/upgrade.sh latest https://github.com/your-user-name/reCamera-OS/releases/your-version-file-address

/mnt/system/upgrade.sh start
```

### Device Management by Local Package
You can also update/upgrade the firmware manually using the local ota package. The ota firmwares can be [downloaded here](https://github.com/Seeed-Studio/reCamera-OS/releases/). Use tools like scp to 

```bash
/mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```
:::note
If you don't have enough permissions to dump files into recamera, you can can change system files to be readable or writable by typing `rootfs_rw on/off`.
:::

Manually restore factory Settings.

```bash
/mnt/system/upgrade.sh recovery
```

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>