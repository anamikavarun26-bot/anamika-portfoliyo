// NAV TOGGLE
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isVisible = getComputedStyle(navLinks).display !== "none";
    navLinks.style.display = isVisible ? "none" : "flex";

    if (window.innerWidth <= 1000 && !isVisible) {
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "64px";
      navLinks.style.right = "6vw";
      navLinks.style.background = "rgba(0,0,0,0.5)";
      navLinks.style.padding = "12px";
      navLinks.style.borderRadius = "8px";
    } else {
      if (window.innerWidth > 1000) {
        navLinks.style.position = "";
        navLinks.style.top = "";
        navLinks.style.right = "";
        navLinks.style.background = "";
        navLinks.style.padding = "";
        navLinks.style.borderRadius = "";
        navLinks.style.flexDirection = "row";
      }
    }
  });
}

// TYPEWRITER SLIDE TEXT
const slideText = document.getElementById("slide-text");
const roles = ["I am a Web Developer", "Full Stack Developer"];
let idx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
  const current = roles[idx];
  if (isDeleting) {
    charIdx--;
    slideText.textContent = current.substring(0, Math.max(charIdx, 0));
  } else {
    charIdx++;
    slideText.textContent = current.substring(0, charIdx);
  }
  if (!isDeleting && charIdx === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }
  if (isDeleting && charIdx === 0) {
    isDeleting = false;
    idx = (idx + 1) % roles.length;
  }
  setTimeout(typeEffect, isDeleting ? 50 : 90);
}
setTimeout(typeEffect, 400);
