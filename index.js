// widthParams(top = false, bottom = false, between = false) {
//   if (top) {
//     console.log("------ START -----");
//   }
//   Object.keys(this).forEach((key, index, array) => {
//     console.log(`"${key}": ${this[key]}`);
//     if (between && index !== array.length - 1) {
//       console.log("-------------");
//     }
//   });

//   if (bottom) {
//     console.log("------ END -----");
//   }
// },
const x = 1;
const y = 5;
const z = 3;
function winner(x, y, z) {
  const catADistance = Math.abs(x - z);
  const catBDistance = Math.abs(y - z);
  if (catADistance < catBDistance) {
    {
      return "Cat  A";
    }
  } else if (catBDistance < catADistance) {
    return "Cat B";
  }
  return "Mouse";
}

function matrix(a, b) {
  var arr = [];
  for (i = 0; i < a; i++) {
    arr[i] = [];
  }
  for (i = 0, k = 0; i < b; k++, i++) {
    arr[i][k] = "";
  }
  return arr;
}
var m = matrix(8, 8);
console.log(matrix(3, 3));
