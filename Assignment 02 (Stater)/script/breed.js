"use strict";
const inputBreed = document.querySelector("#input-breed");
const inputType = document.querySelector("#input-type");
const breedSubmitBtn = document.querySelector("#breed-submit-btn");

renderBreed(breedArr);

// display breed function
//create row element
function addRow(breed, index) {
  const row = document.createElement("tr");
  row.innerHTML = `
  <th scope="row">${index + 1}
  </th>
  <td>${breed["breedname"]}</td>
  <td>${breed["breedtype"]}</td>
  <td>
    <button  class="btn btn-danger" onclick="deleteBreed('${
      breed["breedname"]
    }')">Delete</button>
  </td>`;
  tableBodyEl.appendChild(row);
}
function renderBreed(breedArr) {
  breedArr.forEach((breed, index) => addRow(breed, index));
}

//validate breed input function
const validateBreed = (data) => {
  if (!data.breedname) {
    alert("Breed name must required!");
    inputBreed.focus();
    return 0;
  }
  if (breedArr.find((breed) => breed.breedname === data.breedname)) {
    alert("Breed name must unique");
    return 0;
  }
  if (data.breedtype === "Select Type") {
    alert("Breed type must required!");
    return 0;
  }
  return 1;
};
function clearInput() {
  inputBreed.value = "";
  inputType = "Select Type";
}

// add breed function
breedSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const nextIndex = breedArr.length;
  const data = {
    breedname: inputBreed.value.trim()
      ? inputBreed.value
          .split(" ")
          .map((e) => e[0].toUpperCase() + e.slice(1))
          .join(" ")
      : "",
    breedtype: inputType.value,
  };
  if (validateBreed(data)) {
    breedArr.push(data);
    saveToStorage("breedData", JSON.stringify(breedArr));
    addRow(data, nextIndex);
    clearInput();
  }
});

//Delete breed function
function deleteBreed(breedName) {
  if (confirm("Are you sure?")) {
    breedArr.splice(
      breedArr.findIndex((breed) => breed.breedname === breedName),
      1
    );
    saveToStorage("breedData", JSON.stringify(breedArr));
    tableBodyEl.innerHTML = "";
    renderBreed(breedArr);
  }
}
