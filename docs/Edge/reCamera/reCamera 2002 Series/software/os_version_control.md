---
description: Version control such as upgrade or rollback
title: OS Version control
keywords:
  - Edge
  - reCamera
  - recamera
  - Operating system
  - version upgrade
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.webp
slug: /recamera_os_version_control
sidebar_position: 1
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---

# OS Update/Upgrade Guideline with Web
Connect the recamera to your computer using the type-c cable, and go to `http://192.168.42.1/#/system` in your computer's browser, or replace the IP address if you are visiting the device via network. Before upgrading, make sure reCamera has **access to the internet** by checking `ip_address/#/network`.

Click `System` Configuration, and if a new firmware is released, click `Apply` to update/upgrade the device system. The button text would be "Check" if there is no new firware auto detected.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>

Wait for the progress bar to complete.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>

Click `Restart` to complete the system update/upgrade. **Refresh the browser** around 30 seconds to reconnect to the device.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>

The system will automatically check if there is a new version of firmware that can be updated/upgrade.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

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

### Device management by local package
You can also update/upgrade the firmware manually using the local ota package. The ota firmwares can be [downloaded here](https://github.com/Seeed-Studio/reCamera-OS/releases/). Use tools like scp to transfer the files to reCamera.
```bash
scp sg2002_reCamera_0.1.3_emmc_ota.zip recamera@ip_address
```
Then use the bash to deploy.
```bash
/mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```
:::note
If you don't have enough permissions to dump files into recamera, you can can change system files to be readable or writable by typing `rootfs_rw on/off`.
:::

### Manually restore factory Settings.
This command can restore reCamera to facotry settings. If you use this, all of your user data will be removed such as Node-RED flow and local storage.
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