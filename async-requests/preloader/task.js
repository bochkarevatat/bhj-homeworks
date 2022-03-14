//нужно реализовать анимацию загрузки результата
const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
const requestUrl = 'https://netology-slow-rest.herokuapp.com'
xhr.open('GET', requestUrl);
xhr.responseType = 'json'
xhr.onload = () => {
    // console.log(xhr.response)
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let valute = xhr.response.response.Valute;
        // console.log(valute) 
        for (let index in valute) {
            items.insertAdjacentHTML('beforeEnd', `
            <div class="item">
                <div class="item__code">
                    ${valute[index].CharCode}
                </div>
                <div class="item__value">
                    ${valute[index].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`);
        };
    };
};
xhr.send();