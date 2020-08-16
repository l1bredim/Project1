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



const x = 6; const y = 2; const z = 3;
function pointRange(){
  const pointX = (500/10)*x-10;
  const pointY = (500/10)*y-10;
  const pointZ = (500/10)*z-10;

  const rX = document.querySelector('.cat-a').style.marginLeft = pointX + 'px';
  const rY = document.querySelector('.cat-b').style.marginLeft = pointY + 'px';
  const rZ = document.querySelector('.mouse').style.marginLeft = pointZ + 'px';
  return rX,rY,rZ;
  
}

function winner(x, y, z) {
  const catADistance = Math.abs(x - z);
  const catBDistance = Math.abs(y - z);
  if (catADistance < catBDistance) {
    {
      return document.querySelector('.cat-a').style.background = '#02F322';
    }
  } else if (catBDistance < catADistance) {
    return document.querySelector('.cat-b').style.background = '#02F322';
  }
  return document.querySelector('.mouse').style.background = '#02F322';
}


createLine();
pointRange();
winner();

