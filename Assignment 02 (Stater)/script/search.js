"use strict";

const page = "search";
const findBtn = document.getElementById("find-btn");

breedInput.innerHTML = `<option>Select Breed</option>`;
breedArr.forEach((breed) => {
  const op = document.createElement("option");
  op.innerHTML = breed.breedname;
  breedInput.appendChild(op);
});

findBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let findArr = [];
  let found = false;
  tableBodyEl.innerHTML = "";
  if (idInput.value.trim()) {
    findArr = petArr
      .map((pet) => (pet.id.includes(idInput.value.trim()) ? pet : ""))
      .filter(function (el) {
        return el != "";
      });
    if (findArr.length === 0) return;
    found = true;
  } else findArr = petArr;

  if (nameInput.value.trim()) {
    findArr = findArr
      .map((pet) => (pet.name.includes(nameInput.value.trim()) ? pet : ""))
      .filter(function (el) {
        return el != "";
      });
    if (findArr.length === 0) return;
    found = true;
  }
  if (typeInput.value !== "Select Type") {
    findArr = findArr
      .map((pet) => (pet.type.includes(typeInput.value) ? pet : ""))
      .filter(function (el) {
        return el != "";
      });
    if (findArr.length === 0) return;
    found = true;
  }
  if (breedInput.value !== "Select Breed") {
    findArr = findArr
      .map((pet) => (pet.breed.includes(breedInput.value.trim()) ? pet : ""))
      .filter(function (el) {
        return el != "";
      });
    if (findArr.length === 0) return;
    found = true;
  }
  if (vaccinatedInput.checked) {
    findArr = findArr
      .map((pet) => (pet.vaccinated === true ? pet : ""))
      .filter(function (el) {
        return el != "";
      });
    if (findArr.length === 0) return;
    found = true;
  }
  if (dewormedInput.checked) {
    findArr = findArr
      .map((pet) => (pet.dewormed === true ? pet : ""))
      .filter(function (el) {
        return el != "";
      });
    if (findArr.length === 0) return;
    found = true;
  }
  if (sterilizedInput.checked) {
    findArr = findArr
      .map((pet) => (pet.sterilized === true ? pet : ""))
      .filter(function (el) {
        return el != "";
      });
    if (findArr.length === 0) return;
    found = true;
  }
  if (found) renderTable(findArr, page);
});
