const slider = Array.from(document.getElementsByClassName('slider__item'))

const arrowLeft = document.querySelector('.slider__arrow_prev')

const arrowRight = document.querySelector('.slider__arrow_next')

let sliderIndex;

arrowRight.onclick = () => {

    
    sliderIndex = slider.findIndex(item => item.className === 'slider__item slider__item_active');
    console.log(sliderIndex)
    console.log(slider);
    

    if (sliderIndex == slider.length - 1) {
        slider[0].classList.add('slider__item_active')
        
    };
    
    slider[sliderIndex].classList.remove('slider__item_active')
    
    slider[sliderIndex + 1].classList.add('slider__item_active')
    
    slider[sliderIndex].classList.remove('slider__item_active')

};

arrowLeft.onclick = () => {

    
    sliderIndex = slider.findIndex(item => item.className === 'slider__item slider__item_active');
    console.log(sliderIndex)
    console.log(slider);
    

    if (sliderIndex == slider.length - 1) {
        slider[0].classList.add('slider__item_active')
        
    };
    
    slider[sliderIndex].classList.remove('slider__item_active')
    
    slider[sliderIndex + 1].classList.add('slider__item_active')
    
    slider[sliderIndex].classList.remove('slider__item_active')

};