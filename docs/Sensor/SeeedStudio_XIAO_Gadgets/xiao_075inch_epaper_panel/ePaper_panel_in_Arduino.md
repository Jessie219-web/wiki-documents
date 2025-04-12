---
description: The XIAO ESP32C3-powered 7.5-inch E-Ink Display is a compact, energy-efficient solution for showcasing data via Arduino. 
title: ePaper Panel in Arduino
keywords:
- ePaper display
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /xiao_075inch_epaper_panel_arduino
sidebar_position: 2
last_update:
  date: 03/26/2025
  author: Allen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Hardware Overview

### Introduction

The 7.5 inch E-Ink display is a game-changer for Arduino users. It seamlessly integrates with Arduino, allowing you to easily showcase various data. With simple wiring and straightforward code, even beginners can get started quickly. It offers low power consumption and excellent readability in any light. Let's unlock endless creative projects with this accessible and versatile display ~

### Features

1. **Energy-Efficient E-Ink Screen**: Offers low power consumption and excellent readability, even in direct sunlight.
2. **Seamless Integration**: Easy to integrate with Home Assistant and Arduino for customization.
3. **Compact Design**: Compact size, ideal for smart home applications.
4. **User-Friendly Setup**: Simple to configure and use, making it accessible for both beginners and advanced users.
5. **Durable and Reliable**: Built with quality components for long-lasting performance.


### Specifications
| Item | Description |
| --- | --- |
| MCU | XIAO ESP32 C3 |
| Display | 7.5-inch ePaper Display |
| Resolution | 800x480 |
| Battery | 3.7V 2000mAh |
| Dimension | 180x20x130mm |
| Operating Temperature | -40°C to 85°C |
| Operating Voltage | 3.3V to 5V |

## Getting Started

### Step 1. Download Arduino IDE

First, if you don't have Arduino IDE yet, please go to [Arduino IDE](https://www.arduino.cc/en/software) and download the latest version. 

### Step 2. Install ESP32 Board Support

Go to **File** -> **Preferences** and add the following URL to **Additional Boards Manager URLs**, [click here to see detail steps.](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### Step 3. Install Seeed Arduino LCD Library

:::tip
This library has same function as TFT library and no compatible with this library. If you have installed TFT library, please uninstall it first.
:::

Download and install the Seeed Arduino LCD library from GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/50.png" style={{width:800, height:'auto'}}/></div>  

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

After downloading the library, go to **Sketch** -> **Include Library** -> **Add .ZIP Library** and select the downloaded library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

There are 4 basic examples, open a basic example you like:
1. Bitmap: Display a bitmap image.
2. Clock: Display a clock.
3. Clock_digital: Display a digital clock.
4. Shape: Display different sizes of words and shape randomly.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/52.png" style={{width:800, height:'auto'}}/></div>

### Step 4. Upload the Code

Before uploading the code, you need to open **User_Setup_Select.h** in Seeed_Arduino_LCD library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/53.png" style={{width:800, height:'auto'}}/></div>

Comment line 160 and uncomment line 163 and then **save the file**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/54.png" style={{width:800, height:'auto'}}/></div>

After that, go to **Tools** -> **Board** -> **Seeeduino XIAO ESP32C3** and **Tools** -> **Port** -> **Select the port your board is connected to**. Then click **Upload** to upload the code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/55.png" style={{width:800, height:'auto'}}/></div>

Now you will see the feedback in your epaper screen! Following are the results of Bitmap and Clock examples.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## Resources

- **[STP]**: [3D Model enclosure](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper_Breakout_Board_for_XIAO_V2_PCBA.pdf](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Breakout_Board_for_XIAO_V2_PCBA.pdf)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
