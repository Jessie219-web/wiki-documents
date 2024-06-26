---
description: Grove-Single Axis Analog Gyro
title: Grove-Single Axis Analog Gyro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Single_Axis_Analog_Gyro
last_update:
  date: 1/29/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Axis_Analog_Gyro_01.jpg)

The Grove – Signal Axis Analog Gyro is based on an angular velocity sensor (Murata-ENC-03R) that uses the phenomenon of Coriolis force. It can only measure the X-axis angular velocity, which is different from other 3-Axis gyro, but with a higher speed. It can be used for the position control and attitude control like the self-balanced 2WD.

Model: [SEN05091P](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

## Feature

- Input Voltage: 3.3V/5V

- Standard Grove Interface

- Light Weight

- High Speed

- Measure X-axis Angular Velocity

## Demonstration

### With [Arduino](https://www.arduino.cc/)

The module detects one-axis rotation with analog signal.
High-pass filter and low-pass filter circuit are applied to reduce the temperature drift and suppress the output noise.
Before the measurement of the angular velocity, a reference value(the sensor output at Angular Velocity=0) is required.
This value is 1.35V in default. But in order to get more accurate reference values, before the measurement,a calibration is necessary.
In this calibration, the output voltage when angular velocity =0 been sampled 200 times,
and then the average of these data will be treated as the reference value.

1.Connect it to A0 port of  [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/), of cause any pin of the analog pins would be OK.

2.Plug the Grove - Base Shield into Arduino/Seeeduino and connect them to PC using a USB cable.

3.Upload the below code.Please click [here](https://seeeddoc.github.io/Upload_Code/) if you do not know how to upload.

``` c++
    int sensorPin = A0; // select the input pin for the sensor

    float reference_Value=0;

    int sensorValue = 0; // variable to store the value coming from the sensor

    void setup()
    {

        int i;
        float sum=0;
        pinMode(sensorPin, INPUT);
        Serial.begin(9600);
        Serial.println("Please do not rotate it before calibrate!");
        Serial.println("Get the reference value:");

    for(i=0;i<1000;i++)
    {
        // read the value from the sensor:
        sensorValue = analogRead(sensorPin);
        sum += sensorValue;
        delay(5);
    }
    reference_Value = sum/1000.0;
    Serial.println(reference_Value);
    Serial.println("Now you can begin your test!");
    }

    void loop()
    {
        double angularVelocity;
        sensorValue = analogRead(sensorPin);
        angularVelocity =((double)(sensorValue-reference_Value)*4930.0)/1023.0/0.67; //get the angular velocity
        Serial.print(angularVelocity);
        Serial.println("deg/s");
        Serial.println(" ");
        delay(10);
    }
```

4. Now, it is time to the calibration. <font color="#DC143C" face>Put the sensor on your desk horizontally</font>
，and then press the Reset button on the Seeeduino, and then Open the serial tool:

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Gyro_Result.jpg)

5. As you see the "Now you can begin your test", that means the calibration done. You can use the sensor now. Rotating direction can reference the following picture:

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Rotate_direction.jpg)

### With [Raspberry Pi](https://seeeddoc.github.io/GrovePiPlus/)

1. You should have got a raspberry pi and a grovepi or grovepi+.

2. You should have completed configuring the development enviroment, otherwise follow [here](https://seeeddoc.github.io/GrovePiPlus/#Introducing_the_GrovePi.2B).

3. Connection

- Plug the sensor to grovepi socket A0 by using a grove cable.

4. Navigate to the demos' directory:

  `cd yourpath/GrovePi/Software/Python/
`

- To see the code

```
    nano grovesingleaxisanaloggyro.py # "Ctrl+x" to exit #

    import time
    import grovepi

    #Connect the Grove Single Axis Analog Gyro to analog port A0
    #SIG,NC,VCC,GND
    sensor = 0

    grovepi.pinMode(sensor,"INPUT")

    #calibration
    print "calibrating..."

    sum = 0

    errors = 0

    for x in range(0, 100):

      try:
          #Get sensor value
          v = grovepi.analogRead(sensor)
          sum += v
          #time.sleep(.05)
      except IOError:
          print "Error"
          errors += 1

    if errors == 100:

       print "unable to calibrate"

       raise SystemExit

    reference_value = sum / (100 - errors)

    print "finished calibrating"
    print "reference_value =", reference_value

    #ready

    while True:
        try:
            #Get sensor value
            sensor_value = grovepi.analogRead(sensor)

            #Calculate angular velocity (deg/s)
            velocity = ((float)(sensor_value - reference_value) * 4930.0) / 1023.0 / 0.67

            print "sensor_value =", sensor_value, " velocity =", velocity
            time.sleep(.5)

        except IOError:
        print "Error"
```

5.Run the demo.

` sudo python grovesingleaxisanaloggyro.py
`

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

**[Eagle]**  [Grove - Signal Axis Analog Gyro Eagle](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip)

**[PDF]**  [Grove - Signal Axis Analog Gyro Sch](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20Sch.pdf)

**[PDF]**  [Grove - Signal Axis Analog Gyro PCB](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20PCB.pdf)

**[Datasheet]** [File Signal Axis Analog Gyro datasheet](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Analog_Gyro_datasheet.pdf)

**[Code]** [Demo code on github](https://github.com/Seeed-Studio/Grove_Single_Axis_Analog_Gyro)

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
