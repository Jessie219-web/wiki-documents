---
description: Rainbowduino_LED_driver_platform-ATmega328
title: Rainbowduino LED driver platform-ATmega328
keywords:
- Rainbowduino_LED_driver_platform-ATmega328
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rainbowduino_LED_driver_platform-ATmega328
last_update:
  date: 01/20/2023
  author: Matthew
---

|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_LRG.jpg) |![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_01_LRG.jpg)
|---|---|

The Rainbowduino board is an Arduino compatible controller board with professional LED driving capacity. It will drive an 8x8 RGB Led Matrix (Common Anode).

* No external circuit required, plug and shine!

* 24 constant current channels of 120mA each

* 8 super source driver channel of 500mA each

* Wide output voltage adaption from 6.5V-12VDC

* Dedicated GPIO and ADC

* Hardware UART and I2C communication

* Easy cascading

* Small form and light weight

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328-p-371.html)

## Standalone Mode (plug and shine)

---
Needed Hardware:

* 1 x Rainbowduino

* 1 x RGB LED Matrix

The simplest work mode, no external Systems needed (only a ttl serial adapter to upload the firmware). The LED matrix content is generated by the Rainbowduino itself.

Use Case:

* Simple real-time animations calculated by the Rainbowduino

* Display pre-stored animations, limited due the 32kb ROM of the Rainbowduino

## UART Mode

---
Needed Hardware:

* 1x Rainbowduino

* 1x RGB LED Matrix

* 1x TTL Level converter

* 1x UART sender unit (Arduino, PC...)

Send data (LED matrix content) from your computer to one Rainbowduino. As the Rainbowduino does not have a USB connector but a TTL serial connection you need a TTL serial level converter (BusPirate, UartSBee, Arduino...).

**Use Case:**

PC or Arduino generated frames displayed on ONE Led Matrix

## I2C Mode

---
Needed Hardware:

* 1..n x Rainbowduino

* 1..n x RGB LED Matrix

* 1 x I2C master device (for example an Arduino)

* Some cables

Send data (LED matrix content) from your computer to multiple Rainbowduino’s. A side-note if you use an Arduino with an FTDI USB to Serial adapter (Duemillanove, Diecimila...) - there is a Latency of ~16ms to send data from your computer to the Arduino. The new Arduino UNO have a much lower latency ~4ms.

Use Case:

PC or Arduino generated frames displayed on **multiple** Led Matrices

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-i2c-cabling.png)

## I2C Cascading

---
Rainbowduino is designed for easy casacading. After physically connected, power is passed on, and you may control the chain by I2C. Please note that each Rainbowduino must be assigned for a uniqe address for I2C communication.

Prepare the power connection:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chain-prepare.png)

Rainbowduino cascaded:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chained.png)

## Specification

---
* Microprocessor：Atmega 328

* PCB size：60mm *60mm* 1.6mm

* Indicators：Reset, Power, Pin 13 LED

* Power supply：6.5-12 VDC (9 VDC recommended)

* Power connector：2 pin JST Terminal Blocks, 3mm DC Jacks

* Cascading Power Connector：Terminal Blocks

* Program interface：UART / ISP

* LED dot-matrix sockets：32

* Expansion socket：2.54mm bended pinheader pair

* Communication Protocols：I2C / UART

* RHOS：Yes

* Input Voltage：6.5~12V

* Global Current Consumption：600~2000mA

* Constant Current Channels (Cathode)：24

* Constant Current per channel (Cathode)：20~120mA

* Source Driver Current per channel (Common-Anode)：500mA

* Source Driver Voltage per channel (Common-Anode)：9~12V

* Source Drive Channels：8

* Drive LED count：192

* Circuit Response Time：10ns

* RGB Led Matrix color resolution per dot：4096：Uart Baud Rate：115200baud

## LED devices Compatibility

