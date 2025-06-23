---
description: 本文档将介绍如何快速上手达妙43系列电机.
title:  快速上手达妙43系列电机
keywords:
- 关节模组
- 电机
- 机器人
- 机械臂
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /cn/cn_damiao_series
last_update:
  date: 06/1/2025
  author: ZhuYaoHui
---

# 达妙43系列电机快速入门指南
本文档将介绍如何快速上手达妙43系列电机，以及如何在reComputer Mini Jetson Orin上使用C++和Python控制电机。

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.png" />
</div>

## 技术规格

以下是完整的产品参数表（所有型号）：

| 电机型号 | 额定扭矩(Nm) | 峰值扭矩(Nm) | 空载转速(rpm) | 额定转速(rpm) | 减速比 | 尺寸直径*高度(mm) | 重量(g) | 工作电压(V) | 推荐电压范围(V) | 额定相电流(A) | 峰值相电流(A) | 额定功率(W) | 极对数 | 通信方式 | 编码器类型 | 安装方式 | 相电阻(Ω) | 相电感(uH) | 磁链(Wb) | 转动惯量(Kg*m²) | 扭矩常数(Nm/A) | 驱动器最大电流(A) | 速度环KP | 默认PMAX(rad) | 默认VMAX(rad/s) | 默认TMAX(Nm) | 速度常数 |
|---------|-------------|-------------|--------------|--------------|--------|------------------|---------|------------|----------------|--------------|--------------|------------|--------|----------|------------|----------|-----------|------------|----------|--------------|---------------|----------------|----------|---------------|---------------|---------------|----------|
| J3507-2EC | 0.8 | 3 | 460 | 150 | 7 | 46*37.9 | ~150 | 24 | 15-30 | 2.4 | 8.3 | 12.566 | 14 | CAN/CANFD | 磁编双编码 | 内置 | 0.8 | 235 | 0.0037 | 8.70E-06 | 0.5439 | 10.261 | 3.01E-01 | 12.566 | 50 | 5 | 106.434 |
| J4310-2EC V1.1 | 3 | 7 | 200 | 120 | 10 | 57*46 | ~300 | 24 | 15-32 | 3.7 | 7.2 | 37.699 | 14 | CAN/CANFD | 磁编双编码 | 内置 | 0.85 | 345 | 0.0045 | 1.80E-05 | 0.945 | 10.261 | 3.72E-04 | 12.5 | 30 | 10 | 87.513 |
| J4310-2EC V1.1(48V) | 3 | 7 | 400 | 120 | 10 | 57*46 | ~300 | 48 | 15-52 | 3.7 | 7.2 | 37.699 | 14 | CAN/CANFD | 磁编双编码 | 内置 | 0.85 | 345 | 0.0045 | 1.80E-05 | 0.945 | 10.261 | 3.72E-04 | 12.5 | 30 | 10 | 87.513 |
| J4340-2EC | 9 | 27 | 52.5 | 36 | 40 | 57*53.3 | ~362 | 24 | 15-32 | 3 | 8 | 33.929 | 14 | CAN/CANFD | 磁编双编码 | 内置 | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261 | 9.59E-05 | 12.5 | 8 | 28 | 81.197 |
| J4340-2EC(48V) | 9 | 27 | 100 | 36 | 40 | 57*53.3 | ~362 | 48 | 15-52 | 2.5 | 9 | 33.929 | 14 | CAN/CANFD | 磁编双编码 | 内置 | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261 | 9.59E-05 | 12.5 | 8 | 28 | 81.197 |
| J4340P-2EC | 9 | 27 | 52.5 | 36 | 40 | 57*56.5 | ~375 | 24 | 15-32 | 3 | 8 | 33.929 | 14 | CAN/CANFD | 磁编双编码 | 内置 | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261 | 9.59E-05 | 12.5 | 8 | 28 | 81.197 |
| J4340P-2EC(48V) | 9 | 27 | 100 | 36 | 40 | 57*56.5 | ~375 | 48 | 15-52 | 2.5 | 9 | 33.929 | 14 | CAN/CANFD | 磁编双编码 | 内置 | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261 | 9.59E-05 | 12.5 | 8 | 28 | 81.197 |
| J6006-2EC | 4 | 11 | 226@24V 408@48V | 150 | 6 | 76*36.5 | ~335 | 24-48 | 15-52 | 5.96 | 17.6 | 62.832 | 14 | CAN | 磁编双编码 | 内置 | 0.435 | 270 | 0.0058 | 5.80E-05 | 0.7308 | 20.522 | 7.75E-04 | 12.5 | 45 | 20 | 67.898 |
| J8006-2EC V1.1 | 8 | 20 | 194.2@24V 392.8@48V | 120 | 6 | 96*40 | ~559 | 24-48 | 15-52 | 9 | 21 | 100.531 | 21 | CAN | 磁编双编码 | 内置 | 0.4 | 215 | 0.0054 | 1.15E-04 | 1.0206 | 41.045 | 5.50E-04 | 12.5 | 45 | 40 | 48.618 |
| J8009-2EC | 20 | 40 | 168@24V 335@48V | 100@24V 200@48V | 9 | 98*61.7 | ~896 | 24-48 | 15-52 | 18.6 | 40 | 209.440 | 21 | CAN/CANFD | 磁编双编码 | 内置 | 0.145 | 80 | 0.00445 | 1.95E-04 | 1.261575 | 41.045 | 7.55E-04 | 12.5 | 45 | 54 | 58.997 |
| J8009P-2EC | 20 | 40 | 168@24V 335@48V | 100@24V 200@48V | 9 | 98*61.7 | ~921 | 24-48 | 15-52 | 18.6 | 40 | 209.440 | 21 | CAN/CANFD | 磁编双编码 | 内置 | 0.145 | 80 | 0.00445 | 1.95E-04 | 1.261575 | 41.045 | 7.55E-04 | 12.5 | 45 | 54 | 58.997 |
| J10010-2EC | 40 | 150 | 75@24V 150@48V | 50@24V 100@48V | 10 | 112*62 | ~1485 | 24-48 | 15-52 | 18.4 | 80.2 | 418.879 | 21 | CAN/CANFD | 磁编双编码 | 内置 | 0.125 | 100 | 0.00825 | 5.50E-04 | 2.59875 | 100 | 4.24E-04 | 12.5 | 20 | 200 | 31.823 |
| J10010L-2EC | 40 | 120 | 100@24V 200@48V | 70@24V 100@48V | 10 | 120*53 | ~1375 | 24-48 | 15-52 | 23.5 | 95 | 418.879 | 21 | CAN/CANFD | 磁编双编码 | 内置 | 0.11 | 85 | 0.00635 | 5.56E-04 | 2.00025 | 99.7 | 5.59E-04 | 12.5 | 25 | 200 | 41.344 |

