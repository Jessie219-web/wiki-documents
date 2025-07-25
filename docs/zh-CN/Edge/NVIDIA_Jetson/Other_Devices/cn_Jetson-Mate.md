---
description: Jetson Mate
title: Jetson Mate
keywords:
  - Edge
  - reComputer Carrier_Board_for_Jetson_Moudule
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson-Mate
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---
# Jetson Mate 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::



<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/banner-2.png" /></div>

**Jetson Mate** 是一款载板，最多可安装 **4 个 Nvidia Jetson Nano/NX SoM**。板载 **5 端口千兆交换机使 4 个 SoM 之间能够相互通信**。所有 3 个外围 SoM 都可以单独开关电源。使用 65W 双端口 PD 充电器（适用于 Jetson Nano SoM）或 90W 双端口 PD 充电器（适用于 Jetson NX SoM），以及一根以太网线，开发者可以轻松构建自己的 Jetson 集群。

## 特性

- 易于构建和配置
- 功能强大且紧凑
- 配备专用外壳和风扇

## 规格

|规格|--|
|--|--|
|电源|65w PD|
|尺寸|110mm x 110mm|
|板载交换机|Microchip KSZ9896CTXC|

## 硬件概览

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate.png" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate-2.png" /></div>

## 入门指南

!!!注意
        在本指南中，主机 PC 上安装了 Ubuntu 18.04 LTS。目前使用 NVIDIA SDK Manager 刷写操作系统不支持 Ubuntu 20.04。因此，请确保使用 Ubuntu 18.04 或 16.04。如果您在虚拟机上运行 Ubuntu，建议使用 [VMware Workstation Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html)，因为我们已经对此进行了测试。不建议使用 Oracle VM VirtualBox，因为它无法刷写操作系统。

### 所需硬件

- Jetson Mate
- Jetson Nano/ NX 模块
- Micro-USB 数据线
- 65W 或 90W 充电适配器及 USB Type-C 数据线
- 安装了 Ubuntu 18.04 或 16.04 的主机 PC

### 硬件设置

- **步骤 1.** 将 **Jetson Nano/ NX** 模块插入 **主节点**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/h-3.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 2.** 使用 **micro-USB** 数据线将 Jetson Mate 连接到 PC

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/micro-usb.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 将跳线连接到 **BOOT 和 GND 引脚**以进入 **恢复模式**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/jumper.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 4.** 将 Jetson Mate 连接到电源适配器，并按下 **WAKE** 按钮打开 Jetson Mate

- **步骤 5.** 在 Jetson Mate 启动后移除跳线

- **步骤 6.** 在主机 PC 上打开终端窗口并执行以下命令

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/1.png" alt="pir" width={800} height="auto" /></p>

如果输出中包含 **0955:7f21 NVidia Corp.**，则表明 Jetson Mate 已进入恢复模式。

### 软件设置

