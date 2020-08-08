// const cars = ["Mazda", "Ford", "BMW", "Mersedes"];
// // const people = [
// //   { name: "Viktoria", budget: 4200 },
// //   { name: "Bodik", budget: 6200 },
// //   { name: "Misha", budget: 1500 },
// ];
const fib = [1, 1, 2, 3, 5, 8, 13];

// cars.push("Remo");
// console.log(cars);
// cars.unshift("Volga");

// const firstCar = cars.shift();
// const lastCar = cars.pop();
// // console.log(cars);
// // // console.log(firstCar);
// // // console.log(lastCar);

// // // Task #1
// // const text = "Привет, мы изучаем джаваскрипт";
// // const reverseText = text.split("").reverse().join("");
// const index = cars.indexOf("BMW");
// cars[index] = "Porche";
// console.log(cars);

// const index = people.findIndex(function (person) {
//   return person.budget === 1500;
// });

// const person = people.find(function (person) {
//   return person.budget === 1500;
// });
// // console.log(person);
// let findedPerson;

// for (const person of people) {
//   if (person.budget === 1500) {
//     findedPerson = person;
//   }
// }

// console.log(findedPerson);

// const person = people.find((person) => person.budget === 1500);
// console.log(person);

// console.log(cars.includes("Ford"));

// const upperCaseCars = cars.map((car) => {
//   return car.toUpperCase();
// });
// console.log(upperCaseCars);

// const sqrt = (num) => Math.sqrt(num);
// const pow2Fib = fib.map(fib2).map(sqrt);
//

// const fib2 = (num) => num ** 2;
// const pow2Fib = fib.map(fib2);
// const filteredNumbers = pow2Fib.filter((num) => {
//   return num > 20;
// });
// console.log(filteredNumbers);

const people = [
  { name: "Viktoria", budget: 4200 },
  { name: "Bodik", budget: 6200 },
  { name: "Misha", budget: 1500 },
];

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);

console.log(allBudget);
