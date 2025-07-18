---
title: Logic DC Jack
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Logic_DC_Jack/
slug: /Logic_DC_Jack
last_update:
  date: 02/03/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian.JPG)

This is an easy-to-use logic controller which implement logic AND and logic negation.
It is designed with H Bridge which get certain drive function to drive motor and other applications, now your application will not just limited on LED applications.
If you are a novice to programming and inclined to make a simple application, this will be smart choice to get something started.

## Features

* Dual input and single output

* Select the logic via a switch

* Input default to HIGH

* Half bridge output, can drive motor directly

* Power by 9V Battery

## Specifications

* No-load current: 10±1mA;

* Input voltage: 6~9V；

* Output voltage: 5V；

* Power conversion efficiency 82±5%

## Hardware Overview

Here is block diagram of Logic_DC_Jack module which consists of following parts.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_overview1.JPG)

* **Input** - Logic input

  * GND - Connect to ground

    * VCC - Connect to power supply

    * IN2 - Input2

    * IN1 - Input1

* **Output** - Logic output

  * GND - Connect to ground

    * VCC - Connect to power supply

    * OUT - Output

    * OUT - Output

* **Status Led** - a red led

  * ON - NOT Mode

    * OFF - AND Mode

* **Function Switch**

  * Off - Power off

    * Not - NOT Mode, means the board now is a NOT logic gate, it could only support one input module.

    * And - AND Mode, when only one Grove cable is inserted into the left socket of mainboard, the mainboard will be a simple connector. But if you used a branched Grove cable, the main board will behave like an AND logic gates

_Note: When in AND Mode, IN2 is default to HIGH, so when it's only one input module, Logic DC Jack act as a buffer_

* **Power Input** - DC Power input, 6-9V is required

* **Power Led** - A green led, on when there is power supply

## Getting Started

After this section, you can make Logic DC Jack run with only few steps.

### How does it work?

Logic DC Jack is a logic device, which's used to achieve some simple logic function.Please refer to these links to know something information about [NOT gate](https://en.wikipedia.org/wiki/Inverter_logic_gate) and [AND gate](https://en.wikipedia.org/wiki/AND_gate) before we get started.

This module includes two type of cables and you will use one of it while plugging an input or two inputs onto the input port.

<dl>
  <dd> Situation 1 – One input </dd>
  <dd> If the input is only one module, the Logic DC Jack can realize the logic function of AND and NOT. Following is the figure of logic function: </dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_3.png)

<dl>
  <dd> Situation 2 – Two inputs </dd>
  <dd> If the inputs are two modules, this Logic DC Jack can only realize the logic function of AND. Following is the figure of logic function: </dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_4.png)

Choose the number of input first and then adjust the switch to a right position, the needed logic function is confirmed.

### How to judge the input port and output port ?

There're two arrow seals on the shell, you can distinguish the input and output easily.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian_2.JPG)

### How to know the default input level ?

Even we know how to use the logic function, but how we know the default level state of the input, because different default level state can make a different output state. Here, you can get it by a simple experiment.

#### Preparations

Something is needed:

* [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35)

* 9V Battery

#### Connecting hardware

In this demo, we use [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50) as INPUT, and [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35) as OUTPUT.

Switch to **NOT** gate.

As shown below:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_setting_stared_not.JPG)

#### Review Results

As you know, only if the output level is 1, then the Grove - LED could be turned on. After power ON, you will find that Grove - LED is on, in a other word, the output level is 1 according to the figure of logic, so we can know: if the output the 1, the switch mode is NOT, so the default input level is 0.

### Demo about two inputs

If you want to use two inputs, you need the Grove Branch Cable.

With this cable, you can connect 2 Grove to the INPUT. One connect to Input1 and the other to Input2.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_cable.JPG)

Here is an example, 2 Buttons INPUT and a LED OUTPUT:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_and.jpg)

The led will on only when 2 buttons pressed.

<font color="Red">Tips: This cable can also used as output, if you want to control the state level of 2 Groves at the same time, this cable is needed. Please pay attention: If using the cable by this way, the state level of two outputs is the same.</font>

### Work With Lego

Logic DC Jack contain a Lego-compatible case, you can insert Logic DC Jack to Lego, make it more funny.

About the Grove Base that compatible with Lego, it's coming soon.

Here is a demo:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_with_lego.jpg)

## Compatible Groves for Logic DC Jack

Below Groves can work with Logic DC Jack well:

### Input

* [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - Touch Sensor](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)

* [Grove - Switch](https://www.seeedstudio.com/Grove-SwitchP-p-1252.html?cPath=85_50)

* [Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)

* [Grove - Loudness Sensor](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html?cPath=25_128)

* [Grove - Moisture Sensor](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html?cPath=25_27)

* [Grove - Water Sensor](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html?cPath=25_27)

* [Grove - Magnetic Switch](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

* [Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

* [Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html?cPath=25_31)

* [Grove - PIR Motion Sensor](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html?cPath=25_31)

* [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)

* [Grove - Slide Potentiometer](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html?cPath=85_52)

* [Grove - Flame Sensor](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)

### Output

* [Grove - LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)

* [Grove - LED String Light](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)

* [Grove - Vibration Motor](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

* [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)

* [Grove - Mini Fan](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)

* [Grove - Recorder](https://www.seeedstudio.com/Grove-Recorder-p-1825.html?cPath=25_128)

* [Grove - Electromagnet](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html?cPath=25_33)

* [Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

* **[PDF]**   [Schematic in PDF](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH.pdf)
* **[Eagle]**    [Schematic in Eagle](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip)
* **[PDF]**[Logic DC Jack v1.0 pdf](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.pdf)
* **[EAGLE]**[Logic DC Jack v1.0 sch](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.sch)
* **[Wik]**   [Wiki page of NOT Gate](https://en.wikipedia.org/wiki/Inverter_(logic_gate))
* **[Wik]**    [Wiki page of AND Gate](https://en.wikipedia.org/wiki/AND_gate)

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
