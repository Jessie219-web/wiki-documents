---
description: Grove - PH Sensor
title: Grove - PH Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-PH_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - PH Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html
oldwikiname:  Grove - PH Sensor
prodimagename: Phsensor.jpg
surveyurl: https://www.research.net/r/Grove_PH_Sensor
sku:  101020065
--- -->
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/Phsensor.jpg)

Do you need to measure aqueous solution pH? Here, the Grove - PH sensor can help you do it. This sensor can output signal which corresponding to the hydrogen ion concentration that measured by PH electrode. Because it can be directly connected to controller,and then you can observe the PH value at any time. This device can be used for PH measurements, such as waste water, sewage and other occasions.

:::note
Only domestic order will be valid. Do not place an order if your address isn't in China.
:::

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html)

## Feature

---

* Grove Interface
* Wide measuring range
* Usage Life is two years
* Isopotential Point: pH 7.00 (0 mV)

## Specification

---
<center>
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Item</th>
<th scope="col">Typical</th>
<th scope="col">Units</th>
</tr>
<tr>
<th scope="row">Working Voltage</th>
<td>5</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Isopotential point</th>
<td>7±0.5</td>
<td>pH</td>
</tr>
<tr>
<th scope="row">Measure Range</th>
<td>0~14</td>
<td>pH</td>
</tr>
<tr>
<th scope="row">pH Sensor Output Range</th>
<td>-414.12 ~ 414.12</td>
<td>mV</td>
</tr>
<tr>
<th scope="row">Measure Accuracy</th>
<td>&lt;15</td>
<td>mV</td>
</tr>
<tr>
<th scope="row">Response Time</th>
<td>&lt;2</td>
<td>min</td>
</tr>
<tr>
<th scope="row">Temperature Range</th>
<td>0~60</td>
<td>℃</td>
</tr>
</table>
</center>

## Schematic

---
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Schematic.jpg)

## Usage

---
The pH sensor can help you to detect pH value. The success or failure of pH measurement depends on the PH sensor calibration and maintenance. Now let us  get started from how to calibrate.

### Calibration

* Before using, you need using pure water or deionized water to wash it and then sop up the water with paper(the paper is without hemp). Remember,you'd better not wipe it because wiping PH electrode will cause errors. Here is a picture for reference:
*

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Usage.jpg)

In this picture, PH 9.18 [buffer solution](http://www.chemguide.co.uk/physical/acidbaseeqia/buffers.html) is used as a reference solution, which helps us to know whether the measured value is accurate.
Now let's look at what is the measured value.

* Upload the demo code. Please click [here](/Upload_Code) if you do not know how to upload

```
//Function: The PH sensor output voltage value,
//          convert into PH and then display in the serial monitor.
#define Vref 4.95
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    int sensorValue;
    int m;
    long sensorSum;
    for(m=0;m<50;m++)
    {
        sensorValue=analogRead(A0);//Connect the PH Sensor to A0 port
        sensorSum += sensorValue;
    }
    sensorValue =   sensorSum/50;
    Serial.print(" the PH value is");
    Serial.println(7-1000*(sensorValue-372)*Vref/59.16/1023);

}
```

* Open the serial monitor for see the result:

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_result.jpg)

* Look at the result, you can see the test result is consistent with the actual value. So you can begin to measure aqueous solution pH. If there were errors between reference liquid PH and measured PH value, you had better soak the PH electrode for several hours and then recalibrate. [Here](http://www.ehow.com/how_4796148_calibrate-ph-meter.html) is a guide about how to calibrate for reference.

**Note:** If the measured value you get maintains higher or smaller than it should be, the reason could be a inappropriate Vref value. Vref is the working voltage of Arduino.

The relationship between PH value and the output voltage:
<font color="blue">E=59.16(mV/PH)</font>

### Cleaning and Storing

The pH electrode is the most sensitive component of your pH instrument. And the pH electrode cannot be allowed to dry out or freeze. The proper maintenance will provide years of reliable measurement. So [the pH electrode care and maintenance](http://www.eutechinst.com/techtips/tech-tips26.htm) is no less important than calibration. Please remember: when it’s not in use, you should wash and keep it in the 3mol Kcl container. The 3mol KCL need you to prepare. The preparation method can refer to the below information:

Based on<font color="red"> 3 mol * ( 74.55 g / 1 mol KCl) = 223.65 g KCl)</font>
So to prepare a 3 mol / L solution KCl, you'd need to dissolve 223.65 g of KCl into some water, mix, and then fill it up to the 1 L mark with water.

Hope this helps!

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

---

* [Grove - PH Sensor Eagle File](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip)

* [Grove - PH Sensor Schematic in PDF](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_v1.0.pdf)

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
