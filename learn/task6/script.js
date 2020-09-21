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
