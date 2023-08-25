let arrow = document.querySelectorAll(".arrow");
let nextParagraph = document.querySelectorAll(".next");
let img = document.querySelector(".img");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", () => {
    nextParagraph[i].classList.toggle("hidden");
  });
}
