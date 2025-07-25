---
description: 使用 SenseCAP Card Tracker T1000-E 和 SES 开始 LoRaWAN 开发
title: 使用 SES 入门
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/LoRaWAN_Tracker/lorawan_opensource.webp
slug: /cn/open_source_lorawan
last_update:
  date: 05/15/2025
  author: Jessie
sidebar_position: 2
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 准备工作

### 硬件准备

* SenseCAP T1000-E x 1
* USB 数据线 x 1
* 电脑 x 1

### 软件准备

在开始开发之前，需要准备以下软件工具。

#### SEGGER Embedded Studio (SES)

SES 是一个集成解决方案，用于管理、构建、测试和部署嵌入式应用程序。这意味着通过其广泛的功能可以实现流畅、高效的开发操作。强大的项目管理器能够管理大小项目。版本控制功能支持自动应用程序部署。

根据您的操作系统下载相应的安装包。

<a href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-下载</span></a>

:::tip
建议使用 5.68 版本。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### nRF5 SDK

nRF5 SDK 为 nRF5 系列设备提供了丰富的开发环境，包括大量的驱动程序、库、外设示例、SoftDevices 和专有无线电协议。

<a href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-下载</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Seeed T1000-E 示例包

Seeed 提供了一个示例项目，帮助开发者更快入门。该示例包括 LoRaWAN 通信、定位信息获取、板载传感器数据采集等功能。

<a href="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Seeed_T1000_E_Dev_Board_Alpha-main.zip" target="_blank"><span>Seeed 示例-下载</span></a>

**将 Seeed 示例文件添加到 nRF5 SDK**

将 `Seeed T1000-E 示例文件` 复制到 nRF5 SDK 的以下路径：
`.../nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/file-path.png" alt="pir" width={600} height="auto" /></p>

### 检查 Bootloader 信息

在开始之前，请先检查 Bootloader 信息。

* **步骤 1:** 进入 DFU 模式

将 USB 数据线连接到您的电脑，按住设备按钮，然后连接充电线，此时应该会显示一个名为 `T1000-E` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

* **步骤 2:** 检查 INFO_UF2.TXT

正确的 Bootloader 信息如图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/bootloader-info.png" alt="pir" width={600} height="auto" /></p>

### 运行 LoRaWAN 示例项目

**导入示例项目**

这里以 `08_ses_lorawan_gnss` 项目为例。
打开 SES 并打开示例项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

**修改 LoRaWAN 参数**

在 `lorawan_key_config.h` 文件中定义 REGION/DEVICE_EUI/JOIN_EUI/APP_KEY。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={800} height="auto" /></p>

**构建修改后的项目**

在项目资源管理器中选择所需的项目。<br/>
选择 `Build` > `Build` 或按 `F7`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/build-done.png" alt="pir" width={800} height="auto" /></p>

#### 转换为 UF2 文件

构建成功后，输出文件夹中会生成一个 `.hex` 文件。我们在 `Firmware` 文件夹中包含了一个 Python 脚本 `uf2conv.py`，用于将 hex 文件转换为 uf2 文件。

导航到文件路径并运行脚本：

```py
python uf2conv.py filename.hex -c -f 0xADA52840 -o filename.uf2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/convert-uf2.png" alt="pir" width={600} height="auto" /></p>

#### 烧录应用固件

* **步骤 1:** 进入 DFU 模式

将 USB 数据线连接到您的电脑，按住设备按钮，然后连接充电线，此时应该会显示一个名为 `T1000-E` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

* **步骤 2:** 烧录 LoRaWAN 应用固件

将 `UF2` 文件复制到 DFU 驱动器。固件应在文件下载完成后自动烧录，并且设备会重新启动。

### 连接到 LNS

在本节中，我们将设备连接到 LNS（这里以 TTN 为例）以查看数据，并通过 TTN Mapper 检查位置。

首先，注册一个 The Things Industries 或 The Things Network 的账户。

#### 步骤 1: 创建应用程序

导航到 Applications 页面，点击 "+Create application"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

输入一个 Application ID，点击 Create Application 保存更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### 步骤 2: 注册设备

点击 "Register end device"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

设置以下参数：

**频率计划**: 为目标区域选择适当的频率计划

**LoRaWAN 版本**: LoRaWAN 规范 1.0.4

**区域参数版本**: PR002 区域参数 V1.0.3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip 
JoinEUI/DevEUI/APPEUI: 这些值是在之前设置中定义于 `lorawan_key_config.h` 文件中的。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={600} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

**检查实时数据**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/payload-data.png" alt="pir" width={800} height="auto" /></p>

### 恢复出厂固件

* 使用出厂固件，刷写 `t1000_e_dev_kit_11_lorawan_tracker.uf2` 固件。
* 使用 SenseCAP 云平台时，需要通过扫描设备标签上的二维码导入 SenseCAP 密钥。