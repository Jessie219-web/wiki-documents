---
description: reCameraジンバルのPID調整
title: ジンバルPID調整
keywords:
  - AI
  - reCamera
  - ジンバル
  - PID
  - モーター
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/PID_nodered.webp
slug: /ja/recamera_pid_adjustment
sidebar_position: 5
last_update:
  date: 05/15/2025
  author: Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reCameraジンバルPID設定

## PIDとは？

PIDは比例・積分・微分制御（Proportional–Integral–Derivative control）の略称です。これは、目標角度や速度に基づいてモーターの動きを正確に制御するためのフィードバックメカニズムです。各コンポーネントは特定の役割を果たします：

- **P（比例）**: 

  現在の誤差（目標値と実際の値の差）に対してモーターがどれだけ強く反応するかを決定します。

- **I（積分）**: 

  過去の誤差を時間とともに累積することで、残留する定常状態の誤差を排除します。

- **D（微分）**: 
  
  変化率に基づいて将来の誤差を予測し、応答を抑制してオーバーシュートを減少させます。

      ⚠️ 警告: PID設定を誤って変更すると、モーターに過度の負荷や熱がかかり、長期的にモーターが損傷する可能性があります。PID値を調整する際は慎重に行ってください。

## Node-REDでPIDを調整する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/PID_nodered.png" /></div>

デフォルトのダッシュボードでは、各モーターのPIDパラメータをテキスト入力ボックスを使用して調整できます。値を入力した後、「Save PID Settings」をクリックして変更を適用します。

Yaw軸:
- 角度PID

      kp = 50
      ki = 0
      kd = 0

- 速度PID

      kp = 260
      ki = 20
      kd = 0

Pitch軸:
- 角度PID

      kp = 50
      ki = 0
      kd = 0

- 速度PID

      kp = 100
      ki = 20
      kd = 0

