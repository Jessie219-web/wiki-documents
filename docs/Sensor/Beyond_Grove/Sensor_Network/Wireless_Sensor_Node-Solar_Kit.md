---
title: Wireless Sensor Node - Solar Kit
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wireless Sensor Node - Solar Kit/
slug: /Wireless_Sensor_Node-Solar_Kit
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit.jpg)

**Wireless Sensor Node - Solar Kit** is an easy to use bundle created for experimenting with XBee and **XBee** compatible standalone wireless modules like RFBee and [Wifi Bee](/Wifi_Bee "Wifi Bee"). Every **maker** is confronted with the question of selection the right set of components to build **Wireless Sensor Node**. **Wireless Sensor Node - Solar Kit** fills this place very appropriately. The Grove - XBee Carrier provides LDO power supply, charger for LiPo Battery and programming port for **XBee** compatible modules. The **Solar Panel** provides the required charging voltage in remote areas. The **500 mAH LiPo Battery** provides the backup when the Sun is away. A properly designed and configured wireless module could provide very long hours of usage. For this, put the node to sleep when not transmitting the sensor value. This kit comes with a perfectly made **Transparent Box** , sets of **Screws** and **Plastic Rivets**.

* We suggest you to buy more than one kit to create a distributed array of Sensor Nodes.

* Bees Shield along with **Seeeduino** and **Wifi Bee** can act as Wireless internet Gateway for these nodes.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wireless-Sensor-Node-Solar-Kit-p-919.html)

## Contents of the Kit

---
<!-- <table>
  <tbody><tr>
      <th> Component
      </th>
      <th> Image
      </th>
      <th> Description
      </th>
      <th> Quantity
      </th></tr>
    <tr>
      <td> **Grove - XBee Carrier v0.9b**
      </td>
      <td> ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Bee_Stem.jpg)
      </td>
      <td> Base board for XBee nodes
      </td>
      <td> 1
      </td></tr>
    <tr>
      <td> **Transparent Box**
      </td>
      <td> ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_4_Box.jpg)
      </td>
      <td> Enclosure for Node Components
      </td>
      <td> 1
      </td></tr>
    <tr>
      <td> **0.5 W - 55x70 mm Solar Panel**
      </td>
      <td> ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Solar_Panel.jpg)
      </td>
      <td> Charging Power Supply
      </td>
      <td> 1
      </td></tr>
    <tr>
      <td> **5 cm Grove Wire**
      </td>
      <td> ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_5cm_Twig_Wires.jpg)
      </td>
      <td> 4 Wire Cable to attach Grove modules to Grove - XBee Carrier
      </td>
      <td> 2
      </td></tr>
    <tr>
      <td> **Mini USB Cable**
      </td>
      <td> ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Mini_USB_Cable.jpg)
      </td>
      <td> Programming Cable
      </td>
      <td> 1
      </td></tr>
    <tr>
      <td> **XK 353545 500mAH LiPo Battery**
      </td>
      <td> ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-LiPo_Battery.jpg)
      </td>
      <td> Lithium Ion Battery
      </td>
      <td> 1
      </td></tr>
    <tr>
      <td> **KA 2*6 Screws**
      </td>
      <td> ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_4_Screws.jpg)
      </td>
      <td> Metal Screws for fixing Grove - XBee Carrier to Box
      </td>
      <td> 4
      </td></tr>
    <tr>
      <td> **2064 Rivets**
      </td>
      <td> ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_8_Plastic_Rivets.jpg)
      </td>
      <td> Plastic rivets for attaching Grove modules to Grove - XBee Carrier
      </td>
      <td> 8
      </td></tr></tbody></table> -->

## Application Ideas

---

* Distributed Wireles Sensor Nodes with **XBee** or **WifiBee** or **RFBee**.

* Build **Data Loggers** when connected with Wireless Gateway.

* Intelligent Home Network

* Industrial Automation

* **SCADA** (Supervisory control and data acquisition.) systems

## Cautions

---

* Insert the Bees in the right direction.

## Specification

---
<table>
<tr>
<th> Item</th>
<th> Specification</th>
</tr>
<tr>
<td width="200px"> Grove - XBee Carrier I/O Logic</td>
<td width="200px"> 3.3V</td>
</tr>
<tr>
<td> LiPo Battery</td>
<td> 500mAH @ 3.7V</td>
</tr>
<tr>
<td> Solar Panel</td>
<td> 0.5Watt @ 5.5V</td>
</tr></table>

## Usage

---
**Wireless Sensor Node Field Use - Charged by Solar Panel"**
![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Demo_Arrangement.jpg)

### Quick Start Guide

This section provides a Step-by-Step construction of a Wireless Sensor Node. Images are only for illustrating the procedure of that step. We have used two different setups of Grove - Xbee Carrier and Grove modules. So, just follow the procedure.

| Step | Procedure                                                                                                        | Illustration                                                                                                                                 |
|------|------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | Open the box as shown                                                                                            | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Top_PlaceForOpening.jpg)   |
| 1.1  | Place the LiPo Battery inside the Box                                                                            | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Placing_Battery.jpg)       |
| 1.2  | Insert the Solar Panel Connector                                                                                 | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Construction1.jpg)         |
| 1.3  | Open the plastic rivet                                                                                           | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Box_Plastic_Rivet1.jpg)    |
| 1.4  | An opened rivet looks like this                                                                                  | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Box_Plastic_Rivet2.jpg)    |
| 1.5  | Attach a Grove module with the help of Rivets. Keep the Grove - Bee Carrier as shown inside the transparent box. | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Construction2.jpg)         |
| 2.3  | A fully closed rivet looks like this                                                                             | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Rivet_Bottom.jpg)          |
| 3.0  | Attach the 4-Wire Grove Cable, Battery and Solar Panel Connectors to Grove - XBee Carrier                        | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_TwigConnection.jpg)        |
| 4.0  | Insert XBee module. Fix the Screw at four corners                                                                | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Fix_Screw.jpg)             |
| 5.0  | Close the lid. USB socket and Power Switch are accessible from the side                                          | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_Wires_Switch_USB_Side.jpg) |
| 6.0  | Connect the USB cable and program the XBee                                                                       | ![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Wireless_Sensor_Node-Solar_Kit_USBProgramming.jpg)        |

### Programming with various Bee Modules

Information on how to setup / program Bee Modules are available in

* [Grove - XBee_Carrier](/Grove-XBee_Carrier "Grove - XBee Carrier")

* [Wifi Bee Page](/Wifi_Bee "Wifi Bee")

## Image Gallery

---
![](https://files.seeedstudio.com/wiki/Wireless_Sensor_Node-Solar_Kit/img/Bee_Stem_with_LiPOBattery_Being_Charged_By_SolarCell.jpg)

**LiPo Being Charged by Solar Panel"**

## See Also

* [Grove - XBee_Carrier](/Grove-XBee_Carrier "Grove - XBee Carrier")

* [Bees Shield](/Bees_Shield "Bees Shield")

* [XBee](/XBee_Shield_V2.0 "XBee_Shield_V2.0")

* [Wifi Bee](/Wifi_Bee "Wifi Bee")

* [RFBee](/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee_V1.1-Wireless_Arduino_compatible_node")

* [UartSBee](/UartSBee_V3.1 "UartSBee_V3.1")

* <a href="/Seeeduino_V2.2" ><span><font color={'000000'} size={"3"}> Seeeduino V2.2</font></span></a>

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
