---
description: This wiki focuses on using the J501 carrier board with the GMSL expansion board to perform AI video analysis tasks in a multi - camera system with Jetson AGX Orin. First, it lists the prerequisites including the hardware modules and the required JetPack SDK. Then, it details the GMSL camera configuration process, such as creating and setting up a configuration script and a systemd service. Next, it shows how to quickly deploy YOLO11 for real - time object detection of eight cameras by downloading and installing necessary packages, exporting the TensorRT model, and running a Python script. After that, it explains how to install the VGGT environment and run a script for 3D reconstruction of eight cameras, with a note about the impact of fisheye camera distortion on the result. Finally, it provides useful resources and multiple channels for tech support and product discussion.`
title: Multi-GMSL Cameras for Real-Time Object Detection and 3D Reconstruction on Jetson AGX Orin
keywords:
  - j501 carrier board
  - j501
  - multiple cameras
  - GMSL Camera
  - Computer Vision
  - application
  - Jetson Agx Orin
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/yolo1.webp
slug: /multiple_cameras_with_jetson
last_update:
  date: 06/26/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
This wiki will use the reServer Industrial J501 Carrier Board with the GMSL extension board to introduce how to deploy real-time object detection and 3D reconstruction in a multi-camera system.
</div>

<div class="table-center">
  <table align="center">
    <tr>
        <th>NVIDIA Jetson AGX Orin Module</th>
        <th>reServer Industrial J501 Carrier Board</th>
        <th>reServer Industrial J501-GMSL extension board</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/9/0/900-13701-0040-000-3t_2.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_2.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991855-reserver-industrial-j501-gmsl-extension-board-45font.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
  </table>
</div>


## Prerequisites
- NVIDIA Jetson AGX Orin Module 32GB/64GB
- Flashed with the latest [JetPack 6.2 SDK](https://wiki.seeedstudio.com/reserver_j501_getting_started/#prepare-the-jetpack-image) (support GMSL expansion board)
- reServer Industrial J501 Carrier Board
- reServer Industrial J501-GMSL extension board
- [GMSL Camera](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

## GMSL Camera Configuration
## Hardware Connection
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/cam_c.jpg"/>
</div>

<div style={{ textAlign: "justify" }}>
In order to obtain the input from the GMSL camera, we need to first configure the serial and deserializers' formats. Add them to the system startup script so that they can be automatically configured each time the system boots up.
</div>

**Step 1.** Create configuration script:

```bash
touch media-setup.sh
```
**Step 2.** Paste the following content into media-setup.sh:
```bash
#!/bin/bash
# Set Serializer & Deserializer Formats
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'

media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
```

**Step 3.** Add execution permissions to media-setup.sh:

```bash
chmod +x media-setup.sh
```
**Step 4.** Create a systemd service:

```bash
sudo vim /etc/systemd/system/mediactl-init.service 

# Add the following content:
[Unit]
Description=Set media-ctl formats at boot
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/usr/local/bin/media-setup.sh
RemainAfterExit=true

[Install]
WantedBy=multi-user.target
```
**Step 5.** After saving and exiting, enable the service:

```bash
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable mediactl-init.service
sudo systemctl start mediactl-init.service
```
**Step 5.** Reboot the device and check if the service is running:

```bash
sudo systemctl status mediactl-init.service

#Use the following command to quickly start the camera and open a window to display the video stream:
gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video1  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video2  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video3  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video4  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video5  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video6  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video7  ! xvimagesink -ev 
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/time_speed.gif"/>
</div>

:::info
Our GMSL extension board supports up to 8 camera video inputs and provides a PTP timestamp accuracy of less than 1ms to ensure the synchronization of the 8 video data streams.
:::


## Quickly deploy YOLO11 for real-time object detection of eight cameras

<div style={{ textAlign: "justify" }}>
YOLOv11 is a real-time object detection model released by Ultralytics, offering a powerful balance of speed, accuracy, and efficiency. Designed with improved architecture and training strategies, YOLOv11 outperforms previous versions in both performance and deployment flexibility. It's particularly well-suited for edge devices, autonomous systems, and industrial AI applications, supporting tasks like detection, segmentation, and tracking with high reliability.
</div>

