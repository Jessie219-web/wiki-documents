---
description: |
  A versatile driver board from Seeed Studio designed to control serial bus servos for robotic applications. It features a critical jumper setting that must be adjusted depending on the connection method (USB or direct UART).
title: Bus Servo Driver Board
image: https://files.seeedstudio.com/wiki/Bus_Servo_Driver/bus_servo_driver_board_main.webp
slug: /bus_servo_driver_board
keywords:
    - Bus Servo
    - Robotics
    - UART
    - USB connection
    - Jumper settings
last_update:
  author: Citric
  date: 05/27/2025
---

# Getting Started with Bus Servo Driver Board / XIAO Bus Servo Adapter

This wiki covers two related products: the **Bus Servo Driver Board** and the **XIAO Bus Servo Adapter**.

- The **Bus Servo Driver Board** does **not** include an onboard XIAO ESP32C3 microcontroller, nor does it come with a 3D-printed enclosure. It is designed to function as a general-purpose bus servo interface board, allowing you to connect and control servos via an external controller of your choice.

- The **XIAO Bus Servo Adapter**, on the other hand, **includes** the XIAO ESP32C3 as the main controller and comes with a 3D-printed case. With this version, you can directly control bus servos using the onboard XIAO, making it a more integrated and ready-to-use solution for robotics projects.

Please refer to the rest of this guide for details on setup and usage for both products.


<div class="table-center">
  <table align="center">
    <tr>
        <th>Bus Servo Driver Board</th>
        <th>XIAO Bus Servo Adapter</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/5.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="/xiao_bus_servo_adapter">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


## Introduction

The Bus Servo Driver Board is a compact and powerful hardware solution from Seeed Studio, designed to drive serial bus servos for robotics and automation projects. With support for UART communication, it enables precise control and feedback from multiple ST/SC series servos, making it ideal for applications such as robotic arms, hexapods, humanoid robots, and wheeled robots requiring servo angle and load feedback.

This guide focuses on the hardware setup, physical connections, key specifications, and **critical jumper settings** to help users integrate the board into their projects effectively.

:::warning Safety Warning

Always disconnect power before connecting or disconnecting servos or wiring. Ensure the input voltage matches the servo requirements to avoid damage.

:::

## Hardware Overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Bus Servo Driver Board" label="Bus Servo Driver Board">


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/2.png" style={{width:800, height:'auto'}}/></div>

The Bus Servo Driver Board features several key connection points:

**Input:**

* **DC IN (5.5 * 2.1mm):** This is the power input for the board and the connected servos. Connect a 5~12V power supply here. *Crucially, the voltage of this power supply must match the voltage requirements of your servos.* For example, ST series servos typically operate at 9V, while SC series servos may require 12V.

**Output:**

* **Servo Interface:** This dedicated port is where you connect your ST/SC series bus servos. Ensure the connector is properly aligned.

**Control Interface:**

* **UART (RX/TX):** These pins provide serial communication for controlling the servos. The connection method and jumper settings depend on your host device. See below for details.

</TabItem>

<TabItem value="XIAO Bus Servo Adapter" label="XIAO Bus Servo Adapter">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/4.png" style={{width:800, height:'auto'}}/></div>

**Input:**

* **DC IN (5.5 * 2.1mm):** This is the power input for the board and the connected servos. Connect a 5~12V power supply here. *Crucially, the voltage of this power supply must match the voltage requirements of your servos.* For example, ST series servos typically operate at 9V, while SC series servos may require 12V.

**Output:**

* **Servo Interface:** This dedicated port is where you connect your ST/SC series bus servos. Ensure the connector is properly aligned.

</TabItem>

</Tabs>

## Getting Started

### Selecting the operating mode of the driver board **(Only for Bus Servo Driver Board)**

:::tip
For XIAO Bus Servo Adapter, you don't need to modify any circuits to use the included XIAO ESP32-C3 to control the servos, you can skip this part directly.
:::

