---
description: PID adjustment for reCamera Gimbal
title: Gimbal PID Adjustment
keywords:
  - AI
  - reCamera
  - Gimbal
  - PID
  - Motor
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/PID_nodered.webp
slug: /recamera_pid_adjustment
sidebar_position: 5
last_update:
  date: 04/08/2025
  author: Dawn Yao
---

# reCamera Gimbal PID Settings

## What is PID?

PID stands for Proportional–Integral–Derivative control. It is a feedback mechanism used to precisely control motor movement based on target angles and speed. Each component plays a specific role:

- **P (Proportional)**: 

  Determines how strongly the motor reacts to the current error (difference between the desired and actual value).

- **I (Integral)**: 

  Helps eliminate residual steady-state error by accumulating past errors over time.

- **D (Derivative)**: 
  
  Predicts future error based on the rate of change, used to dampen the response and reduce overshooting.

      ⚠️ Warning: Modifying PID settings incorrectly can result in excessive motor strain or heat buildup, which may damage the motor over time. Please proceed with caution when tuning PID values.

## Adjust PID with Node-RED

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/PID_nodered.png" /></div>

The default dashboard allows you to adjust the PID parameters for each motor using the text input boxes. After entering the values, click Save PID Settings to apply the changes.

Yaw Axis:
- Angle PID

      kp = 50
      ki = 0
      kd = 0

- Speed PID

      kp = 260
      ki = 20
      kd = 0

Pitch Axis:
- Angle PID

      kp = 50
      ki = 0
      kd = 0

- Speed PID

      kp = 100
      ki = 20
      kd = 0

