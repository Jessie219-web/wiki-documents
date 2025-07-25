---
description: Wio-WM1110 Dev Kit Hardware Overview
title: Hardware del Kit de Desarrollo Wio WM1110
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-WM1110_Dev_Kit_Hardware_Overview
last_update:
  date: 05/28/2025
  author: Guillermo
---

# Hardware del Kit de Desarrollo Wio WM1110

El Kit de Desarrollo Wio WM1110 es una plataforma de código abierto para construir proyectos de IoT. Ofrece conexión a redes LoRa de bajo consumo y una gama completa de servicios de cobertura de localización. Este kit también incluye una variedad de sensores y periféricos, lo que lo convierte en una plataforma versátil para el desarrollo de proyectos IoT.

En este tutorial, presentaremos una visión general del hardware y cómo desarrollar tu propia aplicación.


## 

El Kit de Desarrollo Wio-WM1110 está basado en el [Módulo Wio-WM1110](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html), que integra el transceptor LoRa® de Semtech y un frontend de radio multipropósito para geolocalización. La placa incluye un sensor de temperatura y humedad (TH) incorporado, un acelerómetro de 3 ejes y también proporciona opciones de conectividad para una variedad de periféricos.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png" alt="pir" width={800} height="auto" /></p>



## Pinout

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png" alt="pir" width={800} height="auto" /></p>




## Comunicación LoRaWAN®

### Configuración de las claves

Antes de que un dispositivo pueda comunicarse a través de la Red de Servidores (NS), necesitamos registrarlo con las 3 claves.

El Kit de Desarrollo Wio-WM1110 (Wio-WM1110 DK) permite a los usuarios configurar el DevEUI, AppEUI y AppKey, por lo que puedes establecer tus propios parámetros en el archivo 'lorawan_key_config.h' y luego cargarlo (flashearlo) en el kit de desarrollo (DK).

