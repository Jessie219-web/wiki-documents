---
description: Explore the world of RNDIS and 4G LTE on Raspberry Pi. This guide provides step-by-step instructions for configuring cellular connectivity, opening up a world of possibilities for your projects.

title: Mobile Internet for Your Pi - RNDIS 4G LTE Setup

keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - RNDIS
  - Mobile Data
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.webp
slug: /raspberry_pi_4g_hat_rndis_mobile_internet
last_update:
  date: 12/13/2024
  author: Kasun Thushara
---

## Introduction

**RNDIS (Remote Network Driver Interface Specification)** is a protocol that allows USB-connected devices, like the Quectel EG25-G 4G module, to act as network interfaces. By enabling RNDIS on a Raspberry Pi, the 4G module can provide cellular internet connectivity to the Pi. This setup is widely used in IoT applications, such as creating portable internet routers, IoT gateways, and remote monitoring systems. The Raspberry Pi communicates with the 4G module using AT commands to configure features like RNDIS mode, GNSS, and SMS. This approach simplifies internet access in scenarios where traditional wired or Wi-Fi connections are unavailable.

## Hardware Preparation

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


## The Hardware Setup

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

Setting up a Raspberry Pi for networking via RNDIS (Remote Network Driver Interface Specification) using **AT commands**  involves using Quectel Module.

:::note
If the necessary drivers for communicating with AT commands are not installed, you will need to [install them](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).
:::

##  Network Configuration

### Step 1 : Open Minicom on Raspberry Pi

```bash
sudo minicom -D /dev/ttyUSB2
AT
```

### Step 2 : Enable RNDIS Mode

```bash
AT+QCFG="usbnet",1
```

### Step 3: Verify the mode 

```bash
AT+QCFG="usbnet"?
```
It should return **usbnet,1**, indicating RNDIS is active.

### Step 4: Check Network Interfaces

```bash
ifconfig
```

You should see a new interface, usb0 or eth1, which is the RNDIS network interface. In this case it is usb0.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ifconfig_usb0.PNG" 
    style={{ width: 600}} 
  />
</div>


### Step 5: To configure the network interface for internet access, use DHCP:

```bash
sudo dhclient usb0
sudo ip link set usb0 up
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb0-dhcp.png" 
    style={{ width: 600}} 
  />
</div>

### Step 6: Ensure that your routing is set up correctly for internet access:

```bash
sudo ip route add default via 192.168.225.1 dev usb0
```
Change the gateway according to your usb0 IP.

### Step 7: Add DNS entries for name resolution. 

**Edit the /etc/resolv.conf file to use Google's DNS:**

```bash
sudo nano /etc/resolv.conf
```

### Step 8: Add these 2 lines and save

```bash
nameserver 8.8.8.8
nameserver 8.8.4.4
```

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/GoogleDNS.PNG" 
    style={{ width: 600}} 
  />
</div>

### Step 9: Make DNS settings persistent

```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
```

### Step 10: Add on [main] and save 

```bash
dns=none
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/DNS.PNG" 
    style={{ width: 600}} 
  />
</div>

### Step 11: Restart NetworkManager

```bash
sudo systemctl restart NetworkManager
```

### Step 12: Test the Connection 

```bash
ping -I usb0 8.8.8.8
nslookup google.com
```
Once successfully connected to the mobile network using the 4G LTE HAT, the possibilities are truly limitless. You can establish **MQTT connections** for IoT messaging, communicate seamlessly with **cloud services** for data processing, or set up an **FTP server** for remote file transfers. This setup transforms your Raspberry Pi into a powerful, portable gateway for diverse applications in IoT, automation, and beyond.

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