---
description: 使用 Arduino 开发 SenseCAP Indicator 双芯片
title: 使用 Arduino 开发双芯片
keywords:
  - SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.webp
slug: /cn/SenseCAP_Indicator_ESP32_Arduino
last_update:
  date: 05/15/2025
  author: Hendra, LongDirtyAnimAlf
craft: true
---

# 使用 Arduino 开发 SenseCAP Indicator 双芯片

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- :::danger
运行本教程时可能会遇到一些问题。我们正在寻找能够帮助我们改进此固件的人，详情请参阅我们的 [Contributor Program](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=70900433)。
::: -->


SenseCAP Indicator 是一款 4 英寸触摸屏设备，由 ESP32 和 RP2040 双 MCU 驱动。ESP32 和 RP2040 都是功能强大的微控制器，提供了一系列功能和特性。

本教程将指导您使用 Arduino 框架的简单性和灵活性，为 SenseCAP Indicator 开发自己的定制项目/固件。

## 硬件准备

这里使用 SenseCAP Indicator 作为硬件，并且设备上有四种传感器（CO2、温度、湿度、TVOC）。内容包括：

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP Indicator D1S</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:'auto', height:200}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1S-p-5645.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 硬件概述与开发知识

Indicator 设计为双 MCU，其中 RP2040 和 ESP32S3 同时工作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

根据上图我们可以知道：

1. 所有传感器通过 I2C 协议连接到 RP2040 微控制器。
2. 使用 PCA9535 IC 的 I2C IO 扩展模块。
3. 屏幕通过 2 个引脚（CS、RESET）连接到 PCA9535 I2C 扩展器，并连接到 ESP32S3 微控制器。
4. RP2040 通过 ESP32S3 的引脚 20 和引脚 19 使用 UART 接口连接。

因此，如果将 SenseCAP Indicator 插入计算机，您将看到两个串口，一个用于 RP2040，另一个用于 ESP32S3。标有 **USB-SERIAL CH340** 的串口是连接到 ESP32S3 的串口，本教程将使用该串口。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/1.jpg"/></div>

## 软件准备

我们这里使用 Arduino。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

:::note
在继续本教程之前，请确保在 Arduino IDE 中完成以下步骤：

1. **ESP32 板定义**：确保 ESP32 板定义已安装并更新到最新版本。如果 Arduino IDE 中尚未安装 ESP32 板定义，可以按照 [此指南](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html) 进行操作。
2. **板选择**：选择 **ESP32S3 Dev Module** 作为板定义。
3. **PSRAM**：在 Arduino IDE 中启用 OPI PSRAM 功能，以确保屏幕正常工作。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/2.jpg"/></div>

:::

### 使用的开发板

为了确保项目兼容性，请使用以下版本的开发板：

- **ESP32**：版本 3.1.2
- **Raspberry Pi Pico Arduino**：版本 4.4.3

### 使用的库

TouchLib：版本 0.0.2

