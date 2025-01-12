---
description: This article explains how to upgrade the existing Jetson Orin Nano Developer Kit to the Jetson Orin Nano Super Developer Kit. Through a software update, users can enhance the system's AI performance and experience more powerful computational capabilities.
title: 如何将 Jetson Orin Nano 开发者套件更新为 Super Kit
keywords:
  - Edge reComputer
  - Jetson Orin Nano Super Developer Kit
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp
slug: /cn/update_orin_nano_developer_kit_to_super_kit
last_update:
  date: 1/9/2025
  author: Frank
---

## 什么是 Jetson Orin Nano Super 开发套件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.png" style={{width:1000, height:'auto'}}/></div>

NVIDIA Jetson Orin Nano™ Super 开发套件是一款结构紧凑但功能强大的计算机，它重新定义了小型边缘设备的生成式人工智能。它提供了高达67 TOPS的AI性能，比前代产品提高了1.7倍，能够无缝运行最受欢迎的生成式AI模型，如视觉变换器、大型语言模型、视觉-语言模型等。仅售249美元，它为开发者、学生和创客提供了最实惠且易于访问的平台，并支持NVIDIA AI软件和广泛的AI软件生态系统。现有的Jetson Orin Nano 开发套件用户只需通过软件升级即可体验到这种性能提升，现在每个人都可以利用生成式AI解锁新的可能性。

:::note注意
可以通过软件更新将 Jetson Orin Nano Super Developer Kit 升级为 Jetson Orin Nano Developer Kit。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
  </a>
</div>

## 如何更新到 Super Developer Kit

只要您手中有 Nvidia Jetson Orin Nano 8GB，就可以按照以下步骤进行升级:

- 第一步：连接硬件设备。
- 第二步：打开 SDKManager。
- 第三步：配置并刷新系统。
 观看视频，可深入了解每个步骤。

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/VhuSCMM7iN0" title="Update Orin Nano Developer Kit to Super Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Orin Nano Super Developer Kit 的实际性能

### 完整的性能释放

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/Xlr3gO7tRfM" title="Power Consumption of Orin Nano Super Developer Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

使用烧录程序全面负载CPU和GPU，在该模式下，模块的最大功耗达到21W，接近Jetson Orin NX的功耗水平。

:::tip提示
Jetson Orin cpu 和 gpu 烤机程序 [下载链接](https://github.com/anseeto/jetson-gpu-burn).
:::

### 推理速度的提升

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/gyHM9xJCPxw" title="Ollama on Jetson Orin Nano Super Developer Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

在这里，我们使用Ollama加载Llama3.2-3B模型，并比较不同功耗模式下模型的推理速度。很明显，在最大功耗启用的情况下，模型的推理速度明显更快，与前代相比有1.28倍的提升。

:::note注意
参考 [这个教程](https://www.jetson-ai-lab.com/tutorial_ollama.html) 了解如何快速在Nvidia Jetson上部署Ollama
:::

## 结论

Jetson Orin Nano Super开发者套件是您在边缘计算领域引领生成式AI开发的终极平台。现在是开始并加入活跃且多元化的高级开发者和研究人员社区的最佳时机，与NVIDIA一起解决物理AI的实际挑战。

对于现有的Jetson Orin Nano 开发套件用户，立即升级您的JetPack SDK以解锁提升的性能。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品体验尽可能顺畅。我们提供几种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
