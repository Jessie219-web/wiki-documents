---
description: Getting Started with XIAO Soil Moisture
title: Getting Started with XIAO Soil Moisture
keywords:
  - XIAO
  - Soil Moisture Sensor
  - ESP32-C6
  - Moisture
image: https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/1.webp
slug: /XIAO_Soil_Moisture_Sensor
last_update:
  date: 05/26/2025
  author: Robben
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/top.jpg" style={{width:600, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/XIAO_Soil_Moisture_Sensor">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

# Introduction

The Qualitative Soil Sensor is a compact, low-power environmental monitor powered by the XIAO ESP32-C6. Running on a single AA battery, it offers long-lasting operation and real-time soil condition updates. It features Pre-Calibrated Adaptive Soil Moisture Sensing for precise soil monitoring. Meanwhile, it enables dynamic monitoring intervals and instant readouts for accurate, responsive data. Fully compatible with Home Assistant, it’s ideal for smart gardening and precision agriculture—efficient, reliable, and made for sustainable plant care.

### Features

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_top.jpg" style={{width:800, height:'auto'}}/></div>

**Feature 1: Comprehensive Three-Level Soil Moisture Monitoring and Alert System**

- **Normal:** Indicates that the soil moisture is optimal, meaning no additional watering is required.
- **Almost Dry:** Signals that the soil moisture is beginning to decline, suggesting you prepare to water soon.
- **Dry:** Shows that the soil moisture is critically low, indicating an immediate need for watering.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_1.jpg" style={{width:800, height:'auto'}}/></div>

**Feature 2: Native ESPHome & Home Assistant Integration**

Pre-loaded with ESPHome firmware on XIAO ESP32-C6, enabling instant Home Assistant compatibility. Configure and control directly from your Home Assistant dashboard for streamlined smart home management.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_2.jpg" style={{width:800, height:'auto'}}/></div>

**Feature 3: Pre-Calibrated Adaptive Soil Moisture Sensing: Dynamic Monitoring Intervals with Instant Readout**

**Factory-Calibrated Plug-and-Play Operation:**   The sensor comes pre-calibrated from the factory, so it’s ready for use right out of the box. Simply insert the sensor into the soil and start receiving accurate moisture readings without the need for additional setup.

**Adaptive Detection Logic Based on Soil Moisture Levels:**
- Normal State: When the soil moisture is optimal, the sensor automatically performs a measurement every 8 hours, ensuring that your plant’s water needs are being met without unnecessary intervention.
- Almost Dry State: As the soil begins to lose moisture, the sensor shifts to a more frequent checking schedule, monitoring the moisture once every hour. This stage serves as an early warning to prepare for watering.
- Dry State: When the soil is detected as being too dry, the sensor increases its vigilance, checking the moisture level every 15 minutes. This rapid monitoring ensures that you’re promptly alerted to take immediate action.

**Instant Readout Feature:**   A single short press of the built-in button instantly wakes up the sensor and displays the current humidity level for 1 second, providing you real-time feedback at any moment.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_3.jpg" style={{width:800, height:'auto'}}/></div>

**Feature 4: Calibration Process for Optimal Accuracy**

**Activation:** Quickly press the button three times to enter calibration mode; the red LED will start flashing.

**Calibration Process:** Within 10 seconds, insert the sensor into completely dry soil. Once the red LED stops flashing, wait an additional 3 seconds until the LED switches to flashing green. Then, within 10 seconds, insert the sensor into fully wet soil and wait until the green LED stops flashing, followed by another 3-second delay.

**Result Indication:** Two rapid green flashes confirm successful calibration, while two rapid red flashes indicate a calibration failure.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_4.jpg" style={{width:800, height:'auto'}}/></div>

**Feature 5: Replaceable AA Battery with Extended Service Life**

With optimized factory-calibrated power managemetnt, enabling a single AA battery to run continuously for up to three months.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_5.jpg" style={{width:800, height:'auto'}}/></div>

**Feature 6: Environment-Adaptive Design: Anti-Corrosion Technology & Gr aduated Scale**

Anti-corrosion treatment that significantly extends its lifespan, even in moisture-rich conditions. Paired with a precision-etched graduated scale, it allows for accurate alignment with the diverse root depths of various plants, ensuring tailored soil monitoring that meets the unique needs of every green space.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_6.jpg" style={{width:800, height:'auto'}}/></div>

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/hardware.jpg" style={{width:800, height:'auto'}}/></div>

## Getting Started

This section will guide you through setting up your XIAO Soil Moisture for the first time.

