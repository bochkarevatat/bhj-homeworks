// Необходимо разработать форму авторизации, через которую пользователь может отправлять данные на сервер
//и получать ответ, а так же хранить данные о залогиневшемся пользователе.
const formSign = document.getElementById('signin');
const form = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
formSign.classList.add('signin_active');

signinBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const URL = form.getAttribute("action");
    xhr.open('POST', URL);
    xhr.addEventListener("load", () => {
        if (xhr.response.success) {
            localStorage.userId = xhr.response.user_id;
            welcomeActive()
            userId.innerText = response.user_id;
        } else {
            alert('Неверные логин или пароль');
        }
        form.reset();
    });
    xhr.send(formData);
});

function welcomeActive() {
    if (localStorage.userId) {
        formSign.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    };
};


