const x = 1;
const y = 3;
const z = 5;
function createLine(options) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.insertAdjacentHTML(
    "afterbegin",
    ` <div class='line'>
        <div class='cat-a'>A</div>
       <div class='cat-b'>B</div>
        <div class='mouse'>M</div>
      </div>
            `
  );
  document.body.appendChild(line);
  return line;
}
createLine();

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
