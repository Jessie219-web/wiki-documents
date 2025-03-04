---
description: reComputer R1100 Flash OS
title: reComputer R1100 Flash OS
keywords:
  - Edge
  - reComputer R1100
  - Flash OS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01_1.webp
slug: /recomputer_r1100_flash_OS
last_update:
  date: 3/3/2024
  author: Kasun Thushara
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

The reComputer R1100, powered by the Raspberry Pi CM4, is a versatile edge IoT gateway with AI capabilities. It features a comprehensive range of industrial interfaces, including **2x Ethernet, 2x USB, 2x RS485, 2x RS232, 2x DI, and 2x DO**, along with flexible wireless connectivity options such as **4G, LoRa®, and Wi-Fi/BLE**. These features make it an ideal choice for various industrial applications.
The reComputer R1100 series is widely used in IoT applications, including **data acquisition and process monitoring, automation and robotics control, intelligent manufacturing, and industrial communication and networking**. Its compact size, flexibility, low cost, and programmability provide strong support for **automation, IoT systems, and beyond**.

## Hardware Requirements

You need to prepare the following hardware

- reComputer R1100 x 1
- Host Computer (Windows/Mac/Linux) x 1
- Ethernet cable x 1
- Power adapter (12V-24V) BYO
- USB Type-C cable x 1 

## Software Requirements

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Steps for Flashing Raspbian OS

- **Step 1.** Make sure switch is set to `Flash mode` according to the diagram below:

<div class="table-center">

| Switch Position                                              | Mode        | Description    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | Boot from eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Boot from USB  | High      |

</div>

- **Step 2.** Please use the USB Type-C data cable connect to the Type-C port on the reComputer R1100, as shown in the below image,

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png" /></div>

- **Step 3.** Please connect the Power Cord from the power supply to the reComputer R1000 power port.

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img 
        width="100" 
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" 
        style={{ transform: 'rotate(90deg)' }} 
    />
</div>

<br></br>

:::note
The power solution utilizes a bridge rectifier diode for reverse polarity protection and is compatible with both AC and DC inputs. This ensures that regardless of how the power supply's positive and negative terminals are connected, the circuit will not be damaged. By using a bridge rectifier, the output voltage polarity remains fixed irrespective of the input DC polarity, providing effective reverse polarity protection.
:::

Now let's move on to software set up on your host computer. Please follow the steps according to your desired operating system

### For Windows

- **Step 1.** Download the **rpiboot setup installer** by click **[here](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** to install the necessary drivers and the boot tool

- **Step 2.** Connect reComputer R1100 the PC via USB Type-C cable

Windows will now find the hardware and install the necessary drivers

- **Step 3.** Search for **rpiboot** tool that we installed before and open it

- **Step 4.** Open **file explorer** and you will see the eMMC of the Computer Module 4 shown as a **USB mass storage device**

- **Step 5.** Download **Raspberry Pi Imager** software from **[here](https://www.raspberrypi.org/software/)**

- **Step 6.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 7.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wiFi, set locale settings** and more

:::note
The system has preset a username and password. Please set the default username to "**recomputer**" and the default password to "**12345678**" when logging in. If you set different credentials and encounter issues, please reflash OS if your purchase the first batch of reComputer R1000. 
:::

- **Step 8.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** You can select other OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Or you can use this link to download the image file:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Step 9.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 10.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.

- **Step 11.** Flip the **Boot Mode switch** back to the **Normal mode** position

Now you can skip to **[here](#install-drivers)**

