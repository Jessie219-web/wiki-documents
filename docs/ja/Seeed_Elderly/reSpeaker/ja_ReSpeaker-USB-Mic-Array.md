---
description: ReSpeaker USB Mic Array
title: ReSpeaker USB Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker-USB-Mic-Array
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/ReSpeaker-USB-Mics-box-preview.jpg)

すぐに使える音声収集デバイスは、顧客の声を拾い上げます。

過去1年間で、[Respeaker Mic Array V2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) は開発ボード形式で10,000台以上販売されました。顧客からは、音響原理を考慮すると設計が難しいため、筐体付きの完全なデバイスを求める声が寄せられています。

そこで、SeeedはReSpeaker USB Mic Arrayでその答えを提供します：

- 音響構造がよく設計されたすぐに使えるデバイスで、顧客が自分のソリューションに組み込む柔軟性を提供します。
- 成形注入された筐体が利用可能で、市場投入までの時間と金型コストを削減します。

ReSpeaker USB Mic Array内部のPCBAとRespeaker Mic Array V2.0の違い：

- 電源回路の最適化
- オーディオジャックとマイクロUSBポートを背面に移動

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 遠距離音声キャプチャ
- USB Audio Class 1.0 (UAC 1.0) 対応
- 4つのマイクロフォンアレイ
- 12個のプログラム可能なRGB LEDインジケーター
- 音声アルゴリズムと機能
  - 音声活動検出
  - 到来方向検出
  - ビームフォーミング
  - ノイズ抑制
  - 残響除去
  - 音響エコーキャンセレーション

## 仕様

- XMOS製 XVF-3000
- 高性能デジタルマイク4個
- 遠距離音声キャプチャ対応
- チップ上の音声アルゴリズム
- 12個のプログラム可能なRGB LEDインジケーター  
- マイクロフォン: ST MP34DT01TR-M  
- 感度: -26 dBFS (全方向性)  
- 音響過負荷点: 120 dBSPL  
- SNR: 61 dB  
- 電源供給: Micro USBからの5V DC
- 寸法: 直径70mm  
- 3.5mmオーディオジャック出力ソケット
- 消費電力: LEDオン時5V, 180mA、LEDオフ時170mA
- 最大サンプルレート: 16kHz

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/ReSpeaker-Mic-Array-v2.1/img/hardware_overview.jpg)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000:**
高度なDSPアルゴリズムを統合しており、音響エコーキャンセレーション（AEC）、ビームフォーミング、残響除去、ノイズ抑制、ゲイン制御を含みます。

- **<font face="" size="3" font color="ff0000">②</font> デジタルマイクロフォン:**
MP34DT01-Mは超小型、低消費電力、全方向性のデジタルMEMSマイクで、容量性センサー要素とICインターフェースを備えています。

- **<font face="" size="3" font color="ff0000">③</font> RGB LED:**
三色のRGB LED。

- **<font face="" size="3" font color="ff0000">④</font> USBポート:**
電源供給とマイクアレイの制御を提供します。

- **<font face="" size="3" font color="ff0000">⑤</font> 3.5mmヘッドフォンジャック:**
オーディオ出力用。アクティブスピーカーやヘッドフォンをこのポートに接続できます。

- **<font face="" size="3" font color="ff0000">⑥</font> WM8960:**
WM8960は、8Ω負荷に対して1W/チャンネルを提供するクラスDスピーカードライバを備えた低消費電力ステレオコーデックです。

**システム図**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/system_diag.png)

## アプリケーション

- USB音声キャプチャ
- スマートスピーカー
- インテリジェント音声アシスタントシステム
- 音声レコーダー
- 音声会議システム
- 会議用通信機器
- 音声対話ロボット
- 車載音声アシスタント
- その他の音声インターフェースシナリオ

## はじめに

:::note
ReSpeaker USB Mic ArrayはWindows、Mac、LinuxシステムおよびAndroidに対応しています。以下のスクリプトはPython2.7でテストされています。
:::

### ファームウェアの更新

以下は違いを示す表です。

