---
description: XIAO ESP32C3-Chatgpt
title: XIAO ESP32C3-Chatgpt
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiaoesp32c3-chatgpt
last_update:
  date: 05/15/2025
  author: Citric
---

# 学习在 XIAO ESP32C3 上使用 WiFiClient 和 HTTPClient - XIAO ESP32C3 与 ChatGPT 实践

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"/></div>

ChatGPT 是由人工智能研究实验室 OpenAI 于 2022 年 11 月 30 日发布的新型聊天机器人模型，是一种由人工智能技术驱动的自然语言处理工具。

它能够通过学习和理解人类语言进行对话，还可以基于聊天的上下文进行互动，真正实现像人类一样的聊天和交流，甚至可以执行写邮件、视频脚本、文案、翻译和编程等任务。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"/></div>

在嵌入式系统中，ChatGPT 可以成为一个很好的助手，帮助我们编写简单的程序，甚至检查和修复程序中出现的错误。

令人兴奋的是，OpenAI 官方提供了调用 GPT-3 模型的接口，这使得我们可以通过多种方法调用这些接口，将这个强大的模型部署到我们自己的嵌入式系统中。

Seeed Studio XIAO ESP32C3 是一款基于 Espressif ESP32-C3 WiFi/Bluetooth 双模芯片的物联网迷你开发板。它具有出色的射频性能，支持 IEEE 802.11 b/g/n WiFi 和 Bluetooth 5 (LE) 协议。它可以完美支持 ESP32 官方提供的 WiFi Client 和 WiFi Server 服务。当然，它也能够完美支持 Arduino。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

因此，在本教程中，我们将指导用户学习和使用 XIAO ESP32C3 的 WiFiClient 和 HTTPClient 库，了解如何连接网络、发布网页以及 HTTP GET 和 POST 的基础知识。目标是调用 OpenAI ChatGPT 并创建您自己的问答网站。

## 入门

在本教程中，我们将使用一块 XIAO ESP32C3 来配置一个属于我们自己的 ChatGPT 问答页面。在这个页面中，您可以输入您的问题，XIAO ESP32C3 将记录您的问题，并使用 OpenAI 提供的 API 调用方法，通过 HTTP Client 发送请求命令以获取 ChatGPT 的回答，并在串口中打印出来。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"/></div>

本教程中的任务可以分为以下四个主要步骤：

1. 配置 XIAO ESP32C3 连接网络：在此步骤中，我们将学习使用 XIAO ESP32C3 进行基本的 WiFi 配置过程，并学习 XIAO ESP32C3 的基本操作，例如网络配置、连接网络服务和获取 IP 地址。

2. 构建嵌入式网页：在此步骤中，我们主要接触 WiFi Client 库。通过使用该库的 GET 和 POST 功能，我们可以使用 HTML 编写自己的问答网页并将其部署在 XIAO ESP32C3 上。

3. 通过内置网页提交问题：在此步骤中，我们将主要学习如何使用 HTTP Client 中的 POST 方法，根据 OpenAI API 标准提交我们提出的问题。我们将重点关注如何从网页中收集和存储问题的过程。

4. 从 ChatGPT 获取答案：在此步骤中，我们学习如何使用 HTTP Client 中的 POST 方法，并从返回的消息中提取我们需要的问题答案。最后一步是整理代码结构并进行最终集成。

### 所需材料

<table align="center">
 <tr>
     <th>材料</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
 </tr>
 <tr>
     <td align="center"><a href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong>立即购买</strong></a></td>
 </tr>
</table>

### 前期准备

本教程中的所有程序和步骤均基于 XIAO ESP32C3 完成。在准备阶段，我们首先需要完成使用 XIAO ESP32C3 的环境配置。

**步骤 1.** 使用 USB Type-C 数据线将 XIAO ESP32C3 连接到您的电脑。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width="120" height="auto"/></div>

**步骤 2.** 根据您的操作系统下载并安装最新版本的 Arduino IDE。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width="600" height="auto"/></a></p>

