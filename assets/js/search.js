document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('q');
  var clearBtn = document.getElementById('clearq');
  var countEl = document.getElementById('count');
  if (!input || typeof TOOLS === 'undefined') return;

  function run() {
    var q = input.value.trim().toLowerCase();
    clearBtn.hidden = !q;

    var filtered = !q ? TOOLS : TOOLS.filter(function (t) {
      return (t.name + ' ' + t.description + ' ' + t.category).toLowerCase().indexOf(q) !== -1;
    });

    if (window.renderToolCats) window.renderToolCats(filtered);

    if (q) {
      countEl.hidden = false;
      countEl.textContent = filtered.length + (filtered.length === 1 ? ' tool found' : ' tools found');
    } else {
      countEl.hidden = true;
    }
  }

  input.addEventListener('input', run);
  clearBtn.addEventListener('click', function () {
    input.value = '';
    input.focus();
    run();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
  });
});
