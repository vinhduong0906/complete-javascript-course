"use strict";

const exportBtn = document.getElementById("export-btn");
const importBtn = document.getElementById("import-btn");
const inputFile = document.getElementById("input-file");
// Export to JSON file
exportBtn.addEventListener("click", function () {
  const blob = new Blob([JSON.stringify(petArr)], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "pet-data.json");
});

//Import from JSON file
importBtn.addEventListener("click", function () {
  const file = inputFile.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      try {
        const petArrImport = JSON.parse(evt.target.result);
        // JSON.parse(evt.target.result);
        // const petArrImport = JSON.parse(evt.target.result);
        petArrImport.forEach(function (element) {
          const petIndex = petArr.findIndex((pet) => pet.id === element.id);

          if (petIndex !== -1) {
            petArr[petIndex] = element;
          } else {
            petArr.push(element);
          }
        });
        saveToStorage("petData", JSON.stringify(petArr));
        alert("Import successfull!");
        inputFile.value = "";
      } catch (e) {
        alert("Invalid JSON file");
        return;
      }
    };
    reader.onerror = function (evt) {
      alert("error reading file");
    };
  } else alert("Choose file first");
});
