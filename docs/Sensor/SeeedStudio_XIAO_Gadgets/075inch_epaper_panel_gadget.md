---
description: This is a compact gadget that combines XIAO ESP32C3, ePaper Driver Board, and a 0.75-inch ePaper display in a 3D-printed enclosure.
title: Getting Started with XIAO 7.5inch ePaper Panel
keywords:
  - XIAO
  - ESP32C3
  - ePaper
  - Display
  - Gadget
image: https://files.seeedstudio.com/wiki/075inch_epaper_panel_gadget/1.jpg
slug: /075inch_epaper_panel_gadget
last_update:
  date: 03/28/2024
  author: Citric
---

# XIAO 7.5inch ePaper Panel

> Product Image:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/075inch_epaper_panel_gadget/1.jpg" style={{width:1000, height:'auto'}}/></div>

> Purchase Link:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5inch-ePaper-Panel-p-5774.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

The XIAO 7.5inch ePaper Panel is a compact and efficient display solution that combines the power of XIAO ESP32C3 with a high-quality ePaper display. This gadget is designed to provide an excellent user experience with its low power consumption and crisp display quality.

### Features

- **Compact Design**: Integrated XIAO ESP32C3 and ePaper display in a sleek 3D-printed enclosure
- **Low Power Consumption**: ePaper technology ensures minimal power usage
- **High Display Quality**: 0.75-inch ePaper display with excellent readability
- **USB-C Interface**: Modern and convenient connection interface
- **Easy to Use**: Pre-assembled and ready to use out of the box

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of XIAO 7.5inch ePaper Panel.

| Characteristic                         | Value   | Unit  |
| :-------:                              | :-----: | :---: |
| Operating Voltage                      | 3.3V    | V     |
| Power Consumption                      | <100    | mA    |
| Display Resolution                     | 400x300 | pixels|
| Display Size                          | 0.75    | inch  |
| Refresh Rate                          | 2       | s     |
| USB Interface                         | Type-C  | -     |
| Dimensions                            | 85x45x15| mm    |

## Getting Started

### Equipment Installation

The XIAO 7.5inch ePaper Panel comes pre-assembled and ready to use. Simply connect it to your computer using a USB-C cable.

### Environmental Preparation

#### Windows

1. Download and install the Arduino IDE from the [official website](https://www.arduino.cc/en/software)
2. Install the required board support package for XIAO ESP32C3
3. Install the required libraries

#### MacOS

1. Download and install the Arduino IDE from the [official website](https://www.arduino.cc/en/software)
2. Install the required board support package for XIAO ESP32C3
3. Install the required libraries

### Boot

1. Connect the XIAO 7.5inch ePaper Panel to your computer using a USB-C cable
2. Open Arduino IDE
3. Select the correct board and port
4. Upload your code

## Arduino Library Overview

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

The library for this product is based on the Seeed Arduino LCD library. You can download it from our GitHub repository.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Function

Before we get started developing a sketch, let's look at the available functions of the library.

- `begin()` - Initialize the ePaper display
- `clearDisplay()` - Clear the display content
- `setTextSize()` - Set the text size
- `setTextColor()` - Set the text color
- `display()` - Update the display with new content

### Installation

- **Method One**

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

- **Method Two**

The library manager was added starting with Arduino IDE versions 1.5 and greater (1.6.x). It is found in the 'Sketch' menu under 'Include Library', 'Manage Libraries...'

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Library.png" style={{width:800, height:'auto'}}/></div>

## Arduino / XIAO Example

Now that we have our library installed and we understand the basic functions, let's run some examples for our XIAO 7.5inch ePaper Panel to see how it behaves.

### Demo 1: Basic Text Display

This example demonstrates how to display basic text on the ePaper display.

#### Materials Required

<div class="table-center">
	<table align="center">
		<tr>
			<th>Name</th>
			<th>Quantity</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/075inch_epaper_panel_gadget/1.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/075inch_epaper_panel_gadget/2.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5inch-ePaper-Panel-p-5774.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/USB-C-Cable-p-4715.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
#include <Arduino.h>
#include <SPI.h>
#include <Seeed_Arduino_LCD.h>

Seeed_Arduino_LCD lcd;

void setup() {
  Serial.begin(115200);
  lcd.begin();
  lcd.clearDisplay();
  lcd.setTextSize(2);
  lcd.setTextColor(EPD_BLACK);
  lcd.setCursor(10, 10);
  lcd.println("Hello World!");
  lcd.display();
}

void loop() {
  // Nothing to do here
}
```

## Troubleshooting

1. **Display not updating**
   - Make sure the USB connection is stable
   - Check if the correct board and port are selected in Arduino IDE
   - Verify that the library is properly installed

2. **Display showing partial content**
   - Ensure the display is properly initialized
   - Check if the display buffer is cleared before new content
   - Verify the display dimensions in your code

3. **USB connection issues**
   - Try using a different USB cable
   - Check if the USB port is working properly
   - Ensure the correct USB drivers are installed

## Resources

- **[PDF]** [XIAO 7.5inch ePaper Panel Datasheet](https://files.seeedstudio.com/wiki/075inch_epaper_panel_gadget/datasheet.pdf)
- **[ZIP]** [Arduino Library](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip)
- **[STL]** [3D Printing Files](https://files.seeedstudio.com/wiki/075inch_epaper_panel_gadget/enclosure.stl)

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