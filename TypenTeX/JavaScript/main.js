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

// 版本号直连 GitHub Releases：多级数据源，不依赖页面静态文本。
// 按可靠性排序，前一个失败（限流 / 网络异常）自动尝试下一个；
// 全部失败时保留 HTML 中随发布更新的版本文本。
// GitHub Release 一发布，本站版本号即自动跟随。
(function () {
  'use strict';

  var links = document.querySelectorAll('a.ver-link');
  if (!links.length) return;

  function normalize(tag) {
    if (!tag) return null;
    tag = String(tag).trim();
    if (!tag) return null;
    if (!/^v/i.test(tag)) tag = 'v' + tag;
    return tag;
  }

  var SOURCES = [
    // 1) GitHub 官方 API（匿名每小时 60 次/IP，超限返回 403）
    function () {
      return fetch(
        'https://api.github.com/repos/Both-Edward/TypenTeX/releases/latest',
        { headers: { 'Accept': 'application/vnd.github+json' } }
      ).then(function (res) {
        if (!res.ok) throw new Error('http ' + res.status);
        return res.json().then(function (d) { return d.tag_name; });
      });
    },
    // 2) jsDelivr 数据 API（不受 GitHub 限流，CORS 开放，
    //    versions 列表最新在前，内容来自仓库的 Release tag）
    function () {
      return fetch(
        'https://data.jsdelivr.com/v1/packages/gh/Both-Edward/TypenTeX'
      ).then(function (res) {
        if (!res.ok) throw new Error('http ' + res.status);
        return res.json().then(function (d) {
          return d && d.versions && d.versions[0] && d.versions[0].version;
        });
      });
    },
    // 3) CORS 代理转发 GitHub 官方 API（前两条线路都不可用时）
    function () {
      return fetch(
        'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(
          'https://api.github.com/repos/Both-Edward/TypenTeX/releases/latest'
        )
      ).then(function (res) {
        if (!res.ok) throw new Error('http ' + res.status);
        return res.json().then(function (d) { return d.tag_name; });
      });
    }
  ];

  var i = 0;
  (function attempt() {
    if (i >= SOURCES.length) return; // 全部失败：保留 HTML 中的版本文本
    SOURCES[i++]().then(function (tag) {
      tag = normalize(tag);
      if (!tag) throw new Error('empty tag');
      links.forEach(function (el) { el.textContent = tag; });
    }).catch(attempt);
  })();
})();
