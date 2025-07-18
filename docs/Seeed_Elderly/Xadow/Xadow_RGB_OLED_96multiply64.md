---
description: Xadow - RGB OLED 96*64
title: Xadow - RGB OLED 96*64
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_RGB_OLED_96multiply64
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_MainPicture.jpg)

RBG OLED is a 16 bit 96*64 dot matrix OLED display module with RGB color. It is based on SSD1331 module which is a single chip CMOS OLED/PLED driver with 288 segments and 64 common output, supporting up to 96 RGB * 64 dot matrix display. It use SPI for communication.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-RGB-OLED-96x64-p-2125.html)


##  Specifications
---
*   Power Voltage (VCC)：3.3V
*   Display Color: RGB
*   Dot Matrix: 96*64
*   Operating temperature: -20~70 ℃
*   Dimensions: 25.43mm x 20.35mm

##  Pin Definition
---
![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_HardwareInterface.png)

We only need CS, DC, MOSI, SCLK 4 pins for communication. and

**CS**   &lt;==&gt;  **A5**

**DC**   &lt;==&gt;  **3**

**MOSI** &lt;==&gt;  **16**

**SCLK** &lt;==&gt;  **15**

:::caution
    Please notice: heavy impact or stress on OLED will cause the breakdown of screen.
:::
## Getting Started
---
RGB OLED can display all kinds of graphics and characters. We offered lots of example sketches for you to play with it.

**The hardware installation**

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Connection.jpg)

Note: When connecting Xadow RGB OLED to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).

**Draw Line **

Download [RGB OLED Library](https://github.com/Seeed-Studio/RGB_OLED_SSD1331) and [SGL Library](https://github.com/Seeed-Studio/SGL), then install them to your Arduino Library. Open the DrawLine example sketch by the path: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawLine.
```
<pre>
/*
 draw rectangle

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw several line with different color

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include &lt;SGL.h&gt;
#include &lt;SSD1331.h&gt;
#include &lt;SPI.h&gt;

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
    oled.drawLine(5,7,65,48,COLOR_BLUE);
    delay(1000);
    oled.drawLine(5,40,48,7,COLOR_RED);
    delay(1000);
    oled.drawLine(65,5,47,50,COLOR_GREEN);
    delay(1000);
    oled.drawLine(3,10,80,21,COLOR_YELLOW);
}

void loop(){
    //nothing to do
}
</pre>
```

Select the correct port number and the board type should be Seeeduino Xadow, then upload the code, you can see four line with different color will be drew on the screen of RGB OLED just as follow.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Line.jpg)
![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Line.gif)

**Draw Circle**

Open the DrawCircle example sketch by the path: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawCircle.
```

/*
 draw circle

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a circle

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include &lt;SGL.h&gt;
#include &lt;SSD1331.h&gt;
#include &lt;SPI.h&gt;

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
}

void loop(){
    for(int i = 30; i &gt; 0; i--){
        oled.drawCircle(48,32,i,COLOR_CYAN);
        delay(50);
    }
    for(int i = 1; i &lt;= 30; i++){
        oled.drawCircle(48,32,i,COLOR_RED);
        delay(50);
    }
    for(int i = 30; i &gt; 0; i--){
        oled.drawCircle(48,32,i,COLOR_PURPLE);
        delay(50);
    }
    for(int i = 1; i &lt;= 30; i++){
        oled.drawCircle(48,32,i,COLOR_GOLDEN);
        delay(50);
    }
}

```
It is used to draw concentric circles with different color. Select the correct port number and the board type should be Seeeduino Xadow, then upload the code, you can see many circles with different colors will be drew on the screen of RGB OLED just as follow.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Circle.gif)

**Draw Rectangle**

