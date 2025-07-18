---
description: Xadow - Storage
title: Xadow - Storage
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Storage
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/X_Storage_01.jpg)

Most AVRs have a small EEPROM which can be used to save variables, configuration setting etc. Like Chip Atmega32u4 Xadow Main Board used has 1K Bytes Internal EEPROM.
If you want more storage for your Xadow project, this module is designed for you! This module supplies two extra 32K byte for your project. The Xadow Storage can be powered by 3.3V. And it is compatible with Xadow system.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Storage-p-1625.html)

##  Specification
---
*   Work Voltage: 3.3V

*   Control Mode: I2C

*   EEPROM: AT24C256C

*   I2C Address are convertible

*   Dimensions: 25.43mm x 20.35mm

##  I2C Address Setting
---
Two AT24C256 of Xadow Storage are sharing a common two-wire bus. Each AT24C256 has a eight-bit hardware address which is referred to as a slave address. The slave address is configured by the A2,A1 and A0 address selection inputs. The A2, A1, and A0 pins are device address inputs that are hardwired directly to GND or to VCC. If these pins are left floating, the A2, A1, and A0 pins will be internally pulled down to GND.
<center>
<table  cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">  Slave Address[A6 - A0]</th>
<th colspan="3" scope="col"> A2,A1 and A0 inputs state</th>
</tr>
<tr>
<td scope="col"> A2</td>
<td scope="col"> A1</td>
<td scope="col"> A0</td>
</tr>
<tr>
<td scope="row"> 1010000(0x50)</td>
<td>GND/Floating</td>
<td>GND/Floating</td>
<td>GND/Floating</td>
</tr>
<tr>
<td scope="row"> 1010001(0x51)</td>
<td> GND/Floating</td>
<td> GND/Floating</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010010(0x52)</td>
<td> GND/Floating</td>
<td> VCC</td>
<td> GND/Floating</td>
</tr>
<tr>
<td scope="row"> 1010011(0x53)</td>
<td> GND/Floating</td>
<td> VCC</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010100(0x54)</td>
<td> VCC</td>
<td> GND/Floating</td>
<td> GND/Floating</td>
</tr>
<tr>
<td scope="row"> 1010101(default 0x55)</td>
<td> VCC</td>
<td> GND/Floating</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010110(0x56)</td>
<td> VCC</td>
<td> VCC</td>
<td> GND/Floating</td>
</tr>
<tr>
<td scope="row"> 1010111(0x57)</td>
<td> VCC</td>
<td> VCC</td>
<td> VCC</td>
</tr>
</table>
</center>

In default mode, one AT24C256(U1) I2C Address is 0x50 and another AT24C256(U2) I2C Address is 0x51(see the Xadow Storage).

##  Demonstration
---
Using the Xadow Storage, we can permanently store data even if the power is turned off. Now we show a demo: write data to storage and read it.

**Hardware Installation:**

![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/XadowStorage.jpg)

Note: when connect Xadow Storage to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).

**The demo code:**

```
#include &lt;Wire.h&gt; //I2C library
void setup()
{
    char somedata[] = "this is data from the eeprom"; // data to write
    Wire.begin(); // initialise the connection
    Serial.begin(9600);
    i2c_eeprom_write_page(0x51, 0, (byte *)somedata, sizeof(somedata)); // write to EEPROM

    delay(10); //add a small delay

    Serial.println("Memory written");
}
void loop()
{
    int addr=0; //first address
    byte b = i2c_eeprom_read_byte(0x51, 0); // access the first address from the memory

    while (b!=0)
    {
        Serial.print((char)b); //print content to serial port
        addr++; //increase address
        b = i2c_eeprom_read_byte(0x51, addr); //access an address from the memory
    }
    Serial.println(" ");
    delay(2000);
}
void i2c_eeprom_write_byte( int deviceaddress, unsigned int eeaddress, byte data ) {
    int rdata = data;
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress &gt;&gt; 8)); // MSB
    Wire.write((int)(eeaddress &amp; 0xFF)); // LSB
    Wire.write(rdata);
    Wire.endTransmission();
}

// WARNING: address is a page address, 6-bit end will wrap around
// also, data can be maximum of about 30 bytes, because the Wire library has a buffer of 32 bytes
void i2c_eeprom_write_page( int deviceaddress, unsigned int eeaddresspage, byte* data, byte length ) {
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddresspage &gt;&gt; 8)); // MSB
    Wire.write((int)(eeaddresspage &amp; 0xFF)); // LSB
    byte c;
    for ( c = 0; c &lt; length; c++)
    Wire.write(data[c]);
    Wire.endTransmission();
}
byte i2c_eeprom_read_byte( int deviceaddress, unsigned int eeaddress ) {
    byte rdata = 0xFF;
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress &gt;&gt; 8)); // MSB
    Wire.write((int)(eeaddress &amp; 0xFF)); // LSB
    Wire.endTransmission();
    Wire.requestFrom(deviceaddress,1);
    if (Wire.available()) rdata = Wire.read();
    return rdata;
}
// maybe let's not read more than 30 or 32 bytes at a time!
void i2c_eeprom_read_buffer( int deviceaddress, unsigned int eeaddress, byte *buffer, int length ) {
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress &gt;&gt; 8)); // MSB
    Wire.write((int)(eeaddress &amp; 0xFF)); // LSB
    Wire.endTransmission();
    Wire.requestFrom(deviceaddress,length);
    int c = 0;
    for ( c = 0; c &lt; length; c++ )
    if (Wire.available()) buffer[c] = Wire.read();
}
```


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Resources
---
- [Xadow Storage eagle file](https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip)

- [Serial EEPROM AT24C256C Datasheet](https://files.seeedstudio.com/wiki/Xadow_Storage/res/AT24C256C-SSHL-T.pdf)

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
