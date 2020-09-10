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

//forEach для понимания метода...
function forEach(array, callback) {
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const oneCall = callback(item);
    console.log(oneCall);
  }
}

//map
function map(array, callback) {
  const newArr = [];
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const call = callback(item);

    newArr.push(call);
  }
  return newArr;
}