Open the DrawRectangle example sketch by the path: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawRectangle.
```

/*
 draw rectangle

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a rectangle with blue color

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include &lt;SGL.h&gt;
#include &lt;SSD1331.h&gt;
#include &lt;SPI.h&gt;

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
}

void loop(){
    for(int i = 1; i &lt; 16; i++){
        oled.drawRectangle(3*i,2*i,95-6*i,63-4*i,COLOR_YELLOW);
        delay(50);
    }
    delay(2000);
    for(int i = 15; i &gt; 0; i--){
        oled.drawRectangle(3*i,2*i,95-6*i,63-4*i,COLOR_BLUE);
        delay(50);
    }
    delay(2000);
}

```
Select the correct port number and the board type should be Seeeduino Xadow, then upload the code, you can see many rectangle will be drew on the screen of RGB OLED just as follow.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Rectangle.gif)

**Draw Triangle**

Open the DrawTriangle example sketch by the path: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawTriangle.
```

/*
 draw triangle

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a triangle

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include &lt;SGL.h&gt;
#include &lt;SSD1331.h&gt;
#include &lt;SPI.h&gt;

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);

}

void loop(){
    //nothing to do
    uint8_t x0 = random(0,96);
    uint8_t y0 = random(0,64);
    uint8_t x1 = random(0,96);
    uint8_t y1 = random(0,64);
    uint8_t x2 = random(0,96);
    uint8_t y2 = random(0,64);
    oled.drawTraingle(x0,y0,x1,y1,x2,y2,random(0,65536));
    delay(3000);
    oled.fillScreen(COLOR_BLACK);
}

```
Upload the code, you can see triangles with random location and shape will be drew on the screen of RGB OLED just as follow.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Triangle.gif)

**Draw String**

Open the DrawString example sketch by the path: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawString.
```

/*
 draw string

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a string

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include &lt;SGL.h&gt;
#include &lt;SSD1331.h&gt;
#include &lt;SPI.h&gt;

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

char* str = "Seeed";

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
    oled.drawString(str,15,25,2,COLOR_GREEN);
    delay(2000);
    oled.setScolling(Horizontal,0,64,1);
}

void loop(){
    //nothing to do
}

```
Upload the code, you can see the string "seeed" will be drew on the screen of RGB OLED just as follow.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_String.gif)

**Draw BitMap**

