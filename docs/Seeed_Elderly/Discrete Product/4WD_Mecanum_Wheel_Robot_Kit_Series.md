---
description: 4WD Mecanum Wheel Robot Kit Series
title: 4WD Mecanum Wheel Robot Kit Series
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /4WD_Mecanum_Wheel_Robot_Kit_Series
last_update:
  date: 1/13/2023
  author: shuxu hu
---

4WD Mecanum Wheel Robot Kit series products are 4 wheel drive mobile platforms based on Mecanum wheels. Each kit contains two left mecanum wheels as well as two right mecanum wheels. The four Mecanum wheels are each connected to a separate motor with independent control. Depending on each individual wheel direction and speed, the mobile platform can move forward, backward, sideways and any other desired directions or spin. Two remote control modules – BLE module and RF module – can be added on this kit to allow remote control.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

The Mecanum wheel is one design for a wheel which can move a vehicle in any direction. It is a conventional wheel with a series of rollers attached to its circumference. These rollers each have an axis of rotation at 45° to the plane of the wheel and at 45° to a line through the centre of the roller parallel to the axis of rotation of the wheel. There are two types of Mecunum wheels, left-handed and right-handed Mecunum wheel; the difference between them is the orientation of rollers. For left-handed Mecunum wheel, as shown below, rollers are orientated from lower right to upper left. Rollers for right-handed wheels are installed in the opposite way.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/LeftAndRight_Mecanum_Wheel.PNG)

The installation of the 4WD Mecanum Wheel kit should demand some carefulness. A correct configuration requires each of four wheels is set in the way as shown below, where the rotation axis of each wheel's top roller points to the center of the platform. Please notice that all the dynamic analysis and prewritten codes are based on this configuration.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Wheel_Installation_02.PNG)

The angled peripheral rollers translate a portion of the force in the rotational direction of the wheel to a force normal to the wheel direction. Depending on each individual wheel direction and speed, the resulting combination of all these forces produce a total force vector in any desired direction. Let the radius of the wheel to be R, the angular velocity of four wheels to be ω1, ω2, ω3, ω4, the speeds of rollers on each wheel to be νg1, νg2, νg3 and νg4, and the speed of platform in x-direction, y direction and angular velocity to be νx, νy, and ω0. The global coordinate origins at О, the center of the platform, and local coordinate systems at each wheel have origin of O1, O2, O3 and O4. The distance from the mid of platform to the mid of wheel is L1, and L2 is for the distance between mid of the platform to the wheel's axis of rolling. α is the angle of the rollers: 45º in this case.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Coordinate_System.PNG)

In the global coordinate, the speed at the center of wheel 1, O1, is

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O1.PNG)

While in the local coordinate at wheel 1, the speed of O1 is

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O12.PNG)

Combine equation (1) ~ (4), we have

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_010.PNG)

Solving (5) and (6), then the angular velocity of wheel 1 is

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_02.PNG)

Similarly, the velocity of other 3 wheels can be calculated as

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_03.PNG)

The equation (8) shows the relationship between the rotation speeds of the wheels and the movement of the platform. Theoretically, the platform can move in any direction by a proper combination of the four wheels'angular velocity. In fact, For this platform, The most common used movements are quite limited. Here we give out a simplified working principle of the platform. If you are disgusted with the numbers or equations, just ignore the dynamic analysis section, and read the figure below.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Working_Principle-Simplified-.PNG)

Moving all four wheels in the same direction causes forward or backward movement, running the wheels on one side in the opposite direction to those on the other side causes rotation of the vehicle, and running the wheels on one diagonal in the opposite direction to those on the other diagonal causes sideways movement.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Mecanum-Wheel-Robot-Kit-p-2276.html)

##  Features

*   Mecanum Wheel Inside

*   Omni-directional Mobility

*   Hight Load Capacity

*   Flexibility &amp; Extendibility

*   RF/BLE Control Choices

##  Part List

