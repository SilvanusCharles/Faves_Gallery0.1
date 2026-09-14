document.addEventListener("DOMContentLoaded", () => {
  initTheme();
});

// --- MODERN STATE MECHANISM (THEMING) ---
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", currentTheme);
  updateToggleButtonText(toggleBtn, currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      let theme = document.documentElement.getAttribute("data-theme");
      let newTheme = theme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateToggleButtonText(toggleBtn, newTheme);
    });
  }
}

function updateToggleButtonText(button, theme) {
  if (!button) return;
  button.textContent = theme === "dark" ? "Light Profile" : "Dark Profile";
}

// --- FIX RESOLUTION: DYNAMIC TARGET OBJECT RENDERING ---
function openLightbox(element) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Grabs the image element directly inside the specific gallery item container
  const clickedImgSrc = element.querySelector("img").src;

  if (lightbox && lightboxImg) {
    lightboxImg.src = clickedImgSrc;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevents background body scrolling
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("show");
    document.body.style.overflow = ""; // Restores window body scrolling
  }
}

// Escape Key listener close support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
