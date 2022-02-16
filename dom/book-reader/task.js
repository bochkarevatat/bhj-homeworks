//Необходимо доработать интерфейс онлайн-читалки электронных книг с возможностью смены размера шрифта


let fontSizeAll = Array.from(document.getElementsByClassName("font-size"));
let book = document.querySelector('.book__content');
// console.log(fontSizeAll)

fontSizeAll.forEach(item => item.addEventListener("click", (ev) => {
    ev.preventDefault();
    
    let indxAciv = fontSizeAll.findIndex(value => value.classList.contains("font-size_active"))
    fontSizeAll[indxAciv].classList.remove("font-size_active")
    
    
    if (fontSizeAll[indxAciv].classList.contains("font-size_small")) {
        book.classList.remove("font-size_big")
        book.classList.add("font-size_small")
    } else if (fontSizeAll[indxAciv].classList.contains("font-size_big")) {
        book.classList.remove("font-size_small")
        book.classList.add("font-size_big")

    } else {
        book.classList.remove("font-size_big")
        book.classList.remove("font-size_small")
    };
    item.classList.add("font-size_active")
    // console.log("click")
   

}));