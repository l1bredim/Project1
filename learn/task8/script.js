
  const array = [15,4,7,2];
  const map = {};
  function toObject(array) {
    let item = 0; 
    for (let i = 0; i<array.length; i++) {
        const key = array[i];
        let value = item;
        map[key]=value;
        item++;
    }
    return map;
  }