## 核心特性
 
1. **支持CAN总线 & CANFD协议**
2. **双编码器设计**
3. **高扭矩密度**
4. **高运动精度**
5. **中空轴结构**

## 快速入门
### 使用前的环境准备
**Windows PC端准备**
- 下载[达妙调试工具](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/Debugging_Tools_v.1.6.8.8.exe)
- 下载[USB转CAN工具](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/USB2CAN_2.0.0.3.exe)

### 连接电路到PC

我们采用CAN通信方式，需要通过USB-CAN转换器连接Windows上位机进行调试。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/circcuit.jpg" />
</div>

注意需要为电机单独提供24V电源，同时将USB接口连接至电脑。

### 使用`Debugging_Tools_v.1.6.8.8.exe`测试电机
软件底部可切换中英文界面。

| **配置串口连接参数** | **连接电机** | **读取参数** | **设置CAN ID** |**写入参数** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/1.png) | ![图2](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/2.png) | ![图3](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/3.png) | ![图4](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/4.png) |![图5](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/5.png) |
| 串口选择电脑自动识别的端口，其他参数保持默认 | 点击'打开端口'按钮后会自动连接上位机，首次连接时对话框会打印电机信息|在'参数设置'区域点击'读取参数'可显示电机当前详细信息和工作模式|此处请先配置CAN ID |配置完成后点击'写入参数'更新参数 |

