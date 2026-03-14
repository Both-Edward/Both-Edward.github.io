/* ═══════════════════════════════════════════════
   Cutepetit — main.js
   • Star field
   • Scroll reveal
   • GitHub latest release
   • i18n language switcher (data fully inlined — no fetch needed)
═══════════════════════════════════════════════ */

/* ── 1. Star field ── */
(function () {
  const field = document.getElementById('stars');
  if (!field) return;
  const count = window.innerWidth < 640 ? 55 : 110;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 2.4 + 0.5;
    s.style.cssText = [
      `width:${sz}px`,
      `height:${sz}px`,
      `left:${Math.random() * 100}%`,
      `top:${Math.random() * 100}%`,
      `--d:${(Math.random() * 4 + 2).toFixed(1)}s`,
      `--dl:-${(Math.random() * 6).toFixed(1)}s`,
      `--op:${(Math.random() * 0.6 + 0.2).toFixed(2)}`
    ].join(';');
    field.appendChild(s);
  }
})();

/* ── 2. Scroll reveal ── */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

/* ── 3. Inlined language bundles ── */
const LANG_BUNDLES = {
  "en": {
    "lang": "en",
    "htmlLang": "en",
    "nav_features": "Features",
    "nav_install": "Installation",
    "nav_download": "Download",
    "hero_badge": "Desktop Pet Application",
    "hero_title": "Cutepetit",
    "hero_subtitle": "Your cutest anime companion on the desktop 🍯",
    "hero_desc": "Bring an adorable anime character to life on your desktop!<br>Animated Pet · Mouse Follow · Built-in Music Player · Highly Customizable",
    "hero_dl_btn": "Download Now",
    "hero_src_btn": "View Project",
    "hero_version_loading": "Fetching latest version…",
    "divider": "",
    "feat_tag": "✨ Features",
    "feat_title": "Your desktop, more delightful with it",
    "feat_lead": "Cutepetit brings cute anime characters to your desktop, keeping you company while you work, study, or just relax.",
    "feat_1_name": "Animated Pet Sprite",
    "feat_1_desc": "Supports multi-frame GIF animations. Your pet walks and idles on screen — full of life.",
    "feat_2_name": "Mouse Follow Mode",
    "feat_2_desc": "Enable it and your pet locks onto your cursor, never leaving your side.",
    "feat_3_name": "Built-in Music Player",
    "feat_3_desc": "Add local tracks and enjoy music while you pet your companion.",
    "feat_4_name": "Highly Customizable",
    "feat_4_desc": "Adjust size, opacity, and speed. Edit animation weights and flip direction for a truly unique pet.",
    "feat_5_name": "Pet Creation Workshop",
    "feat_5_desc": "Import your own GIF assets with the built-in creator to make a one-of-a-kind sprite.",
    "feat_6_name": "Multi-language Support",
    "feat_6_desc": "Ships with Chinese, English, and more locales — ready to use out of the box.",
    "feat_7_name": "Always on Top",
    "feat_7_desc": "Stays visible above all windows, no matter what app you're using.",
    "feat_8_name": "Launch at Startup",
    "feat_8_desc": "Auto-starts with your system so your pet is always there to greet you.",
    "feat_9_name": "Multi-pet Management",
    "feat_9_desc": "Manage multiple pet characters at once — switch, add, or remove them freely.",
    "feat_10_name": "LM Studio AI Chat",
    "feat_10_desc": "Connect to LM Studio as a local AI proxy — chat with your pet and customize its personality to make it truly yours.",
    "install_tag": "📦 Installation",
    "install_title": "Get started in a few steps",
    "install_lead": "No complex setup required — just download and run.",
    "step_1_title": "Download the latest Release",
    "step_1_desc": "Head to <a href=\"https://github.com/Both-Edward/Cutepetit/releases/latest\" target=\"_blank\" rel=\"noopener\">GitHub Releases</a> and download the latest installer or executable.",
    "step_2_title": "Extract / Run",
    "step_2_desc": "Windows users: double-click the <code>.exe</code> file. If you downloaded an archive, extract it first.",
    "step_3_title": "Configure via Tray Menu",
    "step_3_desc": "After launch the pet appears on your desktop. Right-click it to open the menu and adjust size, speed, pets, and more.",
    "step_4_title": "Enjoy your new desktop buddy!",
    "step_4_desc": "Enable mouse follow, open the music player, or import your own GIF to create a custom character.",
    "dl_title": "✨ Download Now",
    "dl_sub": "Get the latest stable release from GitHub Releases",
    "dl_btn_latest": "Download Latest",
    "dl_btn_history": "All Release History",
    "dl_version_loading": "Fetching version info…",
    "dl_version_fallback": "Get the latest version via GitHub Releases",
    "dl_version_date": "Released on",
    "dl_meta": "Distributed via GitHub Releases · MIT License",
    "foot_feedback": "Feedback",
    "foot_changelog": "Changelog",
    "foot_copy": "Copyright © 2026 Edward. All Rights Reserved. · Open Source on GitHub · はちみーをなめると〜"
  },
  "zh-CN": {
    "lang": "zh-CN",
    "htmlLang": "zh-CN",
    "nav_features": "功能特性",
    "nav_install": "安装指南",
    "nav_download": "立即下载",
    "hero_badge": "桌面宠物应用 · Desktop Pet",
    "hero_title": "Cutepetit",
    "hero_subtitle": "はちみーをなめると〜 🍯",
    "hero_desc": "在桌面上养一只属于你的二次元小可爱！<br>动态宠物 · 跟随鼠标 · 内置音乐播放器 · 高度自定义",
    "hero_dl_btn": "立即下载",
    "hero_src_btn": "查看项目",
    "hero_version_loading": "正在获取最新版本…",
    "feat_tag": "✨ 功能特性",
    "feat_title": "你的桌面，有它更有趣",
    "feat_lead": "Cutepetit 让可爱的二次元角色住进你的电脑桌面，伴你工作、学习、摸鱼。",
    "feat_1_name": "动态宠物精灵",
    "feat_1_desc": "支持多帧 GIF 动画，宠物会自动在屏幕上漫步、待机，栩栩如生。",
    "feat_2_name": "鼠标跟随模式",
    "feat_2_desc": "开启后宠物会锁定追随你的鼠标，寸步不离，互动感满分。",
    "feat_3_name": "内置音乐播放器",
    "feat_3_desc": "自带音乐播放器，添加本地曲目，一边撸猫一边听歌，心情倍好。",
    "feat_4_name": "高度自定义",
    "feat_4_desc": "调整大小、透明度、移动速度，编辑动作权重与翻转方向，打造专属宠物。",
    "feat_5_name": "宠物创建工坊",
    "feat_5_desc": "通过内置创建工具导入自定义 GIF 素材，打造独一无二的原创小精灵。",
    "feat_6_name": "多语言支持",
    "feat_6_desc": "内置中文、英文等多语言界面，开箱即用，全球玩家友好。",
    "feat_7_name": "桌面置顶",
    "feat_7_desc": "始终保持在最前端显示，无论切换什么窗口，小可爱都陪伴在旁。",
    "feat_8_name": "开机自启",
    "feat_8_desc": "支持随系统启动，每次开机小宠物自动出现，无需手动打开。",
    "feat_9_name": "多宠物管理",
    "feat_9_desc": "同时管理多个宠物角色，随时切换、删除或新增，热闹非凡。",
    "feat_10_name": "LM Studio AI 对话",
    "feat_10_desc": "接入 LM Studio 作为本地 AI 代理，与宠物实时对话，还可自定义宠物性格，让小可爱真正属于你。",
    "install_tag": "📦 安装指南",
    "install_title": "几步即可开始",
    "install_lead": "无需复杂配置，下载即用。",
    "step_1_title": "下载最新 Release",
    "step_1_desc": "前往 <a href=\"https://github.com/Both-Edward/Cutepetit/releases/latest\" target=\"_blank\" rel=\"noopener\">GitHub Releases</a> 页面，下载最新版本的安装包或可执行文件。",
    "step_2_title": "解压 / 运行",
    "step_2_desc": "Windows 用户直接双击 <code>.exe</code> 文件运行；如下载压缩包，先解压再启动主程序。",
    "step_3_title": "右键托盘菜单配置",
    "step_3_desc": "程序启动后宠物出现在桌面上，右键点击宠物打开菜单，即可调整大小、速度、切换宠物等。",
    "step_4_title": "享受你的桌面新伙伴！",
    "step_4_desc": "开启鼠标跟随、音乐播放器，或前往创建工具导入自己的 GIF 素材，打造专属角色。",
    "dl_title": "✨ 立即下载",
    "dl_sub": "从 GitHub Releases 获取最新稳定版本",
    "dl_btn_latest": "下载最新版本",
    "dl_btn_history": "所有版本历史",
    "dl_version_loading": "正在获取版本信息…",
    "dl_version_fallback": "通过 GitHub Releases 获取最新版本",
    "dl_version_date": "发布于",
    "dl_meta": "通过 GitHub Releases 分发 · MIT License",
    "foot_feedback": "问题反馈",
    "foot_changelog": "更新日志",
    "foot_copy": "Copyright © 2026 Edward. All Rights Reserved. · Open Source on GitHub · はちみーをなめると〜"
  },
  "zh-TW": {
    "lang": "zh-TW",
    "htmlLang": "zh-TW",
    "nav_features": "功能特色",
    "nav_install": "安裝指南",
    "nav_download": "立即下載",
    "hero_badge": "桌面寵物應用 · Desktop Pet",
    "hero_title": "Cutepetit",
    "hero_subtitle": "はちみーをなめると〜 🍯",
    "hero_desc": "在桌面上養一隻屬於你的二次元小可愛！<br>動態寵物 · 跟隨滑鼠 · 內建音樂播放器 · 高度自訂",
    "hero_dl_btn": "立即下載",
    "hero_src_btn": "查看專案",
    "hero_version_loading": "正在取得最新版本…",
    "feat_tag": "✨ 功能特色",
    "feat_title": "你的桌面，有它更有趣",
    "feat_lead": "Cutepetit 讓可愛的二次元角色住進你的電腦桌面，陪你工作、學習、放鬆。",
    "feat_1_name": "動態寵物精靈",
    "feat_1_desc": "支援多幀 GIF 動畫，寵物會自動在螢幕上漫步、待機，栩栩如生。",
    "feat_2_name": "滑鼠跟隨模式",
    "feat_2_desc": "開啟後寵物會鎖定追隨你的滑鼠，寸步不離，互動感十足。",
    "feat_3_name": "內建音樂播放器",
    "feat_3_desc": "自帶音樂播放器，新增本地曲目，一邊擼貓一邊聽歌，心情倍好。",
    "feat_4_name": "高度自訂",
    "feat_4_desc": "調整大小、透明度、移動速度，編輯動作權重與翻轉方向，打造專屬寵物。",
    "feat_5_name": "寵物創建工坊",
    "feat_5_desc": "透過內建建立工具匯入自訂 GIF 素材，打造獨一無二的原創小精靈。",
    "feat_6_name": "多語言支援",
    "feat_6_desc": "內建繁中、簡中、英文等多語言介面，開箱即用，全球玩家友好。",
    "feat_7_name": "桌面置頂",
    "feat_7_desc": "始終保持在最前端顯示，無論切換什麼視窗，小可愛都陪伴在旁。",
    "feat_8_name": "開機自啟",
    "feat_8_desc": "支援隨系統啟動，每次開機小寵物自動出現，無需手動開啟。",
    "feat_9_name": "多寵物管理",
    "feat_9_desc": "同時管理多個寵物角色，隨時切換、刪除或新增，熱鬧非凡。",
    "feat_10_name": "LM Studio AI 對話",
    "feat_10_desc": "接入 LM Studio 作為本地 AI 代理，與寵物即時對話，還可自訂寵物個性，讓小可愛真正屬於你。",
    "install_tag": "📦 安裝指南",
    "install_title": "幾步即可開始",
    "install_lead": "無需複雜設定，下載即用。",
    "step_1_title": "下載最新 Release",
    "step_1_desc": "前往 <a href=\"https://github.com/Both-Edward/Cutepetit/releases/latest\" target=\"_blank\" rel=\"noopener\">GitHub Releases</a> 頁面，下載最新版本的安裝包或可執行檔。",
    "step_2_title": "解壓縮 / 執行",
    "step_2_desc": "Windows 使用者直接雙擊 <code>.exe</code> 檔案執行；如下載壓縮包，先解壓縮再啟動主程式。",
    "step_3_title": "右鍵系統匣選單設定",
    "step_3_desc": "程式啟動後寵物出現在桌面上，右鍵點擊寵物開啟選單，即可調整大小、速度、切換寵物等。",
    "step_4_title": "享受你的桌面新夥伴！",
    "step_4_desc": "開啟滑鼠跟隨、音樂播放器，或前往建立工具匯入自己的 GIF 素材，打造專屬角色。",
    "dl_title": "✨ 立即下載",
    "dl_sub": "從 GitHub Releases 取得最新穩定版本",
    "dl_btn_latest": "下載最新版本",
    "dl_btn_history": "所有版本歷史",
    "dl_version_loading": "正在取得版本資訊…",
    "dl_version_fallback": "透過 GitHub Releases 取得最新版本",
    "dl_version_date": "發佈於",
    "dl_meta": "透過 GitHub Releases 發布 · MIT License",
    "foot_feedback": "問題回報",
    "foot_changelog": "更新日誌",
    "foot_copy": "Copyright © 2026 Edward. All Rights Reserved. · Open Source on GitHub · はちみーをなめると〜"
  },
  "ja": {
    "lang": "ja",
    "htmlLang": "ja",
    "nav_features": "機能紹介",
    "nav_install": "インストール",
    "nav_download": "ダウンロード",
    "hero_badge": "デスクトップペットアプリ",
    "hero_title": "Cutepetit",
    "hero_subtitle": "はちみーをなめると〜 🍯",
    "hero_desc": "あなたのデスクトップに、可愛いアニメキャラクターを！<br>動くペット · マウス追従 · 音楽プレイヤー内蔵 · 自由にカスタマイズ",
    "hero_dl_btn": "ダウンロード",
    "hero_src_btn": "プロジェクトを見る",
    "hero_version_loading": "最新バージョンを取得中…",
    "feat_tag": "✨ 機能紹介",
    "feat_title": "デスクトップが、もっと楽しくなる",
    "feat_lead": "Cutepetit は、可愛いアニメキャラクターをあなたのデスクトップに住まわせます。作業中も、勉強中も、いつもそばに。",
    "feat_1_name": "アニメーションペット",
    "feat_1_desc": "マルチフレームGIFアニメーション対応。ペットが画面上を歩き回ったり待機したりと、生き生きと動きます。",
    "feat_2_name": "マウス追従モード",
    "feat_2_desc": "オンにするとペットがカーソルを追いかけます。いつでも一緒。",
    "feat_3_name": "内蔵音楽プレイヤー",
    "feat_3_desc": "ローカル楽曲を追加して、ペットと一緒に音楽を楽しみましょう。",
    "feat_4_name": "高度なカスタマイズ",
    "feat_4_desc": "サイズ・不透明度・速度を調整。アニメーションの重みや向きも編集できます。",
    "feat_5_name": "ペット作成ワークショップ",
    "feat_5_desc": "内蔵クリエイターに自分のGIF素材を読み込んで、オリジナルキャラを作成できます。",
    "feat_6_name": "多言語対応",
    "feat_6_desc": "日本語、中国語、英語など複数言語に対応。すぐに使えます。",
    "feat_7_name": "常に最前面",
    "feat_7_desc": "どのウィンドウを開いていても、ペットは常に最前面に表示されます。",
    "feat_8_name": "スタートアップ起動",
    "feat_8_desc": "システム起動時に自動起動。毎回手動で開く必要はありません。",
    "feat_9_name": "複数ペット管理",
    "feat_9_desc": "複数のペットキャラクターを同時に管理。切り替え・追加・削除が自由自在。",
    "feat_10_name": "LM Studio AI チャット",
    "feat_10_desc": "LM Studio をローカルAIプロキシとして接続。ペットとリアルタイムで会話でき、性格のカスタマイズも自在です。",
    "install_tag": "📦 インストール",
    "install_title": "数ステップで始められます",
    "install_lead": "複雑な設定は不要。ダウンロードしてすぐ使えます。",
    "step_1_title": "最新リリースをダウンロード",
    "step_1_desc": "<a href=\"https://github.com/Both-Edward/Cutepetit/releases/latest\" target=\"_blank\" rel=\"noopener\">GitHub Releases</a> ページから最新バージョンのインストーラーまたは実行ファイルをダウンロードしてください。",
    "step_2_title": "展開 / 実行",
    "step_2_desc": "Windowsユーザーは <code>.exe</code> ファイルをダブルクリック。アーカイブの場合は展開してから起動してください。",
    "step_3_title": "トレイメニューで設定",
    "step_3_desc": "起動するとペットがデスクトップに現れます。右クリックでメニューを開き、サイズ・速度・ペットの切り替えなどを設定できます。",
    "step_4_title": "デスクトップの新しい仲間を楽しもう！",
    "step_4_desc": "マウス追従や音楽プレイヤーを有効にしたり、GIF素材を読み込んでオリジナルキャラを作りましょう。",
    "dl_title": "✨ 今すぐダウンロード",
    "dl_sub": "GitHub Releases から最新の安定版を入手",
    "dl_btn_latest": "最新版をダウンロード",
    "dl_btn_history": "全リリース履歴",
    "dl_version_loading": "バージョン情報を取得中…",
    "dl_version_fallback": "GitHub Releases から最新バージョンを入手",
    "dl_version_date": "リリース日：",
    "dl_meta": "GitHub Releases で配布 · MIT License",
    "foot_feedback": "フィードバック",
    "foot_changelog": "更新履歴",
    "foot_copy": "Copyright © 2026 Edward. All Rights Reserved. · Open Source on GitHub · はちみーをなめると〜"
  },
  "fr": {
    "lang": "fr",
    "htmlLang": "fr",
    "nav_features": "Fonctionnalités",
    "nav_install": "Installation",
    "nav_download": "Télécharger",
    "hero_badge": "Application Mascotte de Bureau",
    "hero_title": "Cutepetit",
    "hero_subtitle": "Votre compagnon animé sur le bureau 🍯",
    "hero_desc": "Adoptez un adorable personnage animé sur votre bureau !<br>Mascotte animée · Suivi souris · Lecteur musical intégré · Hautement personnalisable",
    "hero_dl_btn": "Télécharger",
    "hero_src_btn": "Voir le projet",
    "hero_version_loading": "Récupération de la dernière version…",
    "feat_tag": "✨ Fonctionnalités",
    "feat_title": "Votre bureau, encore plus agréable",
    "feat_lead": "Cutepetit fait vivre des personnages anime sur votre bureau pour vous accompagner au travail, en études ou simplement pour vous détendre.",
    "feat_1_name": "Mascotte animée",
    "feat_1_desc": "Supporte les animations GIF multi-images. Votre mascotte se promène et attend sur l'écran.",
    "feat_2_name": "Mode suivi de souris",
    "feat_2_desc": "Activez-le et votre mascotte suit votre curseur partout.",
    "feat_3_name": "Lecteur musical intégré",
    "feat_3_desc": "Ajoutez des pistes locales et profitez de musique en compagnie de votre mascotte.",
    "feat_4_name": "Hautement personnalisable",
    "feat_4_desc": "Ajustez taille, opacité et vitesse. Modifiez les poids d'animation et la direction de retournement.",
    "feat_5_name": "Atelier de création",
    "feat_5_desc": "Importez vos propres GIF avec le créateur intégré pour fabriquer un personnage unique.",
    "feat_6_name": "Support multilingue",
    "feat_6_desc": "Disponible en français, chinois, anglais, japonais et plus encore.",
    "feat_7_name": "Toujours au premier plan",
    "feat_7_desc": "Reste visible par-dessus toutes les fenêtres, peu importe l'application ouverte.",
    "feat_8_name": "Démarrage automatique",
    "feat_8_desc": "Se lance avec le système pour accueillir votre mascotte dès l'ouverture de session.",
    "feat_9_name": "Gestion multi-mascottes",
    "feat_9_desc": "Gérez plusieurs personnages simultanément — changez, ajoutez ou supprimez-les librement.",
    "feat_10_name": "Chat IA LM Studio",
    "feat_10_desc": "Connectez LM Studio comme proxy IA local — discutez avec votre mascotte et personnalisez sa personnalité pour en faire votre unique compagnon.",
    "install_tag": "📦 Installation",
    "install_title": "Prêt en quelques étapes",
    "install_lead": "Aucune configuration complexe — téléchargez et lancez.",
    "step_1_title": "Télécharger le dernier Release",
    "step_1_desc": "Rendez-vous sur <a href=\"https://github.com/Both-Edward/Cutepetit/releases/latest\" target=\"_blank\" rel=\"noopener\">GitHub Releases</a> et téléchargez le dernier installateur ou exécutable.",
    "step_2_title": "Extraire / Lancer",
    "step_2_desc": "Sous Windows, double-cliquez sur le fichier <code>.exe</code>. Si c'est une archive, extrayez-la d'abord.",
    "step_3_title": "Configurer via le menu barre des tâches",
    "step_3_desc": "Au lancement, la mascotte apparaît sur le bureau. Faites un clic droit pour ouvrir le menu et régler taille, vitesse, personnages, etc.",
    "step_4_title": "Profitez de votre nouveau compagnon !",
    "step_4_desc": "Activez le suivi de souris, le lecteur musical, ou importez vos GIF pour créer un personnage original.",
    "dl_title": "✨ Télécharger maintenant",
    "dl_sub": "Obtenez la dernière version stable depuis GitHub Releases",
    "dl_btn_latest": "Télécharger la dernière version",
    "dl_btn_history": "Historique des versions",
    "dl_version_loading": "Récupération des informations de version…",
    "dl_version_fallback": "Obtenez la dernière version via GitHub Releases",
    "dl_version_date": "Publié le",
    "dl_meta": "Distribué via GitHub Releases · Licence MIT",
    "foot_feedback": "Signaler un problème",
    "foot_changelog": "Journal des modifications",
    "foot_copy": "Copyright © 2026 Edward. All Rights Reserved. · Open Source on GitHub · はちみーをなめると〜"
  },
  "ko": {
    "lang": "ko",
    "htmlLang": "ko",
    "nav_features": "기능 소개",
    "nav_install": "설치 가이드",
    "nav_download": "다운로드",
    "hero_badge": "데스크톱 펫 애플리케이션",
    "hero_title": "Cutepetit",
    "hero_subtitle": "당신의 귀여운 애니메이션 동반자 🍯",
    "hero_desc": "나만의 애니메이션 캐릭터를 데스크톱에서 키워보세요!<br>움직이는 펫 · 마우스 추적 · 내장 음악 플레이어 · 자유로운 커스터마이징",
    "hero_dl_btn": "지금 다운로드",
    "hero_src_btn": "프로젝트 보기",
    "hero_version_loading": "최신 버전을 가져오는 중…",
    "feat_tag": "✨ 기능 소개",
    "feat_title": "데스크톱이 더욱 즐거워집니다",
    "feat_lead": "Cutepetit는 귀여운 애니메이션 캐릭터를 당신의 데스크톱에 살게 합니다. 작업 중에도, 공부 중에도 항상 곁에.",
    "feat_1_name": "애니메이션 펫 스프라이트",
    "feat_1_desc": "다중 프레임 GIF 애니메이션을 지원합니다. 펫이 화면에서 걸어 다니고 대기하며 생생하게 움직입니다.",
    "feat_2_name": "마우스 추적 모드",
    "feat_2_desc": "활성화하면 펫이 커서를 따라다닙니다. 언제나 함께.",
    "feat_3_name": "내장 음악 플레이어",
    "feat_3_desc": "로컬 트랙을 추가하고 펫과 함께 음악을 즐겨보세요.",
    "feat_4_name": "자유로운 커스터마이징",
    "feat_4_desc": "크기, 불투명도, 속도를 조정하세요. 애니메이션 가중치와 반전 방향도 편집할 수 있습니다.",
    "feat_5_name": "펫 창작 워크숍",
    "feat_5_desc": "내장 제작 도구에 나만의 GIF 소재를 불러와 독특한 캐릭터를 만들어보세요.",
    "feat_6_name": "다국어 지원",
    "feat_6_desc": "한국어, 중국어, 영어, 일본어 등 다양한 언어를 지원합니다.",
    "feat_7_name": "항상 앞에 표시",
    "feat_7_desc": "어떤 창을 열어도 펫은 항상 최전면에 표시됩니다.",
    "feat_8_name": "시작 시 자동 실행",
    "feat_8_desc": "시스템 시작 시 자동으로 실행되어 펫이 항상 반겨줍니다.",
    "feat_9_name": "다중 펫 관리",
    "feat_9_desc": "여러 펫 캐릭터를 동시에 관리하세요. 자유롭게 전환, 추가, 삭제할 수 있습니다.",
    "feat_10_name": "LM Studio AI 채팅",
    "feat_10_desc": "LM Studio를 로컬 AI 프록시로 연결하여 펫과 실시간 대화를 나누고, 펫의 성격을 자유롭게 커스터마이징해 나만의 동반자를 만들어보세요.",
    "install_tag": "📦 설치 가이드",
    "install_title": "몇 단계로 시작하세요",
    "install_lead": "복잡한 설정 없이 다운로드하고 바로 실행하세요.",
    "step_1_title": "최신 릴리즈 다운로드",
    "step_1_desc": "<a href=\"https://github.com/Both-Edward/Cutepetit/releases/latest\" target=\"_blank\" rel=\"noopener\">GitHub Releases</a> 페이지에서 최신 버전의 설치 파일 또는 실행 파일을 다운로드하세요.",
    "step_2_title": "압축 해제 / 실행",
    "step_2_desc": "Windows 사용자는 <code>.exe</code> 파일을 더블 클릭하여 실행하세요. 압축 파일이라면 먼저 압축을 해제하세요.",
    "step_3_title": "트레이 메뉴로 설정",
    "step_3_desc": "실행 후 펫이 데스크톱에 나타납니다. 오른쪽 클릭으로 메뉴를 열어 크기, 속도, 펫 전환 등을 설정하세요.",
    "step_4_title": "새로운 데스크톱 친구를 즐겨보세요!",
    "step_4_desc": "마우스 추적, 음악 플레이어를 활성화하거나 GIF 소재를 불러와 나만의 캐릭터를 만들어보세요.",
    "dl_title": "✨ 지금 다운로드",
    "dl_sub": "GitHub Releases에서 최신 안정 버전을 받아보세요",
    "dl_btn_latest": "최신 버전 다운로드",
    "dl_btn_history": "전체 릴리즈 기록",
    "dl_version_loading": "버전 정보를 가져오는 중…",
    "dl_version_fallback": "GitHub Releases에서 최신 버전을 받아보세요",
    "dl_version_date": "출시일:",
    "dl_meta": "GitHub Releases를 통해 배포 · MIT License",
    "foot_feedback": "문제 제보",
    "foot_changelog": "변경 로그",
    "foot_copy": "Copyright © 2026 Edward. All Rights Reserved. · Open Source on GitHub · はちみーをなめると〜"
  }
};