---
Before direct plug into the female pin-headers, please verify if the RGB dot matrix are proven compatible. The concern is mainly on the pin out, where same color LEDs are in cluster, here we attach the scheme and photo demonstration. The color sequence might change, since the controlling logic are open source and easily reprogrammable.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-schema.png)

The power of Rainbowduino is well beyond driving a RGB dot-matrix. With 192 output count, and up to 120mA constant current capacity, you may easily populate massive LED setups.

The output current of each channel (IOUT) is set by an external resistor, Rext. The relationship between Iout and Rext is shown in the following figure. Please refer to MBI5168 data-sheet for more details. Adjusting the 1k Potentiometer clockwise to reduce the output current (default minimal 20mA for RGB dotmatrix), rotating counter-clockwise to increase the output current. The potentiometers are single circle, please NOTE that strong force will break it into unlimited rotatable, then you would need a multimeter to adjust. :)

This means you can build your own LED matrix without any additional resistors.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-voltage.png)

## Demonstration

---
<big>Requirements </big>

* Rainbowduino board

* A Common Anode RGB Matrix

* An Arduino board (Optional)

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-connected-matrix.png)

<big>Prepare Rainbowduino Hardware </big>

Connect the RGB LED Matrix to the Rainbowduino and connect "Pin 1" to the red connection block. Pin1 is marked by a square solder point, while the other pins use a round solder point.

<big>Upload Firmware  </big>

1.Upload a piece of code to Arduino first:
In order to use the Arduino to upload the firmware to the Rainbowduino, make sure that the Arduino is clean - we need to upload an empty firmware sketch as below shows to it.

```
void setup() {}

void loop() {}
```

2. Upload Firmware to Rainbowduino

Open the Rainbowduino firmware, **select the correct board** (Tools--&gt;board--&gt; Arduino Duemilanove or Nano w/ ATmega328) and upload the Firmware. At least that’s the theory ;)
 For your viewing pleasure, here is the connection scheme:
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fritz-uploadfw.png)

We use an external power source, however you could also use the 5V from the Arduino.

**NOTE:** If you own a Rainbowduino v1 board, you need to select the "Arduino Diecimila, Duemilanove, or Nano w/ ATmega168"!

<table >
<tr>
<th>Arduino</th>
<th>Rainbowduino</th>
<th>RESET</th>
<th>DTR</th>
<th>GND</th>
<th>GND</th>
<th>RX</th>
<th>RX</th>
<th>TX</th>
<th>TX</th>
</tr>
</table>

3.Use UartSB to Upload firmware

Those screenshot's shows how to connect the UartSBee to the Rainbowduino:

| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeONE.jpg)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeTWO.jpg)
|---|---|

If you connect the UartSBee to the USB bus, it should register a new serial port. Now simply upload your firmware using the new serial port.

4.Use a Buspirate to Upload firmware / bootloader

I'm explaining three methods of programming (all using the buspirate):

* programming through the ISP.
* programming using avrdude and manual reset (no patching necessary)
* programming through avrdude with a tiny patch.

DISCONNECT THE RAINBOWDUINO FROM THE DISPLAY AND POWER.

