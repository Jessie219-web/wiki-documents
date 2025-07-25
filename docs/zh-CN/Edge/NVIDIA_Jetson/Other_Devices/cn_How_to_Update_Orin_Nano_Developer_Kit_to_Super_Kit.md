---
description: 本文介绍如何将现有的 Jetson Orin Nano 开发套件升级为 Jetson Orin Nano 超级开发套件。通过软件更新，用户可以增强系统的 AI 性能并体验更强大的计算能力。
title: 如何将 Jetson Orin Nano 开发套件升级为超级套件
keywords:
  - Edge reComputer
  - Jetson Orin Nano 超级开发套件
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp
slug: /cn/update_orin_nano_developer_kit_to_super_kit
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 什么是 Jetson Orin Nano 超级开发套件

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.png"/>
</div>

NVIDIA Jetson Orin Nano™ 超级开发套件是一款紧凑但功能强大的计算机，重新定义了小型边缘设备的生成式 AI。它提供高达 67 TOPS 的 AI 性能——比其前代产品提升了 1.7 倍，可无缝运行最流行的生成式 AI 模型，如视觉变换器、大型语言模型、视觉语言模型等。仅需 $249，它为开发者、学生和创客提供了最实惠且易于获取的平台，并支持 NVIDIA AI 软件和广泛的 AI 软件生态系统。现有的 Jetson Orin Nano 开发套件用户只需通过软件升级即可体验这种性能提升，现在每个人都可以通过生成式 AI 解锁新的可能性。

:::info
令人惊喜的是，Jetson Orin Nano 开发套件只需通过软件更新即可升级为 Jetson Orin Nano 超级开发套件。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
  </a>
</div>

## 如何升级为超级开发套件
只要您手中有一台 Nvidia Jetson Orin Nano 8GB，按照以下步骤即可完成升级：
- 第一步：连接硬件设备。
- 第二步：打开 SDKManager。
- 第三步：配置并刷写系统。
观看视频，沉浸式体验每一步操作。

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/VhuSCMM7iN0" title="将 Orin Nano 开发套件升级为超级套件" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Orin Nano 超级开发套件的实际性能

### 全性能释放

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/Xlr3gO7tRfM" title="Orin Nano 超级开发套件的功耗" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

使用烧机程序对 CPU 和 GPU 进行完全加载，此时模块的最大功耗达到 21W，接近 Jetson Orin NX 的功耗水平。

:::note
Jetson Orin CPU 和 GPU 烧机程序 [下载链接](https://github.com/anseeto/jetson-gpu-burn)。
:::

### 推理速度提升

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/gyHM9xJCPxw" title="在 Jetson Orin Nano 超级开发套件上运行 Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

在这里，我们使用 Ollama 加载 Llama3.2-3B 模型，并比较该模型在不同功耗模式下的推理速度。可以明显看出，在启用最大功耗的情况下，模型的推理速度显著加快，相较于前代产品提升了 1.28 倍。

:::note
参考 [本教程](https://www.jetson-ai-lab.com/tutorial_ollama.html) 学习如何快速在 Nvidia Jetson 上部署 Ollama。
:::

## 结论
Jetson Orin Nano 超级开发套件是您在边缘计算领域引领生成式 AI 开发的终极平台。现在正是开始行动的最佳时机，加入由 NVIDIA 支持的先进开发者和研究人员组成的多元化社区，共同解决现实世界中的物理 AI 挑战。
对于现有的 Jetson Orin Nano 开发套件用户，升级您的 JetPack SDK，立即解锁性能提升吧。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>