> 如果您使用的是开发套件中的带 micro-SD 卡的模块，我们建议您按照以下指南安装和配置系统：[Jetson Nano 入门指南](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit)、[Jetson Nano 2GB 入门指南](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit) 和 [Jetson Xavier NX 入门指南](https://developer.nvidia.com/embedded/learn/get-started-jetson-xavier-nx-devkit)。

如果您使用的是带 eMMC 存储的模块，请使用 NVIDIA 官方 SDK Manager 并按照以下步骤操作：

- **步骤 1.** 点击 [此处](https://developer.nvidia.com/nvidia-sdk-manager) 下载 **NVIDIA SDK Manager**

**注意：** 根据主机 PC 的操作系统选择相关版本。本指南中使用的主机 PC 运行的是 Ubuntu 18.04，因此选择 Ubuntu。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/SDK-Manager.png" alt="pir" width={800} height="auto" /></p>

- **步骤 2.** 创建账户或登录 **NVIDIA Developer Program Membership**

- **步骤 3.** 安装 NVIDIA SDK Manager

**注意：** 双击下载的文件进行安装。

- **步骤 4.** 打开 NVIDIA SDK Manager，您会注意到它会自动检测到连接的 Jetson Nano/ NX 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/2.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 5.** 选择连接的模块

- **步骤 6.** 在配置窗口中，**取消勾选** Host Machine。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/3.png" alt="pir" width={1000} height="auto" /></p>

**注意：** 此处 **DeepStream SDK** 也未勾选。但如果您计划安装它，可以勾选。然而，eMMC 模块上的 **16GB** 存储空间不足以安装此 SDK。

- **步骤 7.** 点击 **CONTINUE TO STEP 02**

- **步骤 8.** 查看所需组件并勾选 **I accept the terms and conditions of the license agreements**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/5.png" alt="pir" width={1000} height="auto" /></p>

**注意：** 如果您只想安装 **Jetson OS**，可以取消勾选 **Jetson SDK Components**

- **步骤 9.** 点击 **CONTINUE TO STEP 03**

- **步骤 10.** 当出现以下错误消息时，点击 **Create**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/6.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 11.** 开始下载和刷写

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/7.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 12.** 下载和刷写操作系统完成后，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/8.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 13.** 关闭 Jetson Mate

- **步骤 14.** 在主机 PC 上打开一个终端窗口并安装 **minicom**，这是一个串行终端应用程序

```sh
sudo apt update
sudo apt install minicom
```

**注意：** 我们将使用此应用程序在主机 PC 和 Jetson Mate 之间建立串行连接

- **步骤 15.** 打开 Jetson Mate，同时通过 micro-USB 电缆连接到 PC，输入以下命令以识别连接的串行端口

```sh
dmesg | grep tty
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/grep_tty.png" alt="pir" width={1000} height="auto" /></p>

**注意：** 这里的端口名称是 **ttyACM0**

- **步骤 16.** 使用 minicom 连接到 Jetson Mate

```sh
sudo minicom -b 9600 -D /dev/ttyACM0
```

**注意：** -b 是波特率，-D 是设备

- **步骤 17.** 完成 Jetson OS 的**初始配置**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/initial-config-minicom.png" alt="pir" width={800} height="auto" /></p>

- **步骤 18.** 配置完成后，返回 SDK Manager 窗口，输入为 Jetson Mate 设置的**用户名和密码**，然后点击 **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/9.png" alt="pir" width={1000} height="auto" /></p>

**注意：** 使用在初始配置中设置的用户名和密码

现在将开始下载和安装 SDK 组件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/10.png" alt="pir" width={1000} height="auto" /></p>

当 SDK Manager 成功下载并安装必要的组件时，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/11.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 19.** 刷写所有剩余的 Jetson Nano/NX 模块

**注意：** **所有模块只能在主节点上刷写。** 因此，您需要在主节点上逐个刷写和配置模块。

### 启动集群

- **步骤 1.** 将以太网电缆从路由器连接到 Jetson Mate

**注意：** 确保 PC 和 Jetson Mate 连接到同一个路由器

- **步骤 2.** 按照之前的说明使用 **minicom** 进入 Jetson Mate，同时通过 micro-USB 连接到主机 PC，并输入以下命令以获取连接到 Jetson Mate 的模块的 IP 地址

```sh
ifconfig
```

- **步骤 3.** 在主机 PC 的终端中输入以下命令以建立 SSH 连接

```sh
ssh user@192.xxx.xx.xx
```

**注意：** 将 **user** 替换为您的 Jetson Nano/NX 用户名，将 **192.xxx.xx.xx** 替换为您的 Jetson Nano/NX IP 地址

**注意：** 您也可以通过将 IP 地址替换为主机名来连接到节点

## 使用 Jetson Mate 构建 Kubernetes 集群

Kubernetes 是一个企业级容器编排系统，从一开始就设计为云原生。它已经发展成为事实上的云容器平台，并随着其拥抱新技术（包括容器原生虚拟化和无服务器计算）而不断扩展。

Kubernetes 管理容器及更多内容，从边缘的微规模到公共和私有云环境中的大规模。它是"家庭私有云"项目的完美选择，既提供了强大的容器编排功能，又提供了学习一种需求量大且与云深度集成的技术的机会，其名称几乎与"云计算"同义。

在本教程中，我们使用一个主节点和三个工作节点。在接下来的步骤中，我们将用加粗字体指明软件运行在 ***master***（主节点）、***worker***（工作节点）还是 ***worker and master***（工作节点和主节点）。

### 配置 Docker

***worker 和 master***，我们需要将 Docker 运行时配置为默认使用 "nvidia"。

修改文件 `/etc/docker/daemon.json`

```json
{
 "default-runtime" : "nvidia",
    "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

重启 Docker 守护进程：

```shell
sudo systemctl daemon-reload && sudo systemctl restart docker
```

验证 Docker 默认运行时是否为 NVIDIA：

```shell
sudo docker info | grep -i runtime
```

以下是示例输出：

```
Runtimes: nvidia runc
Default Runtime: nvidia
```

### 安装 Kubernetes

***worker 和 master***，安装 kubelet、kubeadm 和 kubectl：

```shell
sudo apt-get update && sudo apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

# 添加 Kubernetes 仓库
cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF
sudo apt update && sudo apt install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

禁用交换分区，每次重启时都需要关闭。

```
sudo swapoff -a
```

编译 deviceQuery，我们将在后续步骤中使用它。

```shell
cd /usr/local/cuda/samples/1_Utilities/deviceQuery && sudo make 
cd 
```

### 配置 Kubernetes

***master***，初始化集群：

```shell
sudo kubeadm init --pod-network-cidr=10.244.0.0/16
```

输出将显示用于部署 Pod 网络到集群的命令，以及加入集群的命令。如果一切成功，您应该在输出末尾看到类似以下内容：

```
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.2.114:6443 --token zqqoy7.9oi8dpkfmqkop2p5 \
    --discovery-token-ca-cert-hash sha256:71270ea137214422221319c1bdb9ba6d4b76abfa2506753703ed654a90c4982b
```

使用以下指令运行命令：

```shell
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

在控制平面节点上安装 Pod 网络插件。使用 Calico 作为 Pod 网络插件：

```
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

> 如果您在中国，请改用以下命令：
kubectl apply -f https://gitee.com/wj204811/wj204811/raw/master/kube-flannel.yml

确保所有 Pod 都已启动并运行：

```shell
kubectl get pods --all-namespaces
```

以下是示例输出：

```
NAMESPACE     NAME                                       READY   STATUS    RESTARTS   AGE
kube-system   kube-flannel-ds-arm64-gz28t                1/1     Running   0          2m8s
kube-system   coredns-5c98db65d4-d4kgh                   1/1     Running   0          9m8s
kube-system   coredns-5c98db65d4-h6x8m                   1/1     Running   0          9m8s
kube-system   etcd-#yourhost                             1/1     Running   0          8m25s
kube-system   kube-apiserver-#yourhost                   1/1     Running   0          8m7s
kube-system   kube-controller-manager-#yourhost          1/1     Running   0          8m3s
kube-system   kube-proxy-6sh42                           1/1     Running   0          9m7s
kube-system   kube-scheduler-#yourhost                   1/1     Running   0          8m26s
```

***worker***，将计算节点加入集群，现在是将计算节点添加到集群的时候了。加入计算节点只需运行在初始化控制平面节点时 `kubeadm init` 命令末尾提供的 `kubeadm join` 命令即可。对于您希望加入集群的其他 Jetson Nano，请登录主机并运行以下命令：

```shell
# 加入集群 - 您的 token 和 ca-cert-hash 会有所不同
$ sudo kubeadm join 192.168.2.114:6443 --token zqqoy7.9oi8dpkfmqkop2p5 \
    --discovery-token-ca-cert-hash sha256:71270ea137214422221319c1bdb9ba6d4b76abfa2506753703ed654a90c4982b
```

***master***，在每个节点完成加入过程后，您应该能够通过以下命令查看新节点：

```shell
kubectl get nodes
```

以下是示例输出：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture1.png" /></div>

为 worker 节点打标签：

```
kubectl label node se2 node-role.kubernetes.io/worker=worker
kubectl label node se3 node-role.kubernetes.io/worker=worker
kubectl label node se4 node-role.kubernetes.io/worker=worker
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Jetson-Mate/Picture2.png" /></div>

## 验证 EGX 2.0 安装是否成功

***worker 和 master***，为了验证 EGX 堆栈是否按预期工作，请按照以下步骤创建一个 Pod 的 yaml 文件。如果 `kubectl get pods` 命令显示 Pod 状态为 `Completed`，则安装成功。您还可以通过验证 `cuda-samples.yaml` 文件的输出显示 `Result=PASS` 来确认成功运行。

创建一个 Pod yaml 文件，将以下内容添加到文件中，并保存为 `samples.yaml`：

```
nano cuda-samples.yaml
```

添加以下内容并保存为 `cuda-samples.yaml`：

```shell
apiVersion: v1
kind: Pod
metadata:
  name: nvidia-l4t-base
spec:
  restartPolicy: OnFailure
  containers:
  - name: nvidia-l4t-base
    image: "nvcr.io/nvidia/l4t-base:r32.4.2"
    args:
       - /usr/local/cuda/samples/1_Utilities/deviceQuery/deviceQuery
```

创建一个 GPU 示例 Pod：

```shell
sudo kubectl apply -f cuda-samples.yaml
```

检查是否创建了示例 Pod：

```