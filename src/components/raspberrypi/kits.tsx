import React from 'react';
import './kits.css';

const items = [
  {
    id: 1,
    name_en: "Grove Base Kit for Raspberry Pi",
    name_ja: "Raspberry Pi用Groveベースキット",
    description_en: "Seeed Grove starter kit contains one Grove Base Hat(for Raspberry Pi ) and 10 Grove modules",
    description_ja: "Seeed Groveスターターキットは、Raspberry Pi用のGroveベースハット1台と10個のGroveモジュールを含みます",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png",
    wikiPage: "./Grove_Base_Kit_for_Raspberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Grove-Base-Kit-for-Raspberry-Pi-p-2945.html"
  },
  {
    id: 2,
    name_en: "LoRa/LoRaWAN Gateway Kit",
    name_ja: "LoRa/LoRaWANゲートウェイキット",
    description_en: "Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",
    description_ja: "すべてのLoRaノードからデータを収集・転送するための基本要素を提供。数分でIoTプロトタイプを構築可能",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png",
    wikiPage: "./LoRa_LoRaWan_Gateway_Kit",
    purchasePage: "https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3.html"
  },
  {
    id: 3,
    name_en: "Grove Starter Kit for Microsoft IoT",
    name_ja: "Microsoft IoT用Groveスターターキット",
    description_en: "Seeed and Microsoft have worked together to alleviate some of the challenges in complex setup using Windows 10 IoT Core and Grove modules",
    description_ja: "SeeedとMicrosoftが協力し、Windows 10 IoT CoreとGroveモジュールを使用した複雑なセットアップの課題を軽減",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg",
    wikiPage: "./Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Grove-Starter-Kit-for-IoT-based-on-Raspberry-Pi.html"
  },
];

const Value = ({ lang = "en" }) => {
  return (
    <div>
      <div className="rpi_item_container">
        {items.map((item) => (
          <div key={item.id} className='rpi_item_grid'>
            <div className="rpi_item_vertical">
              <span className='rpi_item_description'>
                <h2>{lang === "ja" ? item.name_ja : item.name_en}</h2>
                <p>{lang === "ja" ? item.description_ja : item.description_en}</p>
              </span>
              <span className='rpi_item_compatible'>
                <h3>{lang === "ja" ? "対応機種" : "Compatible With"}</h3>
                <p>{lang === "ja" ? item.compatibleWith_ja : item.compatibleWith_en}</p>
              </span>
            </div>

            <img
              className={"rpi_item_pic " + (item.id % 2 ? 'reverse' : '')}
              src={item.image}
              alt={lang === "ja" ? item.name_ja : item.name_en}
            />

            <span className='grid_item_center pagelink'>
              <a href={item.purchasePage} target="_blank" rel="noopener noreferrer">
                {lang === "ja" ? "🖱️ 今すぐ購入" : "🖱️ Buy Now"}
              </a>
            </span>

            <span className='grid_item_center pagelink'>
              <a href={item.wikiPage} target="_blank" rel="noopener noreferrer">
                {lang === "ja" ? "📚 はじめに" : "📚 Getting Started"}
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value;