const LANGUAGES = [
  { code: 'en',    label: 'English',  flag: '🇬🇧' },
  { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', label: '繁體中文', flag: '🇭🇰' },
  { code: 'ja',    label: '日本語',   flag: '🇯🇵' },
  { code: 'fr',    label: 'Français', flag: '🇫🇷' },
  { code: 'ko',    label: '한국어',   flag: '🇰🇷' },
];

const DEFAULT_LANG    = 'en';
const LANG_STORAGE_KEY = 'hachimi_lang';

/* ── 4. Apply translations to DOM ── */
function applyTranslations(t) {
  if (!t) return;

  document.documentElement.lang = t.htmlLang || t.lang || 'en';

  /* Set all [data-i18n] elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Version loading placeholder (textContent, not innerHTML) */
  const hvtxt = document.getElementById('hvtxt');
  if (hvtxt && t.hero_version_loading) hvtxt.textContent = t.hero_version_loading;

  /* Download version info placeholder */
  const dlvi = document.getElementById('dlvi');
  if (dlvi && t.dl_version_loading) dlvi.textContent = t.dl_version_loading;

  /* Page title */
  document.title = `Cutepetit — ${t.hero_badge || 'Desktop Pet'}`;

  /* Store for GitHub version display */
  window._currentLang = t;

  /* Re-apply release data if already fetched */
  if (window._releaseData) applyReleaseData(window._releaseData, t);
}

/* ── 5. Apply GitHub release data ── */
function applyReleaseData(data, t) {
  t = t || window._currentLang || {};
  const tag  = data.tag_name || '';
  const date = data.published_at
    ? new Date(data.published_at).toLocaleDateString(t.htmlLang || 'en')
    : '';

  const hvtxt = document.getElementById('hvtxt');
  if (hvtxt) hvtxt.textContent = tag || '';

  const dlvi = document.getElementById('dlvi');
  if (dlvi) {
    const dateLabel = t.dl_version_date || 'Released';
    dlvi.innerHTML = `<span class="ltag">${tag || 'Latest'}</span>${date ? ' · ' + dateLabel + ' ' + date : ''}`;
  }

  if (data.assets && data.assets.length) {
    const asset  = data.assets.find(a => a.name.endsWith('.exe')) || data.assets[0];
    const dlMain = document.getElementById('dl-main');
    const heroDl = document.getElementById('hero-dl');
    if (dlMain) dlMain.href = asset.browser_download_url;
    if (heroDl) heroDl.href = asset.browser_download_url;
  }
}

/* ── 6. Fetch GitHub latest release ── */
const REPO = 'Both-Edward/Cutepetit';
(async function fetchLatestRelease() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    window._releaseData = data;
    applyReleaseData(data);
  } catch (err) {
    console.warn('[release] Failed to fetch:', err);
    const t   = window._currentLang || {};
    const dlvi = document.getElementById('dlvi');
    if (dlvi) dlvi.textContent = t.dl_version_fallback || 'Get the latest version via GitHub Releases';
  }
})();

