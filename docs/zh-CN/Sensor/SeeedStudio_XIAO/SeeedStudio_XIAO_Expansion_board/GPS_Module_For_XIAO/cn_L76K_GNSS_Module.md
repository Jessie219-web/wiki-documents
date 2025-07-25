---
title: Quectel L76K
description: 使用 L76K GNSS 模块与 XIAO 开发板入门
keywords:
  - XIAO
  - Quectel L76K
  - GNSS
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg
slug: /cn/get_start_l76k_gnss
last_update:
  date: 05/15/2025
  author: Spencer
sidebar_position: 0
---

# 使用 L76K GNSS 模块与 SeeedStudio XIAO 开发板入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<!-- TODO 添加商城链接 -->

## 简介

L76K GNSS 模块是一个多系统全球导航卫星系统模块，兼容所有 XIAO 开发板，支持 GPS、北斗（BDS）、GLONASS 和 QZSS 系统，允许多系统联合定位或单系统独立定位。它还支持 AGNSS 功能，内置低噪声放大器和声表面滤波器，提供快速、精准、高性能的定位体验。

该模块配备高性能的主动 GNSS 天线，覆盖 GPS L1 C/A、北斗 B1 和 GLONASS L1 频段。设计中还包含一个微型亮绿色 LED，用于指示固定时的 1PPS 输出。

### 特性

- **增强接收能力**：内置低噪声放大器和声表面滤波器，提高灵敏度并减少噪声
- **高精度**：32/72 通道，-162dBm 跟踪灵敏度，-160dBm 重新捕获灵敏度
- **节能**：41mA 跟踪/捕获，360µA 待机
- **多 GNSS 系统**：由 Quectel L76K 提供支持，支持 GPS、北斗、GLONASS 和 QZSS
- **陶瓷天线**：增强信号接收，优于传统天线

### 规格

<div class="table-center">
<table align="center">
 <tr>
     <th>项目</th>
     <th>详情</th>
 </tr>
 <tr>
     <th>GNSS 频段</th>
     <td>GPS L1 C/A: 1575.42MHz<br></br> GLONASS L1: 1602MHz<br></br> 北斗 B1: 1561.098MHz</td>
 </tr>
 <tr>
     <th>通道</th>
     <td>32 跟踪通道 / 72 捕获通道</td>
 </tr>
  <tr>
     <th>首次定位时间 (TTFF)</th>
     <td>冷启动: 30s（无 AGNSS），5.5s（有 GNSS）<br></br> 热启动: 5.5s（无 AGNSS），2s（有 AGNSS）</td>
 </tr>
  <tr>
     <th>灵敏度</th>
     <td>自动捕获: -148dBm<br></br> 跟踪: -162dBm<br></br> 重新捕获: -160dBm</td>
 </tr>
  <tr>
     <th>精度</th>
     <td>位置: 2.0m CEP<br></br> 速度: 0.1m/s<br></br> 加速度: 0.1m/s²<br></br> 时间: 30ns</td>
 </tr>
  <tr>
     <th>UART 接口</th>
     <td>波特率: 9600~115200bps（默认 9600bps）<br></br> 更新速率: 1Hz（默认），5Hz（最大）<br></br> 协议: NMEA 0183，CASIC 专有协议</td>
 </tr>
  <tr>
     <th>天线</th>
     <td>类型: 主动天线<br></br> 工作频率: 1559–1606MHz<br></br> 同轴电缆: RF1.13 长度=10cm<br></br> 电缆连接器: U.FL 插头 RA</td>
 </tr>
  <tr>
     <th>电流消耗（带主动天线）</th>
     <td>自动捕获: 41mA<br></br> 跟踪: 41mA<br></br> 待机: 360uA</td>
 </tr>
  <tr>
     <th>尺寸</th>
     <td>18mm x 21mm</td>
 </tr>
</table>
</div>

## 硬件概览

