let arr = [15,4,7,2];

// let object = arr.reduce(function(acc,cur,i) {
   
// },{})

// console.log(object)

function toObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; ++i)
      obj[i] = arr[i];
    return obj;
  }