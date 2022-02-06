// Необходимо реализовать слайдер изображений с бесконечной сменой слайдов

const slider = Array.from(document.getElementsByClassName('slider__item'))

const arrowLeft = document.querySelector('.slider__arrow_prev')

const arrowRight = document.querySelector('.slider__arrow_next')



arrowRight.onclick = () => {

    let sliderIndex = slider.findIndex(item => item.className === 'slider__item slider__item_active');

    slider[sliderIndex].classList.remove('slider__item_active')

    sliderIndex == slider.length - 1 ? slider[0].classList.add('slider__item_active') : slider[sliderIndex + 1].classList.add('slider__item_active');

};

arrowLeft.onclick = () => {

    sliderIndex = slider.findIndex(item => item.className === 'slider__item slider__item_active');

    slider[sliderIndex].classList.remove('slider__item_active')

    sliderIndex == 0 ? slider[slider.length - 1].classList.add('slider__item_active') : slider[sliderIndex - 1].classList.add('slider__item_active');

};