```cpp
...\Seeed_Wio_WM1110_Dev_Board\apps\common\lorawan_key_config.h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>


## Ejemplo: LoRa Basics Modem LoRaWAN® Clase A/C

La aplicación iniciará automáticamente un procedimiento para unirse a una red LoRaWAN. Consulta el archivo **lorawan_key_config.h** para más detalles.

Una vez que el dispositivo se une a la red (es decir, cuando se activa el evento correspondiente), se envían *uplinks* periódicamente. Esta acción periódica se basa en la funcionalidad de alarma del módem LoRa Basics. Cada vez que se activa el evento relacionado con la alarma, la aplicación solicita un *uplink*.

El contenido del *uplink* es el valor leído del contador de carga, mediante la función: `smtc_modem_get_charge()`.

La aplicación también es capaz de mostrar los datos y metadatos de un downlink recibido.

**Configuración**

Varios parámetros se pueden modificar en el archivo de encabezado: `main_lorawan.h`

| Constante                   | Descripción                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| `LORAWAN_APP_PORT`         | Puerto FPort de LoRaWAN® utilizado para los mensajes de *uplink*            |
| `LORAWAN_CONFIRMED_MSG_ON` | Solicita una confirmación del LNS de que el mensaje *uplink* fue recibido   |
| `APP_TX_DUTYCYCLE`         | Retardo en segundos entre dos mensajes *uplink*                             |


## Posicionamiento

### GNSS

Capturando una breve porción de la señal transmitida por los satélites GNSS y extrayendo la información necesaria para calcular la posición del dispositivo — los pseudo-rangos. Esta información se agrega en un mensaje NAV, que puede ser enviado a un sistema *back-end* para calcular la ubicación del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

El escáner GNSS del Wio-WM1110 tiene dos modos de operación: **autónomo** y **asistido**.

### Modo autónomo GNSS

No requiere información de asistencia de ubicación ni datos del almanaque, y está diseñado para detectar señales satelitales fuertes. Es adecuado para condiciones exteriores con buena visibilidad del cielo.

### Modo asistido GNSS

Permite una geolocalización GNSS más eficiente. La información de asistencia construye una lista de satélites visibles en el tiempo y ubicación actuales, reduciendo el espacio de búsqueda y optimizando el consumo energético. Esta información es compatible con redes LPWAN y está limitada en tamaño y frecuencia de *downlinks*. Incluye:

- Posición aproximada del LR1110  
- Hora actual  
- Información del almanaque de tamaño reducido (menos de 3 meses de antigüedad)

## Ejemplo de geolocalización GNSS

Este ejemplo ilustra el procedimiento de escaneo GNSS:

- Configuración de la biblioteca *LoRa Basics Modem*
- Ejecución del escaneo GNSS y envío de datos usando el *middleware de geolocalización GNSS*

## Configuración relacionada al ejemplo de demostración GNSS

Las siguientes constantes están definidas en el archivo `main_geolocation_gnss.h`:

| Constante                                 | Comentario                                                                 | Valores posibles     | Valor por defecto     |
| ---------------------------------------- | -------------------------------------------------------------------------- | -------------------- | --------------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | Si se establece en `true`, la posición de asistencia se obtiene automáticamente | `{true, false}`     | `true`                |

Si se usa modo manual, se deben definir estas constantes adicionales:

| Constante                                 | Comentario                                                                 | Valores posibles            | Valor por defecto   |
| ---------------------------------------- | -------------------------------------------------------------------------- | --------------------------- | ------------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | Latitud para escaneo GNSS asistido (grados decimales)                      | `float` entre -90 y 90      | `45.181454`         |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | Longitud para escaneo GNSS asistido (grados decimales)                     | `float` entre -180 y 180    | `5.720893`          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | Representación textual de la ubicación (solo informativa)                  | Cualquier `c-string`        | `"Grenoble, FRANCE"`|

**Nota:** La posición de asistencia predefinida debe estar dentro de un radio de 150 km respecto a la ubicación real.

| Constante                 | Comentario                                                                                 | Valores posibles         | Valor por defecto     |
| ------------------------ | ------------------------------------------------------------------------------------------ | ------------------------ | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | Tiempo entre el final de un escaneo y el inicio del siguiente (en segundos)               | `uint32_t`               | `30`                  |
| `GNSS_SCAN_MODE`         | Modo de escaneo GNSS (estático o móvil) para las secuencias de escaneo y envío           | Valor en `gnss_mw_mode_t`| `GNSS_MW_MODE_STATIC` |

El modo de escaneo GNSS por defecto es `GNSS_MW_MODE_STATIC`, dirigido a objetos no móviles.

## Posicionamiento Wi-Fi

Mediante la detección de puntos de acceso Wi-Fi b/g/n cercanos, se extraen las direcciones MAC para geolocalizar el dispositivo.  
El objetivo es obtener al menos **2 direcciones MAC**, que luego se envían a un servicio de búsqueda Wi-Fi en línea para obtener la posición.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>


**Geolocation Wi-Fi Example**

This application demonstrates the usage of the Wi-Fi geolocation middleware and
how the LoRa Basics Modem should be configured to meet the prerequisites for
This example illustrates the Wi-Fi scan procedure:

- configuration of the LoRa Basics Modem library; and
- execution of Wi-Fi *scan & send* feature using the *Wi-Fi geolocation middleware*.


**Configuración relacionada con la demostración de Wi-Fi**

El archivo de encabezado `main_geolocation_wifi.h` define varias constantes que pueden establecerse para definir los parámetros configurables de la aplicación.

| Constante           | Comentarios                                                                                          | Valores posibles | Valor por defecto |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ---------------- | ----------------- |
| `WIFI_SCAN_PERIOD` | Define la duración entre el final de una secuencia de escaneo y envío y el inicio de la siguiente     | `uint32_t`       | 30                |


### GNSS y Wi-Fi

**Ejemplo de geolocalización con GNSS y Wi-Fi**  
Este ejemplo ilustra la combinación de procedimientos de escaneo GNSS y Wi-Fi:

- configuración de la biblioteca del módem LoRa Basics; y  
- ejecución concurrente de las funciones de *escaneo y envío* de GNSS y Wi-Fi utilizando el  
*middleware de geolocalización GNSS* y el *middleware de geolocalización Wi-Fi*.


**Configuración relacionada con la demostración de geolocalización**

El archivo de encabezado `main_geolocation_gnss_wifi.h` define varias constantes para configurar los parámetros de geolocalización.

| Constante                                 | Comentarios                                                                                   | Valores posibles   | Valor por defecto |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------ | ----------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | Si se establece en `true`: configura la aplicación para obtener automáticamente una posición de asistencia | {`true`, `false`} | `false`           |

Si se selecciona el modo manual para la posición de asistencia, las siguientes constantes definen la posición a utilizar.

| Constante                                 | Comentarios                                                                       | Valores posibles              | Valor por defecto     |
| ---------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------- | --------------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | Latitud a usar para el escaneo asistido por GNSS (grados decimales)               | Cualquier `float` en [-90, 90]   | 45.181454             |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | Longitud a usar para el escaneo asistido por GNSS (grados decimales)              | Cualquier `float` en [-180, 180] | 5.720893              |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | Representación textual de la posición de asistencia, solo para impresión informativa | Cualquier cadena constante (`c-string`) | "Grenoble, FRANCE" |

***Nota***: La posición de asistencia predefinida debe estar dentro de un rango de 150 km de la ubicación real.

| Constante                 | Comentarios                                                                                          | Valores posibles           | Valor por defecto     |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | -------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | Define la duración entre el final de una secuencia de escaneo y envío y el inicio de la siguiente     | `uint32_t`                 | 30                    |
| `GNSS_SCAN_MODE`         | Define el modo de escaneo GNSS (estático o móvil) a usar para las secuencias de escaneo y envío       | Valor en `gnss_mw_mode_t`  | `GNSS_MW_MODE_MOBILE` |

El modo de escaneo GNSS seleccionado por defecto es `GNSS_MW_MODE_MOBILE`, lo que significa que este ejemplo de aplicación está dirigido a objetos móviles.


## BLE

Bluetooth de Bajo Consumo (BLE), también conocido como Bluetooth Low Energy, es una tecnología de comunicación inalámbrica diseñada para proporcionar un método de comunicación de baja potencia y baja complejidad para dispositivos que requieren un suministro de energía a largo plazo, bajas tasas de transferencia de datos y distancias cortas de comunicación. Optimizado a partir de la tecnología Bluetooth, BLE tiene un menor consumo de energía y una pila de protocolos más simple, lo que lo hace adecuado para aplicaciones de bajo consumo y del Internet de las Cosas (IoT).

El Wio-WM1110 cuenta con un Bluetooth de Bajo Consumo basado en el chip nRF52840.


## Pruebas con la rutina de Bluetooth

Existe un ejemplo llamado **'Bluetooth: Peripheral UART'** en el SDK. La prueba requiere que te hayas conectado al ejemplo y tengas abierto el emulador de terminal correspondiente.

La demostración BLE se encuentra en:
`nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/ble_app_uart/pca10056/s140/ses/`

* [Prueba con un dispositivo móvil](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_mobile.html)
* [Prueba con una computadora](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_desktop.html)

---

## Sensores Integrados

### Sensor de Temperatura y Humedad (SHT41)

El **SHT41** es un sensor digital de humedad y temperatura que se comunica con un microcontrolador u otro dispositivo digital mediante una interfaz I2C.

Este sensor se utiliza comúnmente en una amplia gama de aplicaciones, incluyendo sistemas HVAC, estaciones meteorológicas, monitoreo de la calidad del aire interior y control de procesos industriales. Su tamaño compacto, bajo consumo de energía y alta precisión lo convierten en una opción popular para muchos tipos de proyectos.

|               | Rango       | Precisión   |
| ------------- | ----------- | ----------- |
| Temperatura   | -40~125 °C  | ±0.2 °C     |
| Humedad       | 0~100 %RH   | ±1.8 %RH    |

**Código:**

Este ejemplo proporciona funciones para inicializar el sensor, leer valores de temperatura y humedad, y configurar la unidad de temperatura.

Resumen breve de las funciones definidas:

- **SHT41Init**: inicializa el sensor reiniciándolo y esperando 1 ms antes de continuar.
- **SHT41GetTemperature**, **SHT41GetHumidity** y **SHT41GetTempAndHumi**: permiten leer los valores de temperatura y/o humedad desde el sensor. Estas funciones convierten los valores crudos del sensor en valores `float` en grados Celsius o Fahrenheit, dependiendo de la configuración de la unidad de temperatura.
- **SHT41SetTemperatureUnit** y **SHT41GetTemperatureUnit**: permiten establecer y obtener la unidad de temperatura.
- **crc8**: función interna que calcula la suma de verificación CRC-8 de un arreglo de bytes.

---

### Acelerómetro de 3 ejes (LIS3DHTR)

El **LIS3DHTR** es un sensor de alto rendimiento que mide la aceleración en tres dimensiones y proporciona lecturas precisas y confiables.

Este sensor se comunica con un microcontrolador u otro dispositivo digital mediante una interfaz I2C o SPI. También incluye características avanzadas como interrupciones programables y una amplia gama de modos de ahorro de energía para minimizar el consumo.

| Rango        | Ancho de banda      | Sensibilidad (LSB/g)     |
| ------------ | ------------------- | ------------------------- |
| ±2g, 4g, 8g, 16g | 0.5 Hz ~ 625 Hz     | 1000 (±2g) ~ 83 (±16g)    |

 
## Grove

El DK cuenta con 3 interfaces Grove, que pueden conectarse a más de 400 módulos Grove y soportan los protocolos de transmisión ADC, UART e IIC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/grove_pins.png" alt="pir" width={600} height="auto" /></p>


### Grove IIC

En el DK hay un puerto Grove IIC, con `SDA` en el pin 27 y `SCL` en el pin 26. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

Para conectar un módulo Grove IIC, es necesario habilitar la alimentación del sensor: `I2C_PWR` (pin 7). Este pin controla el voltaje de pull-up en la línea de señal IIC:

```cpp
#define IIC_POWER          7
```
TWI necesita ser habilitado en el archivo `sdk_config.h` antes de usarse.

```cpp
// <e> TWI_ENABLED - nrf_drv_twi - TWI/TWIM peripheral driver - legacy layer
//==========================================================
#ifndef TWI_ENABLED
#define TWI_ENABLED 1
#endif
// <e> TWI0_ENABLED - Enable TWI0 instance
//==========================================================
#ifndef TWI0_ENABLED
#define TWI0_ENABLED 1
#endif
// <q> TWI0_USE_EASY_DMA  - Use EasyDMA (if present)
#ifndef TWI0_USE_EASY_DMA
#define TWI0_USE_EASY_DMA 1
#endif
// </e>
// <e> TWI1_ENABLED - Enable TWI1 instance
//==========================================================
#ifndef TWI1_ENABLED
#define TWI1_ENABLED 1
#endif
// <q> TWI1_USE_EASY_DMA  - Use EasyDMA (if present)
 #ifndef TWI1_USE_EASY_DMA
