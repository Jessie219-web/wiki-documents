---
description: Lipo Rider Pro
title: Lipo Rider Pro
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Lipo_Rider_Pro
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro.jpg)

Power your favourite electronic kit with green energy! The LiPo Rider Pro is an enhancement of Lipo Rider. It supplies heavier load output(1A peak) than Lipo Rider. The LiPo Rider Pro board allows you ride the solar wave to run your favourite 5V device. The LiPo Rider Pro board is the ideal green power solution for your outdoor sensor design. Attach the LiPo Rider Pro board to your sensor board and it can run on solar power forever! It can also be used to charge mobile phone.

The LiPo Rider Pro is extremely affordable and easy to use. No programming is required. Plug it in and it works. The internal charger IC handles all the power flow between the various components.

In case solar power is not sufficient, the mini USB port allows you to charge your lithium battery through USB. It can also be used to program your kit without detaching the LiPo Rider Pro board.

The LiPo Rider Pro can be purchased as a separate board or as a kit (LiPo Rider Pro + Lithium Battery + Solar Panel).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/LiPo-Rider-Pro-p-992.html)

## Features

--------

- Maximum 1A load output
- Battery and Solar panel connector is JST 2.0
- Stable 5V USB power supply regardless of source
- Charge/Recharge algorithms built into chip
- Charge Lithium Polymer Battery through solar power or USB
- Stable supply voltage through either lithium battery or USB
- 2 x USB ports let you program your kit while charging your Lithium battery
- LED indications for battery full or charging states
- Scalable to multiple lithium batteries and large/multiple solar panels through simple end-user modifications
- 4 green LED instruct quantity of electricity of lithium battery

## Application Ideas

-----------------

- Green Power and backup supply for distributed outdoor sensor network
- Charger for Lithium batteries
- Charger for mobile phone

:::caution

1. The LiPo Rider Pro has different connectors from LiPo Rider v1.0, the former is JST 2.0 and latter is JST 2.54.

2. Live exposed electronic components.

3. The board may get hot when supplying large loads.

4. Potential short circuit or electric shock, especially if device gets wet when placed outdoors for solar power collection.
:::

## Dimensions

----------

The dimensions of LiPo Rider Pro is like the [6A Lithium Polymer Battery](https://www.seeedstudio.com/depot/lithium-ion-polymer-battery-pack-6a-p-602.html?cPath=178_183).

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Liporiderprod.jpg)

Specifications
--------------

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
V<sub>in</sub> Solar
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.5V(10s)
</td>
</tr>
<tr align="center">
<td>
I<sub>charge</sub> (R<sub>Iset</sub>=3.9kΩ)
</td>
<td>
400mA
</td>
<td>
500mA
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
I<sub>load</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
1000mA
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

**Pin Instruction and LED Statement**

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
<td>Two situations:</td>
<ul>
<li>Input voltage lower than gate voltage</li>
<li>The input voltage lower than battery voltage</li>
</ul>
</tr>
</tbody>
</table>

**LED Battery Indicator**

The LiPo Rider Pro has four LED battery indicators like the cell phone,and you can see the battery power by just pressing the button K2 like below:
![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo3.jpg)

**LED battery indicator parameter**

| Numbers of indicators lighting up | Amount of electricity |
|-----------------------------------|-----------------------|
| 4                                 | 90~100%               |
| 3                                 | 60~90%                |
| 2                                 | 30~60%                |
| 1                                 | 10~30%                |
| 0                                 | 0~10%                 |

Usage
-----

**Example**

**Outdoor Sensor Device Power Supply**

One important application of the Lipo Rider Pro board is as an affordable power supply for outdoor sensors. The outdoor sensor device will be powered by the lithium battery supplemented by the solar panel. Please note that it is not recommended to run the outdoor sensor ONLY on solar power, as this may vary during the day and may cause the sensor to reset / power down unexpectedly. In this case, the device is running in “USB Mode”.

If a firmware reprogram for the outdoor sensor device is required, simple connect the mini USB port to your PC which will put the device under “Program Mode” as explained above.

Larger/multiple batteries and/or solar panels can be used, but only with end-user modifications.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo-Rider-pro.JPG)

**Charge Lithium Polymer Battery through solar power**

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro1.jpg)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

---

- [CN3065 Datasheet in PDF](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/DSE-CN3065.pdf)
- [Schematic and Layout in Eagle format](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar)
- [Schematic in pdf format](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/LiPo_Rider_Pro_v0.9b.pdf)
- [Get Lipo rider pro to charge Ipod or Iphone](https://forum.seeedstudio.com/viewtopic.php?f=4&t=3575)
- [Lithium Ion polymer Battery pack - 6A](https://www.seeedstudio.com/Lithium-Ion-polymer-Battery-pack-6A-p-602.html)

## Project

**PlantSigfox Monitoring** Retrieving air/soil moisture & temperature and brightness (and RGB rays). It also sends the localization, and so gives weather forecasts.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/plantsigfox-ei2i4/plantsigfox-monitoring-3d66be/embed' width='350'></iframe>

**Step Detection System By A Way With Arduino**
The purpose of the project is to detect the passing of cars and people at the entrance to an orchard and a warning beep inside this house.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/juan-salvador-aleixandre-talens/step-detection-system-by-a-way-with-arduino-bc6f3a/embed' width='350'></iframe>

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
