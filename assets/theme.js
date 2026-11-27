// Light / dark toggle. Follows the OS by default; remembers a manual choice.
(function () {
  var root = document.documentElement;
  var KEY = "theme";
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function apply() {
    var choice = stored();
    if (choice) root.setAttribute("data-theme", choice);
    else root.removeAttribute("data-theme");
    root.setAttribute("data-theme-resolved", choice || (mq.matches ? "dark" : "light"));
  }

  apply();
  if (mq.addEventListener) mq.addEventListener("change", apply);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme-resolved") === "dark" ? "light" : "dark";
      save(next);
      apply();
    });
  });
})();
