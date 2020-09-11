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
const filterArr = filter(arr, (item) => item <= item <= item / 2);

// function li(item) {
//   return ;

// }

const mapArr = map(filterArr, (item) => item);

function forEach(array, callback) {
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const oneCall = callback(item);
    console.log(oneCall);
  }
}

// for (i = 0; i < 10; i++) {
//   let li = document.createElement("li");
//   li.append(getRandomInt(100));
//   console.log(li);
// }

function getListContent() {
  let fragment = new DocumentFragment();

  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)

console.log(arr);
console.log(filterArr);
