const arrowHour= document.querySelector('.clock-arrow-h' );
const arrowMinute = document.querySelector('.clock-arrow-m' );
const arrowSecond = document.querySelector('.clock-arrow-s' );

function clockAnalog() {
   const degHour = 360/12;
   const degMin = 360/60;
   const degSec = 360/60;
   let day = new Date();
   const hour = day.getHours()*degHour;
   const min = day.getMinutes()*degMin;
   const sec = day.getSeconds()*degSec;
 
   arrowHour.style.transform =  'rotateZ('+(hour+degMin/2)+'deg';
   arrowMinute.style.transform =  'rotateZ(' + min +'deg';
   arrowSecond.style.transform =  'rotateZ('+ sec + 'deg';
}


clockAnalog();
setInterval(clockAnalog,1000);

