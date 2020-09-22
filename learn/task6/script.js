console.log("hello");

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

const arr = [11, 22, 31, 43, 5, 64];
function reduce(arr, total, startValue) {
  let newValue = startValue;
  let i = 0;
  if (newValue === undefined) {
    i = 1;
    newValue = arr[0];
  }
  for (i; i < arr.length; i++) {
    newValue = total(newValue, arr[i]);
  }

  return reduce(arr, total, total(newValue, arr[i]));
}