#define TWI1_USE_EASY_DMA 1
#endif
```

**Código de ejemplo**

Este ejemplo lee el valor del [sensor de Temperatura y Humedad SHT41](https://wiki.seeedstudio.com/Grove-SHT4x/) a través de la interfaz IIC y lo imprime en el monitor serial.


```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_error.h"
#include "sht41.h"
#include "nrf_drv_twi.h"

int main(void)
{   
    float   temp = 0;
    float   humi = 0;
    hal_i2c_master_init( );
    hal_gpio_init_out( SENSOR_POWER, HAL_GPIO_SET ); 
    nrf_delay_ms(10);

    SHT41Init();
    
    while(1){
        SHT41GetTempAndHumi(&temp,&humi);
        nrf_delay_ms(1000);  
        printf("temperatura:%.3f humedidad:%.3f\n",temp,humi);
    }

}
```

Después obtendras los valores de humedad y temperatura:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/valueSHT41.png" alt="pir" width={500} height="auto" /></p>


### Grove UART

El Wio-WM1110 DK cuenta con dos periféricos UART, denominados `uart0` y `uart1`. Los pines de `uart0` están conectados al CH340C para propósitos de depuración, mientras que `uart1` funciona como un puerto Grove UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>


En cuanto al esquemático, TXD se encuentra en el pin 8 y RXD en el pin 6. 


```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

