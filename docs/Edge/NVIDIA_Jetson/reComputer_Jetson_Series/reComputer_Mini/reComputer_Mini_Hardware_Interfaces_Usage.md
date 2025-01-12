---
description: This article covers the hardware and interfaces of the reComputer Mini J40 series, including power, display, M.2 slots for Wi-Fi and SSD, USB ports, RTC, fan management, and so on. It provides setup instructions and performance testing tips to help users expand their projects.
title: reComputer Mini Hardware and Interfaces Usage
tags:
  - reComputer
  - reComputer mini
  - embedded computer
  - robots
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /recomputer_jetson_mini_hardware_interfaces_usage
last_update:
  date: 12/16/2024
  author: Youjiang
---

This wiki introduces the various different hardware and interfaces on the reComputer mini J40 series and how to use them to expand your project ideas.

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"/>
</div>


## Carrier Board

### Power 

reComputer Mini is equipped with a **9-60V (XT30)** power interface, compatible with a wide voltage input range (9V to 60V), making it suitable for various power supply environments.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/power.png"/>  
</div>


### Display

The product is equipped with a Type-C port featuring Host + DP (DisplayPort) functionality, which means it not only supports data transfer but also allows you to connect a monitor via this port, enabling high-quality video output.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/display.png"/>  
</div>


### M.2 Key E for WIFI and Bluetooth

The reComputer Mini features a M.2 Key E interface, through which you can expand the device's Bluetooth and Wi-Fi capabilities.

We recommend using the Intel Dual Band RTL8822CE Wireless NIC.

#### Hardware Connection

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/wifi.png"/>
</div>

#### Usage Instruction

After installing the Wi-Fi module and powering on the device, we can configure the device's Wi-Fi and Bluetooth settings.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Of course, we can also check the device's operating status using the following commands.
```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

```bash
bluetoothctl
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/bluetoothctl.png"/>
</div>

### M.2 Key M for SSD

M.2 Key M is an interface designed for high-speed solid-state drives (SSDs), providing ultra-fast data transfer speeds, ideal for high-performance applications.

Out of the box, reComputer Industrial includes a 128GB industrial-grade SSD connected to the M.2 Key M slot with x4 PCIe Gen3, which is pre-installed with JetPack system.

#### Hardware Connection

If you want to remove the included SSD and install a new one, you need to ensure that your SSD meets the following two conditions:

- Support the **M.2 Key M slot with x4 PCIe Gen3** interface.
-  Conform to the **2242** size specification.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/ssd.png"/>
</div>

#### Usage Instruction

Open the terminal in Jetson device and enter the following command to test the SSD's read and write speed.

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
Please run `sudo rm tempfile` command to delete the cache files after the test is complete.
:::

### USB

The reComputer Mini carrier board has a total of 4 USB ports: 2 USB 3.2 Type-A ports, 1 USB 2.0 Micro-B port for flash, and 1 USB 2.0 GH1.25 port.

### Usage Instruction

We can enter `watch -n 1 lsusb -tv` in the Jetson terminal to probe the USB ports. Once a USB device is connected, the detailed information about that port will be displayed here.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Additionally, you can refer to [M.2 Key M](#m2-key-m-for-ssd) to test the read and write speed of USB storage devices.

:::note
Please note, before testing, use the `cd` command to navigate to the folder where the USB storage device is mounted.
:::

:::info
For the usage of the USB Micro-B interface, please refer to [this wiki](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/) for a detailed tutorial.
:::

<!-- ### UART -->

<!-- ### Button and Lights -->

### RTC

The reComputer Mini features RTC interfaces, providing accurate timekeeping even when the system is powered off.

#### Connection Connection

Connect a 3V CR2302 coin cell battery with JST connector to the 2-pin 1.25mm JST socket on the board.

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/rtc.png"/>
</div>

<!-- #### Usage Instruction -->


### FAN

The onboard fan interface of the reComputer Mini is managed by the nvfancontrol daemon, which adaptively adjusts the fan speed based on the operating status of the Jetson module. We can configure the working mode of the daemon through its configuration file `/etc/nvfancontrol.conf`.

:::note
For more information, please check [here](https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Additionally, we can manually set the fan speed using the **jtop** tool.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>


<!-- ### Expansion Connector -->


<!-- ## Expansion Board -->

<!-- ### Network -->

<!-- ### USB -->

<!-- ### CAN -->

<!-- ### I2C -->

<!-- ### SPI -->


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