在开始之前，我们可以参考以下图片来了解 L76K GNSS 模块的针脚设计，以便更好地理解模块的功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-pinout.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

### 硬件准备

为了充分体验 L76K GNSS 模块的功能，我们建议将其与 XIAO 系列的主板配对使用。以下 *任意 XIAO 型号* 都与 L76K GNSS 模块兼容。

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

在将此模块用于 XIAO 主板之前，您需要在模块上安装针脚插座，并将有源 GNSS 天线插入模块。当连接到 XIAO 时，请特别注意模块的安装方向，请勿反向插入，否则可能会烧毁模块或 XIAO。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png" style={{width:500, height:'auto'}}/></div>

:::caution
请特别注意模块的安装方向，请勿反向插入，否则可能会烧毁模块或 XIAO。
:::

### 软件准备

要使用 SeeedStudio XIAO 的 L76K GNSS 模块，我们需要对 XIAO 系列进行编程。推荐的编程工具是 Arduino IDE，您需要为 XIAO 配置 Arduino 环境并添加板载包。

:::tip
如果您是第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](/Getting_Started_with_Arduino/)。
:::

#### 第 1 步：根据您的操作系统下载并安装稳定版本的 Arduino IDE

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

#### 第 2 步：启动 Arduino 应用程序

#### 第 3 步：为您使用的 XIAO 配置 Arduino IDE

- 如果您想使用 **Seeed Studio XIAO SAMD21** 进行后续操作，请参考 **[此教程](/Seeeduino-XIAO/#software)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO RP2040** 进行后续操作，请参考 **[此教程](/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO nRF52840** 进行后续操作，请参考 **[此教程](/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32C3** 进行后续操作，请参考 **[此教程](/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32S3** 进行后续操作，请参考 **[此教程](/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

#### 第 4 步：将 TinyGPSPlus 库添加到 Arduino

首先，您需要在 Arduino IDE 中搜索并下载最新版本的 **TinyGPSPlus** 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png" style={{width:800, height:'auto'}}/></div>

## 应用演示

### 示例 1：读取并显示 GNSS 数据

当硬件和软件准备就绪后，我们开始上传第一个示例程序。L76K GNSS 模块在上电后每 1 秒通过串口打印 GNSS 信息。在本示例中，我们将使用 **TinyGPSPlus** 库解析从模块接收到的 NMEA 语句，并将包括纬度、经度和时间在内的结果打印到 Arduino IDE 的串口监视器。

以下是源代码：

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>
/*
   此示例代码演示了如何在 SeeedStudio XIAO 上使用 L76K GNSS 模块。
*/
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// TinyGPSPlus 对象
TinyGPSPlus gps;

// GNSS 模块的串口连接
SoftwareSerial ss(RXPin, TXPin);

void setup() {
  Serial.begin(115200);
#ifdef ARDUINO_SEEED_XIAO_RP2040
  pinMode(D10,OUTPUT);
  digitalWrite(D10,1);
  pinMode(D0,OUTPUT);
  digitalWrite(D0,1);
#endif
  ss.begin(GPSBaud);

  Serial.println(F("DeviceExample.ino"));
  Serial.println(F("使用 TinyGPSPlus 和 L76K GNSS 模块的简单演示"));
  Serial.print(F("测试 TinyGPSPlus 库版本："));
  Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println(F("作者：Mikal Hart"));
  Serial.println();
}

void loop() {
  // 每次正确编码新语句时，此代码都会显示信息。
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println(F("未检测到 GPS：请检查接线。"));
    while (true);
  }
}

