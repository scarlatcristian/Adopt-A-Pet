"use strict";

const leftIcon = document.querySelector(".header__logo--left");
const rightIcon = document.querySelector(".header__logo--right");

const addIcons = () => {
  setTimeout(() => (rightIcon.style.opacity = 0.7), 600);
  setTimeout(() => (leftIcon.style.opacity = 0.7), 1200);
};
addIcons();
