const btnNext = document.querySelector('.item_next'),
      btnPrev = document.querySelector('.item_prev'),
      slides = document.querySelectorAll('.slide');
      points = document.querySelectorAll('.point');


let index = 0;

function activePoint(item) {
  for(point of points) {
    point.classList.remove('active')
  }
  points[item].classList.add('active');
}

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
    activePoint(index);

  } else {
    index++
    activeSlide(index);
    activePoint(index);

  }

}

function prevSlide() {
  if (index == 0) {
    index = slides.length-1;
    activeSlide(index);
    activePoint(index);
  } else {
    index--
    activePoint(index);
    activeSlide(index);
  }
}

points.forEach((item, indexPoint)=> {
  item.addEventListener('click', ()=> {
    index = indexPoint;
    activePoint(index);
    activeSlide(index)
  })
  
})
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);