:::tip Nota
Excepto en las interfaces analógicas como ADC, el chip nRF52840 tiene pines fijos para otros periféricos digitales. Sin embargo, otros periféricos digitales pueden reasignarse a cualquier pin. Por ejemplo, las configuraciones de pines RXD y TXD pueden intercambiarse.
:::

El UART debe habilitarse en el archivo `sdk_config.h` antes de su uso:

```cpp
/ <e> NRFX_UARTE_ENABLED - nrfx_uarte - UARTE peripheral driver
//==========================================================
#ifndef NRFX_UARTE_ENABLED
#define NRFX_UARTE_ENABLED 1
#endif
// <o> NRFX_UARTE0_ENABLED - Enable UARTE0 instance 
#ifndef NRFX_UARTE0_ENABLED
#define NRFX_UARTE0_ENABLED 1
#endif

// <o> NRFX_UARTE1_ENABLED - Enable UARTE1 instance 
#ifndef NRFX_UARTE1_ENABLED
#define NRFX_UARTE1_ENABLED 1
#endif

// <e> UART_ENABLED - nrf_drv_uart - UART/UARTE peripheral driver - legacy layer
//==========================================================
#ifndef UART_ENABLED
#define UART_ENABLED 1
#endif
```


**Código de ejemplo**

El siguiente código de muestra implementa las funciones de transmisión y recepción por puerto serial con retroalimentación.