/* ── 7. Language selector UI ── */
function buildLangSelector() {
  const selector = document.getElementById('lang-selector');
  if (!selector) return;
  const btn      = selector.querySelector('.lang-btn');
  const dropdown = selector.querySelector('.lang-dropdown');
  if (!btn || !dropdown) return;

  LANGUAGES.forEach(lang => {
    const opt = document.createElement('button');
    opt.className    = 'lang-option';
    opt.dataset.code = lang.code;
    opt.type         = 'button';
    opt.innerHTML    = `
      <span class="flag">${lang.flag}</span>
      <span>${lang.label}</span>
      <svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>`;
    opt.addEventListener('click', () => switchLanguage(lang.code));
    dropdown.appendChild(opt);
  });

  btn.addEventListener('click', e => {
    e.stopPropagation();
    selector.classList.toggle('open');
  });

  document.addEventListener('click', () => selector.classList.remove('open'));
  dropdown.addEventListener('click', e => e.stopPropagation());
}

function updateSelectorUI(code) {
  const lang = LANGUAGES.find(l => l.code === code);
  if (!lang) return;
  const labelEl = document.querySelector('.lang-btn .lang-label');
  if (labelEl) labelEl.textContent = lang.label;
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.code === code);
  });
}

/* ── 8. Switch language ── */
function switchLanguage(code) {
  const selector = document.getElementById('lang-selector');
  if (selector) selector.classList.remove('open');

  const t = LANG_BUNDLES[code];
  if (!t) { console.warn('[i18n] Unknown language:', code); return; }

  applyTranslations(t);
  updateSelectorUI(code);

  try { localStorage.setItem(LANG_STORAGE_KEY, code); } catch {}
}

/* ── 9. Init ── */
(function init() {
  buildLangSelector();

  let startLang = DEFAULT_LANG;
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && LANG_BUNDLES[stored]) startLang = stored;
  } catch {}

  switchLanguage(startLang);
})();
