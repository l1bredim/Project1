//getRandomNumber
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const n = 100;
const arr = Array.from({ length: n }, () => getRandomInt(100));

function filter(array, callback) {
  const newArray = [];
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const call = callback(item);
    if (call) {
      newArray.push(item);
    }
  }
  return newArray;
}
function map(array, callback) {
  const newArr = [];
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const call = callback(item);
    newArr.push(call);
  }
  return newArr;
}
const filterArr = filter(
  arr,
  (item) => getRandomInt(item) <= getRandomInt(item / 2)
);

function li(item) {
  return `<li>${item}</li>`;
}

const mapArr = map(filterArr, li);

function forEach(array, callback) {
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const oneCall = callback(item);
    console.log(oneCall);
  }
}

console.log(arr);
console.log(filterArr);
console.log(mapArr);
