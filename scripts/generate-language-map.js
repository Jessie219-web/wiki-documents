// 语言切换器（内嵌数据）
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 配置
const config = {
  docsPaths: {
    en: 'docs',           
    cn: 'docs/zh-CN',     
    ja: 'docs/ja',        
    es: 'docs/Spanish'    
  },
  
  languagePrefixes: {
    en: '',
    cn: '/cn',
    ja: '/ja', 
    es: '/es'
  },
  
  outputFile: 'static/js/language-switcher.js',
  verbose: true
};

// 获取所有markdown文件
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

function inferSlugFromPath(relativePath) {
  const withoutExt = relativePath.replace(/\.(md|mdx)$/i, '');
  const normalized = withoutExt.replace(/\\/g, '/');
  
  if (normalized.endsWith('/index') || normalized === 'index') {
    const dir = path.dirname(normalized);
    return dir === '.' ? '/' : `/${dir}/`;
  }
  
  return `/${normalized}/`;
}

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
    let slug = extractSlugFromFile(file.fullPath);
    
    if (!slug) {
      slug = inferSlugFromPath(file.relativePath);
    }
    
    if (languageCode !== 'en' && slug.startsWith(config.languagePrefixes[languageCode])) {
      slug = slug.replace(config.languagePrefixes[languageCode], '') || '/';
    }
    
    slugMap.set(slug, {
      file: file.relativePath,
      language: languageCode
    });
    
    if (config.verbose) {
      console.log(`   ✅ ${file.relativePath} -> ${slug}`);
    }
  }
  
  return slugMap;
}