STEP 1: To use the Buspirate you need a new version of avrdude [[1]](http://download.savannah.gnu.org/releases/avrdude/). I'm using version 5.10 and that recognizes the '-c buspirate' programmer option. You can test this with

```
./avrdude -c buspirate -C ./avrdude.conf
```

If this complains about the programmer, then you need a newer version of the buspirate.

STEP 2: connect the buspirate to the rainbowduino ISP connector like this:

<table >
<tr>
<th> Buspirate</th>
<th> ISP</th>
<th> ISP pin</th>
</tr>
<tr>
<td width="80px"> GND</td>
<td width="80px"> GND</td>
<td width="80px"> 6</td>
</tr>
<tr>
<td> +5V</td>
<td> Vcc</td>
<td> 2</td>
</tr>
<tr>
<td> CS</td>
<td> RESET</td>
<td> 5</td>
</tr>
<tr>
<td> MOSI</td>
<td> MOSI</td>
<td> 4</td>
</tr>
<tr>
<td> MISO</td>
<td> MISO</td>
<td> 1</td>
</tr>
<tr>
<td> SCL/CLK</td>
<td> SCK</td>
<td> 3</td>
</tr>
</table>

STEP 3: find the correct bootloader (I'm using the tiny optiboot firmware). Copy this file to your freshly compiled avrdude directory.

STEP 4: program the atmega 328p with

```
./avrdude -v -c buspirate -p m328p -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:optiboot_atmega328.hex
```

This takes a very long time...

I started with uploading firmwares without the bootloader and that works fine. Trick is to get the HEX files from the arduino IDE. In version 0.22-Linux they are stored in /tmp/buildXXXXXXXXXXXX and NOT in the sketches directory. Just issue the 'Upload' command without any programmer connected (press &lt;shift&gt; during while pressing the 'upload' button to get much debug info from the arduino ide).

After you have the bootloader on the rainbowduino you can use the transparent serial interface of the buspirate. Set the baudrate to 115200 and enter the '(3)' macro to activate transparent mode. The buspirate now acts like a USB-serial converter (any other FTDI like usb-serial converter could be used). Issue with the buspirate is that there is no DTR to reset the arduino with. You now have to time the reset and upload manually. Pressing reset after starting the upload seems to work best.

```
HiZ>m
1. HiZ
2. 1-WIRE
3. UART
4. I2C
5. SPI
6. JTAG
7. RAW2WIRE
8. RAW3WIRE
9. PC KEYBOARD
10. LCD
(1) >3
Mode selected
Set serial port speed: (bps)
1. 300
2. 1200
3. 2400
4. 4800
5. 9600
6. 19200
7. 38400
8. 57600
9. 115200
10. 31250 (MIDI)
(1) >9
Data bits and parity:
1. 8, NONE *default
2. 8, EVEN
3. 8, ODD
4. 9, NONE
(1) >
Stop bits:
1. 1 *default
2. 2
(1) >
Receive polarity:
1. Idle 1 *default
2. Idle 0
(1) >
Select output type:
1. Open drain (H=Hi-Z, L=GND)
2. Normal (H=3.3V, L=GND)
(1) >2
READY
UART>(3)
UART bridge. Space continues, anything else exits.
Reset to exit.
```

After that you can program the arduino with the bootloader:

```
./avrdude -v -c stk500v1 -p m328p -b 115200 -F -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:Rainbow_Plasma.cpp.hex
```

One step further is to patch avrdude in the file 'arduino.c'. The buspirate sends the 'rts' signal with the wrong polarity to the arduino but by swapping 1 for 0 and 0 for 1 that is fixed.From then on you have to choose 'arduino' as programmer instead of 'stk500v1'.

```
static int arduino_open(PROGRAMMER * pgm, char * port)
{
    fprintf(stderr, "arduino_open...\n");
    strcpy(pgm->port, port);
    serial_open(port, pgm->baudrate? pgm->baudrate: 115200, &pgm->fd);

  /* Clear DTR and RTS to unload the RESET capacitor
   * (for example in Arduino) */
    serial_set_dtr_rts(&pgm->fd, 1);
    usleep(50*1000);
  /* Set DTR and RTS back to high */
    serial_set_dtr_rts(&pgm->fd, 0);
    usleep(50*1000);

  /*
   * drain any extraneous input
   */
    stk500_drain(pgm, 0);

    if (stk500_getsync(pgm) < 0)
    return -1;

    return 0;
}
```

_Note: change the programmer type used by the arduino ide in the 'boards.txt' file._

Source: buspirate-avr-programming [[2]](http://hintshop.ludvig.co.nz/show/buspirate-avr-programming/), Bus_Pirate_AVR_Programming [[3]](http://dangerousprototypes.com/docs/Bus_Pirate_AVR_Programming), Optiboot [[4]](http://code.google.com/p/optiboot/)

## Rainbowdunio Firmware

<big>Neorainbowduino Firmware</big>

This firmware bundle comes with two firmwares (one for a Arduino, one for the Rainbowduino) and a Processing library. You can send data from any Application via the serial line to the Arduino - the Arduino then sends the images to the corresponding Rainbowduino device. I created an easy-to-use Processing library to get started.

Source: [http://code.google.com/p/neorainbowduino/](http://code.google.com/p/neorainbowduino/)

**Features:**

* I2C enabled firmware (supports multiple Rainbowduino’s)

* Processing library, so you can easily control your Rainbowduino from Processing!

* Send full frames from Processing to Rainbowduino

* Send frames from Processing to your RGB matrix, each frame has a size of 8x8 pixel, 12bit color resolution (4096 colors). The color conversion is handled by the library

* Optimized processing lib - send only frames to Rainbowduino if needed (save ~50% of traffic - of course it depends on your frames)

* Fixed buffer swapping (no more flickering)

* Added i2c bus scanner, find your Rainbowduinos if you forget their addresses

Supported Work Modes: I2C

<big>Requirements </big>

This firmware allows you to use Processing to control the rainbowduino, so its obvious you need:

* Processing Software, get it from [http://processing.org/](http://processing.org/)

<big>Patches for Arduino IDE</big>

Because the neorainbowduino firmware sends full frames via I2c (92 bytes) we need to patch the I2c buffer size for the arduino (to optimize transfer speed). I hope the Arduino supports variable buffer size in near future. Make sure your **Arduino IDE is closed** if you patch the files!

**File to patch:** Java/libraries/Wire/utility/twi.h

**Reason:** Increase the I2C speed from 100kHz to 400kHz, increase the I2C buffer size from 32 bytes to 98 bytes

<big>Original File</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ 100000L
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH 32
#endif
```

<big>Patched File</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ **400000L**
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH **98**
#endif

```

x

**File to patch:** Java/libraries/Wire/Wire.h

**Reason:** Increase the Serial buffer size from 32 bytes to 98 bytes

<table>
<tr>
<th>Original File</th>
<th>Patched File</th>
</tr>
<tr>
<td width="300px"></td>
<td width="300px"></td>
</tr>
</table>

<pre>#define BUFFER_LENGTH 32</pre>

<pre>#define BUFFER_LENGTH **98**</pre>

<big>Upload Firmware to Rainbowduino</big>

Upload the firmware (see Upload Firmware), the firmware file you need is **rainbowduinoFw/Rainbow_V2_71/Rainbow_V2_71.pde**.

**Note:** This firmware use the I2C protocol to communicate - each Rainbowduino needs a unique I2C address. The address can be configured by editing the Rainbowduino.h file (`#define I2C_DEVICE_ADDRESS 0x06`). So dont forget to change the address if you upload this firmware to more than one rainbowduino's!

<big>Upload Firmware to Arduino</big>

Disconnect the RX/TX lines between Rainbowduino and Arduino. Upload the Arduino firmware **arduinoFw/neoLed/neoLed.pde** to the Arduino.

<big>Interact with Rainbowduino</big>

This chapter will show you a **simple way to communicate** with your Rainbowduino. You need an Arduino (working as a serial to I2C gateway) and a Rainbowduino with an I2C address of 0x06.

The connection between the Rainbowduino and Arduino should look like this:
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-neorainbow.png)

We use an external power source, however you could also use the 5V from the Arduino.

<table>
<tr>
<th> Arduino</th>
<th> Rainbowduino</th>
</tr>
<tr>
<td width="150px">RESET</td>
<td width="150px">DTR</td>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>Analog IN 4</td>
<td>SDA</td>
</tr>
<tr>
<td>Analog IN 5</td>
<td>SDL</td>
</tr>
</table>

<big>Install Processing Libraries </big>

After you installed the Processing Software, you'll need to install the neorainbowduino libraray. You can find the processing library in the **processingLib\distribution\neorainbowduino-x.y\download** directory. Unpack the zip-file to your Processing home folder (there is a README.TXT file inside for detailed instructions, how to install).

When you start Processing you should able to import the neorainbowduino library):

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-processing-lib.png)

**Simple Example**

Here is a very simple Processing sketch to send som random rectangles to the rainbowduino.

```c
import processing.serial.*;
import com.neophob.lib.rainbowduino.test.*;
import com.neophob.lib.rainbowduino.*;

static final int SIZE = 400;
Rainbowduino r;

void setup() {
    frameRate(15);
    background(0);
    size(SIZE, SIZE);

    //initialize rainbowduino
    List<Integer> list = new ArrayList<Integer>();
    list.add(6);         //use rainbowduino with slave id 6
    try {
        r = new Rainbowduino(this, list);
        System.out.println("ping: "+r.ping());
    } catch (Exception e) {
        println("FAILED to open serial port!!");
        e.printStackTrace();
    }

    smooth();
    noStroke();
}

void draw() {
    //draw some simple stuff on screen
    color c1 = color(128+(int)random(64), 128, (int)random(255));
    fill(c1);

    int size = 80+(int)random(80);
    int x = (int)random(SIZE);
    int y = (int)random(SIZE);
    rect(x, y, size, size);<br>
    //send PApplet to the Rainbowduino lib - and send it to slave id 6
    r.sendRgbFrame((byte)6, this);
}
```

TODO add some screenshots

**How Image resizing works**

The image will be resized using an Area Averaging Filter. So its important to know, that the image should be correctly aligned. Aligned means, that the result looks good if the image can be divided by 8. Here is a good and bad example:

|Good example (aligned)|Bad example (not aligned)
|---|---|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-src.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-src.png)
| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-dst.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-dst.png)

