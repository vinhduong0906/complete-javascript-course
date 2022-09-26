"use strict";
const submitBtn = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const sideBar = document.querySelector("#sidebar");
// Side bar animation
sideBar.addEventListener("click", function (e) {
  if (e.target.id === "sidebar") e.target.classList.toggle("active");
});

//display data to page
function renderTable(petArr, page) {
  tableBodyEl.innerHTML = "";
  petArr.forEach((pet) => {
    const row = document.createElement("tr");
    row.innerHTML = `
  <th scope="row">${pet["id"]}
  </th>
  <td>${pet["name"]}</td>
  <td>${pet["age"]}</td>
  <td>${pet["type"]}</td>
  <td>${pet["weight"]} kg</td>
  <td>${pet["length"]} cm</td>
  <td>${pet["breed"]}</td>
  <td>
    <i class="bi bi-square-fill" style="color: ${pet["color"]}"></i>
  </td>
  <td><i class="bi bi-${
    pet["vaccinated"] ? "check" : "x"
  }-circle-fill"></i></td>
  <td><i class="bi bi-${pet["dewormed"] ? "check" : "x"}-circle-fill"></i></td>
  <td><i class="bi bi-${
    pet["sterilized"] ? "check" : "x"
  }-circle-fill"></i></td>
  

  ${page === "index" ? `<td>${pet.bmi}</td>` : ""}
  <td>${pet["date"]}</td>
 ${
   page === "index" || page === "edit"
     ? `<td>
 <button  class="btn btn-danger" onclick="${
   page === "index" ? "deletePet" : "editPet"
 }('${pet["id"]}')">${page === "index" ? "Delete" : "Edit"}</button>
</td>`
     : ""
 }
  `;
    tableBodyEl.appendChild(row);
  });
}

//Display breed just for pet's type( dog or cat)
function breedWithPetType(obj) {
  breedInput.innerHTML = `<option>Select Breed</option>`;
  breedArr.forEach((breed) => {
    if (breed.breedtype === obj.value) {
      const op = document.createElement("option");
      op.innerHTML = breed.breedname;
      breedInput.appendChild(op);
    }
  });
}

//clear input function( clear entered data after save)
const clearInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "#000000";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
};
