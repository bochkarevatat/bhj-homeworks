// Необходимо разработать простейший текстовый редактор, который 
// будет сохранять своё значение даже после перезагрузки страницы.

document.querySelector('#editor').addEventListener('input', () => {
    localStorage.text = editor.value;
});
editor.value = localStorage.getItem('text');