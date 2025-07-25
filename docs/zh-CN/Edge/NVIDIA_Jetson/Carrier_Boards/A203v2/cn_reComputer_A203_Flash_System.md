---
description: A203 载板
title: A203 载板
keywords:
  - Edge
  - reComputer 载板_适配_Jetson_模块
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_A203_Flash_System
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # 用于 Disqus

---

# 将 JetPack OS 刷写到 A203 载板（支持 NVIDIA Jetson Nano 和 NVIDIA Jetson Xavier NX）

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->


在本教程中，我们将向您展示如何将 JetPack OS 刷写到支持 NVIDIA Jetson Nano 模块和 NVIDIA Jetson Xavier 模块的 A203 载板上。我们将介绍两种刷写系统的方法。由于 A203 载板与官方 NVIDIA Jetson 载板不同，因此需要安装相应的驱动程序。

![image](https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A203.jpeg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Carrier-Board-for-Jetson-Nano-Xavier-NX-V2-p-5214.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

## 入门指南

我们可以使用 **NVIDIA SDK Manager 和 Linux 终端**来刷写系统，或者仅通过 **Linux 终端**轻松完成此操作。对于有 Linux 基础知识的用户，我们强烈推荐仅使用 Linux 终端。

- 通过 NVIDIA SDK Manager 和 Linux 终端刷写 JetPack OS
- 通过 Linux 终端刷写 JetPack OS

在开始之前，我们需要进行一些准备工作：

### 软件准备

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA 账户</span></a>
- 安装了 Ubuntu 18.04 或更高版本的 Linux 主机电脑

!!!note
 在本教程中，我们将使用基于 Ubuntu 18.04 LTS 的系统完成安装。

### 硬件准备（强制恢复模式）

在进行安装步骤之前，我们需要确保扩展板处于强制恢复模式。不同类型的扩展板操作有所不同，请注意区分。

**步骤 1.** 首先，断开扩展板的电源。

**步骤 2.** 要进入恢复模式，需要使用跳线连接 **FC REC** 和 **GND**。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A20X/A203.png" /></div></td>
      <td colSpan={4}><div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A20X/A203V2.png" /></div></td>
    </tr>
    <tr>
      <th colSpan={4} align="center"><a href="https://files.seeedstudio.com/products/114110047/A203_Pin_Description.pdf">A203 扩展板</a></th>
      <th colSpan={4} align="center"><a href="https://files.seeedstudio.com/products/103110043/A203%20V2%20pin%20description.pdf">A203 V2 扩展板</a></th>
    </tr>
    <tr>
      <th align="center">引脚</th>
      <th align="center">描述</th>
      <th align="center">引脚</th>
      <th align="center">描述</th>
      <th align="center">引脚</th>
      <th align="center">描述</th>
      <th align="center">引脚</th>
      <th align="center">描述</th>
    </tr>
    <tr>
      <td align="center">1</td>
      <td align="center">GND</td>
      <td align="center">5</td>
      <td align="center">PWR_BTN-</td>
      <td align="center">1</td>
      <td align="center">SYS_RST</td>
      <td align="center">8</td>
      <td align="center">LATCH_SET</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">6</td>
      <td align="center">RECOVERY</td>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">9</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">GND</td>
      <td align="center">7</td>
      <td align="center">RST</td>
      <td align="center">3</td>
      <td align="center">RECOVERY</td>
      <td align="center">7</td>
      <td align="center">UART2_RXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">PWR_BTN+</td>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">11</td>
      <td align="center">CAN_L</td>
    </tr>
    <tr>
      <td align="center" />
      <td align="center" />
      <td align="center" />
      <td align="center" />
      <td align="center">5</td>
      <td align="center">PWR_BTN-</td>
      <td align="center">12</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td colSpan={4} align="center" />
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">13</td>
      <td align="center">CAN_H</td>
    </tr>
    <tr>
      <td colSpan={4} align="center" />
      <td align="center">7</td>
      <td align="center">LATCH_SET_BUT</td>
      <td align="center">14</td>
      <td align="center">GND</td>
    </tr>
  </tbody></table>

**步骤 3.** 使用 **Micro USB 线**将扩展板与 Linux 主机电脑连接。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A2032.jpg" /></div>

**步骤 4.** 使用直流电源适配器为扩展板供电。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A203/Flash_A2033.jpg" /></div>

**步骤 5.** 在 Linux 主机电脑上，右键单击鼠标打开终端并输入命令 `lsusb`。当返回的内容中包含 `NVidia Corp.` 时，说明您的 A203 扩展板已进入强制恢复模式，可以继续后续操作。

扩展板上的模块决定了 ID，信息如下：

- 对于 Jetson Nano: **0955:7f21 NVidia Corp**
- 对于 Jetson Xavier NX: **0955:7e19 NVidia Corp**
- 对于 Jetson TX2 NX: **0955:7c18 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## 通过 NVIDIA SDK Manager 刷写 JetPack 操作系统

接下来我们将学习如何通过 NVIDIA SDK Manager 安装系统。NVIDIA SDK Manager 是一个集成工具，包含开发者软件，并为 NVIDIA SDK 提供端到端的开发环境设置解决方案。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### 第一步：在 Linux 主机 PC 上安装 NVIDIA SDK Manager

我们需要在 Linux 主机 PC 上打开浏览器，并从 NVIDIA 官方网站<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>下载 NVIDIA SDK Manager</span></a>。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack1.png" /></div>

### 第二步：打开 NVIDIA SDK Manager 并登录

在 Linux 主机 PC 屏幕上，我们可以右键单击鼠标并打开终端。然后输入以下命令以启动 SDK Manager：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

首次使用 NVIDIA SDK Manager 时，会弹出一个网页，提示您使用之前注册的 NVIDIA 账户登录。

### 第三步：选择目标设备

登录后，您将进入安装的第一步界面。由于我们已经连接了开发板，会弹出一个窗口让您选择硬件设备。

这里的示例是配备 **NVIDIA Jetson Nano 4GB 模块**，因此我们可以选择第一个选项。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

在第一步界面中还有更多选项供您选择：

- 在产品类别面板中需要选择 **Jetson**。
- 在硬件配置面板中，我们建议您**不要选择主机机器（Host Machine）**。这会花费更多时间来为当前的 Ubuntu 主机安装 NVIDIA 组件。如果需要，可以选择它。
- 在目标操作系统面板中，我们可以选择不同的**操作系统**和**JetPack 版本**。但请注意 JetPack 的版本，不同模块可能支持不同类型的 JetPack。我们推荐 "JetPack 4.6.1"。
- 在附加 SDK 面板中，由于 eMMC 的存储空间只有 16GB，如果在这里安装 DeepStream 会导致内存不足。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

点击“继续”以进入下一步。

### 第四步：查看所需组件

在 **Details and License** 中，您可以展开主机组件和目标组件面板，以查看将安装到系统中的组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

如果您只需要安装系统，可以取消选中 SDK 组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!提示
    在选择要安装的组件时，请注意容量使用情况。内置 eMMC 的大小只有 16GB，请根据实际需求合理分配和使用空间。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    经实际测试，安装完整的 SDK 组件后，eMMC 空间仅剩约 500MB。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    如果您想了解如何解决容量不足的问题，请参考 [故障排除](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space)。

如果您希望 SDK Manager 将所有文件下载到默认路径以外的位置，请转到屏幕底部的“下载和安装选项”（Download & Install Options），然后选择您希望使用的路径。

由于 A203 载板需要闪存驱动，请确保首先勾选 **Download now. Install later.** 选项，以下载系统但不安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/60.png" /></div>

选择“继续”以进入下一步。

此时系统将开始下载到您选择的路径，因此我们可以利用这段时间准备驱动程序。

### 第五步：选择合适的驱动程序

现在，我们需要安装驱动程序以确保开发板上的每个组件都能正常工作。首先，我们需要根据载板和模块在 Ubuntu 主机中选择驱动文件。

<table align="center">
  <tbody><tr>
      <th align="center">载板</th>
      <th align="center">Jetson 模块</th>  
      <th align="center">JetPack 版本</th>
      <th align="center">L4T 版本</th>
      <th align="center">下载地址</th>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nano.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX SD</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx_devkit.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_tx2nx.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.1.4</td>
      <td align="center">35.6.0</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETrn1ItMYHVPmWPvDgMyXbABcpzAgQHQpgwf5CFecVDscA?e=gHOJ4T">下载</a></td>
    </tr>
  </tbody>
</table>

!!!注意
下载的文件中包含两个适用于 A203 的 JetPack 5.0.2 驱动程序。两者均可正常工作，但其中一个支持 **IMX-219 摄像头**，另一个支持 **IMX-477 摄像头**。

### 第六步：在系统文件夹中解压驱动程序

!!!注意
请确保在执行此步骤之前，SDK Manager 已完成系统的下载！

在 Linux 主机 PC 上，我们需要将官方镜像中的一些文件替换为下载的驱动程序包文件。由于我们使用的是 SDK Manager，官方镜像的位置（路径）为：

`/home/<username>/nvidia/nvidia_sdk/JetPack_<version num>_Linux_<board name>_TARGETS/Linux_for_Tegra`

### 替换文件

!!!注意
在替换文件之前，您可以选择备份 `kernel` 文件夹中将被替换的 `.dtb` 文件，并将其临时保存到其他路径，以便随时恢复官方下载的文件。

我们可以将文件拖入官方文件夹中：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

或者我们可以执行以下命令来替换文件：

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!注意
    `${}` 是环境变量的使用方式。
 `${Drive package kernel path}` 表示内核镜像文件夹的完整路径。
 `${Officially unpacked Linux_for_Tegra path}` 表示官方提供的 Linux_for_Tegra 文件夹在解压 L4T 压缩包后的完整路径。

### 第七步：安装系统

由于我们之前选择稍后安装系统，因此此时需要重新执行 **步骤 3 到步骤 4**，以便在替换了驱动文件后将系统安装到 A203 上。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/61.png" /></div>

在安装开始之前，SDK Manager 会提示您输入 `sudo` 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

SDK Manager 支持两种方式将 Jetson 目标设备置于强制恢复模式。我们了解 Jetson-202 Carrier Board 进入强制恢复模式的操作，并且在之前的步骤中已经处于强制恢复模式。因此我们选择 `Manual setup: set the target to Force Recovery Mode via manual operations`。

您还可以选择是否预配置 OEM 配置。

- **预配置**：SDK Manager 将使用预定义的配置刷新目标设备，刷新后无需完成系统配置向导。
- **运行时配置**：目标设备上未设置默认配置，刷新后需要手动完成系统配置向导。

这里我们选择默认的 **预配置**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

之后，在底部输入新 Jetson 系统的名称和密码，请记住这些信息。

准备好后，点击 `Flash` 继续。

显示屏将显示软件下载和安装的进度。请耐心等待安装完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （可选）第七步：安装 SDK 组件

如果您在之前的 **步骤 4** 中勾选了组件安装选项，则需要执行此步骤。

片刻之后，您会看到 NVIDIA SDK Manager 弹出一个新窗口，提示您需要通过 IP 地址连接到设备。这意味着系统已经安装完成，接下来将进行组件安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

此时，我们可以 **拔掉跳线帽** 并重启开发板。然后需要通过 HDMI 将开发板连接到显示器，输入您在 **步骤 4** 中设置的密码，并登录到主界面。

此时需要将开发板连接到与 Linux 主机 PC 相同的局域网，并通过命令 `ifconfig` 确定 Jetson 的 **IP 地址**。

返回到 Linux 主机 PC，输入刚刚获取的 IP 地址。NVIDIA SDK Manager 将尝试连接到 Jetson 设备，并继续完成后续 SDK 组件的安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

当您看到以下窗口出现时，安装已经完成。但我们仍需安装驱动程序，因此应保持开发板处于 **强制恢复模式**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

刷新完成后，您可以完全使用开发板。

## 通过命令行刷写 JetPack 操作系统

得益于自定义 BSP（NVIDIA Linux 驱动程序包）的自由度，对于熟悉 Linux 的用户来说，通过命令行刷写 JetPack 操作系统非常简单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### 第一步：下载适当的 NVIDIA Linux 驱动程序包

在 **Linux 主机 PC** 上，我们需要打开浏览器并访问 <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先，我们需要检查 Jetson Linux 的版本是否受支持。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

找到合适的版本后，点击进入下载页面。找到并点击 "L4T Driver Package (BSP)" 和 "Sample Root Filesystem" 下载驱动文件。文件名类似于 `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

作为示例，我们选择 NVIDIA L4T 32.7.1 版本，因为它包含在 JetPack 4.6.1 中，并支持 Jetson Nano 模块。文件名称如下：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### 第 2 步：通过命令行解压包文件并组装 Rootfs

在 Linux 主机 PC 上，我们需要找到一个文件夹来存储之前下载的包文件。然后在该文件夹中打开命令行窗口（终端），并使用以下命令解压文件并组装 rootfs：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
```

!!!注意
    `${}` 是您放置文件名称的地方。

**以 NVIDIA L4T 32.7.1 为例**，下载的文件存储在 `/Desktop/L4T_Drivers` 中，因此在 `/Desktop/L4T_Drivers` 路径下打开命令行窗口（终端），并执行以下命令。

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
```

### 第 3 步：选择合适的驱动程序

解压包后，我们需要安装驱动程序以确保开发板上的每个组件都能正常工作。首先需要根据载板和模块在 Ubuntu 主机中选择驱动程序文件。

<table align="center">
  <tbody><tr>
      <th align="center">载板</th>
      <th align="center">Jetson 模块</th>  
      <th align="center">JetPack 版本</th>
      <th align="center">L4T 版本</th>
      <th align="center">下载地址</th>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nano.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX SD</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_nx_devkit.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A203_jp4.6_tx2nx.zip">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6.6</td>
      <td align="center">32.7.6</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQmiemIe-7tIjZmUDZ85E8sB81pOtZIyBe9WvdzzE3kPyA?e=8V7Sxt">下载</a></td>
    </tr>
    <tr>
      <td align="center">A203/ A203V2</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.1.4</td>
      <td align="center">35.6.0</td>
      <td align="center"><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZY6h_VrBrBFhyaMpOGVX3oBDH0eeWQfIk15UB6uI_Ujsg?e=qVCggN">下载</a></td>
    </tr>
  </tbody>
</table>

:::note

 下载的文件中包含两个适用于 A203 的 JetPack 5.0.2 驱动程序。两者都可以正常工作，但其中一个支持 **IMX-219 摄像头**，另一个支持 **IMX-477 摄像头**。
:::

### 第 4 步：解压驱动程序文件

我们可以将文件拖入官方文件夹中：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

或者我们可以执行以下命令替换文件：

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!注意
    `${}` 是环境变量的使用。
 `${Drive package kernel path}` 表示内核镜像文件夹的完整路径。
 `${Officially unpacked Linux_for_Tegra path}` 表示解压 L4T 压缩包后官方提供的 Linux_for_Tegra 文件夹的完整路径。

### 第 5 步：将系统刷入开发板

在示例中，我们使用 NVIDIA Jetson Nano 模块，可以直接执行以下命令将系统刷入开发板：

```sh
sudo ./apply_binaries.sh
sudo ./flash.sh ${BOARD} mmcblk0p1
```

!!!注意
    `${BOARD}` 是环境变量的使用，其信息应为载板中模块的名称。您可以点击 <a href="https://files.seeedstudio.com/wiki/A20X/6.png" target="_blank"><span>这里</span></a> 查看完整信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!提示
    刷写 L4T 大约需要 10 分钟，如果主机计算机较慢可能需要更长时间。

## 故障排查

### 使用 NVIDIA SDK Manager 进行安装故障排查

安装错误可能由多种原因引起。以下是常见安装问题的检查清单，可能有助于从损坏的安装中恢复。

1. 查看摘要表以确定哪个组件失败。

    a. 展开状态为“Error”的组。

    b. 找到失败的组件后，点击安装错误右侧的详情图标，跳转到终端选项卡，查看具体错误。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. 如果错误与环境问题相关，例如损坏的 apt 仓库或缺少的前置条件，请尝试手动修复，然后点击“Retry Failed Items”按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. 重试安装还有以下两种方法可用：

   a. 在 **通过 SDK Manager 刷写到 eMMC -- 第 3 步** 中，使用 Repair/Uninstall 按钮进入 Manage NVIDIA SDKs 页面。如有需要，展开状态为 "Broken" 的 SDK，然后点击 Repair 修复相关部分（Host 或 Target）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. 在 **通过 SDK Manager 刷写到 eMMC -- 第 3 步** 中，选择所需的 SDK 并重新运行安装。

5. 最后，尝试卸载并重新安装相关的 SDK。

### 使用命令行排查安装问题

命令行安装方法相对简单，但在使用强制恢复模式的场景中容易出错。

如果在 **通过命令行刷写到 eMMC -- 第 2 步** 中遇到如下错误，可能是未成功将载板（Carrier Board）进入强制恢复模式。请特别注意，不要在载板通电的情况下进入强制恢复模式，因为这是无效的。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

如果在 **通过命令行刷写到 eMMC -- 第 3 步** 中无法进入系统，并卡在启动显示的命令行界面，可能是未退出强制恢复模式。同样地，在载板通电的情况下拔掉跳线以退出强制恢复模式也是无效的，这些操作都需要在断电状态下完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!注意
    如果需要更多存储空间，我们可以使用 SD 卡扩展容量，或者将系统烧录到 SD 卡上。您可以参考我们推荐的解决方案 [在 SD 卡上刷写系统](https://wiki.seeedstudio.com/J101_Enable_SD_Card/)

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