### Wi-Fi Setup

1. After powering on, the sensor will broadcast a Wi-Fi hotspot.
2. Connect your phone or computer to this Wi-Fi network.
3. Open your browser and visit `192.168.4.1` to access the configuration page.
4. Enter your local Wi-Fi credentials to connect the sensor to your home network.
5. Once connected, you can discover the device in Home Assistant (HA) using the ESPHome integration.

You can refer to the ESPHome guide here: [XIAO ESP32C3 accesses HA via ESPHome service](https://wiki.seeedstudio.com/xiao-esp32c3-esphome/#install-esphome-in-home-assistant).

### Button Functions

- Single short press → Instantly wake up and display the current soil moisture level on the RGB LED for 1 second.
- Triple short press → Enter calibration mode:
  - Red LED flashes → Within 10 seconds, insert the sensor into completely dry soil.
  - Wait until the red LED stops flashing, then wait 3 seconds.
  - Green LED flashes → Within 10 seconds, insert the sensor into fully wet soil.
  - Wait until the green LED stops flashing, then wait 3 seconds.
  - Calibration result:
    - Two quick green flashes → Success.
    - Two quick red flashes → Failure (likely due to swapped dry/wet readings).

Note: During calibration, initial readings may be unstable if the sensor is not inserted promptly. The system will take multiple samples, apply filtering, and average the readings for reliable calibration.

### Moisture Level Indication

The RGB LED provides a quick visual indicator:
- Green → Wet soil, no watering needed.
- Yellow → Moderate moisture, consider watering.
- Red → Dry soil, urgent watering required.

Default thresholds:
- 60% → Green to Yellow transition.
- 20% → Yellow to Red transition.

### Home Assistant YAML Example

Here’s a ready-to-use `ESPHome` YAML configuration for Home Assistant:

```yaml
esphome:
  name: soil-moisture-monitor
  friendly_name: XIAO Soil Moisture Monitor
  platformio_options:
    platform: https://github.com/mnowak32/platform-espressif32.git#boards/seeed_xiao_esp32c6
  on_boot: 
    then:
      # - output.turn_off: gpio_3_output
      - output.turn_on: gpio_14_output
      - light.turn_on:
          id: pwm_led
          brightness: 68%  # Set 68% duty cycle
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been set to the network"
            - deep_sleep.prevent: deep_sleep_control
          else:
            - logger.log: "The device has been networked"
      - delay: 1s
      - script.execute: check_moisture_once

esp32:
  board: seeed_xiao_esp32c6
  variant: ESP32C6
  flash_size: 4MB    
  framework:
    type: esp-idf
    version: "5.2.1"
    platform_version: 6.6.0
    sdkconfig_options:
      CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y

# LED Yellow	D10 18
# LED RED	D9  20
# LED Green	D8 19
# button	D2  2

# Battery	D0 0
# PWM out	D3 21
# Soil sensor	D1  1

output:
  - platform: gpio
    pin: GPIO18
    id: yellow_led_output

  - platform: gpio
    pin: GPIO19
    id: green_led_output

  - platform: gpio
    pin: GPIO20
    id: red_led_output

  - platform: ledc
    pin: GPIO21  
    id: pwm_output
    frequency: 200kHz  # Set the frequency to 200kHz

  - platform: gpio
    pin: GPIO14
    id: gpio_14_output

light:
  - platform: binary
    id: yellow_led
    output: yellow_led_output

  - platform: binary
    id: green_led
    output: green_led_output

  - platform: binary
    id: red_led
    output: red_led_output

  - platform: monochromatic
    output: pwm_output
    id: pwm_led
    name: "200kHz PWM"
    internal: true
    default_transition_length: 0s

script:
  - id: red_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: red_led
            - delay: 500ms
            - light.turn_off: red_led
            - delay: 500ms

  - id: green_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: green_led
            - delay: 500ms
            - light.turn_off: green_led
            - delay: 500ms

  - id: fast_blink_green
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: green_led
            - delay: 200ms
            - light.turn_off: green_led
            - delay: 200ms

  - id: fast_blink_red
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: red_led
            - delay: 200ms
            - light.turn_off: red_led
            - delay: 200ms

  - id: red_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: red_led
            - delay: 1000ms
            - light.turn_off: red_led
            - delay: 100ms
  - id: yellow_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: yellow_led
            - delay: 1000ms
            - light.turn_off: yellow_led
            - delay: 100ms

  - id: green_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: green_led
            - delay: 1000ms
            - light.turn_off: green_led
            - delay: 100ms

  - id: do_calibration
    then:
      - deep_sleep.prevent: deep_sleep_control
      - logger.log: "Starting calibration"
      - script.execute: red_led_blink
      - delay: 10s
      - script.stop: red_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(dry_value) = sum / 10.0;
          ESP_LOGI("calibration", "Dry value: %f", id(dry_value));

      - delay: 3s

      - script.execute: green_led_blink
      - delay: 10s
      - script.stop: green_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(wet_value) = sum / 10.0;
          ESP_LOGI("calibration", "Wet value: %f", id(wet_value));

      - delay: 3s

      - lambda: |-
          if (id(dry_value) > id(wet_value)) {
            ESP_LOGI("calibration", "Calibration success");
            id(fast_blink_green).execute();
          } else {
            ESP_LOGW("calibration", "Calibration failed");
            id(fast_blink_red).execute();
          }

      - delay: 3s
      - script.execute: check_moisture_once
      - delay: 3s
      - deep_sleep.enter: deep_sleep_control

  - id: check_moisture_once
    then:
      - lambda: |-
          for(int i = 0; i < 10; i++){
            id(soil_sensor).update();
            delay(200);
          }
          float moisture = id(soil_sensor).state;
          ESP_LOGI("moisture_check", "Moisture reading: %f", moisture);
          float Diff = id(dry_value) - id(wet_value);
          ESP_LOGI("moisture_check", "Diff is: %f", Diff);
          ESP_LOGI("moisture_check", "ref_dry Diff is: %f",id(dry_value) - Diff * id(ref_dry));
          ESP_LOGI("moisture_check", "ref_wet Diff is: %f",id(dry_value) - Diff * id(ref_wet));
          if (moisture >= (id(dry_value) - Diff * id(ref_dry))) {  // The drier -> the higher the voltage
            id(red_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(900000);
          } else if(moisture >  (id(dry_value) - Diff * id(ref_wet)) && moisture < (id(dry_value) - Diff * id(ref_dry))){
            id(yellow_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(3600000);
          }else{
            // moisture >  (id(dry_value) - Diff * id(ref_wet))
            id(green_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(28800000);
          }

globals:
  - id: button_press_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: dry_value
    type: float
    restore_value: yes
    initial_value: '2.75'
  - id: wet_value
    type: float
    restore_value: yes
    initial_value: '1.2'
  - id: wifi_net_status
    type: int
    restore_value: yes
    initial_value: "0"
  - id: ref_dry
    type: float
    restore_value: no
    initial_value: "0.23"
  - id: ref_wet
    type: float
    restore_value: no
    initial_value: "0.58"

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO2
      mode: INPUT_PULLUP
      allow_other_uses: true
    id: my_button
    on_press:
      - lambda: |-
          id(button_press_count)++;
      - delay: 1s  # Delay 1 second to see if the button is pressed 3 times in a row
      - lambda: |-
          if (id(button_press_count) == 3) {
            id(button_press_count) = 0;
            id(do_calibration).execute();  // Trigger calibration process
          } else if (id(button_press_count) == 1) {
            id(button_press_count) = 0;
            id(check_moisture_once).execute();  // Perform an ADC decision
          } else {
            id(button_press_count) = 0;
          }

deep_sleep:
  id: deep_sleep_control
  run_duration: 120s  
  sleep_duration: 180min  
  wakeup_pin: 
    number: GPIO2 
    inverted: true
    allow_other_uses: true
    mode: INPUT_PULLUP


external_components:
  - source: github://pr#7942
    components: [ "adc" ]

  - source:
      type: git
      url: https://github.com/ackPeng/esphome.git
      ref: api
    components: [ api ]
    refresh: 0s

sensor:
  - platform: adc
    id: soil_sensor
    pin: GPIO1
    name: "Soil moisture measurement"
    update_interval: 4s
    internal: true
    attenuation: 12db


  - platform: adc
    pin: GPIO0
    name: "Battery measurement"
    attenuation: 12db
    filters:                     # When the battery drops below 1V, it is dead.
      - lambda: |-
          if (x < 1.0) {
            return 0.0;
          } else {
            return ((x - 1.0) / (1.5 - 1.0)) * 100.0;
          } 
    unit_of_measurement: "%"
    update_interval: 5s
    force_update: True

  - platform: wifi_signal
    name: "wifi singnal strength"
    update_interval: 10s
    
text_sensor:
  - platform: template
    name: "Soil Moisture Status"
    id: soil_status
    lambda: |-
      float value = id(soil_sensor).state;
      float Diff = id(dry_value) - id(wet_value);
      if (value >= (id(dry_value) - Diff * id(ref_dry))) {
        return {"Dry"};
      } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
        return {"Almost Dry"};
      } else {
        return {"Normal Moisture"};
      }
    update_interval: never  # 不让自动触发上报，我们自己控制

interval:
  - interval: 5s
    then:
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            return "";
      - delay: 10ms
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            float value = id(soil_sensor).state;
            float Diff = id(dry_value) - id(wet_value);
            if (value >= (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(900000);
              return "Dry";
            } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(3600000);
              return "Almost Dry";
            } else {
              id(deep_sleep_control).set_sleep_duration(28800000);
              return "Normal Moisture";
            }  

# Enable logging
logger:

improv_serial:

# Enable Home Assistant API
api:
  # encryption:
    # key: "YVjz+1l5zHXeyXFVinhaJkqh8RnG0gUVjaWniPEzCj4="

ota:
  - platform: esphome
    password: "dcad8df988971d761bc72a30d7878a40"

wifi:
  # ssid: "my68k"
  # password: "1143590135"
  on_connect:
    then:
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been configured yet, but now it is successfully configured"
            - globals.set:
                id: wifi_net_status
                value: '1'
            - delay: 5s
            - deep_sleep.allow: deep_sleep_control
          else:
            - logger.log: "The device has been networked"

  on_disconnect:
    then:
      - globals.set:
          id: wifi_net_status
          value: '0'
  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Soil-Moisture-Monitor"
    password: ""

captive_portal:
```

### Functions

Here’s an overview of the key functions and logic used in the YAML configuration.

`on_boot` – Defines what happens when the device boots.
- **Input parameters**: None.
- **Action**: Turns on GPIO 14, sets PWM LED brightness, checks Wi-Fi status, and triggers the first moisture check.

`scripts (red_led_blink, green_led_blink, fast_blink_green, fast_blink_red, etc.)` – Predefined LED blinking patterns.
- **Input parameters**: None.
- **Action**: Blinks LEDs in various patterns to indicate status or calibration steps.

`do_calibration` – Runs the calibration process for dry and wet soil.
- **Input parameters**: None.
- **Action**: Blinks red LED, waits for dry reading; then blinks green LED, waits for wet reading; stores average values and confirms success or failure.

`check_moisture_once` – Reads and evaluates soil moisture levels.
- **Input parameters**: None.
- **Action**: Takes multiple ADC readings, averages them, compares against calibrated thresholds, decides moisture state, triggers LED and deep sleep settings accordingly.

`binary_sensor (GPIO2)` – Handles physical button press logic.
- **Input parameters**: None.
- **Action**: Counts button presses; single press triggers a moisture check, triple press triggers calibration.

`globals` – Stores system state and calibration data.
- **Variables**:
    - `button_press_count`: Tracks button press count.
    - `dry_value`, `wet_value`: Stores calibrated dry/wet ADC values.
    - `wifi_net_status`: Tracks Wi-Fi connection state.
    - `ref_dry`, `ref_wet`: Reference scaling factors for threshold calculations.

`deep_sleep` – Manages power-saving sleep cycles.
- **Input parameters**: None.
- **Action**: Runs for 120 seconds, then sleeps for up to 180 minutes; wakes up on button press or interval.

`sensor (ADC)` – Reads analog values from the soil sensor and battery.
- **Input parameters**: None.
- **Action**: Measures soil moisture and battery voltage; battery is scaled to show percentage.

`text_sensor` – Publishes human-readable soil moisture status.
- **Input parameters**: None.
- **Action**: Displays "Dry", "Almost Dry", or "Normal Moisture" in Home Assistant.

`wifi` + `api` + `ota` – Manages network connection, Home Assistant integration, and over-the-air firmware updates.
- **Input parameters**: Wi-Fi SSID and password.
- **Action**: Connects the device to the network, exposes its API, and enables remote updates.

## Resources

- **[PDF]** [XIAO Soil Moisture Sensor SCH](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/SCH.pdf)
- **[Kicad]** [XIAO Soil Moisture Sensor PCB](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/Kicad.kicad_pcb)
- **[Yaml]** [XIAO Soil Moisture Sensor HA Yaml](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/HomeAssistanceYaml.yaml)
- **[Bin]** [XIAO Soil Moisture Sensor HA Factory Bin](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/factory.bin)
- **[ZIP]** [XIAO Soil Moisture Sensor Enclosure STEP file](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/Step_File.zip)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>