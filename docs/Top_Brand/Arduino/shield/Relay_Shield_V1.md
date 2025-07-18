---
description:  Relay Shield V1.0
title:  Relay Shield V1.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Relay_Shield_V1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---

name:  Relay Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Relay-Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: <https://www.research.net/r/Relay-Shield_V1-0>
sku: 103030015
tags:
--- -->

The Relay Shield is an Arduino compatible smart module with 4 mechanical relays providing an easy way to control high voltage. The max switching power is 35VDC 70W for each channel. It can be directly controlled by Arduino/Seeeduino through digital IOs with external 9V DC supply. With the XBee form socket and 315/433MHz RF module interface, the Relay shield can be remotely controlled, making it easy to use in robotics, industry control, smart houses etc.
**Note:** Take care the pins on the Shield should not be touched with USB connector of Arduino UNO when they are connected .
![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

## Features ##

- Arduino/Seeeduino, Arduino Mega, and Seeeduino Mega compatible

- 4 mechanical relays with photo-coupled circuit

- Equipped with screw holes for easy installation

- Light weight

- Small form factor

- Native Arduino/Seeeduino compatibility

- Extendible

## Specification ##

|  Item|Min|Typical|Max|Unit   |
|---|---|---|---|---|
|  **Voltage**|7|9|12|VDC     |
|  **Current**|8|/|250|mA    |
|   **Switching Voltage**|/|/|35|VDC   |
| **Switching Current**|/|/|2|A  |  
|   **Frequency Response**|-1|/|1|dB |  
|  **Switching Power**|/|/|70|W |
|  **Relay Life**|100,000|/|/|Cycle  |
| **ESD contact discharge**| ±4|||KV|
|**ESD air discharge**|±8  |  ||/|
|   **Dimension** |   80.0x58.0x21.2 |   |   | mm  |
|   **Net Weight** |  31±2 |   |   |  g |

## Cautions ##

**
Place 2 layers of electrical tape on the top of the[Arduino's](/Arduino) (title=undefined) usb connector.  This will prevent the relay shield from making contact.
Do not operate voltage more than 35V DC.
**

## Interface Function ##

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/Relayshield_schematic.jpg)

**4 groups of channels for High voltage connection**

Terminal 1:

COM1- Common pin

NC1- Normally Closed, in which case NC1 is connected with COM1 when D0 is set low and disconnected when D0 is high;

NO1- Normally Open, in which case NO1 is disconnected with COM1 when D0 is set low and connected when D0 is high.

Terminal 2-4 are similar to terminal 1, except that the control ports are D1-D3.

**9V DC power supply connection**

The function of the Terminal and the Jack is the same since they are internally connected, and you can choose either of them in needs.

**IO controlling 4 on-board relays**

D0-D3 4pins could be connected directly with Arduino pin number of 7-4, so that four relays could be easily controlled by the Arduino.

**315/433MHz RF control interface**

Together with pin of GND and 5V, they are the interface for 315/433MHz RF with encoder module (can be bought separately from Seeed Studio) to control the 4 relays remotely.

**XBee form Socket for directly control by Seeed RFBee**

The 4 relays can be directly controlled by the RFBee through the 4 DIO ports of RFBee (can be bought separately from Seeed Studio).

**RFBee cascading control interface**

As the RFBee has 12 DIO ports, 2 more Relay Shield (8 more relays) could be controlled through one RFBee. HUB1 and HUB2 are the drawn-out ports of RFBee (4 as a group), which is connected to 315/433MHz RF interface of the cascading Relay Shield.

## Usage ##

### With Arduino/Seeeduino ###

Relay Shield could be directly controlled by **Arduino**

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithArduino.jpg)

Step1. Plug Relay Shield onto **Arduino**  Duemilanove (or compatible) board;
Step2. Supply 9v DC power to **Arduino** ;
Step3. Download the [example code](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip) and run in [Arduino IDE](https://arduino.cc/en/Main/Software).

If using Arduino via its USB connection for power, you must also provide 9v DC power to the Relay Shield or the relays won't switch.

Relays 1-4 can be activated by setting Arduino ports 4-7 to output, and doing a digitalWrite(portNumber,HIGH).

Use COMx and either NCx (normally closed) or NOx (normally opened) connections to switch power through to the controlled device.

### With [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) ###

#### One RFBee controls one [Relay Shield](https://seeeddoc.github.io/Relay_Shield/) ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg)

Step1. Download [Arduino code](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip) for the slave and master RFBee.

Step2. Plug the slave RFBee to the Relay Shield.

Step3. Supply the 9VDC power to the Relay Shield.

Step4. Power the master RFBee with 3.3V by [UartSBee](https://seeeddoc.github.io/UartSBee/)  or other adapter.

#### One RFBee controls 3 Relay Shields ####

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/MutiRelay.jpg)

Step1. Download [Arduino code](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip) for the slave and master RFBee.

Step2. Plug the slave RFBee onto the Relay Shield.

Step3. Connect the second and third Relay Shield to the mother shield by connecting 315/433MHz RF pins to hub1 and hub2. (Note: 5VDC and GND also need to be connected).

Step4. Supply the 9VDC power to the Relay Shield. (Note: the extended Relay Shields DO NOT need extra power supply).

Step5. Power the master RFBee with 3.3V by [UartSBee](https://seeeddoc.github.io/UartSBee/)  or other adapter.

###  With [315/433MHz RF Module](https://www.seeedstudio.com/depot/315mhz-rf-link-kits-with-encoder-and-decoder-p-151.html?cPath=139_140) ###

![](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithRF.jpg)

Step1. Plug and solder the Receiver onto the Relay Shield.

Step2: Supply the Relay Shield with 9VDC power.

Step3: [Control the Transmitter](https://seeeddoc.github.io/315Mhz_RF_link_kits-with_encoder_and_decoder/#Using_with_Arduino_without_Encoding_and_Decoding).

## Version Tracker ##

<table>
  <thead>
    <tr>
      <th>Revision</th>
      <th>Descriptions</th>
      <th>Release Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Relay shield V1.0</td>
      <td>Initial public release</td>
      <td>03/31/2010</td>
    </tr>
    <tr>
      <td>Relay shield V1.1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Relay shield V1.2</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Relay shield V1.3</td>
      <td>
        1. Change the package of 7805<br/>
        2. Make the terminas not touch the USB connector of Arduino<br/>
        3. Add the protection for the multi-power supply when use with Arduino<br/>
        4. Add the thickness of the wires connected to the Relays<br/>
        5. Change the silkcreen to the bottom side of the board<br/>
        6. Add open source hardware logo
      </td>
      <td>12/01/2011</td>
    </tr>
  </tbody>
</table>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources ##

- **[EAGLE]**  [Relay Shield Eagle Files](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip)

- **[PDF]**  [Relay_shield Schematic](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay_shield_Schematic.pdf)

- **[PDF]**[Relay shield PCB](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay%20shield.pdf)

- **[CODE]**  [Relay Shield demo code for Arduino](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip)

- **[CODE]**  [Arduino Code for RFBee control RelayShield](https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip)

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