| ファームウェア                          | チャンネル数 | 備考                                                                                          |
|----------------------------------------|--------------|-----------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin                 | 1            | ASR用に処理された音声                                                                         |
| 6_channels_firmware.bin                | 6            | チャンネル0: ASR用に処理された音声、チャンネル1-4: 4つのマイクの生データ、チャンネル5: 再生データ（工場出荷時のファームウェア） |

**Linuxの場合:** Mic ArrayはUSB DFUをサポートしています。USB経由でファームウェアを更新するために、Pythonスクリプトdfu.pyを開発しました。

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download 6_channels_firmware.bin  # 6チャンネルバージョン

# 1チャンネルを使用したい場合は、以下のコマンドを使用してください:

sudo python dfu.py --download 1_channel_firmware.bin

```

以下はファームウェアダウンロード結果です。
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Download_firmware.png)

**Windows/Macの場合:** Windows/MacおよびLinux仮想マシンを使用してファームウェアを更新することは推奨しません。

### 開封後のデモ

以下は6チャンネルファームウェアを使用した音響エコーキャンセレーションの例です。

- ステップ1. USBケーブルをPCに接続し、オーディオジャックをスピーカーに接続します。

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/_DAS5930.jpg)

- ステップ2. PC側でMic Array v2.1を出力デバイスとして選択します。
- ステップ3. Audacityを起動して録音を開始します。
- ステップ4. まずPC側で音楽を再生し、その後話します。
- ステップ5. 以下のようにAudacity画面が表示されます。各チャンネルの音声を聞くには**Solo**をクリックしてください。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

チャンネル0の音声（アルゴリズムで処理済み）:

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg"></source>
</audio>

チャンネル1の音声（Mic1の生データ）:

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg"></source>
</audio>

チャンネル5の音声（再生データ）:

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg"></source>
</audio>

以下はDOAとAECに関するビデオです。

<iframe width="800" height="450" src="https://www.youtube.com/embed/gGVQ-9f7azs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### DFUおよびLEDコントロールドライバーのインストール  

- **Windows:** 音声録音と再生はデフォルトで正常に動作します。WindowsでLEDやDSPパラメータを制御するには、libusb-win32ドライバーが必要です。[便利なツール - Zadig](http://zadig.akeo.ie/)を使用して、`SEEED DFU`および`SEEED Control`のlibusb-win32ドライバーをインストールします（ReSpeaker Mic ArrayはWindowsデバイスマネージャーで2つのデバイスとして表示されます）。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    libusb-win32が選択されていることを確認してください。WinUSBやlibusbKではありません。
:::

- **MAC:** ドライバーは不要です。
- **Linux:** ドライバーは不要です。

### チューニング

**Linux/Mac/Windowsの場合:** 内蔵アルゴリズムのいくつかのパラメータを設定できます。

- パラメータの完全なリストを取得するには、FAQを参照してください。

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- 例#1、自動ゲイン制御（AGC）をオフにすることができます:

```
sudo python tuning.py AGCONOFF 0
```

- 例#2、DOA角度を確認することができます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### LEDの制御

ReSpeaker USB Mic ArrayのLEDをUSB経由で制御できます。このUSBデバイスにはベンダー固有のクラスインターフェースがあり、USBコントロール転送を通じてデータを送信できます。[pyusb Pythonライブラリ](https://github.com/pyusb/pyusb)を参考にして、[usb_pixel_ring Pythonライブラリ](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py)を作成しました。

LED制御コマンドはpyusbのusb.core.Device.ctrl_transfer()によって送信されます。そのパラメータは以下の通りです：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

以下はusb_pixel_ring APIです。

| コマンド | データ                           | API                            | 備考                                                                                                              |
|---------|----------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                             | pixel_ring.trace()             | トレースモード、LEDはVAD*およびDOA*に応じて変化します                                                              |
| 1       | [red, green, blue, 0]           | pixel_ring.mono()              | モノモード、すべてのRGB LEDを単一の色に設定します。例: 赤(0xFF0000)、緑(0x00FF00)、青(0x0000FF)                   |
| 2       | [0]                             | pixel_ring.listen()            | リスンモード、トレースモードに似ていますが、LEDをオフにしません                                                     |
| 3       | [0]                             | pixel_ring.speak()             | 待機モード                                                                                                         |
| 4       | [0]                             | pixel_ring.think()             | スピークモード                                                                                                     |
| 5       | [0]                             | pixel_ring.spin()              | スピンモード                                                                                                       |
| 6       | [r, g, b, 0] * 12               | pixel_ring.customize()         | カスタムモード、各LEDを独自の色に設定します                                                                         |
| 0x20    | [brightness]                    | pixel_ring.set_brightness()    | 明るさを設定、範囲: 0x00~0x1F                                                                                      |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0]  | pixel_ring.set_color_palette() | カラーパレットを設定、例: pixel_ring.set_color_palette(0xff0000, 0x00ff00)とpixel_ring.think()を組み合わせて使用     |
| 0x22    | [vad_led]                       | pixel_ring.set_vad_led()       | 中央LEDを設定: 0 - オフ、1 - オン、その他 - VADに依存                                                              |
| 0x23    | [volume]                        | pixel_ring.set_volume()        | 音量を表示、範囲: 0 ~ 12                                                                                          |
| 0x24    | [pattern]                       | pixel_ring.change_pattern()    | パターンを設定、0 - Google Homeパターン、その他 - Echoパターン                                                     |

**Linuxの場合:** LEDを制御する例を以下に示します。以下のコマンドを実行してデモを試してください。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

以下は `usb_mic_array.py` のコードです。

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
    while True:

        try:
            pixel_ring.wakeup()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.speak()
            time.sleep(6)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break


    pixel_ring.off()
    time.sleep(1)

```

