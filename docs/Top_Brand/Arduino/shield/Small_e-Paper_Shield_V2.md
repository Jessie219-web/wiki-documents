---
description:  Small e-Paper Shield V2
title:  Small e-Paper Shield V2
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Small_e-Paper_Shield_V2
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Small e-Paper Shield V2
category: Shield
bzurl: https://www.seeedstudio.com/Small-e-paper-Shield-V2-p-2462.html
oldwikiname:  Small e-Paper Shield V2
prodimagename:  Small_e-Paper_shield_b.jpg
surveyurl: https://www.research.net/r/Small_e-Paper_Shield_V2
sku:   104030019
--- -->
 ![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Small_e-Paper_shield_b.jpg)

e-paper might be the most comfortable material to read. It reflects light instead of emits light to mimic the experience of conventional paper reading. And in this way much less power is consumed. Small e-paper shield is a driver shield for e-paper of small sizes. It's capable of driving e-papers of 1.44 inch, 2.0 inch and 2.7 inch and supports more than 170 langusges. The upper surface of this shield is left flat and clean to give great support to the e-paper attached to it. If you are considering a lightweight and comfortable to read display, e-paper would be a good choice.

**Attention:** Since this driver board supports e-papers of different sizes. e-paper is not included in this product. We have e-paper of 2.0 inch and 2.7 inch on sale simultaneously. Go and add the most suitable one to your cart now!

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Small-e-paper-Shield-V2-p-2462.html)

### Choose the library

In order to choose the correct library you should know the version of your panel.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Definition_of_Model_Labels.jpg)

**Pay attention to your panel's label**:

* if the model name is 'EG020AS012' or 'EM027AS011',then you should choose the old library, please click here [Small e-Paper Library](https://github.com/Seeed-Studio/Small_ePaper_Shield).

* if the model name is 'EG020BS011' or 'EM027BS013',then you should choose the new library,please click here [New Panel Library【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdV230.rar).

## Specifications

---
Compatible board: Arduino Uno/Leonardo/Arduino Mega/Linkit ONE

Operating Voltage: 3.3/5VDC

Operating Current(refresh screen):40mA

Interface Type: SPI

<font color="Green">PINs on Arduino</font>

<table>
  <tr>
    <th>Arduino</th>
    <th>E-paper</th>
  </tr>
  <tr>
    <td width="150px">D2</td>
    <td width="250px">M_EPD_PANEL_ON</td>
  </tr>
  <tr>
    <td>D3</td>
    <td>M_EPD_BORDER</td>
  </tr>
  <tr>
    <td>D4</td>
    <td>M_/SD_CS</td>
  </tr>
  <tr>
    <td>D5</td>
    <td>M_EPD_PWM</td>
  </tr>
  <tr>
    <td>D6</td>
    <td>M_EPD_/RESET</td>
  </tr>
  <tr>
    <td>D7</td>
    <td>M_EPD_BUSY</td>
  </tr>
  <tr>
    <td>D8</td>
    <td>M_EPD_DISCHARGE</td>
  </tr>
  <tr>
    <td>D9</td>
    <td>M_/WORD_STOCK_CS</td>
  </tr>
  <tr>
    <td>D10</td>
    <td>M_/EPD_CS</td>
  </tr>
  <tr>
    <td>ICSP PORT</td>
    <td>M_MOSI , M_SCK , M_MISO</td>
  </tr>
  <tr>
    <td>A0</td>
    <td>M_TEMP_SEN</td>
  </tr>
  <tr>
    <td>A1</td>
    <td>M_OE123﻿﻿</td>
  </tr>
  <tr>
    <td>A2</td>
    <td>M_CKV</td>
  </tr>
  <tr>
    <td>A3</td>
    <td>M_STV_IN</td>
  </tr>
  <tr>
    <td>3.3V</td>
    <td>M_VCC_3V3</td>
  </tr>
  <tr>
    <td>5V</td>
    <td>M_VCC_5V</td>
  </tr>
</table>

## Demonstration

---
Small e-Paper Shield can display image, a variety of graphics and texts. There are plenty of examples in library that give you some ideas on how to use the module. Now let us experience the strong library and wide viewing angle of e-Paper.

### Hardware Installation

* Connect e-Paper to the FFC interface of Small e-Paper Shield.
* Plug Small e-Paper Shield to Arduino/Seeeduino and connect it to PC using a USB cable.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/E-Paper_Screen.jpg)