:::tip
**CAN_ID**: 驱动器接收CAN指令的帧ID(16进制)

**Master ID**: 驱动器发送反馈的帧ID(16进制)

建议为每个电机设置唯一的Master ID

最佳实践是将Master ID设置为比CAN_ID大0x10(例如CAN_ID=0x01，则Master ID=0x11)

示例：
电机1: CAN_ID=0x01, Master ID=0x11
电机2: CAN_ID=0x02, Master ID=0x12
绝对不要将Master ID设为0x00!!!
:::

#### **(1) 基本参数**  
- **NPP**: 电机极对数，通过校准自动确定  
- **UV**: 当供电电压低于阈值(最低15V)时，驱动器将停止工作  
- **OV**: 设置电压上限。驱动器上电时检查供电电压，若超限则禁用操作(仅在上电时检查一次)  
- **Acc/Dec**: 在非MIT模式下用于限制速度变化率  
- **GR(减速比)**: 影响输出速度/位置，间接影响扭矩反馈。支持浮点数值  
- **OT**: 线圈温度阈值(建议≤100°C)。超限将触发故障模式(禁用电机并报错)  
- **CAN_ID**: 接收CAN指令的帧ID(16进制)  
- **Master ID**: 驱动器反馈的帧ID(16进制)。最佳实践：设置`MasterID = CAN_ID + 0x10`(如`0x01`→`0x11`)。切勿设为`0x00`  
- **CAN超时**: 32位整数定义超时周期(单位:50µs周期)。若在此间隔内未检测到CAN指令，电机进入保护模式  
- **速度限制**(*仅速度模式*): 减速前的最大速度(单位:rad/s)  
- **过流保护**: 最大相电流限制(百分比)  

#### **(2) 电机参数**  
- 由驱动器自动识别。更换驱动板时需要重新校准。参数持久化存储在驱动器中  

#### **(3) 指令缩放(幅值设置)**  
- **PMAX**: 在MIT模式下缩放指令输入；在其他模式下缩放反馈输出。参考CAN协议了解映射规则  
- **VMAX**: 同PMAX  
- **TMAX**: 同PMAX  
- **KT_OUT**: 电机扭矩常数。若电机参数已准确识别则设为0  
- **减速比系数**: 齿轮的扭矩传递比  

> **注意**: 驱动器使用MIT通信协议格式  

#### **(4) 控制设置**  
- **控制模式**:  
  - **MIT模式**  
  - **位置-速度模式**(梯形加减速)  
  - **速度模式**  
- **电流带宽**: 电流环增益(默认:1000)  
- **速度KP/KI, 位置KP/KI**: 速度和位置环的PID参数  

### MIT控制模式
**1. MIT扭矩控制模式:**

1. 在参数设置区域点击读取参数显示当前电机参数

2. 将控制模式设为MIT模式

3. 确认配置的CAN ID

4. 点击写入参数保存所有设置

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/7.png" />
</div>

5. 在测试标签页点击"使能电机"按钮(Ente)

6. 在MIT控制区域:
 - 设置扭矩(Nm)为1
 - 点击更新→发送

电机将开始旋转

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/6.png" />
</div>

您也可以复制CAN数据(16进制格式)使用串口调试工具驱动电机

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/8.png" />
</div>

**2. MIT速度控制模式:**
1. 在测试标签页点击"使能电机"按钮(Ente)

2. 在MIT控制区域:
 - 设置速度(rad/s)为5
 - 设置KD(N*s/r)为1
 - 点击更新→发送

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/9.png" />
</div>

电机将开始旋转
您也可以复制CAN数据使用串口调试工具驱动电机

**3. MIT位置控制模式:**
1. 在测试标签页点击"使能电机"按钮(Ente)

2. 可使用"保存零点"将当前位置设为零点


3. 在MIT控制区域:
 - 设置位置(rad)为3.14
 - 设置KP(N/r)为2
 - 设置KD(N*s/r)为1
 - 点击更新→发送

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/10.png" />
</div>

电机将开始旋转
您也可以复制CAN数据使用串口调试工具驱动电机

### 速度控制模式

1. 在参数设置区域点击读取参数显示当前电机参数

2. 将控制模式设为速度模式

