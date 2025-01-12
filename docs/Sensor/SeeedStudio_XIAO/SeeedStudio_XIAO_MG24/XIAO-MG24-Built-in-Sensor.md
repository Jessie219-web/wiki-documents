---
title: Seeed Studio XIAO MG24 Sense built-in Sensor
description: This article describes how to use the Microphone on the XIAO MG24 Sense.
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /xiao_mg24_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024 
  author: Jason
sidebar_position: 3
---

# Usage of Seeed Studio XIAO MG24 Sense built-in Sensor

## XIAO MG24 Sense IMU

### Overview of Built-in Sensors

**6-Axis IMU (Inertial Measurement Unit)** Sensors like the **LSM6DS3TR-C** integrate accelerometers and gyroscopes to measure the motion and orientation of an object in three-dimensional space. Specifically, the LSM6DS3TR-C has the following features:

**Accelerometer function:**
- Measures the acceleration of an object along the X, Y, and Z axes. It is able to sense object motion (e.g., rest, acceleration, deceleration) and tilt changes (e.g., angle of the object).
- It can be used to detect gait, position changes, vibrations, etc.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**Gyroscope function (Gyroscope):**
- Measures the angular velocity of an object around the X, Y, and Z axes, i.e., the rotation of the object.
- Can be used to detect rotation, rate of rotation, and change in direction.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- The **X-axis angle ( Roll )** is the angle in the direction of rotation around the X-axis.
- The **Y-axis angle ( Pitch )** is the angle in the direction of rotation around the Y-axis.
- The **Z-axis angle ( Yaw )** is the angle in the direction of rotation around the Z-axis.

### Software Preparation

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Click on the github download link to drive the six-axis sensor.


### Code Implementation
```cpp

#include <LSM6DS3.h>
#include <Wire.h>

//Create a instance of class LSM6DS3
LSM6DS3 myIMU(I2C_MODE, 0x6A);    //I2C device address 0x6A
float aX, aY, aZ, gX, gY, gZ;
const float accelerationThreshold = 2.5; // threshold of significant in G's
const int numSamples = 119;
int samplesRead = numSamples;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  while (!Serial);

  pinMode(PD5,OUTPUT);
  digitalWrite(PD5,HIGH);
  //Call .begin() to configure the IMUs
  if (myIMU.begin() != 0) {
    Serial.println("Device error");
  } else {
    Serial.println("aX,aY,aZ,gX,gY,gZ");
  }
}

void loop() {
  // wait for significant motion
  while (samplesRead == numSamples) {
    // read the acceleration data
    aX = myIMU.readFloatAccelX();
    aY = myIMU.readFloatAccelY();
    aZ = myIMU.readFloatAccelZ();

    // sum up the absolutes
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);

    // check if it's above the threshold
    if (aSum >= accelerationThreshold) {
      // reset the sample read count
      samplesRead = 0;
      break;
    }
  }

  // check if the all the required samples have been read since
  // the last time the significant motion was detected
  while (samplesRead < numSamples) {
    // check if both new acceleration and gyroscope data is
    // available
    // read the acceleration and gyroscope data

    samplesRead++;

    // print the data in CSV format
    Serial.print(myIMU.readFloatAccelX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelZ(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroZ(), 3);
    Serial.println();

    if (samplesRead == numSamples) {
      // add an empty line if it's the last sample
      Serial.println();
    }
  }
}
```
:::tip

Due to the update of the LSM6DS3 library, if you have previously added this library to the user, you will need to re-download version 2.0.4 or higher and add the ZIP file to the Arduino.

:::
### Function Overview
- **Include Libraries**
  ```cpp
    #include <LSM6DS3.h> 
    #include <Wire.h>
  ```
  - Includes the library for communicating with the LSM6DS3 sensor.
  - Includes the library for I2C communication.
    
- **Create Sensor Instance**
    - `LSM6DS3 myIMU(I2C_MODE, 0x6A)` Creates an instance of the LSM6DS3 class for the IMU sensor, specifying I2C communication mode and the device address 0x6A.

- **Variables and Constants**
    - `float aX, aY, aZ, gX, gY, gZ`: Variables to store accelerometer and gyroscope data.
    - `const float accelerationThreshold = 2.5`: The threshold value in G's for detecting significant motion.
    - `const int numSamples = 119`: The number of samples to collect after detecting significant motion.
    - `int samplesRead = numSamples`: Initializes the sample counter to the total number of samples, indicating no data has been collected yet.

- **Basic Settings**
  ```cpp
    pinMode(PD5,OUTPUT);
    digitalWrite(PD5,HIGH);
  ```

  - Turn on the gyro enable pin.

- **Data Processing**
    ```cpp
    aX = myIMU.readFloatAccelX();:
    aY = myIMU.readFloatAccelY();:
    aZ = myIMU.readFloatAccelZ();:
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);
    ``` 

  - Reads the acceleration along X.
  - Reads the acceleration along Y.
  - Reads the acceleration along Z.
  - Calculate the sum of the absolute values of the acceleration data，`fabs()`Returns the absolute value.

  ```cpp
    // check if it's above the threshold
    if (aSum >= accelerationThreshold) {
      // reset the sample read count
      samplesRead = 0;
      break;
    }
  ```
  - If the sum of the absolute acceleration values is greater than or equal to the set threshold, reset the sample count samplesRead to 0 and exit the loop.

