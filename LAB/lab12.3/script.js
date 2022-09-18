'use strict';

const age1 = [5, 2, 4, 1, 15, 8, 3];
const age2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = age => {
  const humanAge = age
    .map(function (age) {
      return age <= 2 ? 2 * age : 16 + age * 4;
    })
    .filter(humanAge => humanAge >= 18);
  return humanAge.reduce((a, b) => a + b, 0) / humanAge.length;
};
console.log(calcAverageHumanAge(age1));
console.log(calcAverageHumanAge(age2));
