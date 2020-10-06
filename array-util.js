//filter method
function filter(array, callback) {
  const newArray = [];
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const call = callback(item);
    if (call) {
      newArray.push(item);
    }
  }
  return newArray;
}

//forEach method..
function forEach(array, callback) {
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const oneCall = callback(item);
    console.log(oneCall);
  }
}
//map method
function map(array, callback) {
  const newArr = [];
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const call = callback(item);
    newArr.push(call);
  }
  return newArr;
}


//reduce
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

//includes
function includes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    let items = arr[i];
    if (items === item) {
      return true;
    }
  }

  return false;
}

//intersection (50%)
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

//intersection 100%version
function intersection(...arrays) {
  return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}

//binarSearch
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

//union 
function union(...arrays) {
  return arrays.reduce((acc, array) => {
    return acc.concat(array.filter((item) => !acc.includes(item)));
  });
}

