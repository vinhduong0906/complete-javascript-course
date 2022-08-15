const temperature1 = [17, 21, 23];
const temperature2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}\u00B0C in ${i + 1} ${i === 0 ? 'day' : 'days'} ...`);
  }
}
printForecast(temperature1);
printForecast(temperature2);
