---
description: 基于 Wio-SX1262 和 XIAO ESP32S3 模块的 LoRaWAN 传感器节点
title: LoRaWAN 传感器节点
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67_1.webp
slug: /cn/wio_sx1262_xiao_esp32s3_for_lora_sensor_node
last_update:
  date: 05/15/2025
  author: Evelyn Chen
sidebar_position: 4
---

# 配置 XIAO ESP32S3 和 Wio-SX1262 套件为 LoRaWAN 传感器节点

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

本指南提供了将 XIAO ESP32S3 和 Wio-SX1262 套件配置为 LoRaWAN 传感器节点的分步教程，包括连接 DHT20 温湿度传感器、添加 M2 LoRaWAN 网关，并将数据发送到 The Things Network LNS 平台。同时还涵盖了格式解码器的配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png" style={{width:900, height:'auto'}}/></div>

## 准备工作

* XIAO ESP32S3 和 Wio-SX1262 套件
* DHT20 温湿度传感器
* XIAO 扩展板
* M2 LoRaWAN 室内网关
* The Things Network 账户访问权限

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 和 Wio-SX1262 套件</th>
      <th>XIAO 扩展板</th>
      <th>DHT20 温湿度传感器</th>
      <th>M2 LoRaWAN 室内网关</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## 硬件设置

1. 将 Wio-SX1262 模块连接到 XIAO ESP32S3。
2. 将 DHT20 传感器（I2C Grove 接口）和 XIAO ESP32S3 & Wio-SX1262 套件连接到 XIAO 扩展板。
3. 将套件连接到您的 PC。
4. 将 M2 网关连接到电源和以太网端口。

## 视频教程

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/7NptcHkVcpk" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 在 TTN 上注册与设置

访问 https://www.thethingsnetwork.org/get-started 并注册账号，就像注册其他网站一样。本指南适用于 TTS Sandbox。

