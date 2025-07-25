---
description: 使用 YOLOv8 训练和部署自定义分类模型
title: 使用 YOLOv8 训练和部署自定义分类模型
keywords: 
  - yolov8
  - 自定义分类模型
  - 分类模型
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/train_and_deploy_a_custom_classification_model_with_yolov8
last_update:
  date: 05/15/2025
  author: Bruno
---

# 使用 YOLOv8 训练和部署自定义分类模型

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介
在本指南中，我们将解释如何使用 YOLOv8 训练和部署自定义分类模型。

## 概述
我们将创建一个虚拟环境，在其中安装 YOLOv8，从 Roboflow 下载一个分类模型，对其进行训练并部署。

### 图像分类
图像分类是计算机视觉中最简单的任务之一，涉及将图像分类为预定义类别之一。  
输出结果是一个单一的类别标签和一个置信度分数。

当我们不需要知道图像中对象的位置，只需要知道图像属于哪个类别时，图像分类非常有用。

## 材料需求

### 硬件设置

在本教程中，我们需要一台 Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)。

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

### 软件设置

- 在 reComputer 上安装 JetPack 6.0
- 一个 Roboflow 账户，用于下载数据集

## 准备 reComputer
Seeed Studio 的 reComputer J4012 是一台 Jetson Orin NX 16GB。  
这是一台强大的机器，但 Tegra Linux 自带许多功能，并默认以图形模式启动。我们将对此进行更改。

:::note
我将使用 VScode 和启用了 X 转发的 SSH 终端远程运行示例和编程。  
X 转发是 SSH 的一个选项，可以在连接的本地端运行一些图形应用程序，而不是在远程计算机上运行。
:::

如果您打算通过显示器、键盘和鼠标连接到您的 reComputer，请跳过下一步。

### 更改启动模式
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/1_image.png" />
</div>
虽然默认设置不错，但我们不需要图形界面，并且在空闲模式下，它消耗了大约 1.5GB 的内存。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/2_image.png" />
</div>

我们将让它启动到命令行界面（CLI）。
```bash
sudo systemctl set-default multi-user
```
从现在开始，我们的 reComputer 将在启动时进入 CLI。  
如果您愿意，可以立即重启，或者通过以下命令直接进入 CLI：
```bash
sudo systemctl isolate multi-user
```
现在，我们的内存使用量从 1.5GB 降到了 700MB。在使用机器学习时，每一字节的内存都很重要。

### 更改电源模式
默认情况下，我们的 reComputer 应该运行在 2 级 - 15W 模式。  
在训练或推理机器学习模型时，如果可以以全功率运行，效果会更好。

以下是更改电源模式的方法：

