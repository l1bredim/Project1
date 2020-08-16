//CREATE POINT + LINE
function createLine(options) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.insertAdjacentHTML(
    "afterbegin",
    `
    <div class='line'>
         <div class='cat-a'>A</div>
         <div class='cat-b'>B</div>
         <div class='mouse'>M</div>
    </div>         
    `
  );
  document.body.appendChild(line);
  return line;
}


//POINT MARGIN INLINE
const x = 7, y = 8, z = 7;
function pointRange(){
  const pointX = (500/10)*x-10;
  const pointY = (500/10)*y-10;
  const pointZ = (500/10)*z-10;

  const rX = document.querySelector('.cat-a').style.marginLeft = pointX + 'px';
  const rY = document.querySelector('.cat-b').style.marginLeft = pointY + 'px';
  const rZ = document.querySelector('.mouse').style.marginLeft = pointZ + 'px';
  return rX,rY,rZ;
  // return pointX, pointY, pointZ;
  
}
//WINNER + CHANGE BACKGROUNDCOLOR

function winner() {
  const catADistance = Math.abs(x - z);
  const catBDistance = Math.abs(y - z);
  if ((catADistance < catBDistance) || (x == z)) {
    {
      return document.querySelector('.cat-a').style.background = '#02F322';
    }
  } else if ((catBDistance < catADistance) || (y == z)) {
    return document.querySelector('.cat-b').style.background = '#02F322';
  }
  return document.querySelector('.mouse').style.background = '#02F322';
}


createLine();
pointRange();
winner();

