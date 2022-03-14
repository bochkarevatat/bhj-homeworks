// система опросов с выбором ответа
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers')
const xhr = new XMLHttpRequest();
const requestUrl = 'https://netology-slow-rest.herokuapp.com/poll.php'
xhr.open('GET', requestUrl);
xhr.responseType = 'json';
xhr.onload = () => {
    console.log(xhr.response)
    if (xhr.readyState === xhr.DONE) {
        const title = xhr.response.data.title
        pollTitle.insertAdjacentHTML('afterEnd', `${title}`);
        const answer = xhr.response.data.answers;
        console.log(answer)
        answer.forEach(element => {
            pollAnswers.insertAdjacentHTML('afterEnd',
                `<button class="poll__answer">
               ${element}
             </button>`)
        });
        const button = Array.from(document.getElementsByClassName('poll__answer'))
        button.forEach(element => {
            // console.log(element)
            element.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    };
};
xhr.send();