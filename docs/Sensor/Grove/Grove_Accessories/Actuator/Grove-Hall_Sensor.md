---
description: Grove - Hall Sensor
title: Grove - Hall Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Hall_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Hall Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Hall-Sensor-p-965.html
oldwikiname: Grove_-_Hall_Sensor
prodimagename: Grove-Hall_Sensor_New.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/hall sensor.jpg
surveyurl: https://www.research.net/r/Grove-Hall_Sensor
sku: 101020046
tags: grove_digital, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New.jpg)

The Hall sensor is based on Hall Effect, which is the production of a voltage difference across an electrical conductor, transverse to an electric current in the conductor and a magnetic field perpendicular to the current. There is a continuous-time switch on this Grove. The output of these devices switches low (turns on) when a magnetic field (south polarity) perpendicular to the Hall sensor exceeds the operate point threshold BOP, and it switches high (turn off) when the magnetic field disappears. The twig can be used to measure RPM.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)

## Version Tracker

| Revision | Descriptions           | Release    |
|----------|------------------------|------------|
| Grove - Hall Sensor v0.9b    | Initial public release | 3,Oct,2011 |

## Features

- Grove Compatible Interface
- 400ns transition period for rise and fall.
- Continuous-time hall effect sensor
- Reverse battery protection

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specifications

| Item                  | Min | Typical | Max | Unit |
|-----------------------|-----|---------|-----|------|
| Supply Voltage        | 3.8 | 5.0     | 24  | V    |
| Supply Current        | 4.1 | -       | 24  | mA   |
| Operating Temperature | -40 | -       | 85  | ºC   |

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Application Ideas

- RPM meter.
- Simple dc motor.

## Getting Started

:::note
If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Demonstration

The Hall Sensor is used by utilizing the external interrupts available on the arduino/seeeduino. In this example we are using interrupt 0, found on digital pin 2. For other interrupts, see the [attachInterrupt()](https://arduino.cc/en/Reference/AttachInterrupt).

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove - Hall Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New%20_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)|

- **Step 2.** Connect Grove - Hall Sensor to port D2 of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

:::note
If we don't have Grove Base Shield, We also can directly connect Grove - Hall Sensor to Seeeduino as below.
:::

| Seeeduino       | Grove - Hall Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

#### Software

- **Step 1.**  Download the [Hall Sensor Code](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **Step 2.**  Open one of two code. For example Demo **MagnetControlLED**

- **Step 3.**  Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c
/****************************************************************************/ 
// Function: When a magnet whose south pole is facing up is approaching to 
//     the onboard sensor, the LED will be turned on.Otherwise, the 
//     LED will be turned off.
// Hardware: Grove - Hall Sensor, Grove - LED
// Arduino IDE: Arduino-1.0
// Author:  FrankieChu  
// Date:   Jan 20,2013
// Version: v1.0
// by www.seeedstudio.com
//
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
//
/*macro definitions of magnetic pin and LED pin*/
#define HALL_SENSOR 2
#define LED 4//the Grove - LED is connected to D4 of Arduino

void setup()
{
  pinsInit();
}
 
void loop() 
{
 if(isNearMagnet())//if the hall sensor is near the magnet?
 {
  turnOnLED();
 }
 else
 {
  turnOffLED();
 }
}
void pinsInit()
{
 pinMode(HALL_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}

/*If the hall sensor is near the magnet whose south pole is facing up, */
/*it will return ture, otherwise it will return false.    */
boolean isNearMagnet()
{
 int sensorValue = digitalRead(HALL_SENSOR);
 if(sensorValue == LOW)//if the sensor value is LOW?
 {
  return true;//yes,return ture
 }
 else
 {
  return false;//no,return false
 }
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
```

- **Step 4.**  When a magnet whose south pole is facing up is approaching to the onboard sensor, the LED will be turned on. Otherwise, the LED will be turned off.

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Hall Sensor to port D2, and connect a Grove - Red LED to port D4 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/cc_Hall_Sensor.png)

Upload the program to your Arduino/Seeeduino.

:::tip
When the code finishes uploaded, the LED will goes on when Hall Sensor detects changes in the magnetic field.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]** [Grove-Hall Sensor Schematic](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip)

- **[Demo]** [Hall Sensor Demo Code](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **[Datasheet]** [A1101 datasheet](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/datasheet.pdf)

- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove_Hall_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Hall_Sensor -->

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