フローを削除または変更して元に戻したい場合は、以下のJSONを使用できます。
```json
[{"id":"cc4fa65c792db7e2","type":"tab","label":"PID Control","disabled":false,"info":"","env":[]},{"id":"486ca54827378f08","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw angle kp","label":"Yaw angle kp","order":2,"width":0,"height":0,"topic":"yawAngleKp","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":150,"y":80,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"b4f5a7c749aaf50b","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw angle ki","label":"Yaw angle ki","order":3,"width":0,"height":0,"topic":"yawAngleKi","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":150,"y":120,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"9bbda02a3f464b9c","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw angle kd","label":"Yaw angle kd","order":4,"width":0,"height":0,"topic":"yawAngleKd","topicType":"str","mode":"text","tooltip":"Usually not needed","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":150,"y":160,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"238754ae8ef4fe4d","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw speed kp","label":"Yaw speed kp","order":6,"width":0,"height":0,"topic":"yawSpeedKp","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":280,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"4b84ecf3ba7ec5fe","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw speed ki","label":"Yaw speed ki","order":7,"width":0,"height":0,"topic":"yawSpeedKi","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":150,"y":320,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"887584e5c2a1a232","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw speed kd","label":"Yaw speed kd","order":8,"width":0,"height":0,"topic":"yawSpeedKd","topicType":"str","mode":"text","tooltip":"Usually not needed","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":360,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"372914c6ec32df4e","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch angle kp","label":"Pitch angle kp","order":2,"width":0,"height":0,"topic":"pitchAngleKp","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":460,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"6efa572a3dce8635","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch angle ki","label":"Pitch angle ki","order":3,"width":0,"height":0,"topic":"pitchAngleKi","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":500,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"ed858ab093332ace","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch angle kd","label":"Pitch angle kd","order":4,"width":0,"height":0,"topic":"pitchAngleKd","topicType":"str","mode":"text","tooltip":"Usually not needed","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":540,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"9ec2abda6b790f54","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch speed kp","label":"Pitch speed kp","order":6,"width":0,"height":0,"topic":"pitchSpeedKp","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":660,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"8e84cd5ae33d92e2","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch speed ki","label":"Pitch speed ki","order":7,"width":0,"height":0,"topic":"pitchSpeedKi","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":700,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"59d46006e8c6d39b","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch speed kd","label":"Pitch speed kd","order":8,"width":0,"height":0,"topic":"pitchSpeedKd","topicType":"str","mode":"text","tooltip":"Usually not needed","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":740,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"4d5a3b8e.4c1b3","type":"ui-button","z":"cc4fa65c792db7e2","group":"800d559a9f15602f","name":"Save PID Settings","label":"Save PID Settings","order":1,"width":3,"height":0,"emulateClick":false,"tooltip":"","color":"","bgcolor":"","className":"","icon":"","iconPosition":"left","payload":"","payloadType":"str","topic":"save_pid","topicType":"str","buttonColor":"","textColor":"","iconColor":"","enableClick":true,"enablePointerdown":false,"pointerdownPayload":"","pointerdownPayloadType":"str","enablePointerup":false,"pointerupPayload":"","pointerupPayloadType":"str","x":510,"y":420,"wires":[["e51b9162051b9a96"]]},{"id":"d1f3c8b3.9c3b9","type":"function","z":"cc4fa65c792db7e2","name":"Generate PID Config","func":"// 初始化 PID 参数对象（存储在 context 中，避免全局污染）\ncontext.global.pidParams = context.global.pidParams || {\n    yawAngle: { Kp: 50, Ki: 0, Kd: 0 },\n    yawSpeed: { Kp: 200, Ki: 20, Kd: 0 },\n    pitchAngle: { Kp: 50, Ki: 0, Kd: 0 },\n    pitchSpeed: { Kp: 100, Ki: 20, Kd: 0 }\n};\n\n// 提取 msg.topic 中的参数类型（例如 \"yawAngleKp\" -\u003E [\"yawAngle\", \"Kp\"]）\nconst topicParts = msg.topic.match(/(yaw|pitch)(Angle|Speed)(Kp|Ki|Kd)/i);\nif (topicParts) {\n    const [_, type, mode, param] = topicParts; // 解构匹配结果\n    const key = ${type.toLowerCase()}${mode}; // 例如 \"yawAngle\"\n\n    // 动态更新对应的 PID 参数（如果输入为空，则设置为 '^'）\n    if (context.global.pidParams[key]) {\n        const value = msg.payload.trim(); // 去除前后空格\n        context.global.pidParams[key][param] = (value === \"\") ? \"^\" : parseFloat(value);\n    }\n}\n\n// 生成配置行（处理可能的 '^' 符号）\nconst { yawAngle, yawSpeed, pitchAngle, pitchSpeed } = context.global.pidParams;\n\n// 辅助函数：将值转换为字符串（如果是 '^' 则直接使用，否则转为数字）\nconst formatValue = (val) =\u003E (val === \"^\") ? \"^\" : val;\n\nconst yawAnglePIDLine = 1 0A ${formatValue(yawAngle.Kp)} ${formatValue(yawAngle.Ki)} ${formatValue(yawAngle.Kd)};\nconst yawSpeedPIDLine = 1 0B ${formatValue(yawSpeed.Kp)} ${formatValue(yawSpeed.Ki)} ${formatValue(yawSpeed.Kd)};\nconst pitchAnglePIDLine = 2 0A ${formatValue(pitchAngle.Kp)} ${formatValue(pitchAngle.Ki)} ${formatValue(pitchAngle.Kd)};\nconst pitchSpeedPIDLine = 2 0B ${formatValue(pitchSpeed.Kp)} ${formatValue(pitchSpeed.Ki)} ${formatValue(pitchSpeed.Kd)};\n\n// 合并为多行字符串\nmsg.payload = [\n    yawAnglePIDLine,\n    yawSpeedPIDLine,\n    pitchAnglePIDLine,\n    pitchSpeedPIDLine\n].join(\"\\n\");\n\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":500,"y":340,"wires":[[]]},{"id":"a1b2c3d4.5678e9","type":"file","z":"cc4fa65c792db7e2","name":"Save PID Config","filename":"/home/recamera/.gimbal_pid","filenameType":"str","appendNewline":true,"createDir":true,"overwriteFile":"true","encoding":"utf8","x":1080,"y":420,"wires":[[]]},{"id":"e51b9162051b9a96","type":"function","z":"cc4fa65c792db7e2","name":"Send PID Config","func":"// 生成配置行\nconst { yawAngle, yawSpeed, pitchAngle, pitchSpeed } = context.global.pidParams;\n// 生成四行配置\nconst yawAnglePIDLine = 1 0A ${yawAngle.Kp} ${yawAngle.Ki} ${yawAngle.Kd};\nconst yawSpeedPIDLine = 1 0B ${yawSpeed.Kp} ${yawSpeed.Ki} ${yawSpeed.Kd};\nconst pitchAnglePIDLine = 2 0A ${pitchAngle.Kp} ${pitchAngle.Ki} ${pitchAngle.Kd};\nconst pitchSpeedPIDLine = 2 0B ${pitchSpeed.Kp} ${pitchSpeed.Ki} ${pitchSpeed.Kd};\n\n// 合并为多行字符串\nmsg.payload = [\n    yawAnglePIDLine,\n    yawSpeedPIDLine,\n    pitchAnglePIDLine,\n    pitchSpeedPIDLine\n].join(\"\\n\"); // 用换行符连接\n\nreturn msg;","outputs":1,"timeout":0,"noerr":0,"initialize":"","finalize":"","libs":[],"x":830,"y":420,"wires":[["a1b2c3d4.5678e9"]]},{"id":"63a60476f1f25797","type":"ui-text","z":"cc4fa65c792db7e2","group":"eb68b89500627338","order":1,"width":0,"height":0,"name":"Yaw Angle Recommend PID","label":"Angle PID Recommended: Kp = 50; Ki = 0; Kd = 0","format":"{{msg.payload}}","layout":"row-spread","style":false,"font":"","fontSize":16,"color":"#717171","wrapText":false,"className":"","x":200,"y":40,"wires":[]},{"id":"6e6a453706f099be","type":"ui-text","z":"cc4fa65c792db7e2","group":"eb68b89500627338","order":5,"width":0,"height":0,"name":"Yaw Speed Recommend PID","label":"Speed PID Recommended: Kp = 260; Ki = 20; Kd = 0","format":"{{msg.payload}}","layout":"row-spread","style":false,"font":"","fontSize":16,"color":"#717171","wrapText":false,"className":"","x":200,"y":240,"wires":[]},{"id":"986642415d11c6f2","type":"ui-text","z":"cc4fa65c792db7e2","group":"944f240637232c4b","order":1,"width":0,"height":0,"name":"Pitch Angle Recommend PID","label":"Angle PID Recommended: Kp = 50; Ki = 0; Kd = 0","format":"{{msg.payload}}","layout":"row-spread","style":false,"font":"","fontSize":16,"color":"#717171","wrapText":false,"className":"","x":200,"y":420,"wires":[]},{"id":"1798f80fcc4b79b0","type":"ui-text","z":"cc4fa65c792db7e2","group":"944f240637232c4b","order":5,"width":0,"height":0,"name":"Pitch Speed Recommend PID","label":"Speed PID Recommended: Kp = 260; Ki = 20; Kd = 0","format":"{{msg.payload}}","layout":"row-spread","style":false,"font":"","fontSize":16,"color":"#717171","wrapText":false,"className":"","x":210,"y":620,"wires":[]},{"id":"eb68b89500627338","type":"ui-group","name":"Yaw Axis","page":"c315d27890fbd048","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"944f240637232c4b","type":"ui-group","name":"Pitch Axis","page":"c315d27890fbd048","width":"6","height":"1","order":2,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"800d559a9f15602f","type":"ui-group","name":"Send Config","page":"c315d27890fbd048","width":"12","height":"1","order":3,"showTitle":false,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"c315d27890fbd048","type":"ui-page","name":"PID Control","ui":"e2f7615831d73e4b","path":"/pid_control","icon":"fa-sliders","layout":"grid","theme":"f5ee49967f8103a8","breakpoints":[{"name":"Default","px":"0","cols":"3"},{"name":"Tablet","px":"576","cols":"6"},{"name":"Small Desktop","px":"768","cols":"9"},{"name":"Desktop","px":"1024","cols":"12"}],"order":2,"className":"","visible":"true","disabled":"false"},{"id":"e2f7615831d73e4b","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"f5ee49967f8103a8","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094ce","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}}]
```

