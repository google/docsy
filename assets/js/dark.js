/*

Try out dark mode as mentioned in:
https://github.com/google/docsy/issues/331
https://github.com/GoogleContainerTools/skaffold/commit/ccdffd1e27785b203f953dd9b8b8735972ca5d99

*/

// adapted from https://radu-matei.com/blog/dark-mode/
window.onload = function(){
  var toggle = document.getElementById("dark-mode-toggle");
  var darkTheme = document.getElementById("dark-mode-theme");

  // the default theme is light
  var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
  setTheme(savedTheme);

  toggle.addEventListener("click", () => {
    if (toggle.className === "fas fa-moon") {
      setTheme("dark");
    } else if (toggle.className === "fas fa-sun") {
      setTheme("light");
    }
  });

  function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);

    if (mode === "dark") {
      darkTheme.disabled = false;
      toggle.className = "fas fa-sun";
      toggle.title = "Enable Light Mode";
    } else if (mode === "light") {
      darkTheme.disabled = true;
      toggle.className = "fas fa-moon";
      toggle.title = "Enable Dark Mode";
    }
  }
} 