The Bus Servo Driver Board offers two primary connection methods: direct UART connection and USB connection via a USB-to-UART adapter. *The correct jumper setting is essential for proper operation.*

#### UART Connection (for MCUs, XIAO, ESP32, etc.)

This method is used when connecting directly to the UART pins of a microcontroller (MCU) like an ESP32, Arduino, Seeed Studio XIAO, or a single-board computer.

* **Wiring:**
    * Connect the `RX` pin on the Driver Board to the `TX` pin (D7) on your host device.
    * Connect the `TX` pin on the Driver Board to the `RX` pin (D6) on your host device.
    * For devices like the Seeed Studio XIAO, you can directly plug the XIAO into the provided headers, ensuring correct pin alignment. This eliminates the need for separate Dupont wires for the UART connection.

* **Jumper Setting (Critical):** Locate the solder jumper near the UART pins. **For direct UART communication, you must ensure that the two pads are connected (soldered together).**

* **Powering the Host:** Your host device (e.g., Raspberry Pi Zero, ESP32, XIAO) will require its own separate power supply.

#### USB Connection

This method is used when connecting to a computer or single-board computer with a USB port (e.g., a PC or Raspberry Pi 4B). You simply connect the control board to the computer using a USB cable.

* **Wiring:**
    * Simply connect the control board to your computer using a USB cable.

* **Jumper Setting (Critical):** 

**Step1:** Locate the soldering jumper on the back of the board. **For USB communication, you must ensure that the two pads are connected (there is a solder bridge between them).**

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-1.png"   
        style={{   
            width: '400px',   
            height: '400px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

**Step2:** Use a 2.54mm jumper cap to short-circuit the 2pin pin on the front of the board.

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png"   
        style={{   
            width: '400px',   
            height: '400px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

### Required Components (Before You Start)

Before connecting anything, ensure you have the following:

* **Bus Servo Driver Board**
* **Compatible ST/SC series bus servos**
* **5~12V Power Supply:** A battery or power adapter. *The voltage must match your servo's specifications.*
* **Host Device:**
    * **For Direct UART:** A UART-capable device like a Raspberry Pi, Arduino, ESP32, or Seeed Studio XIAO.
    * **For USB:** A computer (PC, Mac, Linux) or a single-board computer like a Raspberry Pi 4B, *plus* a USB-to-UART adapter.
* **Connecting Wires/Adapters:** Jumper wires (Dupont wires) if using direct UART (except when using XIAO with direct header connection). A USB-to-UART adapter if using the USB connection method.

:::caution

If using SC series servos, confirm the power supply matches their voltage requirements. The board’s DC input label is tailored for ST series servos but supports SC series voltages as well. **Incorrect jumper settings will prevent communication with the driver board.**

:::

### Safety and Maintenance

- Regularly check servo and power connections for wear or loose contacts.
- Avoid exposing the board to moisture or extreme temperatures.
- Use a power supply with sufficient current capacity to support all connected servos.

### FAQs

:::tip

It's recommended to read through these FAQs before starting your project. They address common questions and potential issues.

:::

<details> <summary>What if the power supply voltage doesn’t match my servo?</summary>

The board and servo may malfunction or sustain damage. Always match the input voltage to your servo’s requirements.
</details> <details> <summary>Can I connect multiple servos at once?</summary>

Yes, multiple servos are supported, but ensure your power supply can handle the combined current draw.

</details> <br/>

### Resources

* **Schematic:** [Bus_Servo_Driver_Board_SCH.pdf](https://files.seeedstudio.com/wiki/bus_servo_driver_board/202004237_Servo_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_250225.pdf)

<!-- * **3D Model:** [Bus_Servo_Driver_Board_STEP.stp](Bus_Servo_Driver_Board_STEP.stp) *(Ensure this STEP file is accessible at this relative path in your Docusaurus project.)* -->

### Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>