**Windows/Macの場合:** LEDを制御する例を以下に示します。

- ステップ1. `pixel_ring` をダウンロードします。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

- ステップ2. 以下のコードを含む [led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py) を作成し、`python led_control.py` を実行します。

```python
from usb_pixel_ring_v2 import PixelRing
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
print dev
if dev:
    pixel_ring = PixelRing(dev)

    while True:
        try:
            pixel_ring.wakeup(180)
            time.sleep(3)
            pixel_ring.listen()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.set_volume(8)
            time.sleep(3)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break

    pixel_ring.off()
```

:::note
画面に "None" と表示された場合は、libusb-win32 ドライバを再インストールしてください。
:::

### DOA (到来方向)

**Windows/Mac/Linuxの場合:** DOAを確認する例を以下に示します。緑色のLEDが音声方向のインジケータです。角度についてはハードウェア概要を参照してください。

- ステップ1. `usb_4_mic_array` をダウンロードします。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- ステップ2. 以下のコードを含む [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py) を `usb_4_mic_array` フォルダ内に作成し、`sudo python DOA.py` を実行します。

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)

if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.direction
    while True:
        try:
            print Mic_tuning.direction
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- ステップ3. 以下のようにDOAが表示されます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python doa.py 
184
183
175
105
104
104
103
```

### VAD (音声活動検出)

**Windows/Mac/Linuxの場合:** VADを確認する例を以下に示します。赤色のLEDがVADのインジケータです。

- ステップ1. `usb_4_mic_array` をダウンロードします。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- ステップ2. 以下のコードを含む [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py) を `usb_4_mic_array` フォルダ内に作成し、`sudo python VAD.py` を実行します。

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
#print dev
if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.is_voice()
    while True:
        try:
            print Mic_tuning.is_voice()
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- ステップ3. 以下のようにVADが表示されます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python VAD.py 
0
0
0
1
0
1
0
```

