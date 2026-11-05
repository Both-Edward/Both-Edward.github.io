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
