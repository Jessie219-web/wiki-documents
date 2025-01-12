---
description: 本维基提供 SO ARM100 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: 如何在 Lerobot 中使用 SO100Arm 机器人手臂
keywords:
- Lerobot
- Huggingface
- 机械臂
- 机器人
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /cn/lerobot_so100m
last_update:
  date: 2024-12-24
  author: ZhuYaoHui
---

# 如何从0搭建具身智能Lerobot SO-ARM100机械臂并完成自定义抓取任务

[SO-100ARM](https://github.com/TheRobotStudio/SO-ARM100) 是由 [TheRobotStudio](https://www.therobotstudio.com/) 发起的一个完全开源的机器人手臂项目。它包括跟随臂和领导机器人手臂，并提供详细的3D打印文件和操作指南。[LeRobot](https://github.com/huggingface/lerobot/tree/main) 致力于为真实世界的机器人提供 PyTorch 中的模型、数据集和工具。其目标是降低机器人学的入门门槛，使每个人都能通过共享数据集和预训练模型进行贡献和受益。LeRobot 集成了经过验证的前沿方法，专注于模仿学习和强化学习。它提供了一套预训练模型、包含人类收集的示范数据集和仿真环境，使用户无需进行机器人组装即可开始使用。未来几周，计划在当前最具成本效益和性能的机器人上增强对真实世界机器人的支持。

### 项目介绍
SO-ARM100 和 reComputer Jetson AI 智能机器人套件无缝结合了高精度的机器人手臂控制与强大的 AI 计算平台，提供了全面的机器人开发解决方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 SO-ARM100 机器人手臂和 LeRobot AI 框架，为用户提供适用于教育、科研和工业自动化等多种场景的智能机器人系统。

本维基提供了 SO ARM100 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

### 主要特点
1. **高精度机器人手臂**：SO-ARM100 机器人手臂采用高精度伺服电机和先进的运动控制算法，适用于抓取、组装和检测等多种任务。
2. **reComputer Jetson 平台**：它使用 SeeedStudio reComputer Jetson Orin 或 AGX Orin 开发套件作为 AI 计算平台，支持深度学习、计算机视觉和数据处理任务，提供强大的计算能力。
3. **AI 驱动**：集成了 Hugging Face 的 LeRobot AI 框架，支持自然语言处理（NLP）和计算机视觉，使机器人能够智能理解指令并感知环境。
4. **开源且灵活扩展**：这是一个开源平台，易于定制和扩展，适合开发者和研究人员进行二次开发，并支持多种传感器和工具的集成。
5. **多场景应用**：适用于教育、科研、自动化生产和机器人等领域，帮助用户在各种复杂任务中实现高效且精准的机器人操作。

<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746823350929&bvid=BV14T6JY3EHs&cid=27627752110&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>


# 规格参数
本教程硬件由[矽递科技Seeed Studio](https://www.seeedstudio.com/)提供
| 规格 | [标准版](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | [专业版](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html) |
|--|--|--|
| 自由度 | 6 | 6 |
| 最大扭矩 | 19.5kg.cm @7.4V | 30kg.cm @12V |
| 伺服电机 | STS3215总线伺服 | STS3215总线伺服 |
| 电源 | 5.5mm*2.1mm DC 5V4A | 5.5mm*2.1mm DC 12V1A |
| 角度传感器 | 12位磁性编码器 | 12位磁性编码器 |
| 推荐工作温度范围 | 0℃～40℃ | 0℃～40℃ |
| 通信方式 | UART | UART |
| 控制方式 | 电脑 | 电脑 |

# 材料清单（BOM）

| 部件 | 数量 | 是否包含|
|--|--|--|
| STS3215伺服电机 | 12 | ✅ |
| 电机控制板 | 2 | ✅ |
| USB-C线缆（2条） | 1 | ✅ |
| 电源适配器 | 2 | ✅ |
| 桌面夹具 | 1 | ❌ |
| 手臂的3D打印部件 | 1 | ❌ |


> 3D打印部件和桌面夹具未包含在产品中。然而，我们提供了详细的[3D打印STL文件](https://makerworld.com/zh/models/908660)。


# 3D打印指南

各种3D打印机均可用于打印从动和主动手臂所需的部件。按照以下步骤确保良好的打印质量：

1. **选择打印机**: 提供的STL文件可直接在多种FDM打印机上打印。以下为测试和建议设置，其他设置也可能有效：
    - 材料: PLA
    - 喷嘴直径和精度: 0.4mm喷嘴直径，层高0.2mm；或0.6mm喷嘴直径，层高0.4mm。
    - 填充密度: 13%

2. **获取3D打印文件**: 从动和主动手臂的所有部件均包含在单个文件中，并以Z轴向上正确定向，最小化支撑需求。

    对于打印床尺寸为220mm x 220mm（如Ender）的打印机，打印：
    - [Print_Follower_SO_ARM100_08_Ender.STL](https://github.com/TheRobotStudio/SO-ARM100/blob/main/stl_files_for_3dprinting/Follower/Print_Follower_SO_ARM100_08k_Ender.STL)
    - [Print_Leader_SO_ARM100_08_Ender.STL](https://github.com/TheRobotStudio/SO-ARM100/blob/main/stl_files_for_3dprinting/Leader/Print_Leader_SO_ARM100_08k_Ender.STL)

    对于打印床尺寸为205mm x 250mm（如Prusa/Up）的打印机，打印：
    - [Print_Follower_SO_ARM100_08_UP_Prusa.STL](https://github.com/TheRobotStudio/SO-ARM100/blob/main/stl_files_for_3dprinting/Follower/Print_Follower_SO_ARM100_08k_UP_Prusa.STL)
    - [Print_Leader_SO_ARM100_08_UP_Prusa.STL](https://github.com/TheRobotStudio/SO-ARM100/blob/main/stl_files_for_3dprinting/Leader/Print_Leader_SO_ARM100_08k_UP_Prusa.STL)

    为方便下载，我们已将所有文件打包至[Makerworld平台](https://makerworld.com/zh/models/908660)，包括桌面夹具的文件。

# 安装Lerobot

在你的reComputer Nvidia Jetson上：
1. 安装Miniconda：
	```bash
	mkdir -p ~/miniconda3
	cd ~/miniconda3
	wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
	chmod +x Miniconda3-latest-Linux-aarch64.sh
	./Miniconda3-latest-Linux-aarch64.sh
	```
2. 重新启动Shell或执行 `source ~/.bashrc`

3. 创建并激活一个新的conda环境：
	```bash 
	conda create -y -n lerobot python=3.10 && conda activate lerobot
	```

4. 克隆Lerobot仓库：
	```bash
	git clone https://github.com/huggingface/lerobot.git ~/lerobot
	```

5. 安装Lerobot及依赖：
	```bash
	cd ~/lerobot && pip install -e ".[feetech]"
	```
	Linux用户需额外安装录制数据集的依赖项：
	```bash
	conda install -y -c conda-forge ffmpeg
	pip uninstall -y opencv-python
	conda install -y -c conda-forge "opencv>=4.10.0"
	```

# 校准舵机并组装机械臂

官方提供了Youtube[组装视频](https://www.youtube.com/watch?v=FioA2oeFZ5I) ，我们也粗略的记录了我们的舵机校准和机械臂安装过程。


<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746789925626&bvid=BV1uP6JY5EH3&cid=27745060436&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>

要查找每个机械臂的正确端口，请运行实用脚本两次：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

识别领导臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0031751`，或在 Linux 上可能为 `/dev/ttyACM0`）：
识别跟随臂端口时的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0032081`，或在 Linux 上可能为 `/dev/ttyACM1`）：

故障排除：在 Linux 上，你可能需要通过运行以下命令来赋予 USB 端口访问权限：
```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

插入你的第一个电机并运行此脚本将其 ID 设置为 1。它还会将当前位置设置为 2048，因此预期你的电机会旋转：
```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

注意：这些电机目前有一定的限制。它们只能接受 0 到 4096 之间的值，对应于一整圈。它们不能旋转超过这个范围。2048 是这个范围的中间值，所以我们可以向逆时针方向移动 -2048 步（180 度）达到最大范围，或向顺时针方向移动 +2048 步（180 度）达到最大范围。配置步骤还将归位偏移设置为 0，因此如果你组装机械臂时有误，可以始终更新归位偏移以补偿最多 ±2048 步（±180 度）的偏移。

然后拔下你的电机，插入第二个电机并将其 ID 设置为 2。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

对所有电机重复此过程，直到 ID 为 6。领导臂的 6 个电机也同样操作。现在你可以开始组装你的机械臂了。

# 校准

接下来，你需要校准你的 SO-100 机器人，以确保领导臂和跟随臂在相同物理位置时具有相同的位置值。此校准至关重要，因为它允许在一个 SO-100 机器人上训练的神经网络在另一个机器人上运行。

<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806637856&bvid=BV12M6JY6EWf&cid=27627684047&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>


> 机械臂的校准应严格按照 Lerobot 官方教程中的
> ["Calibrate"](https://github.com/huggingface/lerobot/blob/main/examples/10_use_so100.md#calibrate)
> 步骤进行。


首先，您需要确保 `\lerobot\lerobot\configs\robot\so100.yaml` 文件中机器人手臂的串口号与您的设备一致，如下图所示。您可以根据 `ls /dev/ttyACM*` 查看所有串口名称。

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so100yaml.png" />
</div>


确保两个机械臂都已连接，然后运行以下脚本启动手动校准：
```bash
python lerobot/scripts/control_robot.py calibrate \
    --robot-path lerobot/configs/robot/so100.yaml \
    --robot-overrides '~cameras' --arms main_follower
```


# 遥操作

<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806571580&bvid=BV14M6JY6E72&cid=27744995936&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>


然后，您已准备好遥操作您的机器人！运行以下简单脚本（它不会连接并显示摄像头）：
```bash
python lerobot/scripts/control_robot.py teleoperate \
    --robot-path lerobot/configs/robot/so100.yaml \
    --robot-overrides '~cameras' \
    --display-cameras 0
```

# 显示摄像头的遥操作

<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806636901&bvid=BV12M6JY6Erv&cid=27744931613&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>

在插入您的两个 USB 摄像头后，运行以下脚本以检查摄像头的端口号。
```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

终端将打印出以下信息。

```markdown
Mac or Windows detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 2
Camera found at index 4
[...]
Connecting cameras
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(4, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000	Latency (ms): 39.52
[...]
Frame: 0046	Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

您可以在 `outputs/images_from_opencv_cameras` 目录中找到每个摄像头拍摄的图片，并确认不同位置摄像头对应的端口索引信息。然后，完成 `\lerobot\lerobot\configs\robot\so100.yaml` 文件中摄像头参数的对齐。


<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so100camerayaml.png" />
</div>


然后，您将能够在遥操作时在计算机上显示摄像头，方法是运行以下代码。这对于在记录第一个数据集之前准备您的设置非常有用。
```bash
python lerobot/scripts/control_robot.py teleoperate \
    --robot-path lerobot/configs/robot/so100.yaml
```

# 数据集制作采集

<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806571649&bvid=BV14M6JY6ELn&cid=27744994748&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>

一旦您熟悉了遥操作，您就可以使用 SO-100 记录您的第一个数据集。

如果您想使用 Hugging Face Hub 的功能来上传您的数据集，并且您之前尚未这样做，请确保您已使用具有写入权限的令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 中生成：
```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在一个变量中，以运行以下命令：
```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

记录 2 个回合并将您的数据集上传到 Hub：
```bash
python lerobot/scripts/control_robot.py record \
    --robot-path lerobot/configs/robot/so100.yaml \
    --fps 30 \
    --repo-id ${HF_USER}/so100_test \
    --tags so100 tutorial \
    --warmup-time-s 5 \
    --episode-time-s 40 \
    --reset-time-s 10 \
    --num-episodes 2 \
    --push-to-hub 1 \
    --single-task seeedstudio
```

```markdown
参数说明
- warmup-time-s: 指初始化时间。
- episode-time-s: 表示每次收集数据的时间。
- reset-time-s: 是每次数据收集之间的准备时间。
- num-episodes: 表示预期收集多少组数据。
- push-to-hub: 决定是否将数据上传到 HuggingFace Hub。
```

## 记录数据集

一旦您熟悉了遥操作，您就可以使用 SO-100 记录您的第一个数据集。

如果您想使用 Hugging Face Hub 的功能来上传您的数据集，并且您之前尚未这样做，请确保您已使用具有写入权限的令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 中生成：
```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在一个变量中，以运行以下命令：
```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

记录 2 个回合并将您的数据集上传到 Hub：
```bash
python lerobot/scripts/control_robot.py record \
    --robot-path lerobot/configs/robot/so100.yaml \
    --fps 30 \
    --repo-id ${HF_USER}/so100_test \
    --tags so100 tutorial \
    --warmup-time-s 5 \
    --episode-time-s 40 \
    --reset-time-s 10 \
    --num-episodes 2 \
    --push-to-hub 1 \
    --single-task seeedstudio
```

```markdown
参数说明
- warmup-time-s: 指初始化时间。
- episode-time-s: 表示每次收集数据的时间。
- reset-time-s: 是每次数据收集之间的准备时间。
- num-episodes: 表示预期收集多少组数据。
- push-to-hub: 决定是否将数据上传到 HuggingFace Hub。
```
## 可视化数据集

如果您使用 `--push-to-hub 1` 将数据集上传到 Hub，您可以通过复制粘贴您的仓库 ID 来 [在线可视化您的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)：
```bash
echo ${HF_USER}/so100_test
```

如果您没有使用 `--push-to-hub 0` 上传，您也可以使用以下命令在本地进行可视化：
```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so100_test
```

  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
  </div>


## 重播一个回合

现在尝试在您的机器人上重播第一个回合：
```bash
python lerobot/scripts/control_robot.py replay \
    --robot-path lerobot/configs/robot/so100.yaml \
    --fps 30 \
    --repo-id ${HF_USER}/so100_test \
    --episode 0
```

# 训练

<iframe  width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=113746806575007&bvid=BV1xM6JY6Ess&cid=27744930563&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" allowfullscreen></iframe>


要训练一个控制您机器人策略，使用 `python lerobot/scripts/train.py` 脚本。需要一些参数。以下是一个示例命令：
```bash
python lerobot/scripts/train.py \
  dataset_repo_id=${HF_USER}/so100_test \
  policy=act_so100_real \
  env=so100_real \
  hydra.run.dir=outputs/train/act_so100_test \
  hydra.job.name=act_so100_test \
  device=cuda \
  wandb.enable=false
```

让我们解释一下：
1. 我们使用 `dataset_repo_id=${HF_USER}/so100_test` 提供了数据集作为参数。
2. 我们使用 `policy=act_so100_real` 提供了策略。这将从 [`lerobot/configs/policy/act_so100_real.yaml`](https://github.com/huggingface/lerobot/blob/main/lerobot/configs/policy/act_so100_real.yaml) 加载配置。重要的是，这个策略使用两个摄像头作为输入 `laptop`，`phone`。
3. 我们使用 `env=so100_real` 提供了环境作为参数。这将从 [`lerobot/configs/env/so100_real.yaml`](https://github.com/huggingface/lerobot/blob/main/lerobot/configs/env/so100_real.yaml) 加载配置。
4. 我们提供了 `device=cuda`，因为我们在 Nvidia GPU 上训练，但如果您使用的是带有 Apple Silicon 的 Mac，可以使用 `device=mps`，否则使用 `device=cpu`。
5. 我们提供了 `wandb.enable=false` 来禁用 [Weights and Biases](https://docs.wandb.ai/quickstart) 用于可视化训练图表。这是可选的，但如果您使用它，请确保通过运行 `wandb login` 登录。

训练应该需要几个小时。您将在 `outputs/train/act_so100_test/checkpoints` 中找到检查点。

# 评估

您可以使用 [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) 中的 `record` 功能，但需要将策略检查点作为输入。例如，运行以下命令记录 10 个评估回合：
```bash
python lerobot/scripts/control_robot.py record \
  --robot-path lerobot/configs/robot/so100.yaml \
  --fps 30 \
  --repo-id ${HF_USER}/eval_act_so100_test \
  --tags so100 tutorial eval \
  --warmup-time-s 5 \
  --episode-time-s 40 \
  --reset-time-s 10 \
  --num-episodes 10 \
  -p outputs/train/act_so100_test/checkpoints/last/pretrained_model
```

如您所见，这几乎与之前用于记录训练数据集的命令相同。只有两处变化：
1. 增加了 `-p` 参数，指示您的策略检查点的路径（例如 `-p outputs/train/eval_so100_test/checkpoints/last/pretrained_model`）。如果您将模型检查点上传到 Hub，也可以使用模型仓库（例如 `-p ${HF_USER}/act_so100_test`）。
2. 数据集的名称以 `eval` 开头，以反映您正在运行推理（例如 `--repo-id ${HF_USER}/eval_act_so100_test`）。

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113746806575007&bvid=BV1xM6JY6Ess&cid=27744930563&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

# 参考文档
矽递科技英文Wiki文档：[How to use the SO100Arm robotic arm in Lerobot](https://wiki.seeedstudio.com/lerobot_so100m/)

TheRobotStudio Project: [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>