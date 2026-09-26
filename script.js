document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
});

function initMobileNavigation() {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
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
