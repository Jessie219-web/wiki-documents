---
description: Getting Started
title: Quick Start Guide
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_getting_started
sidebar_position: 1
last_update:
  date: 11/11/2024
  author: Parker Hu
---

# reCamera Quick Start Guide

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

Welcome to reCamera! This guide will help you quickly set up your device and start using it to unlock powerful AI-Vision features. Whether you're a beginner or an experienced user, this step-by-step walkthrough will guide you through the installation, configuration, and first use.
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱</font></span></strong>
    </a>
</div>

## Step 1: Unboxing and Power On

Start by unpacking your reCamera. Inside the box, you should find:
- reCamera
- Type-C Cable
- Ethernet Cable

Make sure all parts are included.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

Simply power on the device with the type-C cable provided. When you see the green light is on, that means the reCamera is ready to connnect to the world. 


**Light Indicators Status**:
- The green light in the middle means power-on.
- The flashing red light stands for the heartbeat of CPU.
- The blue light stands for the status of emmc. It flahses when reading or writing the emmc.


## Step 2: Network Connection

There are multiple methods to setup the network for reCamera, you can freely choose the one that suits for you. 

### Method 1: Wired Network Configuration via USB cable

If the USB cable is directly connected to your PC, you can then visit ```192.168.42.1``` to view the page for reCamera then choose the desire network. If you encounter any problems, you can view the network troubleshoot page. 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

### Method 2: WIreless Network Configuration in AP mode

When power-on, reCamera will turn on the Access Point(AP) for you to change the network preference. Open your phone or laptop's Wi-Fi list, you should be able to see a Wi-Fi name called ```reCamera_******```. The naming system is "recamera_" + the last six digits of the mac address on this device. Default password is 
```12345678```.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

Connect to this AP, and a website should automatically pop out for you. If not, you can always type **192.168.16.1** in your browser to visit the page. Then you can select which wifi you want the reCamera to connect to. If you have more than one reCamera, you can refer to the [Device Management](#jump1) to find out which one is which. 

### Method 3: Ethernet Port Network Configuration

If you would like use ethernet port, you can use the cable in the box to connect to your router. Note, this is not a POE (Power over Ethernet). You still need the type-c to power on the device. You can unscrew the back of the camera and connect through the port.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

Once connected, you can find the IP of reCamera on your router backend, then visit the website and Node-red platform.

## SSH Remote Access

You can also visit the reCamera remotely, by using the following command:
```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

Default password is
```
recamera
```
Then hit ```Enter```, you should be able to now remotely control the reCamera.

### <span id="jump1"> Multi Devices Management </span>
If you have more than one reCamera, you can distinguish them by the mac address on the back of the device.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

Or, once you connect the device to your laptop through USB or AP, you can view the mac address by using the following command
```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Access reCamera Web Client

## Access pre-built Node-RED dashboard

We have integrated reCamera with the Node-red platform for you to develop and integrated more conveniently. With the network connected, you can visit the Node-red Dashboard by visiting the ```ip_address:1880``` in your browser. In here you can preview model, switch to other model, or even build out the application you need with all the handy nodes. Here is step by step instruction of how you can get the preview working.

<div style={{textAlign:'center'}}><iframe width={1000} height={600} src="https://www.youtube.com/embed/XdgCt44UR1M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

There are other models that you can replace:


| Model                              | Description                                                  | Download Link                                                |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| yolo11n_cv181x_int8.cvimodel       | [Ultralytics](https://www.ultralytics.com/) [YOLO11](https://github.com/ultralytics/ultralytics) | [Yolo11n Download](https://files.seeedstudio.com/wiki/reCamera/models/yolo11n_cv181x_int8.cvimodel) |
| yolov8n_cv181x_int8.cvimodel       | Ultralytics YOLOv8                                           | [Yolov8n Download](https://files.seeedstudio.com/wiki/reCamera/models/yolov8n_cv181x_int8.cvimodel) |
| person_cv181x_int8.cvimodel        | Person recognition model                                     | [Person Detect Download](https://files.seeedstudio.com/wiki/reCamera/models/person_cv181x_int8.cvimodel) |
| gender_cv181x_int8.cvimodel        | Human Gender Identification Models                           | [Gender Detect Download](https://files.seeedstudio.com/wiki/reCamera/models/gender_cv181x_int8.cvimodel) |
| gesture_cv181x_int8.cvimodel       | Hand gesture recognition                                     | [Gesture Detect Download](https://files.seeedstudio.com/wiki/reCamera/models/gesture_cv181x_int8.cvimodel) |
| digital_meter_cv181x_int8.cvimodel | Digit recognition model                                      | [Digital Detect Download](https://files.seeedstudio.com/wiki/reCamera/models/digital_meter_cv181x_int8.cvimodel) |

Yolo11n model classes:

```json
person, bicycle, car, motorcycle, airplane, bus, train, truck, boat, traffic light, fire hydrant, stop sign, parking meter, bench, bird, cat, dog, horse, sheep, cow, elephant, bear, zebra, giraffe, backpack, umbrella, handbag, tie, suitcase, frisbee, skis, snowboard, sports ball, kite, baseball bat, baseball glove, skateboard, surfboard, tennis racket, bottle, wine glass, cup, fork, knife, spoon, bowl, banana, apple, sandwich, orange, broccoli, carrot, hot dog, pizza, donut, cake, chair, couch, potted plant, bed, dining table, toilet, tv, laptop, mouse, remote, keyboard, cell phone, microwave, oven, toaster, sink, refrigerator, book, clock, vase, scissors, teddy bear, hair drier, toothbrush
```

We also provided a build-in dashboard UI example where you can preview the video stream, change the desire models. You can freely twist and integrate with your own application. [More work in progress...]

## OS Upgrade Guideline

You can check out the latest version of the [reCamera OS here.](https://github.com/Seeed-Studio/reCamera-OS)

Manually update the latest OTA firmware:
```bash
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

/mnt/system/upgrade.sh start
```

Manually update the specified version of OTA firmware. You can also update the system version in your branch.

```bash
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.1.3/sg2002_reccamera_emmc_md5sum.txt #Replace it with your branch link

/mnt/system/upgrade.sh start
```

Update the firmware manually using the local ota package.

```bash
/mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```
You can change system files to be readable or writable by typing `rootfs_rw on/off`.

Manually restore factory Settings.

```bash
/mnt/system/upgrade.sh recovery
```


## Multi Devices Management 

If you have more than one reCamera, you can distinguish them by the mac addrss on the back of the device.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

Or, once you connect the device to your laptop through USB or AP, you can view the mac address by using the following command
```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Camera Orientation
The default camera view orientation is like the image below where type-c is facing down. Please be awared that other orientation might effect the accuracy of model based on how you trained the detection model. 

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## Resources

[reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

[reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)


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
