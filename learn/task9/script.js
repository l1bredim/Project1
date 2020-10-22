const array = [1,4,0,4,10,1,2];
const target = 2;

function indexElement(array) {
 for(let i=0; i<array.length-1; i++) 
 {
       for (let j=i+1; j<array.length; j++) {
           if ((array[i] + array[j])==target ) {
              return [i,j];
      } 
    }
  }
 return [];
}
