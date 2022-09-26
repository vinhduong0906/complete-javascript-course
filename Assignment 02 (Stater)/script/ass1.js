"use strict";
const page = "index";
const healthyBtn = document.getElementById("healthy-btn");
const calBmiBtn = document.getElementById("bmi-btn");

renderTable(petArr, page);

let healthyCheck = false;

//save pet function( check validate, save to local and display to page)
const savePet = () => {
  const data = {
    id: idInput.value,
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
    bmi: "?",
    date: new Date().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
  };
  if (validatePetData(data)) {
    petArr.push(data);
    saveToStorage("petData", JSON.stringify(petArr));
    clearInput();
    renderTable(petArr, page);
  }
};
submitBtn.addEventListener("click", savePet);

//Delete pet function

const deletePet = (petId) => {
  // Confirm before deletePet
  if (confirm("Are you sure?")) {
    const petIndex = petArr.findIndex((element) => element.id === petId);
    petArr.splice(petIndex, 1);
    saveToStorage("petData", JSON.stringify(petArr));
    renderTable(petArr, page);
  }
};

// Find healthy pet
healthyBtn.addEventListener("click", function () {
  if (healthyCheck) {
    renderTable(petArr, page);
    healthyBtn.textContent = "Show Healthy Pet";
    healthyCheck = false;
  } else {
    const healthyPet = petArr.filter(function (element) {
      return element.vaccinated && element.dewormed && element.sterilized;
    });
    renderTable(healthyPet, page);
    healthyBtn.textContent = "Show All Pet";
    healthyCheck = true;
  }
});

// Calculate BMI
calBmiBtn.addEventListener("click", function () {
  for (let el of petArr) {
    if (el.bmi === "?")
      el.bmi =
        el.type === "Cat"
          ? ((el.weight * 886) / el.length ** 2).toFixed(2)
          : ((el.weight * 703) / el.length ** 2).toFixed(2);
  }
  renderTable(petArr, page);
});
