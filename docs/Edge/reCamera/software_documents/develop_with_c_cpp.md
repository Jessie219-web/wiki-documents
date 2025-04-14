---
description: Providing documentation and info for C/C++ developers
title: Develop with C/C++
keywords:
  - Edge
  - reCamera
  - C
  - CPP
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_develop_with_c_cpp
sidebar_position: 5
last_update:
  date: 02/17/2025
  author: Parker Hu
---

# Develop with c&cpp

recamera has limited resources and no compilation environment for C code is configured. If you want to use `C&CPP` to develop applications on the recamera, you need to configure the cross-compilation environment on a linux machine.

 **Step1**:Configuring the build environment

```bash
mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.1.5/reCameraOS_sdk_v0.1.5.tar.gz

tar -xzvf reCameraOS_sdk_v0.1.5.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```

**Step2**:Compiling the instance program

```bash
cd $HOME/recamera/sscma-example-sg200x/solutions/helloworld
mkdir build && cd build
cmake ..
make
```

You can view the file properties by typing `file helloworld`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/1.png" /></div>

```bash
scp helloworld recamera@{recamera_IP}:/home/recamera/
```

Transfer the file to your recamera device to run, as shown in the figure below, and the cross-compile environment for your C code is configured.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/2.png" /></div>

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