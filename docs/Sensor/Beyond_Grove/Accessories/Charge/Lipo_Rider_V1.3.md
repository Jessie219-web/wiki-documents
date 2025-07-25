---
description: Lipo Rider V1.3
title: Lipo Rider V1.3
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Lipo_Rider_V1.3
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3.jpg)

Power your favourite electronic kit with green energy! The Lipo Rider board allows you ride the solar wave to run your favourite 5V device. The Lipo Rider board is the ideal green power solution for your outdoor sensor design. Attach the Lipo Rider board to your sensor board and it can run on solar power forever!

The LipoRider is extremely affordable and easy to use. No programming is required. Plug it in and it works. The internal charger IC handles all the power flow between the various components.

In case solar power is not sufficient, the microUSB port allows you to charge your lithium battery through USB. It can also be used to program your kit without detaching the Lipo Rider board.

The Lipo Rider can be purchased as a separate board or as a kit (Lipo Rider + Lithium Battery + Solar Panel).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Lipo-Rider-v1.3-p-2403.html)

Features
--------

- Jst 2.0 connector
- Stable 5V USB power supply regardless of source
- Charge/Recharge algorithms built into chip
- Charge Lithium Polymer Battery through solar power or USB
- Stable supply voltage through either lithium battery or USB
- 2 x USB ports let you program your kit while charging your Lithium battery
- LED indications for battery full or charging states
- Simple design means extremely affordable
- Scalable to multiple lithium batteries and large/multiple solar panels through simple end-user modifications

Application Ideas
-----------------

- Green Power and backup supply for distributed outdoor sensor network
- Charger for Lithium batteries

:::caution

1. Live exposed electronic components.
2. The board may get hot when supplying large loads.
3. Potential short circuit or electric shock, especially if device gets wet when placed outdoors for solar power collection.
:::

Hardware Overview
-----------------

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-rider-blockdiagram.JPG)

Specifications
--------------

- Small Footprint – Dimensions = L42 × W34 × D6.8
- 900mA maximum charging current for Lithium battery
- 600mA maximum supply current from Lithium battery
- Power diodes to prevent back feed from USB device into Lipo battery

### Key Specifications

<table border="1">
<tr>
<th>
Items
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
</tr>
<tr align="center">
<td width="400">
U<sub>in</sub> Solar
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.0V
</td>
</tr>
<tr align="center">
<td>
I<sub>charge</sub> (R<sub>Iset</sub>=2.0kΩ)
</td>
<td>
700mA
</td>
<td>
800mA
</td>
<td>
900mA
</td>
</tr>
<tr align="center">
<td>
I<sub>supply</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
V<sub>batt</sub>(R<sub>x</sub>=0Ω)
</td>
<td colspan="3" rowspan="1">
4.2V
</td>
</tr>
<tr align="center">
<td>
V<sub>source USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>destination USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

Pin definition and Rating
-------------------------

### Pin Instruction and LED Statement

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>CH pin level (Red LED state)</th>
<th>OK pin level (Green LED state)</th>
<th>Statements</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Low level (ON)</td>
<td>High level (OFF)</td>
<td>Charging</td>
</tr>
<tr class="even">
<td>High level (OFF)</td>
<td>Low level (last ON)</td>
<td>Complete</td>
</tr>
<tr class="odd">
<td>Pulse signal (Flash)</td>
<td>Pulse signal (ON)</td>
<td>The battery does not exist</td>
</tr>
<tr class="even">
<td>High level (OFF)</td>
<td>High level (OFF)</td>
<td>
Two situations:
<ul>
<li>Input voltage lower than gate voltage</li>
<li>The input voltage lower than battery voltage</li>
</ul>
</td>
</tr>
</tbody>
</table>

#### Hardware Components

**Solar Panel**

The solar panel is connectedto the board via the lower JST connector. Please note that the Solar Charger IC only accepts input voltage inside the 4.8-6.0V range. If the charging LED is not on, it is possibly due to:

1. Lithium Battery Full
2. Solar Panel voltage outside of range (most likely due to insufficient solar power).

In the second case, re-position your solar panel to accept more sunlight if possible. None of the above conditions will prevent the Lipo Rider from providing a steady 5V supply to the USB, unless the battery is flat.

*Solar Panel Equations*

Solar Panel Output Power = Output current × Supply Voltage

e.g. 1W = Iout× 5V

Iout = 200mA

Therefore, charging for 1 hour will give 200mAh, ignoring losses. For a 1000mAH battery, charging from empty to full will take approximately 5 hours under ideal conditions.

**Lithium Battery**

The name Lipo Rider suggest that a Lithium Polymer to be used. However, the chemistry of a lithium polymer and a lithium ion battery is sufficient similar for the two battery types to be interchangeably used. In case more than one battery is to be used, connect them in parallel instead of in series, as the charger IC supplies 4.2V.

**Slide switch**

The slide switch controls the source of the USB 5V power. ON – Charge enabled from lithium battery and/or solar OFF – Charge disabled from lithium battery and/or solar

**Source USB Port**

The source USB port is a **micro-USB** port which is used as a normal USB port. The source USB port can be used to charge the lithium battery or connected to destination device via the destination USB port.

**Destination USB port**

The destination USB port is where the destination device is to be connected. Power to the destination device will be supplied by the Lipo Rider board. The supply will be either from solar panel, lithium battery or source USB port.

#### Power Flow Directions under Different connection scenarios

Due to the huge number of combinations, I have only included only the main scenarios:

**Standalone Mode**

Solar Power charges lithium battery.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-standalone.JPG)

**USB Mode**

Solar Power charges lithium battery. Lithium battery supplies destination USB device.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-usb.JPG)

**Program Mode**

Source USB will charge lithium battery and power destination USB device. Data connection will be enabled between source and destination USB devices.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-program.JPG)

### Example

#### Outdoor Sensor Device Power Supply

One important application of the Lipo Rider board is as an affordable power supply for outdoor sensors. The outdoor sensor device will be powered by the lithium battery supplemented by the solar panel. Please note that it is not recommended to run the outdoor sensor ONLY on solar power, as this may vary during the day and may cause the sensor to reset / power down unexpectedly. In this case, the device is running in “USB Mode”.

If a firmware reprogram for the outdoor sensor device is required, simple connect the micro USB port to your PC which will put the device under “Program Mode” as explained above.

Larger/multiple batteries and/or solar panels can be used, but only with end-user modifications.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3_example.jpg)

**Lipo Rider powering an Arduino Duemilanove (not strictly an outdoor sensor in this case as I have not connected any sensor and it is not outdoor, but you get the point )**

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Li-Po Rider v1.3 Schematic and Layout in Eagle format](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Lipo_Rider_V1.3 -->

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
