function createLine(options) {
  const line = document.createElement("div");

  line.classList.add("line");
  line.insertAdjacentHTML(
    "afterbegin",
    ` <div class='line'>
    <div class='cat-a'></div>
      <div class='cat-b'></div>
      <div class='mouse'></div>
        
      </div>
            `
  );
  document.body.appendChild(line);
  return line;
}
createLine();


const x = 4; const y = 3; const z = 5;
function pointRange(){
  const pointX = (500/10)*x-10;
  const pointY = (500/10)*y-10;
  const pointZ = (500/10)*z-10;

  const rX = document.querySelector('.cat-a').style.marginLeft = pointX + 'px';
  const rY = document.querySelector('.cat-b').style.marginLeft = pointY + 'px';
  const rZ = document.querySelector('.mouse').style.marginLeft = pointZ + 'px';
  console.log(rX);
  console.log(rY);
  console.log(rZ);
  return rX,rY,rZ;
  
}
pointRange();
















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