访问 [TTS Sandbox 指南](https://www.thethingsnetwork.org/get-started) 并注册账号。
确认您的邮箱地址后，您可以登录 [控制台](https://console.cloud.thethings.network/)。如果有任何疑问，可以在 [The Things Network 论坛](https://www.thethingsnetwork.org/forum/)上提问。登录时使用完全相同的账号信息。

### 在 TTN 上注册网关

建议先注册网关。本文以 [SenseCAP M2 LoRaWAN 室内网关 (SX1302)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html) 为例。

关于个人 LoRaWAN 网关的关键概念和故障排除，可以参考[这里](https://www.thethingsindustries.com/docs/gateways/)。

### 在 TTN 上创建新应用

应用就像一个盒子，用来存放一些设备——通常是执行相同任务的设备。在大规模部署中，这可能是成千上万个类似设备。刚开始时可能只有几个设备，因此暂时无需担心如何划分使用。

登录控制台后，进入“Applications”以创建您的第一个应用。应用 ID 必须全为小写字母或数字，不允许有空格，可以使用短横线，并且必须在整个 TTN 社区中唯一——因此“first-app”会被拒绝。您可以使用“your-username-first-app”，因为这可能是唯一的。名称和描述是可选的，仅供您自己使用。

### 在 TTN 上注册终端设备

**步骤 1**. 进入您在上一步创建的应用。

**步骤 2**. 点击创建新终端设备

在应用摘要页面右侧中间位置，有一个蓝色按钮 **+ Register end device**。点击此按钮为您的第一个设备创建设置。

**步骤 3**. 输入终端设备的详细信息

由于您正在使用第三方 LoRaWAN 协议栈制作自己的设备，因此设备库中不会有相应条目，请选择“**Enter end device specifics manually**”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png" style={{width:400, height:'auto'}}/></div>

**步骤 4**. 输入设备详细信息

选择适合您所在地区的 **频率计划**。请注意，几乎所有国家都有关于使用频率的法律规定，因此不要随意选择。对于欧洲，请使用推荐选项。对于其他地区，请选择标记为“used by TTN”的选项。在本例中，选择 **868 MHz**。

选择 **LoRaWAN 1.1.0** ——列表中的最后一个，也是最新的规范。**RadioLib 使用 RP001 区域参数 1.1 修订版 A**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png" style={{width:400, height:'auto'}}/></div>

此时，系统会要求您输入 **JoinEUI**。由于这是一个 DIY 设备并且我们使用的是 RadioLib，您可以按照 LoRa Alliance TR007 技术推荐文档的建议使用 **全零**。输入全零后点击确认，系统会要求您提供 **DevEUI**、**AppKey** 和 **NwkKey**。建议使用控制台 **生成**这些值，以确保格式正确。

您的终端设备 ID 可以更改，以使设备更易于识别。选择与硬件相关的名称，例如 **test-device**。然后点击蓝色的“**Register device**”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png" style={{width:400, height:'auto'}}/></div>

**步骤 5**. 将设备详细信息复制到 Arduino 的配置文件中

然后，您需要将设备详细信息复制到 RadioLib 的 **配置文件**中。控制台提供了复制按钮，您无需手动输入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png" style={{width:400, height:'auto'}}/></div>


## 配置 XIAO ESP32S3 和 Wio-SX1262 套件为 LoRaWAN 传感器节点

代码使用 Arduino 编写，旨在配置 Wio-SX1262 模块以及 XIAO ESP32S3 开发板，使其充当 LoRaWAN 传感器节点。它连接了一个 DHT20 传感器，用于读取温度和湿度数据，并通过 LoRaWAN 将这些数据发送到 The Things Network。

### 为 XIAO ESP32S3 和 DHT20 传感器安装必要的库

* 安装 XIAO ESP32S3 的 Arduino 环境

参考 https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation。

* 安装 `DHT20` 传感器库包：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⬇️</font></span></strong>
    </a>
</div>

* 安装 `RadioLib` 库
注意：安装 **版本 6.6.0**，否则代码无法编译。

### 设置

**步骤 1**. 填写 LoRaWAN 设备认证和网络访问参数

`RADIOLIB_LORAWAN_JOIN_EUI` 和 `RADIOLIB_LORAWAN_DEV_EUI` 用于设备加入 LoRaWAN 网络时的设备标识。就像在一个大型在线社区中，这两个参数是设备的“身份证”，让网络知道哪个设备正在请求加入。

`RADIOLIB_LORAWAN_APP_KEY` 和 `RADIOLIB_LORAWAN_NWK_KEY` 用于安全认证和网络访问控制。它们类似于进入网络社区的“密码”，确保只有具有正确密钥的设备才能与网络安全通信。此外，它们还可以根据应用（通过 APP_KEY 区分）和网络（通过 NWK_KEY 区分）的权限限制设备的操作。

只需将 TTN 中的参数 **复制**到配置文件中。

1. 这里定义了一个名为 `RADIOLIB_LORAWAN_JOIN_EUI` 的宏。如果此宏未在其他地方定义，则会将其设置为十六进制的 `全零` 值。

```cpp
#ifndef RADIOLIB_LORAWAN_JOIN_EUI
#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000
#endif
```

2. 同样，定义了 `RADIOLIB_LORAWAN_DEV_EUI` 宏，表示 `DevEUI`（设备唯一标识符），这里设置了一个特定的十六进制值，用于设备加入 LoRaWAN 网络时的设备标识。

```cpp
#ifndef RADIOLIB_LORAWAN_DEV_EUI
#define RADIOLIB_LORAWAN_DEV_EUI   0x****************
#endif
```

3. 定义了 `RADIOLIB_LORAWAN_APP_KEY` 和 `RADIOLIB_LORAWAN_NWK_KEY` 宏，分别表示 AppKey 和 NwkKey，用于安全认证和网络访问控制。

```cpp
#ifndef RADIOLIB_LORAWAN_APP_KEY
#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif

#ifndef RADIOLIB_LORAWAN_NWK_KEY   // 在此处填写您的 Nwk Key
#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif
```

4. 定义了以下宏，表示 `LoRaWAN 上行参数`。这些参数用于配置发送到 LoRaWAN 网络的上行负载。

```cpp
#define LORAWAN_UPLINK_USER_PORT  2
#define LORAWAN_UPLINK_DATA_RATE  3

#define LORAWAN_UPLINK_PERIOD     10000 // 毫秒

#define LORAWAN_UPLINK_DATA_MAX   115 // 字节
```

**步骤 2**. 选择 LoRaWAN 区域参数

LoRaWAN 通信有多个区域选项，包括 `EU868`（欧洲 868 MHz 频段）、`US915`（美国 915 MHz 频段）、`AU915`（澳大利亚 915 MHz 频段）、`AS923`（亚洲 923 MHz 频段）、`IN865`（印度 865 MHz 频段）、`KR920`（韩国 920 MHz 频段）、`CN780`（中国 780 MHz 频段）和 `CN500`。

代码中的 `const LoRaWANBand_t Region = EU868;` 行设置了 LoRaWAN 通信的区域为 EU868。这意味着设备将被配置为在欧洲 868 MHz 频段运行。

对于 US915 和 AU915，定义了一个子频段变量。在本例中，该变量设置为 0。注释表明该子频段变量专门用于 US915 和 AU915 区域，尽管在此代码片段中未用于 EU868 区域。

```cpp
const LoRaWANBand_t Region = EU868;
const uint8_t subBand = 0; // 对于 US915 和 AU915
```

### 读取传感器数据并发送 LoRa 上行负载

通过 LoRa 通信读取并发送传感器数据。使用带有小数精度的字节转换可以更准确地表示上行负载中的温度和湿度值。

```cpp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    uplinkPayloadLen = 0;
    memset(uplinkPayload, sizeof(uplinkPayload), 0);

    // 将温度和湿度转换为带小数精度的字节
    uint16_t tempDecimal = (temp_hum_val[1] * 100);
    uint16_t humDecimal = (temp_hum_val[0] * 100);
    uplinkPayload[uplinkPayloadLen++] = (tempDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = tempDecimal & 0xFF;
    uplinkPayload[uplinkPayloadLen++] = (humDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = humDecimal & 0xFF;

    for (int i = 0; i < uplinkPayloadLen; i++) {
      Serial.print(uplinkPayload[i], HEX);
      Serial.print(" ");
    }
```

## 烧录固件

完整的固件包在这里：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⬇️</font></span></strong>
    </a>
</div>

请下载并烧录到 XIAO ESP32S3 上。首次使用 XIAO ESP32S3，请参考[烧录教程](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation)。

## 设置负载格式化器

负载格式化器用于将从传感器接收到的原始数据转换为人类可读的格式。在本例中，负载格式化器用于将从 DHT20 传感器接收到的原始数据转换为 JSON 格式。

格式化器类型：`Custom Javascript formatter`

```js
function decodeUplink(input) {
  var bytes = input.bytes;
  var temperatureDecimal = (bytes[0] << 8) | bytes[1];
  var humidityDecimal = (bytes[2] << 8) | bytes[3];

  var temperature = temperatureDecimal / 100;
  var humidity = humidityDecimal / 100;

  return {
    data: {
      temperature: temperature,
      humidity: humidity
    }
  };
}
```

## 监控 LoRaWAN 数据

要查看特定设备的活动，请点击中间列表中的设备。设备的主菜单提供了诸如设备概览、实时数据等选项。点击 **实时数据** 或活动框上方的链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png" style={{width:800, height:'auto'}}/></div>

## 资源

* [代码包](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>