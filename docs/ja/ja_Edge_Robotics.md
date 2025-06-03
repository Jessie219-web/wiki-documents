---
description: このトピックでは、Seeed Studioのロボティクス製品ドキュメントを紹介します。
title: ロボティクスページ
keywords:
- ロボティクス
- nvidia
- ros
- isaac
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/robotics_page
last_update:
  date: 2025/05/29
  author: ZhuYaohui
---

# 🤖 ロボティクスナビゲーション

> *「今日の科学は明日の技術である。」 - エドワード・テラー*

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a href="#robot-kits" className="nav-item">
      <span className="icon">📦</span>
      <span className="text">ロボットキット</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#actuators" className="nav-item">
      <span className="icon">⚙️</span>
      <span className="text">アクチュエータ</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#sensors" className="nav-item">
      <span className="icon">👁️</span>
      <span className="text">センサー</span>
      <div className="hover-effect"></div>
    </a>
    <a href="#software" className="nav-item">
      <span className="icon">💻</span>
      <span className="text">ソフトウェア</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>

<div className="nav-grid">

## 📦 ロボットキット {#robot-kits}

<div className="category-card robot-kits">

## 🤗 Lerobot

- [SO100/101 アーム](/ja/lerobot_so100m/) <span className="tag stable">更新</span>  
- [SO100 アーム（IsaacSim対応）](/ja/lerobot_so100m_isaacsim/)
- [Lekiwi モバイルベース](/ja/lerobot_lekiwi/) <span className="tag recommended">新着</span>

## その他

- **近日公開予定**

</div>

## ⚙️ アクチュエータ {#actuators}

<div className="category-card actuators">

- [MyActuator シリーズモーター](/ja/myactuator_series/) <span className="tag recommended">新着</span>

</div>

## 👁️ センサー {#sensors}

<div className="category-card sensors">

**LiDAR システム**  

- [Robosense LiDAR](/ja/robosense_lidar/)  
- [MID360 LiDAR](/ja/mid360/)  
- [A-LOAM アルゴリズム](/ja/a_loam/)  

**ビジョンシステム**  

- [Orbbec 深度カメラ](/ja/orbbec_depth_camera_on_ros/)  
- [CSI カメラセットアップ](/ja/csi_camera_on_ros/)

</div>

## 💻 ソフトウェア {#software}

<div className="category-card software">

**ROS エコシステム**  

- [ROS1 インストール](/ja/installing_ros1/) <span className="tag recommended">新着</span>
- [IsaacROS セットアップ](/ja/install_isaacros/) <span className="tag recommended">新着</span>
- [ROS2 Humble](/ja/install_ros2_humble/) <span className="tag recommended">新着</span>
- [AprilTag モジュール](/ja/isaac_ros_apriltag/) <span className="tag recommended">新着</span>
- [Visual SLAM](/ja/isaac_ros_visual_slam/) <span className="tag recommended">新着</span>

**NVIDIA Isaac**  

- [Isaac Lab インストール](/ja/install_isaaclab/)

</div>

</div>



<style>{`
/* ナビゲーションコンテナ */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* ナビゲーション本体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

/* ナビゲーション項目 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none !important;
  color: #333;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  z-index: 1;
}

/* アイコンスタイル */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* テキストスタイル */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* ホバーエフェクト */
.nav-item .hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px;
  transition: height 0.3s ease;
  z-index: -1;
}

/* ホバーアニメーション */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .quick-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-item {
    flex-direction: row;
    justify-content: start;
    padding: 0.8rem 1rem;
  }
  .nav-item .icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
}
`}</style>


<style>{`
/* コンテンツカード拡張版スタイル */
.nav-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.category-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
}

/* カテゴリカラーラベル */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* ホバーエフェクト */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* リンクアニメーション */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

.category-card a:hover::after {
  width: 100%;
}

/* タグスタイル拡張 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable { 
  background: #e6f4ea; 
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

.recommended { 
  background: #fce8e6; /* 背景色 */
  color: #a50e0e; /* 文字色 */
  box-shadow: 0 2px 4px rgba(200,0,0,0.1); /* 影の効果 */
}
.category-card:active {
  transform: translateY(-2px) scale(0.98); /* 押された時の変形 */
  box-shadow: 0 6px 10px rgba(0,0,0,0.1); /* 押された時の影の効果 */
}
/* レスポンシブ最適化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr; /* グリッド列を1列に変更 */
  }
  
  .category-card {
    padding: 1.2rem; /* パディングの調整 */
  }
}
`}</style>
