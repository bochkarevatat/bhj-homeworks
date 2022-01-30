const killer = document.getElementById('dead')
const loser = document.getElementById('lost')




for (let index = 1; index < 10; index++) {
    const click = document.getElementById(`hole${index}`);
    click.onclick = function getHole( index ){
        if (click.className.includes('hole_has-mole')) {

            killer.textContent = Number(killer.textContent) + 1;


        } else {
            loser.textContent = Number(loser.textContent) + 1;
        };

        if (loser.textContent == 5 || killer.textContent == 10) {
            alert(`Game over!!!`);
            loser.textContent = 0;
            killer.textContent = 0;


        };

    };


};


