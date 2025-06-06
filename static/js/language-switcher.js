// 专门解决页面切换显示问题的版本
(function() {
  'use strict';

  const DEBUG = false; // 如果有问题，改为true查看详细日志
  
  function log(...args) {
    if (DEBUG) {
      console.log('🔄 [页面切换优化版]', new Date().toISOString().slice(11, 23), ...args);
    }
  }

  // 语言配置
  const languages = {
    en: { label: 'English', flag: '🇺🇸', prefix: '' },
    cn: { label: '简体中文', flag: '🇨🇳', prefix: '/cn' },
    ja: { label: '日本語', flag: '🇯🇵', prefix: '/ja' },
    es: { label: 'Español', flag: '🇪🇸', prefix: '/es' }
  };

  // 全局状态
  let languageMapping = null;
  let isInitialized = false;
  let retryCount = 0;
  const MAX_RETRIES = 10;
  const RETRY_INTERVAL = 200; // 200ms间隔重试

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
    
    log('路径解析:', { currentPath, detectedLanguage, basePath });
    return { currentLanguage: detectedLanguage, basePath };
  }

  // 简化的映射文件加载 - 移除缓存，专注速度
  async function loadLanguageMapping() {
    if (languageMapping !== null) {
      log('✅ 使用已加载的映射');
      return languageMapping;
    }
    
    const startTime = Date.now();
    try {
      log('📡 开始加载映射文件...');
      
      // 添加超时控制
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5秒超时
      
      const response = await fetch('/js/language-map.json', {
        cache: 'force-cache', // 使用浏览器缓存加速
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      languageMapping = data.languageMapping || {};
      
      const loadTime = Date.now() - startTime;
      log(`✅ 映射文件加载成功 (${loadTime}ms)`);
      log(`📊 包含 ${Object.keys(languageMapping).length} 个多语言页面`);
      
      return languageMapping;
      
    } catch (error) {
      const loadTime = Date.now() - startTime;
      log(`❌ 映射文件加载失败 (${loadTime}ms):`, error.message);
      
      // 加载失败时使用空映射，确保功能不完全中断
      languageMapping = {};
      return languageMapping;
    }
  }

  function findAvailableLanguages(basePath, currentLanguage) {
    if (!languageMapping) {
      return [currentLanguage];
    }
    
    const pathsToTry = [
      basePath,
      basePath.replace(/\/$/, ''),
      basePath + (basePath.endsWith('/') ? '' : '/'),
    ];
    
    for (const tryPath of pathsToTry) {
      if (languageMapping[tryPath]) {
        const availableLanguages = languageMapping[tryPath];
        log(`🌐 找到多语言页面 ${tryPath}:`, availableLanguages);
        return availableLanguages;
      }
    }
    
    log(`ℹ️ 单语言页面: ${basePath}`);
    return [currentLanguage];
  }

  function createLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) {
      log('⚪ 单语言，跳过切换器');
      return null;
    }

    const currentLangConfig = languages[currentLanguage];
    const priority = { en: 0, cn: 1, ja: 2, es: 3 };
    const sortedLanguages = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });
    
    const switcherHTML = `
      <div class="navbar__item dropdown dropdown--hoverable navbar-language-switcher navbar_dorp_items">
        <a href="#" class="navbar__link" aria-haspopup="true" aria-expanded="false" role="button">
          <span class="lang-flag">${currentLangConfig.flag}</span>
          <span class="lang-label">${currentLangConfig.label}</span>
          <svg width="8" height="8" class="lang-arrow" aria-hidden="true">
            <path d="M1 2l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"></path>
          </svg>
        </a>
        <ul class="dropdown__menu">
          ${sortedLanguages.map(langCode => {
            const lang = languages[langCode];
            const langPath = lang.prefix + basePath;
            const isActive = langCode === currentLanguage;
            
            return `
              <li>
                <a class="dropdown__link ${isActive ? 'dropdown__link--active' : ''}" 
                   href="${langPath}"
                   title="切换到 ${lang.label}"
                   ${isActive ? 'aria-current="page"' : ''}>
                  <span class="lang-flag">${lang.flag}</span>
                  <span class="lang-label">${lang.label}</span>
                  ${isActive ? '<span class="lang-check">✓</span>' : ''}
                </a>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    `;
    
    log('🎨 创建切换器HTML');
    return switcherHTML;
  }

  // 核心改进：更可靠的DOM检测和插入
  async function injectLanguageSwitcher() {
    const startTime = Date.now();
    log(`🔧 开始注入切换器... (尝试 ${retryCount + 1}/${MAX_RETRIES})`);
    
    // 多种方式查找导航栏
    let navbar = document.querySelector('.navbar__items--right') || 
                 document.querySelector('.navbar__items') ||
                 document.querySelector('.navbar');
    
    if (!navbar) {
      log('⏳ 导航栏未找到');
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(injectLanguageSwitcher, RETRY_INTERVAL);
        return;
      } else {
        log('❌ 达到最大重试次数，放弃注入');
        return;
      }
    }

    // 检查是否已存在
    if (document.querySelector('.navbar-language-switcher')) {
      log('⚠️ 切换器已存在，跳过');
      return;
    }

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    
    try {
      // 确保映射已加载
      await loadLanguageMapping();
      
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      const switcherHTML = createLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      
      if (switcherHTML) {
        // 寻找插入位置
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
        
        // 插入HTML
        if (insertPosition) {
          insertPosition.insertAdjacentHTML('beforebegin', switcherHTML);
          log(`✅ 插入到 ${insertPosition.tagName} 前面`);
        } else {
          navbar.insertAdjacentHTML('beforeend', switcherHTML);
          log('✅ 插入到导航栏末尾');
        }
        
        // 防止默认链接行为
        const switcherButton = navbar.querySelector('.navbar-language-switcher .navbar__link');
        if (switcherButton) {
          switcherButton.addEventListener('click', (e) => {
            e.preventDefault();
          });
        }
        
        const injectTime = Date.now() - startTime;
        log(`🎉 切换器注入成功! (${injectTime}ms)`);
        log(`🌐 支持语言: ${availableLanguages.join(', ')}`);
        
        // 重置重试计数
        retryCount = 0;
        
      } else {
        log('⚪ 单语言页面，无需切换器');
      }
    } catch (error) {
      log('❌ 注入失败:', error);
      
      // 失败时重试
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(injectLanguageSwitcher, RETRY_INTERVAL);
      }
    }
  }

  // 增强的路由变化检测
  function observeRouteChanges() {
    let currentUrl = location.href;
    let lastPathname = location.pathname;
    
    function handleRouteChange(source) {
      if (location.href !== currentUrl || location.pathname !== lastPathname) {
        log(`🔄 路由变化 [${source}]:`, lastPathname, '->', location.pathname);
        currentUrl = location.href;
        lastPathname = location.pathname;
        
        // 移除旧切换器
        const oldSwitcher = document.querySelector('.navbar-language-switcher');
        if (oldSwitcher) {
          oldSwitcher.remove();
          log('🗑️ 移除旧切换器');
        }
        
        // 重置重试计数
        retryCount = 0;
        
        // 立即重新注入
        setTimeout(injectLanguageSwitcher, 10); // 很短的延迟
      }
    }

    // 方法1：History API监听
    window.addEventListener('popstate', () => handleRouteChange('popstate'));
    
    // 方法2：拦截pushState和replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      setTimeout(() => handleRouteChange('pushState'), 0);
    };
    
    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      setTimeout(() => handleRouteChange('replaceState'), 0);
    };
    
    // 方法3：MutationObserver作为备份
    new MutationObserver(() => {
      handleRouteChange('mutation');
    }).observe(document.body, { 
      subtree: true, 
      childList: true,
      attributes: true,
      attributeFilter: ['data-current-path', 'data-rh'] 
    });
    
    // 方法4：定时检查作为最后备份 (仅在DEBUG模式下)
    if (DEBUG) {
      setInterval(() => {
        if (location.href !== currentUrl) {
          handleRouteChange('interval');
        }
      }, 1000);
    }
  }

  // 主初始化函数
  function init() {
    if (isInitialized) {
      log('⚠️ 已初始化，跳过');
      return;
    }
    
    log('🚀 初始化语言切换器...');
    isInitialized = true;
    
    // 立即开始加载映射文件（异步）
    loadLanguageMapping();
    
    // 启动路由监听
    observeRouteChanges();
    
    // 立即尝试注入
    injectLanguageSwitcher();
  }

  // 多重初始化时机 - 确保在各种情况下都能正常工作
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM已准备好，立即初始化
    setTimeout(init, 0);
  }
  
  // 备用初始化 - 防止某些情况下错过初始化
  setTimeout(() => {
    if (!isInitialized) {
      log('🔄 备用初始化触发');
      init();
    }
  }, 1000);

})();