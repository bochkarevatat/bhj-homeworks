//удобное управление списком интересов для профиля пользователя


const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

// console.log(interestCheck)

interestCheck.forEach(item => {

    let parentCheck = item.closest('.interest');
    const allInterest = Array.from(parentCheck.querySelectorAll('.interest__check'));

    if (parentCheck.querySelector('.interests')) {
        item.addEventListener('change', () => {
            allInterest.forEach(element => {
                if (item.checked) {
                    element.checked = true;
                } else {
                    element.checked = false;
                };

            });

        });
    };
});