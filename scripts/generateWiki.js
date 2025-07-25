const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const rootDir = path.join(__dirname, '..') // 回到项目根目录
const docsDirectory = path.join(rootDir, 'docs')
const wikiFilePath = path.join(rootDir, '/src/utils/wiki.js')

const docList = []
const excludedPaths = [
  path.join(docsDirectory, 'Seeed_Elderly', 'weekly_wiki'), // weekly wiki 的历史目录
  path.join(docsDirectory, 'zh-CN'), // 排除中文文档的目录
  path.join(docsDirectory, 'ja'), // 排除日文文档的目录
  path.join(docsDirectory, 'Spanish'), // 排除西班牙语文档的目录
  path.join(docsDirectory, 'weekly_wiki.md'), // 排除 weekly wiki 的文件


  // 排除指定文档
  path.join(docsDirectory, 'Cloud_Chain'), // 排除cloud目录，因为最近在整改
  path.join(docsDirectory, 'Robotics', 'Robot_Actuator', 'HighTorque.md'), //6.24
  path.join(docsDirectory, 'Edge', 'NVIDIA_Jetson', 'FAQs', 'Enable_SPI_Interface_on_JetsonNano.md'), //7.02
  path.join(docsDirectory, 'Sensor', 'reSpeaker_XVF3800_USB_4_Mic_Array', 'respeaker_xvf_3800_gpio.md'), //7.16
  path.join(docsDirectory, 'Sensor', 'reSpeaker_XVF3800_USB_4_Mic_Array', 'respeaker_xvf_3800_record_playback.md'), //7.16
  path.join(docsDirectory, 'Sensor', 'reSpeaker_XVF3800_USB_4_Mic_Array', 'respeaker_xvf_3800_rgb_test.md'), //7.16
  path.join(docsDirectory, 'Sensor', 'reSpeaker_XVF3800_USB_4_Mic_Array', 'respeaker_xvf_3800_volume.md'), //7.16
  path.join(docsDirectory, 'Sensor', 'reSpeaker_XVF3800_USB_4_Mic_Array', 'respeaker_xvf3800_i2s_test.md'), //7.16
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO_Gadgets', 'trmnl_7inch5_diy_kit', 'works_with_Arduino.md'), //7.16
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO_Gadgets', 'trmnl_7inch5_diy_kit', 'works_with_esphome.md'), //7.21

];

// 递归函数，用于遍历多层文件夹
function processDirectory(directory) {

  // 如果当前目录是要排除的路径，则跳过
  if (excludedPaths.includes(directory)) {
    return;
  }

  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file)
    const fileStats = fs.statSync(filePath)

    // 如果文件或文件夹在排除列表中，则跳过
    if (excludedPaths.includes(filePath)) {
      return;
    }

    if (fileStats.isDirectory()) {
      // 如果是文件夹，则递归处理
      processDirectory(filePath)
    } else if (fileStats.isFile() && path.extname(file) === '.md') {
      // 如果是 Markdown 文件
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContents)

      // 1. 去除 YAML 头部
      const markdownWithoutYaml = content.replace(/^---[\s\S]+?---\s*/, '')

      // 2. 去除所有代码块（包括以 ``` 开头的块）
      const markdownWithoutCodeBlocks = markdownWithoutYaml.replace(/```[\s\S]*?```/g, '')

      // 优先查找第一个一级标题（以 # 开头的行）
      const titleMatch = markdownWithoutCodeBlocks.match(/^#\s+(.*)/m)
      const title = titleMatch ? titleMatch[1].trim() : (data.title || '')

      // 3. 获取文件的 path（优先使用 slug，如果没有 slug，则根据路径生成）
      let filePathRelative = path.relative(docsDirectory, filePath); // 计算相对路径
      filePathRelative = filePathRelative.replace(/\\/g, '/'); // 将反斜杠换成正斜杠
      const slug = data.slug || filePathRelative.replace('.md', ''); // 如果没有 slug，则使用相对路径

      // 判断是否有 date 字段
      if (data.last_update && data.last_update.date) {
        docList.push({
          path: slug,
          image: data.image || '',
          title: title,
          date: data.last_update.date,
        })
      }
    }
  })
}

processDirectory(docsDirectory)

// 根据 date 字段进行降序排序
docList.sort((a, b) => new Date(b.date) - new Date(a.date))

// 获取最新的 12 条文档
const latestDocs = docList.slice(0, 12)

// 将文档信息按照每个子数组最多包含 2 个文档的方式重新组织
const docList2D = []
for (let i = 0; i < latestDocs.length; i += 2) {
  const subArray = latestDocs.slice(i, i + 2)
  docList2D.push(subArray)
}

// 生成 wiki.js 文件
const wikiContent = `const docList = ${JSON.stringify(
  docList2D,
  null,
  2,
)};\n\nexport default docList;`

fs.writeFileSync(wikiFilePath, wikiContent)

console.log('wiki.js 文件生成成功！')