If you delete or modified the flow and would like to restore it, you can use the following json. 
```json
[{"id":"cc4fa65c792db7e2","type":"tab","label":"PID Control","disabled":false,"info":"","env":[]},{"id":"486ca54827378f08","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw angle kp","label":"Yaw angle kp","order":2,"width":0,"height":0,"topic":"yawAngleKp","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":150,"y":80,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"b4f5a7c749aaf50b","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw angle ki","label":"Yaw angle ki","order":3,"width":0,"height":0,"topic":"yawAngleKi","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":150,"y":120,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"9bbda02a3f464b9c","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw angle kd","label":"Yaw angle kd","order":4,"width":0,"height":0,"topic":"yawAngleKd","topicType":"str","mode":"text","tooltip":"Usually not needed","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":150,"y":160,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"238754ae8ef4fe4d","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw speed kp","label":"Yaw speed kp","order":6,"width":0,"height":0,"topic":"yawSpeedKp","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":280,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"4b84ecf3ba7ec5fe","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw speed ki","label":"Yaw speed ki","order":7,"width":0,"height":0,"topic":"yawSpeedKi","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":150,"y":320,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"887584e5c2a1a232","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"eb68b89500627338","name":"Yaw speed kd","label":"Yaw speed kd","order":8,"width":0,"height":0,"topic":"yawSpeedKd","topicType":"str","mode":"text","tooltip":"Usually not needed","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":360,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"372914c6ec32df4e","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch angle kp","label":"Pitch angle kp","order":2,"width":0,"height":0,"topic":"pitchAngleKp","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":460,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"6efa572a3dce8635","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch angle ki","label":"Pitch angle ki","order":3,"width":0,"height":0,"topic":"pitchAngleKi","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":500,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"ed858ab093332ace","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch angle kd","label":"Pitch angle kd","order":4,"width":0,"height":0,"topic":"pitchAngleKd","topicType":"str","mode":"text","tooltip":"Usually not needed","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":540,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"9ec2abda6b790f54","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch speed kp","label":"Pitch speed kp","order":6,"width":0,"height":0,"topic":"pitchSpeedKp","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":660,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"8e84cd5ae33d92e2","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch speed ki","label":"Pitch speed ki","order":7,"width":0,"height":0,"topic":"pitchSpeedKi","topicType":"str","mode":"text","tooltip":"","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":700,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"59d46006e8c6d39b","type":"ui-text-input","z":"cc4fa65c792db7e2","group":"944f240637232c4b","name":"Pitch speed kd","label":"Pitch speed kd","order":8,"width":0,"height":0,"topic":"pitchSpeedKd","topicType":"str","mode":"text","tooltip":"Usually not needed","delay":300,"passthru":true,"sendOnDelay":false,"sendOnBlur":true,"sendOnEnter":true,"className":"","clearable":false,"sendOnClear":false,"icon":"","iconPosition":"left","iconInnerPosition":"inside","x":160,"y":740,"wires":[["d1f3c8b3.9c3b9"]]},{"id":"4d5a3b8e.4c1b3","type":"ui-button","z":"cc4fa65c792db7e2","group":"800d559a9f15602f","name":"Save PID Settings","label":"Save PID Settings","order":1,"width":3,"height":0,"emulateClick":false,"tooltip":"","color":"","bgcolor":"","className":"","icon":"","iconPosition":"left","payload":"","payloadType":"str","topic":"save_pid","topicType":"str","buttonColor":"","textColor":"","iconColor":"","enableClick":true,"enablePointerdown":false,"pointerdownPayload":"","pointerdownPayloadType":"str","enablePointerup":false,"pointerupPayload":"","pointerupPayloadType":"str","x":510,"y":420,"wires":[["e51b9162051b9a96"]]},{"id":"d1f3c8b3.9c3b9","type":"function","z":"cc4fa65c792db7e2","name":"Generate PID Config","func":"// 初始化 PID 参数对象（存储在 context 中，避免全局污染）\ncontext.global.pidParams = context.global.pidParams || {\n    yawAngle: { Kp: 50, Ki: 0, Kd: 0 },\n    yawSpeed: { Kp: 200, Ki: 20, Kd: 0 },\n    pitchAngle: { Kp: 50, Ki: 0, Kd: 0 },\n    pitchSpeed: { Kp: 100, Ki: 20, Kd: 0 }\n};\n\n// 提取 msg.topic 中的参数类型（例如 \"yawAngleKp\" -\u003E [\"yawAngle\", \"Kp\"]）\nconst topicParts = msg.topic.match(/(yaw|pitch)(Angle|Speed)(Kp|Ki|Kd)/i);\nif (topicParts) {\n    const [_, type, mode, param] = topicParts; // 解构匹配结果\n    const key = ${type.toLowerCase()}${mode}; // 例如 \"yawAngle\"\n\n    // 动态更新对应的 PID 参数（如果输入为空，则设置为 '^'）\n    if (context.global.pidParams[key]) {\n        const value = msg.payload.trim(); // 去除前后空格\n        context.global.pidParams[key][param] = (value === \"\") ? \"^\" : parseFloat(value);\n    }\n}\n\n// 生成配置行（处理可能的 '^' 符号）\nconst { yawAngle, yawSpeed, pitchAngle, pitchSpeed } = context.global.pidParams;\n\n// 辅助函数：将值转换为字符串（如果是 '^' 则直接使用，否则转为数字）\nconst formatValue = (val) =\u003E (val === \"^\") ? \"^\" : val;\n\nconst yawAnglePIDLine = 1 0A ${formatValue(yawAngle.Kp)} ${formatValue(yawAngle.Ki)} ${formatValue(yawAngle.Kd)};\nconst yawSpeedPIDLine = 1 0B ${formatValue(yawSpeed.Kp)} ${formatValue(yawSpeed.Ki)} ${formatValue(yawSpeed.Kd)};\nconst pitchAnglePIDLine = 2 0A ${formatValue(pitchAngle.Kp)} ${formatValue(pitchAngle.Ki)} ${formatValue(pitchAngle.Kd)};\nconst pitchSpeedPIDLine = 2 0B ${formatValue(pitchSpeed.Kp)} ${formatValue(pitchSpeed.Ki)} ${formatValue(pitchSpeed.Kd)};\n\n// 合并为多行字符串\nmsg.payload = [\n    yawAnglePIDLine,\n    yawSpeedPIDLine,\n    pitchAnglePIDLine,\n    pitchSpeedPIDLine\n].join(\"\\n\");\n\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":500,"y":340,"wires":[[]]},{"id":"a1b2c3d4.5678e9","type":"file","z":"cc4fa65c792db7e2","name":"Save PID Config","filename":"/home/recamera/.gimbal_pid","filenameType":"str","appendNewline":true,"createDir":true,"overwriteFile":"true","encoding":"utf8","x":1080,"y":420,"wires":[[]]},{"id":"e51b9162051b9a96","type":"function","z":"cc4fa65c792db7e2","name":"Send PID Config","func":"// 生成配置行\nconst { yawAngle, yawSpeed, pitchAngle, pitchSpeed } = context.global.pidParams;\n// 生成四行配置\nconst yawAnglePIDLine = 1 0A ${yawAngle.Kp} ${yawAngle.Ki} ${yawAngle.Kd};\nconst yawSpeedPIDLine = 1 0B ${yawSpeed.Kp} ${yawSpeed.Ki} ${yawSpeed.Kd};\nconst pitchAnglePIDLine = 2 0A ${pitchAngle.Kp} ${pitchAngle.Ki} ${pitchAngle.Kd};\nconst pitchSpeedPIDLine = 2 0B ${pitchSpeed.Kp} ${pitchSpeed.Ki} ${pitchSpeed.Kd};\n\n// 合并为多行字符串\nmsg.payload = [\n    yawAnglePIDLine,\n    yawSpeedPIDLine,\n    pitchAnglePIDLine,\n    pitchSpeedPIDLine\n].join(\"\\n\"); // 用换行符连接\n\nreturn msg;","outputs":1,"timeout":0,"noerr":0,"initialize":"","finalize":"","libs":[],"x":830,"y":420,"wires":[["a1b2c3d4.5678e9"]]},{"id":"63a60476f1f25797","type":"ui-text","z":"cc4fa65c792db7e2","group":"eb68b89500627338","order":1,"width":0,"height":0,"name":"Yaw Angle Recommend PID","label":"Angle PID Recommended: Kp = 50; Ki = 0; Kd = 0","format":"{{msg.payload}}","layout":"row-spread","style":false,"font":"","fontSize":16,"color":"#717171","wrapText":false,"className":"","x":200,"y":40,"wires":[]},{"id":"6e6a453706f099be","type":"ui-text","z":"cc4fa65c792db7e2","group":"eb68b89500627338","order":5,"width":0,"height":0,"name":"Yaw Speed Recommend PID","label":"Speed PID Recommended: Kp = 260; Ki = 20; Kd = 0","format":"{{msg.payload}}","layout":"row-spread","style":false,"font":"","fontSize":16,"color":"#717171","wrapText":false,"className":"","x":200,"y":240,"wires":[]},{"id":"986642415d11c6f2","type":"ui-text","z":"cc4fa65c792db7e2","group":"944f240637232c4b","order":1,"width":0,"height":0,"name":"Pitch Angle Recommend PID","label":"Angle PID Recommended: Kp = 50; Ki = 0; Kd = 0","format":"{{msg.payload}}","layout":"row-spread","style":false,"font":"","fontSize":16,"color":"#717171","wrapText":false,"className":"","x":200,"y":420,"wires":[]},{"id":"1798f80fcc4b79b0","type":"ui-text","z":"cc4fa65c792db7e2","group":"944f240637232c4b","order":5,"width":0,"height":0,"name":"Pitch Speed Recommend PID","label":"Speed PID Recommended: Kp = 260; Ki = 20; Kd = 0","format":"{{msg.payload}}","layout":"row-spread","style":false,"font":"","fontSize":16,"color":"#717171","wrapText":false,"className":"","x":210,"y":620,"wires":[]},{"id":"eb68b89500627338","type":"ui-group","name":"Yaw Axis","page":"c315d27890fbd048","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"944f240637232c4b","type":"ui-group","name":"Pitch Axis","page":"c315d27890fbd048","width":"6","height":"1","order":2,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"800d559a9f15602f","type":"ui-group","name":"Send Config","page":"c315d27890fbd048","width":"12","height":"1","order":3,"showTitle":false,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"c315d27890fbd048","type":"ui-page","name":"PID Control","ui":"e2f7615831d73e4b","path":"/pid_control","icon":"fa-sliders","layout":"grid","theme":"f5ee49967f8103a8","breakpoints":[{"name":"Default","px":"0","cols":"3"},{"name":"Tablet","px":"576","cols":"6"},{"name":"Small Desktop","px":"768","cols":"9"},{"name":"Desktop","px":"1024","cols":"12"}],"order":2,"className":"","visible":"true","disabled":"false"},{"id":"e2f7615831d73e4b","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"f5ee49967f8103a8","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094ce","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}}]
```

