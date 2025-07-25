---
description: Arch Pro
title: Arch Pro
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_Pro
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro.jpg)

Arch Pro is an mbed enabled development board for rapid prototyping. It is a variant of mbed LPC1768 with built-in Ethernet, USB Host/Device, Grove connectors and Arduino form factor. With a variety of Shield and Grove modules and lots of software libraries for Arch Pro, you can implement Ethernet, USB Host/Device and NFC applications rapidly and easily.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Pro-p-1677.html)

Features
--------

-   mbed enabled
    -   Online development tools
    -   Easy to use C/C++ SDK
    -   Handy libraries

-   Arduino form factor with two Grove connectors
-   Drag-n-drop programming
-   Debug using CMSIS-DAP
-   USB virtual serial for communication

Specifications
-------------

| Parameter       | Value/Availability                            |
|-----------------|-----------------------------------------------|
| MCU             | NXP LPC1768 variant (with ARM Cortex-M3 core) |
| Clock Speed     | 100 MHz                                       |
| Flash           | 512 KB                                        |
| RAM             | 64KB                                          |
| UART            | 4 No.s                                        |
| I2C             | 3 No.s                                        |
| SPI             | 2 No.s                                        |
| Ethernet        | Yes                                           |
| USB Host/Device | Yes                                           |

 Platforms Supported
-----------------

-   mbed.

Application Ideas
-----------------

-   [Ethernet](https://mbed.org/handbook/Ethernet-Interface)
-   [USB Host](https://mbed.org/handbook/USBHost) or [Device](https://mbed.org/handbook/USBDevice)
-   [NFC](https://mbed.org/users/yihui/notebook/rapid-prototyping-with-nfc/)
-   [RTOS](https://mbed.org/handbook/RTOS)
-   [Lua](http://mbed.org/users/jsnyder/notebook/elua-preliminary-port/)

Hardware Overview
-----------------

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_v1_pinout.png)

There is [a monochrome version](https://seeed-studio.github.io/Artwork/images/arch_pro_v1_pinout_mono.png) for you to print.

<div className="admonition note">
  <p className="admonition-title">Note</p>
  <p>The Arch Pro silkscreen for the Grove connectors is labeled 3V3 on top of the PCB and 5V on the underside. Grove Vcc is by default 3V3, but can be changed to 5V by moving R50 to R51. SPI Vcc pin can be set by populating R52 (3V3) or R53 (5V) with 0R - neither populated by default.</p>
</div>


Getting Started
---------------

As the Arch Pro is compatible with mbed LPC1768, one can use the mbed C/C++ SDK, libraries and online development tools to rapidly build a prototype.
Here we show how to light up an LED. This can be done in less than 10 minutes.

Step one： Sign up for an mbed account.

-   Open [mbed.org](https://developer.mbed.org/), click Login or signup. If you have already registered, please click login directly.

Step two： Enter online development tools.

-   Click Compiler， it opens the online mbed IDE. Before programming, it is better to read the mbed Complier [Getting started](https://developer.mbed.org/getting-started/).

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Open_Compiler.jpg)

Step three：Edit code.

-   Click "New" in the left top corner to create a Program and edit a blink program in main.cpp file.

```
#include "mbed.h"
 
DigitalOut  led1(LED1);
 
int main() {
    while(1) {
        led1 = !led1; 
        wait(0.5); 
    }
}
```

Step four： Add a device.

-   Click ”No device selected” in the top right corner, then click ”Add a device” button in the bottom left as seen in the picture below.

<div className="admonition note">
  <p className="admonition-title">Note</p>
  If you have already used an mbed device, it will be seen in the top right corner instead of ”No device selected”.
</div>


![](https://files.seeedstudio.com/wiki/Arch_Pro/img/选择设备.jpg)

-   A pop-up page appears with a list of devices as shown below. Select ”mbed LPC1768”.

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/选择设备1.jpg)

-   Enter mbed LPC1768 page and click ”Add to mbed Compiler”. Now you have successfully added Mbed LPU1768. Return to mbed compiler page and click ”No device selected”. After you click "LPC1768" in the bottom left corner, a screen appears as shown below.

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_add_platform.png)

-   You can see the selected board in mbed online compiler after clicking ”Select Platform”.

Step five： Compile, download.

-   Click "Compile". On successful compilation, the mbed IDE generates a bin file. Save the bin file on your PC.

Step six： Update firmware.

-   Connect the USB interface (next to 'BUTTON') of Arch Pro to your PC using a USB Micro B cable; It automatically appears as a USB device named MBED.
-   Copy the generated bin file to MBED device (on your PC). Now the USB device disappears and reappears.
-   Press BUTTON of Arch Pro, you will see an LED flashing.

Debug
-----

To enable SWD debug or to get debug message through USB Virtual serial, please install [the driver from mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

Update or Restore Firmware
--------------------------

The latest firmware version for the Arch Pro is v0221 built on Jan 28 2015. To check your firmware version and build date, open the MBED.HTM or DETAILS.TXT of your MBED disk in a text editor.

-   [Firmware v221 2015-01-28 for Arch Pro](https://developer.mbed.org/media/uploads/yihui/lpc11u35_lpc1768_if_mbed_20150128.bin) Fix Mac OS X 10.10 Yosemite read only file system bug
-   [Firmware v0203 2014-09-02 for Arch Pro](https://github.com/xiongyihui/CMSIS-DAP/raw/arch_pro/interface/mdk/lpc11u35/lpc11u35_lpc1768_if_mbed_bootloader.bin)

To update:

-   A Windows or Linux computer is needed.
-   Download the latest firmware.
-   Press and hold the Arch Pro's BUTTON and power it ON.
-   A disk named MBED LOADER will appear.
-   Drag-n-drop the downloaded firmware into the disk.

<div class="admonition note">
<p class="admonition-title">Notes</p>
<p>LocalFileSystem does not work: As the Arch Pro does not have external flash to store files, the LocalFileSystem is not available for this board.</p>
<p>P0_27 & P0_28 do not work with DigitalOut: P0_28 & P0_27 are open-drain digital I/O for compatible with I2C. External pull-up resistors are needed to provide output functionality.</p>
<p>USB Serial Communication: In Windows, install the mbed Windows serial port driver to use USB Serial Communication. Have a look at <a href="https://developer.mbed.org/handbook/Windows-serial-configuration">Windows Serial Configuration</a></p>
</div>


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Resources
---------

-   [Arch Pro V1.0 Schematic PDF](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0_Schematic.pdf)
-   [Arch Pro V1.0 EAGLE Files](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip)
-   [LPC1768 datasheet](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC1769_68_67_66_65_64_63.pdf)
-   [LPC17xx User Manual](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC17xxUserManual.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_Pro -->


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