function generateLanguageMapping() {
  console.log('🚀 开始生成语言映射表...\n');
  
  const allSlugs = new Map();
  
  for (const [langCode, docsPath] of Object.entries(config.docsPaths)) {
    const slugMap = processLanguageDocuments(langCode, docsPath);
    
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
  
  const languageMapping = {};
  
  for (const [slug, info] of allSlugs) {
    if (info.languages.length > 1) {
      languageMapping[slug] = info.languages.sort();
    }
  }
  
  return { languageMapping, allSlugs };
}

function generateJavaScriptFile() {
  const startTime = Date.now();
  
  try {
    const { languageMapping, allSlugs } = generateLanguageMapping();
    
    const stats = {
      total: allSlugs.size,
      multiLanguage: Object.keys(languageMapping).length,
      singleLanguage: allSlugs.size - Object.keys(languageMapping).length
    };
    
    console.log('\n📊 统计信息:');
    console.log(`   总页面数: ${stats.total}`);
    console.log(`   多语言页面: ${stats.multiLanguage}`);
    console.log(`   单语言页面: ${stats.singleLanguage}`);
    
    // 生成北京时间
    const now = new Date();
    const beijingTime = new Date(now.getTime() + (8 * 60 * 60 * 1000)); // UTC+8
    const beijingTimeString = beijingTime.toISOString().replace('T', ' ').slice(0, 19) + ' (北京时间)';
    
    // 生成积极恢复版本的JavaScript代码
    const jsContent = `// 语言切换器
// 生成时间: ${beijingTimeString}
// 多语言页面: ${stats.multiLanguage} 个
// 修复：侧边栏导航时自动更新语言选项

(function() {
  'use strict';

  const DEBUG = false; // 生产环境可关闭调试
  
  function log(...args) {
    if (DEBUG) {
      console.log('🔄 [SPA路由修复版]', new Date().toISOString().slice(11, 23), ...args);
    }
  }

  // 语言配置
  const languages = {
    en: { label: 'English', flag: '🇺🇸', prefix: '' },
    cn: { label: '简体中文', flag: '🇨🇳', prefix: '/cn' },
    ja: { label: '日本語', flag: '🇯🇵', prefix: '/ja' },
    es: { label: 'Español', flag: '🇪🇸', prefix: '/es' }
  };

  // 内嵌的语言映射数据
  const languageMapping = ${JSON.stringify(languageMapping, null, 2)};

  // 状态管理变量
  let isInitialized = false;
  let shouldHaveSwitcher = false;
  let injectionCount = 0;
  
  // 积极恢复相关变量
  let rapidCheckInterval = null;
  let normalCheckInterval = null;
  let lastSuccessfulInjection = 0;

  function getCurrentLanguageAndPath() {
    const currentPath = window.location.pathname;
    let detectedLanguage = 'en';
    let basePath = currentPath;
    
    if (currentPath.startsWith('/cn/')) {
      detectedLanguage = 'cn';
      basePath = currentPath.replace('/cn', '') || '/';
    } else if (currentPath.startsWith('/ja/')) {
      detectedLanguage = 'ja';
      basePath = currentPath.replace('/ja', '') || '/';
    } else if (currentPath.startsWith('/es/')) {
      detectedLanguage = 'es';
      basePath = currentPath.replace('/es', '') || '/';
    }
    
    if (!basePath.startsWith('/')) {
      basePath = '/' + basePath;
    }
    
    return { currentLanguage: detectedLanguage, basePath };
  }

  function findAvailableLanguages(basePath, currentLanguage) {
    const pathsToTry = [
      basePath,
      basePath.replace(/\\/$/, ''),
      basePath + (basePath.endsWith('/') ? '' : '/'),
    ];
    
    for (const tryPath of pathsToTry) {
      if (languageMapping[tryPath]) {
        const availableLanguages = languageMapping[tryPath];
        log('🌐 找到多语言页面 ' + tryPath + ':', availableLanguages);
        return availableLanguages;
      }
    }
    
    log('ℹ️ 单语言页面: ' + basePath);
    return [currentLanguage];
  }

  function createLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) {
      shouldHaveSwitcher = false;
      return null;
    }

    shouldHaveSwitcher = true;
    const currentLangConfig = languages[currentLanguage];
    const priority = { en: 0, cn: 1, ja: 2, es: 3 };
    const sortedLanguages = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });
    
    const switcherHTML = [
      '<div class="navbar__item dropdown dropdown--hoverable navbar-language-switcher navbar_dorp_items" data-recovery-count="' + injectionCount + '">',
      '  <a href="#" class="navbar__link" aria-haspopup="true" aria-expanded="false" role="button">',
      '    <span class="lang-flag">' + currentLangConfig.flag + '</span>',
      '    <span class="lang-label">' + currentLangConfig.label + '</span>',
      '  </a>',
      '  <ul class="dropdown__menu">',
      sortedLanguages.map(langCode => {
        const lang = languages[langCode];
        const langPath = lang.prefix + basePath;
        const isActive = langCode === currentLanguage;
        
        return [
          '    <li>',
          '      <a class="dropdown__link ' + (isActive ? 'dropdown__link--active' : '') + '"',
          '         href="' + langPath + '"',
          '         title="切换到 ' + lang.label + '"',
          (isActive ? '         aria-current="page">' : '>'),
          '        <span class="lang-flag">' + lang.flag + '</span>',
          '        <span class="lang-label">' + lang.label + '</span>',
          (isActive ? '        <span class="lang-check">✓</span>' : ''),
          '      </a>',
          '    </li>'
        ].join('\\n');
      }).join('\\n'),
      '  </ul>',
      '</div>'
    ].join('\\n');
    
    return switcherHTML;
  }

  function injectLanguageSwitcher() {
    const navbar = document.querySelector('.navbar__items--right') || 
                   document.querySelector('.navbar__items') ||
                   document.querySelector('.navbar');
    
    if (!navbar) {
      log('⏳ 导航栏未找到');
      return false;
    }

    // 检查是否已存在
    const existingSwitcher = document.querySelector('.navbar-language-switcher');
    if (existingSwitcher) {
      return true; // 已存在，算作成功
    }

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
    const switcherHTML = createLanguageSwitcher(availableLanguages, currentLanguage, basePath);
    
    if (!switcherHTML) {
      return true; // 单语言页面，不需要切换器，算作成功
    }

    try {
      injectionCount++;
      
      let insertPosition = null;
      const positionSelectors = [
        'a[href*="seeedstudio.com"]',
        '.header-github-link', 
        '.navbar__item:last-child'
      ];
      
      for (const selector of positionSelectors) {
        const element = navbar.querySelector(selector);
        if (element) {
          insertPosition = element;
          break;
        }
      }
      
      if (insertPosition) {
        insertPosition.insertAdjacentHTML('beforebegin', switcherHTML);
      } else {
        navbar.insertAdjacentHTML('beforeend', switcherHTML);
      }
      
      // 防止默认链接行为
      const switcherElement = navbar.querySelector('.navbar-language-switcher');
      if (switcherElement) {
        const switcherButton = switcherElement.querySelector('.navbar__link');
        if (switcherButton) {
          switcherButton.addEventListener('click', function(e) {
            e.preventDefault();
          });
        }
      }
      
      lastSuccessfulInjection = Date.now();
      log('✅ 切换器注入成功! (#' + injectionCount + ')');
      return true;
      
    } catch (error) {
      log('❌ 注入失败:', error);
      return false;
    }
  }

  // 积极恢复策略
  function startAggressiveRecovery() {
    // 清除可能存在的检查器
    if (rapidCheckInterval) clearInterval(rapidCheckInterval);
    if (normalCheckInterval) clearInterval(normalCheckInterval);
    
    // 第一阶段：前10秒内每100ms检查一次（高频）
    let rapidCheckCount = 0;
    const maxRapidChecks = 100; // 10秒 * 10次/秒
    
    rapidCheckInterval = setInterval(function() {
      rapidCheckCount++;
      
      checkAndUpdateSwitcher();
      
      // 10秒后切换到正常模式
      if (rapidCheckCount >= maxRapidChecks) {
        clearInterval(rapidCheckInterval);
        rapidCheckInterval = null;
        log('🔄 切换到正常检查模式');
        startNormalRecovery();
      }
    }, 100); // 每100ms检查一次
    
    log('🚀 启动积极恢复模式：前10秒内每100ms检查一次');
  }

  // 正常恢复策略
  function startNormalRecovery() {
    normalCheckInterval = setInterval(function() {
      checkAndUpdateSwitcher();
    }, 1000); // 每1秒检查一次
    
    log('🔄 启动正常恢复模式：每1秒检查一次');
  }

  // 核心检查和更新函数 - 解决SPA路由问题
  function checkAndUpdateSwitcher() {
    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
    const existingSwitcher = document.querySelector('.navbar-language-switcher');
    
    // 情况1：应该有切换器但不存在 - 注入
    if (availableLanguages.length > 1 && !existingSwitcher) {
      log('🚀 检测到需要注入切换器');
      shouldHaveSwitcher = true;
      injectLanguageSwitcher();
      return;
    }
    
    // 情况2：不应该有切换器但存在 - 移除
    if (availableLanguages.length <= 1 && existingSwitcher) {
      log('🗑️ 检测到需要移除切换器（单语言页面）');
      shouldHaveSwitcher = false;
      existingSwitcher.remove();
      return;
    }
    
    // 情况3：应该有切换器且存在 - 检查是否需要更新内容
    if (availableLanguages.length > 1 && existingSwitcher) {
      shouldHaveSwitcher = true;
      
      // 检查当前切换器是否匹配当前页面
      const currentSwitcherHTML = createLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      if (!currentSwitcherHTML) return;
      
      // 创建临时元素来比较内容
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = currentSwitcherHTML;
      const newSwitcherContent = tempDiv.firstElementChild;
      
      // 比较关键属性：语言选项和当前语言
      const existingLanguages = Array.from(existingSwitcher.querySelectorAll('.dropdown__link')).map(link => {
        const flag = link.querySelector('.lang-flag');
        const label = link.querySelector('.lang-label');
        return (flag ? flag.textContent : '') + (label ? label.textContent : '');
      }).join(',');
      
      const newLanguages = Array.from(newSwitcherContent.querySelectorAll('.dropdown__link')).map(link => {
        const flag = link.querySelector('.lang-flag');
        const label = link.querySelector('.lang-label');
        return (flag ? flag.textContent : '') + (label ? label.textContent : '');
      }).join(',');
      
      const existingCurrentLang = existingSwitcher.querySelector('.navbar__link .lang-label');
      const newCurrentLang = newSwitcherContent.querySelector('.navbar__link .lang-label');
      
      const existingCurrentLangText = existingCurrentLang ? existingCurrentLang.textContent : '';
      const newCurrentLangText = newCurrentLang ? newCurrentLang.textContent : '';
      
      // 如果内容不匹配，更新切换器
      if (existingLanguages !== newLanguages || existingCurrentLangText !== newCurrentLangText) {
        log('🔄 检测到页面变化，更新切换器内容');
        log('   旧语言: ' + existingCurrentLangText + ' [' + existingLanguages + ']');
        log('   新语言: ' + newCurrentLangText + ' [' + newLanguages + ']');
        
        // 替换整个切换器
        existingSwitcher.remove();
        injectLanguageSwitcher();
      }
    }
  }

  // 延迟初始化策略：等待Docusaurus稳定后再注入
  function delayedInitialization() {
    log('⏰ 开始延迟初始化...');
    
    // 等待500ms让Docusaurus完成初始化
    setTimeout(function() {
      log('🔧 延迟检查和注入切换器...');
      
      checkAndUpdateSwitcher();
      
      // 启动积极恢复
      setTimeout(startAggressiveRecovery, 100);
    }, 500);
  }

  // 增强的路由监听 - 解决SPA导航问题
  function observeRouteChanges() {
    let currentPathname = location.pathname;
    let debounceTimeout = null;
    
    function handleRouteChange(source) {
      // 防抖处理
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(function() {
        if (location.pathname !== currentPathname) {
          log('🔄 路由变化 [' + source + ']: ' + currentPathname + ' -> ' + location.pathname);
          currentPathname = location.pathname;
          
          // 清除现有的恢复机制
          if (rapidCheckInterval) clearInterval(rapidCheckInterval);
          if (normalCheckInterval) clearInterval(normalCheckInterval);
          
          // 立即检查并更新切换器
          setTimeout(function() {
            checkAndUpdateSwitcher();
            // 重新启动恢复机制
            startAggressiveRecovery();
          }, 100);
        }
      }, 50); // 50ms防抖
    }

    // 方法1：监听浏览器前进后退
    window.addEventListener('popstate', function() {
      handleRouteChange('popstate');
    });
    
    // 方法2：拦截pushState和replaceState（程序化导航）
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function() {
      originalPushState.apply(this, arguments);
      setTimeout(function() {
        handleRouteChange('pushState');
      }, 0);
    };
    
    history.replaceState = function() {
      originalReplaceState.apply(this, arguments);
      setTimeout(function() {
        handleRouteChange('replaceState');
      }, 0);
    };
    
    // 方法3：监听点击事件（捕获侧边栏导航）
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href]');
      if (link && link.href) {
        const url = new URL(link.href);
        // 如果是内部链接且路径不同
        if (url.origin === window.location.origin && url.pathname !== currentPathname) {
          setTimeout(function() {
            handleRouteChange('click');
          }, 100); // 给导航一些时间完成
        }
      }
    });
    
    // 方法4：监听URL变化（备用方案）
    let urlCheckInterval = setInterval(function() {
      if (location.pathname !== currentPathname) {
        handleRouteChange('urlCheck');
      }
    }, 500); // 每500ms检查一次URL变化
    
    log('🔧 启动增强路由监听：popstate + pushState + click + urlCheck');
  }

  function init() {
    if (isInitialized) {
      return;
    }
    
    log('🚀 初始化SPA路由修复版语言切换器...');
    log('📊 包含 ' + Object.keys(languageMapping).length + ' 个多语言页面');
    
    isInitialized = true;
    
    // 启动路由监听
    observeRouteChanges();
    
    // 开始延迟初始化
    delayedInitialization();
  }

  // 立即初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 0);
  }

})();`;

    // 确保输出目录存在
    const outputDir = path.dirname(config.outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 写入JavaScript文件
    fs.writeFileSync(config.outputFile, jsContent, 'utf8');
    
    console.log(`\n✅ 语言切换器已生成: ${config.outputFile}`);
    console.log(`📄 包含 ${stats.multiLanguage} 个多语言页面的映射数据`);
    console.log(`⚡ 用时: ${Date.now() - startTime}ms`);
    console.log(`🕐 生成时间: ${beijingTimeString}`);
    
    const stats_file = fs.statSync(config.outputFile);
    console.log(`📦 文件大小: ${Math.round(stats_file.size / 1024)}KB`);
    
  } catch (error) {
    console.error('❌ 生成失败:', error);
    process.exit(1);
  }
}

// 运行脚本
if (require.main === module) {
  generateJavaScriptFile();
}

module.exports = { generateJavaScriptFile, config };