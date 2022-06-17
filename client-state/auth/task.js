// Необходимо разработать форму авторизации, через которую пользователь может отправлять данные на сервер
//и получать ответ, а так же хранить данные о залогиневшемся пользователе.
const formSign = document.getElementById('signin');
const form = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
formSign.classList.add('signin_active');
signinBtn.addEventListener('click', sendForm);

function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', showData);
    xhr.send(formData);
    function showData(event) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.userId = response.user_id;
                formSign.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = response.user_id;

            } else {
                alert('Неверные логин или пароль');
            }
        };
    };
};
function init() {
    if (localStorage.userId) {
        formSign.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    }
}
init();