### PID を調整するタイミング

もしジンバルの3Dプリント部品が**摩擦の増加**を経験している場合、モーターが期待通りに動作しない可能性があります。このような場合、以下の方法でモーターの性能を向上させることができます：

  - Speed PID セクションの P 値と I 値を増加させ、より強い補正を適用する。

  - 通常、D 値は 0 のままにしておきますが、オーバーシュートや振動の問題に対処する場合を除き、調整する必要はありません。

## コマンドライン：ターミナルで PID を調整する

ダッシュボードインターフェースに加えて、ターミナルコマンドを使用して PID 設定を調整または取得することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/terminal_pid.png" /></div>

### 現在の PID 設定を取得する

特定のモーターと制御モードの現在の PID 値を確認するには、以下のコマンドを使用します：

```bash
gimbal pid &lt;id&gt; &lt;a|s&gt;
```

    `<id>`: モーター ID

        1 = ヨー軸

        2 = ピッチ軸

    `<a|s>`: 制御タイプ

        a = Angle PID（角度 PID）

        s = Speed PID（速度 PID）

例：

```bash
gimbal pid 1 a
```

このコマンドは、ヨー軸の角度 PID 設定を取得します。

### PID 値を設定する

PID パラメータを更新するには、以下を使用します：

```bash
gimbal pid &lt;id&gt; &lt;a|s&gt; &lt;Kp&gt; [Ki] [Kd]
```

  `&lt;Kp&gt;` は必須です。`[Ki]` と `[Kd]` はオプションです。

Ki または Kd の現在の値を保持したい場合は、`^` をプレースホルダーとして使用します。

    各パラメータの範囲：0–2000

例：

```bash
gimbal pid 1 a 100 0 0
```

ヨー軸の角度 PID を以下に設定します：Kp = 100, Ki = 0, Kd = 0

```bash
gimbal pid 2 s 100 ^ ^
```

ピッチ軸の速度 PID を以下に設定します：Kp = 100、既存の Ki と Kd の値は変更しません。

### パラメータファイルのパス

PID 設定は以下に保存されています：

```bash
/home/recamera/.gimbal_pid
```

ターミナルを介して PID 値を更新する際は注意してください。不適切な設定は、不安定さやハードウェアの損傷を引き起こす可能性があります。