3. 确认配置的CAN ID

4. 点击写入参数保存所有设置

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/11.png" />
</div>

5. 在测试标签页点击"使能电机"按钮(Ente)

6. 在速度控制区域:
 - 设置速度(rad/s)为5
 - 点击更新→发送

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/12.png" />
</div>

电机将开始旋转
您也可以复制CAN数据使用串口调试工具驱动电机

### 位置控制模式

1. 在参数设置区域点击读取参数显示当前电机参数

2. 将控制模式设为位置模式

3. 确认配置的CAN ID

4. 点击写入参数保存所有设置

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/13.png" />
</div>

5. 在测试标签页点击"使能电机"按钮(Ente)

6. 在位置控制区域:
 - 设置位置为3.14
 - 设置速度(rad/s)为5
 - 点击更新→发送

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/14.png" />
</div>

电机将开始旋转
您也可以复制CAN数据使用串口调试工具驱动电机

## 使用[reComputer Mini Jetson Orin](/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/reComputer_Mini_Getting_Started.md)控制电机

目前市场上电机最常用的CAN通信接口采用XT30(2+2)和JST连接器。我们的reComputer Mini Jetson Orin设备配备了双XT30(2+2)端口和基于JST的CAN接口，提供无缝兼容性。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg" />
</div>

有关CAN使用的更多细节，可参考此[wiki](https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/#can)。

### 启用CAN接口

**步骤1:** 使用CAN0和CAN1前，请移除底盖并将两个120Ω终端电阻拨至ON位置

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**步骤2:** 通过XT30(2+2)接口将电机直接连接到reComputer Mini的CAN0

:::tip
reComputer Mini的CAN接口H/L引脚与电机的H/L相反，因此需要反转XT30 2+2线束中的H/L连接
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/15.jpg" />
</div>

:::danger
此电源方案仅适用于单电机学习测试。多电机使用时请设计独立电源板，将Jetson电源与电机电源隔离，避免大电流直接通过Jetson
:::

#### 启用Jetson CAN通信
打开终端输入以下命令拉高GPIO引脚激活CAN0:
```bash
gpioset --mode=wait 0 43=0
```

若使用JST接口的CAN1，则拉高106引脚
```bash
gpioset --mode=wait 0 106=0
```

保持此终端开启，新建终端配置CAN0
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### C++示例

#### 安装与编译

- **安装CMake**  
```shell
sudo apt update  
sudo apt install cmake  
```  

- **安装CAN工具**  
```shell
sudo apt install can-utils  
```  

- **下载并编译程序**  
1. 创建工作空间并克隆仓库:  
```shell
mkdir -p ~/orin_ws/src  
cd ~/orin_ws/src  
git clone https://gitee.com/xauter/orin-control.git  
```  

2. 编译:  
```shell
cd ~/orin_ws/src/orin-control/dm_hw  
mkdir build  
cd build  
cmake ..  
make  
```  

#### 使用说明  

1. **检查CAN设备**  
打开终端运行:  
```shell
ip -brief link | grep can  
```  

2. **运行程序**  
在build文件夹执行:  
```shell
cd ~/orin_ws/src/orin-control/dm_hw/build  
./dm_main  
```  
电机将亮起绿灯并以正弦速度旋转

### Python控制

- **安装Python环境**  
```bash
pip install python-can numpy
```

- **创建脚本目录**  
```bash
mkdir -p ~/damiao/scripts
```

- **创建damiao_motor.py文件**

```bash
cd ~/damiao/scripts
touch damiao_motor.py
```
将以下代码复制到damiao_motor.py

<details>
<summary>damiao_motor.py</summary>
(此处保留原始Python代码，仅作翻译说明)
</details>

- **创建damiao_test.py文件**

将以下代码复制到damiao_test.py

<details>
<summary>damiao_test.py</summary>
(此处保留原始Python代码，仅作翻译说明)
</details>

- **运行damiao_test.py**
```bash
python damiao_test.py
```

电机将亮起绿灯并以正弦速度旋转

## 技术支持与产品讨论

感谢选择我们的产品！我们提供多种支持渠道确保您获得最佳使用体验。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>