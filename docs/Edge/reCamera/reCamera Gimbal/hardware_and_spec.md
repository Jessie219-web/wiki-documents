---
description: This is the overview of recamera gimbal for features, specifications, hardware interface and partlist.
title: Hardware and Specs
keywords:
  - Edge
  - AI
  - reCamera
  - reCamera Gimbal
  - blushless motor
  - Hardware overview
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 03/27/2025
  author: Evelyn Chen
---

# reCamera Gimbal Overview

The reCamera Gimbal 2002 Series is the first open-source camera control system with 1TOPS AI camera (reCamera) and 2-axis gimbal. Its dual brushless motors enable 360° yaw and 180° pitch for full coverage.


## Feature

- Fully Open-Source Ecosystem on Hardware and Software
  * [Developer Portal](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- Quick Setup & Precision Movement
  * Lego-like assemble package support
  * 360° yaw Rotation Full coverage and 180° pitch Range From floor to ceiling
  * Brushless Motor Precision: 0.01° stepping accuracy for smooth target tracking.
- AI-Powered Motion Control
  * Ready Custom AI Models: Built-in YOLO11 with commercial license, Roboflow & SenseCraft AI support.
  * Smart Tracking: AI auto-adjusts gimbal movement.
- Flexible Development for All Skill Levels
  * Built-in Node-RED for low-code flow customization on gimbal movement.
  * C++ SDK supported for deeper development.


## Specifications

### Processing System

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI Performance**     | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Operating System**   | Linux                                                                     |
| **Memory**             | 256 MB                                                                  |
| **Video Encoder**      | 5MP @ 30Fps                                                              |


### Basic

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **Power Supply**       | 12V DC Jack to XT30 connector                                             |
| **Power Consumption**  | 12V, 185mA (static)                                                      |


### Camera

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Sensor**             | OV5647                                                                    |
| **Resolution**         | 5M (2592×1944) Pixels                                                    |
| **Chip**               | 1/4" CMOS Sensor                                                         |
| **Pixel Size**         | 1.4μm                                                                     |
| **Output Format**      | RAW 10                                                                    |
| **Max Frame Rate**     | Full size: 15fps                                                          |
| **Aperture**           | F2.8                                                                      |
| **Equivalent Focal Length** | 3.46mm                                                                 |
| **Field of View**      | 65°                                                                      |
| **Distortion**         | <1%                                                                      |
| **Lens Structure**     | 5P                                                                        |


### Interface

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                            |
| **Wireless**           | Wi-Fi 2.4G/5G Bluetooth 4.2/5.0                                          |
| **Button**             | 1 × Reboot Button, 1 × User Button                                        |
| **Fill LEDs**          | 4 × 0.3W White Light                                                      |
| **LED**                | 1 × Power Indicator, 2 × IO Programmable Indicator                        |
| **Mic**                | On-Board Mic                                                              |
| **Speaker**            | External Speaker                                                          |


### Motor Spec

| **Parameter**          | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **Turns**              | 54                       | 60                  |
| **Rated Voltage (V)**  | 12                       | 12                  |
| **Max Speed (rpm)**    | 2000                     | 2100                |
| **Rated Torque (N·m)** | 0.04                     | 0.05                |
| **Rated Speed (rpm)**  | 1160                     | 1250                |
| **Rated Current (A)**  | 0.64                     | 0.79                |
| **Max Power (W)**      | 4.6                      | 6.4                 |
| **Motor Poles**        | 14                       | 14                  |
| **Operating Temperature (℃)** | -25~60            | -25~60              |
| **Weight (g)**         | 49                       | 63                  |
| **Drive Input Voltage (V)** | 6~16                | 6~16                |
| **Communication**      | CAN                      | CAN                 |
| **Communication Frequency** | CAN@1Mbps:2KHz      | CAN@1Mbps:2KHz      |
| **Encoder**            | 15-bit Magnetic Encoder  | 15-bit Magnetic Encoder        |
| **CAN Baud Rate**      | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **Control Mode**       | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                |

### Gimbal Spec
| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Pitch Range**        | 0～180°                                                                    |
| **Yaw Range**          | 0～360°                                                                    |


### Ambient Conditions

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Operating Temperature** | -20～50 ℃                                                                 |
| **Operating Humidity**  | 0～90%                                                                    |


### Mechanical

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Dimension (W × H × D)** | 68×112×71mm                                                              |
| **Enclosure**          | Polyamide (PA) Nylon                                                      |
| **Weight (Net)**       | 230g                                                                      |

### Others

| **Parameter**          | **Value**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Warranty**           | 1 year                                                                    |

## Hardware Overview

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>


### Core Board-C101

[**Click to download PCBA file of 8GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**Click to download PCBA file of 64GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

Top View             |  Bottom View
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### Block Diagram

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div> 

### Sensor Board-S101

[**Click to download PCBA file**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

Top View             |  Bottom View
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>


### Base Board-B401

[**Click to download PCBA file**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

Top View             |  Bottom View
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>


#### Block Diagram
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div> 

### Power Supply Board

This power supply board provides dual functions of stable power delivery and overvoltage protection. It supports 12V DC input to power both motors and reCamera systems.

**Overvoltage Protection Thresholds**:
- Maximum Trip Voltage: 25.66V
- Normal Operation Voltage: 25.54V
- Minimum Safe Voltage: 25.4V

[**Click to download PCBA file**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### Block Diagram
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div> 

## Hardware Interfaces

- [Light](#)
- [Mic & Speaker](#)
- [Wi-Fi](#)
- [UART(Debug)](#)
- [CAN](#)
- [User Button](#)
- [Reboot Button](#)
- [IO](#)
- [Motor](#)


## Part List

●reCamera 2002w x 1
●reCamera Gimbal Head x 1
●reCamera Gimbal Arm x 1
●reCamera Gimbal Base Cover x 1
●reCamera Gimbal Base x 1
●Power Supply Board x 1
●Antenna x 1
●Motor MS3506 x 1
●Motor MS3008 x 1
●Screw A(KAB3.0x10.0mm) x 5
●Screw B(KM2.0x6.0mm) x 7
●Screw C(M2.0x10.0mm) x 5
●Screw D(KM2.5x4.0mm) x 9
●Screw E(KA2.0x6.0mm) x 5
●DC Power Female Jack(5521) to XT30 Connector x 1
●XT30(2+2)-F Connector with Wire x 1
●Micro JST PH 2.0 6-Pin Female to Female Wire x 1
●Screw Driver(M2.5xL55mm) x 1
●Hex Key x 1
●Motor Adapter Board x 1
●User Manual x 1


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

