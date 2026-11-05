// TypenTeX 官网脚本
// 由 index.html 内联脚本拆出，2026-11-05

// 滚动入场动画：元素进入视口后加 .on，触发 CSS 过渡。
(function () {
  'use strict';

  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  // 不支持 IntersectionObserver 的旧浏览器直接显示，避免内容永远不可见。
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('on'); });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('on');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(function (el) { io.observe(el); });
})();

// 版本号直连 GitHub Releases API：
// 页面上的 .ver-link 静态兜底为 v0.0.1，加载后从 releases/latest
// 拉取最新 tag 并就地更新，发新版后无需再改 HTML。
// API 失败（限流 / 离线 / file:// 打开）时保持静态文本。
(function () {
  'use strict';

  var links = document.querySelectorAll('a.ver-link');
  if (!links.length) return;

  var API = 'https://api.github.com/repos/Both-Edward/TypenTeX/releases/latest';

  fetch(API, { headers: { 'Accept': 'application/vnd.github+json' } })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      var tag = data && data.tag_name;
      if (!tag) return;
      if (tag.charAt(0) !== 'v' && tag.charAt(0) !== 'V') tag = 'v' + tag;
      links.forEach(function (el) { el.textContent = tag; });
    })
    .catch(function () { /* 静态兜底，无需处理 */ });
})();
