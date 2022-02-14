const tabAll = Array.from(document.getElementsByClassName('tab'));
const tabContentAll = Array.from(document.getElementsByClassName('tab__content'))

function openElements() {

    tabAll.forEach(item => {

        if (item.classList.contains('tab_active')) {
            item.classList.remove('tab_active');
            tabContentAll[tabAll.indexOf(item)].classList.remove('tab__content_active');
        };
    
    });

    this.classList.add('tab_active');
    tabContentAll[tabAll.indexOf(this)].classList.add('tab__content_active');
 
    console.log("click")  
};

tabAll.forEach(item => item.addEventListener("click", openElements));
 
    
