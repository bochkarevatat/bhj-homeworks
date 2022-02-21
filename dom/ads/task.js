//Необходимо реализовать механизм смены текстовых объявлений. Каждое объявление меняется через 1 секунду.
const rotatorAll = Array.from(document.getElementsByClassName('rotator__case'));

// console.log(rotatorAll)

function changeElements() {

    setInterval(() => {

        rotatorAll.forEach((item) => {

            if (item.classList.contains('rotator__case_active')) {

                item.classList.remove('rotator__case_active');
            };

        })
        
        let idx = Math.floor(Math.random() * (rotatorAll.length));
        rotatorAll[idx].classList.add('rotator__case_active')
    }, 1000)

};

changeElements()