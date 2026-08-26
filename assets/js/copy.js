function copyToClipboard(text, btn) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(function () {
    if (!btn) return;
    btn.classList.add("done");
    clearTimeout(btn._doneTimer);
    btn._doneTimer = setTimeout(function () {
      btn.classList.remove("done");
    }, 1400);
  });
}
