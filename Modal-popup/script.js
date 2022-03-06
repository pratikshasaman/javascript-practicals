"use strict";
const btnMain = document.querySelector(".main");
const btnClose = document.querySelector(".close");
const popupMain = document.querySelector(".popup-main");
const btnClass = document.querySelectorAll(".btn");
for (let i = 0; i < btnClass.length; i++) {
  // console.log(btnClass[i]);
  btnClass[i].addEventListener("click", function () {
    popupMain.classList.remove("hidden");
  });
  // console.log(btnClose[i]);
  btnClose.addEventListener("click", function () {
    popupMain.classList.add("hidden");
  });
}