Now it is time to show demos using the library which needs download from [here](https://github.com/Seeed-Studio/ePaper). After downloading, you need put it into the library file of Arduino IDE by the path:...\arduino-1.0.1\libraries.

### Demo Showing

Here we select the 2.0 inch screen as an example to show its display functions.

#### Demo 1: Display texts

* Open the code: File- &gt;Examples- &gt;ePaper-&gt;text as show below:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Text_Code.jpg)

**Important Note:**

> We need to re-emphasize this note:
>
> - If you use Arduino UNO, Seeeduino 3.0 and any board that uses Atmega 328P or Atmega32U4 as controller, you should insert an SD card using this demo. The SD card is used to store temporary data because of the little storage space of Atmega328p and Atmega32U4.
> - If you use an Arduino Mega, or any other board that uses Atmega1280 or Atmega2560, you don't need to insert an SD card.

* Change the parameter to match your screen size. You need to change 200 to 270 if your screen is 2.7 inch. And you need to do this change when usisng other examples.

<pre>#define SCREEN_SIZE 200 // choose screen size: 144, 200, 270</pre>

* Upload the code to your microcontroller. Please click [here](/Upload_Code) if you do not know how to.

* Now you can see this:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Display_text.jpg)

* Try to change the display text and display location. You may learn every function usage.

#### Demo 2: Display graphic

The example: _draw_ will be a good example to display a variety of graphics. You need to open this code: _draw_ like demo 1. Remember the note about whether you need a SD card to complete the demo. Please make sure the SD card is needed or not, depending on your microcontroller type. And change the parameter to match your screen size.

After completing modifications and uploading the code, a beautiful pattern will display on the screen:

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Display_graphic.jpg)

The picture is created by calling the draw graphic functions. You can make your pattern and try it on the screen. Every draw function has a specific description in the reference.

#### Demo 3: Display image

Similar to TFT displays and OLED displays, the small e-Paper Shield supports displaying images.

Now you need to open the image example: File- &gt;Examples- &gt;ePaper-&gt;image.

You need to upload the code to see the result.

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Dispaly_image.jpg)

**Note：As you can see, the default screen size in this "image" sketch is set as 2.7 inch. Please modify the screen size setting in case of improper display.**

<pre>  #define SCREEN_SIZE 200         // choose screen size here: 144, 200, 270 </pre>

Of course, you can change the display image by changing the image's lattice data.

For example, your e-Paper screen is 2.7 inch, so you need get the lattice data of a 264 X176 pixel and copy the code to 'static unsigned char image_270[] PROGMEM ={}' in picture.h. You need to copy the code for a lattice data of a 200x96 pixel to 'static unsigned char image_200[] PROGMEM ={}'  when using a 2.0 inch screen.

#### How to Display an Image

Thanks to the contribution of Muchiri John, we got a very useful and easy-to-use tool. With this tool, to display an image is no more a difficult thing.

You can download the tool [here](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdImageKit.zip)

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Snapshot_epaper_shied_tools.jpg)

## Reference

---
Small e-Paper library provides complete software interfaces to exercise the capabilities of e-Paper display. There are  specific description about functions.

### Function Description

<u>1. void begin(EPD_size sz);</u>

_The function is setup screen size._

* sz: can be EPD_1_44, EPD_2_0, EPD_2_7.

<u>2. void setDirection(EPD_DIR dir);</u>

_The function is used to set the display direction._

* dir: can be DIRLEFT,DIRRIGHT,DIRNORMAL,DIRDOWN

<u>3. int drawChar(char c, int x, int y);</u>

_The function can be used to display char._

* c: the char you want to display.
* x: the starting X-coordinate of char.

* y: the starting Y-coordinate of char.

<u>4. int drawString(char *string, int poX, int poY);</u>

_The function can be used to display char._

* *string: the string you want to display.
* poX: the starting X-coordinate of string.

* poY: the starting Y-coordinate of string.

<u>5. int drawNumber(long long_num,int poX, int poY);</u>

_The function can be used to display char._

* long_num: the long integer data you want to display. The max is
* poX: the starting X-coordinate of data

* poY: the starting Y-coordinate of data

<u>6. int drawFloat(float floatNumber,int decimal,int poX, int poY);</u>

