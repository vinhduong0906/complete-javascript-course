"use strict";
const tableBodyEl = document.getElementById("tbody");

const submitBtn = document.getElementById("submit-btn");
const healthyBtn = document.getElementById("healthy-btn");
const calBmiBtn = document.getElementById("bmi-btn");
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

const petArr = [];

let healthyCheck = false;
// check validation

const validateData = (data) => {
  for (let prop in data) {
    if (typeof data[prop] !== "boolean" && !data[prop]) {
      alert(`The pet's ${prop} is reqired`);
      return 0;
    }
  }
  //   if (!data["id"]) {
  //     alert("Id is require");
  //     return 0;
  //   }
  for (let pet of petArr) {
    if (String(pet["id"]) === String(data["id"])) {
      alert(`ID must unique!`);
      return 0;
    }
  }
  //   if (!data["name"]) {
  //     alert("Name is require");
  //     return 0;
  //   }
  //   if (!data["age"]) {
  //     alert("Age is require");
  //     return 0;
  //   }
  if (data["age"] < 1 || data["age"] > 15) {
    alert("Age must be between 1 and 15!");
    return 0;
  }
  if (data["type"] === "Select Type") {
    alert("Please select Type!");
    return 0;
  }
  //   if (!data["weight"]) {
  //     alert("Weight is require");
  //     return 0;
  //   }
  if (data["weight"] < 1 || data["weight"] > 15) {
    alert("Weight must be between 1 and 15!");
    return 0;
  }
  //   if (!data["length"]) {
  //     alert("Length is require");
  //     return 0;
  //   }
  if (data["length"] < 1 || data["length"] > 100) {
    alert("Length must be between 1 and 100!");
    return 0;
  }
  if (data["breed"] === "Select Breed") {
    alert("Please select Breed!");
    return 0;
  }

  return 1;
};

//Reset all input value
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

const renderTable = (petArr) => {
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
  

  <td>${pet.bmi}</td>
  <td>${pet["date"]}</td>
  <td>
    <button  class="btn btn-danger" onclick="deletePet('${
      pet["id"]
    }')">Delete</button>
  </td>`;
    tableBodyEl.appendChild(row);
  });
};

//Delete pet function

const deletePet = (petId) => {
  // Confirm before deletePet
  if (confirm("Are you sure?")) {
    const petIndex = petArr.findIndex((element) => element.id === petId);
    console.log(petIndex);
    petArr.splice(petIndex, 1);
    renderTable(petArr);
  }
};

//Form submit
submitBtn.addEventListener("click", function (e) {
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
  if (validateData(data)) {
    petArr.push(data);
    clearInput();
    renderTable(petArr);
  }
});

// Find healthy pet
healthyBtn.addEventListener("click", function () {
  if (healthyCheck) {
    renderTable(petArr);
    healthyBtn.textContent = "Show Healthy Pet";
    healthyCheck = false;
  } else {
    const healthyPet = petArr.filter(function (element) {
      return element.vaccinated && element.dewormed && element.sterilized;
    });
    renderTable(healthyPet);
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
  renderTable(petArr);
});
