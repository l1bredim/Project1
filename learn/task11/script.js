const btnNext = document.querySelector('.item_next'),
      btnPrev = document.querySelector('.item_prev'),
      slides = document.querySelectorAll('.slide');

let index = 0;

function activeSlide(item) {
  for(slide of slides) {
    slide.classList.remove('active')
  }
  slides[item].classList.add('active');
}

function nextSlide() {
  if (index == slides.length-1) {
    index = 0;
    activeSlide(index);
  } else {
    index++
    activeSlide(index);
  }
}

function prevSlide() {
  if (index == 0) {
    index = slides.length-1;
    activeSlide(index);
  } else {
    index--
    activeSlide(index);
  }
}


btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);


setInterval(nextSlide,2000);