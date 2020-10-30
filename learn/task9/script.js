const array = [1,2,1,4,5];
const target = 5;

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



  function toMap(array) {
    const map = {};

    array.forEach((value, element) => {
      map[value]=element;
      
    })
    return map;
  }


  function sumElement(array,target) {
    const map = toMap(array)
    
    for (let i= 0; i < array.length; i++) {
      const currentElement = array[i];
      const num = target-currentElement;
      const index = map[num] ;
      
      if (index!== undefined && index!==i) {
        return [i,index]
      }

      
    }

    return [];
  }
  