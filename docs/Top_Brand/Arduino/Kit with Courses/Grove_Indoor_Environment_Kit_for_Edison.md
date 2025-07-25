---
description: Grove Indoor Environment Kit for Edison
title: Grove Indoor Environment Kit for Edison
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Indoor_Environment_Kit_for_Edison
last_update:
  date: 2/17/2023
  author: jianjing Huang
---

<!-- ---
name: Grove Indoor Environment Kit for Edison
category: Others
bzurl: https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html
oldwikiname:  Grove Indoor Environment Kit for Edison
prodimagename: Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG
surveyurl: https://www.research.net/r/Grove_Indoor_Environment_Kit_for_Edison
sku:  110060064
--- -->

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG)

Grove Indoor Environment Kit for Edison makes it easy to create complete indoor environment applications with Intel Edison and Arduino Breakout Board. With the Base Shield V2, developer can plug up to 11 different Grove sensors &amp; actuators quickly. We provide cool demo code which will be constantly updated, and it will be very easy to operate these sensors &amp; actuators without any programming experience.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html)

## What's included in the kit?

---

* [Base Shield V2](/Base_Shield_V2)  x1

* [Grove - Tempture&amp;Humidity Sensor (High-Accuracy &amp;Mini)](/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0)  x1

* [Grove - Moisture sensor](/Grove-Moisture_Sensor)  x1

* [Grove - Light Sensor](/Grove-Light_Sensor)  x1

* [Grove - UV Sensor](/Grove-UV_Sensor)  x1

* [Grove - PIR Motion Sensor](/Grove-PIR_Motion_Sensor)  x1

* [Grove - Encoder](/Grove-Encoder)  x1

* [Grove - Button](/Grove-Button)  x1

* [Grove - LCD RGB Backlight](/Grove-LCD_RGB_Backlight)  x1

* [Grove - Relay](/Grove-Relay)  x1

* [Grove - Servo](/Grove-Servo)  x1

* [Grove - Buzzer](/Grove-Buzzer)  x1

* [9V to Barrel Jack Adapter](https://www.seeedstudio.com/depot/9V-to-Barrel-Jack-Adapter-p-1481.html)  x1

* 26AWG Grove Cable  x10

* USB Cable  x1

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove-Indoor-Environment-Kit-for-Edison.jpg)

## Installing Edison Arduino IDE

---
Refer to Intel Edison offical site: [Edison Getting Started Guide](https://communities.intel.com/docs/DOC-23147)

1.Download the Edison Arduino IDE.(Note: Select your OS.)

2.Navigate to the folder where you downloaded the .zip Edison Arduino IDE

3.Right click on the .7z file,highlight “7-zip”, and select “Extract to “arduino-…”

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_Extract_7z.png)

4.Click through the folder that was created until you see the IDE “arduino.exe” file.Double-click this file and this window should open.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_ArduinoIDE.png)

## Install required drivers

---
1.Download [FTDI drivers](https://www.ftdichip.com/Drivers/CDM/CDM%20v2.10.00%20WHQL%20Certified.exe)

2.Right-click the .exe file you downloaded, which should be called “CDM…” and select “Run as administrator”.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver.jpg)

3.Click “Extract”.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install.jpg)

4.Click “Next”.

5.Click “Finish” when you see this screen.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install_ok.jpg)

6.Download [Intel Edison Drivers](https://communities.intel.com/docs/DOC-23242) to install the required RNDIS, CDC, and DFU drivers.

7.Double-click the .exe file to begin the install.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Intel_Edison_Driver.jpg)

## Hardware connection

---
Using 26AWG Grove Cable making the following connections:

