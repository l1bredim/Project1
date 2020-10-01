function factorial(n) {
  if (n === 1) {
    return n;
  }
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    throw new Error("Dont WORK. Please check the input data...");
  }

  return n * factorial(n - 1);
}

function fibonachi(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n > 1) {
    n = fibonachi(n - 1) + fibonachi(n - 2);
  }
  return n;
}

//includes(arr, item)  повертає true якшо айтем знайдений в масиві і false якшо не знайдений
function includes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    let items = arr[i];
    if (items === item) {
      return true;
    }
  }

  return false;
}

// Шоб вона повертала інтерсекшн будь якої кількості масивів.

// за допомогою рест оператору.
// // як він працює
// function rest(...rest) {
//   return rest;
// }

// const ARRAY = [
//   [1, 2, 3],
//   [555, 33, 1],
//   [1, 2, 3, 4, 5, 6],
// ];
// const qqq = ARRAY.reduce((acc, start) => {
//   const b = acc.filter((item) => item);
//   const m = start.includes(b);
//   console.log(m);
//   // return acc;
// });
function intersection(...arrays) {
  return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}

const array = [
  0,
  3,
  7,
  14,
  15,
  20,
  27,
  38,
  39,
  40,
  51,
  62,
  73,
  94,
  115,
  126,
  157,
  168,
  199,
];
function binarSearch(value, array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let center = left + Math.floor((right - left) / 2);
    if (value === array[center]) {
      return center;
    }
    if (value < array[center]) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }
  return undefined;
}
