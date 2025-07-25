---
description: Arduino Breakout for LinkIt Smart 7688 Duo
title: Arduino Breakout for LinkIt Smart 7688 Duo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino_Breakout_for_LinkIt_Smart_7688_Duo
last_update:
  date: 1/13/2023
  author: shuxu hu
---

:::danger
Due to the closure of MediaTek Labs, all related links have become invalid. If you need to download relevant files, please search for them on the following link: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

 **Arduino Breakout for LinkIt Smart 7688 Duo** is an expansion board for LinkIt Smart 7688 Duo. Just like other breakout board produced by Seeed, this board has integrated copiously 12 grove ports that allow you to connect more grove modules easily. By using this board, beginners are able to get started quickly because wiring, which is usually not a happy process for most people, is simplified. What's more, the board shares the same MUC as Arduino, that means you can not only use the features of LinkIt Smart 7688, but also from Arduino Yún, which allows you to build rich IoT applications based on various, robust and compiled Arduino sketches. On the board, there are reserved pins for LinkIt Smart 7688 Duo to easily access, apart from that, it also supports serial buses like I2C, UART and comes with USB and Ethernet.

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_product_view.jpg)

LinkIt Smart 7688 Duo is an open development board based on the OpenWrt Linux distribution, MT7688 and ATmega32u4. The board is designed especially to enable the prototyping of Rich Application IoT devices for Smart-Home. If you want to find out more about LinkIt Smart 7688 Duo, please click [HERE](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Arduino-Breakout-for-LinkIt-Smart-7688-Duo-p-2576.html)

## Features

- Arduino Shield Compatible
- Ethernet to connect internet
- USB 2.0 for more peripherals
- Grove interfaces: I2C × 2, Analog × 3, Digital× 6, UART × 1
- 4-pin debug port × 1, ICSP × 1

## Application Ideas

- IoT/Gateway Device.
- Robotics
- Smart multimedia devices
- Teaching and learning

## Specifications

- **Input voltage**	:5.0V (With USB Power port)
- **Operating voltage**	:3.3V

:::note
    Debug pins connect with MT7688, Other pins connect with ATmega32U4.
:::
## Hardware Overview

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_components_with_text_1200_s.jpg)

|Item|Qty|Item|Qty|
|---|---|---|---|
|Arduino Shield|1|USE Port(Type-A)|1|
|MT7688 UART2|1|USB Port(Micro type-B)|1|
|ICSP port|1|Ethernet Port|1|
|Reset Button(ATmega32u4)|1|Port to be plugged with LinkIt Smart 7688 Duo|1|


## Get Started
In this simple application, you are going to make a buzzer to buzz different sounds. Before getting started, Apart from Arduino Breakout for LinkIt Smart 7688 Duo, please check if you have below materials on hand. You can get them from our Bazaar.

|LinkIt Smart 7688 Duo|USB cable|UARTBee |Jumper wires x 3|Grove - Buzzer
|---|---|---|---|---|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/102110017%206.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/jw100n.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/107020000%201.jpg)
|[**Get One Now**](https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html)|[**Get One Now**](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[**Get One Now**](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[**Get One Now**](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|[**Get One Now**](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

- Step1 Refer this to connect your LinkIt Smart 7688 Duo to internet.

:::note
    * You can find Pin 8, Pin 9 and Pin GND close to the port to be connected LinkIt Smart 7688.
    * You can plug jumper wires into MT7688 UART2 port instead of soldering them to Pin 8, Pin 9 and Pin GND.
:::
- Step2. Open a console after connecting an USB to Serial adapter to LinkIt Smart 7688 Duo.
- Step3 Connect all parts as shown below:

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

- Step4：Plug Grove - Buzzer into port D4.

- Step5: This step is to build the Arduino environment for LinkIt Smart 7688 Duo platform on host computer. Since the tutorial has been written in the Wiki of LinkIt Smart 7688, please refer to [Here](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment).
- Step6: Download firmata.
- Step7: Refer to [Here](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment) to install Arduino IDE for LinkIt Smart 7688 platform, and flash the file firmata to development board.

:::note
    Following steps should be carried out on embedded OS(OpenWRT). Please make sure you have Python in your system and installed pip.
:::
- Step8: Type pip install pyfirmata into console and press Enter to install python library pyfirmata.
- Step9: Create a file named **buzzer.py** with typing **vi buzzer.py** in console, copy the code below into it.

```python
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```

- Step10: Save **buzzer.py** and type **python buzzer.py** to run the example code.
- Step11: Now you will hear the buzzing sound.


## Make It Now
Have you successfully make the buzzer to buzz? Here are 2 more awesome projects that use LinkIt Smart 7688 Duo. Let's make them now!


|Smart Router With  WiFi Connection Visualization|Facebook Like Monitor|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9SCHIKIPH4SPTP.MEDIUM.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9MQJJOIHQOBV4Q.MEDIUM.jpg)|
|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ReRouter-Make-an-Extensible-IoT-Router/)|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Facebook-Like-Monitor/)|


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- [Schematic files](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [Wiki link for LinkIt Smart 7688 Duo](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

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
