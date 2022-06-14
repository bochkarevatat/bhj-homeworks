// Необходимо реализовать всплывающее окно, которое появляется только один раз
const subscribeModal = document.querySelector('#subscribe-modal');
function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}
const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(e => e.startsWith(name + '='));
    return cookie ? decodeURIComponent(cookie.substr((name + '=').length)) : null;
}
const closeModal = (e) => {
    if (e.target.classList.contains('modal__close')) {
        subscribeModal.classList.remove('modal_active');
        document.cookie = "modalclose=true";
    }
} 
if (getCookie('modalclose')) {
    subscribeModal.classList.remove('modal_active');
    subscribeModal.removeEventListener('click', closeModal);
} else {
    subscribeModal.classList.add('modal_active');
}
subscribeModal.addEventListener('click', closeModal);

console.log(document.cookie)
