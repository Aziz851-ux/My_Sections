const portfolio = document.querySelector("[data-mobile-menu]");
const datashowbtn = document.querySelector("[data-open-menu-btn]");
const showButton = document.querySelector("#portfolio button");
const workCards = Array.from(document.querySelectorAll(".work"));
let counter = 3;
let showTotalCards = 3;

showButton.addEventListener("click", () => {
  portfolio.classList.add(".show");
  document.body.classList.add("loading");
  setTimeout(() => {
    workCards
      .slice(counter, counter + showTotalCards)
      .forEach((card) => card.classList.remove("hide"));

    counter += showTotalCards;
    document.body.classList.remove("loading");
  }, 1000);
});

// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = (document.getElementsByClassName = "tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     // tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

// Owl__carsol-Library for Services Section
// const servicesAttribute = document.querySelector("[services-attribute]");

// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     margin: 15,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     nav: true,
//     responsive: {
//       992: {
//         items: 1,
//       },
//     },
//   });
// });

// servicesArr = [
//   {
//     img: "../images/codespng.png",
//     h2: "Web Design",
//     p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Earumipsam",
//     a: "Learn more",
//   },
//   {
//     img: "../images/croppng.png",
//     h2: "UI/UX Design",
//     p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Earumipsam",
//     a: "Learn more",
//   },
//   {
//     img: "../images/appstore.png",
//     h2: "App Design",
//     p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Earumipsam",
//     a: "Learn more",
//   },
// ];

// servicesArr.forEach((arr) => {
//   const arrHTML = `   <div class="services-content">
//             <i><img src="${arr.img}/></i>
//             <h2>${arr.h2}</h2>
//             <p>
//               ${arr.p}
//             </p>
//             <a href="#">${arr.a}</a>
//           </div>`;
//   servicesAttribute.innerHTML += arrHTML;
// });
// Owl__carsol-Library End

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

// whatsapp btn configuration starts
const whatsappBtn = document.querySelector(".bat_send-whatsapp");

whatsappBtn.addEventListener("click", () => {
  const phoneNumber = "93786756190"; // Replace with the actual number
  const message = "Hello";
  const url = `https://api.whatsapp.com/send/?phone=93786756190&text=${encodeURIComponent(
    "Hello! can you give me more details about this?"
  )}`;
  window.open(url, "_blank");
});
// whatsapp btn configuration ends

// Submit btn success message

const msg = document.getElementById("msg");

// overlay
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileMenuOpenBtn = document.querySelector("[data-open-menu-btn]");
const mobileMenuCloseBtn = document.querySelector("[data-close-menu-btn]");
const overlay = document.querySelector("[data-overlay]");

mobileMenuOpenBtn.addEventListener("click", () => {
  overlay.classList.add("show");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("show");
  sidemenu.style.right = "-200px";
});

// overlay end
