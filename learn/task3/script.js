function map(array, cb) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const mapped = cb(arr[i]);
    newArray.push(mapped);
  }

  return newArray;
}

map(10);
