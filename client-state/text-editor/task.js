const editor = document.querySelector('#editor');

pasteText()

function textEditor() {
    localStorage.text = editor.value;
};

function pasteText() {
    if (localStorage.text) {
        editor.value = localStorage.getItem('text');
    }
}
editor.addEventListener('input', textEditoEditor);