## mtXcontrol Firmware

Source: [http://www.rngtng.com/mtxcontrol/](http://www.rngtng.com/mtxcontrol/)

**Features:**

* mtXcontrol is an editor written in Processing to easily create image sequences for several output devices containing multicolor LED matrix.

Supported Work Modes: ???

## Firmware 3

Source: [http://code.google.com/p/rainbowduino-firmware/](http://code.google.com/p/rainbowduino-firmware/)

**Features:**

* double-buffering synced with refresh rate

* 4 auxiliary buffers

* hi-level instruction set

* multiple controlled hardware

* I2C communication protocol

* permanent data storage in Eeprom

Supported Work Modes: I2C

## RainbowDashboard

Source: [http://code.google.com/p/rainbowdash/](http://code.google.com/p/rainbowdash/)

**Features:**

* Clean, maintainable code base.

* Compatible with standard firmware.

* Supports UART mode (no Arduino host needed - talk to Rainbowduino directly).

* Double-buffered graphics operations.

* Software real-time clock.

* Animation driven by the Rainbowduino itself.

* Full Windows ANSI (CP1252) character set.

* High-level command set.

Supported Work Modes: UART

Can easily be changed to use I2C; only one file (RainbowDash.pde) needs to be changed.

## How the Firmware works

<big>Microprocessor - Atmega 168/328</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Schema.png)

<table>
<tr>
<th> PORTD</th>
<th> PORTB</th>
<th> PORTC</th>
</tr>
<tr>
<td width="150px">pin02 / PD0 / RXD</td>
<td width="150px">pin14 / PB0 / INT0</td>
<td width="150px">pin23 / PC0 / SDI</td>
</tr>
<tr>
<td>pin03 / PD1 / TXD</td>
<td>pin15 / PB1 / INT1</td>
<td>pin24 / PC1 / CLK</td>
</tr>
<tr>
<td>pin04 / PD2 / INT0</td>
<td>pin16 / PB2 / INT2</td>
<td>pin25 / PC2 / LE</td>
</tr>
<tr>
<td>pin05 / PD3 / INT19</td>
<td>pin17 / PB3 / INT3</td>
<td>pin26 / PC3 / OE</td>
</tr>
<tr>
<td>pin06 / PD4 / INT20</td>
<td>pin18 / PB4 / INT4</td>
<td>pin27 / PC4 / SDA</td>
</tr>
<tr>
<td>pin11 / PD5 / INT21</td>
<td>pin19 / PB5 / INT5/SCK</td>
<td>pin28 / PC5 / SDL</td>
</tr>
<tr>
<td>pin12 / PD6 / INT22</td>
<td></td>
<td></td>
</tr>
<tr>
<td>pin13 / PD7 / INT23</td>
<td></td>
<td></td>
</tr>
</table>

**PORTB** maps to Arduino digital pins 8 to 13 The two high bits (6 &amp; 7) map to the crystal pins and are not usable.

**PORTC** maps to Arduino analog pins 0 to 5. Pins 6 &amp; 7 are only accessible on the Arduino Mini.

**PORTD** maps to Arduino digital pins 0 to 7.

<big>Constant Current LED driver</big>

This driver uses the MBI5168. The MBI5168 is a 8bit [shift register](https://en.wikipedia.org/wiki/Shift_register). It converts the serial data to parallel data. All 3 MBI5168 share the LE,CLK and OE input.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Mbi-schema.png)

<table>
<tr>
<th> Name</th>
<th> Desc</th>
</tr>
<tr>
<td width="50px">OE</td>
<td width="950px">Output Enabled, when (active) low, the output drivers are enabled; when high, all output drivers are turned OFF (blanked).</td>
</tr>
<tr>
<td>LE</td>
<td>Data strobe input terminal, Serial data is transfered to the respective latch when LE is high. The data is latched when LE goes low.</td>
</tr>
<tr>
<td>SDI</td>
<td>Serial data input to the shift register.</td>
</tr>
<tr>
<td>SDO</td>
<td>Serial data output to the following SDI of next driver IC.</td>
</tr>
<tr>
<td>R-EXT</td>
<td>Input terminal used to connect an external resistor dor setting up output current for all output channels.</td>
</tr>
<tr>
<td>CLK</td>
<td>Clock input terminal for data shift on rising edge</td>
</tr>
</table>

<big>Super Source Driver</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-schema-M5456.png)

<big>Shift out data</big>

To display a full frame on the LED Matrix, the Rainbowduino interrupt method needs to be called 128 times. There are 8 lines and 16 brightness levels. Each time the displayNextLine() method gets called, one line gets updated by the current brightness level. After all 8 lines are updated the brightness level gets updated. That’s why this function needs 128 cycles until a full frame is populated on the LED Matrix.

Below you see the LED Matrix display after 32, 64, 96 and 128 cycles. You notice how the brightness is increased.
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fw.1.png)

<big>Support more than 4096 colors (12bit)</big>

The stock firmware (and most 3rd party firmwares) support 12bit color resolution. It is possible to increase this:

<table>
<tr>
<th> Color Resolution</th>
<th> Payload</th>
<th> Brightness Level</th>
</tr>
<tr>
<td width="250px">12 bit (4bit per color), 4096 Colors</td>
<td width="250px">96 bytes (12bit*64=768bit)</td>
<td>16</td>
</tr>
<tr>
<td>15 bit (5bit per color), 32768 Colors</td>
<td>120 bytes (15bit*64=960bit)</td>
<td>32</td>
</tr>
</table>

The benefit of using 4bits per color is the data storage, one byte takes 2 color values - thus it's easy to get the color from a byte buffer. Using 5bits per color needs more cpu power or more buffer space (use 2 bytes for 3 color values - wasting 1bit per color).

To achieve 15 bit color resolution, the firmware needs two changes:

* loop over 32 instead 16 brightness levels

* change the shift out function

## Resources

---

* [A Huge DIY LED Matrix](http://www.neophob.com/2010/11/huge-rgb-led-matrix/)

* [Generic Rainbowduino information](http://www.neophob.com/2010/07/rainbowduino-fun-aka-neorainbowduino/)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

* [prod_documents](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

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
