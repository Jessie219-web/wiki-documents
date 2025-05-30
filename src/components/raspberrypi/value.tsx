import React, { useState } from 'react';
import './value.css';

const featureContents = {
  en: {
    rpifeature1: 'The Raspberry Pi is a low-cost computer that is affordable for everyone. The price of a Raspberry Pi ranges from $5 to $55, depending on the model',
    rpifeature2: 'The Raspberry Pi can be used for a wide range of projects, from home automation to gaming to robotics. It can also run a variety of operating systems, including Linux and Android',
    rpifeature3: 'The Raspberry Pi is easy to set up and use, even for beginners. It comes with a stable Raspbian operating system and a huge number of enthusiasts are constantly developing new applications for it',
    rpifeature4: 'The Raspberry Pi is small and lightweight, making it easy to carry around and use in different locations',
  },
  ja: {
    rpifeature1: 'Raspberry Piは低価格なコンピュータで、誰でも手に入れやすいです。モデルによって5ドルから55ドルの価格帯です。',
    rpifeature2: 'Raspberry Piはホームオートメーション、ゲーム、ロボティクスなど幅広いプロジェクトに使えます。LinuxやAndroidなど多様なOSも動作します。',
    rpifeature3: 'Raspberry Piは初心者でも簡単にセットアップして使えます。安定したRaspbian OSが搭載され、多くの愛好家が新しいアプリを開発しています。',
    rpifeature4: 'Raspberry Piは小型で軽量なので、持ち運びやすく色々な場所で使えます。',
  }
};

const Value = ({ lang = 'en' }) => {
  const [activeFeature, setActiveFeature] = useState(null);

  const texts = featureContents[lang] || featureContents.en;

  return (
    <div>
      <div className='feature-container'>
        <div
          id='rpifeature1'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature1')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          💰 {lang === 'ja' ? '手頃な価格' : 'Affordability'}
        </div>
        <div
          id='rpifeature2'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature2')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🧩 {lang === 'ja' ? '多用途' : 'Versatility'}
        </div>
        <div
          id='rpifeature3'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature3')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🚀 {lang === 'ja' ? '使いやすさ' : 'Ease of use'}
        </div>
        <div
          id='rpifeature4'
          className='feature'
          onMouseEnter={() => setActiveFeature('rpifeature4')}
          onMouseLeave={() => setActiveFeature(null)}
        >
          🐜 {lang === 'ja' ? 'サイズ' : 'Size'}
        </div>
      </div>

      <div className='feature-explanation'>
        <p>{activeFeature ? texts[activeFeature] : (lang === 'ja' ? '特徴にカーソルを合わせて説明を表示します' : 'Hover over a feature to see explanation')}</p>
      </div>
    </div>
  );
};

export default Value;
