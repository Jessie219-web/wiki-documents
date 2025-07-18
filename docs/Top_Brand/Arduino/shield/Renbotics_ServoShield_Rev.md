---
description: Renbotics_ServoShield_Rev
title: Renbotics Servo Shield Rev

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Renbotics_ServoShield_Rev
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/h/t/httpsstatics3.seeedstudio.comimagesproductservoshieldkitlarge.jpg" alt="pir" width={600} height="auto" /></p>

The Renbotics ServoShield is an Arduino-compatible shield that uses two 4017 decade counters to drive up to 16 servos using only 4 pins (digital pins 6 to 9) and as little as one 8bit timer (Timer 2) in standard mode or two 16/8bit timers (Timer 1 and Timer 2 for Duemilanove or Timer 3 for Mega) in high accuracy mode. It also includes a 196 point breadboard style prototyping area.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

* 16 Servo Channels

* Convenient screw terminal for servo power supply

* 196 Point breadboard style prototyping area

* Compatible with Arduino Duemilanove and Arduino Mega

* Easy to use API

## Application Ideas

* Robotics

* Animatronics

* Mechatronic Art

## Usage

### Hardware Installation

Accembled View:

<p style={{textAlign: 'center'}}><img src="http://bz.seeedstudio.com/depot/images/product/StackedLarge.jpg" alt="pir" width={600} height="auto" /></p>

### Programming

**Sample 1: Simple servo sweeper**

```cpp
#include <ServoShield.h>
ServoShield servos; //Create a ServoShield object
void setup()
{
    for (int servo = 0; servo < 16; servo++)//Initialize all 16 servos
    {
        servos.setbounds(servo, 1000, 2000); //Set the minimum and maximum pulse duration
        servos.setposition(servo, 1500); //Set the initial position of the servo
    }
    servos.start(); //Start the servo shield
}
void loop()
{
    for(int pos = 1000; pos < 2000; pos++) //Move the servos from 0 degrees to 180 degrees
    { //in steps of 1 degree
        for (int i = 0; i < 16; i++) //for all 16 servos
        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'
        delay(1);
    }
    for(int pos = 2000; pos >= 1000; pos--)//Move the servos from 180 degrees to 0 degrees
    {
        for (int i = 0; i < 16; i++) //all 16 servos
        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'
        delay(1);
    }
}
```

## Bill of Materials (BOM) /parts list

* 2 x 4017 Decade Counter DIP16

* 2 x 10nf Capacitors

* 2 x 6 pin Female Shield Stacking Headers

* 2 x 8 pin Female Shield Stacking Headers

* 1 x 2 pin Screw Terminal

* 3 x 16 pin Male Breakaway Headers

## Version Tracker

| Revision | Descriptions | Release |
|----------|-------------|---------|
| v1.1 | Initial public release | Aug 23, 2009 |

## Resources

* [Manual Rev 1.5](https://www.seeedstudio.com/depot/datasheet/RenboticsServoShield1.5.pdf)

* [Arduino Library Rev 1.3 (Updated 07-09-2009)](https://www.seeedstudio.com/depot/images/product/ServoShield.zip)

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