### When to Adjust PID

If your gimbal's 3D-printed parts are experiencing **increased friction**, the motors may struggle to move as expected. In such cases, you can improve motor performance by:

  - Increasing the P and I values in the Speed PID section to apply stronger correction.

  - Usually, the D value is left at 0 and does not need adjustment unless you're handling overshoot or oscillation issues.

## Command Line: Adjusting PID via Terminal

In addition to the dashboard interface, you can also adjust or retrieve PID settings using terminal commands.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/terminal_pid.png" /></div>

### Retrieving Current PID Settings

To check the current PID values for a specific motor and control mode, use the following command:

```bash
gimbal pid <id> <a|s>
```

    &lt;id&gt;: Motor ID

        1 = Yaw Axis

        2 = Pitch Axis

    &lt;a|s&gt;: Control Type

        a = Angle PID

        s = Speed PID

Example:

```bash
gimbal pid 1 a
```

This command retrieves the angle PID settings for the yaw axis.

### Setting PID Values

To update PID parameters, use:

```bash
gimbal pid &lt;id&gt; &lt;a|s&gt; &lt;Kp&gt; [Ki] [Kd]
```

  `&lt;Kp&gt;` is required. `[Ki]` and `[Kd]` are optional.

If you want to keep the current value for Ki or Kd, use ^ as a placeholder.

    Range for each parameter: 0–2000

Examples:

```bash
gimbal pid 1 a 100 0 0
```

Sets yaw axis angle PID to: Kp = 100, Ki = 0, Kd = 0

```bash
gimbal pid 2 s 100 ^ ^
```

Sets pitch axis speed PID to: Kp = 100 while keeping the existing Ki and Kd values unchanged.

### Parameter file path

PID settings are stored in:

```bash
/home/recamera/.gimbal_pid
```

Be cautious when updating PID values via the terminal. Incorrect settings can lead to instability or potential hardware damage.