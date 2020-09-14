//getRandomNumber
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const n = 100;
const max = 20;
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
  console.log(li.classList);
  return li;
});

const forEachArr = forEach(mapArr, function (item) {
  const ul = document.querySelector("ul");

  ul.appendChild(item);
});
// for (i = 0; i < 10; i++) {
//   let li = document.createElement("li");
//   li.append(getRandomInt(100));
//   console.log(li);
// }
let call = document.querySelector("call");
console.log(arr);
console.log(filterArr);
console.log(mapArr);
console.log(forEachArr);