void displayInfo() {
  Serial.print(F("位置："));
  if (gps.location.isValid()) {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  } else {
    Serial.print(F("无效"));
  }

  Serial.print(F("  日期/时间："));
  if (gps.date.isValid()) {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  } else {
    Serial.print(F("无效"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid()) {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  } else {
    Serial.print(F("无效"));
  }

  Serial.println();
}
```

只需选择您使用的 XIAO 和 XIAO 所在的端口号，编译并上传代码。

确保 L76K GNSS 模块放置在室外可以接收到良好 GNSS 信号的地方。将代码上传到您的 XIAO 并等待几分钟，您应该可以在串口监视器上看到显示的信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png" style={{width:800, height:'auto'}}/></div>

此代码使用 TinyGPSPlus 库通过串口连接从 L76K GNSS 模块读取数据，并在串口监视器上显示有效的位置信息和日期/时间。

## 配置

### 示例 1：更改 LED 的行为

本节演示如何通过 Arduino 使用串行通信发送特定的十六进制命令来控制绿色 LED。以下示例展示了如何关闭 LED，然后将其恢复到正常的闪烁状态。

```cpp
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
SoftwareSerial SerialGNSS(RXPin, TXPin);

void setup() {
  SerialGNSS.begin(GPSBaud);

  // 定义用于关闭 LED 的字节数组
  byte OffState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                     0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                     // highlight-start
                     0x00, 
                     // highlight-end
                     0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, 
                     // highlight-start
                     0xF0, 
                    // highlight-end
                     0xC8, 0x17, 0x08};

  // 定义用于恢复 LED 闪烁状态的字节数组
  byte RecoverState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                         0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                         // highlight-start
                         0x03, 
                         // highlight-end
                         0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00,
                         // highlight-start
                         0xF3, 
                         // highlight-end
                         0xC8, 0x17, 0x08};

  // 发送关闭 LED 的命令
  SerialGNSS.write(OffState, sizeof(OffState));
  // 等待 5 秒
  delay(5000);
  // 发送恢复 LED 闪烁的命令
  SerialGNSS.write(RecoverState, sizeof(RecoverState));
}

void loop() {}
```

:::info
有关 Quectel_L76K_GNSS 的 CASIC 协议消息的详细信息，请参见以下内容。

```c
struct CASIC_Messages {  
  uint16_t header; // 0xBA, 0xCE
  uint16_t len;    // 0x10, 0x00
  uint8_t class;   // 0x06
  uint8_t id;      // 0x03
  uint8_t* payload; // 0x40, 0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, ->8
                   // 0x00, 0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, ->8
  uint8_t checksum; // 0xF0,0xC8, 0x17, 0x08
} L76KStruct;
```

:::

## 资源

- **PDF**: [L76K GNSS 模块用于 Seeed Studio XIAO 的原理图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/109100021-L76K-GNSS-Module-for-Seeed-Studio-XIAO-Schematic.pdf)
- **PDF**: [Quectel_L76K_GNSS_协议规范_V1.0](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_协议规范_V1.0.pdf)
- **PDF**: [Quectel_L76K_GNSS_Protocol_Specification_V1.1](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_Protocol_Specification_V1.1.pdf)
- **GitHub**: [Seeed_L76K-GNSS_for_XIAO](https://github.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO)

## 故障排查

<details>
<summary>充电电池可以为 XIAO 供电吗？</summary>
不，在此上下文中，充电电池仅用于 L76K GNSS 模块的实时时钟 (RTC) 和保持热启动状态。它不能用作 XIAO 或 GNSS 模块一般操作的主要电源。
</details>

<details>
<summary>为什么 GNSS 信息没有显示在串口监视器上？</summary>

请确保 L76K GNSS 模块放置在室外，以便接收到良好的 GNSS 信号。
</details>

<details>
<summary>为什么设备插入 XIAO RP2040 时绿色指示灯常亮？</summary>
要解决此问题，您需要将 D0 和 D10 拉高。绿色指示灯常亮表明设备进入了异常工作状态。

```cpp
pinMode(D10,OUTPUT);
digitalWrite(D10,1);
pinMode(D0,OUTPUT);
digitalWrite(D0,1);
```

</details>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>