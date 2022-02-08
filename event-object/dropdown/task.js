// Необходимо создать управление кнопкой с прикреплённым к ней выпадающим списком

const dropdownActive = document.querySelector('.dropdown__value');
const dropdownList= document.querySelector('.dropdown__list')
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));


function openElements (){
    dropdownList.classList.toggle('dropdown__list_active')
}


dropdownActive.addEventListener("click", openElements)


dropdownItem.forEach(item => item.addEventListener("click", () => {
    dropdownActive.textContent = item.textContent
})
);