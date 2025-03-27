---
description: Arduino examples for T1000-E user guide
title: T1000-E Arduino Examples
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /t1000_e_arduino_examples
sidebar_position: 3
last_update:
  date: 03/24/2025
  author: Frederik Funk
---

# T1000-E Arduino Examples

The following Arduino examples are available:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Example</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Blinky</td>
      <td>LED flash - Controls GPIO pins to make an LED blink, used for function tests and status indication.</td>
    </tr>
    <tr>
      <td>Button</td>
      <td>Print button event - Detects button state changes and prints event information for user interaction.</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>Loop play sound - Drives a buzzer to produce sounds for reminders or alarms.</td>
    </tr>
    <tr>
      <td>Sensor</td>
      <td>Print temp/lux/battery value - Reads and prints temperature, light intensity, and battery voltage data.</td>
    </tr>
    <tr>
      <td>Accelerometer</td>
      <td>Print ax/ay/az/event value - Collects acceleration data for motion detection and posture recognition.</td>
    </tr>
    <tr>
      <td>GNSS</td>
      <td>Print latitude/longitude value - Obtains and prints GNSS-based location data.</td>
    </tr>
    <tr>
      <td>LoRaWAN</td>
      <td>Join through OTAA, send test data to LNS - Connects to LoRaWAN and sends test data.</td>
    </tr>
    <tr>
      <td>LoRaWAN Sensor</td>
      <td>Join through OTAA, read temp/lux/bat/ax/ay/az, send data to LNS - Collects and transmits various sensor data via LoRaWAN.</td>
    </tr>
    <tr>
      <td>LoRaWAN GNSS</td>
      <td>Join through OTAA, scan lat/lon, send data to LNS - Captures and transmits GNSS location data in real-time.</td>
    </tr>
    <tr>
      <td>LoRaWAN WiFi</td>
      <td>Join through OTAA, scan WiFi MAC, send data to LNS - Scans WiFi MAC addresses and transmits data for positioning.</td>
    </tr>
    <tr>
      <td>LoRaWAN Beacon</td>
      <td>Join through OTAA, scan Beacon MAC, send data to LNS - Scans and transmits Beacon MAC data for tracking and identification.</td>
    </tr>
  </table>
</div>

## Prerequisites

Before starting, make sure to have completed the following steps:

1. Install the Arduino IDE
2. Add the Seeed Arduino core to the IDE as described [here](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino?tab=readme-ov-file#bsp-installation)
3. Connect the Tracker T1000-E to your computer using the USB cable

## Building an example

Open the Arduino IDE and select the T1000-E board:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/board_select.png" alt="pir" width={800} height="auto" /></p>

Then open an example of your choice (in this case the accelerator example):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

Save the example to a place of your choice by clicking `File -> Save As`. This step is necessary to easily retrieve the compiled `.hex` file later on which is exported to the same location as the example code and to allow potential changes to the example.

Now, we are ready to compile the example by clicking the "Verify" button. Do not use "Upload"; this will fail as the binary cannot be uploaded directly to the device by the Arduino IDE (see [this section](#uploading-to-target-device)):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_compile.png" alt="pir" width={800} height="auto" /></p>

The example should compile without any errors, and the output in the terminal should look similar as in the screenshot above.

## Uploading to target device

As the T1000-E bootloader _only_ supports flashing via `.uf2` drag&drop, it is not possible upload the examples directly via the Arduino IDE.
Instead, follow these steps:

1. Export the compiled binary from the Arduino IDE. You will find it in the same folder as the `.ino` sketch.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. Convert the `.hex` file into a `.uf2` file. This is done using a python script which can be downloaded [here](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py). Download and run the script with the following parameters from a terminal:  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <your_hex_file>.hex`

3. Put the device into DFU mode by pressing and holding the device button, then quickly connect the charging cable twice, the green LED will be solid on. You should now find the T1000-E as mass storage device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. Copy the `.uf2` file over to the mass storage. After it has been copied over, the device automatically starts running it.

## Reading serial messages

Messages from the device print out using `Serial.println` and `Serial.printf` can be read using the integrated terminal of the arduino IDE.
Make sure you have enabled selected USB-CDC and enabled it:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

Then open the serial monitor using `Tools -> Serial Monitor` and start observing the messages:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## LoRaWAN examples

The examples which include LoRaWAN messaging need two further steps.

### Set up a LNS

You need a LoRaWAN network server (LNS) where your tracker can connect to. In this example we use The Things Network (TTN), but any other should work fine.
In order to work with TTN, you need to have an account with The Things Industries or The Things Network and access to a gateway (either a public one or your own if none is available).

#### Step 1: Create an application

Navigate to Applications page and click "+ Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Enter an Application ID and click "Create application" to save your changes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Step 2: Register the Device

Click "+ Register end device".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Set the following parameters:

**Frequency Plan**: Select the appropriate Frequency plan for the target region  
**LoRaWAN version**:LoRaWAN Specification 1.0.4  
**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

Now, create the credentials for your device. Either generate a new set or enter exsisting ones.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### Adjust example code

To make it work, set the credentials from the previous step in the example code. Also specify the region, e.g. `SMTC_MODEM_REGION_AS_923_GRP1`, `SMTC_MODEM_REGION_EU_868`, or `SMTC_MODEM_REGION_US_915`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

If your region has duty cycle restrictions, make sure to enable the limitation in the reset handler:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### Running example code

Compile and flash the LoRaWAN example in the same manner as described for the other examples (create `.uf2` file and flash via drag&drop).
Afterwards you should see messages incoming in the TTN interface:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- A special thanks to [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144) for his dedicated efforts. Your work will be [exhibited](https://wiki.seeedstudio.com/contributors/).

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