:::note
VADのしきい値については、`GAMMAVAD_SR` を使用して設定できます。詳細は [Tuning](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#tuning) を参照してください。
:::

### 音声の抽出

USBを介して音声を抽出するために [PyAudio Pythonライブラリ](https://people.csail.mit.edu/hubert/pyaudio/) を使用します。

**Linuxの場合:** 以下のコマンドを使用して音声を録音または再生できます。

```python
arecord -D plughw:1,0 -f cd test.wav # 録音、まず arecord -l を使用してカードとハードウェアを確認してください
aplay -D plughw:1,0 -f cd test.wav # 再生、まず aplay -l を使用してカードとハードウェアを確認してください
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # 録音と再生を同時に実行
```

Pythonスクリプトを使用して音声を抽出することもできます。

- ステップ1. 以下のスクリプトを実行して、Mic Arrayのデバイスインデックス番号を取得します。

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- ステップ2. 以下のコードを [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) にコピーして貼り付けます。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- ステップ3. Ctrl + X を押して終了し、Y を押して保存します。

- ステップ4. `sudo python get_index.py` を実行し、以下のようにデバイスIDを確認します。

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- ステップ5. `RESPEAKER_INDEX = 2` をインデックス番号に変更します。以下のPythonスクリプト [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) を実行して音声を録音します。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # ファームウェアに基づいて変更、1_channel_firmware.bin は1、6_channels_firmware.bin は6
RESPEAKER_WIDTH = 2
# getDeviceInfo.py を実行してインデックスを取得
RESPEAKER_INDEX = 2  # 入力デバイスIDを参照
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

- ステップ 6. 6 チャンネルからチャンネル 0 のデータを抽出したい場合は、以下のコードを参照してください。他のチャンネル X を抽出する場合は、[0::6] を [X::6] に変更してください。

```
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # ファームウェアに基づいて変更、1_channel_firmware.bin は 1、6_channels_firmware.bin は 6
RESPEAKER_WIDTH = 2
# getDeviceInfo.py を実行してインデックスを取得
RESPEAKER_INDEX = 3  # 入力デバイス ID を参照
CHUNK = 1024
RECORD_SECONDS = 3
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* 録音中")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # 6 チャンネルからチャンネル 0 のデータを抽出、チャンネル 1 を抽出したい場合は [1::6] に変更
    a = np.fromstring(data,dtype=np.int16)[0::6]
    frames.append(a.tostring())

print("* 録音完了")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(1)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

**Windows の場合:**

- ステップ 1. 以下のコマンドを実行して pyaudio をインストールします。

```
 pip install pyaudio
```

- ステップ 2. [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) を使用してデバイスインデックスを取得します。

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- ステップ 3. [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) のデバイスインデックスとチャンネルを変更し、音声を抽出します。

```
C:\Users\XXX\Desktop>python record.py
* 録音中
* 録音完了
```

:::caution
    "Error: %1 is not a valid Win32 application." というエラーが表示された場合は、Python の Win32 バージョンをインストールしてください。
:::

**MAC の場合:**

- ステップ 1. 以下のコマンドを実行して pyaudio をインストールします。

```
 pip install pyaudio
```

- ステップ 2. [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) を使用してデバイスインデックスを取得します。

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- ステップ 3. [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) のデバイスインデックスとチャンネルを変更し、音声を抽出します。

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: このアプリケーションまたは使用しているライブラリは、Audio Units をホスティングするために非推奨の Carbon Component Manager を使用しています。このサポートは将来のリリースで削除されます。また、これによりホストがバージョン 3 の Audio Units と互換性がなくなります。AudioComponent.h の API に移行してください。
* 録音中
* 録音完了
```

### リアルタイム音源定位と追跡

[ODAS](https://github.com/introlab/odas) は Open embeddeD Audition System の略です。これは、音源の定位、追跡、分離、およびポストフィルタリングを実行するためのライブラリです。これを使って楽しみましょう。

**Linux の場合:**

- ステップ 1. ODAS を取得してビルドします。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- ステップ 2. [ODAS Studio](https://github.com/introlab/odas_web/releases) を取得して開きます。

- ステップ 3. odascore は **odas/bin/odaslive** にあり、**設定ファイル** は [odas.cfg](https://raw.githubusercontent.com/respeaker/usb_4_mic_array/master/odas.cfg) です。

- ステップ 4. 4 チャンネルの生オーディオデータを含む 6_channels_firmware.bin でマイクアレイをアップグレードします。

<iframe width="800" height="500" src="https://www.youtube.com/embed/K5gZabfaaPI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## FAQ

**Q1: 組み込みアルゴリズムのパラメータ**

```
pi@raspberrypi:~/usb_4_mic_array $ python tuning.py -p
name   type max min r/w info
-------------------------------
AECFREEZEONOFF   int 1 0 rw 適応エコーキャンセラーの更新抑制。
                                                            0 = 適応有効
                                                            1 = 適応停止、フィルタのみ
AECNORM          float 16 0.25 rw AECフィルタ係数のノルムの制限
AECPATHCHANGE    int 1 0 ro AECパス変更検出。
                                                            0 = false（パス変更なし）
                                                            1 = true（パス変更検出）
AECSILENCELEVEL  float 1 1e-09 rw AECでの信号検出の閾値 [-inf .. 0] dBov（デフォルト: -80dBov = 10log10(1x10-8)）
AECSILENCEMODE   int 1 0 ro AEC遠端の無音検出ステータス。
                                                            0 = false（信号検出）
                                                            1 = true（無音検出）
AGCDESIREDLEVEL  float 0.99 1e-08 rw 出力信号の目標電力レベル。
                                                            [−inf .. 0] dBov（デフォルト: −23dBov = 10log10(0.005)）
AGCGAIN          float 1000 1 rw 現在のAGCゲイン係数。
                                                            [0 .. 60] dB（デフォルト: 0.0dB = 20log10(1.0)）
AGCMAXGAIN       float 1000 1 rw 最大AGCゲイン係数。
                                                            [0 .. 60] dB（デフォルト: 30dB = 20log10(31.6)）
AGCONOFF         int 1 0 rw 自動ゲイン制御。
                                                            0 = OFF
                                                            1 = ON
AGCTIME          float 1 0.1 rw ランプアップ/ダウンの時定数（秒）。
CNIONOFF         int 1 0 rw コンフォートノイズ挿入。
                                                            0 = OFF
                                                            1 = ON
DOAANGLE         int 359 0 ro DOA角度。現在の値。方向はビルド構成に依存。
ECHOONOFF        int 1 0 rw エコー抑制。
                                                            0 = OFF
                                                            1 = ON
FREEZEONOFF      int 1 0 rw 適応ビームフォーマーの更新。
                                                            0 = 適応有効
                                                            1 = 適応停止、フィルタのみ
FSBPATHCHANGE    int 1 0 ro FSBパス変更検出。
                                                            0 = false（パス変更なし）
                                                            1 = true（パス変更検出）
FSBUPDATED       int 1 0 ro FSB更新決定。
                                                            0 = false（FSBは更新されていない）
                                                            1 = true（FSBは更新された）
GAMMAVAD_SR      float 1000 0 rw 音声活動検出の閾値を設定。
                                                            [−inf .. 60] dB（デフォルト: 3.5dB 20log10(1.5)）
GAMMA_E          float 3 0 rw エコー（直接および初期成分）の過剰減衰係数。最小 .. 最大減衰
GAMMA_ENL        float 5 0 rw 非線形エコーの過剰減衰係数。最小 .. 最大減衰
GAMMA_ETAIL      float 3 0 rw エコー（後尾成分）の過剰減衰係数。最小 .. 最大減衰
GAMMA_NN         float 3 0 rw 非定常ノイズの過剰減衰係数。最小 .. 最大減衰
GAMMA_NN_SR      float 3 0 rw ASR用非定常ノイズの過剰減衰係数。
                                                            [0.0 .. 3.0]（デフォルト: 1.1）
GAMMA_NS         float 3 0 rw 定常ノイズの過剰減衰係数。最小 .. 最大減衰
GAMMA_NS_SR      float 3 0 rw ASR用定常ノイズの過剰減衰係数。
                                                            [0.0 .. 3.0]（デフォルト: 1.0）
HPFONOFF         int 3 0 rw マイク信号のハイパスフィルタ。
                                                            0 = OFF
                                                            1 = ON - 70 Hzカットオフ
                                                            2 = ON - 125 Hzカットオフ
                                                            3 = ON - 180 Hzカットオフ
MIN_NN           float 1 0 rw 非定常ノイズ抑制のゲインフロア。
                                                            [−inf .. 0] dB（デフォルト: −10dB = 20log10(0.3)）
MIN_NN_SR        float 1 0 rw ASR用非定常ノイズ抑制のゲインフロア。
                                                            [−inf .. 0] dB（デフォルト: −10dB = 20log10(0.3)）
MIN_NS           float 1 0 rw 定常ノイズ抑制のゲインフロア。
                                                            [−inf .. 0] dB（デフォルト: −16dB = 20log10(0.15)）
MIN_NS_SR        float 1 0 rw ASR用定常ノイズ抑制のゲインフロア。
                                                            [−inf .. 0] dB（デフォルト: −16dB = 20log10(0.15)）
NLAEC_MODE       int 2 0 rw 非線形AECトレーニングモード。
                                                            0 = OFF
                                                            1 = ON - フェーズ1
                                                            2 = ON - フェーズ2
NLATTENONOFF     int 1 0 rw 非線形エコー減衰。
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF int 1 0 rw 非定常ノイズ抑制。
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF_SR int 1 0 rw ASR用非定常ノイズ抑制。
                                                            0 = OFF
                                                            1 = ON
RT60             float 0.9 0.25 ro 現在のRT60推定値（秒）
RT60ONOFF        int 1 0 rw AES用RT60推定。
                                                            0 = OFF
                                                            1 = ON
SPEECHDETECTED   int 1 0 ro 音声検出ステータス。
                                                            0 = false（音声未検出）
                                                            1 = true（音声検出）
STATNOISEONOFF   int 1 0 rw 定常ノイズ抑制。
                                                            0 = OFF
                                                            1 = ON
STATNOISEONOFF_SR int 1 0 rw ASR用定常ノイズ抑制。
                                                            0 = OFF
                                                            1 = ON
TRANSIENTONOFF   int 1 0 rw 瞬間エコー抑制。
                                                            0 = OFF
                                                            1 = ON
VOICEACTIVITY    int 1 0 ro VAD音声活動ステータス。
                                                            0 = false（音声活動なし）
                                                            1 = true（音声活動あり）
```

**Q2: ImportError: No module named usb.core**

A2: `pyusb` をインストールするには、以下のコマンドを実行してください。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
Traceback (most recent call last):
  File "tuning.py", line 5, in <module>
    import usb.core
ImportError: No module named usb.core
pi@raspberrypi:~/usb_4_mic_array $ sudo pip install pyusb
Collecting pyusb
  Downloading pyusb-1.0.2.tar.gz (54kB)
    100% |████████████████████████████████| 61kB 101kB/s 
Building wheels for collected packages: pyusb
  Running setup.py bdist_wheel for pyusb ... done
  Stored in directory: /root/.cache/pip/wheels/8b/7f/fe/baf08bc0dac02ba17f3c9120f5dd1cf74aec4c54463bc85cf9
Successfully built pyusb
Installing collected packages: pyusb
Successfully installed pyusb-1.0.2
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

**Q3: Raspberry Alexa アプリケーションの例はありますか？**

A3: はい、Mic Array v2.0 を Raspberry Pi の USB ポートに接続し、[Raspberry Pi Quick Start Guide with Script](https://github.com/alexa/avs-device-sdk/wiki/Raspberry-Pi-Quick-Start-Guide-with-Script) に従って Alexa と音声対話を行うことができます。

**Q4: Mic Array v2.1 を ROS システムで使用する例はありますか？**

A4: はい、Yuki さんが共有してくださった [ReSpeaker USB Mic Array を ROS (Robot Operating System) ミドルウェアと統合するパッケージ](https://github.com/furushchev/respeaker_ros) を参考にしてください。

**Q5: USB ポートと同様に 3.5mm オーディオポートで信号を受信するにはどうすればよいですか？**

A5: [新しいファームウェア](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin) をダウンロードし、[ファームウェアの更新方法](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#update-firmware) に従って XMOS を書き込んでください。

**Q6: "sudo pip install pyaudio" 実行時に #include "portaudio.h" エラーが発生します。**

A6: 以下のコマンドを実行して問題を解決してください。

```
sudo apt-get install portaudio19-dev
```

## リソース

- **[PDF]** [ReSpeaker USB Mic Array Dimension](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/dimension.pdf)
- **[DWG]** [ReSpeaker USB Mic Array Case 3D Model](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/case.dwg)
- **[PDF]** [XVF3000 Product Brief](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [XVF3000 Datasheet](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>