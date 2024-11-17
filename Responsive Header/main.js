const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileMenuOpenBtn = document.querySelector("[data-open-menu-btn]");
const mobileMenuCloseBtn = document.querySelector("[data-close-menu-btn]");
const overlay = document.querySelector("[data-overlay]");
const close=document.querySelector(".close");


mobileMenuOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  overlay.classList.add("show");
  close.classList.add("closeshow");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  overlay.classList.remove("show");
  close.classList.remove("closeshow");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  overlay.classList.remove("show");
  close.classList.remove("closeshow");
});
