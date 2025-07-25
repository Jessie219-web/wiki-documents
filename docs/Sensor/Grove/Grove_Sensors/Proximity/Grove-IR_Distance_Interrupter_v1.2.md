---
title: Grove - IR Distance Interrupter v1.2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-IR_Distance_Interrupter_v1.2/
slug: /Grove-IR_Distance_Interrupter_v1.2
last_update:
  date: 01/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Grove_-_IR_Distance_Interrupter_v1.2.jpg)

**Grove - IR Distance Interrupter** is used to detect any object blocking the path of light. The module consists of an IR LED and a photosensor (phototransistor) pair. The light emitted by the IR LED gets reflected by any object placed in front of the sensor and this reflection is detected by the photosensor(phototransistor). Any white (or lighter) colored surface reflects more than black (or darker) colored surface.

When the reflected light is detected, it produces **Digital HIGH** (or Binary **1**) output on the **SIG** pin. The on-board LED indicator will also glow. If no reflection is detected or if the object is too far from the sensor, the output on the **SIG** pin stays at **Digital LOW** (Binary **0**). The on-board LED indicator will be off as well. The detectable range of this sensor is 7.5–40 cm. The module incorporates a Rail-to-Rail Operational Amplifier to amplify the output of phototransistor. There is a potentiometer which can be used to adjust the gain of the amplifier, that is, sensitivity of detection.

With this sensor, you can build the following (but not limited to) applications: **line following robots, optical encoders** and **object counting applications**.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)

<div class="admonition note">
<p class="admonition-title">Note</p>
This product is mildly sensitive to non-IR radiations also and hence any bright light on photosensor impairs or disturbs IR light detection.
</div>

<div className="admonition tip">
  <p className="admonition-title">Tip</p>
  The instructions to use this product are same as <span style={{fontWeight: 'bold'}}>Grove - Infrared Reflective Sensor's</span>. You can use this product directly if you have used Grove - Infrared Reflective Sensor.
</div>

Version Tracker
---------------

| Product version                                       | Release date | Support status |
|-------------------------------------------------------|--------------|----------------|
| Versions older than v1.2                              | June 2012‎    | Not supported  |
| Grove - IR Distance Interrupter v1.2(current version) | April 2016   | Supported      |

Features
--------

- Grove compatible and easy to use
- Highly sensitive and reliable
- Longer detectable distance
- Adjustable sensitivity for various occasions
- More durable

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Specifications
--------------

| Parameter                     | Value                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------|
| Operating voltage(V)          | 3.3 or 5 Volts                                                                         |
| Operating current(mA)         | Maximum: 20 mA                                                                         |
| Effective detectable distance | 7.5–40 cm                                                                              |
| Reflective photosensor        | [datasheet](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf) |
| Output operational amplifiers | [datasheet](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)                  |
| Weight                        | 2.5 g(for the module), 8.5 g(for all single package)                                   |

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Hardware Overview
-----------------

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/hardware_overview.png)

- **ITR9909 Reflective photosensor**, Highly sensitive reflective photosensor.
- **LM393 operational amplifier**, rail-to-rail operational amplifier.
- **LED Indicator**, The LED will turn on when the received infrared light intensity exceeds a preset level.
- **Light sensitivity adjusting potentiometer** , adjust the sensitivity of reflective photosensor to light.

### **Package includes**

| Parts name                                                                                                                    | Quantity |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - Infrared Reflective Sensor                                                                                            | 1 piece  |
| [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 piece  |

Getting Started
---------------

Let us see how to implement few basic applications with this module:

### With Arduino

#### Material required

- Grove - IR Distance Interrupter v1.2 × 1
- Arduino UNO (other models also are fine) × 1
- Grove cable × 1
- Grove - Base Shield × 1

#### Connections

1.Connect Grove - IR Distance Interrupter v1.2 to Arduino UNO with Grove cable.

2.Place and hold the Reflective photosensor towards white(or light) colored surface.

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor3.jpg)

3.Adjust the potentiometer with a screwdriver to change the sensitivity of reflective photosensor, until the LED indicator glows. As your rotate clockwise, the reflective photosensor will be more sensitive to light.

<div class="admonition note">
<p class="admonition-title">Note</p>
Use a proper screw-driver to adjust the tiny potentiometer. Applying heavy pressure or frequent adjustments might damage the wiper of the potentiometer.
</div>

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor1.jpg)

4.Create an Arduino sketch and copy the below code into it.

```
void setup()  {
    Serial.begin(9600);
    pinMode(6,INPUT);
}
void loop()  {
    while(1)  {
        delay(500);
        if(digitalRead(6)==LOW)  {
            Serial.println("Somebody is here.");
        }
        else  {
            Serial.println("Nobody.");
        }
    }
}
```

5.Upload the code. If you do not know how to upload a Arduino sketch, please visit [https://www.arduino.cc/en/Guide/Windows](https://www.arduino.cc/en/Guide/Windows) for Windows user or [https://www.arduino.cc/en/Guide/MacOSX](https://www.arduino.cc/en/Guide/MacOSX) for Mac user. You can see the result as below.

6.When the path of light is blocked by some object, you would see "Somebody is here." in Serial Terminal else you will see "Nobody."

### With Raspberry Pi

#### Material required

- Raspberry Pi (other models also are fine) × 1
- [GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html?cPath=73) or [Grovepi+](https://www.seeedstudio.com/depot/GrovePi-p-2241.html?cPath=122_154_158) × 1
- [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

#### Hardware Connections and Software Work

1.You should have a Raspberry Pi and a GrovePi or GrovePi+. In this demo, we use GrovePi.

2.We assume you have built the development environment successful. If not, follow this tutorial

3.Connection:

Plug Grove - IR Distance Interrupter into port D4 on GrovePi with [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57).

4.Navigate to the demos' directory, run the following command in a terminal.

```
    cd yourpath/GrovePi/Software/Python/
```

Run the command in a terminal:

```
    nano grove\_infrared\_distance\_interrupt.py
```

Copy and save the following code into it.

```
import time
import grovepi
 
# Connect the Grove Infrared Distance Interrupt Sensor to digital port D4
# SIG,NC,VCC,GND
sensor = 4
 
grovepi.pinMode(sensor,"INPUT")
 
while True:
    try:
        # Sensor returns LOW and onboard LED lights up when the
        # received infrared light intensity exceeds the calibrated level
        if grovepi.digitalRead(sensor) == 0:
            print "found something"
        else:
            print "nothing"
 
        time.sleep(.5)
 
    except IOError:
        print "Error"
```

5.Run the demo, run following command in terminal.

```
    sudo python grove\_infrared\_distance\_interrupt.py
```

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Grove - IR Distance Interrupter v1.2 Eagle file](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip)
- [Reflective Photosensor Datasheet(ITR9909)](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf)
- [LM393 Datasheet](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)
- [LMV358 Datasheet](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LMV358_datasheet.pdf)
- [Infrared Reflective Sensor Source Files](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Grove-Infrared_Reflective_Sensor_v1.0_SourceFile.zip)

This Markdown file was created from [https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2](https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2)

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
