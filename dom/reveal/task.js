//Необходимо реализовать механизм появления блоков в тот момент, когда прокрутка дойдёт до них

const reveal = Array.from(document.getElementsByClassName('reveal'));
let windowHeight = window.innerHeight
console.log(window.innerHeight)


window.addEventListener('scroll', isVisible)

function isVisible() {
    reveal.forEach(item => {
        let top = item.getBoundingClientRect().y;

        console.log(top)
        if (top < windowHeight && top > 0) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        };
    });

};