Open the DrawBitMap example sketch by the path: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawBitMap.
```

/*
 draw bitmap

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a bitmap

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include &lt;SGL.h&gt;
#include &lt;SSD1331.h&gt;
#include &lt;SPI.h&gt;

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

static unsigned char SeeedLogo[] PROGMEM ={
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x80, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x80, 0x06, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x80, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0x03, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x0F, 0x00, 0x03, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0x01, 0xE0,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0x01, 0xE0, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x3E, 0x00, 0x01, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7C, 0x00, 0x00, 0xF8,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x7C, 0x00, 0x00, 0xF8, 0x00, 0x60, 0x00, 0x00,
0x00, 0x00, 0x18, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00,
0xFC, 0x00, 0x00, 0xFC, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC,
0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0xE0, 0x00, 0x00,
0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00,
0xFC, 0x00, 0x00, 0xFC, 0x01, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0xFC, 0x00, 0x00, 0xFC,
0x01, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x01, 0xE0, 0x00, 0x00,
0x00, 0x00, 0x1F, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x03, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x80,
0xFC, 0x00, 0x00, 0xFC, 0x03, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x80, 0xFE, 0x00, 0x00, 0xFC,
0x07, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xC0, 0x7E, 0x00, 0x01, 0xFC, 0x0F, 0xE0, 0x00, 0x00,
0x00, 0x00, 0x0F, 0xC0, 0x7E, 0x00, 0x01, 0xF8, 0x0F, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xE0,
0x7E, 0x00, 0x01, 0xF8, 0x1F, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF0, 0x3F, 0x00, 0x01, 0xF0,
0x3F, 0x80, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF0, 0x3F, 0x00, 0x03, 0xF0, 0x3F, 0x80, 0x00, 0x00,
0x00, 0x00, 0x03, 0xF8, 0x1F, 0x00, 0x03, 0xE0, 0x7F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xFC,
0x1F, 0x80, 0x07, 0xE0, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xFE, 0x0F, 0x80, 0x07, 0xC1,
0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x07, 0xC0, 0x07, 0x83, 0xFC, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x7F, 0x83, 0xC0, 0x0F, 0x07, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F,
0xC1, 0xE0, 0x0E, 0x0F, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0xF0, 0xE0, 0x1C, 0x1F,
0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF8, 0x70, 0x38, 0x7F, 0x80, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x03, 0xFC, 0x38, 0x30, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0xFF, 0x00, 0x03, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0x80, 0x07, 0xF0,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xF0, 0x3F, 0xC0, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x01, 0xF8, 0x7E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x08, 0x40, 0x00, 0x00, 0x00, 0x3C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x3C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x00,
0x00, 0x03, 0xF0, 0x0F, 0xC0, 0x0F, 0xC0, 0x0F, 0x80, 0x1F, 0xBC, 0x00, 0x00, 0x0F, 0xF8, 0x3F,
0xF0, 0x3F, 0xF0, 0x3F, 0xE0, 0x7F, 0xFC, 0x00, 0x00, 0x1F, 0xFC, 0x7F, 0xF8, 0x7F, 0xF8, 0x7F,
0xF8, 0xFF, 0xFC, 0x00, 0x00, 0x1F, 0x7E, 0xFE, 0xFC, 0xFD, 0xFC, 0xFD, 0xFD, 0xFD, 0xFC, 0x00,
0x00, 0x1E, 0x1E, 0xF0, 0x3F, 0xF0, 0x3D, 0xE0, 0x3D, 0xE0, 0x7C, 0x00, 0x00, 0x1F, 0xF1, 0xFF,
0xFF, 0xFF, 0xFF, 0xFF, 0xFD, 0xE0, 0x3C, 0x00, 0x00, 0x0F, 0xFD, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
0xFD, 0xC0, 0x3C, 0x00, 0x00, 0x03, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFD, 0xC0, 0x3C, 0x00,
0x00, 0x3C, 0x1E, 0xF0, 0x31, 0xF0, 0x21, 0xE0, 0x21, 0xE0, 0x7C, 0x00, 0x00, 0x3F, 0x3E, 0xFE,
0xFC, 0xFC, 0xF8, 0xFD, 0xF9, 0xFD, 0xFC, 0x00, 0x00, 0x1F, 0xFE, 0x7F, 0xFC, 0x7F, 0xF8, 0x7F,
0xF8, 0xFF, 0xFC, 0x00, 0x00, 0x0F, 0xFC, 0x3F, 0xF0, 0x3F, 0xF0, 0x3F, 0xE0, 0x7F, 0xFC, 0x00,
0x00, 0x03, 0xF0, 0x0F, 0xC0, 0x0F, 0xC0, 0x0F, 0x80, 0x1F, 0xBC, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x64, 0xCD, 0xF6, 0xE1, 0xC9, 0x3F,
0x3F, 0xFB, 0xA6, 0x00, 0x00, 0x1F, 0xFF, 0xEF, 0xFF, 0xFF, 0xFF, 0xBF, 0xFF, 0xFF, 0xFE, 0x00,
0x00, 0x1F, 0xFF, 0xEF, 0xFF, 0xFF, 0xFF, 0xBF, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x1F, 0xFF, 0xED,
0xFF, 0xFF, 0xFF, 0xB7, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x20, 0x00, 0x01, 0x00,
0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
};

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
    oled.drawBitMap(0,0,SeeedLogo,96,64,COLOR_YELLOW);
    delay(5000);
    Serial.println("start to scoll ...");
    oled.setScolling(Vertical,0,64,0);
}

void loop(){
    //nothing to do
}

```
Upload the code, you can see Seeed's logo with yellow color will be drew on the screen of RGB OLED just as follow.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_BitMap.gif)


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/res/Xadow_OLED.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Resources
---
- [Xadow RGB OLED Eagle File](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/res/Xadow_OLED.zip)

- [Xadow RGB OLED Library](https://github.com/Seeed-Studio/RGB_OLED_SSD1331)

- [Seeed Graphics Library](https://github.com/Seeed-Studio/SGL)

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
