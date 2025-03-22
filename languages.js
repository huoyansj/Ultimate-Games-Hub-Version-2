/**
 * 多语言支持文件
 * 支持中文、英文、法语、西班牙语
 */

// 多语言翻译
const translations = {
    // 中文翻译
    zh: {
        // 导航
        home: "首页",
        randomizer: "随机游戏",
        categories: "游戏分类",
        search: "搜索",
        
        // 分类
        actionAdventure: "动作冒险",
        puzzleGames: "益智解谜",
        arcadeGames: "经典街机",
        casualGames: "休闲游戏",
        skillGames: "技巧游戏",
        
        // 其他
        allGames: "所有游戏",
        searchGames: "搜索游戏...",
        searchButton: "搜索",
        
        // 随机游戏页面
        randomizerTitle: "随机游戏",
        randomizerDesc: "无法决定玩什么？让我们帮你选择一个随机游戏！",
        randomGameDefault: "点击下方按钮获取随机游戏",
        randomizerButton: "随机选择",
        previewTitle: "游戏预览",
        previewDesc: "加载游戏描述中...",
        playButton: "开始游戏"
    },
    
    // 英文翻译
    en: {
        // 导航
        home: "Home",
        randomizer: "Random Game",
        categories: "Game Categories",
        search: "Search",
        
        // 分类
        actionAdventure: "Action Adventure",
        puzzleGames: "Puzzle Games",
        arcadeGames: "Classic Arcade",
        casualGames: "Casual Games",
        skillGames: "Skill Games",
        
        // 其他
        allGames: "All Games",
        searchGames: "Search games...",
        searchButton: "Search",
        
        // 随机游戏页面
        randomizerTitle: "Random Game",
        randomizerDesc: "Can't decide what to play? Let us pick a random game for you!",
        randomGameDefault: "Click the button below to get a random game",
        randomizerButton: "Pick Random",
        previewTitle: "Game Preview",
        previewDesc: "Loading game description...",
        playButton: "Play Now"
    },
    
    // 法语翻译
    fr: {
        // 导航
        home: "Accueil",
        randomizer: "Jeu Aléatoire",
        categories: "Catégories de Jeux",
        search: "Rechercher",
        
        // 分类
        actionAdventure: "Action Aventure",
        puzzleGames: "Jeux de Réflexion",
        arcadeGames: "Arcade Classique",
        casualGames: "Jeux Occasionnels",
        skillGames: "Jeux d'Adresse",
        
        // 其他
        allGames: "Tous les Jeux",
        searchGames: "Rechercher des jeux...",
        searchButton: "Rechercher",
        
        // 随机游戏页面
        randomizerTitle: "Jeu Aléatoire",
        randomizerDesc: "Vous ne savez pas à quoi jouer ? Laissez-nous choisir un jeu aléatoire pour vous !",
        randomGameDefault: "Cliquez sur le bouton ci-dessous pour obtenir un jeu aléatoire",
        randomizerButton: "Sélection Aléatoire",
        previewTitle: "Aperçu du Jeu",
        previewDesc: "Chargement de la description du jeu...",
        playButton: "Jouer Maintenant"
    },
    
    // 西班牙语翻译
    es: {
        // 导航
        home: "Inicio",
        randomizer: "Juego Aleatorio",
        categories: "Categorías de Juegos",
        search: "Buscar",
        
        // 分类
        actionAdventure: "Acción y Aventura",
        puzzleGames: "Juegos de Puzzle",
        arcadeGames: "Arcade Clásico",
        casualGames: "Juegos Casuales",
        skillGames: "Juegos de Habilidad",
        
        // 其他
        allGames: "Todos los Juegos",
        searchGames: "Buscar juegos...",
        searchButton: "Buscar",
        
        // 随机游戏页面
        randomizerTitle: "Juego Aleatorio",
        randomizerDesc: "¿No puedes decidir a qué jugar? ¡Déjanos elegir un juego aleatorio para ti!",
        randomGameDefault: "Haz clic en el botón de abajo para obtener un juego aleatorio",
        randomizerButton: "Elegir Aleatorio",
        previewTitle: "Vista Previa del Juego",
        previewDesc: "Cargando descripción del juego...",
        playButton: "Jugar Ahora"
    }
};

// 需要翻译的元素
const translatableElements = [
    { selector: '.nav-links li:nth-child(1) a span', key: 'home' },
    { selector: '.nav-links li:nth-child(2) a span', key: 'randomizer' },
    { selector: '.nav-category .category-header span', key: 'categories' },
    { selector: '.category-links li:nth-child(1) a span', key: 'actionAdventure' },
    { selector: '.category-links li:nth-child(2) a span', key: 'puzzleGames' },
    { selector: '.category-links li:nth-child(3) a span', key: 'arcadeGames' },
    { selector: '.category-links li:nth-child(4) a span', key: 'casualGames' },
    { selector: '.category-links li:nth-child(5) a span', key: 'skillGames' },
    { selector: '.game-section h2', key: 'allGames' },
    { selector: '#action-games', key: 'actionAdventure' },
    { selector: '#puzzle-games', key: 'puzzleGames' },
    { selector: '#arcade-games', key: 'arcadeGames' },
    { selector: '#casual-games', key: 'casualGames' },
    { selector: '#skill-games', key: 'skillGames' },
    { selector: '.search-bar input', key: 'searchGames', attribute: 'placeholder' },
    { selector: '.bottom-nav-item:nth-child(1) span', key: 'home' },
    { selector: '.bottom-nav-item:nth-child(2) span', key: 'randomizer' },
    { selector: '.bottom-nav-item:nth-child(3) span', key: 'search' },
    
    // 随机游戏页面元素
    { selector: '#randomizer-title', key: 'randomizerTitle' },
    { selector: '#randomizer-desc', key: 'randomizerDesc' },
    { selector: '#random-game', key: 'randomGameDefault' },
    { selector: '#randomizer-btn', key: 'randomizerButton' },
    { selector: '#preview-title', key: 'previewTitle' },
    { selector: '#preview-desc', key: 'previewDesc' },
    { selector: '#play-btn', key: 'playButton' }
];

// 获取浏览器的默认语言
function getBrowserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    // 简化语言代码（如 'zh-CN' -> 'zh'）
    const langCode = language.split('-')[0];
    
    // 检查是否支持该语言，如果不支持则默认为英文
    return translations[langCode] ? langCode : 'en';
}

// 应用翻译
function applyTranslation(lang) {
    // 如果没有指定语言或该语言不存在，使用浏览器默认语言
    if (!lang || !translations[lang]) {
        lang = getBrowserLanguage();
    }
    
    // 更新激活的语言按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 应用翻译
    translatableElements.forEach(element => {
        const elements = document.querySelectorAll(element.selector);
        if (elements.length > 0) {
            elements.forEach(el => {
                if (element.attribute) {
                    el.setAttribute(element.attribute, translations[lang][element.key]);
                } else {
                    el.textContent = translations[lang][element.key];
                }
            });
        }
    });
    
    // 保存当前语言到本地存储
    localStorage.setItem('gameHubLanguage', lang);
    
    // 设置 HTML 语言属性
    document.documentElement.setAttribute('lang', lang);
}

// 初始化语言
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否有保存的语言设置
    const savedLanguage = localStorage.getItem('gameHubLanguage');
    
    // 应用之前保存的语言或浏览器默认语言
    applyTranslation(savedLanguage || getBrowserLanguage());
    
    // 添加语言切换事件
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            applyTranslation(lang);
        });
    });
}); 