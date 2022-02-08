//Необходимо реализовать двухуровневое навигационное меню. 
//При клике на пункт должны открываться подразделы

const link = Array.from(document.querySelectorAll('.menu__link'))
// const menuItem = Array.from(document.querySelectorAll('.menu__item'));

for (let i = 0; i < link.length; i++) {

    link[i].onclick = () => {
     
        let parent = link[i].parentElement.querySelector('.menu_sub')
        // parent.classList.toggle('menu_active');
       
        if (parent){
          parent.classList.toggle('menu_active'); 
          return false
        };
  
        
    };
    
};



