---
description: This wiki introduces the hardware and interfaces of the reComputer Jetson Robotics J401 carrier board.
title: Interfaces Usage
tags:
  - Robotics J401 carrier board
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_jetson_robotics_J401_getting_started
last_update:
  date: 04/29/2025
  author: Yaohui
---

# reComputer Jetson Robotics J401 Hardware and Getting Started


The reComputer Robotics J401 is a compact, high-performance edge AI carrier board designed for advanced robotics. Compatible with NVIDIA Jetson Orin Nano/Orin NX modules in Super/MAXN mode, it delivers up to 157 TOPS of AI performance. Equipped with extensive connectivity options—including dual Gigabit Ethernet ports, M.2 slots for 5G and Wi-Fi/BT modules, 6 USB 3.2 ports, CAN, GMSL2 (via optional expansion), I2C, and UART—it serves as a powerful robotic brain capable of processing complex data from various sensors. Pre-installed with JetPack 6 and Linux BSP, it ensures seamless deployment.​

Supporting frameworks like NVIDIA Isaac ROS, Hugging Face, PyTorch, and ROS 2/1, the reComputer Robotics J401 bridges large language model-driven decision-making with physical robotics control, such as motion planning and sensor fusion. Ideal for the rapid development of autonomous robots, it accelerates time-to-market with ready-to-use interfaces and optimized AI frameworks.

## reComputer Jetson Robotics J401 Carrier Board overview

| **Top View** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **Top View** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **Top View** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱</font></span></strong>
    </a>
</div>

## Part List
- reComputer Robotics J401 Carrier Board x 1
- Power Supply and JST expansion board x 1
- XT30 to DC cable x 1
- USB Cable, Type A to Type C x 1
- Heat Sink for expansion board x 1
- Stud(M3*30) x 5
- M3 Hexagon nut x 5
- Screw(CM2.5*L.4) for Jetson Module and M.2 Key M x3
- Screw(CM2*3.0) for M.2 Key E x1
- Stud(M2*2.0) for M.2 Key B x1
- Screw(CM3*4.0) for M.2 Key B x1
- User Manual x 1

:::note
1.Please design a robust heat dissipation solution according to the Thermal Design Guide, when in high voltage power supply and operating temperature.
2.Please attach heat sink for module for better performance.
3.During the operation with high voltage input and high load, please do not touch the heat sink to prevent scalding.
4.Power Adapter Recommendation for Validation, please use the power adapter recommended on the Seeed official website.
  - 19V/4.74A 5525 Barrel Jack Power Adapter
  - Ensure maximum power consumption requirements are met.
2.AC Power Cord Compatibility
  - Purchase region-specific AC cloverleaf power cords according to your location.
3.Accessory Compatibility
  - Use only officially recommended accessories (e.g., wireless modules, cameras, peripherals) for optimal performance and compatibility.
:::






## Specification

### Carrier Board Specifications

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>Category</th>
      <th>Item</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">Storage</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe (M.2 NVMe 2242 SSD 128G included)</td>
    </tr>
    <tr>
      <th rowSpan="3">Networking</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E for WiFi/Bluetooth module</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B for 5G module</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (Device Mode/Debug)</td>
    </tr>
    <tr>
      <td>Camera</td>
      <td>1x 4 in 1 GMSL2 (mini fakra) (optional board)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (4-Pin JST Header)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x DP1.4 (Type C Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin JST Header</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin JST Header</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td>1x 4-Pin Fan Connector (5V PWM);<br />1x 4-Pin Fan Connector (12V PWM)</td>
    </tr>
    <tr>
      <td>Extension Port</td>
      <td>1x Camera Expansion Header (for GMSL2 board)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin;<br />1x RTC Socket</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT, and User LED)</td>
    </tr>
    <tr>
      <td>Pinhole Button</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIP Switch</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>Antenna Hole</td>
      <td>5x Antenna Hole</td>
    </tr>
    <tr>
      <th rowSpan="1">Power</th>
      <td colSpan="2">19-54V XT30(2+2) (XT30 to 5525 DC Jack Cable included)</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack Version</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">Mechanical</th>
      <td>Dimensions (W x D x H)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>141g</td>
    </tr>
    <tr>
      <td>Installation</td>
      <td>Desk, Wall-mounting</td>
    </tr>
    <tr>
      <th rowSpan="1">Operating Temperature</th>
      <td colSpan="2">-20℃~60℃ (25W Mode);<br />-20℃~55℃ (MAXN Mode);<br />(with reComputer Robotics heat sink with fan)</td>
    </tr>
    <tr>
      <th rowSpan="1">Warranty</th>
      <td colSpan="2">2 Years</td>
    </tr>
    <tr>
      <th rowSpan="1">Certification</th>
      <td colSpan="2">RoHS, REACH, CE, FCC, UKCA, Telec, KC</td>
    </tr>
  </tbody>
</table>

 
## Resources
- [reComputer Robotics J401 Carrier Board Bazaar Bundle Page](https://www.seeedstudio.com/reComputer-Robotics-Bundle.html)
- [reComputer Robotics J401 Carrier Board Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)



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