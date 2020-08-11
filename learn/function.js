// function greet(name) {
//   console.log("Привет", name);
// }
// greet("Alina");

//анонимные функции
// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

// //Стрелочные функции
// const arrow = (name) => {
//   console.log("Привет", name);
// };

// const pow2 = (num) => num ** 2;

// ПАРАМЕТРЫ ПО УМОЛЧАНИЮ
// const sum = (a = 0, b = 0) => a + b;

// function sumAll(...all) {
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
//   console.log(all);
// }

// const res = sumAll(1, 2, 3, 4, 5);
// console.log(res);

// ЗАМИКАНИЯ
// function createMember(name) {
//   return function (lastName) {
//     console.log(name + lastName);
//   };
// }

// const logWithLastName = createMember("Misha");
// console.log(logWithLastName(" Kalonov"));
