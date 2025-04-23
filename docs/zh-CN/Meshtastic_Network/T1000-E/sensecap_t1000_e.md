---
description: SenseCAP T1000-E Tracker Meshtastic入门指南
title: T1000-E Tracker入门指南
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e_cn
sidebar_position: 2
last_update:
  date: 7/1/2024
  author: Jessie
---

## 操作视频


### Part 1: 开箱设置

<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Part 2: 状态指示

<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Part 3: 固件烧录

<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Part 4: 故障排查

<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 入门指南

下载 `Meshtastic` App:

* [IOS App](https://meshtastic.org/docs/category/apple-apps/)
* [Android App](https://meshtastic.org/docs/category/android-app/)




### 设备开机

短按一次按钮开启设备，会有一段上升的提示音，LED 灯常亮约 1 秒，然后开始随机闪烁。


:::tip 提示
如果按下按键设备没有反应，请先给设备充电。
:::

### 通过App连接

* 打开Meshtastic APP, 并打开APP的蓝牙权限。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* 在蓝牙界面选择目标设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>


* 输入PIN码(默认为`123456`) ，然后点击连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">


* 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* 输入PIN码(默认为`123456`) ，然后点击连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>
</Tabs>





### 配置参数



要开始使用 Mesh 网络通信，您必须设置所在区域。该设置决定设备使用的频率范围，应根据您的地理位置进行选择。



<Tabs>
<TabItem value="ios" label="IOS App">


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>




**Region List**



|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902\.0 - 928.0|100|30|
|EU\_868|European Union 868MHz|869\.4 - 869.65|10|27|


参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) 获取完整列表.


:::info
**EU_868**区域必须遵守每小时 10% 的占空比限制，每分钟按滚动 1 小时计算。如果达到限制，设备将暂停发射，直到允许为止。
:::


现在你已经设置好了设备的 LoRa Region,已经可以正常使用设备，更多的配置请见官方文档[LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/).

### 传感器配置

|传感器|描述|
|-|-|
|温度|✅|
|光照|设备支持，但目前APP不支持|
|加速度计|-|


**温度传感器配置**


<Tabs>
<TabItem value="ios" label="IOS App">

`设置` -> `检测传感器` -> `启用`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">

`设置` -> `检测传感器` -> `启用`.



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>


</TabItem>
</Tabs>




**蜂鸣器和LED配置**

||Type|Output PIN|
|-|-|-|
|蜂鸣器|PWM buzzer|25|
|LED|-|24|



<Tabs>
<TabItem value="ios" label="IOS App">

`设置` -> `外部通知` -> 启用 `GPIO` -> 配置 `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">

`设置` -> `外部通知` -> 启用 `GPIO` -> 配置 `Output Pin GPIO`.



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>


</TabItem>
</Tabs>



更多详细的配置请见官方文档[外部通知配置](https://meshtastic.org/docs/configuration/module/external-notification/).

:::tip
更新设备配置后，设备将重新启动，这可能需要一些时间，请耐心等待重新连接。
:::


## 固件烧录



### 查看当前固件版本

`设置` -> `固件升级`, 可以看到设备当前的固件版本.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>



### <div class="danger">⚠️请勿烧录以下固件</div>


:::danger 警告
请勿烧录 T1000-E以外的其他固件，这可能会导致设备死机。
:::



* nrf52_promicro_diy_tcxo<br/>
* nrf52_promicro_diy_xtal<br/>
* Dongle_nRF52840-pca10059-v1<br/>
* feather_diy<br/>
* TWC_mesh_v4<br/>
* wio-sdk-wm1110<br/>
* wio-tracker-wm1110<br/>
* xiao_ble


### 烧录固件

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### Step 1: 进入DFU模式


<Tabs>
<TabItem value="method1" label="Method 1">


访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

将设备插入电脑，选择 `Seeed Card Tracker T1000-E`，选择相应的固件版本（推荐使用最新的stable版本），然后点击 `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`, 然后你的电脑会出现一个名为 `T1000-E xxx` 的串口, 点击连接，设备的LED会常亮绿灯，表示设备已经进入DFU模式，并且你的电脑会出现一个名为`T1000-E` 的盘。



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>



</TabItem>

<TabItem value="method2" label="Method 2">

按住设备的按钮不放，然后**快速**连接两次磁吸线（一定要快速连接），设备的LED会常亮绿灯，表示设备已经进入DFU模式，并且你的电脑会出现一个名为`T1000-E` 的盘。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>



#### Step 2: 擦除flash


:::caution note
在烧录固件之前，为避免大版本的兼容性问题，请先擦除设备的flash.
:::

点击 `trash` 标识.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

下载擦除的uf2文件，然后将其拖动到`T1000-E`盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

擦除过程可能会耗费一些时间，你可以打开serial monitor查看擦除是否成功完成。


#### Step 3: 烧录固件


选择相应的固件版本（推荐使用最新的stable版本）然后下载 `UF2`文件.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>


将下载的固件拖动到`T1000-E`盘中，设备会自动开始升级。



## FAQ

* **多个设备时如何检查设备名称**


 访问[Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 连接设备到电脑，点击`Open Serial Monitor`, 搜索关键词 `using nodenum`即可看到当前设备的名称.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

* **如何重启设备**

 按住设备按键不放，然后连接磁吸线。

* **设备绿灯常亮**

 表示设备处于DFU模式，重启设备即可退出此模式。

## Troubleshooting



### 1.设备刚开箱就无法开机

* 连接磁吸线，充电两小时

* 更换磁吸线

* 如仍无法开机，请见3


### 2.设备卡在bootloop


**现象描述:**

设备反复重启，将设备连到电脑上时，发现串口不断断开重连。

**解决方法:**

* 手动进DFU模式：按住设备的按钮不放，然后**快速**连接两次磁吸线（一定要快速连接），设备的LED会常亮绿灯，表示设备已经进入DFU模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

* Step 2: ！重要步骤：[擦除flash](https://wiki.seeedstudio.com/sensecap_t1000_e_cn/#step-2-擦除flash).

* Step 3: [烧录固件](https://wiki.seeedstudio.com/sensecap_t1000_e_cn/#step-3-烧录固件).




### 3.设备`死机`

**现象描述:**

无论是充电还是按按键等操作，设备都没有任何反应，无法连接。

**1) 如果设备仍然能够手动进DFU模式，请尝试烧录bootloader**


#### 烧录Bootloader




* [Bootloader下载](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger 注
在烧录Bootloader过程中，请保持设备连接，不要在中途插拔磁吸线。
:::

**Step1: 安装Adafruit-nrfutil**

**Prerequisites**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)



<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

建议使用以下方法安装最新版本:

```
pip3 install --user adafruit-nrfutil
```


  
</TabItem>

<TabItem value="sou" label="Installing from Source">

如果您在 PyPi 安装时遇到问题或想要修改该工具，请使用此方法。首先克隆此 repo 并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用`python3`，但如果您使用的是 Windows 系统，则可能需要将其更改为`python`，因为 Windows 系统上安装的 Python 3.x 仍然使用名称`python.exe`。

要在用户的主目录中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```
如果您在运行 `pip3 install` 时遇到权限错误，则说明您的 `pip3` 版本较旧，或设置为尝试安装在系统目录中。在这种情况下，请使用 `--user` 参数：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果要安装在系统目录中（通常不推荐）：
```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```


要生成该实用程序的自包含可执行二进制文件（Windows 和 MacOS），请运行以下命令：
```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```
您可以在`Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`中找到 `.exe` 文件（如果您使用的是 Windows 系统，则为`.exe`）。
为了方便起见，请将其复制或移动到其他位置，例如 %PATH% 中的目录。

</TabItem>
</Tabs>


**Step2: 查看设备串口号**

将设备连接到电脑，查看串口号：

Windows用户可直接在设备管理器中查看COM口号；

MAC OS 可在终端中查看：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Step3: 烧录 bootloader**

在终端或命令提示符中，导航到下载Bootloader包的目录下，并执行以下命令（注意替换正确的端口号）：

* **For Windows**: 
```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

* **For others**: 
```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```




<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>


Bootloader烧录完成后，请按照步骤[擦除flash](https://wiki.seeedstudio.com/sensecap_t1000_e_cn/#step-2-擦除flash)和[烧录固件](https://wiki.seeedstudio.com/sensecap_t1000_e_cn/#step-3-烧录固件)。




**2) 设备无法手动进入DFU模式，但是设备的串口能被识别**

* 打开任意一个串口工具

* 波特率设置为 `1200`.

* 连接设备到电脑，点击连接串口，此时设备的LED会短暂闪烁一下，持续点击连接，直到设备的LED常亮绿灯，此时表示设备已经进入DFU模式，接下来请按照步骤[烧录Bootloader](https://wiki.seeedstudio.com/sensecap_t1000_e_cn/#烧录bootloader) -> [擦除flash](https://wiki.seeedstudio.com/sensecap_t1000_e_cn/#step-2-擦除flash) -> [烧录固件](https://wiki.seeedstudio.com/sensecap_t1000_e_cn/#step-3-烧录固件)


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) 如果设备无法手动进入DFU，并且无法识别到串口，请联系技术支持：support@sensecapmx.com**


### 固件烧录失败



* **No data received on serial port**


 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 请先检查设备是否处于DFU模式，在DFU模式时，设备的绿灯会常亮。

* **Can't open serial port**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 请先检查磁吸线是否连接良好，或者尝试使用其他串口。






## Resource

[Meshtastic Doc](https://meshtastic.org/docs/introduction/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