- **Check Data**
  ```cpp
  while (samplesRead < numSamples) {
    samplesRead++;
    .
    .
    .
    .
    .
    if (samplesRead == numSamples) {
      // add an empty line if it's the last sample
      Serial.println();
    }
  }
  ```

  - Go to another loop and check if the required number of samples have been read.
  - Increase the count of samplesRead.
  - If all samples have been read, print a blank line to separate the data output.



### Results Chart

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/six_resutl.png" style={{width:700, height:'auto'}}/></div>

### Greater

If you want more sample code , Please Click : **"File" -> Example -> Seeed Arduino LSM6DS3"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/33.png" style={{width:500, height:'auto'}}/></div>



## XIAO MG24 Sense Microphone


### Overview of Built-in Sensors

**Microphone Sensor**like the **MSM381ACT001** is a MEMS (Micro-Electro-Mechanical Systems) microphone designed to capture audio signals with **high sensitivity and low noise**. Specifically, the MSM381ACT001 has the following features:

**Microphone Function:**

- Captures sound waves and converts them into electrical signals, enabling the detection of audio input in various environments.
- It features a wide frequency response range, typically from 20 Hz to 20 kHz, suitable for a variety of audio applications, including voice recognition and music playback.

**Key Features**

- High Sensitivity: Capable of detecting faint sounds, making it ideal for applications requiring precise audio capture.
- Low Noise: Designed to provide a high signal-to-noise ratio (SNR), ensuring clear audio output even in noisy environments.
- Compact Size: MEMS technology allows for a small form factor, facilitating easy integration into portable devices like smartphones and wearables.
- Digital Output: Offers digital signal output options (e.g., I2S), simplifying the interface with digital signal processors (DSPs) and microcontrollers.


### Software Preparation


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_Mic">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Click on the github download link to drive the microphone sensor.

:::tip
Currently we need to manually modify the replacement file, the subsequent direct download library can be used, please wait for our wiki update.
:::

