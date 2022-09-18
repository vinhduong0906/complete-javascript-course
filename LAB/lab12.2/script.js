'use strict';

const age1 = [5, 2, 4, 1, 15, 8, 3];
const age2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (age) {
  let humanAge = [];
  let humanAgeFrom18 = [];
  let averageHumanAge = 0;
  let adultDogCount = 0;
  let sumAdultDogHumanAge = 0;
  age.forEach(function (age) {
    const Age = age <= 2 ? 2 * age : 16 + age * 4;
    //save all dog human age to humanAge array
    humanAge.push(Age);
    //save the dog has human age from 18
    if (Age >= 18) humanAgeFrom18.push(Age);
    // calc average humanage of adult dog
    if (age >= 3) {
      adultDogCount += 1;
      sumAdultDogHumanAge += Age;
    }
  });
  averageHumanAge = sumAdultDogHumanAge / adultDogCount;
  console.log(humanAge);
  console.log(humanAgeFrom18);
  console.log(averageHumanAge);
};
calcAverageHumanAge(age1);
calcAverageHumanAge(age2);
