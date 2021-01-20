class Slider {
    constructor(container, options) {
        this.options = {
            activeSlide: 3,
            showPoints: true,
            showButtons: true,
            loop: true
        }


        this.slides = container.querySelectorAll('.slide');

        this.createStructure(container);
        if (this.options.showButtons === true) {
            createButtons(container);
        }
        this.createItem = container.querySelector('.slider__item');
        this.wrapPoint = container.querySelector('.points_wrapper');

        for (const slide of this.slides) {
            if ((this.options.activeSlide) > this.slides.length) {
                this.createItem.appendChild(slide);
                this.createPoint(container);

            } else if (this.options.activeSlide) {
                this.activeSlide(this.options.activeSlide);
                this.createPoint(container)

            }
            this.createItem.appendChild(slide);
        }


        this.btnNext = container.querySelector('.item_next');
        this.btnPrev = container.querySelector('.item_prev');

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

    createStructure(container) {
        container.innerHTML =
            `
        <div class="slider">
            <div class="slider__item">
            </div>
            <div class="points_wrapper">
                
            </div>
        </div>
        `
    }



    createPoint(container) {
        const point = document.createElement('div');
        if (this.options.showPoints === true) {
            point.classList.add('point');
            this.wrapPoint.appendChild(point);
        } else point.classList.remove('point');

    }

    createButtons(container) {
        container.innerHTML =
            `
        <div class="buttons">
                <button class="item_prev" type="button"></button>
                <button class="item_next" type="button"></button>
            </div>
    `
    }




}