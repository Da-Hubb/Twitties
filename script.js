const openAdd = document.querySelector(".open");
const paint = document.querySelector(".paint");
const receipt = document.querySelector(".receipt");
const clock = document.querySelector(".clock");
const chat = document.querySelector(".chat");

openAdd.addEventListener("click", () => {
    paint.classList.toggle("two");
    receipt.classList.toggle("three");
    clock.classList.toggle("four");
    chat.classList.toggle("five");
})