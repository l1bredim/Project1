class Slider {
    constructor(container, options) {



        let div = documnet.createElement('div');


        this.btnNext = container.querySelector('.item_next');
        this.btnPrev = container.querySelector('.item_prev');
        this.slides = container.querySelectorAll('.slide');
        this.points = container.querySelectorAll('.point');

        this.index = 0;
        this.points.forEach((item, indexPoint) => {
            item.addEventListener('click', () => {
                this.index = indexPoint;
                this.activePoint(this.index);
                this.activeSlide(this.index)
            })

        })

        this.btnNext.addEventListener('click', this.nextSlide.bind(this));
        this.btnPrev.addEventListener('click', this.prevSlide.bind(this));
    }
    nextSlide() {
        if (this.index === this.slides.length - 1) {
            this.index = 0;
            this.activeSlide(this.index);
            this.activePoint(this.index);

        } else {
            this.index++
            this.activeSlide(this.index);
            this.activePoint(this.index);

        }
    }
    prevSlide() {
        if (this.index === 0) {
            this.index = this.slides.length - 1;
            this.activeSlide(this.index);
            this.activePoint(this.index);
        } else {
            this.index--
            this.activePoint(this.index);
            this.activeSlide(this.index);
        }
    }
    activePoint(item) {
        for (const point of this.points) {
            point.classList.remove('active')
        }
        this.points[item].classList.add('active');
    }
    activeSlide(item) {
        for (const slide of this.slides) {
            slide.classList.remove('active')
        }
        this.slides[item].classList.add('active');
    }
}