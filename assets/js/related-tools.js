document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.related[data-slug]');
  if (!container || typeof TOOLS === 'undefined') return;

  var slug = container.getAttribute('data-slug');
  var current = TOOLS.filter(function (t) { return t.slug === slug; })[0];
  if (!current) return;

  var sameCategory = TOOLS.filter(function (t) { return t.category === current.category && t.slug !== slug; });

  var picks = sameCategory.slice(0, 5);
  if (picks.length < 4) {
    var others = TOOLS.filter(function (t) { return t.category !== current.category && t.slug !== slug; });
    picks = picks.concat(others.slice(0, 4 - picks.length));
  }
  if (!picks.length) return;

  var html = '<h2>Related tools</h2><div class="related-links">' + picks.map(function (t) {
    return '<a href="/tools/' + t.slug + '/">' + iconSvg(t.icon) + '<span>' + t.shortName + '</span></a>';
  }).join('') + '</div>';

  container.innerHTML = html;
});
