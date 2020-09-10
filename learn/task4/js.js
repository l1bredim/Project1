//getRandomNumber
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const number = getRandomInt;
let arr = [];

for (i = 0; i < 100; i++) {
  arr[i] = number(i);
}

const n = 100;
const newArray = Array.from({ length: n }, (n) => new Array(n).map(number));
