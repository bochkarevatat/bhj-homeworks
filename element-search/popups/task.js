// окно #modal_main
const openPop = document.getElementById('modal_main');
openPop.classList.add('modal_active');

// закрытие активного окна по нажатию на его элемент с классом modal__close
const closePop = document.querySelectorAll('.modal__close_times');
for (let i = 0; i < closePop.length; i++){
closePop[i].onclick = function clossTimes() {
    this.closest('.modal').classList.remove('modal_active');
    
};

};


// нажатие на элемент с классом show-success появление окна #modal_success
const showSuccesss = document.querySelector('.show-success');
const modal = document.getElementById('modal_success')

showSuccesss.onclick = () => {
    openPop.classList.remove('modal_active')
    modal.classList.add('modal_active')
};

