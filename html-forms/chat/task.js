//Необходимо написать искусственный интелект чата

const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatInput = document.getElementById('chat-widget__input');
const allMassegers = document.querySelectorAll('.message');
const messageBot = [
    'Добрый день',
    'Где ваша совесть?',
    'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
    'Вы не купили не одного товара, что б так с нами разговаривать!',
    'Кто тут пишет еще?',
    'Мы нечего не будем вам продавать!',
    'Пока-пока'
];

//активация окна
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
});

// глухая беседа

chatInput.addEventListener('keypress', (event) => {


    if (event.key == 'Enter' && chatInput.value !== '') {
        messages.innerHTML += `
            <div class="message message_client"">
              <div class="message__time">${new Date().toTimeString().substr(0, 5)}</div>
              <div class="message__text">
               ${chatInput.value}
              </div>
            </div>
          `;
        chatInput.value = '';

        let randomIndex = Math.floor(Math.random() * messageBot.length);
        // console.log(randomIndex)
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${new Date().toTimeString().substr(0, 5)}</div>
          <div class="message__text">
           ${messageBot[randomIndex]}
          </div>
        </div>
      `;
    };

});