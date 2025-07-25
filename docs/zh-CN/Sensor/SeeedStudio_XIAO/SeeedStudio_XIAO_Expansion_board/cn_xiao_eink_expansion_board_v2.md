---
title: ePaper 驱动板
description: 用于 XIAO 的 eInk 扩展板是来自 Seeed Studio 的一个智能模块，设计用于在电子墨水屏上显示内容。
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/titleimg.webp
slug: /cn/xiao_eink_expansion_board_v2
last_update:
  date: 05/15/2025
  author: Allen
keywords:
  - XIAO
  - 电子墨水屏
  - eInk
---

# ePaper 驱动板快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/headimage.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

ePaper 驱动板配备了一个 24 针 FPC 连接器、内置充电 IC，用于高效且安全的电池充电，以及一个 JST 2 针 BAT 连接器，便于电池连接。非常适合创建支持 WiFi 的数字相框。

:::note
此扩展板不包含电子墨水屏；屏幕需单独购买。
:::

## 简介

### 特性

- **内置充电 IC**：确保高效且安全的电池充电。
- **带开关的 BAT 连接器**：便于电池连接，并包括一个开关，可将电池和开关结合使用以实现更高效的节能。
- **24 针 FPC 连接器**：为各种外设提供多功能连接选项。
- **扩展 IO 端口**：支持连接额外的传感器，例如温湿度传感器，以增强功能。
- **兼容 Seeed Studio XIAO 生态系统**：与 XIAO 系列（预焊接版本）无缝集成，用于多样化的项目开发。

### 应用场景

- **智能家居仪表盘**：显示实时信息，例如天气更新、日历事件以及来自各种智能家居设备的通知。
- **能源监控**：显示来自智能电表的能耗数据，帮助用户更高效地跟踪和管理能源使用。
- **安全警报**：显示安全事件的警报和通知，例如运动检测或门窗传感器激活。
- **智能恒温器显示**：显示温湿度水平，以及智能恒温器的控制设置。
- **数字相框**：创建一个支持 WiFi 的数字相框，可以显示来自智能家居网络的图像。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/overview.png" style={{width:700, height:'auto'}}/></div>

1. 24 针 FPC 连接器：用于电子墨水屏接口。
2. JST BAT 连接器：用于电池连接和开关。
3. XIAO 插槽：用于连接 Seeed Studio XIAO 开发板。
4. IO 引出：用于连接 Grove 传感器或其他控制器，例如 Arduino UNO 或 Raspberry Pi。
5. 电源开关：用于电池电源控制。

### 引脚定义

<div class="table-center">

|  ePaper SPI 引脚 |  XIAO  | 
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D2   |
|      SCK       |   D8   |
|      MOSI      |   D10  |
|      3V3       |   3V3   |
|      GND      |   GND  |

</div>

### 支持的电子墨水屏

