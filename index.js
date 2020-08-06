let x = +prompt("Введите cat А", "");
let y = +prompt("Введите cat В", " ");
let z = +prompt("Введите mouse", " ");
function position(x, y, z) {
  if (x > y) return "Cat A";
  else if (x < y) return "Cat B";
  else return "Mouse";
}

position(x, y, z);
