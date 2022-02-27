//Всплывающая подсказка для элементов. Подсказка появляется после клика на элементе.

const a = Array.from(document.getElementsByClassName('has-tooltip'));


a.forEach(item => {
    item.insertAdjacentHTML("afterend", '<div class="tooltip" style="left: 0; top: 0"></div>')
    item.onclick = function () {
        item.nextElementSibling.classList.toggle('tooltip_active');
        item.nextElementSibling.textContent = item.title;
        item.nextElementSibling.style.left = `${item.getBoundingClientRect().left}px`;
        item.nextElementSibling.style.top = `${item.getBoundingClientRect().top + 25}px`;
        
        return false;
    }
});