<table>
  <tbody>
    <tr>
      <th>Grove Modules</th>
      <th>Connected to</th>
    </tr>
    <tr>
      <td width="200px">Temperature&amp;Humidity Sensor</td>
      <td width="100px">I2C</td>
    </tr>
    <tr>
      <td width="200px">Moisture Sensor</td>
      <td width="100px">A1</td>
    </tr>
    <tr>
      <td width="200px">Light Sensor</td>
      <td width="100px">A2</td>
    </tr>
    <tr>
      <td width="200px">UV Sensor</td>
      <td width="100px">A3</td>
    </tr>
    <tr>
      <td width="200px">PIR Motion Sensor</td>
      <td width="100px">D7</td>
    </tr>
    <tr>
      <td width="200px">Encoder</td>
      <td width="100px">D2</td>
    </tr>
    <tr>
      <td width="200px">Button</td>
      <td width="100px">UART(D1)</td>
    </tr>
    <tr>
      <td width="200px">LCD RGB Backlight</td>
      <td width="100px">I2C</td>
    </tr>
    <tr>
      <td width="200px">Relay</td>
      <td width="100px">D5</td>
    </tr>
    <tr>
      <td width="200px">Servo</td>
      <td width="100px">D6</td>
    </tr>
    <tr>
      <td width="200px">Buzzer</td>
      <td width="100px">D4</td>
    </tr>
  </tbody>
</table>

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_Indoor_Wire_Figure.png)

## Running Example

---
1.Open the web site: [Grove_Indoor_Environment_Demo](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo) to download the whole project.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Github_Demo.png)

2.Click **Tools &gt; Serial Port** and select the Com # that the Intel Edison is connected to

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Import_Indoor_Kit_Demo.png)

3.Click Sketch&gt;Import Library…&gt;Add Library and import the library downloaded at **step 1**

4.Click **File&gt;Examples&gt; Grove_Indoor_Environment_Demo** and select the demo Click **upload** icon

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Upload_Indoor_Kit_Demo.png)

5.Open **Serial Monitor**, it will print the sensors’ information:

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Serial_Monitor.png)

6.Rotate the Encoder to check the sensor value on the LCD.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Rotate_Encoder.png)

7.In the **“Send TextBox”**, you can enter the following command to operate the sensors and actuators:

_set [sensor][condition:&gt;, &lt; or =][ threshold],[actuator]=[action]_

<table>
  <tbody>
    <tr>
      <th>Example</th>
      <th>Description</th>
    </tr>
    <tr>
      <td width="300px">_set temp&gt;40, relay=1_</td>
      <td width="500px">if temperature is higher than 40℃, the relay opens.</td>
    </tr>
    <tr>
      <td width="300px">_set temp&gt;40, sleep=1_</td>
      <td width="500px">if temperature is &gt;40℃, nothing to do.</td>
    </tr>
    <tr>
      <td width="300px">_set humi&gt;60, buzzer=1_</td>
      <td width="500px">if humidity is &gt;60%, the buzzer beeps.</td>
    </tr>
    <tr>
      <td width="300px">_set light&gt;600, servo=90_</td>
      <td width="500px">if light intensity is &gt;600, the servo truns 90°.</td>
    </tr>
    <tr>
      <td width="300px">_set uv&gt;80, relay=0_</td>
      <td width="500px">if UV intensity is &gt;80, the relay closes.</td>
    </tr>
    <tr>
      <td width="300px">_set pir=1, buzzer=1_</td>
      <td width="500px">if people detected, the buzzer beeps.</td>
    </tr>
    <tr>
      <td width="300px">_set ms&gt;40, relay=1_</td>
      <td width="500px">if moisture is &gt;40, the relay opens.</td>
    </tr>
    <tr>
      <td width="300px">_set ssid=name, psw=password_</td>
      <td width="500px">set the wifi SSID and Password.you can open a web browser, and go to the IP address displayed on the Serial Monitor or LCD. The default port is 88. he default port is 88. Such as: 192.168.1.101:88</td>
    </tr>
  </tbody>
</table>

Note:

* The command should be ended with ‘/n’, so **“NewLine”** (in the Serial Monitor) should be selected.

* A actuator can only be controlled by a sensor. If A sensor wants to control a actuator(has be controlled by B sensor), B sensor should be set sleep.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_command.png)

8.WiFi connection. open the Serial Monitor, and set your ssid and password(as below). Check the local IP on the LCD or Serial Monitor. On a device connected on the same network, open a web browser, and go to the IP address above, you can see the sensor value.

_**Note: When visiting the web server, a port number(88)should be added,such as: 172.20.10.2:88.**_

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_SSID_PSW.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Local_IP.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Web_Server.png)

## Resource

---

* [Grove Indoor Environment Kit Source Code](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo)

* [Edison Getting Started Guide](https://communities.intel.com/community/makers/edison/getting-started)

* [Intel Edison Software &amp; Documentation](https://communities.intel.com/community/makers/edison/documentation)

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