### Install YOLO11 and run multiple cameras object detection

**Step 1.** Download and install the necessary packages:
:::note 
The following packages are built for JetPack 6.2 with CUDA 12.6.
:::

[onnxruntime_gpu-1.22.0-cp310-cp310-linux_aarch64.whl](https://pypi.jetson-ai-lab.dev/jp6/cu126/+f/869/e41abdc35e093/onnxruntime_gpu-1.22.0-cp310-cp310-linux_aarch64.whl#sha256=869e41abdc35e09345876f047fce49267d699df3e44b67c2518b0469739484ff)

[torch-2.7.0-cp310-cp310-linux_aarch64.whl](https://pypi.jetson-ai-lab.dev/jp6/cu126/+f/6ef/f643c0a7acda9/torch-2.7.0-cp310-cp310-linux_aarch64.whl#sha256=6eff643c0a7acda92734cc798338f733ff35c7df1a4434576f5ff7c66fc97319)

[torchvision-0.22.0-cp310-cp310-linux_aarch64.whl](https://pypi.jetson-ai-lab.dev/jp6/cu126/+f/daa/bff3a07259968/torchvision-0.22.0-cp310-cp310-linux_aarch64.whl#sha256=daabff3a0725996886b92e4b5dd143f5750ef4b181b5c7d01371a9185e8f0402)

[yolo11n.pt pretrain weights](https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt)

```bash
#Install the packages using pip:
sudo apt update
sudo apt install python3-pip -y
pip install -U pip
pip install onnxruntime_gpu-1.22.0-cp310-cp310-linux_aarch64.whl
pip install torch-2.7.0-cp310-cp310-linux_aarch64.whl
pip install torchvision-0.22.0-cp310-cp310-linux_aarch64.whl
pip install ultralytics
```

Export the TensorRT model:

```bash
yolo export model=yolo11n.pt format=engine device=0 imgsz=640
```


Running the following Python script can quickly perform object detection on eight cameras:

<details>
<summary> detect.py </summary>

```python
import cv2
import time
import threading
import numpy as np
import torch
from ultralytics import YOLO

device = 'cuda' if torch.cuda.is_available() else 'cpu'
print(f"Using device: {device}")
model = YOLO('./models/yolo11n.engine',task="detect")

class_name = ["person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat",
                      "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
                      "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
                      "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
                      "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
                      "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
                      "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard", "cell phone",
                      "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
                      "hair drier", "toothbrush"]


camera_num = 8
frame_width, frame_height = 320, 240
frames = [np.zeros((frame_height, frame_width, 3), dtype=np.uint8) for _ in range(camera_num)]
locks = [threading.Lock() for _ in range(camera_num)]
running = True

def capture_thread(index):
    cap = cv2.VideoCapture(index)
    while running:
        ret, frame = cap.read()
        if ret:
            frame_resized = cv2.resize(frame, (frame_width, frame_height))
            results = model.predict(
            source=frame_resized,
            device=device,
            verbose=False,
            stream=False,
            imgsz=640,
            conf=0.25
        )
        annotated = frame_resized.copy()
        for r in results:
            boxes = r.boxes
            for box in boxes:
                if box.cls is None or box.conf is None:
                    continue
                cls_id = int(box.cls[0].item())
                conf = float(box.conf[0].item())
                name = class_name[cls_id] if cls_id < len(class_name) else f"class_{cls_id}"
                x1, y1, x2, y2 = map(int, box.xyxy[0].tolist())
                
                cv2.rectangle(annotated, (x1, y1), (x2, y2), (0, 255, 0), 2)

                label = f"{name} {conf:.2f}"
                cv2.putText(annotated, label, (x1 + 2, y1 + 15),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1, cv2.LINE_AA)
        
        with locks[index]:
            frames[index] = annotated

    cap.release()

def main():
    global running

    threads = []
    for i in range(camera_num):
        t = threading.Thread(target=capture_thread, args=(i,))
        t.start()
        threads.append(t)

    try:
        while True:
            frame_copy = []
            for i in range(camera_num):
                with locks[i]:
                    frame_copy.append(frames[i].copy())
            row1 = cv2.hconcat(frame_copy[:4])
            row2 = cv2.hconcat(frame_copy[4:8])
            result = cv2.vconcat([row1, row2])
            cv2.imshow("Multi-Camera", result)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    finally:
        running = False
        for t in threads:
            t.join()
        cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
```
</details>

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/yolo1.gif"/>
</div>

<div style={{ textAlign: "justify" }}>
The J501, equipped with the Nvidia AGX Orin module, boasts extremely high computing power and is capable of performing real-time object detection for up to 8 cameras.
</div>

## Quickly Deploy VGGT for 3D reconstruction

<div style={{ textAlign: "justify" }}>
VGGT is a vision-language model designed for 3D understanding and reasoning in complex environments. It combines multi-view images and language inputs to generate detailed 3D scene representations and answer spatial or semantic questions about the environment. Built upon transformer-based architectures, VGGT excels in tasks such as visual grounding, 3D object localization, and language-guided navigation, making it highly suitable for robotics and embodied AI applications.
</div>

### Install VGGT environment and run 3D reconstruction with multiple cameras

```bash
git clone https://github.com/facebookresearch/vggt.git
cd vggt
pip install -r requirements.txt
pip install -r requirements_demo.txt
```
Run the following script to quickly perform 3D reconstruction on eight cameras:

<details>
<summary> demo.py </summary>

```python
import os
import glob
import time
import threading
import argparse
from typing import List, Optional

import numpy as np
import torch
from tqdm.auto import tqdm
import viser
import viser.transforms as viser_tf
import cv2
from PIL import Image
from defisheye import Defisheye

try:
    import onnxruntime
except ImportError:
    print("onnxruntime not found. Sky segmentation may not work.")

from visual_util import segment_sky, download_file_from_url
from vggt.models.vggt import VGGT
from vggt.utils.load_fn import load_and_preprocess_images
from vggt.utils.geometry import closed_form_inverse_se3, unproject_depth_map_to_point_map
from vggt.utils.pose_enc import pose_encoding_to_extri_intri


class ViserVisualizer:
    def __init__(
        self,
        pred_dict: dict,
        port: int = 8080,
        init_conf_threshold: float = 50.0,
        use_point_map: bool = False,
        mask_sky: bool = False,
        image_folder: str = '',
    ):
        print(f"Starting viser server on port {port}")
        self.server = viser.ViserServer(host="0.0.0.0", port=port)
        self.server.gui.configure_theme(titlebar_content=None, control_layout="collapsible")
        self.use_point_map = use_point_map
        self.mask_sky = mask_sky
        self.image_folder = image_folder
        self.init_conf_threshold = init_conf_threshold

        # GUI
        self.gui_show_frames = self.server.gui.add_checkbox("Show Cameras", initial_value=True)
        self.gui_points_conf = self.server.gui.add_slider(
            "Confidence Percent", min=0, max=100, step=0.1, initial_value=init_conf_threshold
        )
        self.gui_frame_selector = self.server.gui.add_dropdown(
            "Show Points from Frames", options=["All"], initial_value="All"
        )

        # Placeholders for handles
        self.point_cloud = None
        self.frames = []
        self.frustums = []
        self.scene_center = None
        self.frame_indices = None

        # Initial visualization
        self.update(pred_dict, first_time=True)

        @self.gui_points_conf.on_update
        def _(_): self.update_point_cloud()

        @self.gui_frame_selector.on_update
        def _(_): self.update_point_cloud()

        @self.gui_show_frames.on_update
        def _(_):
            for f in self.frames:
                f.visible = self.gui_show_frames.value
            for fr in self.frustums:
                fr.visible = self.gui_show_frames.value

    def update(self, pred_dict, first_time=False):
        # Unpack prediction dict
        images = pred_dict["images"]  # (S, 3, H, W)
        world_points_map = pred_dict["world_points"]  # (S, H, W, 3)
        conf_map = pred_dict["world_points_conf"]  # (S, H, W)
        depth_map = pred_dict["depth"]  # (S, H, W, 1)
        depth_conf = pred_dict["depth_conf"]  # (S, H, W)
        extrinsics_cam = pred_dict["extrinsic"]  # (S, 3, 4)
        intrinsics_cam = pred_dict["intrinsic"]  # (S, 3, 3)

        if not self.use_point_map:
            world_points = unproject_depth_map_to_point_map(depth_map, extrinsics_cam, intrinsics_cam)
            conf = depth_conf
        else:
            world_points = world_points_map
            conf = conf_map

        if self.mask_sky and self.image_folder:
            conf = apply_sky_segmentation(conf, self.image_folder)

        colors = images.transpose(0, 2, 3, 1)  # (S, H, W, 3)
        S, H, W, _ = world_points.shape

        points = world_points.reshape(-1, 3)
        colors_flat = (colors.reshape(-1, 3) * 255).astype(np.uint8)
        conf_flat = conf.reshape(-1)

        cam_to_world_mat = closed_form_inverse_se3(extrinsics_cam)
        cam_to_world = cam_to_world_mat[:, :3, :]

        scene_center = np.mean(points, axis=0)
        points_centered = points - scene_center
        cam_to_world[..., -1] -= scene_center

        frame_indices = np.repeat(np.arange(S), H * W)

        # Store for update_point_cloud
        self.points_centered = points_centered
        self.colors_flat = colors_flat
        self.conf_flat = conf_flat
        self.frame_indices = frame_indices
        self.S = S

        # Update dropdown options if number of frames changed
        new_options = ["All"] + [str(i) for i in range(S)]
        if first_time or list(self.gui_frame_selector.options) != new_options:
            # Always recreate the dropdown to avoid type issues
            self.gui_frame_selector = self.server.gui.add_dropdown(
                "Show Points from Frames", options=new_options, initial_value="All"
            )

        # Create or update point cloud
        init_threshold_val = np.percentile(conf_flat, self.init_conf_threshold)
        init_conf_mask = (conf_flat >= init_threshold_val) & (conf_flat > 0.1)
        if first_time or self.point_cloud is None:
            self.point_cloud = self.server.scene.add_point_cloud(
                name="viser_pcd",
                points=points_centered[init_conf_mask],
                colors=colors_flat[init_conf_mask],
                point_size=0.001,
                point_shape="circle",
            )
        else:
            self.point_cloud.points = points_centered[init_conf_mask]
            self.point_cloud.colors = colors_flat[init_conf_mask]

        # Update camera frames and frustums
        self.visualize_frames(cam_to_world, images)

    def update_point_cloud(self):
        current_percentage = self.gui_points_conf.value
        threshold_val = np.percentile(self.conf_flat, current_percentage)
        conf_mask = (self.conf_flat >= threshold_val) & (self.conf_flat > 1e-5)
        if self.gui_frame_selector.value == "All":
            frame_mask = np.ones_like(conf_mask, dtype=bool)
        else:
            selected_idx = int(self.gui_frame_selector.value)
            frame_mask = self.frame_indices == selected_idx
        combined_mask = conf_mask & frame_mask
        if self.point_cloud is not None:
            self.point_cloud.points = self.points_centered[combined_mask]
            self.point_cloud.colors = self.colors_flat[combined_mask]

    def visualize_frames(self, extrinsics, images_):
        # Remove old frames/frustums
        for f in self.frames:
            f.remove()
        self.frames.clear()
        for fr in self.frustums:
            fr.remove()
        self.frustums.clear()

        S = self.S
        for img_id in range(S):
            cam2world_3x4 = extrinsics[img_id]
            T_world_camera = viser_tf.SE3.from_matrix(cam2world_3x4)
            frame_axis = self.server.scene.add_frame(
                f"frame_{img_id}",
                wxyz=T_world_camera.rotation().wxyz,
                position=T_world_camera.translation(),
                axes_length=0.05,
                axes_radius=0.002,
                origin_radius=0.002,
            )
            self.frames.append(frame_axis)
            img = images_[img_id]
            img = (img.transpose(1, 2, 0) * 255).astype(np.uint8)
            h, w = img.shape[:2]
            fy = 1.1 * h
            fov = 2 * np.arctan2(h / 2, fy)
            frustum_cam = self.server.scene.add_camera_frustum(
                f"frame_{img_id}/frustum", fov=fov, aspect=w / h, scale=0.05, image=img, line_width=1.0
            )
            self.frustums.append(frustum_cam)
            self.attach_callback(frustum_cam, frame_axis)

    def attach_callback(self, frustum, frame):
        @frustum.on_click
        def _(_):
            for client in self.server.get_clients().values():
                client.camera.wxyz = frame.wxyz
                client.camera.position = frame.position


# Helper functions for sky segmentation


def apply_sky_segmentation(conf: np.ndarray, image_folder: str) -> np.ndarray:
    """
    Apply sky segmentation to confidence scores.

    Args:
        conf (np.ndarray): Confidence scores with shape (S, H, W)
        image_folder (str): Path to the folder containing input images

    Returns:
        np.ndarray: Updated confidence scores with sky regions masked out
    """
    S, H, W = conf.shape
    sky_masks_dir = image_folder.rstrip("/") + "_sky_masks"
    os.makedirs(sky_masks_dir, exist_ok=True)

    # Download skyseg.onnx if it doesn't exist
    if not os.path.exists("skyseg.onnx"):
        print("Downloading skyseg.onnx...")
        download_file_from_url("https://huggingface.co/JianyuanWang/skyseg/resolve/main/skyseg.onnx", "skyseg.onnx")

    skyseg_session = onnxruntime.InferenceSession("skyseg.onnx")
    image_files = sorted(glob.glob(os.path.join(image_folder, "*")))
    sky_mask_list = []

    print("Generating sky masks...")
    for i, image_path in enumerate(tqdm(image_files[:S])):  # Limit to the number of images in the batch
        image_name = os.path.basename(image_path)
        mask_filepath = os.path.join(sky_masks_dir, image_name)

        if os.path.exists(mask_filepath):
            sky_mask = cv2.imread(mask_filepath, cv2.IMREAD_GRAYSCALE)
        else:
            sky_mask = segment_sky(image_path, skyseg_session, mask_filepath)

        # Resize mask to match H×W if needed
        if sky_mask.shape[0] != H or sky_mask.shape[1] != W:
            sky_mask = cv2.resize(sky_mask, (W, H))

        sky_mask_list.append(sky_mask)

    # Convert list to numpy array with shape S×H×W
    sky_mask_array = np.array(sky_mask_list)
    # Apply sky mask to confidence scores
    sky_mask_binary = (sky_mask_array > 0.1).astype(np.float32)
    conf = conf * sky_mask_binary

    print("Sky segmentation applied successfully")
    return conf


parser = argparse.ArgumentParser(description="VGGT demo with viser for 3D visualization")
parser.add_argument(
    "--image_folder", type=str, default="examples/kitchen/images/", help="Path to folder containing images"
)
parser.add_argument("--use_point_map", action="store_true", help="Use point map instead of depth-based points")
parser.add_argument("--background_mode", action="store_true", help="Run the viser server in background mode")
parser.add_argument("--port", type=int, default=8080, help="Port number for the viser server")
parser.add_argument(
    "--conf_threshold", type=float, default=50.0, help="Initial percentage of low-confidence points to filter out"
)
parser.add_argument("--mask_sky", action="store_true", help="Apply sky segmentation to filter out sky points")


def main():
    """
    Main function for the VGGT demo with viser for 3D visualization.

    This function:
    1. Loads the VGGT model
    2. Processes input images from the specified folder
    3. Runs inference to generate 3D points and camera poses
    4. Optionally applies sky segmentation to filter out sky points
    5. Visualizes the results using viser

    Command-line arguments:
    --image_folder: Path to folder containing input images
    --use_point_map: Use point map instead of depth-based points
    --background_mode: Run the viser server in background mode
    --port: Port number for the viser server
    --conf_threshold: Initial percentage of low-confidence points to filter out
    --mask_sky: Apply sky segmentation to filter out sky points
    """
    args = parser.parse_args()
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"Using device: {device}")

    print("Initializing and loading VGGT model...")
    model = VGGT()
    _URL = "https://huggingface.co/facebook/VGGT-1B/resolve/main/model.pt"
    model.load_state_dict(torch.hub.load_state_dict_from_url(_URL))
    model.eval()
    model = model.to(device)

    camera_num = 8
    width = 640
    height = 480
    caps = [cv2.VideoCapture(i) for i in range(camera_num)]

    # Get initial images and predictions
    images = []
    for cap in caps:
        ret, img = cap.read()
        img = cv2.resize(img, (width, height))
        obj = Defisheye(img,fov=196,pfov=120,dtype="linear")
        img = obj.convert(outfile=None)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(img)
        images.append(img)
    images_tensor = load_and_preprocess_images(images).to(device)
    dtype = torch.bfloat16 if torch.cuda.get_device_capability()[0] >= 8 else torch.float16
    with torch.no_grad():
        with torch.cuda.amp.autocast(dtype=dtype):
            predictions = model(images_tensor)
    extrinsic, intrinsic = pose_encoding_to_extri_intri(predictions["pose_enc"], images_tensor.shape[-2:])
    predictions["extrinsic"] = extrinsic
    predictions["intrinsic"] = intrinsic
    for key in predictions.keys():
        if isinstance(predictions[key], torch.Tensor):
            predictions[key] = predictions[key].cpu().numpy().squeeze(0)

    # Initialize visualizer
    visualizer = ViserVisualizer(
        predictions,
        port=args.port,
        init_conf_threshold=args.conf_threshold,
        use_point_map=args.use_point_map,
        mask_sky=args.mask_sky,
        image_folder=args.image_folder if args.image_folder is not None else '',
    )

    print("Starting real-time update loop...")
    while True:
        images = []
        for cap in caps:
            ret, img = cap.read()
            img = cv2.resize(img, (width, height))
            obj = Defisheye(img,fov=196,pfov=120,dtype="linear")
            img = obj.convert(outfile=None)
            img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(img)
            images.append(img)
        images_tensor = load_and_preprocess_images(images).to(device)
        with torch.no_grad():
            with torch.cuda.amp.autocast(dtype=dtype):
                predictions = model(images_tensor)
        extrinsic, intrinsic = pose_encoding_to_extri_intri(predictions["pose_enc"], images_tensor.shape[-2:])
        predictions["extrinsic"] = extrinsic
        predictions["intrinsic"] = intrinsic
        for key in predictions.keys():
            if isinstance(predictions[key], torch.Tensor):
                predictions[key] = predictions[key].cpu().numpy().squeeze(0)
        visualizer.update(predictions)
        if cv2.waitKey(1) == ord("q"):
            break
    print("Close")


if __name__ == "__main__":
    main()
```

</details>

:::info
run this python scipt and open the browser to visit the viser server.The loading time of the vggt model may be slightly longer. Please be patient and wait.
If you are running this script on a remote server, replace `localhost` with the server's IP address.
http://`localhost`:8080
:::
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/server.png"/>
</div>

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/3D.gif"/>
</div>

:::note
Since the camera we are using is a fisheye camera with severe distortion, the image quality after distortion correction is poor, which will affect the final 3D modeling result. If you use a camera with less distortion and higher image quality, the effect will be improved.
:::

## Resources

- [YOLOv11 Github](https://github.com/ultralytics/ultralytics)
- [VGGT: Visual Geometry Grounded Transformer](https://vgg-t.github.io/)



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
