---
description:  UartSB Frame
title:  UartSB Frame
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /UartSB_Frame
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Top.jpg)

**UartSB Frame** is a USB based programming adapter for **Seeeduino Film** equipped with a FPC socket. The integrated USB UART IC **FT232RL** can be used for programming or communicating with MCUs with 3.3V logic. It also doubles as a "FT232RL" Low Voltage(3.3V) Breakout board. **UartSB Frame** provides breakouts for the bit-bang mode pins of **FT232RL** as well.This Bit-bang mode pins (8 I/O pins) can be used as a replacement for applications involving PC parallel port which is scares now a days.

**Model:[PGM31058P](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)**



##   Features

*   USB 2.0 compatible Serial Interface.
*   20 Pin FPC connector for attaching **Seeeduino Film**
*   3.3V compatible I/Os.
*   3.3V and 5V dual power outputs.
*   Bit-Bang mode ready (8 Serial I/Os or as SPI).
*   LEDs for TxD,Rxd and Power.

##   Applications Ideas  

*   Programmer for **Seeeduino Film** and 3.3V compatible boards.
*   USB to Serial adapter for communicating with 3.3V level Serial devices.
*   Programmer for micro-controllers / CPLDs using ISP(in-circuit-serial-programming).
*   3.3V / 5V power source for a breadboard MCU applications.
*   The 5V supply can be used to charge the Seeeduino Film battery. (Do not use FPC connection for this application)
*   Endless possibilities as a USB based parallel device in FT232RL bit-bang mode - Known to work as **AVR-ISP**, Slowspeed **JTAG** with OpenOCD and as **I2C**

##   Cautions  

<font color="red">**
**</font>

*   Connect UartSB Frame to Seeeduino Film only as shown in **Seeeduino Film Programmer** "UartSB_Frame#Seeeduino_Film_Programmer") section.
*   Do not use FFC (Flexible Flat Cable) to directly connect UartSB Frame to Seeeduino Film. This would reverse the 20 pin FPC connection.

*   Handle the 20 pin FPC connector with care.

*   Use **UartSB Frame** only with 3.3v I/Os.

##   Schematic  

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Schematic_1.png)

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Scehmatic_2.png)

##   Specifications  

###   Key Specifications  

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row">Microprocessor</th>
<td>FT232RL</td>
</tr>
<tr>
<th scope="row">PCB size</th>
<td>35mm x 20mm</td>
</tr>
<tr>
<th scope="row">Indicators</th>
<td>POWER - Green LED, RX and TX - Red LEDs</td>
</tr>
<tr>
<th scope="row">Power supply</th>
<td>3.3V and 5V DC</td>
</tr>
<tr>
<th scope="row">Interface</th>
<td>Mini-B USB, 2.54mm pitch pin header</td>
</tr>
<tr>
<th scope="row">Seeeduino Programming Port</th>
<td>20 Pin FPC socket</td>
</tr>
<tr>
<th scope="row">Connectivity</th>
<td>USB</td>
</tr>
<tr>
<th scope="row">Communication Protocol</th>
<td>UART, Bit Bang I/O, SPI</td>
</tr>
</table>

###   Electrical Characterstics  

<table>
<tr>
<th>Specification</th>
<th>Minimum</th>
<th>Typical</th>
<th>Maximum</th>
<th>Unit</th>
</tr>
<tr>
<td>Input voltage</td>
<td>-</td>
<td>5</td>
<td>5</td>
<td>Vdc</td>
</tr>
<tr>
<td>Current Consumption</td>
<td>-</td>
<td>-</td>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<td>Output voltage</td>
<td>3.3</td>
<td>-</td>
<td>5</td>
<td>Vdc</td>
</tr>
</table>

##   Pin definition and Rating  

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Outline_35mmx20mm.png)

<table>
<tr>
<th>Pad Name</th>
<th>Description</th>
</tr>
<tr>
<td width="100px">GND</td>
<td width="450px">Ground pin</td>
</tr>
<tr>
<td width="100px">3v3</td>
<td width="450px">3.3V Power Supply</td>
</tr>
<tr>
<td width="100px">5V</td>
<td width="450px">5V Power supply from USB Port</td>
</tr>
<tr>
<td>RXD</td>
<td>UART Data input</td>
</tr>
<tr>
<td>TXD</td>
<td>UART Data output</td>
</tr>
<tr>
<td width="100px">CTS</td>
<td width="450px">UART Clear to Send Signal</td>
</tr>
<tr>
<td width="100px">RTS</td>
<td width="450px">UART Request to Send Signal</td>
</tr>
<tr>
<td width="100px">DTR</td>
<td width="450px">UART Data Terminal Ready Signal</td>
</tr>
<tr>
<td width="100px">DCD</td>
<td width="450px">UART Data Carrier Detect Signal</td>
</tr>
<tr>
<td width="100px">DSR</td>
<td width="450px">UART Data Set Ready Signal</td>
</tr>
</table>

