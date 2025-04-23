---
description: SenseCAP Card Tracker T1000-E for Meshtastic 基本介绍
title: T1000-E Tracker 基本介绍
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/t1000_e_intro
sidebar_position: 1
last_update:
  date: 4/22/2025
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>

这是一款为 Meshtastic 设计的高性能追踪器，体积小巧如信用卡，轻松放入口袋或附着于资产上。它内嵌 Semtech 的 LR1110、Nordic 的 nRF52840 以及联发科 AG3335 GPS 模块，为 Meshtastic 用户提供高精度、低功耗的定位与通信解决方案。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::tip 版本对比
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::

### 产品特点

* **多协议支持**：搭载 nRF52840 与 LR1110，支持 Bluetooth 5.0、Thread、Zigbee 和 LoRa，兼容多种设备与网络。
* **强大的定位能力**：内置联发科 AG3335 GPS 芯片，提供高精度定位服务。
* **可扩展接口**：设计有 4 个弹簧针，支持 DFU 固件升级、串口日志、API 接口，简化设备管理与调试。
* **开源支持**：兼容 Meshtastic 开源网状网络协议，适用于远距离、低功耗通信场景。

### 技术规格

**通用参数**

|**网络协议**|LoRa、Bluetooth v5.1|
| :- | :- |
|**温度**|<p>范围：-20 至 60℃</p><p>精度：±1℃（最小 ±0.5℃，最大 ±1℃）</p><p>分辨率：0.1℃</p>|
|**光照**|0 到 100%（0% 为最暗，100% 为最亮）|
|**LED 与蜂鸣器**|1\*LED 和 1\*蜂鸣器用于状态指示|
|**按键**|1\*操作按键|
|**天线**|内置（GNSS/LoRa/Wi-Fi/BLE）|
|**通信距离**|2 到 5 公里（取决于天线、安装与环境）|
|**防护等级**|IP65|
|**尺寸**|85 \* 55 \* 6.5 mm|
|**设备重量**|32g|
|**工作温度**|-20℃ 到 +60℃|
|**工作湿度**|5% - 95%（无冷凝）|
|**认证**|CE / FCC|

**电池参数**

|**电池容量**|可充电锂电池，700mAh|
| :- | :- |
|**电池寿命监控**|周期性上报电量|
|<p>**充电线**</p><p>**（不含适配器）**</p>|USB 磁吸充电线，1 米|
|**电源输入电压**|4.7 至 5.5V DC|
|**充电温度限制**|0 到 +45℃|

### 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>

### 引脚说明

||||
|- |- |- |
|传感器供电|P0.4|GPIO|
|温度|P0.31|NTC（模拟）|
|光照|P0.29|LUX（模拟）|
|三轴加速度计<br/>(当前未在 Meshtastic 固件中启用)|SDA: P0.26<br/>SCL: P0.27|IIC 接口|
|加速度计供电|P1.7|GPIO|
|LED|P0.24|GPIO|
|蜂鸣器|P0.25|GPIO|
|蜂鸣器使能|P1.05|GPIO|
|按钮|P0.6|GPIO|
|传感器供电|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI 时钟<br/>P0.12: SPI NSS<br/>P1.10: LoRa 复位<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0\_DIO3\_TCXO\_电压 1.6V|SPI 接口|
|GPS|RX: P0.14<br/>TX: P0.13|串口 Serial1<br/>波特率：115200|

### 按钮操作

|按钮操作|说明|蜂鸣器反馈|
|- |- |- |
|按一下|开机|上升音调|
|按两下|更新节点/位置信息|-|
|按三下|打开/关闭 GPS|-|
|长按 5 秒|关机|下降音调|

### LED 指示

|设备状态|说明|
|- |- |
|开机|常亮后快速闪烁|
|DFU 模式|常亮|
|正常工作|随机闪烁|
