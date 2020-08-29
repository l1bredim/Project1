function spiral(n, call) {
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
  // return matrix;

  let counter = 0;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startCol <= endRow && endCol >= startRow) {
    for (let col = endCol; col >= startCol; col--) {
      matrix[endRow][col] = fib(counter);
      counter++;
    }
    endRow--;
    for (let row = endRow; row >= startRow; row--) {
      matrix[row][startCol] = fib(counter);
      counter++;
    }
    startCol++;
    for (let col = startCol; col <= endCol; col++) {
      matrix[startRow][col] = fib(counter);
      counter++;
    }
    startRow++;

    for (let row = startRow; row <= endRow; row++) {
      matrix[row][endCol] = fib(counter);
      counter++;
    }
    endCol--;
  }

  return matrix;
}
// }
// }
// startRow++;
//   startCol++;
//   endRow--;
//   endRow--;

function fib(x) {
  if (x === 0) {
    return 0;
  } else {
    let a = 1,
      b = 1;
    let c = a + b;

    for (let i = 3; i <= x; i++) {
      let c = a + b;
      a = b;
      b = c;
    }

    return b;
  }
}

const call = fib();

function fill(spiral) {
  const tBody = document.getElementById("tBody");

  spiral.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((col) => {
      const td = document.createElement("td");
      td.innerText = col;
      tr.appendChild(td);
    });
    tBody.appendChild(tr);
  });
}

fill(spiral(5));
