// 生成语言映射表的脚本
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 配置
const config = {
  // 文档目录配置
  docsPaths: {
    en: 'docs',           // 英文文档
    cn: 'docs/zh-CN',     // 中文文档  
    ja: 'docs/ja',        // 日文文档
    es: 'docs/Spanish'    // 西班牙语文档
  },
  
  // 语言前缀配置（URL路径）
  languagePrefixes: {
    en: '',
    cn: '/cn',
    ja: '/ja', 
    es: '/es'
  },
  
  // 输出文件
  outputFile: 'static/js/language-map.json'
};

// 递归获取目录下所有markdown文件
function getAllMarkdownFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  目录不存在: ${dir}`);
    return files;
  }
  
  function traverse(currentDir, relativePath = '') {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.join(relativePath, entry.name);
      
      if (entry.isDirectory()) {
        // 递归遍历子目录
        traverse(fullPath, relPath);
      } else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
        // 是markdown文件
        files.push({
          fullPath,
          relativePath: relPath,
          fileName: entry.name
        });
      }
    }
  }
  
  traverse(dir);
  return files;
}

// 从markdown文件中提取slug
function extractSlugFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(content);
    
    // 提取frontmatter中的slug
    const slug = parsed.data.slug;
    
    if (slug) {
      // 确保slug以/开头
      return slug.startsWith('/') ? slug : `/${slug}`;
    }
    
    return null;
  } catch (error) {
    console.error(`❌ 读取文件失败: ${filePath}`, error.message);
    return null;
  }
}

// 从相对路径推断默认slug
function inferSlugFromPath(relativePath) {
  // 移除文件扩展名
  const withoutExt = relativePath.replace(/\.(md|mdx)$/i, '');
  
  // 处理index文件
  if (withoutExt.endsWith('/index') || withoutExt === 'index') {
    const dir = path.dirname(withoutExt);
    return dir === '.' ? '/' : `/${dir}/`;
  }
  
  // 普通文件
  return `/${withoutExt}/`;
}

// 处理单个语言的文档
function processLanguageDocuments(languageCode, docsPath) {
  console.log(`\n🔍 处理 ${languageCode} 文档: ${docsPath}`);
  
  const files = getAllMarkdownFiles(docsPath);
  const slugMap = new Map();
  
  console.log(`   找到 ${files.length} 个文件`);
  
  for (const file of files) {
    // 先尝试从frontmatter提取slug
    let slug = extractSlugFromFile(file.fullPath);
    
    // 如果没有slug，从文件路径推断
    if (!slug) {
      slug = inferSlugFromPath(file.relativePath);
    }
    
    // 处理语言前缀
    if (languageCode !== 'en' && slug.startsWith(config.languagePrefixes[languageCode])) {
      // 移除语言前缀，得到基础slug
      slug = slug.replace(config.languagePrefixes[languageCode], '') || '/';
    }
    
    slugMap.set(slug, {
      file: file.relativePath,
      fullPath: file.fullPath,
      language: languageCode
    });
    
    console.log(`   ✅ ${file.relativePath} -> ${slug}`);
  }
  
  return slugMap;
}

// 生成语言映射表
function generateLanguageMapping() {
  console.log('🚀 开始生成语言映射表...\n');
  
  const allSlugs = new Map(); // slug -> { languages: [], files: {} }
  
  // 处理每种语言的文档
  for (const [langCode, docsPath] of Object.entries(config.docsPaths)) {
    const slugMap = processLanguageDocuments(langCode, docsPath);
    
    // 合并到总映射中
    for (const [slug, fileInfo] of slugMap) {
      if (!allSlugs.has(slug)) {
        allSlugs.set(slug, {
          languages: [],
          files: {}
        });
      }
      
      const slugInfo = allSlugs.get(slug);
      slugInfo.languages.push(langCode);
      slugInfo.files[langCode] = fileInfo;
    }
  }
  
  // 转换为最终格式
  const languageMapping = {};
  
  for (const [slug, info] of allSlugs) {
    if (info.languages.length > 1) { // 只包含多语言页面
      languageMapping[slug] = info.languages.sort();
    }
  }
  
  return { languageMapping, allSlugs };
}

// 生成统计报告
function generateReport(allSlugs) {
  console.log('\n📊 生成统计报告...\n');
  
  const stats = {
    total: allSlugs.size,
    multiLanguage: 0,
    singleLanguage: 0,
    byLanguageCount: {}
  };
  
  const multiLanguagePages = [];
  const singleLanguagePages = [];
  
  for (const [slug, info] of allSlugs) {
    const langCount = info.languages.length;
    
    if (langCount > 1) {
      stats.multiLanguage++;
      multiLanguagePages.push({
        slug,
        languages: info.languages,
        count: langCount
      });
    } else {
      stats.singleLanguage++;
      singleLanguagePages.push({
        slug,
        language: info.languages[0]
      });
    }
    
    stats.byLanguageCount[langCount] = (stats.byLanguageCount[langCount] || 0) + 1;
  }
  
  // 输出统计信息
  console.log('📈 统计信息:');
  console.log(`   总页面数: ${stats.total}`);
  console.log(`   多语言页面: ${stats.multiLanguage}`);
  console.log(`   单语言页面: ${stats.singleLanguage}`);
  console.log('\n📊 按语言数量分布:');
  
  for (const [count, pages] of Object.entries(stats.byLanguageCount)) {
    console.log(`   ${count} 种语言: ${pages} 页`);
  }
  
  // 显示多语言页面示例
  console.log('\n🌐 多语言页面示例:');
  multiLanguagePages
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
    .forEach(page => {
      console.log(`   ${page.slug} (${page.languages.join(', ')})`);
    });
  
  return stats;
}

// 主函数
function main() {
  try {
    // 生成映射
    const { languageMapping, allSlugs } = generateLanguageMapping();
    
    // 生成报告
    const stats = generateReport(allSlugs);
    
    // 准备输出数据
    const outputData = {
      generatedAt: new Date().toISOString(),
      generatedBy: 'generate-language-map.js',
      stats: {
        totalPages: allSlugs.size,
        multiLanguagePages: stats.multiLanguage,
        singleLanguagePages: stats.singleLanguage
      },
      config: {
        languagePrefixes: config.languagePrefixes,
        docsPaths: config.docsPaths
      },
      languageMapping: languageMapping
    };
    
    // 确保输出目录存在
    const outputDir = path.dirname(config.outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 写入文件
    fs.writeFileSync(
      config.outputFile, 
      JSON.stringify(outputData, null, 2),
      'utf8'
    );
    
    console.log(`\n✅ 语言映射表已生成: ${config.outputFile}`);
    console.log(`📄 包含 ${Object.keys(languageMapping).length} 个多语言页面`);
    
  } catch (error) {
    console.error('❌ 生成失败:', error);
    process.exit(1);
  }
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = { generateLanguageMapping, config };