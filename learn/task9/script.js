const array = [1,4,0,4,10,1,2];
const target = 2;

function toObject(array) {
let result = []; 
label: for(let i=0; i<array.length-1; i++) 
       for (let j=i+1; j<array.length; j++) 
    if ((array[i] + array[j])==target ) {
      result.push(i,j)
      break label;
    } 

 return result;
}
