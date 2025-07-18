---
description: RS485 500cm 超声波液位传感器
title: RS485 500cm 超声波液位传感器
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor
last_update:
  date: 05/15/2025
  author: Yvonne
---

# RS485 500cm 超声波液位传感器

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png"/></div>

RS485 500cm 超声波液位传感器提供高精度测量，测量范围为 25 至 500cm。它采用先进的超声波传感技术，能够以高达 1mm 的分辨率进行精确距离测量。我们还提供串口工具用于参数配置和固件升级，以确保无缝操作，使其非常适合多种应用场景，包括水平测距、智能垃圾桶管理系统、机器人避障以及自动控制。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## 可升级为工业传感器

通过 SenseCAP S2100 [数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)，您可以轻松将此传感器升级为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型开发，还为您提供使用 SenseCAP 系列坚固耐用的 [工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) 扩展项目的可能性。

# 使用 S2100 LoRaWAN 数据记录仪

在本页面中，我们将指导您如何将 S2100 LoRaWAN 数据记录仪与 500cm 超声波液位传感器连接，使您能够在短短五分钟内创建一个坚固的工业级 LoRaWAN 无线传感器，可用于商业用途。

## 开始使用

### 准备工作
#### 硬件
##### 所需材料

<table align="center">
	<tr>
	    <th>SenseCAP S2100 数据记录仪</th>
      <th>500cm 超声波液位传感器</th>
    <th>十字螺丝刀</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html?queryID=b2f7f18dfc97aa5f70b2a759a49a00ab&objectID=5588&indexName=bazaar_retailer_products">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

## 1. 准备数据记录器、RS485 500cm 超声波液位传感器、网关和工具

1. **数据记录器**：它是一个 LoRaWAN 转换器，可以将 MODBUS RS485/模拟量/GPIO 传感器转换为支持 LoRa 的传感器，从而通过 LoRaWAN 协议传输数据。

2. **RS485 500cm 超声波液位传感器**：它使用超声波传感技术进行距离测量，测量范围为 25cm 至 500cm，分辨率可达 1mm。配备 IP67 防水超声波换能器，具有较强的工作环境适应能力。
3. **十字螺丝刀**：用于组装传感器探头。
4. **网关**：LoRaWAN 传感器将数据传输到 LoRaWAN 网关，网关再将数据传输到云服务器。如果您没有网关，有以下两种选择：
- 选项 1：传感器在 Helium 网络覆盖的区域工作（请在 [Helium Explorer](https://explorer.helium.com/) 上检查）。如果有 Helium 网络覆盖，您可以使用传感器传输数据，而无需购买网关。
- 选项 2：购买一个 [网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)。

5. 下载 SenseCAP Mate App 进行配置：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mate App iOS 和 Android</div>

准备工作完成。让我们开始吧！

### 2. 网络架构

让我们从 LoRaWAN 的网络架构开始。
数据记录器将传感器数据转换为 LoRa 数据并上传到网关。网关将数据上传到服务器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. 将 RS485 500cm 超声波液位传感器连接到 SenseCAP 数据记录器

- **步骤 1：** 拧开数据记录器上的三个螺丝

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **步骤 2：** 移除底盖并取出内部的 PCBA，直到可以接触到螺丝端子。您无需取出整个电路板

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **步骤 3：** 按顺时针方向拧下螺纹盖

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **步骤 4：** 将附带的电缆穿过螺纹盖和底盖

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **步骤 5：** 按如下方式将电缆的导线连接到螺丝端子

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**提示**：如果您使用的是其他协议，例如 4-20mA，请参考以下引脚表：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

RS485 500cm 超声波液位传感器的线序：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2024.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2010.png"/></div>

- **步骤 6：** 将硬件单元放回外壳内，盖上底盖并拧紧螺丝

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **步骤 7：** 拧紧螺纹盖并固定电缆

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

完成超声波液位传感器和数据记录器的所有连接后，应该如下图所示：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2013.png"/></div>

### 4. 配置数据记录器和 RS485 500cm 超声波液位传感器的通信设置

- **步骤 1：** 选择 **S2100 数据记录器** 并在配置页面点击 **Setup**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **步骤 2：** 按住按钮 **3** 秒，绿色 LED 将以 1 秒的频率闪烁。然后点击 **Scan** 开始扫描数据记录器的蓝牙。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **步骤 3：** 配置 LoRaWAN 和传感器参数（包括 RS485 Modbus-RTU 命令）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### 如何导入模板

- **步骤 1：** 请点击此模板链接并选择您的浏览器下载。
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **步骤 2：** 点击右上角的 "➕"，选择 "import Template"，然后选择下载的文件，模板将被导入。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **步骤 3：** 点击 **Send** 并通过点击 **Measure** 测试传感器

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2017.png"/></div>

成功获取传感器的距离和温度！

### 5. 将数据上传到 SenseCAP Portal 和 Mate App

- **步骤 1：** 返回应用程序主页，数据记录器的红色 LED 将闪烁几秒钟，随后绿色 LED 短暂闪烁，表示 LoRaWAN 连接成功并且数据已发送。或者，您可以按下数据记录器上的按钮一次，以强制发送数据。
在上传数据之前，请确保网关正常工作或具有 Helium 网络覆盖。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

现在我们需要将此传感器添加到 SenseCAP 平台，以便在云端查看数据。

- **步骤 2：** 通过扫描二维码绑定数据记录仪。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **步骤 3：** 在 App 和门户网站上查看数据。(https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

### 6. 在真实环境中测试传感器

快速应用于户外真实场景进行长期监测。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2020.png"/></div>

目前，已经开发了一款 LoRaWAN 传感器。

## 资源

- **[PDF]** [RS485 500cm 超声波液位传感器](https://files.seeedstudio.com/wiki/RS485-Ultrasonic-Level-Sensor/RS485-500cm-Ultrasonic-Level-Sensor.pdf)
- **[PDF]** [SenseCAP S2100 数据记录仪用户指南](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>