为了集成触摸驱动并统一触摸接口，需要使用 TouchLib 库。该库在 Arduino IDE 的库管理器中不可用。您可以从 [TouchLib GitHub 仓库](https://github.com/mmMicky/TouchLib) 手动下载，然后通过 Arduino IDE 的 Sketch > Include Library > Add .ZIP Library 添加到 IDE 中。

下载库后，打开 Arduino IDE，进入 Sketch 菜单，选择 "Add .ZIP Library"，然后将下载的库添加到 IDE 中。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"/></div>

同样，为了顺利集成，您需要检查相同的 Sketch 菜单并选择 "Manage Libraries"，然后搜索所需的库（例如 "PCA9535"，选择由 hidea kitai 制作的库）并安装，同时确保以下库的版本：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"/></div>

- **Adafruit TinyUSB**：版本 3.4.2
- **Anitracks_PCA95x5**：版本 0.1.3
- **GFX Library for Arduino**：版本 1.5.3
- **PacketSerial**：版本 1.4.0
- **lvgl**：版本 9.2.2
- **PCA95x5**：版本 0.1.3

确保这些库和开发板已安装在 Arduino IDE 中，以避免兼容性问题。

## 入门

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="LongDirtyAnimAlf" label="新教程（由 LongDirtyAnimAlf 提供）" default>

安装所有必要的库后，上传以下代码以测试屏幕是否可以在 Arduino 环境中正常工作。您可以上传以下代码：

```cpp
#include <Arduino_GFX_Library.h>
#include <PCA95x5.h>
#define GFX_BL DF_GFX_BL // 默认背光引脚，您可以将 DF_GFX_BL 替换为实际的背光引脚

/* 更多开发设备声明: https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */
#if defined(DISPLAY_DEV_KIT)
Arduino_GFX *gfx = create_default_Arduino_GFX();
#else /* !defined(DISPLAY_DEV_KIT) */

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define GFX_BL 45
Arduino_DataBus *bus = new Arduino_SWSPI(
    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,
    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);

// 选项 1:
// 取消注释以使用 4" 矩形显示屏
Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    480 /* width */, 480 /* height */, rgbpanel, 2 /* rotation */, true /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));

#endif /* !defined(DISPLAY_DEV_KIT) */
/*******************************************************************************
 * Arduino_GFX 设置结束
 ******************************************************************************/

void setup(void)
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("Arduino_GFX Hello World 示例");

#ifdef GFX_EXTRA_PRE_INIT
  GFX_EXTRA_PRE_INIT();
#endif

  // 初始化显示屏
  if (!gfx->begin())
  {
    Serial.println("gfx->begin() 失败！");
  }
  gfx->fillScreen(BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif

  gfx->setCursor(10, 10);
  gfx->setTextColor(RED);
  gfx->println("Sensecap Indicator");

  delay(5000); // 5 秒
}

void loop()
{
  gfx->setCursor(random(gfx->width()), random(gfx->height()));
  gfx->setTextColor(random(0xffff), random(0xffff));
  gfx->setTextSize(random(6) /* x 缩放 */, random(6) /* y 缩放 */, random(2) /* 像素间距 */);
  gfx->println("Sensecap Indicator");

  delay(1000); // 1 秒
}
```

如果一切正常，屏幕上将随机打印出 "Sensecap Indicator" 文本。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"/></div>

### 使用 SenseCap Indicator 创建简单的 GUI 应用程序

SenseCap Indicator 配备了强大的 ESP32-S3 微控制器和高分辨率 480x480 显示屏，非常适合创建图形用户界面。现在，我们将继续使用 SenseCap Indicator 开发，通过 LVGL 探索如何创建交互式 GUI 应用程序。您可以从以下仓库下载完整的项目，包括源代码和头文件：
[下载 SenseCap Indicator LVGL 项目](https://github.com/LongDirtyAnimAlf/SenseCap)

下载并解压项目文件后，上传以下代码以创建一个基本的多屏 GUI 应用程序：

```cpp
/* 使用 LVGL 和 Arduino 需要一些额外步骤：
 * 请务必阅读文档：https://docs.lvgl.io/master/get-started/platforms/arduino.html
 安装：lvgl */

// 当使用旧版 ESP32-IDF 时，有时会缺少此定义
//#define ESP_INTR_CPU_AFFINITY_AUTO 0

#include <Arduino.h>
#include <lvgl.h>
#include <Arduino_GFX_Library.h>
#include <PacketSerial.h>
#include "Indicator_Extender.h"
#include "Indicator_SWSPI.h"
#include "ui.h"
#include "touch.h"

#define HOR_RES 480
#define VER_RES 480

#define PACKET_UART_RXD 20
#define PACKET_UART_TXD 19

#define BUTTON_PIN 38

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define RGB_PANEL
#define GFX_BL 45
Arduino_DataBus *bus = new Indicator_SWSPI(
    GFX_NOT_DEFINED /* DC */, EXPANDER_IO_LCD_CS /* CS */,
    SPI_SCLK /* SCK */, SPI_MOSI /* MOSI */, GFX_NOT_DEFINED /* MISO */);

Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    HOR_RES /* width */, VER_RES /* height */, rgbpanel, 0 /* rotation */, false /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_indicator_init_operations, sizeof(st7701_indicator_init_operations));


COBSPacketSerial myPacketSerial;

void onPacketReceived(const uint8_t* buffer, size_t size);

uint32_t millis_cb(void)
{
  return millis();
}

/* 读取触摸板 */
void my_touchpad_read(lv_indev_t *indev, lv_indev_data_t *data)
{
  if (touch_has_signal())
  {
    if (touch_touched())
    {
      data->state = LV_INDEV_STATE_PRESSED;

      /* 设置坐标 */
      data->point.x = touch_last_x;
      data->point.y = touch_last_y;
    }
    else if (touch_released())
    {
      data->state = LV_INDEV_STATE_RELEASED;
    }
  }
  else
  {
    data->state = LV_INDEV_STATE_RELEASED;
  }
}

// 主按钮事件处理程序
static void event_handler(lv_event_t * e)
{
  lv_event_code_t code = lv_event_get_code(e);
  lv_obj_t * btn = lv_event_get_current_target_obj(e);

  if (btn != NULL)
  {
    if(code == LV_EVENT_CLICKED)
    {
      void * btn_no_void = (void*)lv_event_get_user_data(e);
      byte btn_no = (byte)((uintptr_t)btn_no_void);
      lv_obj_t * screen = lv_obj_get_screen(btn);
      if (screen != NULL)
      {
        Serial.println("屏幕已分配");
        if (screen == screen2)
        {
          Serial.println("屏幕 2");
          if (btn_no != 0)
          {
            Create_Screen3(event_handler);
            lv_screen_load(screen3);
          }
        }
        if (screen == screen3)
        {
          Serial.println("屏幕 3");
          if (btn_no == 0)
          {
            lv_screen_load(screen2);
            lv_obj_delete(screen3);
          }
        }
      }
    }
  }
}

void setup()
{
  Serial.begin(115200);
  Serial.println("SenseCap Indicator 启动");
  String LVGL_Arduino = String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  pinMode(BUTTON_PIN, INPUT);

  // 初始化 Indicator 硬件
  extender_init();

  myPacketSerial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, PACKET_UART_RXD, PACKET_UART_TXD);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);

  // 初始化显示屏
  if (!gfx->begin(12000000L))
  {
    Serial.println("gfx->begin() 失败！");
    Serial.println("可能会出现严重错误 !!!");    
  }
  gfx->fillScreen(RGB565_BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif
  lv_init();

  /* 设置一个时间源，以便 LVGL 知道经过了多少时间 */
  lv_tick_set_cb(millis_cb);

  /* 注册打印函数用于调试 */
#if LV_USE_LOG != 0
  lv_log_register_print_cb(my_print);
#endif

  lv_screen_init(gfx, HOR_RES, VER_RES);
  //lv_display_set_rotation(disp, LV_DISPLAY_ROTATION_0);
  //lv_display_set_antialiasing(disp,false);

  // 初始化触摸设备
  touch_init(HOR_RES, VER_RES, 0); // 旋转将由 LVGL 处理
  /* 初始化输入设备驱动 */
  lv_indev_t *indev = lv_indev_create();
  lv_indev_set_type(indev, LV_INDEV_TYPE_POINTER); /* 触摸板应为 POINTER 类型 */
  lv_indev_set_read_cb(indev, my_touchpad_read);

  Screen2Create(event_handler);

  lv_screen_load(screen2);

  Serial.println("设置完成");
}

void loop()
{
  static TickType_t xLastWakeTime = xTaskGetTickCount();
  
  /*
  unsigned long startTime = millis();
  while (digitalRead(BUTTON_PIN) == LOW)
  {
    if (millis() - startTime >= 10000)
    {
      ESP.restart();
      //esp_restart();
    }
  }
  */

  myPacketSerial.update();
  // 检查接收缓冲区溢出（可选）
  if (myPacketSerial.overflow())
  {
    // 通过引脚发送警报（例如，制作一个溢出 LED）或向发送方返回用户定义的包。
  }

  lv_task_handler(); /* 让 GUI 执行其工作 */

  // 简单延迟始终为 5ms
  //delay(5);

  // 此延迟将根据上述任务消耗的时间进行调整
  // 如果这些任务消耗时间，它将延迟更短
  vTaskDelayUntil( &xLastWakeTime, ( 5 / portTICK_PERIOD_MS ) );
}

void onPacketReceived(const uint8_t* buffer, size_t size)
{
  if (size < 1) {
    return;
  }

  byte index = 0;
  byte Command = buffer[index++];
  if (Command == 0x55)
  {
    long Temperature = 0;
    long Humidity = 0; 

    memcpy(&Temperature, &buffer[index], sizeof(Temperature));
    index += sizeof(Temperature);
    memcpy(&Humidity, &buffer[index], sizeof(Humidity));
    index += sizeof(Humidity);

    Screen2AddData(Temperature,Humidity);
  }
}
```

上传代码后，打开串口监视器并将波特率设置为 115200。您应该会看到初始化消息，并且 GUI 将显示在屏幕上，显示 Screen2 以及通过 UART 连接接收到的任何温度和湿度数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/12.gif"/></div>

### 带有多屏幕和数据可视化的高级 GUI 应用程序

第二个示例在基础应用程序的基础上增加了更复杂的功能，包括电池监控、动态数据可视化和颜色编码的状态指示器。您可以从以下仓库下载完整的项目，包括源代码和头文件：
[下载 SenseCap Indicator LVGL 项目](https://github.com/LongDirtyAnimAlf/SenseCap)

要实现此版本，请上传以下代码：

```cpp
/* 使用 Arduino 的 LVGL 需要一些额外步骤：
 * 请务必阅读文档：https://docs.lvgl.io/master/get-started/platforms/arduino.html
 安装：lvgl */

// 当使用旧版 ESP32-IDF 时，有时会缺少此定义
//#define ESP_INTR_CPU_AFFINITY_AUTO 0

#include <Arduino.h>
#include <lvgl.h>
#include <Arduino_GFX_Library.h>
#include <PacketSerial.h>
#include "Indicator_Extender.h"
#include "Indicator_SWSPI.h"
#include "ui.h"
#include "touch.h"
#include "shared.h"

#define HOR_RES 480
#define VER_RES 480

#define PACKET_UART_RXD 20
#define PACKET_UART_TXD 19

#define BUTTON_PIN 38

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define RGB_PANEL
#define GFX_BL 45
Arduino_DataBus *bus = new Indicator_SWSPI(
    GFX_NOT_DEFINED /* DC */, EXPANDER_IO_LCD_CS /* CS */,
    SPI_SCLK /* SCK */, SPI_MOSI /* MOSI */, GFX_NOT_DEFINED /* MISO */);

Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    HOR_RES /* width */, VER_RES /* height */, rgbpanel, 0 /* rotation */, false /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_indicator_init_operations, sizeof(st7701_indicator_init_operations));

TBatteryBoard BatteryBoards[DAUGHTERBOARDCOUNT] = {0};

COBSPacketSerial myPacketSerial;
//PacketSerial_<COBS, 0, 1024> myPacketSerial;

void onPacketReceived(const uint8_t* buffer, size_t size);

#if LV_USE_LOG != 0
void my_print(lv_log_level_t level, const char *buf)
{
  LV_UNUSED(level);
  Serial.println(buf);
  Serial.flush();
}
#endif

uint32_t millis_cb(void)
{
  return millis();
}

/* 读取触摸板 */
void my_touchpad_read(lv_indev_t *indev, lv_indev_data_t *data)
{
  if (touch_has_signal())
  {
    if (touch_touched())
    {
      data->state = LV_INDEV_STATE_PRESSED;

      /* 设置坐标 */
      data->point.x = touch_last_x;
      data->point.y = touch_last_y;
    }
    else if (touch_released())
    {
      data->state = LV_INDEV_STATE_RELEASED;
    }
  }
  else
  {
    data->state = LV_INDEV_STATE_RELEASED;
  }
}

static void event_handler(lv_event_t * e)
{
  lv_event_code_t code = lv_event_get_code(e);
  lv_obj_t * btn = lv_event_get_current_target_obj(e);

  if (btn != NULL)
  {
    if(code == LV_EVENT_CLICKED)
    {
      void * btn_no_void = (void*)lv_event_get_user_data(e);
      byte btn_no = (byte)((uintptr_t)btn_no_void);
      lv_obj_t * screen = lv_obj_get_screen(btn);
      if (screen != NULL)
      {
        Serial.println("已分配屏幕");

        if (screen == screen1)
        {
          Serial.println("屏幕 1");
          Screen2SetActive(btn_no);
          lv_screen_load(screen2);
          //Screen2SetActive(5);
        }
        if (screen == screen2)
        {
          Serial.println("屏幕 2");
          if (btn_no == 0)
          {
            lv_screen_load(screen1);
          }
          else
          {
            Create_Screen3(event_handler);
            lv_screen_load(screen3);
          }
        }
        if (screen == screen3)
        {
          Serial.println("屏幕 3");
          if (btn_no == 0)
          {
            lv_screen_load(screen2);
            lv_obj_delete(screen3);
          }
        }
      }
    }
  }
}

void setup()
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("SenseCap Indicator 启动");
  String LVGL_Arduino = String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  pinMode(BUTTON_PIN, INPUT);

  // 初始化 Indicator 硬件
  extender_init();

  myPacketSerial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, PACKET_UART_RXD, PACKET_UART_TXD);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);

  // 初始化显示屏
  if (!gfx->begin(12000000L))
  {
    Serial.println("gfx->begin() 失败！");
    Serial.println("可能会出现严重错误 !!!");    
  }
  gfx->fillScreen(RGB565_BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif
  lv_init();

  /* 设置一个时间源，以便 LVGL 知道经过了多少时间。 */
  lv_tick_set_cb(millis_cb);

  /* 注册打印函数用于调试 */
#if LV_USE_LOG != 0
  lv_log_register_print_cb(my_print);
#endif

  lv_screen_init(gfx, HOR_RES, VER_RES);
  //lv_display_set_rotation(disp, LV_DISPLAY_ROTATION_0);
  //lv_display_set_antialiasing(disp,false);

  // 初始化触摸设备
  touch_init(HOR_RES, VER_RES, 0); // 旋转将由 lvgl 处理
  /* 初始化输入设备驱动 */
  lv_indev_t *indev = lv_indev_create();
  lv_indev_set_type(indev, LV_INDEV_TYPE_POINTER); /* 触摸板应为 POINTER 类型 */
  lv_indev_set_read_cb(indev, my_touchpad_read);

  Create_Screen1(event_handler);

  Screen2Create(event_handler);
  Screen2InitData();  

  lv_screen_load(screen1);

  Serial.println("设置完成");
}

void loop()
{
  static TickType_t xLastWakeTime = xTaskGetTickCount();
  
  /*
  unsigned long startTime = millis();
  while (digitalRead(BUTTON_PIN) == LOW)
  {
    if (millis() - startTime >= 10000)
    {
      ESP.restart();
      //esp_restart();
    }
  }
  */

  myPacketSerial.update();
  // 检查接收缓冲区溢出（可选）。
  if (myPacketSerial.overflow())
  {
    // 通过引脚发送警报（例如，点亮溢出 LED）或向发送方返回用户定义的数据包。
  }

  lv_task_handler(); /* 让 GUI 执行其工作 */

  // 简单延迟始终为 5ms
  //delay(5);

  // 此延迟将适应上述任务消耗的时间
  // 如果这些任务消耗时间，将缩短延迟
  vTaskDelayUntil( &xLastWakeTime, ( 5 / portTICK_PERIOD_MS ) );
}

void onPacketReceived(const uint8_t* buffer, size_t size)
{
#ifndef YOLO
  Serial.printf("<--- 接收长度:%d, 数据: ", size);
  for (int i = 0; i < size; i++) {
    Serial.printf("0x%x ", buffer[i]);
  }
  Serial.println("");
#endif


  if (size < 1) {
    return;
  }

  byte index = 0;

  TCommands Command = (TCommands)buffer[index++];

  if ((Command == CMD_get_data) || (Command == CMD_set_value))
  {
    byte BatteryNumber = buffer[index++];

    if (Command == CMD_get_data)
    {
      dword tempcalc;
      word Volt = 0;
      word Amps = 0; 

      memcpy(&Volt, &buffer[index], 2);
      index += 2;
      memcpy(&Amps, &buffer[index], 2);
      index += 2;

      Screen2AddData((BatteryNumber+1),Volt,Amps);

      // 将数据放在屏幕 1 上
      tempcalc = Volt * 3300u;
      tempcalc /= (dword)((1u << BITS)-1u);
      SetVoltageScreen1mV(BatteryNumber,(word)tempcalc);

      tempcalc = Amps * 6000u;
      tempcalc /= (dword)((1u << BITS)-1u);
      SetCurrentScreen1mA(BatteryNumber,(word)tempcalc);
    }

    if (Command == CMD_set_value)
    {
      lv_color_t c = LV_COLOR_MAKE(0,0,0);  
      TBatteryStatus Status = (TBatteryStatus)buffer[index++];
      switch (Status)
      {
        case BSCurrent:
        case BSPower:
        case BSResistor:
        {
          c = lv_palette_main(LV_PALETTE_DEEP_ORANGE);
          break;
        }
        case BSCharge:
        case BSVoltage:
        case BSPulse:
        {
          c = lv_palette_main(LV_PALETTE_PURPLE);
          break;
        }  
        case BSOff:
        {
          c = LV_COLOR_MAKE(0X00,0xFF,0xFF);
          break;
        }
        default:
        {
          c = lv_palette_main(LV_PALETTE_YELLOW);
        }
      }
      SetLedScreen1(BatteryNumber,c);
    }
  }
}
```

通过以下代码，SenseCap Indicator 将显示一个三屏应用程序。屏幕1显示电池数据的概览，并带有颜色编码的状态指示器；屏幕2提供单个电池的详细信息；屏幕3提供额外的控制或信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/11.png"/></div>

</TabItem>
  
<TabItem value="Hendra" label="旧教程（作者：Hendra）">

我们现在可以开发一个屏幕，该屏幕连接到 ESP32S3 芯片，并读取连接到 RP2040 芯片的传感器数据。最后将两者结合起来。

<h3>开发连接到 ESP32-S3 芯片的屏幕</h3>

SenseCap Indicator 使用 ST7701 模块作为屏幕，它通过并行接口连接到 ESP32S3 MCU 的引脚上。为了驱动屏幕，需要一些 Arduino 库。你可以从[这里下载](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip)。

下载库后，打开 Arduino，在“草图”菜单中选择“添加 ZIP 库”。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"/></div>

将下载的库添加到 Arduino IDE 中。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/4.jpg"/></div>

同时，你需要检查相同的“草图”菜单并选择“管理库”，然后搜索“PCA9535”，选择由 hidea kitai 制作的库并安装它。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"/></div>

:::note
PCA9535 库是必需的，因为 ST7701 的 CS 引脚连接到 PCA9535 I2C 扩展模块，具体来说是 I2C 模块的引脚 4。
:::

安装所有必要的库后，上传以下代码以测试屏幕是否可以在 Arduino 环境中正常工作。你可以上传以下代码：

```cpp
#include <Arduino_GFX_Library.h>
#include <PCA95x5.h>
#define GFX_BL DF_GFX_BL // 默认背光引脚，你可以将 DF_GFX_BL 替换为实际的背光引脚

/* 更多设备声明请参考：https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */
#if defined(DISPLAY_DEV_KIT)
Arduino_GFX *gfx = create_default_Arduino_GFX();
#else /* !defined(DISPLAY_DEV_KIT) */

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define GFX_BL 45
Arduino_DataBus *bus = new Arduino_SWSPI(
    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,
    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);

// 选项 1：
// 取消注释以支持 4" 矩形显示屏
Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    480 /* width */, 480 /* height */, rgbpanel, 2 /* rotation */, true /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));

#endif /* !defined(DISPLAY_DEV_KIT) */
/*******************************************************************************
 * Arduino_GFX 设置结束
 ******************************************************************************/

void setup(void)
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("Arduino_GFX Hello World 示例");

#ifdef GFX_EXTRA_PRE_INIT
  GFX_EXTRA_PRE_INIT();
#endif

  // 初始化显示屏
  if (!gfx->begin())
  {
    Serial.println("gfx->begin() 失败！");
  }
  gfx->fillScreen(BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif

  gfx->setCursor(10, 10);
  gfx->setTextColor(RED);
  gfx->println("Sensecap Indicator");

  delay(5000); // 5 秒
}

void loop()
{
  gfx->setCursor(random(gfx->width()), random(gfx->height()));
  gfx->setTextColor(random(0xffff), random(0xffff));
  gfx->setTextSize(random(6) /* x 方向缩放 */, random(6) /* y 方向缩放 */, random(2) /* 像素间距 */);
  gfx->println("Sensecap Indicator");

  delay(1000); // 1 秒
}
```

如果一切正常，“Sensecap Indicator”文本将随机打印在屏幕上。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"/></div>

<h3>读取连接到 RP2040 芯片的传感器</h3>

如准备部分所述，所有传感器都连接到 RP2040。假设 RP2040 上仍然是默认固件，传感器数据通过 UART 接口发送到 ESP32S3。

为了让 ESP32S3 能够读取数据，需要安装一个名为 **PacketSerial** 的库。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/7.jpg"/></div>

安装库后，你可以上传以下代码以在 ESP32S3 上获取传感器数据：

```cpp
//
// 版权所有 (c) 2012 Christopher Baker <https://christopherbaker.net>
//
// SPDX-License-Identifier: MIT
//

#include <PacketSerial.h>

PacketSerial myPacketSerial;

#define RXD2 20
#define TXD2 19

#define PKT_TYPE_SENSOR_SCD41_CO2 0XB2
#define PKT_TYPE_SENSOR_SHT41_TEMP 0XB3
#define PKT_TYPE_SENSOR_SHT41_HUMIDITY 0XB4
#define PKT_TYPE_SENSOR_TVOC_INDEX 0XB5
#define DEBUG   0

void setup()
{
  // 我们通过设置通信速度（比特/秒）开始与 PacketSerial 对象通信。
  myPacketSerial.begin(115200);

  // 如果我们想接收数据包，必须指定一个数据包处理函数。
  // 数据包处理函数是一个自定义函数，其签名类似于下面的 onPacketReceived 函数。
 
  Serial1.begin(115200, SERIAL_8N1, RXD2, TXD2);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);
}

void loop()
{
  // 在这里执行你的程序特定的 loop() 工作。

  // PacketSerial::update() 方法尝试读取任何传入的串行数据，并通过用户在 setup() 函数中指定的数据包处理函数发出接收和解码的数据包。
  //
  // PacketSerial::update() 方法应在每次 loop() 中调用一次。如果未能足够频繁地调用 PacketSerial::update()，可能会导致缓冲区溢出。
  myPacketSerial.update();

  // 检查接收缓冲区溢出（可选）。
  if (myPacketSerial.overflow())
  {
    // 通过引脚发送警报（例如，点亮溢出 LED）或向发送方返回用户定义的数据包。
    //
    // 最终，你可能需要通过模板参数增加接收缓冲区（参见 README.md）。
  }
}

void onPacketReceived(const uint8_t *buffer, size_t size) {

  Serial.printf("<--- 接收长度:%d, 数据: ", size);

  if (size < 1) {
    return;
  }
  // byte serbytes[] = buffer[i];
  float dataval;
  switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SCD41_CO2:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("CO2 浓度:  ");
        Serial.println(dataval);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SHT41_TEMP:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("SHT 温度:  ");
        Serial.println(dataval, 2);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SHT41_HUMIDITY:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("SHT 湿度:  ");
        Serial.println(dataval, 2);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_TVOC_INDEX:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("TVOC 指数:  ");
        Serial.println(dataval);
        break;
      }
    default:
      break;
  }
}
```

点击并打开串口监视器，将波特率设置为 115200，您将看到来自 RP2040 的传感器数据。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/8.jpg"/></div>

<h3>结合两个示例并在屏幕上显示传感器数据</h3>

打开 Arduino IDE 的示例菜单，导航到 **GFX library for Arduino**，然后选择 **SI_displaysensordata** 示例并上传。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/9.jpg"/></div>

如果上传成功，您将在屏幕上看到传感器数据。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/10.jpg"/></div>

恭喜！现在您可以使用 Arduino IDE 开发 SenseCAP Indicator！

<h2>更多内容</h2>

1. 开发仍处于第一阶段，本教程中未配置的是触摸屏部分。我已经尝试了一些针对 FT6336 模块的 Arduino 库，但没有成功的结果。
2. 这是因为 FT6366 模块的 INT 引脚和 RESET 引脚连接到 PCA9535 I2C 扩展器，需要在库中手动配置。我可能会在未来重新尝试。

- 顺便提一下，关于使用 Arduino GFX 库的更多信息，您可以访问 [Arduino_GFX GitHub 页面](https://github.com/moononournation/Arduino_GFX)。

</TabItem>
</Tabs>

## 特别感谢

感谢 GitHub 用户 [u4mzu4](https://github.com/u4mzu4) 提供支持 SenseCAP Indicator 的 SWSPI 配置文件。

感谢 [LongDirtyAnimAlf](https://github.com/LongDirtyAnimAlf) 帮助更新 Arduino 库以支持 SenseCAP Indicator，包括触摸屏支持。

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [LongDirtyAnimAlf](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=indi&pane=issue&itemId=70900433)、[Hendra](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35925769) 和 u4mzu4 的努力，您的工作将被展示。

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>