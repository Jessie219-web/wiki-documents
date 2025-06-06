// 简化版本：移除缓存，专注生成速度和可靠性
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 配置
const config = {
  // 文档目录配置
  docsPaths: {
    en: 'docs',           
    cn: 'docs/zh-CN',     
    ja: 'docs/ja',        
    es: 'docs/Spanish'    
  },
  
  // 语言前缀配置（URL路径）
  languagePrefixes: {
    en: '',
    cn: '/cn',
    ja: '/ja', 
    es: '/es'
  },
  
  // 输出文件
  outputFile: 'static/js/language-map.json',
  
  // 简化配置
  verbose: true
};

// 递归获取目录下所有markdown文件
function getAllMarkdownFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    if (config.verbose) {
      console.log(`⚠️  目录不存在: ${dir}`);
    }
    return files;
  }
  
  function traverse(currentDir, relativePath = '') {
    try {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      
      for (const entry of entries) {
        // 跳过隐藏文件和无关目录
        if (entry.name.startsWith('.') || 
            entry.name === 'node_modules' || 
            entry.name === '_site' ||
            entry.name === 'build') {
          continue;
        }
        
        const fullPath = path.join(currentDir, entry.name);
        const relPath = path.join(relativePath, entry.name);
        
        if (entry.isDirectory()) {
          traverse(fullPath, relPath);
        } else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
          files.push({
            fullPath,
            relativePath: relPath,
            fileName: entry.name
          });
        }
      }
    } catch (error) {
      console.warn(`⚠️  读取目录失败: ${currentDir}`, error.message);
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
    
    const slug = parsed.data.slug;
    return slug ? (slug.startsWith('/') ? slug : `/${slug}`) : null;
  } catch (error) {
    console.error(`❌ 读取文件失败: ${filePath}`, error.message);
    return null;
  }
}

// 从相对路径推断默认slug
function inferSlugFromPath(relativePath) {
  // 移除文件扩展名
  const withoutExt = relativePath.replace(/\.(md|mdx)$/i, '');
  
  // 标准化路径分隔符
  const normalized = withoutExt.replace(/\\/g, '/');
  
  // 处理index文件
  if (normalized.endsWith('/index') || normalized === 'index') {
    const dir = path.dirname(normalized);
    return dir === '.' ? '/' : `/${dir}/`;
  }
  
  // 普通文件
  return `/${normalized}/`;
}

// 处理单个语言的文档
function processLanguageDocuments(languageCode, docsPath) {
  if (config.verbose) {
    console.log(`\n🔍 处理 ${languageCode} 文档: ${docsPath}`);
  }
  
  const files = getAllMarkdownFiles(docsPath);
  const slugMap = new Map();
  
  if (config.verbose) {
    console.log(`   找到 ${files.length} 个文件`);
  }
  
  for (const file of files) {
    // 先尝试从frontmatter提取slug
    let slug = extractSlugFromFile(file.fullPath);
    
    // 如果没有slug，从文件路径推断
    if (!slug) {
      slug = inferSlugFromPath(file.relativePath);
    }
    
    // 处理语言前缀
    if (languageCode !== 'en' && slug.startsWith(config.languagePrefixes[languageCode])) {
      slug = slug.replace(config.languagePrefixes[languageCode], '') || '/';
    }
    
    slugMap.set(slug, {
      file: file.relativePath,
      fullPath: file.fullPath,
      language: languageCode
    });
    
    if (config.verbose) {
      console.log(`   ✅ ${file.relativePath} -> ${slug}`);
    }
  }
  
  return slugMap;
}

// 生成语言映射表
function generateLanguageMapping() {
  console.log('🚀 开始生成语言映射表...\n');
  
  const allSlugs = new Map();
  const processedFiles = new Set();
  
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
      processedFiles.add(fileInfo.fullPath);
    }
  }
  
  // 转换为最终格式
  const languageMapping = {};
  
  for (const [slug, info] of allSlugs) {
    if (info.languages.length > 1) {
      languageMapping[slug] = info.languages.sort();
    }
  }
  
  return { 
    languageMapping, 
    allSlugs, 
    processedFiles: processedFiles.size
  };
}

