'use strict';

const dogJulia1 = [3, 5, 2, 12, 7];
const dogKate1 = [4, 1, 15, 8, 3];
const dogJulia2 = [9, 16, 6, 8, 3];
const dogKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogJulia, dogKate) {
  const juliaRemoved = dogJulia.slice(1, dogJulia.length - 1);
  const dogJuliaKate = juliaRemoved.concat(dogKate);
  dogJuliaKate.forEach(function (element, index) {
    console.log(
      `Dog number ${index + 1} is an ${
        element >= 3
          ? `an adult, and is ${element} years old `
          : 'still a puppy'
      }`
    );
  });
};
checkDogs(dogJulia1, dogKate1);
checkDogs(dogJulia2, dogKate2);