1. [1.54 英寸电子墨水屏 - 点阵 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13 英寸电子墨水屏 - 柔性单色 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13 英寸电子墨水屏 - 四色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9 英寸电子墨水屏 - 单色 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9 英寸电子墨水屏 - 四色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2 英寸电子墨水屏 - 单色 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [4.26 英寸电子墨水屏 - 单色 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
8. [5.65 英寸电子墨水屏 - 七色 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [5.83 英寸电子墨水屏 - 单色 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [7.5 英寸电子墨水屏 - 单色 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
11. [7.5 英寸电子墨水屏 - 三色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

## 快速入门

要使用 **XIAO eInk 扩展板**，我们需要对 XIAO 系列进行编程。以下是不同尺寸电子墨水屏与 XIAO 的支持情况表：

<div class="table-center">

|      电子墨水屏 / XIAO     | XIAO SAMD21 | XIAO RP2040|  XIAO nRF52840 | XIAO ESP32-C3 | XIAO ESP32-S3 |
|       ---      |  ---  | --- | --- | --- | --- |
|1.54 英寸电子墨水屏 - 点阵 200x200           | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.13 英寸电子墨水屏 - 柔性单色 212x104       | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.13 英寸电子墨水屏 - 四色 212x104           | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.9 英寸电子墨水屏 - 单色 128x296            | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.9 英寸电子墨水屏 - 四色 128x296            | ✅ | ✅ | ✅ | ✅ | ✅ |
|4.2 英寸电子墨水屏 - 单色 400x300            | ✅ | ✅ | ✅ | ✅ | ✅ |
|4.26 英寸电子墨水屏 - 单色 800x480           | RAM 溢出 | ✅ | ✅ | ✅ | ✅ |
|5.65 英寸电子墨水屏 - 七色 600x480           | FLASH 溢出 | ✅ | ✅ | ✅ | ✅ |
|5.83 英寸电子墨水屏 - 单色 648x480           | ✅ | ✅ | ✅ | ✅ | ✅ |
|7.5 英寸电子墨水屏 - 单色 800x480            | RAM 溢出 | ✅ | ✅ | ✅ | ✅ |
|7.5 英寸电子墨水屏 - 三色 800x480            | RAM 溢出 | ✅ | ✅ | ✅ | ✅ |

</div>

### 硬件准备

**步骤 1.** 材料准备

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

**步骤 2.** 将 XIAO 插入 XIAO 插座：对齐引脚并轻轻将 XIAO 插入板上的 XIAO 插座。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 将电子墨水屏插入 FPC 连接器：小心地将电子墨水屏滑入电子墨水屏扩展板上的 24 针 FPC 连接器。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### 软件准备

推荐的编程工具是 Arduino IDE，您需要为 XIAO 配置 Arduino 环境并添加板载包。
:::tip
如果您是第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE。

- 如果您想使用 **Seeed Studio XIAO SAMD21** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO RP2040** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO nRF52840** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32C3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您想使用 **Seeed Studio XIAO ESP32S3** 进行后续操作，请参考 **[此教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

## 使用 Seeed_Arduino_LCD 库

**步骤 3.** 安装 Seeed Arduino LCD 库

:::tip
此库具有与 TFT 库相同的功能，但与 TFT 库不兼容。如果您已安装 TFT 库，请先卸载它。
:::

从 GitHub 下载并安装 Seeed Arduino LCD 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

下载库后，进入 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

有 4 个基础示例，打开你喜欢的基础示例：
1. Bitmap: 显示位图图像。
2. Clock: 显示时钟。
3. Clock_digital: 显示数字时钟。
4. HelloWorld: 在电子墨水屏上显示不同大小的基本图案和文本。
5. Shape: 随机显示不同大小的文字和形状。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/150.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 上传代码

在上传代码之前，需要打开 Seeed_Arduino_LCD 库中的 **User_Setup_Select.h** 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/53.png" style={{width:800, height:'auto'}}/></div>

由于此示例使用的是 2.9 英寸电子墨水屏，我们需要注释掉文件中第 160 行的 `#include <User_Setups/Setup666_XIAO_ILI9341.h>`，并取消注释第 165 行的 `#include <User_Setups/Setup504_Seeed_XIAO_EPaper_2inch9.h>`。如果你使用其他电子墨水屏，请按照此方法进行修改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/151.png" style={{width:1000, height:'auto'}}/></div>

之后，进入 **Tools** -> **Board** -> **XIAO ESP32C6** 和 **Tools** -> **Port** -> **选择你的板子连接的端口**。然后点击 **Upload** 上传代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/152.png" style={{width:1000, height:'auto'}}/></div>

现在你将在电子墨水屏上看到反馈！以下是 HelloWorld 示例的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>


:::caution
如果你使用的是 1.54 英寸或 2.9 英寸电子墨水屏，由于它们的驱动芯片，在使用动态效果（如时钟）时可能会出现闪烁现象。请放心，这不是程序问题。然而，不建议长时间运行动态效果示例，以避免缩短屏幕的使用寿命。

如果你使用的是 5.83 英寸和 7.5 英寸屏幕，它们有不同的芯片，因此不会出现闪烁现象。
:::

## 图像提取软件

### 推荐网站的使用方法

这里我使用 7.5 英寸电子墨水屏进行测试。

#### 如何制作图片

这个 [URL](https://jlamch.net/MXChipWelcome/) 提供了非常方便的图像提取操作，可以轻松帮助我们在电子墨水屏上显示各种图片，让我们开始吧！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**步骤 1**.选择图片

首先选择你想要的图片，尽量不要超过 800*480 的尺寸。

**步骤 2**.图片设置

- 画布尺寸
    - 画布尺寸：设置画布的尺寸。例如，800 x 480 像素表示画布宽度为 800 像素，高度为 480 像素。

- 背景颜色
    - 背景颜色：选择画布的背景颜色。选项包括：

    - 白色：白色背景
    - 黑色：黑色背景

- 透明：透明背景
    - 反转图像颜色
    - 反转图像颜色：此选项用于反转图像的颜色。选中后，图像的颜色将被反转。

- 亮度 / Alpha 阈值
    - 亮度 / Alpha 阈值：设置像素的亮度值，范围为 0 到 255。值越高像素越亮；低于此值的像素将变黑。

- 缩放
    - 缩放：选择图像的缩放方式。选项包括：

- 原始尺寸：保持原始尺寸
    - 其他缩放选项（具体选项可能需要进一步解释）
- 居中
    - 居中：选择是否将图像居中于画布上。注意：此选项仅在图像大于原始尺寸时有效。

**步骤 3**.预览

设置完成后，你可以在这里看到图片的预览效果。

**步骤 4**.输出

- 复制转换后的代码
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- 替换此头文件中的图片代码
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>



#### 显示效果
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>


### 使用 Image2lcd 软件

#### 如何制作图片

使用 Windows 内置的 **画图** 软件创建与屏幕分辨率 **相同** 的图片，并保存为 `BMP` 或 `JPG` 文件；

:::note
你的图片分辨率必须与所使用的屏幕分辨率相同，例如，4.2 英寸电子墨水屏的分辨率为 400 x 300 像素，那么你不能使用 300 x 400 的尺寸，否则会导致 image2lcd 输出的 `.h` 文件多出 200 字节。
:::

图片的颜色应与 Windows 自带画图板的标准颜色一致。画图板的颜色如下：

<div class="table-center">

|      电子墨水屏      | 颜色 |
|       ---      |  ---   |
|1.54 英寸电子墨水屏 - 点阵 200x200           | 纯黑白          |
|2.13 英寸电子墨水屏 - 柔性单色 212x104       | 纯黑白          |
|2.13 英寸电子墨水屏 - 四色 212x104           | 黑、白、红和黄 |
|2.9 英寸电子墨水屏 - 单色 128x296            | 纯黑白          |
|2.9 英寸电子墨水屏 - 四色 128x296            | 黑、白、红和黄 |
|4.2 英寸电子墨水屏 - 单色 400x300            | 纯黑白          |
|4.26 英寸电子墨水屏 - 单色 800x480           | 纯黑白          |
|5.65 英寸电子墨水屏 - 七色 600x480           | 黑、白、红、黄、蓝、绿、橙 |
|5.83 英寸电子墨水屏 - 单色 648x480           | 纯黑白          |
|7.5 英寸电子墨水屏 - 单色 800x480            | 纯黑白          |
|7.5 英寸电子墨水屏 - 三色 800x480            | 纯黑白          |

</div>

#### 位图转换

**步骤 1.** 打开 [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z)，解压并运行该应用程序。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 打开图片，选择“输出文件类型”为“C 数组 (*.c)”，选择“扫描模式”为“水平扫描”，其他参数设置如下：

<div class="table-center">
  <table align="center">
    <tr>
        <th>电子墨水屏</th>
        <th>位像素</th>
        <th>最大宽度和高度</th>
        <th>反转颜色</th>
        <th>显示模式</th>    
    </tr>
    <tr>
        <th>1.54 英寸电子墨水屏 - 点阵 200x200</th>
        <td align="center">单色</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">左右镜像</td>
    </tr>
    <tr>
        <th>2.13 英寸电子墨水屏 - 柔性单色 212x104</th>
        <td align="center">单色</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">正常</td>
    </tr>
    <tr>
        <th>2.13 英寸电子墨水屏 - 四灰阶 212x104</th>
        <td align="center">4 灰阶</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">正常</td>     
    </tr>
    <tr>
        <th>2.9 英寸电子墨水屏 - 单色 128x296</th>
         <td align="center">单色</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">正常</td>   
    </tr>
    <tr>
        <th>2.9 英寸电子墨水屏 - 四灰阶 128x296</th>
        <td align="center">4 灰阶</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">正常</td>       
    </tr>
    <tr>
        <th>4.2 英寸电子墨水屏 - 单色 400x300</th>
        <td align="center">单色</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">左右镜像</td>        
    </tr>
    <tr>
        <th>4.26 英寸电子墨水屏 - 单色 800x480</th>
        <td align="center">单色</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">左右镜像</td>        
    </tr>
    <tr>
        <th>5.65 英寸电子墨水屏 - 七色 600x480</th>
        <td align="center">256 色</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">正常</td>        
    </tr>
    <tr>
        <th>5.83 英寸电子墨水屏 - 单色 648x480</th>
        <td align="center">单色</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">左右镜像</td>        
    </tr>
    <tr>
        <th>7.5 英寸电子墨水屏 - 单色 800x480</th>
        <td align="center">单色</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">左右镜像</td>     
    </tr>
    <tr>
        <th>7.5 英寸电子墨水屏 - 三色 800x480</th>
        <td align="center">单色</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">正常</td>     
    </tr>
  </table>
</div>

:::tip
- 设置最大宽度和高度后，需要点击箭头确认。
- 不要包含头部数据。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**步骤 3.** 点击“保存”将 LCD 输出数组保存为 `.h` 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## 资源

- **[PDF]**: [ePaper_Breakout_Board_for_XIAO_V2_PCBA.pdf](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Breakout_Board_for_XIAO_V2_PCBA.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>