- **[Replacement Files]** [gsdk.a](https://files.seeedstudio.com/wiki/mg24_mic/gsdk_v2.a)

**Changing the file path**
  - __/Users/yourname/Library/Arduino15/packages/SiliconLabs/hardware/silabs/2.2.0/variants/xiao_mg24/ble_silabs/__

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/file.png" style={{width:350, height:'auto'}}/></div>


### Code Implementation

```cpp
#include <mic.h>
#if defined(WIO_TERMINAL)
#include "processing/filters.h"
#endif

// Settings
#if defined(WIO_TERMINAL)
#define DEBUG 1                 // Enable pin pulse during ISR  
#define SAMPLES 16000*3
#elif defined(ARDUINO_ARCH_NRF52840)
#define DEBUG 1                 // Enable pin pulse during ISR  
#define SAMPLES 800
#elif defined(ARDUINO_SILABS)
#define DEBUG 1                 // Enable pin pulse during ISR  
#define SAMPLES 800
#endif

mic_config_t mic_config{
  .channel_cnt = 1,
  .sampling_rate = 16000,
  .buf_size = 1600,
#if defined(WIO_TERMINAL)
  .debug_pin = 1                // Toggles each DAC ISR (if DEBUG is set to 1)
#elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN                // Toggles each DAC ISR (if DEBUG is set to 1)
#elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN                // Toggles each DAC ISR (if DEBUG is set to 1)  
#endif
};

#if defined(WIO_TERMINAL)
DMA_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_ARCH_NRF52840)
NRF52840_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_SILABS)
MG24_ADC_Class Mic(&mic_config);
#endif

int16_t recording_buf[SAMPLES];
volatile uint8_t recording = 0;
volatile static bool record_ready = false;

#if defined(WIO_TERMINAL)
FilterBuHp filter;
#endif

void setup() {

  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

  Mic.set_callback(audio_rec_callback);

  if (!Mic.begin()) {
    Serial.println("Mic initialization failed");
    while (1);
  }

  Serial.println("Mic initialization done.");

}

void loop() { 

#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {

    Serial.println("Starting sampling");
    recording = 1;
    record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready)
#endif  
  {
  Serial.println("Finished sampling");
  
  for (int i = 0; i < SAMPLES; i++) {
    
  //int16_t sample = filter.step(recording_buf[i]);
  int16_t sample = recording_buf[i];
  Serial.println(sample);
  }
  
  record_ready = false; 
  }
}

static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  
  static uint32_t idx = 0;
  // Copy samples from DMA buffer to inference buffer
#if defined(WIO_TERMINAL)
  if (recording) 
#endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
  
      // Convert 12-bit unsigned ADC value to 16-bit PCM (signed) audio value
#if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
      //recording_buf[idx++] = (int16_t)(buf[i] - 1024) * 16;  
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i];
#endif

      if (idx >= SAMPLES){ 
      idx = 0;
      recording = 0;
      record_ready = true;
      break;
     } 
    }
  }

}
```

### Function Overview




**Microphone Configuration**

  ```cpp
  mic_config_t mic_config{
  .channel_cnt = 1,
  .sampling_rate = 16000,
  .buf_size = 1600,
  #if defined(WIO_TERMINAL)
  .debug_pin = 1
  #elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN
  #elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN
  #endif
};
  ```

  - mic_config_t: Defines a microphone configuration structure.
  - channel_cnt: set to 1 for mono.
  - sampling_rate: Set to 16000 Hz for sampling frequency.
  - buf_size: set to 1600 for buffer size.
  - ebug_pin: set debug pin according to platform, used for signal indication during debugging.

**Microphone instantiation**

  ```cpp
  #if defined(WIO_TERMINAL)
  DMA_ADC_Class Mic(&mic_config);
  #elif defined(ARDUINO_ARCH_NRF52840)
  NRF52840_ADC_Class Mic(&mic_config);
  #elif defined(ARDUINO_SILABS)
  MG24_ADC_Class Mic(&mic_config);
  #endif
  ```
  - Conditional compilation: create the appropriate microphone class instances for different platforms, using the previously defined configuration.

**Recording buffers and flags**

  ```cpp
  int16_t recording_buf[SAMPLES];
  volatile uint8_t recording = 0;
  volatile static bool record_ready = false;
  ```
  - recording_buf: Define an array of SAMPLES to store recording samples.
  - recording: a volatile variable that marks whether recording is currently in progress to prevent compiler optimization.
  - record_ready: a volatile static variable that indicates if the recording is complete and ready for further processing.

**Filter Example (for WIO Terminal)**

  ```cpp
  #if defined(WIO_TERMINAL)
  FilterBuHp filter;
  #endif
  ```
  - If on the WIO Terminal, create an instance of a high-pass filter for filter processing.

**setup**
  ```cpp
  void setup() {
  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

  Mic.set_callback(audio_rec_callback);

  if (!Mic.begin()) {
    Serial.println("Mic initialization failed");
    while (1);
  }

  Serial.println("Mic initialization done.");
}
  ```

  -Initialize Serial Port: Start serial communication at 115200 baud rate and wait for the serial port to be ready.
  - Set Pin Mode: On WIO Terminal, set the key pins to input pull-up mode.
  - Set callback function: call Mic.set_callback(audio_rec_callback) to specify the callback function when recording audio.
  - Initialize the microphone: call Mic.begin(), if the initialization fails, print an error message and enter a dead loop.

**loop**

  ```cpp
  void loop() { 
#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {
    Serial.println("Starting sampling");
    recording = 1;
    record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready)
#endif  
  {
    Serial.println("Finished sampling");
    
    for (int i = 0; i < SAMPLES; i++) {
      int16_t sample = recording_buf[i];
      Serial.println(sample);
    }
    
    record_ready = false; 
  }
}
  ```

  - Detect Key: On the WIO Terminal, starts recording when it detects that a key has been pressed and is not recording.
  - Finished sampling:Prints “Finished sampling” if not recording and record_ready is set to true.
  - Iterates through the recording buffer and prints each sample value.

**Audio recording callback function**

  ```cpp
  static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  static uint32_t idx = 0;
  #if defined(WIO_TERMINAL)
  if (recording) 
  #endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
      #if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
      #elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i];
      #endif

      if (idx >= SAMPLES){ 
        idx = 0;
        recording = 0;
        record_ready = true;
        break;
      } 
    }
  }
}
  ```

  - Callback function: called during audio recording, responsible for copying samples from the DMA buffer to the recording buffer.
  - Conditional Compilation: Processes the input using filters if on the WIO Terminal.
  - Converts 12-bit unsigned ADC values to 16-bit PCM (signed) audio values.
  - Sample Fill: copies samples into recording_buf and updates index idx.
  - Finish recording: if the number of filled samples reaches SAMPLES, resets the index, marks the end of recording and sets record_ready to true.


### Results Chart


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result1.png" style={{width:680, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result.png" style={{width:680, height:'auto'}}/></div>

Here is the waveform of the recognized sound, when you blow, you can clearly see that the waveform oscillation amplitude becomes bigger.

### Greater

If you want more sample code , Please Click : -> **"Example -> Seeed Arduino Mic"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/34.png" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/35.png" style={{width:500, height:'auto'}}/></div>


## Resources

### For Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Seeed Studio 6-Axis IMU(LSM6DS3TR-C) datasheet](https://statics3.seeedstudio.com/fusion/opl/sheets/314040211.pdf)
- 📄 **[PDF]** [Seeed Studio Analog Microphone(MSM381ACT001) datasheet](https://files.seeedstudio.com/wiki/mg24_mic/312030602_MEMSensing_MSM381ACT001_Datasheet.pdf)

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
