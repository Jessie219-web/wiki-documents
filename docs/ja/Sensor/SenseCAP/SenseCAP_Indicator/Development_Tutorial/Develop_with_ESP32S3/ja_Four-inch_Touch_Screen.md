---
description: 4インチタッチスクリーン
title: 4インチタッチスクリーン
keywords:
- SenseCAP Indicator ESP32 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **4インチタッチスクリーン**

SenseCAP Indicatorは4インチのタッチスクリーンを搭載しており、必要なUIインターフェースをカスタマイズすることができます。
このチュートリアルでは、SenseCAP IndicatorでLvGL（Light and Versatile Graphics Library）グラフィックスライブラリを使用する方法を説明します。

**ピクセル座標系**

デジタル2D画像はピクセルの行と列で構成されています。画像内のピクセルは、どの列とどの行にあるかを指定することで特定されます。簡単に言えば、ピクセルは列番号と行番号を提供する整数のペアで識別されます。

通常、列は左上から右へ向かってゼロから番号が付けられますが、場合によっては他の角から開始することもあります（回転を設定することで）。

**16ビットカラーモデル**

ピクセルは色の形式でも表現されるため、いくつかのカラーモデルについても触れておくと良いでしょう。16ビットカラーモデルはMCUでの作業に適しているため、良い出発点となります。このカラーモデルは、赤、緑、青の3つのカラーコンポーネントで構成されています。カラーモデルによって、これらの3つのカラーコンポーネントは16ビット変数に格納されます。

| ビット  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **データ** | 赤   | 赤   | 赤   | 赤   | 赤   | 緑   | 緑   | 緑   | 緑   | 緑   | 緑   | 青   | 青   | 青   | 青   | 青   |

**LCDスクリーンの初期化**

SenseCAP IndicatorでLCDスクリーンを初期化するには、以下のコードを使用します：

```c
lcd init:
bsp_board_init()
```

# **技術サポート**

ご安心ください！私たちがサポートします。質問がある場合は、[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)をご訪問ください。

大量注文やカスタマイズの要件がある場合は、iot@seeed.ccまでお問い合わせください。