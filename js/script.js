const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  //   dark mode
  themeToggleLightIcon.classList.remove("hidden");
} else {
  //   light mode
  themeToggleDarkIcon.classList.remove("hidden");
}

function toggleMode() {
  // Toggle icon
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  //   If is set in localStorage
  const mode = localStorage.getItem("color-theme");

  if (mode) {
    //If light, make dark and save in localStorage
    if (mode === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // if not in localStorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}

// Listen for toggle button click
themeToggleBtn.addEventListener("click", toggleMode);
