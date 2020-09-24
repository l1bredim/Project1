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

// //наступна задача
// на завтра або на сьогодні якшо встигнеш

// intersection(array1, array2)  повертає масив значень які пересікаються

// тобто intersection([5, 10, 15, 20], [15, 88, 1, 5, 7]) // 5, 15

function intersection(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++) {
      const items1 = arr1[i];
      const items2 = arr2[j];
      if (items1 === items2) {
        arr3.push(items1);
      }
    }

  return arr3;
}
