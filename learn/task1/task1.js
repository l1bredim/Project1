//CREATE POINT + LINE

const CAT_A = 'Cat A';
const CAT_B = 'Cat B';
const MOUSE = 'Mouse';


function createLine(options) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.insertAdjacentHTML(
    "afterbegin",
    `
    <div class='line'>
         <div class='circle cat-a'></div>
         <div class='circle cat-b'></div>
         <div class='circle mouse'></div>
    </div>                
    `
  );
  document.body.appendChild(line);
  return line;
}


const x = 1, y = 3, z = 2;

function winner(x,y,z) {

  const catADistance = Math.abs(x - z);
  const catBDistance = Math.abs(y - z);
  if (catADistance < catBDistance) {
    {
      return CAT_A
    }
  } else if (catBDistance < catADistance){
    return CAT_B
  }
  return MOUSE
}


//MARGIN POINT + WINNER 
function pointRange(x,y,z) {
  const catA = document.querySelector('.cat-a');
  const catB = document.querySelector('.cat-b');
  const mouse = document.querySelector('.mouse');
  const line = document.querySelector('.line');
  const width = line.getBoundingClientRect().width;
  const radius = catA.getBoundingClientRect().width/2;
  const step = width/10;
  const pointX = step*x-radius;
  const pointY = step*y-radius;
  const pointZ = step*z-radius;
  catA.style.marginLeft = pointX + 'px';
  catB.style.marginLeft = pointY + 'px';
  mouse.style.marginLeft = pointZ + 'px';

  const win = winner(x,y,z);
  if (win === CAT_A) {
    catA.classList.add('winner');
  } 
  else if (win === CAT_B) {
    catB.classList.add('winner');
  }
  else {
    mouse.classList.add('winner')
  ;}
}

// // return document.querySelector('.cat-a').style.background = '#02F322';

// //POINT MARGIN INLINE
// 
// function pointRange(){
//   const pointX = (500/10)*x-10;
//   const pointY = (500/10)*y-10;
//   const pointZ = (500/10)*z-10;
  
//   const rX = document.querySelector('.cat-a').style.marginLeft = pointX + 'px';
//   const rY = document.querySelector('.cat-b').style.marginLeft = pointY + 'px';
//   const rZ = document.querySelector('.mouse').style.marginLeft = pointZ + 'px';
//   return rX,rY,rZ;
//   // return pointX, pointY, pointZ;
  
// }
//WINNER + CHANGE BACKGROUNDCOLOR

 createLine();
 pointRange(x,y,z);
// winner();