1. Left Mecanum Wheel Kit

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Left_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Parts Name</th>
<th scope="col">Specification</th>
<th scope="col">Material</th>
<th scope="col">Quantity</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Left Mecanum Wheel</td>
<td>Φ60mm H32mm</td>
<td>Aluminum&amp;Rubber</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">2</th>
<td>DC Motor</td>
<td>25GA 370</td>
<td>Metal</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Motor Support for DC Motor</td>
<td>25 Series</td>
<td>Metal</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Shaft Connector</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminum</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Set Screw</td>
<td>M3×5</td>
<td>Metal</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Screw, Spring Lock Washer and Plain Washer assemblies</td>
<td>M4×18</td>
<td>Metal</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Cross Recessed Pan Head Screw</td>
<td>M3×8</td>
<td>Metal</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Cross Recessed Pan Head Screw with Washer</td>
<td>M3×8</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Hexagon Nut</td>
<td>M3</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
</table>

2. Right Mecanum Wheel Kit

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Right_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Parts Name</th>
<th scope="col">Specification</th>
<th scope="col">Material</th>
<th scope="col">Quantity</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Right Mecanum Wheel</td>
<td>Φ60mm H32mm</td>
<td>Aluminum&amp;Rubber</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">2</th>
<td>DC Motor</td>
<td>25GA 370</td>
<td>Metal</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Motor Support for DC Motor</td>
<td>25 Series</td>
<td>Metal</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Shaft Connector</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminum</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Set Screw</td>
<td>M3×5</td>
<td>Metal</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Screw, Spring Lock Washer and Plain Washer assemblies</td>
<td>M4×18</td>
<td>Metal</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Cross Recessed Pan Head Screw</td>
<td>M3×8</td>
<td>Metal</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Cross Recessed Pan Head Screw with Washer</td>
<td>M3×8</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Hexagon Nut</td>
<td>M3</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
</table>

3. Basic Version

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Part_List_for_Basic_Version.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Parts Name</th>
<th scope="col">Specification</th>
<th scope="col">Material</th>
<th scope="col">Quantity</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chassis</td>
<td>250*145*5mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Upper Deck</td>
<td>192*145*5mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Battery Cover</td>
<td>68*47*2mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Left Mecanum Wheel</td>
<td>Φ60mm H32mm</td>
<td>Aluminum&amp;Rubber</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Right Mecanum Wheel</td>
<td>Φ60mm H32mm</td>
<td>Aluminum&amp;Rubber</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">6</th>
<td>DC Motor</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Motor Support for DC Motor</td>
<td>25 Series</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Shaft Connector</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminum</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Set Screw</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 pcs</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Screw, Spring Lock Washer and Plain Washer assemblies</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Screw, Spring Lock Washer and Plain Washer assemblies</td>
<td>M2×8</td>
<td>Metal</td>
<td>20 pcs</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Cross Recessed Pan Head Screw</td>
<td>M3×8</td>
<td>Metal</td>
<td>26 pcs</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Cross Recessed Pan Head Screw with Washer</td>
<td>M3×8</td>
<td>Metal</td>
<td>16 pcs</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Hexagon Nut</td>
<td>M3</td>
<td>Metal</td>
<td>16 pcs</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Hexagon Distance Holder</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 pcs</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Hexagon Distance Holder</td>
<td>M3×10</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Hexagon Distance Holder</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Hexagon Distance Holder</td>
<td>M2×10</td>
<td>Metal</td>
<td>6 pcs</td>
</tr>
</table>

