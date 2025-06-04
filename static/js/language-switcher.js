// 基于预生成映射文件的语言切换器
(function() {
  'use strict';

  const DEBUG = false;
  
  function log(...args) {
    if (DEBUG) {
      console.log('📋 [映射版]', ...args);
    }
  }

  // 语言配置
  const languages = {
    en: { label: 'English', flag: '🇺🇸', prefix: '' },
    cn: { label: '简体中文', flag: '🇨🇳', prefix: '/cn' },
    ja: { label: '日本語', flag: '🇯🇵', prefix: '/ja' },
    es: { label: 'Español', flag: '🇪🇸', prefix: '/es' }
  };

  // 语言映射数据（将从JSON文件加载）
  let languageMapping = null;
  let mappingConfig = null;

  function getCurrentLanguageAndPath() {
    const currentPath = window.location.pathname;
    let detectedLanguage = 'en';
    let basePath = currentPath;
    
    // 移除尾部斜杠进行比较，但保留在basePath中
    const pathForComparison = currentPath.replace(/\/$/, '') || '/';
    
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
    
    // 规范化basePath
    if (!basePath.startsWith('/')) {
      basePath = '/' + basePath;
    }
    
    log('路径解析:', { 
      currentPath, 
      pathForComparison, 
      detectedLanguage, 
      basePath 
    });
    
    return { currentLanguage: detectedLanguage, basePath };
  }

  // 加载语言映射文件
  async function loadLanguageMapping() {
    if (languageMapping !== null) {
      return languageMapping;
    }
    
    try {
      log('加载语言映射文件...');
      const response = await fetch('/js/language-map.json', {
        cache: 'force-cache'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      languageMapping = data.languageMapping || {};
      mappingConfig = data.config || {};
      
      log('✅ 映射文件加载成功');
      log(`📊 包含 ${Object.keys(languageMapping).length} 个多语言页面`);
      log('📅 生成时间:', data.generatedAt);
      
      return languageMapping;
      
    } catch (error) {
      log('❌ 加载映射文件失败:', error.message);
      log('🔄 使用空映射，所有页面都将显示为单语言');
      languageMapping = {};
      return languageMapping;
    }
  }

  // 根据映射查找可用语言
  function findAvailableLanguages(basePath, currentLanguage) {
    if (!languageMapping) {
      return [currentLanguage];
    }
    
    // 尝试多种路径格式匹配
    const pathsToTry = [
      basePath,
      basePath.replace(/\/$/, ''), // 移除尾部斜杠
      basePath + (basePath.endsWith('/') ? '' : '/'), // 添加尾部斜杠
    ];
    
    for (const tryPath of pathsToTry) {
      if (languageMapping[tryPath]) {
        const availableLanguages = languageMapping[tryPath];
        log(`✅ 找到映射 ${tryPath}:`, availableLanguages);
        return availableLanguages;
      }
    }
    
    log(`ℹ️  未找到映射 ${basePath}，使用单语言`);
    return [currentLanguage];
  }

  function createLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) {
      log('只有一种语言，不创建切换器');
      return null;
    }

    const currentLangConfig = languages[currentLanguage];
    
    // 排序：当前语言在前，其他按优先级
    const priority = { en: 0, cn: 1, ja: 2, es: 3 };
    const sortedLanguages = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });
    
    const switcherHTML = `
      <div class="navbar__item dropdown dropdown--hoverable mapping-language-switcher"
           title="基于文件映射 - ${availableLanguages.length} 种语言">
        <button class="navbar__link" aria-haspopup="true" aria-expanded="false" role="button">
          <span class="lang-flag">${currentLangConfig.flag}</span>
          <span class="lang-label">${currentLangConfig.label}</span>
          <svg width="8" height="8" class="lang-arrow" aria-hidden="true">
            <path d="M1 2l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"></path>
          </svg>
        </button>
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
    
    return switcherHTML;
  }

  async function injectLanguageSwitcher() {
    const navbar = document.querySelector('.navbar__items--right');
    if (!navbar) {
      setTimeout(injectLanguageSwitcher, 200);
      return;
    }

    if (document.querySelector('.mapping-language-switcher')) {
      return;
    }

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    
    try {
      // 加载映射文件
      await loadLanguageMapping();
      
      // 查找可用语言
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      
      // 创建切换器
      const switcherHTML = createLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      
      if (switcherHTML) {
        // 寻找Bazaar链接的多种方法
        let bazaarLink = null;
        
        // 方法1：通过URL查找
        bazaarLink = navbar.querySelector('a[href*="seeedstudio.com"]');
        
        // 方法2：如果没找到，通过文本内容查找
        if (!bazaarLink) {
          const allLinks = navbar.querySelectorAll('a');
          for (const link of allLinks) {
            if (link.textContent.toLowerCase().includes('bazaar')) {
              bazaarLink = link;
              break;
            }
          }
        }
        
        // 方法3：备用 - GitHub链接
        const githubLink = navbar.querySelector('.header-github-link');
        
        // 插入到合适位置
        if (bazaarLink) {
          bazaarLink.insertAdjacentHTML('beforebegin', switcherHTML);
          log('✅ 插入到Bazaar链接左侧');
        } else if (githubLink) {
          githubLink.insertAdjacentHTML('beforebegin', switcherHTML);
          log('✅ 插入到GitHub链接左侧（备用位置）');
        } else {
          navbar.insertAdjacentHTML('beforeend', switcherHTML);
          log('✅ 插入到导航栏末尾（默认位置）');
        }
        log(`✅ 语言切换器创建成功`);
        log(`🌐 可用语言: ${availableLanguages.join(', ')}`);
      } else {
        log('⚪ 单语言页面，无需切换器');
      }
    } catch (error) {
      log('❌ 创建切换器失败:', error);
    }
  }

  function injectStyles() {
    if (document.querySelector('#mapping-language-switcher-styles')) return;
    
    const styles = `
      <style id="mapping-language-switcher-styles">
        .mapping-language-switcher .lang-flag {
          margin-right: 6px;
        }
        
        .mapping-language-switcher .lang-label {
          margin-right: 4px;
        }
        
        .mapping-language-switcher .lang-check {
          margin-left: auto;
          color: var(--ifm-color-primary);
          font-weight: bold;
        }
        
        .mapping-language-switcher .dropdown__link {
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        
        .mapping-language-switcher .dropdown__link--active {
          background: var(--ifm-color-primary-lightest);
          color: var(--ifm-color-primary);
        }
        
        .mapping-language-switcher .dropdown__link:hover {
          background: var(--ifm-color-emphasis-100);
        }
        
        .lang-arrow {
          margin-left: 4px;
          transition: transform 0.2s ease;
        }
        
        .dropdown--show .lang-arrow {
          transform: rotate(180deg);
        }
        
        @media (max-width: 768px) {
          .mapping-language-switcher .lang-label {
            display: none;
          }
          
          .mapping-language-switcher .navbar__link {
            padding: 8px;
          }
        }
      </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
  }

  function init() {
    log('🚀 初始化基于映射的语言切换器...');
    injectStyles();
    injectLanguageSwitcher();
  }

  function observeRouteChanges() {
    let currentUrl = location.href;
    
    new MutationObserver(() => {
      if (location.href !== currentUrl) {
        log('🔄 路由变化:', currentUrl, '->', location.href);
        currentUrl = location.href;
        
        // 移除旧切换器
        const oldSwitcher = document.querySelector('.mapping-language-switcher');
        if (oldSwitcher) {
          oldSwitcher.remove();
        }
        
        // 重新注入
        setTimeout(injectLanguageSwitcher, 100);
      }
    }).observe(document, { subtree: true, childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  observeRouteChanges();

})();