**步骤 3.** 启动 Arduino 应用程序。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

- **步骤 4.** 在 Arduino IDE 中添加 ESP32 板卡包。

导航到 **文件 > 首选项**，并在 **"附加板管理器 URLs"** 中填写以下 URL：
*https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json*

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"/></div>

导航到 **工具 > 开发板 > 开发板管理器...**，在搜索框中输入关键字 "**esp32**"，选择最新版本的 ****esp32****，并安装它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" alt="pir" width="650" height="auto"/></div>

- **步骤 5.** 选择你的开发板和端口

导航到 **Tools > Board > ESP32 Arduino** 并选择 "**XIAO_ESP32C3**"。开发板列表较长，你需要滚动到列表底部才能找到它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" alt="pir" width="800" height="auto"/></div>

导航到 **Tools > Port** 并选择连接到 XIAO ESP32C3 的串口名称。这通常是 COM3 或更高的端口号（**COM1** 和 **COM2** 通常保留给硬件串口）。

## 配置 XIAO ESP32C3 连接到网络

关于 WiFi 的使用已经在 [XIAO ESP32C3 使用 WiFi 的教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/#connect-to-a-wifi-network) 中详细描述。

当 ESP32 被设置为 Wi-Fi 站点时，它可以连接到其他网络（例如你的路由器）。在这种情况下，路由器会为你的 ESP 开发板分配一个唯一的 IP 地址。

使用 ESP32 Wi-Fi 功能的第一步是在代码中包含 WiFi.h 库，如下所示：

```c
#include <WiFi.h>
```

为了让 ESP32 连接到特定的 Wi-Fi 网络，你需要知道它的 SSID 和密码。此外，该网络必须在 ESP32 的 Wi-Fi 范围内。

首先，设置 Wi-Fi 模式。如果 ESP32 将连接到另一个网络（接入点/热点），它必须处于站点模式。

```c
WiFi.mode(WIFI_STA);
```

然后，使用 `WiFi.begin()` 连接到网络。你需要将网络的 SSID 和密码作为参数传递。

连接到 Wi-Fi 网络可能需要一些时间，因此我们通常添加一个 while 循环，通过使用 `WiFi.status()` 持续检查连接是否已经建立。当连接成功建立时，它会返回 `WL_CONNECTED`。

当 ESP32 被设置为 Wi-Fi 站点时，它可以连接到其他网络（例如你的路由器）。在这种情况下，路由器会为你的 ESP32 开发板分配一个唯一的 IP 地址。要获取开发板的 IP 地址，你需要在与网络建立连接后调用 `WiFi.localIP()`。

```c
void WiFiConnect(void){
    WiFi.begin(ssid, password);
    Serial.print("Connecting to ");
    Serial.println(ssid);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
}
```

`ssid` 和 `password` 变量保存你想要连接的网络的 SSID 和密码。

```c
// 替换为你的网络凭据
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
```

这是一个非常简单的 WiFi 连接程序，将程序上传到 XIAO ESP32C3，然后打开串口助手并将波特率设置为 115200。如果连接成功，你会看到 XIAO 的 IP 地址被打印出来。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"/></div>

如果你对 ESP32C3 在 WiFi 中的应用和功能感兴趣，我们推荐阅读 <a href="https://randomnerdtutorials.com/esp32-useful-wi- fi-functions-arduino/">ESP32 Useful Wi-Fi Library Functions</a>。

## 构建嵌入式网页

ESP32 在 WiFi 库中集成了许多非常有用的 WiFiClient 功能，这使我们能够设计和开发嵌入式网页，而无需添加额外的库。

创建一个新的 WiFiServer 对象，以便使用该对象来控制 XIAO ESP32C3 建立的 IoT 服务器。

```c
WiFiServer server(80);
WiFiClient client1;
```

在上述步骤中，我们让 XIAO ESP32C3 连接到 WiFi。WiFi 连接成功后，你将能够从串口监视器中获取 XIAO 的当前 IP 地址。这时，XIAO 已成功设置了 Web 服务器。你可以通过 XIAO 的 IP 地址访问该 Web 服务器。

假设你的 XIAO ESP32C3 的 IP 地址是 `192.168.7.152`。然后你可以通过浏览器输入此 IP 地址。

输入此 IP 地址后，我们可能只会看到一个空白页面。这是因为我们尚未为该页面发布内容。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"/></div>

因此，现在我们创建一个数组来存储我们想要布局的页面内容，即 HTML 代码，用 C 编写。

```c
const char html_page[] PROGMEM = {
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Connection: close\r\n"  // 响应完成后连接将关闭
    //"Refresh: 1\r\n"         // 每 n 秒自动刷新页面
    "\r\n"
    "<!DOCTYPE HTML>\r\n"
    "<html>\r\n"
    "<head>\r\n"
      "<meta charset=\"UTF-8\">\r\n"
      "<title>Cloud Printer: ChatGPT</title>\r\n"
      "<link rel=\"icon\" href=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" type=\"image/x-icon\">\r\n"
    "</head>\r\n"
    "<body>\r\n"
    "<img alt=\"SEEED\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/logo.png\" height=\"100\" width=\"410\">\r\n"
    "<p style=\"text-align:center;\">\r\n"
    "<img alt=\"ChatGPT\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" height=\"200\" width=\"200\">\r\n"
    "<h1 align=\"center\">Cloud Printer</h1>\r\n" 
    "<h1 align=\"center\">OpenAI ChatGPT</h1>\r\n" 
    "<div style=\"text-align:center;vertical-align:middle;\">"
    "<form action=\"/\" method=\"post\">"
    "<input type=\"text\" placeholder=\"Please enter your question\" size=\"35\" name=\"chatgpttext\" required=\"required\"/>\r\n"
    "<input type=\"submit\" value=\"Submit\" style=\"height:30px; width:80px;\"/>"
    "</form>"
    "</div>"
    "</p>\r\n"
    "</body>\r\n"
    "<html>\r\n"
};
```

此代码为我们提供了如下图所示的页面效果。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"/></div>

:::tip
网页的 HTML 语法超出了本教程的范围。您可以自行学习 HTML 的使用，或者我们可以使用现有的生成工具来完成代码生成工作。我们推荐使用 [HTML Generator](https://webcode.tools/generators/html)。
值得注意的是，在 C 程序中，"\\" 和 """ 是特殊字符，如果您希望在程序中保留这些特殊字符的功能，需要在它们前面添加一个右斜杠。
:::

Client1 指的是在建立 Web 服务器之后的 Socket 客户端，以下代码是 Web 服务器处理的流程。

```c
client1 = server.available();
if (client1){
    Serial.println("New Client.");           // 在串口打印一条消息
    // 一个 HTTP 请求以空行结束
    boolean currentLineIsBlank = true;    
    while (client1.connected()){
        if (client1.available()){  // 检查客户端是否已连接
            char c = client1.read();
            json_String += c;
            if (c == '\n' && currentLineIsBlank) {                                 
                dataStr = json_String.substring(0, 4);
                Serial.println(dataStr);
                if(dataStr == "GET "){
                    client1.print(html_page);  // 将响应正文发送给客户端
                }         
                else if(dataStr == "POST"){
                    json_String = "";
                    while(client1.available()){
                        json_String += (char)client1.read();
                    }
                    Serial.println(json_String); 
                    dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
                    chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
                    client1.print(html_page);        
                    // 关闭连接:
                    delay(10);
                    client1.stop();       
                }
                json_String = "";
                break;
            }
            if (c == '\n') {
                // 开始新的一行
                currentLineIsBlank = true;
            }
            else if (c != '\r') {
                // 当前行收到一个字符
                currentLineIsBlank = false;
            }
        }
    }
}
```

在上面的示例程序中，我们需要使用 `server.begin()` 来启动 IoT 服务器。该语句需要放置在 `setup` 函数中。

```c
void setup()
{
    Serial.begin(115200);
 
    // 设置 WiFi 为站点模式，并断开之前连接的 AP
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial);

    Serial.println("WiFi Setup done!");
    WiFiConnect();

    // 启动 TCP 服务器
    server.begin();
}
```

运行上述程序后，将 XIAO ESP32C3 的 IP 地址输入到浏览器中（前提是您的主机也需要与 XIAO ESP32C3 在同一局域网中），然后 WiFiClient 的 GET 步骤将开始执行。此时，借助客户端的打印方法，我们提交页面的 HTML 代码。

```c
if(dataStr == "GET "){
    client1.print(html_page);
}
```

此外，我们在页面中设计了一个用于问题输入的输入框，当用户输入内容并点击 **Submit** 按钮后，网页将获取按钮的状态并将输入的问题存储到字符串变量 `chatgpt_Q` 中。

```c
json_String = "";
while(client1.available()){
    json_String += (char)client1.read();
}
Serial.println(json_String); 
dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
client1.print(html_page);        
// 关闭连接:
delay(10);
client1.stop();      
```

运行效果如下所示。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"/></div>

## 通过内置网页提交问题

在上一步的页面中，有一个输入框。输入框是用户需要输入他们想要提问的问题的地方。我们需要做的就是获取这个问题，并通过 OpenAI 提供的 API 请求将其发送出去。

**步骤 1**. 注册一个 OpenAI 账户。

您可以点击 [这里](https://beta.openai.com/signup) 前往 OpenAI 的注册页面。如果您之前已经注册过账户，则可以跳过此步骤。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"/></div>

**步骤 2**. 获取 OpenAI API。

登录 [OpenAI 网站](https://platform.openai.com/overview)，点击右上角的账户头像，然后选择 **View API keys**。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"/></div>

在新弹出的页面中选择 **+Create new secret key**，然后复制您的密钥并保存。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"/></div>

同时，我们可以在程序中创建字符串变量并将此密钥复制到这里。

```c
char chatgpt_token[] = "sk**********Rj9DYiXLJJH";
```

:::tip
截至 2023 年 2 月 15 日，OpenAI 为每位新用户免费赠送 **$18** 的额度。详细费率可以在 OpenAI 的 [文档](https://openai.com/api/pricing/) 中找到。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"/></div>
:::

**步骤 3**. 根据 OpenAI 的 HTTP 请求编写程序。

OpenAI 提供了非常详细的 [API 使用说明](https://platform.openai.com/docs/api-reference/making-requests)，用户可以使用自己的 API 密钥调用 ChatGPT。

根据 ChatGPT 的文档，我们需要发送请求的格式如下：

```shell
curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"model": "gpt3.5-turbo-instruct", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
```

超文本传输协议（HTTP）作为客户端与服务器之间的请求-响应协议工作。  
**GET** 用于从指定资源请求数据，通常用于从 API 获取值。  
**POST** 用于向服务器发送数据以创建/更新资源。  
ESP32 可以通过三种不同类型的请求体来发起 HTTP POST 请求：URL 编码、JSON 对象或纯文本。这些是最常见的方法，并且可以与大多数 API 或 Web 服务集成。

以上信息非常重要，为编写 HTTP POST 程序提供了理论基础。一开始，我们需要导入 HTTPClient 库。

```c
#include <HTTPClient.h>
```

你还需要输入 OpenAI 的域名，以便 ESP 将问题发布到 ChatGPT。同时不要忘记 OpenAI 的 API 密钥。

```c
HTTPClient https;

const char* chatgpt_token = "YOUR_API_KEY";
char chatgpt_server[] = "https://api.openai.com/v1/completions";
```

我们需要使用 JSON 对象发起 HTTP POST 请求。

```c
if (https.begin(chatgpt_server)) {  // HTTPS
    https.addHeader("Content-Type", "application/json"); 
    String token_key = String("Bearer ") + chatgpt_token;
    https.addHeader("Authorization", token_key);
    String payload = String("{\"model\": \"gpt-3.5-turbo-instruct\", \"prompt\": \"") + chatgpt_Q + String("\", \"temperature\": 0, \"max_tokens\": 100}"); // 替代 TEXT 作为 Payload，可以使用 JSON 作为 Payload
    httpCode = https.POST(payload);   // 开始连接并发送 HTTP 头
    payload = "";
}
else {
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
}
```

在程序中，我们通过 `POST()` 方法将 `payload` 发送到服务器。`chatgpt_Q` 是我们想要发送给 ChatGPT 的问题内容，这将在“获取问题”页面中提供。

如果你对 ESP32C3 HTTPClient 的更多功能感兴趣，建议阅读 [ESP32 HTTP GET 和 HTTP POST 使用 Arduino IDE](https://randomnerdtutorials.com/esp32-http-get-post-arduino/)。

## 从 ChatGPT 获取答案

下一步是整个教程的最后一步，即如何从 ChatGPT 获取答案并记录下来。

让我们继续阅读 OpenAI 提供的 [API 文档](https://platform.openai.com/docs/api-reference/making-requests)，以了解 ChatGPT 返回的消息内容结构。这将帮助我们编写程序以解析所需的内容。

```shell
{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "gpt-3.5-turbo-instruct",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}
```

从 OpenAI 提供的参考文档中，我们知道接口返回的消息中问题答案的位置是 `{"choices": [{"text": "\n\nxxxxxxx",}]}`。

因此，我们可以确定所需的“答案”应以 **\n\n** 开头，并以 **,** 结束。然后，在程序中，我们可以使用 `indexOf()` 方法获取文本的起始和结束位置，并存储返回答案的内容。

```c
dataStart = payload.indexOf("\\n\\n") + strlen("\\n\\n");
dataEnd = payload.indexOf("\",", dataStart); 
chatgpt_A = payload.substring(dataStart, dataEnd);
```

总结一下，我们可以使用程序当前状态的切换方法来确定程序应该执行的步骤。

```c
typedef enum 
{
  do_webserver_index,
  send_chatgpt_request,
  get_chatgpt_list,
}STATE_;

STATE_ currentState;

switch(currentState){
    case do_webserver_index:
        ...
    case send_chatgpt_request:
        ...
    case get_chatgpt_list:
        ...
}
```

至此，整个程序的逻辑已经构建完成。完整的程序代码可以通过点击下方图片获取。请不要急于上传程序，你需要将程序中的 **ssid、password 和 chatgpt_token** 替换为你自己的。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/xiaoesp32c3-chatgpt" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

然后，尽情使用吧！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"/></div>

## 接下来做什么？

在本教程中，我们提供了在嵌入式开发板（如 Arduino - XIAO ESP32C3）上调用 OpenAI 接口的基本方法。接下来，你可以发挥你的创造力！

例如，你可以考虑添加一个屏幕或键盘，使其成为一个仅为你工作的独立显示设备？来看 Gavin 的创意，他制作了一个特别有趣的监控设备！我们也特别感谢他为本教程提供了必要的步骤和想法。

- [Gavin - ChatGPT 录音机和监控器](https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"/></div>

或者更进一步，添加一个语音识别模块，从此摆脱键盘和鼠标，制作一个属于你自己的语音助手等。总之，我们非常期待你分享使用像 XIAO ESP32C3 这样优秀产品的作品！

## 故障排除

### Q1: 使用 XIAO ESP32C3 调用 OpenAI API 获取答案时，是否存在地理或网络使用限制？

> A: 截至 2023 年 2 月 17 日测试，位于中国大陆并使用中国网络的作者也可以非常顺畅地获得 ChatGPT 的响应，目前没有任何限制。只要我们能够获取 OpenAI API 密钥，调用就可以顺利完成。

### Q2: 为什么我会收到超时错误？

> A: 这可能是因为 ChatGPT 回复消息的时间过长，导致程序错误地认为它没有响应。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>