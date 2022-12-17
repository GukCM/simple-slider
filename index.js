const data = [
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const slider = document.querySelector(".slider");

slider.innerHTML += data.map(img => `<img src="${img}">`).join("");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let slideCounter = 0;

rightArrow.addEventListener("click", () => {
    slideCounter++;
    if (slideCounter === 3) slideCounter = 0;
    slider.style.transform = `translateX(${slideCounter * -1600}px)`;
});

leftArrow.addEventListener("click", () => {
    slideCounter--;
    if (slideCounter < 0) slideCounter = 2;
    slider.style.transform = `translateX(${slideCounter * -1600}px)`;
});