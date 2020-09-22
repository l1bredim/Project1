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