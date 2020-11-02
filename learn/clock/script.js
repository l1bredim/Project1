const months = document.querySelector('.month');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function clock() {
    const month = new Date().getMonth() + 1;
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

   if (month < 10) {
       months.innerText = '0' + month;
    } else (months.innerText =  month);
    if (hour < 10) {
       
        hours.innerText = '0' + hour;
     } else (hours.innerText =  hour);
     if (min < 10) {
        minutes.innerText = '0' + min;
     } else (minutes.innerText =  min);
     if (sec < 10) {
        seconds.classList.add('red');
        seconds.innerText = '0' + sec;
     } else 
         
         { seconds.classList.remove('red');
             seconds.innerText =  sec};
}
clock();
setInterval(clock,1000);