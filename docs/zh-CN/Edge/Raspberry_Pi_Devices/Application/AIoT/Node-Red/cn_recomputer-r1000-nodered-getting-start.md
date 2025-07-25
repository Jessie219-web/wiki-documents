---
description: 使用 Node-RED 在 reComputer-R1000 Raspberry Pi 上高效管理和自动化您的工业物联网 (IIoT) 解决方案。无缝集成各种工业协议的数据，实时可视化，并通过这个强大且用户友好的平台提升运营效率。
title: reComputer-R1000 使用 Node-RED 入门
keywords:
  - 边缘控制器
  - reComputer
  - 物联网
  - Node-RED
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_getting_started_node_red
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

[Node-RED](https://nodered.org/) 是一个多功能的编程工具，旨在无缝连接硬件设备、API 和在线服务。其基于浏览器的流程编辑器通过使用调色板中的各种节点简化了将不同组件连接在一起的过程。Node-RED 运行时基于 Node.js，轻量高效，能够充分利用 Raspberry Pi 和其他低成本硬件，非常适合边缘网络应用。

## 入门

在开始这个项目之前，您需要提前准备好硬件和软件，如下所述。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

reComputer-R1000 随附预装的 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的 [入门指南](https://wiki.seeedstudio.com/recomputer_r/) Wiki。

## 在 reComputer-R1000 上安装 Node-RED

- **步骤 01**：通过 SSH 连接到 reComputer-R1000  
请在 Windows 系统中打开 PowerShell，或者在其他系统中打开终端应用程序，然后输入以下命令：`ssh {USERNAME}@{RECOMPUTER_IP_ADDRESS}`。例如：

```sh
ssh pi@192.168.43.100
```
然后输入您在 reComputer 上设置的操作系统用户的密码。

- **步骤 02**：安装 Node-RED  

Node-RED 团队为我们准备了一个一体化脚本，您只需在 reComputer 的原生终端应用程序（通过 VNC 查看器）或上述步骤中的 SSH Shell 中输入以下命令即可：

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```
安装结束时，系统会提示您回答几个问题，请根据提示进行回答。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 03**：设置 Node-RED  
使用一体化脚本完成安装后，您可以根据需要使用以下命令：

使用 `node-red-start`                   启动 Node-RED<br />
使用 `node-red-stop`                    停止 Node-RED <br />
再次使用 `node-red-start`              重新启动 Node-RED <br />
使用 `node-red-log`                     查看最近的日志输出 <br />
使用 `sudo systemctl enable nodered.service` 设置 Node-RED 开机自启 <br />
使用 `sudo systemctl disable nodered.service` 禁用开机自启 <br />

- **步骤 04**：访问 Node-RED 编辑器  

现在，请打开您喜欢的 Web 浏览器，并输入以下 URL：

* 选项 1：如果 Web 浏览器在本地通过 VNC 运行于 reComputer 上，请使用 `http://127.0.0.1:1880`。

* 选项 2：如果 Web 浏览器在远程主机计算机上运行，请使用 `http://{reComputer_IP_ADDRESS}:1880`，并将 `{reComputer_IP_ADDRESS}` 替换为 reComputer 的 IP 地址。

## 熟悉 Node-RED

现在您应该看到类似下图的结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Node-RED 编辑器概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

* **节点面板**: 用户可以从调色板中浏览并选择节点以添加到流程中的区域。
* **流程编辑器**: 用户在此工作区中可视化地连接节点以创建流程。
* **配置面板**: 用户可以在此部分配置选定节点的属性和设置。
* **设置按钮**: 允许用户访问并调整 Node-RED 编辑器的各种设置和偏好。
* **部署按钮**: 使用户能够将流程部署到 Node-RED 运行时，使其变为活动并可操作。

### 安装节点

有几种选项：一种是使用命令行，另一种是使用 Node-RED 编辑器。在这里，我将解释最简单的方法，即使用 Node-RED 编辑器。

- **步骤 1**: 点击右上角带有 **三条横线** 图标的设置按钮，然后选择“管理调色板”。

- **步骤 2**: 在调色板选项卡中点击“安装”选项卡。

- **步骤 3**: 在节点搜索栏中搜索节点，然后点击“安装”按钮进行安装。

- **步骤 4**: 从下拉警告窗口中点击 **安装** 按钮以确认安装。

- **步骤 5**: 等待安装完成，您应该看到安装按钮变为已安装。

- **步骤 6**: 您应该在侧边栏中看到已安装的节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>