##  Usage

###   Seeeduino Film Programmer

**UartSB Frame** is designed exclusively for flashing **Seeeduino Film**. It works as a USB to Serial Port (COM port) interface when connected to PC. This kind of configuration can be used to communicate with a MCU serial port.Also useful to program a MCU which support UART based ISP.

*   If the FT232RL drivers were not installed, follow the procedure in next section(configuring UartSB Frame).

*   Connect the Seeeduino Film to UartSB Frame as shown below :

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Film_with_UartSB_Frame.jpg)

*   Set the board type to Arduino Pro or Pro Mini (3.3V, 8MHz) w/ATMega168 in Arduino IDE

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Arduino_Board_Selection.jpg)

*   Upload the sketch.

####   Configuring UartSB Frame in **Windows**

*   In Windows OS, the first time you plug in the device, you might be asked for the driver.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Detected_Windows.JPG)

Download and install the **Virtual COM port** driver from FTDI website :

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

*   A wizard opens for installing the driver. Choose "Install from a list or specific location"

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_1.JPG)

*   Choose the downloaded driver path

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.JPG)

*   If you have downloaded unsigned driver, the following Window appears. Just click "Continue Anyway"

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.1.JPG)

*   **UartSB Frame** driver is successfully installed. Windows assigns a **COM** port name to **FT232RL** like **COM10**, **COM11** etc... Please check the exact name in Device Manager.  In this case "**COM16**" is assigned for UartSB Frame

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_3.JPG)

####   Configuring UartSB Frame in **GNU/Linux**

All modern **GNU/Linux OS** comes with FT232RL drivers. To check if UartSB Frame is detected, Issue a **lsusb** command. An output similar to below should appear.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Lsub.png)

**GNU/Linux** assigns **/dev/ttyUSB0**, **/dev/ttyUSB1** etc... as device name.  

To verify the working of serial port connect **TxD** and **RxD** pins of UartSB Frame and use a terminal application like **cutecom** to configure the device parameters as shown below. 

**Baudrate**:9600, **Data bits**:8, **Stop bits**:None and no Handshake

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Txd_Rxd_connected.jpg)

Any character typed in terminal would be echoed back as shown.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartsBee-CuteCom.png)

The same functionality can be verified in **Windows** - **Hyperterminal** as well.

###   Battery Charger for Seeeduino Film  

The USB 5v supply available in **UartSB Frame** breakout can be used to charge the battery of **Seeeduino Film**.

*   Solder the **Seeeduino Film** Power-Connector to 5V and GND of **UartSB Frame**.

*   Connect Power connector to **CHG** jack.

*   Connect the Battery to Seeeduino Film **BAT** jack.

*   Power on the USB.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Battery_Charging_with_UartSBFrame.jpg)

###   BitBang Mode  

An nice feature of UartSB Frame compared to other FT232RL based USB-Serial devices is that all the Bit-Bang I/Os are brought to the header pins.

Bit-Bang mode is a special feature of FT232RL in which 8 I/O lines (**D0 - D7**) can be used as a general purpose bidirectional  I/O lines. Three Bit-Bang modes are supported by FT232RL

*   **Asynchronous Bit-Bang mode **

Any data written to the device is clocked to the configured output pins. The rate of data transfer is configured based on baud rate generator. In this mode any of 8 I/O lines can be configured as input or ouput.

*   **Synchronous Bit-Bang mode**

In this mode data is sent synchronously. An input is read before an output byte is sent to the device. Hence to read input, a write operation must be performed.

*   **CBUS Bit-Bang Mode**

This is a special mode which requires reprogramming of FT232RL EEPROM. This uses signals **C0 - C3**.

**Bit-Bang Mode** of **FT232RL** is well documented in the application note[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Table: Bit-Bang I/O Mapping**

<table>
<tr>
<th>UartSB Frame Signal</th>
<th>BitBang I/O Signal</th>
</tr>
<tr>
<td>TxD</td>
<td>D0</td>
</tr>
<tr>
<td>RxD</td>
<td>D1</td>
</tr>
<tr>
<td>RTS</td>
<td>D2</td>
</tr>
<tr>
<td>CTS</td>
<td>D3</td>
</tr>
<tr>
<td>DTR</td>
<td>D4</td>
</tr>
<tr>
<td>DSR</td>
<td>D5</td>
</tr>
<tr>
<td>DCD</td>
<td>D6</td>
</tr>
<tr>
<td>RI</td>
<td>D7</td>
</tr>
</table>

**BitBang Mode Operation:**

A simple Asynchronous Bit-Bang mode operation is demonstrated in the below breadboard arrangement in which DTR (D4) pin is connected to an LED. The LED blinking rate is controlled by the PC side application program.

**LED Blinky Circuit**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_BitBang_demo.jpg)

This above image is made with Fritzing.org

