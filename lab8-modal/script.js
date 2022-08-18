"use strict";

const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
function displayModal() {
  modal.classList.remove("hidden");

  overlay.classList.remove("hidden");
}
function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", function () {
    displayModal();
  });
closeModal.addEventListener("click", function () {
  hideModal();
});
overlay.addEventListener("click", function () {
  hideModal();
});
addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") hideModal();
});
