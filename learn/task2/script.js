function matrixRotate(rotate, direction, matrix) {}
//долго работает!!!!
// function fib(n){
//     if (n===1||n===2) return 1;
//     else return fib(n-2)+fib(n-1);
//     }

function fib(x) {
  if (x === 0) {
    return 0;
  } else {
    let a = 1,
      b = 1;
    let c = a + b;

    for (let i = 3; i <= x; i++) {
      let c = a + b;
      a = b;
      b = c;
    }

    return b;
  }
}

let arr = [];

function matrix(n, m) {
  let number = 0;
  for (i = m - 1; i >= 0; i--) {
    arr[i] = [];
    for (j = n - 1; j >= 0; j--) {
      arr[i][j] = fib(number);
      number++;
    }
  }
  return arr;
}
