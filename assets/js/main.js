/* ═══════════════════════════════════════════════════════════
   李赵赫 · 个人网站 —— 全站共享脚本
   顶部导航 / 当前页高亮 / 飘落季节元素 / 滚动显现 / 证书灯箱
   ═══════════════════════════════════════════════════════════ */
(function(){
  'use strict';

  /* ---- 移动端导航 ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.addEventListener('click', function(e){
      if(e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  /* ---- 当前页高亮（按文件名匹配） ---- */
  var file = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-link').forEach(function(a){
    var href = a.getAttribute('href') || '';
    if(href === file || (file === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });

  /* ---- 飘落季节元素 ---- */
  (function seedFX(){
    var box = document.getElementById('fx-box');
    if(!box) return;
    for(var i=0;i<22;i++){
      var p = document.createElement('span');
      p.className = 'fx';
      var sz = 5 + Math.random()*11;
      p.style.width = sz+'px'; p.style.height = sz+'px';
      p.style.left = (Math.random()*100)+'vw';
      p.style.animationDuration = (9 + Math.random()*11)+'s';
      p.style.animationDelay = (Math.random()*12)+'s';
      p.style.opacity = (0.2 + Math.random()*0.3).toFixed(2);
      box.appendChild(p);
    }
  })();

  /* ---- 滚动显现动画 ---- */
  (function reveal(){
    var els = document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window) || els.length === 0){
      els.forEach(function(el){ el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, {threshold:0.12});
    els.forEach(function(el){ io.observe(el); });
  })();

  /* ---- 证书灯箱（页面上存在 #lightbox 时才启用） ---- */
  var lb = document.getElementById('lightbox');
  var lbImgs = [];
  var lbIdx = 0;
  function collectCerts(){
    lbImgs = [];
    document.querySelectorAll('.cert-img[data-src]').forEach(function(el){
      lbImgs.push({src: el.getAttribute('data-src'), name: el.getAttribute('data-name')||''});
    });
  }
  if(lb){
    document.querySelectorAll('.cert-img[data-src]').forEach(function(el){
      el.addEventListener('click', function(){
        collectCerts();
        lbIdx = lbImgs.findIndex(function(c){ return c.src === el.getAttribute('data-src'); });
        if(lbIdx < 0) lbIdx = 0;
        renderLB();
        lb.classList.add('open');
      });
    });
    var close = lb.querySelector('.lb-close');
    if(close) close.addEventListener('click', function(){ lb.classList.remove('open'); });
    var prev = lb.querySelector('.lb-prev');
    var next = lb.querySelector('.lb-next');
    if(prev) prev.addEventListener('click', function(e){ e.stopPropagation(); lbIdx=(lbIdx+lbImgs.length-1)%lbImgs.length; renderLB(); });
    if(next) next.addEventListener('click', function(e){ e.stopPropagation(); lbIdx=(lbIdx+1)%lbImgs.length; renderLB(); });
    lb.addEventListener('click', function(e){ if(e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', function(e){
      if(!lb.classList.contains('open')) return;
      if(e.key === 'Escape') lb.classList.remove('open');
      else if(e.key === 'ArrowRight'){ lbIdx=(lbIdx+1)%lbImgs.length; renderLB(); }
      else if(e.key === 'ArrowLeft'){ lbIdx=(lbIdx+lbImgs.length-1)%lbImgs.length; renderLB(); }
    });
    function renderLB(){
      var c = lbImgs[lbIdx];
      if(!c) return;
      var img = lb.querySelector('#lbImg');
      var cap = lb.querySelector('#lbCap');
      var cnt = lb.querySelector('#lbCount');
      if(img) img.src = c.src;
      if(cap) cap.textContent = c.name;
      if(cnt) cnt.textContent = (lbIdx+1)+' / '+lbImgs.length;
    }
  }
})();