4. RF Version

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Parts Name</th>
<th scope="col">Specification</th>
<th scope="col">Material</th>
<th scope="col">Quantity</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chassis</td>
<td>250*145*5mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Upper Deck</td>
<td>192*145*5mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Battery Cover</td>
<td>68*47*2mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Remote Control Panel</td>
<td>165*90*4mm, Transparent</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Left Mecanum Wheel</td>
<td>Φ60mm H32mm</td>
<td>Aluminum&amp;Rubber</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Right Mecanum Wheel</td>
<td>Φ60mm H32mm</td>
<td>Aluminum&amp;Rubber</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">7</th>
<td>DC Motor</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Motor Support for DC Motor</td>
<td>25 Series</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Shaft Connector</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminum</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Set Screw</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 pcs</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Screw, Spring Lock Washer and Plain Washer assemblies</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Screw, Spring Lock Washer and Plain Washer assemblies</td>
<td>M2×8</td>
<td>Metal</td>
<td>32 pcs</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Cross Recessed Pan Head Screw</td>
<td>M3×8</td>
<td>Metal</td>
<td>34 pcs</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Cross Recessed Pan Head Screw with Washer</td>
<td>M3×8</td>
<td>Metal</td>
<td>16 pcs</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Hexagon Nut</td>
<td>M3</td>
<td>Metal</td>
<td>16 pcs</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Hexagon Distance Holder</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 pcs</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Hexagon Distance Holder</td>
<td>M3×10</td>
<td>Metal</td>
<td>8 pcs</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Hexagon Distance Holder</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">19</th>
<td>Hexagon Distance Holder</td>
<td>M2×10</td>
<td>Metal</td>
<td>12 pcs</td>
</tr>
<tr>
<th scope="row">20</th>
<td>[Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">21</th>
<td>[RF Bee](https://www.seeedstudio.com/depot/RFbee-V11-Wireless-arduino-compatible-node-p-614.html?cPath=19_22)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">22</th>
<td>[Grove - XBee Carrier](https://www.seeedstudio.com/depot/Grove-XBee-Carrier-p-905.html?cPath=98_16)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">23</th>
<td>[Grove - Thumb Joystick](https://www.seeedstudio.com/depot/Grove-Thumb-Joystick-p-935.html?cPath=85_51)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">24</th>
<td>[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">25</th>
<td>[Grove - Branch Cable](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">26</th>
<td>Power Cable</td>
<td>100mm, Black</td>
<td></td>
<td>3 pcs</td>
</tr>
<tr>
<th scope="row">27</th>
<td>Power Cable</td>
<td>100mm, Red</td>
<td></td>
<td>3 pcs</td>
</tr>
<tr>
<th scope="row">28</th>
<td>RockerSwitch</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">29</th>
<td>T-shape Plug</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
</table>

5. BLE Version

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-BLE_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Parts Name</th>
<th scope="col">Specification</th>
<th scope="col">Material</th>
<th scope="col">Quantity</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chassis</td>
<td>250*145*5mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Upper Deck</td>
<td>192*145*5mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Battery Cover</td>
<td>68*47*2mm, Black</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Left Mecanum Wheel</td>
<td>Φ60mm H32mm</td>
<td>Aluminum&amp;Rubber</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Right Mecanum Wheel</td>
<td>Φ60mm H32mm</td>
<td>Aluminum&amp;Rubber</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">6</th>
<td>DC Motor</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Motor Support for DC Motor</td>
<td>25 Series</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Shaft Connector</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminum</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Set Screw</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 pcs</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Screw, Spring Lock Washer and Plain Washer assemblies</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Screw, Spring Lock Washer and Plain Washer assemblies</td>
<td>M2×8</td>
<td>Metal</td>
<td>20 pcs</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Cross Recessed Pan Head Screw</td>
<td>M3×8</td>
<td>Metal</td>
<td>10 pcs</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Cross Recessed Pan Head Screw with Washer</td>
<td>M3×8</td>
<td>Metal</td>
<td>32 pcs</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Hexagon Nut</td>
<td>M3</td>
<td>Metal</td>
<td>16 pcs</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Hexagon Distance Holder</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 pcs</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Hexagon Distance Holder</td>
<td>M3×10</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Hexagon Distance Holder</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Hexagon Distance Holder</td>
<td>M2×10</td>
<td>Metal</td>
<td>6 pcs</td>
</tr>
<tr>
<th scope="row">19</th>
<td>[Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">20</th>
<td>[Grove - BLE](https://www.seeedstudio.com/depot/Grove-BLE-p-1929.html)</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">21</th>
<td>[Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V30-Atmega-328P-p-669.html)</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">22</th>
<td>[Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">23</th>
<td>[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">24</th>
<td>[Grove - Branch Cable](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">25</th>
<td>Power Cable</td>
<td>100mm, Black</td>
<td></td>
<td>3 pcs</td>
</tr>
<tr>
<th scope="row">26</th>
<td>Power Cable</td>
<td>100mm, Red</td>
<td></td>
<td>3 pcs</td>
</tr>
<tr>
<th scope="row">27</th>
<td>RockerSwitch</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">28</th>
<td>T-shape Plug</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
</table>

##  Assembly Instruction

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Assembly_Instructions.PNG)

##  Attachments

[Specs for Motor](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/res/Motor_Specs_for_4WD_Mecanum_Wheel_Robot_Kit_Series_Products.pdf)

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
