---
description: reComputer J20 の使い方
title: reComputer J20 の使い方
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recomputer_j20_with_jetson_getting_start
last_update:
  date: 05/15/2025
  author: Yaohui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer J20 の使い方
<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061363_preview-07_1.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 概要
reComputer J20 シリーズは Jetson Xavier NX を搭載した強力でコンパクトなインテリジェントエッジボックスで、最大 21TOPS の最新 AI パフォーマンスをエッジに提供します。NVIDIA Ampere™ GPU アーキテクチャと 64 ビットの動作能力を組み合わせています。

完全なシステムには、NVIDIA Jetson Xavier NX プロダクションモジュール、ヒートシンク、電源アダプターが含まれています。reComputer J20 は Jetpack 4.6 がプリインストールされており、開発を簡素化し、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなどの業界でオブジェクト検出、自然言語処理、医療画像処理、ロボティクスに取り組むエッジ AI ソリューションプロバイダーに適しています。

## 特徴

- **生産向けの優れた AI パフォーマンス:** 最大 21 TOPS の AI パフォーマンスを低消費電力と低遅延でオンデバイス処理
- **手のひらサイズのエッジ AI デバイス:** コンパクトなサイズ（130mm x 120mm x 58.5mm）、NVIDIA Jetson Xavier NX プロダクションモジュール、ヒートシンク、電源アダプターを含む。デスクトップ、壁掛け、どこにでも設置可能
- **包括的な認証:** FCC、CE、RoHS、UKCA

## 仕様

<table>
  <thead>
    <tr>
      <th>仕様</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J2022</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J2021</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J2012</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J2011</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>モジュール</td>
      <td>Jetson Xavier NX 16GB</td>
      <td>Jetson Xavier NX 8GB</td>
      <td>Jetson Xavier NX 16GB</td>
      <td>Jetson Xavier NX 8G</td>
    </tr>
    <tr>
      <td>AI パフォーマンス</td>
      <td colSpan='4' align='center'>21 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colspan='4' align='center'>384コア NVIDIA Volta™ GPU</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='4'>6コア NVIDIA Carmel ARM®v8.2 64ビット CPU 6 MB L2 + 4 MB L3</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>16 GB 128ビット LPDDR4x 59.7GB/s</td>
      <td>8 GB 128ビット LPDDR4x @ 59.7GB/s</td>
      <td>16 GB 128ビット LPDDR4x 59.7GB/s</td>
      <td>8 GB 128ビット LPDDR4x @ 59.7GB/s</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colSpan='4' align='center'>16 GB eMMC</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td colSpan='4' align='center'>2x 4K60 | 4x 4K30 | 10x 1080p60 | 22x 1080p30 (H.265) <br />
      2x 4K60 | 4x 4K30 | 10x 1080p60 | 20x 108p30 (H.264)</td>
    </tr>
    <tr>
      <td>ビデオデコーダ</td>
      <td colSpan='4' align='center'>2x 8K30 | 6x 4K60 | 12x 4K30 | 22x 1080p60 | 44x 1080p30 (H.265)  <br />
      2x 4K60 | 6x 4K30 | 10x 1080p60 | 22x 1080p30 (H.264)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan='4' align='center'>1*HDMI Type A; 1*DP</td>
    </tr>
    <tr>
      <td>CSI カメラ</td>
      <td colSpan='4' align='center'>2*CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>ネットワーキング</td>
      <td colSpan='4' align='center'>1* ギガビットイーサネット (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='2' align='center'>4 * USB 3.1 Type A コネクタ；
1* USB Type-C (デバイスモード)</td>
      <td colSpan='2' align='center'>4 * USB 3.0 Type A コネクタ；
1 * Micro-USB ポート (デバイスモード)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan='4' align='center'>1* FAN(5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='2' align='center'>RTC 2ピンRTCソケット</td>
      <td colSpan='2' align='center'>1*RTC ソケット</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan='2' align='center'>12V/5A(バレルジャック 5.5/2.5mm)</td>
      <td colSpan='2' align='center'>DC ジャック 19V 4.75A (最大 90W)</td>
    </tr>
    <tr>
      <td>機械的仕様</td>
      <td colSpan='4' align='center'>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## JetPack のフラッシュ

:::info
reComputer J20 は J202 キャリアボードによって駆動されています。  
JetPack のフラッシュに関する詳細は、この [Wiki ページ](/ja/reComputer_J2021_J202_Flash_Jetpack) を参照してください。
:::

## インターフェースの使用

:::info
reComputer J20 は J202 キャリアボードによって駆動されています。このインターフェースは J30/J40 と同じ設計を使用しています。  
インターフェースの使用に関する詳細は、この [Wiki ページ](/J401_carrierboard_Hardware_Interfaces_Usage) を参照してください。
:::

## リソース
[reComputer J202x データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComputer J202x キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J202x 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio エッジ AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson デバイス ワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>