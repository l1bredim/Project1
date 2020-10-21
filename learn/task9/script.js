const array = [1,2];
const target = 3;

function targer(array) {
 let result = []; 
for(let i=0; i<array.length; i++) {
  let indexNext = i+1;
  let indexPrev = i-1;
  const itemNext = array[i+1];
  const itemPrev = array[i-1];
  if ((itemPrev + itemNext)==target ){
    console.log('есть такая пара');
    console.log(itemPrev);
    console.log(itemNext);
    console.log(indexPrev);
    console.log(indexNext);    
    result.push(indexPrev,indexNext);
  }
 }
 return result;
}