**Bit Bang I/O Pins (ISP header) shown at Bottom Layer**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Bottom.jpg)

Bit-Bang mode requires special FTDI direct driver called [D2XX](https://www.ftdichip.com/Drivers/D2XX.htm). This driver needs to be installed after removing the Virtual COM Port driver of FT232RL chip. In GNU/Linux this driver runs in kernel mode. As an alternative to D2XX an Free Open Source driver [libFTDI](http://www.intra2net.com/en/developer/libftdi/) is available. This works in Windows, GNU/Linux and Mac OS. It runs in user mode in GNU/Linux. Hence no need to remove the existing FT232RL driver.

**libFTDI**

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

**libUSB** libFTDI required libusb which can be downloaded from 

[http://www.libusb.org/](http://www.libusb.org/)

The below example code can be compiled in the similar way as that of libFTDI example files. An easy way is to copy the contents of the below code to one of the existing example .c file and build the whole driver using

./configure

make

 **Code Example**


Blinky.C: UartSBee v3.1 (FT232RL) Bit-Bang mode - Blinky.

Circuit:
Connect TXD to Anode of LED, Connect one end of resistor to GND and other end
to Cathode of the LED

```c
#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// 8 bit pin mask for I/O pin </span>
#define TXD 0x01  
#define RXD 0x02  
#define RTS 0x04  
#define CTS 0x08  
#define DTR 0x10
#define DSR 0x20
#define DCD 0x40
#define RI  0x80

#include &lt;stdio.h&gt;;
#include &lt;ftdi.h&gt;;    

int main
{ 
    unsigned char ouputState =0;
    struct ftdi_context ftdic;

    /* 1. Initialize ftdi device context */
    ftdi_init(&amp;ftdic);  

    /* 2. Open the device based of VID/PID pair */

    if(ftdi_usb_open(&amp;ftdic, 0x0403, 0x6001) &amp;lt<span ;>0)
    {
        printf("Unable to open UartSBs Frame");
        return1;}

    /* 3. Enable Bit-Bang mode with for DTR line  */
    ftdi_set_bitmode(&amp;ftdic, TXD, BITMODE_BITBANG);

    /* 4. Blink LED every 1 second */
    while(1)</span> <span class="br0">{
        ouputState ^= TXD;
        ftdi_write_data(&amp;ftdic, &amp;ouputState, 1);
        sleep(1);
    }
}
```
FT232RL Bit-Bang mode can be used to construct AVR ISP, JTAG, SPI and I2C Ports. Refer the external links.

##   Image Gallery

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSBFrame_SeeeduinoFilm_Programming.jpg) 

##   FAQ  

Please list your question here:

##   Support  

If you have questions or other better design ideas, you can go to our [forum](https://www.seeedstudio.com/forum) or **wish** to discuss.

##   Document Version Tracker  

<table>
<tr>
<th>Revision</th>
<th>Description</th>
<th>Editor</th>
<th>Release Date</th>
</tr>
<tr>
<td>V0.9b</td>
<td>Detailed Application Notes</td>
<td>Visweswara R</td>
<td>22 Feb 2010</td>
</tr>
</table>

##   Hardware Version Tracker  

<table>
<tr>
<th>Revision</th>
<th>Description</th>
<th>Release Date</th>
</tr>
<tr>
<td>UartSBs Frame</td>
<td>0.9b</td>
<td>Feb 22, 2010</td>
</tr>
</table>

##   Bug Tracker  

Bug Tracker is the place you can publish any bugs you think you might have found during use. Please write down what you have to say, your answers will help us improve our products.

##   Additional Idea  

The Additional Idea is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page.

##   Resources  

- **[Eagle]**[Schematic and Board Files in Eagle](https://wiki.seeedstudio.com/images/d/d3/UartSBs_Frame_Schematic_Board.zip)

- **[PDF]** [PDF Schematic](https://wiki.seeedstudio.com/images/9/91/UartSBs_0.9b_Schematic.pdf)

##   How to buy  

Click here to buy [UartSB Frame](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)


##   Licensing  

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/).  Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

##   External Links  

*   **[[2]](https://www.ftdichip.com/Products/ICs/FT232R.htm)**[FTDI FT232RL product Page](https://www.ftdichip.com/Products/ICs/FT232R.htm)

* [[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm) FTDI Virtual COM Port (VCP) drivers
* [FTDI D2XX drivers](https://www.ftdichip.com/Drivers/D2XX.htm)

* [FTDI Bit-Bang mode application note](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Open Source Drivers**

* [libFTDI](http://www.intra2net.com/en/developer/libftdi/)

* [libUSB](http://www.libusb.org/)

**Other Sources of FT232RL application information**

* [Hackaday - Introduction to bit-bang mode](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)

* [FT232R JTAG implementation with OpenOCD ](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)

* [FT232R SPI Bitbang Mode example](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)

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
