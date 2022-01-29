const timer = document.getElementById('timer');
let timerInt;

function contDown() {
    if (Number(timer.textContent) > 0) {
        timer.textContent = Number(timer.textContent) - 1;

    }
    if (Number(timer.textContent) < 0) {

        clearInterval(timerInt)
    };

};

timerInt = setInterval(contDown, 1000);
setTimeout(() => {
    alert('Вы победили в конкурсе');
}, 60000)