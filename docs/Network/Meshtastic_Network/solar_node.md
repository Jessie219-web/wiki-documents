---
description: SenseCAP Solar Node P1-Pro for Meshtastic & LoRa
title:  SenseCAP Solar Node P1-Pro for Meshtastic
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/wiki-platform/solar-node.webp
slug: /get_started_with_meshtastic_solar_node
sidebar_position: 3
last_update:
  date: 4/1/2025
  author: Jessie
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>


It's a solar-powered communication node that integrates the XIAO nRF52840 Plus main controller, the Wio-SX1262 LoRa module, and the XIAO L76K GPS module. It is specifically designed for areas without network coverage. With a built-in battery, it supports long-distance communication, precise positioning, and low-power operation. It's suitable for expanding network coverage in outdoor areas.

 


## Overview

### Features

* **Efficient Solar Power Supply**: Utilizes a 5W solar panel in combination with 4 18650 batteries with a capacity of 3350mAh each. This setup ensures continuous operation even in the absence of sunlight, effectively solving the problem of outdoor power supply.
* **Pre-installed Meshtastic Firmware**: The device comes pre-flashed with Meshtastic firmware at the factory. 
* **Precise Positioning and Tracking**: Features a built-in XIAO L76K GPS module, enabling high - precision real - time positioning. It supports real - time sharing of location information, providing reliable location assurance for outdoor activities.
* **Flexible Modular Expansion**: Equipped with a Grove interface, it is convenient to connect various sensors, such as temperature and humidity sensors. This meets diverse monitoring needs and enables easy functional expansion.
* **Robust Waterproof Design**: With an IPX5 protection rating, it can effectively resist dust and water splashing. It can adapt to various harsh outdoor environments, ensuring stable operation of the device.
* **Supports long - range transmission**: Up to 8 - 9 km between two devices in open areas. It can seamlessly integrate into the Meshtastic ecosystem and be used as an outdoor node or repeater to easily expand the Mesh network, enhancing network coverage.


### Specification


<table>
  <tr>
    <th><b>Main controller</b></th>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840, ARM® Cortex®-M4 32-bit processor with FPU, 64 MHz, 256KB RAM, 1MB Flash, 2MB onboard Flash)
    </th>
  </tr>
  <tr>
    <td><b>LoRa Module</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Wio-SX1262 Module</a><br />
      (Semtech SX1262, TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>GPS Module</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (Support GPS/GLONASS/Galileo)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Antenna</b></td>
    <td>
      <p>LoRa:</p>
      <p>Type: Rod-shaped rubber antenna</p>
      <p>Frequency range: 868-915MHz</p>
      <p>Gain: 2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A: 1575.42MHz</p>
      <p>GLONASS L1: 1602MHz</p>
      <p>BeiDou B1: 1561.098MHz</p>
    </td>
  </tr>
  <tr>
    <td>Bluetooth 5.0</td>
  </tr>
  <tr>
    <td><b>Solar Panel</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>Interface</b></td>
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>USB-C debugging</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Button</b></td>
    <td>Power on/off</td>
  </tr>
  <tr>
    <td>Reset</td>
  </tr>
  <tr>
    <td>User-defined</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>Charging status indicator lights *2</td>
  </tr>
  <tr>
    <td>Solar panel status indicator light *1</td>
  </tr>
  <tr>
    <td>Mesh heartbeat light *1</td>
  </tr>
  <tr>
    <td>User-defined *1</td>
  </tr>
  <tr>
    <td><b>Power supply</b></td>
    <td>Type-C: 5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>Solar power supply: 5V 1A</td>
  </tr>
  <tr>
    <td><b>Waterproof rating</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>Battery</b></td>
    <td>
      <p>4 x 18650 lithium batteries (3350mAh each)</p>
      <p>- Supporting Type-C and solar charging.</p>
      <p>- Discharge environment: -40～60°C</p>
      <p>- Charging environment: 0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>Certification</b></td>
    <td>FCC、CE</td>
  </tr>
  <tr>
    <td><b>Dimension</b></td>
    <td>191.2 x 201.2 x 42.1 mm</td>
  </tr>
</table>

### Hardware Overview

**Interactive items**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**Accessories diagram**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>


