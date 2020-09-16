//getRandomNumber
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const n = 50;
const max = 100;
const arr = Array.from({ length: n }, () => getRandomInt(max));

const filterArr = filter(arr, (item) => item <= max / 2);

const mapArr = map(filterArr, function (item) {
  const li = document.createElement("li");
  if (item % 2 === 0) {
    li.classList.add("li-green");
  } else {
    li.classList.add("li-red");
  }
  li.textContent = item;
  return li;
});

// });
// });
// for (i = 0; i < 10; i++) {
//   let li = document.createElement("li");
//   li.append(getRandomInt(100));
//   console.log(li);
// }
// let call = document.querySelector("call");
// // console.log(arr);
// // console.log(filterArr);
// // console.log(mapArr);
// console.log(forEachArr);

// let amount = filterArr.reduce((total, item) => total + item, 0);
// console.log(amount);

function createClass(item) {
  const li = document.createElement("li");
  const ul = document.querySelector("ul");
  if (item % 2 === 0) {
    li.classList.add("li-green");
  } else {
    li.classList.add("li-red");
  }
  li.textContent = item;
  return li;
}

const final = arr.reduce((acc, current) => {
  if (current <= max / 2) {
    const li = createClass(current);
    acc.push(li);
  }
  return acc;
}, []);

const forEachArr = forEach(final, function (item) {
  const ul = document.querySelector("ul");
  ul.appendChild(item);
});
forEachArr;
console.log(final);
