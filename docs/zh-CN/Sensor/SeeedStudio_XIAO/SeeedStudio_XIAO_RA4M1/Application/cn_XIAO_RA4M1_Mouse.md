---
description: 使用 Seeed Studio XIAO RA4M1 构建一个简单的鼠标。
title: XIAO RA4M1 鼠标
keywords:
- ra4m1
- xiao
- mouse
image: https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/3.png
side_position: 2
slug: /cn/xiao_ra4m1_mouse
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/xiao_mouse.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 所需材料

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove 拇指摇杆</th>
      <th>Grove 电缆</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductmalejumper.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Thumb-Joystick.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

## 初步准备

### 点亮 XIAO RA4M1 的内置 LED

如果您之前从未使用过 XIAO RA4M1，[请点击这里](https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/)了解如何点亮内置 LED，以确保您的开发环境正常。

### 读取 Grove 摇杆的 X 和 Y 轴数据

#### 第一步：连接设备

首先，您需要通过以下表格中的引脚将 XIAO RA4M1 和摇杆连接起来。

| XIAO RA4M1      | Grove - 拇指摇杆 |
|-----------------|-------------------------|
| 3.3V            | 红色                   |
| GND             | 黑色                   |
| A0              | 白色                   |
| A1              | 黄色                   |

现在使用 Grove 电缆将它们连接起来，如下图所示。

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/4.png" style={{width:600, height:'auto'}}/></div>

#### 第二步：上传测试程序

将以下代码复制并粘贴到 Arduino IDE 中，然后上传到 XIAO RA4M1。

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("X 和 Y 坐标是:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/2.png" style={{width:1000, height:'auto'}}/></div>

现在移动摇杆，轴数据会同时发生变化。这意味着 XIAO RA4M1 和摇杆工作正常。

## 使用 XIAO RA4M1 构建鼠标

### 第三步：上传鼠标控制程序

```cpp
#include <Mouse.h>

const int xaxis = A0;
const int yaxis = A1;
const int sensitivity = 5; // 调整鼠标灵敏度

void setup()
{
    Mouse.begin();
    delay(1000); // 至少需要 1000ms 初始化
    Serial.begin(9600);
}

void loop()
{
  int xValue = analogRead(xaxis);
  int yValue = analogRead(yaxis);

  /*
  当您点击 Grove 摇杆的中央按钮时，xValue 将等于 1023，
  因此当 xValue < 1000 时，我们移动鼠标；当 xValue > 1000 时，我们点击鼠标。
  */
  if(xValue < 1000){
  
    // 定义鼠标移动距离
    int xDistance;
    int yDistance;

    /*
    摇杆读取的 x 和 y 值以 500 为坐标轴中心，
    因此我们需要通过减去 500 来处理数据，同时消除一些轻微的振动。
    */
    // 消除 X 轴轻微振动
    if(abs(xValue - 500) < 10){
      xDistance = 0;
    }else{
      xDistance = (xValue - 500);
    }
    // 消除 Y 轴轻微振动
    if(abs(yValue - 500) < 10){
      yDistance = 0;
    }else{
      yDistance = (yValue - 500);
    }
    // 从摇杆读取值
    Serial.print("值: ");
    Serial.print(xValue);
    Serial.print(",");
    Serial.println(yValue);
    Serial.println(" ");
    // 读取鼠标将移动的距离
    Serial.print("距离: ");
    Serial.print(xDistance);
    Serial.print(",");
    Serial.println(yDistance);
    Serial.println(" ");

    // 使鼠标不那么灵敏
    Mouse.move(xDistance / sensitivity, -yDistance / sensitivity, 0);
  }else{
    // 当 xValue > 1000 时，鼠标点击
    Mouse.click();
  }
    delay(100);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/1.png" style={{width:1000, height:'auto'}}/></div>

现在您会看到，当您控制摇杆时，光标正在移动~

恭喜！您成功构建了这个简单的小鼠标。还有更多有趣的 HID（人机接口设备）功能等待您通过 XIAO RA4M1 探索。[想了解更多？请点击这里跳转~](https://docs.arduino.cc/tutorials/uno-r4-minima/usb-hid/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>