```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "smtc_hal.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}


int main(void)
{
    uint32_t err_code;
    uart.comm_params = &commParams;
    uint8_t arr[] = "hello world\n";
    nrf_gpio_cfg_output(LED1);
    nrf_gpio_cfg_output(LED2);
    nrf_gpio_pin_clear(LED1);
    nrf_gpio_pin_clear(LED2);
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );
    
    
    while( 1 )
    {
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
        uart_tx(arr,strlen(arr));
    }
}
            
void uart_handleEvent(app_uart_evt_t * p_event)
{
	uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
	
    else if (p_event->evt_type == APP_UART_DATA_READY)
	{
		app_uart_get(&uart,&dat); 
		app_uart_put(&uart,dat); 
	}
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
	{
		nrf_gpio_pin_toggle(LED1);
	}
}
```


### Grove ADC

El DK cuenta con ocho periféricos ADC (0~7), donde `ADC6` y `ADC7` se utilizan como puerto Grove ADC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_adc.png" alt="pir" width={300} height="auto" /></p>

:::tip Nota
Los pines ADC son fijos y no pueden reasignarse.
:::

La correspondencia de los pines ADC se muestra en la siguiente tabla:

| ADC0 | ADC1 | ADC2 | ADC3 | ADC4 | ADC5 | ADC6 | ADC7 |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| 2    | 3    | 4    | 5    | 28   | 29   | 30   | 31   |

El SAADC debe habilitarse en el archivo `sdk_config.h` antes de su uso:


```cpp
// <e> SAADC_ENABLED - nrf_drv_saadc - SAADC peripheral driver - legacy layer
//==========================================================
#ifndef SAADC_ENABLED
#define SAADC_ENABLED 1
#endif
// <e> NRFX_SAADC_ENABLED - nrfx_saadc - SAADC peripheral driver
//==========================================================
#ifndef NRFX_SAADC_ENABLED
#define NRFX_SAADC_ENABLED 1
#endif
// <o> SAADC_CONFIG_RESOLUTION  - Resolution
 
// <0=> 8 bit 
// <1=> 10 bit 
// <2=> 12 bit 
// <3=> 14 bit 

#ifndef SAADC_CONFIG_RESOLUTION
#define SAADC_CONFIG_RESOLUTION 2
#endif
```

**Código de ejemplo**

Este es un programa de ejemplo para ADC6, que implementa la función de leer el valor de entrada analógica de un solo canal del pin ADC6 y emitir el valor medido del ADC a través del UART:


```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"
#include "nrf_drv_saadc.h"
#define     LED1                     13
#define     LED2                     14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}

void ADC_Interrupt(nrfx_saadc_evt_t const *p_event){
    
}

void uart_handleEvent(app_uart_evt_t * p_event)
{
	uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
	
    else if (p_event->evt_type == APP_UART_DATA_READY)
	{
		app_uart_get(&uart,&dat); 
		//app_uart_put(&uart,dat); 
	}
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
	{
		//nrf_gpio_pin_toggle(LED1);
	}
}

int main(void)
{
    nrf_saadc_value_t  saadc_val = 0; 
    uint8_t arr[32];
    nrf_saadc_channel_config_t channel_config = 
    {                                                   
        .resistor_p = NRF_SAADC_RESISTOR_DISABLED,      
        .resistor_n = NRF_SAADC_RESISTOR_DISABLED,      
        .gain       = NRF_SAADC_GAIN1_6,                
        .reference  = NRF_SAADC_REFERENCE_INTERNAL,     
        .acq_time   = NRF_SAADC_ACQTIME_10US,           
        .mode       = NRF_SAADC_MODE_SINGLE_ENDED,      
        .burst      = NRF_SAADC_BURST_DISABLED,         
        .pin_p      = NRF_SAADC_INPUT_AIN6,       
        .pin_n      = NRF_SAADC_INPUT_DISABLED          
    };
    
    nrf_drv_saadc_init(NULL, ADC_Interrupt);
    nrf_drv_saadc_channel_init(0, &channel_config);

    uart.comm_params = &commParams;
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );

    nrf_gpio_cfg_output(LED2);
    while( 1 )
    {
        nrf_drv_saadc_sample_convert (0,&saadc_val);
        sprintf(arr,"value:%d\n",saadc_val);
        uart_tx(arr,strlen(arr));
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
    }
}

```


## Recursos

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)


## Soporte Técnico y Discusión de Producto

**¡Necesitas ayuda con tu Wio-WM1110 Dev Kit? ¡Estamos aquí para ayudarte!**

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>