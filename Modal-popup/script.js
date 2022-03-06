"use strict";
const btnMain = document.querySelector(".main");
const overflow = document.querySelector(".overflow");

const btnClose = document.querySelector(".top-section .close-icon");
const popupMain = document.querySelector(".popup-main");
const btnClass = document.querySelectorAll(".btn");
for (let i = 0; i < btnClass.length; i++) {
  btnClass[i].addEventListener("click", function () {
    popupMain.classList.remove("hidden");
  });

  btnClose.addEventListener("click", function () {
    popupMain.classList.add("hidden");
  });
}
