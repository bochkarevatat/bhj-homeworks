//Необходимо доработать интерфейс онлайн-читалки электронных книг с возможностью смены размера шрифта

let fontSizeAll = Array.from(document.getElementsByClassName("font-size"));
let book = document.querySelector('.book');
// console.log(book)

fontSizeAll.forEach(item => item.addEventListener("click", (ev) => {
    ev.preventDefault();
        let indAciv = fontSizeAll.findIndex(item => item.classList.contains("font-size_active"))
        fontSizeAll[indAciv].classList.remove("font-size_active")
        item.classList.add("font-size_active")
        if (fontSizeAll[indAciv].classList.contains("font-size_small")) {
            book.classList.remove("font-size_big")
            book.classList.add("font-size_small")
        } else if (fontSizeAll[indAciv].classList.contains("font-size_big")) {
            book.classList.remove("font-size_small")
            book.classList.add("font-size_big")

        } else {
            book.classList.remove("font-size_big")
            book.classList.remove("font-size_small")
        };
        // console.log("click")
        return false
    
}));

