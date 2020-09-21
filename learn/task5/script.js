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

  return newValue;
}

function reduceRec(arr, total, startValue) {
  let newValue = startValue;

  if (newValue === undefined) {
    newValue = arr[0];
  } else return reduceRec(arr, total(startValue, arr[i]));
}

function reduce(arr, fn, initial) {
  if (!arr.length) return initial;

  if (arr.length == 1) return fn(initial, arr[0]);

  return reduce(arr.slice(1), fn, fn(initial, arr[0]));
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
