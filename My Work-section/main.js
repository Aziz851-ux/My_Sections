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

// console.log(document.querySelector(".work[data-id='2']"));

// for (let i = 3; i <= 5; i++) {
//   console.log(i);

//   const cardId = workCards[counter + i].getAttribute("data-id");
//   // console.log(cardId);
//   const element = document.querySelector(`.work[data-id='${counter + i}']`);
//   cards.push(element);
// }

// cards.forEach((card) => card.classList.remove("hide"));
