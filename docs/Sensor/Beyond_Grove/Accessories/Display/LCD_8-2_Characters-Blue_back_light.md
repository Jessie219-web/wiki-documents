---
title: LCD 8*2 Characters- Blue back light
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/LCD_8-2_Characters-Blue_back_light/
slug: /LCD_8-2_Characters-Blue_back_light
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/lcd821n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-82-characters-blue-back-light-p-120.html?cPath=163_164)

## Schematic

---
![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-block.JPG)

## Specification

---

### Absolute Maximum Ratings

<table>
<tr>
<th>Item</th>
<th>Symbol</th>
<th>Min</th>
<th>Max</th>
<th>Unit</th>
</tr>
<tr>
<td>Supply Voltage (Logic)</td>
<td>V<sub>DD</sub>-V<sub>SS</sub></td>
<td>-0.3</td>
<td>7.0</td>
<td>V</td>
</tr>
<tr>
<td>Supply Voltage (LCD)</td>
<td>V<sub>DD</sub>-V<sub>O</sub></td>
<td>-0.3</td>
<td>13.0</td>
<td>V</td>
</tr>
<tr>
<td>Input Voltage</td>
<td>V<sub>I</sub></td>
<td>-0.3</td>
<td>VDD+0.3</td>
<td>V</td>
</tr>
<tr>
<td>Operating Temp</td>
<td>T<sub>opr</sub></td>
<td>0</td>
<td>50</td>
<td>℃</td>
</tr>
<tr>
<td>Storage Temp.</td>
<td>T<sub>stg</sub></td>
<td>-10</td>
<td>60</td>
<td>℃</td>
</tr>
</table>

### Mechanical Data

<table>
<tr>
<th>Item</th>
<th>Nominal Dimensions</th>
<th>Unit</th>
</tr>
<tr>
<td>Module Size(W×H×T)</td>
<td>58.0×32.0×9.5</td>
<td>mm</td>
</tr>
<tr>
<td>Viewing Area(W×H)</td>
<td>36.0×15.0</td>
<td>mm</td>
</tr>
<tr>
<td>Character Size(W×H)</td>
<td>2.45×5.0</td>
<td>mm</td>
</tr>
<tr>
<td>Dot Size(W×H)</td>
<td>0.45×0.5</td>
<td>mm</td>
</tr>
<tr>
<td>Weight</td>
<td></td>
<td>g</td>
</tr>
</table>

### Electrical Chatacteristics

(V<sub>DD</sub>=5V±0.25V)

<table>
<tr>
<th>Item</th>
<th>Symbol</th>
<th>Test Condition</th>
<th>Min</th>
<th>Typ</th>
<th>Max</th>
<th>Unit</th>
</tr>
<tr>
<td>Input High Voltage</td>
<td>V<sub>IH</sub></td>
<td>-</td>
<td>2.2</td>
<td>-</td>
<td>V<sub>DD</sub></td>
<td>V</td>
</tr>
<tr>
<td>Input Low Voltage</td>
<td>V<sub>IL</sub></td>
<td>-</td>
<td>-0.3</td>
<td>-</td>
<td>0.6</td>
<td>V</td>
</tr>
<tr>
<td>Output High Voltage</td>
<td>V<sub>OH</sub></td>
<td>I<sub>OH</sub>=0.3mA</td>
<td>2.4</td>
<td>-</td>
<td>-</td>
<td>V</td>
</tr>
<tr>
<td>Output Low Voltage</td>
<td>V<sub>OL</sub></td>
<td>I<sub>OL</sub>=1.2mA</td>
<td>0</td>
<td>-</td>
<td>0.4</td>
<td>V</td>
</tr>
<tr>
<td>Supply Current</td>
<td>I<sub>DD</sub></td>
<td>V<sub>DD</sub>=5.0V</td>
<td>-</td>
<td>1.2</td>
<td>3.0</td>
<td>mA</td>
</tr>
<tr>
<td>LCD Driving Voltage</td>
<td>V<sub>DD</sub> - V<sub>O</sub></td>
<td>Ta=25℃</td>
<td>-</td>
<td>5.0</td>
<td>-</td>
<td>V</td>
</tr>
</table>

### LED Backlight Specifications (Ta=25℃)

<table>
<tr>
<th>Item</th>
<th>Symbol</th>
<th>Typ</th>
<th>Max</th>
<th>Unit</th>
</tr>
<tr>
<td>Forward Voltage</td>
<td>V<sub>f</sub></td>
<td>4.05</td>
<td>4.25</td>
<td>V</td>
</tr>
<tr>
<td>Forward Current</td>
<td>I<sub>f</sub></td>
<td>60</td>
<td>-</td>
<td>mA</td>
</tr>
<tr>
<td>Emission Wave Length</td>
<td>λ<sub>p</sub></td>
<td>568</td>
<td>-</td>
<td>nm</td>
</tr>
</table>

## Pin definition and Rating

---
<table>
<tr>
<th>Pin</th>
<th>Symbol</th>
<th>Level</th>
<th>Function</th>
</tr>
<tr>
<td>1</td>
<td>V<sub>SS</sub></td>
<td>-</td>
<td>GND(0V)</td>
</tr>
<tr>
<td>2</td>
<td>V<sub>DD</sub></td>
<td>-</td>
<td>Supply Voltage for Logic (+5V)</td>
</tr>
<tr>
<td>3</td>
<td>V<sub>O</sub></td>
<td>-</td>
<td>LCD Driving Voltage</td>
</tr>
<tr>
<td>4</td>
<td>RS</td>
<td> H/L</td>
<td>H:Data
L:Instruction Code</td>
</tr>
<tr>
<td>5</td>
<td>R/W</td>
<td> H/L</td>
<td>H:Read
L:Write</td>
</tr>
<tr>
<td>6</td>
<td>E</td>
<td> H,H-&gt;L</td>
<td>Enable Signal</td>
</tr>
<tr>
<td>7</td>
<td>DB0</td>
<td> H/L</td>
<td>Data Bus Line</td>
</tr>
<tr>
<td>8</td>
<td>DB1</td>
<td> H/L</td>
</tr>
<tr>
<td>9</td>
<td>DB2</td>
<td> H/L</td>
</tr>
<tr>
<td>10</td>
<td>DB3</td>
<td>H/L</td>
</tr>
<tr>
<td>11</td>
<td>DB4</td>
<td> H/L</td>
</tr>
<tr>
<td>12</td>
<td>DB5</td>
<td> H/L</td>
</tr>
<tr>
<td>13</td>
<td>DB6</td>
<td> H/L</td>
</tr>
<tr>
<td>14</td>
<td>DB7</td>
<td> H/L</td>
</tr>
<tr>
<td>15</td>
<td>LEDA</td>
<td>-</td>
<td>LED Backlight Power Supply</td>
</tr>
<tr>
<td>16</td>
<td>LEDK</td>
<td>-</td>
</tr>
</table>

## Mechanic Dimensions

![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-dimen.JPG)

## Resources

* [Demo code for Arduino](https://www.seeedstudio.com/depot/images/product/LCD0820.pde)

* [Datasheet](https://www.seeedstudio.com/depot/datasheet/LMB0820-info.pdf)

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