_The function can be used to display float number. The display float data is rounding according to the setting decimal place._

* floatNumber: the float number you want to display.
* decimal: set the decimal place.
* poX: the starting X-coordinate of data.

* poY: the starting Y-coordinate of data.

<u>7. int drawUnicode(unsigned int uniCode, int x, int y);</u>

_The function can be used to display a Character or a Chinese using unicode. See the page 18 to 24 of the [GT20L16P1Y datasheet](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/GT20L16P1Y_Datasheet.pdf) to find the Char unicode, the characters include Latin、Hebrew、 Thai、Greek、 Kirill and Arabic. The Chinese unicode  can see [GB2312 (Simplified Chinese) character code table](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Character_code_table.pdf)._

* uniCode:the machine code according to a character or a chinese.
* x: the starting X-coordinate.

* y: the starting Y-coordinate.

Note: the character unicode between 0x0020 to 0x007E can directly input via the keyboard. Such as the display of the character 'G' ,the function can be drawUnicode(0x0047, 3,10) or displayChar ('s',3,10);

<u>8. int drawUnicodeString(unsigned int *uniCode, int len, int x, int y);</u>

_The function can be used to display several characters and chinese._

* *uniCode: a unicode array.
* len: string length.
* x: the starting X-coordinate of string.

* y: the starting Y-coordinate of string.

<u>9. void drawLine(int x0, int y0, int x1, int y1);</u>

_The function can be used to display a line._

* x0: the starting X-coordinate of line

* y0: the starting Y-coordinate of line

* x1: the end X-coordinate of line

* y1: the end Y-coordinate of line

<u>10. void drawCircle(int poX, int poY, int r);</u>

_The function can be used to draw a circle._

* poX: the X-coordinate of the center

* poY: the Y-coordinate of the center
* r: the radius of center

<u>11. void drawHorizontalLine( int poX, int poY, int len);</u>

_The function can be used to draw a horizontal line._

* poX: the starting X-coordinate of the line.

* poY: the starting Y-coordinate of the line.

* len: the length of the line

<u>12. void drawVerticalLine( int poX, int poY, int len);</u>

_The function can be used to draw a vertical line._

* poX: the starting X-coordinate of the Line.

* poY: the starting Y-coordinate of the Line.

* len: the length of the line.

<u>13. void drawRectangle(int poX, int poY, int len, int width);</u>

_The function can be used to draw a rectangle._

* poX: the starting X-coordinate of the rectangle.

* poY: the starting Y-coordinate of the rectangle.

* len: the length of the rectangle.

* width: the width of the rectangle.

<u>14. void fillRectangle(int poX, int poY, int len, int width);</u>

_The function can be used to draw a fill rectangle._

* poX: the starting X-coordinate of the rectangle.

* poY: the starting Y-coordinate of the rectangle.

* len: the length of the rectangle.

* width: the width of the rectangle.

<u>15. void fillCircle(int poX, int poY, int r);</u>

_The function can be used to draw a fill circle._

* poX: the X-coordinate of the center.

* poY: the Y-coordinate of the center.
* r: the radius of center
**Example:**

```
    EPAPER.drawRectangle(10, 10, 100, 80);
    EPAPER.fillCircle(50, 50, 30);
    EPAPER.fillRectangle(50, 65, 50, 20);
    EPAPER.drawCircle(150, 50, 10);
    EPAPER.fillCircle(150, 50, 5);
    EPAPER.drawHorizontalLine(120, 50, 60);
    EPAPER.drawVerticalLine(150, 20, 60);
```

<u>16. void drawTraingle( int poX1, int poY1, int poX2, int poY2, int poX3, int poY3);</u>

_The function can be used to draw a triangle. It is formed by three points._

* poX1(poX2,poX3): the X-coordinate of the triangle one point.

* poY1(poY2,poY3): the Y-coordinate of the triangle one point.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Small_e-Paper_Shield_v2.2_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

---
* [Small e-Paper Shield Eagle File](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Small_e-Paper_Shield_v2.2_Eagle_Files.zip)

* [Small e-Paper Library](https://github.com/Seeed-Studio/Small_ePaper_Shield)

* [e-Paper panels Datasheet](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/4P008-00_02_COG_Driver_Interface_Timing_for_smallPlussize.pdf)

* [epdImageKit Tool](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdImageKit.zip)

* [New Panel Library【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdV230.rar)

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