在文件 `/etc/nvpmodel.conf` 中，我们可以看到可用的电源模式：
```bash
< POWER_MODEL ID=0 NAME=MAXN >
< POWER_MODEL ID=1 NAME=10W >
< POWER_MODEL ID=2 NAME=15W >
< POWER_MODEL ID=3 NAME=25W >
```
然后，我们可以使用 `sudo nvpmodel -m <#power model>` 更改电源模式。根据[这个论坛帖子](https://forums.developer.nvidia.com/t/power-mode-in-terminal/287224)，设置在重启后仍然有效。  
查看当前的电源模式：
```bash
sudo nvpmodel -q
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/3_image.png" />
</div>

为训练模型选择最大功率模式：
```bash
sudo nvpmodel -m 0
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/4_image.png" />
</div>

重启后，我们可以确认系统正在以全功率运行：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/5_image.png" />
</div>

## 训练模型
为了训练模型，我们将使用 YOLOv8。以下是安装支持 CUDA 的 YOLOv8 所需的步骤。  
我们还需要一个 [Roboflow](https://roboflow.com/) 账户。

### 模型
我将创建一个用于分类鸟类的模型。  
这是我为一个智能鸟类喂食器项目准备的，我计划将其放置在我的花园中，以识别前来觅食的鸟类。

由于这是一个分类任务，我们不需要知道照片中鸟类的位置。

您可以选择其他数据集，只要它是分类数据集或模型即可。

我收集了 12 种我所在地区常见的鸟类，并在 Roboflow 中创建了一个[分类数据集](https://universe.roboflow.com/bruno-santos-omqsq/bird-classification-19z7c/dataset/1)。

我要识别的鸟类类别包括：
- 家燕 (Barn Swallow)
- 火冠戴菊鸟 (Common Firecrest)
- 夜莺 (Common Nightingale)
- 欧亚朱雀 (Eurasian Chaffinch)
- 欧亚岩燕 (Eurasian Crag Martin)
- 欧洲金翅雀 (European Goldfinch)
- 欧洲绿雀 (European Greenfinch)
- 欧洲黄雀 (European Serin)
- 家麻雀 (House Sparrow)
- 西班牙麻雀 (Spanish Sparrow)
- 西方家燕 (Western House Martin)
- 白鹡鸰 (White Wagtail)

选择您的数据集并从 Roboflow 下载。  
一旦选择了数据集，点击“Download Dataset”——您需要一个账户才能下载。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/7_image.png" />
</div>

接下来，在 Format 中选择 *Folder Structure*，然后选择 *show download code*。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/8_image.png" />
</div>

接下来，如果你打算使用 Jupyter Notebook，请选择 *Jupyter*；如果你计划在终端中执行此操作，请选择 *Terminal*。

我选择了 Jupyter，以便在 Jupyter Notebook 中使用。复制代码。
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/9_image.png" />
</div>

## 创建环境
我们将创建一个虚拟环境，安装 PyTorch 并安装 YOLOv8。
根据 [YOLOv8 文档提示](https://docs.ultralytics.com/quickstart/#install-ultralytics)，最好先安装 PyTorch，然后再安装 ultralytics。

此外，我还安装了 jupyterlab 包以便与 VSCode 一起使用。本教程附带了 Notebook 文件。

让我们先安装一些依赖项。

**注意：** 因为我们将使用 YOLOv8，所以需要执行一些通常不需要的步骤。

仅按照 [NVIDIA 深度学习文档](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html) 安装 Torch 即可获得支持 CUDA 的 Torch。

如果我们通过 PIP 正常安装 PyTorch，它将不支持 CUDA。
### 依赖项

```bash
sudo apt install libopenblas-dev cuda-toolkit libcudnn8 tensorrt python3-libnvinfer nvidia-l4t-dla-compiler
```
创建 Python 虚拟环境
```bash
python -m venv birdClassificationModel
```
如果出现错误，是因为未安装 python3-venv 包。让我们安装它并重复上述命令。

```bash
sudo apt install python3-venv
```
激活虚拟环境

```bash
source birdClassificationModel/bin/activate
```

你可以通过提示符前显示的名称确认虚拟环境是否已激活。

### YOLOv8

在此之前，并根据 [文档提示](https://docs.ultralytics.com/quickstart/#conda-docker-image)，我们先安装 PyTorch。

我使用的是 JetPack 6.0，它附带 NVIDIA Jetson Linux 36.3 和 CUDA 12.2。
首先升级 PIP

```bash
pip install -U pip
```

为了能够与 YOLOv8 一起使用 Torch，我们需要 [按照 NVIDIA 论坛中的步骤](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)操作。

这些操作将在虚拟环境激活的情况下完成，以便将其安装到虚拟环境中。
从 NVIDIA 下载 Torch 2.3 版本

```bash
wget https://nvidia.box.com/shared/static/mp164asf3sceb570wvjsrezk1p4ftj8t.whl -O torch-2.3.0-cp310-cp310-linux_aarch64.whl
sudo apt-get install python3-pip libopenblas-base libopenmpi-dev libomp-dev
pip3 install 'Cython<3'
pip install numpy torch-2.3.0-cp310-cp310-linux_aarch64.whl
```

完成后，让我们编译 torchvision。如果我们从 wheels 安装，它将不支持 CUDA。

分支版本与安装的 Torch 版本对应。你可以在论坛页面中查看更多详细信息。

记住，你需要激活虚拟环境，这样所有内容都会安装到其中。

```bash
sudo apt-get install libjpeg-dev zlib1g-dev libpython3-dev libopenblas-dev libavcodec-dev libavformat-dev libswscale-dev
git clone --branch v0.18.0 https://github.com/pytorch/vision torchvision
cd torchvision/
export BUILD_VERSION=0.18.0
python setup.py install
```
一段时间后，它将被编译并安装。
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/10_image.png" />
</div>
安装完成后，让我们检查 CUDA 是否可用。
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/11_image.png" />
</div>

从命令行运行
```bash
python -c "import torch;print (torch.cuda.is_available())"
```
这应该返回 True。

#### 安装 YOLOv8

现在我们已经安装了支持 CUDA 的 PyTorch，当我们安装 YOLOv8 时，它将使用已安装的版本，而不是尝试安装一个新的（尽管版本相同）但不支持 CUDA 的包。

```bash
pip install ultralytics
```

让我们安装 roboflow 和 jupyterlab
```bash
pip install roboflow jupyterlab
```

现在，让我们下载数据集。
如果你使用的是 Notebook，只需替换其中的代码。

```python
rf = Roboflow(api_key="<your_api_key>")
project = rf.workspace("bruno-santos-omqsq").project("bird-classification-19z7c")
version = project.version(1)
dataset = version.download("folder")
```

下载模型后，我们现在有一组三个目录（test、train、valid），每个目录中都有来自每个类别的一定数量的图像。每个类别的图像都在其自己的目录中。
因为这是用于图像分类的，所以我们不需要为图像标注。
YOLOv8 将不仅从我们稍后创建的配置文件中了解类别，还会从目录中了解类别。
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/12_image.png" />
</div>

### 训练
通常，一个数据集包含图像和带有对象坐标的标签（或注释）。由于这是一个分类任务，我们不需要这些内容。只需确保图像位于以类别名称命名的目录中即可。

#### 准备配置文件
我们仍然需要一个配置文件，以便 YOLOv8 能够识别类别。
此文件应放置在数据集目录中，扩展名为 .yaml。文件名无关紧要。

```bash
cd <dataset_directory>
vi birdClassificationModel.yaml
```
在文件中插入以下内容

```bash
train: train/
valid: valid/
test: test/

# 类别数量
nc: 12

# 类别名称

names: ["Barn Swallow","Common Firecrest","Common Nightingale","Eurasian Chaffinch","Eurasian Crag Martin","European Goldfinch","European Greenfinch","European Serin","House Sparrow","Spanish Sparrow","Western House Martin","white Wagtail"]
```

为了分类，我们将使用 [Ultralytics 提供的预训练模型](https://docs.ultralytics.com/tasks/classify/)之一。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/13_image.png" />
</div>

这些模型已经在 ImageNet 上进行了训练，并针对分类任务进行了微调。我们将使用这些模型并在我们的数据上进行训练。

这就是所谓的 [迁移学习](https://neptune.ai/blog/transfer-learning-guide-examples-for-images-and-text-in-keras)。

我们将使用模型 [YOLOv8l-cls](https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8l-cls.pt)。其他模型可能也能很好地工作，但由于我们不需要实时处理，这是速度和准确性之间的权衡。

接下来，我们使用 YOLOv8 的 CLI 接口训练模型：

```bash
yolo task=classify mode=train model=yolov8l-cls.pt data=Bird-Classification-1 epochs=100
```
- task=classify：我们将对图像进行分类
- mode=train：我们正在训练模型
- model=yolov8l-cls.pt：我们使用的是一个预训练的分类模型
- data=Bird-Classification-1：数据集所在的目录
- epochs=100：训练模型的迭代次数

现在模型正在运行，以下是使用 jtop（tegra-stats）的一些统计信息：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/14_image.png" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/15_image.png" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/16_image.png" />
</div>

经过几个小时后，训练完成。
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/17_image.png" />
</div>

现在，让我们看看模型的表现。我们来测试一下。

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=Bird-Classification-1/test/**/*.jpg
```
这将使 YOLO 进入测试目录并尝试预测每张图片。
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/18_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/19_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/20_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/21_image.png" />
</div>

结果全部正确。接下来我们尝试两张模型从未见过的图片。

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/22_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/23_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=house_sparrow.jpg
```
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/24_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=white_wagtail.jpg
```
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/25_image.png" />
</div>

我认为这些结果非常棒。

## 导出模型
我们可以直接使用模型进行推理，只需打开并使用它即可。
为了更快的推理时间，我们可以将模型导出为 TensorRT 格式，因为我们使用的是 NVIDIA Jetson Orin NX，或者导出为 ONNX 格式。

虽然这个项目不需要更快的推理时间——我不会在实时视频中使用它——但利用我们所使用的平台是很好的。

不幸的是，由于虚拟环境的限制，我无法将模型导出为 TensorRT 格式。原因是我无法在 Python 中导入 tensorrt，但在虚拟环境之外，我使用 tensorrt 库没有问题。

### ONNX
我们可以将模型导出为 ONNX 格式，如下所示：
```bash
yolo export model='./runs/classify/train6/weights/best.pt' format=onnx imgsz=640
```
我们会得到一个 best.onnx 文件，可以用来运行推理。

要使用 ONNX 运行推理，我们需要安装 onnxruntime_gpu wheel。

要在 JetPack 6.0 上安装 onnxruntime-gpu，我们需要从 [Jetson Zoo](https://elinux.org/Jetson_Zoo#ONNX_Runtime) 下载它。

我们将下载 onnxruntime_gpu 1.18.0。

下载适用于我们 Python 版本（Python-3.10）的 pip wheel：
```bash
wget https://nvidia.box.com/shared/static/48dtuob7meiw6ebgfsfqakc9vse62sg4.whl -O onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```
然后安装它：
```bash
pip install onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```

## 推理
### 图片
我使用以下代码运行推理，使用 best.pt 模型并查看结果：

```python
# 运行推理
from ultralytics import YOLO
# 加载模型
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
# 运行推理
results = bird_model("house_sparrow.jpg")[0]
# 获取类别名称
class_names = results.names
# 获取概率最高的类别
top1 = results.probs.top1
# 打印概率最高的类别名称
print (f" 检测到的鸟类是: {class_names[top1]}")
```

上述代码的功能是加载模型，对图像进行推理，并将结果保存到 `results` 变量中。

因为 `results` 是一个 [ultralytics.engine.results.Results](http://ultralytics.engine.results.results/) 对象，它是一个包含一个元素的列表，该元素是 `Results` 的实例。通过使用 `results[0]` 来保存推理结果，我们可以获取我们需要的结果。

```python
results = bird_model("house_sparrow.jpg")[0]
```

接下来，我们使用 `results` 来获取类别名称。虽然我们已经知道类别名称，但这样做可以使代码在其他模型中也能正常工作。

```python
class_names = results.names
```

结果之一是 `top1` 变量，它保存了概率最高的 TOP 1 类别。该 TOP 1 是由 `probs` 列表提供的。

```python
top1 = results.probs.top1
```

接下来，我们打印出概率最高的类别，这应该是鸟类的种类。

```python
print (f" The detected bird is: {class_names[top1]}")
The detected bird is: House Sparrow
```

### 摄像头
现在，让我们使用摄像头进行推理。

Jetson 可以使用 USB 摄像头或 RPI 摄像头。我将连接一个 USB 摄像头。

以下代码将检查是否可以显示摄像头画面。
```python
# 测试是否可以使用 USB 摄像头
import cv2
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```
这是我在桌面电脑上的操作。只需使用 *ssh -X username@jetson_ip*，X11 窗口就会被转发到你的桌面。这种方法有效是因为我也在使用 Linux。我认为 WSL 也可能有效。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/26_image.png" />
</div>

现在，让我们尝试在视频流上运行推理，并显示概率最高的类别。

以下是代码：
```python
# 再次，将此代码保存到文件中并从 Jetson 上运行

import cv2
from ultralytics import YOLO
import time
# 定义置信度阈值
# 只有等于或高于此置信度，我们才认为它是鸟类
confidence = 0.95
# 上次处理帧的时间
prev_frame = 0
# 当前处理帧的时间
cur_time = 0
# 加载模型
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
# cv2 字体
font = cv2.FONT_HERSHEY_SIMPLEX
# 打开摄像头
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    # 显示帧率
    cur_frame = time.time()
    fps = 1 / (cur_frame - prev_frame)
    prev_frame = cur_frame
    fps = int(fps)
    fps = str(fps)
    cv2.putText (img, fps, (550,50), font, 1, (124,10,120), 2, cv2.LINE_AA)

    # 对当前帧进行推理
    results = bird_model(img, verbose=False)[0]
    # 获取类别名称
    class_names = results.names
    # 获取概率最高的类别
    top1 = results.probs.top1
    top1conf = results.probs.top1conf.tolist()
    # 只有当置信度高于定义的阈值时，我们才显示类别名称
    # 打印概率最高的类别名称
    if (top1conf >= confidence):
        bird_class = class_names[top1]
        print (f" The detected bird is: {class_names[top1]}")
        # 颜色为 BGR
        confid = round(top1conf,2)
        img = cv2.putText(img, bird_class, (50,50), font, 0.9, (0, 0, 255), 2, cv2.LINE_AA)
        img = cv2.putText(img, "Conf: " + str(confid), (50,80), font, 0.6, (255, 0, 255), 1, cv2.LINE_AA)
        cv2.imshow('Camera', img)
    else:
        img = cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

<!-- 此视频也在文件中 -->
以下是一个视频，展示了在视频流上进行推理的效果：
<!-- <div class="table-center">
<iframe src="https://youtu.be/ovoSMaoA9As" frameBorder={0} />
</div> -->

<iframe width={560} height={315} src="https://www.youtube.com/embed/ovoSMaoA9As?si=-d2buntx0T5oRtr4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

## ✨ 贡献者项目

- 此项目由 Seeed Studio 贡献者项目支持。
- 感谢 **Bruno 的努力**，你的工作将会被 [展示](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>