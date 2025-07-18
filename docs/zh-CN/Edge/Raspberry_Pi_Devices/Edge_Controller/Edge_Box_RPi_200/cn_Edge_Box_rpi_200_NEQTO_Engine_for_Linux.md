---
description: 在 EdgeBox-RPI-200 上使用 NEQTO Engine for Linux 入门
title: 在 EdgeBox-RPI-200 上使用 NEQTO Engine for Linux 入门
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/NEQTO_Engine_for_Linux_EdgeBox-RPI-200
last_update:
  date: 05/15/2025
  author: Kazuhiro Ozuchi
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

NEQTO 是一个轻量级且安全的软件包，允许企业远程安装和配置其边缘设备上的软件。通过即插即用的平台连接器和内置的软件生命周期管理，NEQTO 使企业能够为终端用户提供改进的软件服务。

安装了 NEQTO 的设备可以通过 API 或现成的 NEQTO 控制台进行管理，控制台包括数据存储、警报和看门狗监控的可选服务。企业可以通过几乎即时的安装将 AIoT 启用到任何 Linux 设备上，并与任何本地或云服务器实现无缝数据集成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## 前置条件

### 支持的硬件

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">EdgeBox-RPI-200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

- （任何 Linux 机器）

:::tip
- 支持的架构：armv6l（32 位）、armv7l（32 位）、aarch64（64 位）、x86_64（64 位）
- 所需磁盘空间：≥ 32 MB
- 所需 RAM 空间：≥ 4MB（默认设置下）
- 网络通信接口：必须配备物理网络适配器。
- 显示器、键盘、鼠标（可选）
:::

## 入门
### 硬件连接

请参考 Getting Started Edge Box RPI-200 (https://wiki.seeedstudio.com/Edge_Box_introduction/)

### 注册 NEQTO 账户：
- 第 1 步：访问此页面 (https://console.neqto.com/register) 注册 NEQTO 账户
- 第 2 步：输入您的电子邮件地址，创建密码并继续
- 第 3 步：通过收到的激活邮件验证账户

### 安装 NEQTO Linux

1. 在 NEQTO 控制台中选择 `Manage API Keys for Linux-based Device`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. 点击 `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

然后 API Key 将会显示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

3. 使用 curl 或 wget 下载 `NEQTO Engine Linux Installer`。

    这里使用 wget 命令。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

复制 `Installer of NEQTO Engine for Linux` 的 `下载链接`，并将其粘贴到 "wget " 后。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be384ccae06004c6d972d.png" alt="pir" width={600} height="auto" /></p>

安装程序下载成功

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be2f5ccae06004c6d9725.png" alt="pir" width={600} height="auto" /></p>

4. 在运行 NEQTO Engine for Linux 的安装程序之前，使用 chmod 命令更改下载的安装程序 (`neqto-daemon-install.latest.sh`) 的执行权限。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be308ccae06004c6d9726.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

5. 从 NEQTO 控制台的 `API Keys for NEQTO Engine for Linux` 中复制 `API Key`，并将其粘贴到 `sudo ./neqto-daemon-install.latest.sh -k ` 后。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be313ccae06004c6d9727.png" alt="pir" width={600} height="auto" /></p>

6. 执行后，将显示重要注意事项。请检查并在同意后输入 "agree"。随后将执行设备注册，并继续软件安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be31dccae06004c6d9728.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. 请等待直到显示最终状态 `Installation completed successfully!`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be329ccae06004c6d9729.png" alt="pir" width={600} height="auto" /></p>

确认设备已在 NEQTO 控制台上注册

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc577ccae06004c6d9713.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. 点击 `GROUPS` 下的 `ADD GROUP`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9ee5ccae06004c6d96bf.png" alt="pir" width={600} height="auto" /></p>

2. 在 `Name` 中输入 `EdgeBox-RPI-200`，然后点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9f21ccae06004c6d96c1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9fa0ccae06004c6d96c2.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. 选择你创建的 `EdgeBox-RPI-200`，然后点击 `SCRIPTS`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc9b3ccae06004c6d9714.png" alt="pir" width={600} height="auto" /></p>

4. 点击 `ADD SCRIPT`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd119ccae06004c6d9715.png" alt="pir" width={600} height="auto" /></p>

5. 在 `Name` 字段中输入 `Hello World`，然后点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd134ccae06004c6d9716.png" alt="pir" width={600} height="auto" /></p>

6. 将 [示例代码](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) 从 `Getting Started` 复制并粘贴到 NEQTO 控制台脚本编辑器中，然后点击 `Save`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd142ccae06004c6d9717.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. 点击 `TEMPLATES`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd156ccae06004c6d9718.png" alt="pir" width={600} height="auto" /></p>

然后点击 `ADD TEMPLATE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd166ccae06004c6d9719.png" alt="pir" width={600} height="auto" /></p>

8. 设置 `DEVICE INFORMATION` 如下：

    - 在 `Name` 字段中输入 `EdgeBox-RPI-200 Template`

    - 在 `Firmware Type` 字段中选择 `Linux-based device`

    - 在 `Firmware Version` 字段中选择最新版本

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd177ccae06004c6d971a.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. 对于 `OPTIONS`，在 `Script` 字段中选择 `Hello World`，然后点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd186ccae06004c6d971b.png" alt="pir" width={600} height="auto" /></p>

10. 点击 `NODES`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd195ccae06004c6d971c.png" alt="pir" width={600} height="auto" /></p>

然后点击 `ADD NODE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd19eccae06004c6d971d.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. 设置 `META DATA` 如下：

    - 将 `Name` 字段设置为 `EdgeBox-RPI-200`

    - 将 `Template` 字段设置为 `EdgeBox-RPI-200 Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1adccae06004c6d971e.png" alt="pir" width={600} height="auto" /></p>

12. 在 `DEVICE INFORMATION` 中选择你刚刚注册的设备，然后点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1baccae06004c6d971f.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1c8ccae06004c6d9720.png" alt="pir" width={600} height="auto" /></p>

13. 在 EdgeBox-RPI-200 的终端上输入 `tail -F /tmp/neqto/log/neqto.log`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be347ccae06004c6d972b.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. 在 NEQTO 控制台上运行 `Reload Script` 后，你可以在 EdgeBox-RPI-200 的终端上看到 `Hello World!!!`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1eaccae06004c6d9721.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660aad1accae06004c6d96fb.png" alt="pir" width={600} height="auto" /></p>

## 更多信息 / 故障排查

- [NEQTO 支持](https://support.neqto.com/hc/en-us)
- [支持指南](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## 资源

- [NEQTO 资源中心](https://docs.neqto.com/docs/en/linux/software/requirements)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>