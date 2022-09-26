"use strict";
const page = "edit";
const containerFormEl = document.querySelector("#container-form");
renderTable(petArr, page);

// Edit pet function
function editPet(id) {
  const pet = petArr[petArr.findIndex((pet) => pet.id === id)];
  containerFormEl.classList.remove("hide");
  idInput.value = pet.id;
  nameInput.value = pet.name;
  ageInput.value = pet.age;
  typeInput.value = pet.type;
  weightInput.value = pet.weight;
  lengthInput.value = pet.length;
  colorInput.value = pet.color;
  breedInput.innerHTML = `<option>${pet.breed}</option>`;
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterilized;
}

//Display breed in edit mode
function displayBreed() {
  const breed = breedInput.value;
  breedInput.innerHTML = `<option>Select Breed</option>`;
  breedArr.forEach((breed) => {
    if (breed.breedtype === typeInput.value) {
      const op = document.createElement("option");
      op.innerHTML = breed.breedname;
      breedInput.appendChild(op);
    }
  });
  breedInput.value = breed;
}

// Add event to edit submit button( Save data after edit)
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const pet = petArr[petArr.findIndex((pet) => pet.id === idInput.value)];
  const data = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
  };

  if (validatePetData(data)) {
    pet.name = nameInput.value;
    pet.age = parseInt(ageInput.value);
    pet.type = typeInput.value;
    pet.weight = parseInt(weightInput.value);
    pet.length = parseInt(lengthInput.value);
    pet.color = colorInput.value;
    pet.breed = breedInput.value;
    pet.vaccinated = vaccinatedInput.checked;
    pet.dewormed = dewormedInput.checked;
    pet.sterilized = sterilizedInput.checked;

    saveToStorage("petData", JSON.stringify(petArr));
    clearInput();
    renderTable(petArr, page);
    containerFormEl.classList.add("hide");
  }
});
