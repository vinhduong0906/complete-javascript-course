"use strict";

// Get data from local
const data = getFromStorage("petData");
const petArr = data ? JSON.parse(data) : [];
const breedData = getFromStorage("breedData");
const breedArr = breedData ? JSON.parse(breedData) : [];
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key) {
  return localStorage.getItem(key);
}

// check validation
const validatePetData = (data) => {
  for (let prop in data) {
    if (typeof data[prop] !== "boolean" && !data[prop]) {
      alert(`The pet's ${prop} is reqired`);
      return 0;
    }
  }
  if (data["id"])
    for (let pet of petArr) {
      if (String(pet["id"]) === String(data["id"])) {
        alert(`ID must unique!`);
        return 0;
      }
    }
  if (data["age"] < 1 || data["age"] > 15) {
    alert("Age must be between 1 and 15!");
    return 0;
  }
  if (data["type"] === "Select Type") {
    alert("Please select Type!");
    return 0;
  }
  if (data["weight"] < 1 || data["weight"] > 15) {
    alert("Weight must be between 1 and 15!");
    return 0;
  }
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
