---
description: 3D Gesture Tracking Shield for Raspberry Pi MGC3130
title: 3D Gesture Tracking Shield for Raspberry Pi MGC3130
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/preview-wiki.jpg)

This shield is based on Microchip [MGC3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf) chip, which enables the Raspberry Pi with 3D gesture recognition and motion tracking function. It can capture x y z position information, can also do proximity sensing and touch sensing, support tap and double click.

As shown in the figure below, the recognition area is divided into two parts: the strip area distributed around and a central panel.

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/detect-part.jpg)

<div align="center"><b>Figure 1.</b><i>sense area</i></div>

The strip areas can sense the orientation change, including the North, South, West, and East. The central area can sense touch, tap, double click, and gestures in the air above. That's why we call it 3D Gesture & Tracking Shield, you don't even need to touch the central area directly, just wave your hand above the central area, and this shield can sense your movements.

Thanks to the Microchip’s patented GestIC® technology, this shield utilizes electrical near-field sensing to detect movements. The shield generates a magnetic field above the central panel when the hand approaches, it will interfere with the magnetic field, and the magnetic field receiver below the shield can detect the change.

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF1.jpg)
<div align="center"><b>Figure 2.</b><i>Magnetic field without hand</i></div>

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF2.jpg)
<div align="center"><b>Figure 3.</b><i>Magnetic field with a hand</i></div>

This hat communicates with Raspberry Pi via the I2C interface, also we have reserved a Grove I2C connector in case you need to work with other modules.

What an amazing module, with the help it, you can use gestures to control lights, TV, speakers... Just unleash your imagination and create more magical projects.

<iframe width="800" height="450" src="https://www.youtube.com/embed/iLav34w77ns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130-p-4073.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- Recognition of 3D Hand Gestures and x, y, z Positional Data
- Proximity and Touch Sensing
- Built-in Colibri Gesture Suite (running on chip)
- Advanced 3D Signal Processing Unit
- Detection Range: 0 to 10 cm
- On-chip Auto Calibration
- Compatible with various models of Raspberry Pi 2, 3, 4, and zero

## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V|
|Main Chip|MGC3130|
|Detection range|0 to 10 cm|
|Temperature Range|-20°C to +85°C|
|Receiver Sensitivity| &lt;1 fF|
|Position Rate|200 positions/sec|
|Spatial Resolution|up to 150 dpi|
|Carrier Frequency|44 kHz to 115 kHz|
|Output Interface|I2C(Default I2C address: 0X42)|
|Gross Weight|55g|
|Net Weight|17.6g|
|Package Size|115mm*75mm*25mm|
|Size|65mm*56mm|

## Applications

- Notebooks/Keyboards/PC Peripherals
- Home Automation
- Game Controllers
- Audio Control

## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/hardware-overview.png)

## Play with Raspberry Pi

### Enable I2C

- Step 1. Run sudo raspi-config.
- Step 2. Use the down arrow to select 5 Interfacing Options.
- Step 3. Arrow down to P5 I2C.
- Step 4. Select yes when it asks you to enable I2C.
- Step 5. Also select yes if it asks about automatically loading the kernel module.
- Step 6. Use the right arrow to select the button.
- Step 7. Select yes when it asks to reboot.

:::tip
For more info about raspi-config, please refer to [https://www.raspberrypi.org/documentation/configuration/raspi-config.md](https://www.raspberrypi.org/documentation/configuration/raspi-config.md).
:::

### Install ncurses

**Step 1**：Download from [here](https://invisible-mirror.net/archives/ncurses/)

```
cd ~
wget https://invisible-mirror.net/archives/ncurses/ncurses-6.1.tar.gz
```

**Step 2**: Install ncurses

```
tar -xvf ncurses-6.1.tar.gz
cd ncurses-6.1/
./configure
make
sudo make install
```

**Step 3**: Check if ncurse is installed successfully

```
ncurses6-config --version
```

### Run Demo

**Step 1**: Install mgc3103 and run mgc3103.

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_mgc3x30.git
cd Seeed_mgc3x30
make clean && make
./mgc3130
```

**Step 2**: Here is the output.

```
 *
 *                                                          *
 * Position X : 65534                                       *
 * Position Y : 0                                           *
 * Position Z : 38465                                       *
 *                                                          *
 * Gesture :                                                *
 *                                                          *
 * Airwheel angle : -1530                                   *
 *                                                          *
 * Touch electrode :
 * Tap electrode :
 * Double Tap electrode :
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *
```

- **Position X/Y/Z**: Lower left corner is X=0, Y=0. Z is the height. Max is 65535.
- **Gesture**: Wave your hands over the module, you can see the wave direction as West to East, East to West, South to North and North to South.
- **Airwheel**：The number will increase with clockwise direction and reduce with counterclockwise direction. It will have some delay on the display.
- **Touch electrode**: Put your finger on the specific area, you will get Center, East, West, South and North.
- **Tap electrode**: Tap your finger on the specific area, you will get Center, East, West, South and North.  
- **Double Tap electrode**: Double Tap your finger on the specific area, you will get Center, East, West, South and North.  

<iframe width="800" height="450" src="https://www.youtube.com/embed/__9Vas2kGHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [3D Gesture Tracking Shield for Raspberry Pi MGC3130 Eagle Files](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip)

- **[PDF]** [MGC3030-3130 Datasheet](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf)

- **[Library]** [Seeed_mgc3x30 Library](https://github.com/Seeed-Studio/Seeed_mgc3x30)

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
