---
title: Grove - Servo
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Servo/
slug: /Grove-Servo
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove—Servo.jpg)

Grove - Servo is DC motor with gearing and feedback system. It is used in driving mechanism of robots. The module is a bonus product for Grove lovers. We regulated the three-wire servo into a Grove standard connector. You can plug and play it as a typical Grove module now, without jumper wires clutter.

But if you feel more like a proto servo, check out EMAX 9g ES08A High Sensitive Mini Servo. They are the same model, both of good quality and burden-free price.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Servo-p-1241.html)

Feature
---

* Small module
* Grove Compatible Interface
* Easy to use

Specification
---

<table cellSpacing={0} width="80%">
  <tbody>
    <tr>
      <th scope="col"> Item </th>
      <th scope="col"> Min </th>
      <th scope="col"> Typical </th>
      <th scope="col"> Max </th>
      <th scope="col"> Unit </th>
    </tr>
    <tr>
      <th> Working Voltage </th>
      <td> 4.8 </td>
      <td> 5.0 </td>
      <td> 6.0 </td>
      <td> V </td>
    </tr>
    <tr>
      <th> Torque </th>
      <td colSpan={3}> 1.5/1.8 </td>
      <td> Kg.cm </td>
    </tr>
    <tr>
      <th scope="row"> Speed </th>
      <td colSpan={3}> 0.12/0.16 </td>
      <td> s/60° </td>
    </tr>
    <tr>
      <th scope="row"> Size </th>
      <td colSpan={3}> 32X11.5X24 </td>
      <td> mm </td>
    </tr>
    <tr>
      <th scope="row"> Weight </th>
      <td colSpan={3}> 8.5 </td>
      <td> g </td>
    </tr>
  </tbody>
</table>

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play with Arduino

:::note
The method of connecting the servo described in this article is not the most proper or recommended approach. For servos—especially when using multiple servos simultaneously—a dedicated servo driver board should be used to provide additional power to the servos, with the development board controlling the servos via the driver board. Since Seeed Studio does not currently offer a suitable driver board, this article demonstrates connecting the servo directly to the main board as a usage example only. This approach is **not recommended** for actual projects.
:::

Here we will show you how this Grove - Servo works via a simple demo. First of all, we need to prepare the below stuffs:

| Seeeduino V4 | Grove - Servo | Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

The Servo has three wires: power, ground, and signal. The power wire is typically red, and should be connected to the 5V pin on the Arduino/Seeeduino board. The ground wire is typically black or brown and should be connected to a ground pin on the Arduino board. The signal pin is typically yellow, orange or white and should be connected to  **D5** on the Arduino board. We can change to the digital port as we like. But don't forget to change the port number in the definition of the demo code at the same time.

* Connect the module to **D5** port of Base Shield.
* Plug Grove- Base Shield into Arduino.
* Connect Arduino to PC via a USB cable.

#### Software

* Let's sweep the shaft of a servo back and forth across 180 degrees by using [Adruino Servo Library](https://arduino.cc/en/Reference/Servo).
* Open the code directly by the path: **File → Examples →Servo→Sweep**.

  ![](https://files.seeedstudio.com/wiki/Grove-Servo/img/library%20example.jpg)

```cpp
/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 https://arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(5);  // attaches the servo on pin 5 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
```

* Upload the sketch. We can see the servo sweep.

### Play with Codecraft

#### Hardware

**Step 1.** Connect Grove - Servo to port D5 in a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::
**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![servo](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo.png)

Upload the program to your Arduino/Seeeduino.

:::tip
When the code finishes uploaded, you will see the servo sweep.
:::

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

:::note
The method of connecting the servo described in this article is not the most proper or recommended approach. For servos—especially when using multiple servos simultaneously—a dedicated servo driver board should be used to provide additional power to the servos, with the development board controlling the servos via the driver board. Since Seeed Studio does not currently offer a suitable driver board, this article demonstrates connecting the servo directly to the main board as a usage example only. This approach is **not recommended** for actual projects.
:::


#### Hardware

* **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Servo|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|

* **Step 2**. Plug the Grove Base Hat into Raspberry.
* **Step 3**. Connect the Grove - Servo to port 12 of the Base Hat.
* **Step 4**. Connect the Raspberry Pi to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo_Hat.jpg)

:::note
For step 3 you are able to connect the servo module to **any GPIO Port** but make sure you change the command with the corresponding port number.
:::

#### Software

:::tip
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::
* **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
* **Step 2**. Download the source file by cloning the grove.py library.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python3 grove_servo.py 12

```

Following is the grove_servo.py code.

```python

import RPi.GPIO as IO
import sys
import time
from numpy import interp

IO.setwarnings(False)
IO.setmode(IO.BCM)

class GroveServo:
    MIN_DEGREE = 0
    MAX_DEGREE = 180
    INIT_DUTY = 2.5

    def __init__(self, channel):
        IO.setup(channel,IO.OUT)
        self.pwm = IO.PWM(channel,50)
        self.pwm.start(GroveServo.INIT_DUTY)

    def __del__(self):
        self.pwm.stop()

    def setAngle(self, angle):
        # Map angle from range 0 ~ 180 to range 25 ~ 125
        angle = max(min(angle, GroveServo.MAX_DEGREE), GroveServo.MIN_DEGREE)
        tmp = interp(angle, [0, 180], [25, 125])
        self.pwm.ChangeDutyCycle(round(tmp/10.0, 1))

Grove = GroveServo

def main():
    if len(sys.argv) < 2:
        print('Usage: {} servo_channel'.format(sys.argv[0]))
        sys.exit(1)

    servo = GroveServo(int(sys.argv[1]))

    while True:
        for x in range(0, 180):
            print x, "degree"
            servo.setAngle(x)
            time.sleep(0.05)
        for x in range(180, 0, -1):
            print x, "degree"
            servo.setAngle(x)
            time.sleep(0.05)

if __name__ == '__main__':
    main()



```

:::tip
    If everything goes well, you will be able to see the servo sweep.
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_servo.py 12
0 degree
1 degree
2 degree
3 degree
4 degree
5 degree
6 degree
7 degree
8 degree
9 degree
10 degree
11 degree
12 degree
13 degree
14 degree
15 degree
16 degree
17 degree
18 degree
19 degree
20 degree
21 degree
^CTraceback (most recent call last):
  File "grove_servo.py", line 81, in <module>
    main()
  File "grove_servo.py", line 74, in main
    time.sleep(0.05)
KeyboardInterrupt


```

You can quit this program by simply press ++ctrl+c++.

## Resources

* **[Document]** [Understanding RC Servos](http://www.rchelicopterfun.com/rc-servos.html)
* **[Library]**[Arduino Tutorial - Servo Library](https://www.arduino.cc/en/Reference/Servo)
* **[Library]** [CodeCraft Code](https://files.seeedstudio.com/wiki/Grove-Servo/res/Servo.zip)
* **[Demo]** [Digital/Analog Clock - Arduino + PaperCraft](https://www.instructables.com/id/DigitalAnalog-Clock-Arduino-PaperCraft/?ALLSTEPS)
* **[Demo]** [Low Cost Hobby Servo XY Table](https://www.instructables.com/id/Low-Cost-Hobby-Servo-XY-Table/?ALLSTEPS)

## Projects

**Servomotor Grove module**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/XNPn7AUmgqU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8GTej6Lv8us" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

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
