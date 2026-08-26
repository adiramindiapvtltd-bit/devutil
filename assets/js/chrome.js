(function () {
  function groupTools(list) {
    return CATEGORY_ORDER.map(function (cat) {
      return { category: cat, tools: list.filter(function (t) { return t.category === cat; }) };
    }).filter(function (g) { return g.tools.length > 0; });
  }

  function navGroupsHtml() {
    return groupTools(TOOLS).map(function (g) {
      var links = g.tools.map(function (t) {
        return '<a href="/tools/' + t.slug + '/">' + iconSvg(t.icon) + t.name + '</a>';
      }).join('');
      return '<div class="nav-group" data-cat="' + g.category + '"><h3>' + CATEGORY_LABEL[g.category] + '</h3>' + links + '</div>';
    }).join('');
  }

  function headerHtml() {
    return '' +
      '<div class="wrap">' +
      '  <a class="logo" href="/">' +
      '    <span class="logo-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/></svg></span>' +
      '    <span class="logo-text">Dev<span>Util</span></span>' +
      '  </a>' +
      '  <button class="nav-switch" id="navtoggle" type="button" aria-expanded="false" aria-controls="navpanel">' +
      '    <span class="nav-switch-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/></svg></span>' +
      '    <span class="nav-switch-text">All tools</span>' +
      '    <span class="nav-switch-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></span>' +
      '  </button>' +
      '  <button class="theme-toggle" id="themetoggle" type="button" aria-label="Switch theme">' +
      '    <svg class="i-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>' +
      '    <svg class="i-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>' +
      '  </button>' +
      '</div>' +
      '<div class="nav-panel" id="navpanel" hidden>' +
      '  <div class="nav-sheet"><div class="nav-cats">' + navGroupsHtml() + '</div></div>' +
      '</div>';
  }

  function footerHtml() {
    return '' +
      '<div class="wrap">' +
      '  <div class="foot-line">' +
      '    <span>&copy; 2026 DevUtil</span>' +
      '    <a href="/about.html">About</a>' +
      '    <a href="/privacy.html">Privacy</a>' +
      '    <a href="/terms.html">Terms</a>' +
      '    <a href="/contact.html">Contact</a>' +
      '  </div>' +
      '</div>';
  }

  var headerEl = document.getElementById('site-header');
  if (headerEl) { headerEl.className = 'site-header'; headerEl.innerHTML = headerHtml(); }
  var footerEl = document.getElementById('site-footer');
  if (footerEl) { footerEl.className = 'site-footer'; footerEl.innerHTML = footerHtml(); }

  var themeBtn = document.getElementById('themetoggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('devutil.theme', next); } catch (e) {}
    });
  }

  var navToggle = document.getElementById('navtoggle');
  var navPanel = document.getElementById('navpanel');
  if (navToggle && navPanel) {
    function closeNav() { navPanel.hidden = true; navToggle.setAttribute('aria-expanded', 'false'); }
    function openNav() { navPanel.hidden = false; navToggle.setAttribute('aria-expanded', 'true'); }
    navToggle.addEventListener('click', function () { navPanel.hidden ? openNav() : closeNav(); });
    document.addEventListener('click', function (e) {
      if (!navPanel.hidden && !navPanel.contains(e.target) && e.target !== navToggle && !navToggle.contains(e.target)) closeNav();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !navPanel.hidden) closeNav(); });
  }

  // Line-number gutters for textareas (skips short single-line fields via data-plain,
  // and skips textareas already managed by a page's own custom editor via .editor)
  var areas = document.querySelectorAll('textarea:not([data-plain])');
  for (var ai = 0; ai < areas.length; ai++) {
    (function (ta) {
      if (ta.classList.contains('editor-textarea') || ta.closest('.ta-wrap')) return;
      var wrap = document.createElement('div');
      wrap.className = 'ta-wrap';
      var gutter = document.createElement('div');
      gutter.className = 'ta-gutter';
      gutter.textContent = '1';
      ta.parentNode.insertBefore(wrap, ta);
      wrap.appendChild(gutter);
      wrap.appendChild(ta);
      ta.classList.add('ta-textarea');
      ta.setAttribute('wrap', 'off');
      if (!ta.hasAttribute('spellcheck')) ta.setAttribute('spellcheck', 'false');
      function update() {
        var lines = ta.value.split('\n').length;
        var nums = '';
        for (var i = 1; i <= lines; i++) nums += i + (i < lines ? '\n' : '');
        if (gutter.textContent !== nums) gutter.textContent = nums;
        gutter.scrollTop = ta.scrollTop;
      }
      ta.addEventListener('input', update);
      ta.addEventListener('scroll', update);
      update();
    })(areas[ai]);
  }

  // Homepage card rendering
  var catsEl = document.getElementById('tool-cats');
  if (catsEl) {
    function cardHtml(t) {
      return '<a class="tool-card" href="/tools/' + t.slug + '/" data-cat="' + t.category + '" data-name="' + (t.name + ' ' + t.description).toLowerCase() + '">' +
        '<span class="ico">' + iconSvg(t.icon) + '</span>' +
        '<svg class="go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><polyline points="12 5 19 12 12 19"/></svg>' +
        '<span class="t">' + t.name + '</span>' +
        '<span class="d">' + t.description + '</span>' +
        '</a>';
    }
    function renderCats(list) {
      var groups = groupTools(list);
      catsEl.innerHTML = groups.map(function (g) {
        return '<section class="cat" data-cat="' + g.category + '">' +
          '<div class="cat-head" data-cat="' + g.category + '"><h2>' + CATEGORY_LABEL[g.category] + '</h2><span>' + CATEGORY_TAGLINE[g.category] + '</span></div>' +
          '<div class="cards">' + g.tools.map(cardHtml).join('') + '</div>' +
          '</section>';
      }).join('');
      var noResults = document.getElementById('noresults');
      if (noResults) noResults.hidden = list.length > 0;
    }
    window.renderToolCats = renderCats;
    renderCats(TOOLS);
  }
})();
