const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach((tabLink, index) => {
  tabLink.addEventListener("click", () => {
    tabLinks.forEach((link) => link.classList.remove("active-link"));
    tabLink.classList.add("active-link");

    tabContents.forEach((content) => content.classList.remove("active-tab"));
    tabContents[index].classList.add("active-tab");
  });
});

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}
