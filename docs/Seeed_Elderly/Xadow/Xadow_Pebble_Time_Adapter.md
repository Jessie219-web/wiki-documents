---
description: Xadow - Pebble Time Adapter
title: Xadow - Pebble Time Adapter
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Pebble_Time_Adapter
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_wiki.png)

The introduction of RePhone (Xadow) modules makes your smart watch even smarter. Based on the [new smart accessory port on the back of Pebble Time](http://developer.getpebble.com/guides/hardware/), we integrate the slim and small Rephone modules – Xadow GPS v2 and Xadow NFC v2, into Pebble’s existing ecosystem, to help improve its capability from the perspective of built-in electronics. Xadow Pebble Time Adapter enables the RePhone(Xadow) modules to talk to the Pebble Time via the Smartstrap interface using One-wire serial protocol.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html)

Specifications
--------------

The ‘GND’ and ‘PWR’on the back frame means you can charge your Pebble Time without taking the shell off.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Pebble_base_2.png)

Hardware Overview
-----------------

### Assembling process

In daily use the modules are evenly placed at each side of the watch, and interconnected with FPC cables. The connections between the module and the adapter are specially designed to be an extendable form so that unexpected connection pull-off may be avoided. The charging ports of Pebble Time are still accessible on the back of adapter for daily charges of watch.

A schematic drawing of the assembling process of the RePhone Strap Kit for Pebble Time is given below

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_assembly3.png)

Download the Xadow APP for Pebble Time
--------------------------------------

You can follow the instructions to download the Xadow APP for Pebble Time, access the GPS information and Tag ID on your Pebble Time.

The Demo App can be downloaded from [pebbleapp_jack.pbw 下载地址](https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw). You can download it from your smart phone or send it from your PC to smart phone. Then select to open it with "Pebble Time" App in your phone. You will have an option to install the demo App into your Pebble Time.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_APP_UI.png)

Programming Guide
-----------------

### Talking to the Adapter

The firmware of the adapter implements the protocol described on pebble's official documentation: [Pebble Smartstrap Protocol](http://developer.getpebble.com/guides/hardware/smartstrap-protocol/)

So the resources which can be called from the watchapp side are as following:

<table>
<thead>
<tr class="header">
<th>Service</th>
<th>Attribute</th>
<th>R/W</th>
<th>Data Type</th>
<th>Data</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0x0 Raw Data</td>
<td>0x0 Raw Data</td>
<td>RW</td>
<td>uint8 *buffer</td>
<td>No handler in adapter side, leave the expandability for adapter firmware programmer</td>
</tr>
<tr class="even">
<td>0x2003 Battery Service</td>
<td>0x1001 Get voltage of the battery</td>
<td>R</td>
<td>uint16</td>
<td>The voltage of the battery for strap in Volt with a precision of 1/100. For example, the voltage is 3.70V, which would be specified as 370.</td>
</tr>
<tr class="odd">
<td>0x2003 Battery Service</td>
<td>0x1002 Enable or disable charging pebble with the battery of strap</td>
<td>RW</td>
<td>uint8</td>
<td>0: Don't charge pebble. 1: Charge pebble.</td>
</tr>
<tr class="even">
<td>0x2001 Location and Navigation Service</td>
<td>0x0001 Location</td>
<td>R</td>
<td>sint32[2]</td>
<td>The current longitude and latitude in degrees with a precision of 1/10^7. The latitude comes before the longitude in the data. For example, Pebble HQ is at (37.4400662, -122.1583808), which would be specified as {374400662, -1221583808}.</td>
</tr>
<tr class="odd">
<td>0x2001 Location and Navigation Service</td>
<td>0x0003 Speed</td>
<td>R</td>
<td>uint16</td>
<td>The current speed in meters per second with a precision of 1/100. For example, 1.5 m/s would be specified as 150.</td>
</tr>
<tr class="even">
<td>0x2001 Location and Navigation Service</td>
<td>0x1001 Altitude</td>
<td>R</td>
<td>uint16</td>
<td>The current altitude in meters with a precision of 1/100. For example, 100m would be specified as 10000.</td>
</tr>
<tr class="odd">
<td>0x2001 Location and Navigation Service</td>
<td>0x0101 GPS Satellites</td>
<td>R</td>
<td>uint8</td>
<td>The number of GPS satellites (typically reported via NMEA. Note that this number is for satellites in view.</td>
</tr>
<tr class="even">
<td>0x2001 Location and Navigation Service</td>
<td>0x0102 GPS Fix Quality</td>
<td>R</td>
<td>uint8</td>
<td>The quality of the GPS fix (reported via NMEA). The possible values are listed in the <a href="http://www.gpsinformation.org/dale/nmea.htm#GGA">NMEA specification</a>.</td>
</tr>
<tr class="odd">
<td>0x1E01 NFC Service</td>
<td>0x1001 Get UID of a NFC tag</td>
<td>R</td>
<td>uint8 *</td>
<td>The UID will be returned with variable length which can be indicated in the SmartstrapReadHandler with parameter length.
<strong>This attribute can be notified in SmartstrapNotifyHandler.</strong></td>
</tr>
<tr class="even">
<td>0x1E01 NFC Service</td>
<td>0x1002 Read NDEF Data</td>
<td>R</td>
<td>uint8 *</td>
<td>The NDEF data will be returned with variable length which can be indicated in the SmartstrapReadHandler with parameter length.</td>
</tr>
<tr class="odd">
<td>0x1E01 NFC Service</td>
<td>0x1003 Write NDEF Data</td>
<td>W</td>
<td>uint8 *</td>
<td>Write a uint8 buffer into NFC tag</td>
</tr>
<tr class="even">
<td>0x1E01 NFC Service</td>
<td>0x1004 Erase NDEF Data</td>
<td>W</td>
<td>any type</td>
<td>Write any content or empty to trigger the erasing.</td>
</tr>
</tbody>
</table>

The source code of the demo pebble app can be downloaded at github: [Xadow_Strap Repository](https://github.com/Seeed-Studio/Xadow_Strap)

This app is only for demonstration of partial attribute call, please feel free to imagine your own fantastic pebble app based on the ability of GPS, NFC and more on.

### Programming the Adapter

The adapter is built with LPC11U35 and running mbed software inside. The initial firmware is located at mbed.org. Please take a look at [Xadow Smartstrap for Pebble](https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/)

The eagle schematic of the adapter can be downloaded [here:](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)

After building the firmware binary, you can follow the steps below to flash the binary into the adapter.

1) Hacking a USB Cable and solder the wires to the soldering pads accordingly.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Hack_USB_cable-03.png)

2) Make sure the battery disconnected and plug the USB into PC.

3) Short the "ISP" and "GND" pins.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/ShortISP_GND.PNG)

4) Plug the battery on to power on the adapter

5) There will be a usb drive at your PC, open it and delete anything inside the disk, then copy the firmware binary into the disk.

6) Power off then on, the firmware is updated.

RePhone Community
-----------------

[![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the RePhone Community.

Now join us in the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)! Together we seek answers, make interesting stuff, care about each other, and share our experiences.


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Resources
---------

- [Xadow Pebble Time Adapter eagle files](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)
- [Frequently Asked Questions on RePhone (FAQs)](https://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter -->

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
