"use strict";

const leftIcon = document.querySelector(".header__logo--left");
const rightIcon = document.querySelector(".header__logo--right");
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popup__btn");

const addIcons = () => {
  setTimeout(() => (rightIcon.style.opacity = 0.8), 600);
  setTimeout(() => (leftIcon.style.opacity = 0.8), 1200);
};
addIcons();

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
    popup.style.transform = "transform: translate(-50%, -50%) scale(0.1)";
  }
});

popupBtn.addEventListener("click", () => {
  popup.style.opacity = 1;
  popup.style.visibility = "visible";
  popup.style.transform = "transform: translate(-50%, -50%) scale(1)";
});