// 生成统计报告
function generateReport(allSlugs, processedFiles) {
  if (!config.verbose) return {};
  
  console.log('\n📊 生成统计报告...\n');
  
  const stats = {
    total: allSlugs.size,
    multiLanguage: 0,
    singleLanguage: 0,
    byLanguageCount: {},
    processedFiles
  };
  
  const multiLanguagePages = [];
  const languageDistribution = {};
  
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
    }
    
    stats.byLanguageCount[langCount] = (stats.byLanguageCount[langCount] || 0) + 1;
    
    // 统计每种语言的页面数
    for (const lang of info.languages) {
      languageDistribution[lang] = (languageDistribution[lang] || 0) + 1;
    }
  }
  
  // 输出统计信息
  console.log('📈 统计信息:');
  console.log(`   总页面数: ${stats.total}`);
  console.log(`   多语言页面: ${stats.multiLanguage}`);
  console.log(`   单语言页面: ${stats.singleLanguage}`);
  console.log(`   处理文件数: ${processedFiles}`);
  
  console.log('\n🌍 各语言页面分布:');
  for (const [lang, count] of Object.entries(languageDistribution)) {
    const langName = {en: '英文', cn: '中文', ja: '日文', es: '西语'}[lang] || lang;
    console.log(`   ${langName} (${lang}): ${count} 页`);
  }
  
  console.log('\n📊 按语言数量分布:');
  for (const [count, pages] of Object.entries(stats.byLanguageCount)) {
    console.log(`   ${count} 种语言: ${pages} 页`);
  }
  
  // 显示多语言页面示例
  console.log('\n🌐 多语言页面示例 (前10个):');
  multiLanguagePages
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
    .forEach(page => {
      console.log(`   ${page.slug} (${page.languages.join(', ')})`);
    });
  
  return stats;
}

// 验证输出数据
function validateOutput(languageMapping) {
  const issues = [];
  
  for (const [slug, languages] of Object.entries(languageMapping)) {
    if (!Array.isArray(languages) || languages.length < 2) {
      issues.push(`无效的语言数组: ${slug}`);
    }
    
    for (const lang of languages) {
      if (!config.languagePrefixes.hasOwnProperty(lang)) {
        issues.push(`未知语言代码: ${lang} in ${slug}`);
      }
    }
  }
  
  if (issues.length > 0) {
    console.warn('\n⚠️  发现问题:');
    issues.forEach(issue => console.warn(`   - ${issue}`));
  }
  
  return issues.length === 0;
}

// 主函数
function main() {
  const startTime = Date.now();
  
  try {
    // 生成映射
    const { languageMapping, allSlugs, processedFiles } = generateLanguageMapping();
    
    // 验证数据
    const isValid = validateOutput(languageMapping);
    if (!isValid) {
      console.error('❌ 数据验证失败，请检查配置');
      process.exit(1);
    }
    
    // 生成报告
    const stats = generateReport(allSlugs, processedFiles);
    
    // 准备输出数据
    const outputData = {
      generatedAt: new Date().toISOString(),
      generatedBy: 'generate-language-map.js v3.0 (无缓存版)',
      generationTime: Date.now() - startTime,
      stats: {
        totalPages: allSlugs.size,
        multiLanguagePages: stats.multiLanguage || 0,
        singleLanguagePages: stats.singleLanguage || 0,
        processedFiles: processedFiles
      },
      config: {
        languagePrefixes: config.languagePrefixes,
        docsPaths: config.docsPaths,
        version: '3.0'
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
    console.log(`⚡ 用时: ${Date.now() - startTime}ms`);
    
    // 输出文件大小
    const stats_file = fs.statSync(config.outputFile);
    console.log(`📦 文件大小: ${Math.round(stats_file.size / 1024)}KB`);
    
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