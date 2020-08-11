// // const timeout = setTimeout(() => {
// //   console.log("Hello");
// // }, 2000);

// // clearTimeout(timeout);

// const interval = setInterval(() => {
//   console.log("1,2,3,4");
// }, 1500);

// clearInterval(interval);

// function delay(callback, wait = 1000) {
//   setTimeout(callback, wait);
// }

// delay(() => {
//   console.log("After two sec");
// });

// const delay = (wait = 1000) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, wait);
//   });
//   return promise;
// };
// delay(2500)
//   .than(() => {
//     console.log("After two sec");
//   })
//   .catch((err) => console.error(err))
//   .finaly(() => console.log("Finally"));
