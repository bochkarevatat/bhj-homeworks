//Необходимо доработать интерфейс онлайн-читалки электронных книг с возможностью смены размера шрифта


const fontSizeAll = Array.from(document.getElementsByClassName("font-size"));
const book = document.querySelector('.book__content');
console.log(fontSizeAll)

fontSizeAll.forEach(item => item.addEventListener("click", (event) => {
    event.preventDefault();
   
    fontSizeAll.forEach(elem => elem.classList.remove("font-size_active"))
         
    if (item.classList.contains("font-size_small")) {
        book.classList.remove("font-size_big")
        book.classList.add("font-size_small")
    } else if (item.classList.contains("font-size_big")) {
        book.classList.remove("font-size_small")
        book.classList.add("font-size_big")

    } else {
        book.classList.remove("font-size_big")
        book.classList.remove("font-size_small")
    };
    item.classList.add("font-size_active")
    
   
}));

