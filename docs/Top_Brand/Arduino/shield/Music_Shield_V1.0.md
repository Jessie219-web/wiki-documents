---
description: Music Shield V1.0
title: Music Shield V1.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Music_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Music Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Music_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Music_Shield_V1-0
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/Musicshieldnew500.jpg)

The Music Shield is a professional audio codec.It can work with Arduino, Seeeduino, Seeeduino Mega and Arduino Mega. It is based on VS1053b IC, and can play a variety of music formats stored on MicroSD cards with Seeed the provided Arduino Library.

Note:Recording is only supported on Seeeduino Mega and Arduino Mega for now.

## Features ##

- Arduino,Seeeduino, Arduino Mega, and Seeeduino Mega compatible

- 2 control-push buttons and 1 knob switch

- Plays music from micro SD cards Decodes:MP3,WAV,MIDI,Ogg Vorbis

- I2S interface for external DAC

- Headphone/Line Out for playback

- Line In for recording in OGG format

- Excellent sound quality with ±1dB Frequency Response

- FCC verification

## Specification ##

|Item| Min|Typical|Max| Unit|
|--|--|--|--|--|
| Voltage|4.5| 5|5.5| VDC|
| Current| /| /| 70|mA|
 |Output S/N Ratio (With A-Weighting)|/| 60|/|dB|
 |Channel Isolation (With A-Weighting)|/|50|/|dB|
 |Frequency Response|-1|/|1|dB|
 |Signal Distortion|/|/|0.5%|/|
 |Maximum output(each channel with 16 ohm load)|500|/|/|mV|
 |Audio Interface|3.5mm Audio Jack|||/|
 |Supporting Format|MP3, WAV,MIDI, Ogg|||/|
 |Supported SD Card|Micro SD Card|||/|
 |ESD contact discharge|±4|||KV|
 |ESD air discharge|±8|||/|
|Dimension|80.4x52.5x13.9|||mm|
 |Net Weight|11±2|||g|

## Interface Function ##

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicShield-hard.jpg)

**Multifunction button:** Turn left to play previous song, and right to next song, while pressing it down to pause and resume.

**Volume indicator LED (RED):** If volume+, the red LED will be brighter.

**Play/Pause indicator LED (GREEN):** If playing, the green LED blinks.

**Line out** can drive 16 ohm or 32 ohm earphone.

**Line in** is used to record audio from other resources.

**Micro SD card** can be FAT16 or FAT32, and the size more than 2GB is not supported. (PLEASE NOTE: Example code included with library will only use FAT16 formatted cards)

**I2S and GPIO** are for digital audio output.

**ISP interface** is kept for bringing SPI port when using with Mega.

### Pins usage on Arduino ###

**D0** - Unused.

**D1** - Unused.

**D2** - Used for receiving signal from iPod dock(could be used for your own application if iPod dock is not used).

**D3** - Used for receiving signal from button for Volume Up(could be used for your own application if the switch is not used).

**D4** - Used for receiving signal from switch for Next Song function(could be used for your own application if the switch is not used).

**D5** - Used for receive signal from switch for Play&Stop and Record function(could be used for your own application if the switch is not used).

**D6** - Used for receive signal from switch for Previous Song function(could be used for your own application if the switch is not used).

**D7** - Used for receiving signal from button for Volume Down(could be used for your own application if the switch is not used).

**D8** - Used for Green Led instructions(could be used for your own application if the switch is not used).

**D9** - Used for Red Led instructions(could be used for your own application if the switch is not used).

**D10** - Used for SPI Chip Select.

**D11** - Used for SPI MOSI.

**D12** - Used for SPI MISO.

**D13** - Used for SPI SCK.

**D14(A0)** - Used for Reset of VS1053.

**D15(A1)** - Used for Data Require of VS1053.

**D16(A2)** - Used for Data Select of VS1053.

**D17(A3)** - Used for Chip Select of VS1053.

**D18(A4)** - Unused.

**D19(A5)** - Unused.

## Usage ##

### Hardware Installation ###

Insert the Micro SD card and the earphone; Plug the Music Shield onto the Arduino/Seeeduino; Connect the board to PC using USB cable. ![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicInstall.jpg)

### Software Installation ###

Play music:

1.Make sure there are songs in the micro sd card.

2.Download [File:Music v1 14.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip)  and [File:NewSoftSerial.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/NewSoftSerial.zip)  for music shield.

3.Uncompress these two packages and put them in Arduino-0022 program: ..\arduino-0022\libraries

4.**[Ignore this if under Linux]** Download a new **portpins.h** file and replace the default portpins.h file of Arduino-0022 program: ..\arduino-0022\hardware\tools\avr\avr\include\avr

5.Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others.

6.Run the arduino program compile and upload the sketch  into Arduino board.

7.Just enjoy.

**Record music:**(Only support ATmega1280 and ATmega2560 based board)

1.Press play/stop knob before pressing the RESET button of **Arduino** .

2.Release RESET button for a second and then release play/stop knob. When the music shield is beginning to record, the green and red LEDs will blink synchronous.

3.Press play/stop knob will stop recording.

For Arduino 1.0:
Attention Please:The library of Fat16 between demo-1 and demo-2 is different,so please confirm that you download a corresponding library when using the two demos.And the two libraries can not existed together,so delete a one before using the other.

- Demo 1: Use SD library

This demo will use the SD library coming with Arduino 1.0.

1.Make sure there are songs in the micro sd card.

2.Download [File:MusicPlayer v1 7.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicPlayer_v1_7.zip)  and [Fat16](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Demo1_Fat16.zip)for music shield.

3.Uncompress the package and put it in Arduino-1.0 program: ..\arduino-1.0\libraries

4.Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others.

5.[Ignore this if under Linux] Download a new **portpins.h** file and replace the default portpins.h file of Arduino-1.0 program: ..\arduino-1.0\hardware\tools\avr\avr\include\avr

6.Run the arduino program compile and upload the sketch of music_v1_2 -> musicPlayAll into Arduino board.

- Demo 2: Use Fat16 library

This demo will use an open source library [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip). There are two sketches in this demo: Using MusicPlayRandomly sketch, you can make the music play randomly.And using MusicPlayWithName, you can specify which song to be played by name.(Note: The demo can't co-exist with demo 1 in the libraries)

1.Make sure there are songs in the micro sd card.

2.Download  [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip)for music shield.

3.[Under Linux] Copy libraries/Fat16/Fat16util.h to libraries/Fat16/Fat16Util.h (note util vs Util). The includes have the wrong case and this is easiest workaround.

4.Uncompress these two packages and put them in Arduino-1.0 program: ..\arduino-1.0\libraries

5.Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others.

6.[Ignore this if under Linux] Download a new **portpins.h** file and replace the default portpins.h file of Arduino-1.0 program: ..\arduino-1.0\hardware\tools\avr\avr\include\avr

7.Run the arduino program compile and upload the sketch of MusicShieldNewSdLib into Arduino board.

Note: About the specific methods of some functions in the library, You can reference [the sofeware installation](https://wiki.seeedstudio.com/Music_Shield_V1.0/#software-installation) of the Music Shield V2.0.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources ##

- **[Eagle]**[Music Shield Eagle Files](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip)
- **[PDF]**[Music Shield pdf](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.pdf)
- **[Eagle]**[Music Shield sch](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.sch)
- **[PDF]**[Music Shield Schematic pdf](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield.pdf)
- **[Library]**[Music Shield Source code file for Arduino 0022](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip)

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
