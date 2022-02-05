const click = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = () => {
    click.textContent = Number(click.textContent) + 1;

    let res = click.textContent % 2;
    if (res !== 0) {
        cookie.width = "250"

    } else {
        cookie.width = "200"
    }
};