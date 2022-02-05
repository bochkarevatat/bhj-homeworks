const link = Array.from(document.querySelectorAll('.menu__link'))
let parent;
let toggle = null;

for (let i = 0; i < link.length; i++) {

    link[i].onclick = () => {

        parent = link[i].parentElement.querySelector('.menu_sub')
        parent.classList.toggle('menu_active');

        // if (parent){
        //     parent === toggle;
        //     toggle.classList.remove('menu_active');

        // } 

        
        return false;
    };

    
};