---
description: 了解如何在 EdgeBox RPi 200 上使用 Node-RED 集成 Modbus TCP。本指南涵盖硬件设置、Modbus 设备配置以及创建 Node-RED 流以实现高效的工业自动化和监控。
title: Edge Box RPi 200 与 Node-RED 和 Modbus TCP
keywords:
  - 边缘控制器
  - Edge-Box
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /cn/edge_box_rpi_200_node_red_modbus_tcp
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

**Modbus** 是一种在工业环境中广泛使用的通信协议，以其简单性和稳健性而闻名。**Modbus RTU（远程终端单元）** 是一种基于 RS-232 或 RS-485 物理层的串行通信协议。它使用紧凑的二进制数据表示形式，使其能够在长距离和嘈杂环境中高效传输数据。而 **Modbus TCP** 则将协议扩展到以太网网络，通过 TCP/IP 数据包封装 Modbus 帧。这种方式允许更快的通信速度，并将 Modbus 集成到现代 IT 基础设施中。两种版本因其可靠性、易于实施以及能够促进各种设备和系统（如 PLC、传感器和 SCADA 系统）之间的通信而受到工业领域的青睐。

## 开始准备

在开始这个项目之前，您需要按照以下描述提前准备好硬件和软件。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

#### 支持 Modbus 的设备

EdgeBox RPi 200 支持与各种设备进行 Modbus 通信，包括 **PLC、VFD、HMI、能源计量器和 BMS** 系统。在本案例中，将使用支持 **Modbus TCP/IP 协议** 的西门子 LOGO PLC。

### 软件准备

Edge Box-200 随设备预装了 Raspberry Pi OS。如果您是首次启动此设备，请阅读我们的 [入门指南](https://wiki.seeedstudio.com/Edge_Box_introduction/) Wiki。
我们还准备了 [Node-RED 入门指南](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/)。建议您在继续阅读 Wiki 之前先查看此指南。

### 配置 Modbus TCP/IP 的以太网设置

由于您的 PLC/设备 IP 域与无线设置不同，您可能需要手动更改 IP 配置。具体步骤如下：

- **步骤 01**：运行以下命令：

```sh
sudo nano /etc/dhcpcd.conf
```

- **步骤 02**：然后根据您的 PLC/设备网络域配置以太网端口设置，并使用 **metric** 命令设置优先级。数值越低的 metric 优先级越高。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## 安装 Modbus 节点

要安装 Modbus 节点，请按照以下步骤操作：

**步骤 1.** 点击右上角的 **三条横线** 图标所示的 **设置按钮**，然后选择 **管理调色板（Manage palette）**。

**步骤 2.** 在调色板选项卡中，导航到 **安装（Install）选项卡**。

**步骤 3.** 使用节点搜索栏查找所需的 [Modbus 节点](https://flows.nodered.org/node/node-red-contrib-modbus)。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**步骤 4.** 点击节点旁边的 **安装（Install）** 按钮。

**步骤 5.** 如果出现提示，从下拉警告窗口中点击 **安装（Install）** 按钮以确认安装。

**步骤 6.** 等待安装过程完成。安装完成后，**安装（Install）** 按钮应变为 **已安装（Installed）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## 确定 Modbus 地址

确定正确的 Modbus 地址是一个关键步骤。建议**查阅 PLC 或设备制造商的技术手册，以获取有关 Modbus 地址的详细信息，包括输入、输出和保持寄存器**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

根据这些信息，您可以在标签配置中调整 Modbus 地址。例如，如果技术手册将输出线圈 Q1 列为 8193，则应在 Node-RED 中将地址配置为 8192（**从原始地址减去 1**）。同样，如果网络输入列为 1 且为线圈类型，则地址应在 Node-RED 中设置为 0。

## 配置 Modbus-Write 节点

**步骤 1.** **拖放** Modbus-Write 节点到工作区，然后**双击**节点以打开其设置。

**步骤 2.** 在 **服务器（Server）** 选项卡中，编辑以添加您的设备，输入以下详细信息：

   - **名称（Name）**：服务器名称
   - **类型（Type）**：TCP
   - **主机（Host）**：Modbus 服务器的 IP 地址
   - **端口（Port）**：Modbus 服务器的端口地址（通常为 502）
   - **单元 ID（Unit-Id）**：255（单元 ID 用于标识 Modbus 网络中的各个设备，特别是在多个设备共享同一通信线路时）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**步骤 3.** **为您的节点命名一个合适的名称**，例如 "Network IP 1"。在本示例中，您正在控制 PLC 程序中的一个网络输入。

**步骤 4.** 将 **功能码选项（FC option）** 设置为 **FC 5: 强制单线圈（Force Single Coil）**。

**步骤 5.** 将 **地址设置为 0**（因为我们正在设置输入 0）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**步骤 6.** 使用注入节点（inject node），我们可以注入布尔值。在这里，我们将使用几个注入节点来实现此目的。

整体步骤可以如下演示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## 配置 Modbus-Read 节点

**步骤 1**. **拖放** Modbus-Read 节点到流程中。你可以在调色板的 Modbus 标签中找到该节点。

**步骤 2**. **双击** Modbus-Read 节点以打开其设置。

**步骤 3**. **配置以下设置：**

   - **名称**: 给它一个合适的名称，例如 "ReadOutputs"。
   - **FC 值**: 将 FC 值更改为 FC 5: 读取线圈状态。
   - **地址**: 将地址设置为 8192（根据制造商的数据表）。
   - **数量**: 将数量设置为 4。在此情况下，有 4 个数字输出。
   - **轮询速率**: 根据你的应用需求更改轮询速率。
   - **服务器**: 将服务器设置为 "MyPLC"（在前面的示例中已配置）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div> 

## 配置 Modbus-Response 节点

**Modbus-Response 节点** 用于显示 Modbus 读/写节点的响应。

**步骤 1**. **拖放** Modbus-Response 节点到流程中。

**步骤 2**. 连接到 **Modbus Read** 节点。响应将在 Modbus-Response 节点下显示一个数字数组。这些数字表示每个数字输出的计数。

**步骤 3**. **拖放调试节点** 以便于检查。然后连接到 **Modbus Read 节点**。

通过遵循这些步骤，你可以有效地读取并显示来自 Modbus TCP 设备的寄存器/线圈的值。

整体步骤可以如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div> 

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持，以确保你使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>