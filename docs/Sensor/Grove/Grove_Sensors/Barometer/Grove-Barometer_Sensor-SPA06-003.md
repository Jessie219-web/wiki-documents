---
description: Grove - Barometer Sensor (SPA06-003)
title: Grove - Barometer Sensor (SPA06-003)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor-SPA06-003
last_update:
  date: 13/5/2025
  author: robben

---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/SPA06-003.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/SPA06-003.png" alt="pir" width={600} height="auto" /></p>

<p style={{ textAlign: 'center' }}>
110992164 Grove Temperature and Barometer Sensor(SPA06-003) - Supports I2C and SPI
</p>

**Grove - Temperature and Barometer Sensor(SPA06-003)** is a high-precision and a low-current environmental sensor measures the temperature and barometer. It supports both I2C and SPI communication and we provide the SPA06-003 Arduino library.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)



:::note
As the sensor is quite sensitive to the environmental conditions, **please DO NOT touch it with your fingers**.
:::

## Feature

-   **Wide measurement range:**  Pressure measurements range from 300hPa~1100hPa and temperature measurements range from -40℃~+85℃.
-   **High accuracy:** The absolute accuracy of ±0.3 hPa for pressure measurement and ±1 ℃ accuracy for temperature measurement.
-   **Long standby time**: Using the FIFO allows the host processor to stay in sleep mode for longer periods between readouts, reducing overall system power consumption and achieving a standby current as low as 0.5 μA.
-   **Grove Interface:** Features a [Grove 4-pin connector, ensuring a "Plug and Play"](https://wiki.seeedstudio.com/Grove_System/) experience to connect with mainstream hardware platforms like Arduino, Raspberry Pi, Micro:bit and many more.

:::tip
     More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/).
:::

## Specification


|            Parameter            |    **Description**    |
| :-----------------------------: | :-------------------: |
|         Supply Voltage          |      5V or 3.3V       |
|            Interface            |      I2C and SPI      |
|           I2C address           | 0x77(default) or 0x76 |
| **Barometric Pressure Measure** |           -           |
|              Range              |     300~1100 hPa      |
|        Absolute Accuracy        |       ±0.3 hPa        |
|   **Temperature Measurement**   |           -           |
|              Range              |     -40℃ to +85℃      |
|            Accuracy             |          ±1℃          |
|           Dimensions            |                       |

## **BMP280 vs. BME280 vs. DPS310 vs. SPA06-003**

| ITEM                        | Grove-BMP280      | Grove-BME280      | Grove-DPS310             | Grove-SPA06-003         |
| --------------------------- | ----------------- | ----------------- | ------------------------ | ----------------------- |
| Pressure Range              | 300 ~ 1100 hPa    | 300 ~ 1100 hPa    | 300 ~ 1200 hPa           | 300 ~ 1100 hPa          |
| Temperature Range           | -40 ~ 85 ℃        | -40 ~ 85 ℃        | -40 ~ 85 °C              | -40 ~ 85 °C             |
| Pressure Precision          | -                 | -                 | ± 0.002 hPa (or ±0.02 m) | -                       |
| Pressure Accuracy(Absolute) | ± 1 hPa (or ±8 m) | ± 1 hPa (or ±8 m) | ± 1 hPa (or ±8 m)        | ± 0.3 hPa               |
| Pressure Accuracy(Relative) | ± 0.12 hPa        | ± 0.12 hPa        | ± 0.06 hPa (or ±0.5 m)   | ± 0.03hPa(or to ±0.25 m |
| Pressure Resolution         | 0.18 Pa           | 0.18 Pa           | 0.06 Pa                  | 0.06 Pa                 |
| Humidity                    | -                 | 0 ~ 100%          | -                        | -                       |
| Communication               | I2C/SPI           | I2C/SPI           | I2C/SPI                  | I2C/SPI                 |
| Price                       | $8.9              | $17.0             | $5.9                     |                         |

## Hardware overview

## Application

- Enhancement of GPS navigation (dead-reckoning, slope detection, etc.)
- In-door and out-door navigation 
- Leisure and sports
- Weather forecast
- Vertical velocity indication (rise/sink speed)

#### **One More Thing**

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine Learning~Voice Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/application_sensecap.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/application_sensecap.png" alt="pir" width={600} height="auto" /></p>

## **Document**

[Grove Temperature and Barometer Sensor(SPA06-003)_V1.0_SCH&PCB](https://drive.weixin.qq.com/s?k=AGEAZwfLABE53sgp5AAUsAPwayALA)

[SPA06-003 Datasheet.PDF](https://drive.weixin.qq.com/s?k=AGEAZwfLABEGoLUy4jAUsAPwayALA)

## **Attribute**

## **Part List**

|                       Item                        | Quantity |
| :-----------------------------------------------: | :------: |
| Grove Temperature and Barometer Sensor(SPA06-003) |    ×1    |
|                Grove - 20cm Cable                 |    ×1    |

## Getting Started

### Play with Arduino

#### Materials required

| Seeeduino V4.2                                               | Base Shield                                                  | Grove-Barometer_Sensor-SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" alt="pir" width={500} height="auto" /></p> |
| [Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [Get One Now](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html) |

#### Hardware Overview

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/Grove-Barometer_Sensor-SPA06-003-Components.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/Grove-Barometer_Sensor-SPA06-003-Components.png" alt="pir" width={600} height="auto" /></p>


-   **SPI soldering pads**, a voltage monitoring circuit.
-   **Interface bus selection pads** , to select I<sup>2</sup>C bus, connect the two pads by soldering (this is connected by default); to select SPI bus, cut the two pads with a sharp knife or a soldering iron.
-   **Slave board address selection pads**, to select slave board address to avoid address collision.

:::tip
      * If you have selected I2C bus, the default address for slave board is **0x77**(right-two pads are connected). If you want to use the address **0x76**, connect only left two (disconnect right two) by soldering.

      * You can disconnect pads with just a sharp knife.
    
      * If you have selected SPI bus, the default address for slave board is **0x77**(right-two pads are connected). If you want to use the address **0x76**, disconnect all three pads.

:::

<div class="admonition note">
<p class="admonition-title">Note</p>
Do not touch or shake or let this product in vibration when it works. This will cause interference and will affect the accuracy of data collected.
</div>

**Step 1.** Connect Grove-Barometer_Sensor-SPA06-003 to port **I2C** of Grove-Base Shield.

**Step 2.** Plug Grove - Base Shield into Seeeduino and connect Seeeduino to PC via a USB cable.

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	If you don't have a Grove Base Shield, you can also directly connect this module to [Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino) as below.
:::
<!--I2C-->

| Seeeduino_v4 | Grove-Barometer_Sensor-SPA06-003 |
| ------------ | -------------------------------- |
| 5V           | VCC                              |
| GND          | GND                              |
| SDA          | SDA                              |
| SCL          | SCL                              |


#### Software

**Step 1.** Download the [library](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06) from Github.

**Step 2.** Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->SPA06-003_example->SPA06-003_example

**Here is the code:**

```cpp

```

**Step 4.** Upload the code. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

**Step 5.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, and altitude.

:::success
        The outcome will display on the **Serial Port** as following if everything goes well.
:::
<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/outcome.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/outcome.png" alt="pir" width={600} height="auto" /></p>


## Resources

- **[KiCAD]** [Grove-Barometer Sensor SPA06-003 SCH&PCB](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/SCH&PCB.zip)
- **[Datasheet]** [SPA06-003 Datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/Datasheet.pdf)
- **[References]**  [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)
