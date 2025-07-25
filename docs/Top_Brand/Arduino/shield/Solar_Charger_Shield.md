---
description:  Solar Charger Shield
title:  Solar Charger Shield
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Solar_Charger_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Solar Charger Shield
category: Discontinued
bzurl:
oldwikiname: Solar_Charger_Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Solar_Charger_Shield
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solar-charger-shield.jpg)

The solar charger is a stackable shield to Arduino compatible platforms, enables adaptive battery power and act as energy harvester for in-field charging. You may use various batteries just to shift up for 5V output, or put on Li-ion battery and solar panel to form an autonomous sensor unit.

**Model:[INT107D3P](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)**

## Features  

### Change

* Auto adjust charging current according to source capability

* Designed for inconstant supply like solar panel

* Optimized charging curve for Li-ion batteries

* Charging status indicator

### Supply

* 0.9-4.2V wide input voltage

* 5 VDC regulated output

* Max 500mA output

* Max 87% conversion efficiency

* Build-in 1A over current protection

## Application Ideas  

* Application1
* Application2
* Application3

## Cautions  

The warnings and wrong operations possible cause dangerous.

## Specification

### Key Specification

<table>
  <tbody>
    <tr>
      <td width="400px">PCB size</td>
      <td width="400px">5.3 x 6.9 x 0.16 cm</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Indicators</td>
      <td>Charging ,complete</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Power supply</td>
      <td>4.4VDV-6VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Power Connector</td>
      <td>Mini USB / JST</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>RoHS</td>
      <td>YES</td>
    </tr>
  </tbody>
</table>

### Charging

<table>
  <tbody>
    <tr>
      <th>Specification</th>
      <th>Min</th>
      <th>Norm</th>
      <th>Max</th>
      <th>Unit</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={600}>Input voltage</td>
      <td width={100}>4.4</td>
      <td width={100}>5</td>
      <td width={100}>6</td>
      <td width={100}>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Low power threshold</td>
      <td></td>
      <td>3.7</td>
      <td>3.9</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Charge voltage</td>
      <td>4.158</td>
      <td>4.2</td>
      <td>4.242</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Precharge threshold</td>
      <td>2.9</td>
      <td>3</td>
      <td>3.1</td>
      <td>VDC</td>
    </tr>
  </tbody>
</table>

### Power Supplying

<table>
  <tbody>
    <tr>
      <th>Specification</th>
      <th>Min</th>
      <th>Norm</th>
      <th>Max</th>
      <th>Unit</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={600}>Battery voltage</td>
      <td width={100}>2.8</td>
      <td width={100}>3.7</td>
      <td width={100}>4.2</td>
      <td width={100}>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Output voltage</td>
      <td>4.6</td>
      <td>4.8</td>
      <td>5.0</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Output current</td>
      <td>200</td>
      <td>4.2</td>
      <td>500</td>
      <td>mA</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Level up efficiency</td>
      <td>70</td>
      <td>80</td>
      <td>87</td>
      <td>&nbsp;%</td>
    </tr>
  </tbody>
</table>

### Charging curve

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Changing-curve.jpg)

## Pin definition and Rating  

## Mechanic Dimensions  

## Usage  

### Hardware Installation  

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware.jpg)

1.Stacked setup, put battery between the pin headers, please note the polarity while connecting the wires to the battery jac.

(Red to +, black to -).

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step1.jpg)

2.Solar panel or other energy sources should be connected to PWR1, solar panel Jack.

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step2.jpg)

**Energy Source: (4V To 6V output)**

5V Solar cell

Regulated Motor output

**Rechargeable battery (3.7V To 4.2V)**

Lithium Battery

NiMh Battery

**Regular battery (from 2.8V to 4.2V)**

AAA

AA

### Programming  

Includes important code snippet.
Demo code like :

```
Demo code
{

}
```

### Example  

The projects and application examples.

## Bill of Materials (BOM) /parts list  

All the components used to produce the product.

## FAQ  

Please list your question here:

## Support  

If you have questions or other better design ideas, you can go to our [forum](https://www.seeedstudio.com/forum) or **wish** to discuss.

## Version Tracker  

<table>
  <tbody>
    <tr>
      <th>Revision</th>
      <th>Descriptions</th>
      <th>Release Date</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}>Solar Charger Shield v1.0</td>
      <td width={500}>Initial public release</td>
      <td width={200}>May 01, 2010</td>
    </tr>
  </tbody>
</table>

## Bug Tracker  

Bug Tracker is the place you can publish any bugs you think you might have found during use. Please write down what you have to say, your answers will help us improve our products.

## Additional Idea  

The Additional Idea is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page.

## How to buy  

Here to buy Solar Charger Shield: [https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)

## Licensing  

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

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
