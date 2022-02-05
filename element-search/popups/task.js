// окно #modal_main
const openPop = document.getElementById('modal_main');
openPop.classList.add('modal_active');

// закрытие активного окна по нажатию на его элемент с классом modal__close
const closePop = document.getElementsByClassName('modal__close');

closePop[0].onclick = () => {
    openPop.classList.remove('modal_active')
    // console.log("yes")
};

// нажатие на элемент с классом show-success появление окна #modal_success
const showSuccesss = document.querySelector('.show-success');
const modal = document.getElementById('modal_success')

showSuccesss.onclick = () => {
    openPop.classList.remove('modal_active')
    modal.classList.add('modal_active')
};

// закрытие активного окна по нажатию на его элемент с классом modal__close
closePop[2].onclick = () => {

    openPop.classList.remove('modal_active')
    modal.classList.remove('modal_active')
    // console.log("yes2")
};