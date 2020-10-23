const array = [1,2,1,10,3];
const target = 4;

// function indexElement(array) {
//  for(let i=0; i<array.length-1; i++) 
//  {
//        for (let j=i+1; j<array.length; j++) {
//            if ((array[i] + array[j])==target ) {
//               return [i,j];
//       } 
//     }
//   }
//  return [];
// }


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

  function coupleIndexs(array) {
    let map = toObject(array);
    for (let i=0; i< array.length; i++) {
      let item = array[i];
      let j = [target-item];
      if (map !== undefined) {
        let mark = map.hasOwnProperty(target-item);
        if (mark === true) {
          if (j!==i) {
            return [j,i];
          }
      }
    }
  }
}
