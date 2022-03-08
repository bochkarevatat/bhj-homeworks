//механизм добавления товаров в корзину


const productQuantityControl = Array.from(document.getElementsByClassName('product__quantity-control'));
const minus = document.querySelectorAll('.product__quantity-control_dec')
const plus = document.querySelectorAll('.product__quantity-control_inc')
const productAdd =  Array.from(document.getElementsByClassName('product__add'));
const cartProducts = document.querySelector('.cart__products')

// console.log(minus)

minus.forEach((item, i) => {

    minus[i].addEventListener('click', () => {
        if (item.classList.contains('product__quantity-control_dec')) {

            minus[i].nextElementSibling.textContent > 0 ? minus[i].nextElementSibling.textContent-- : minus[i].nextElementSibling.textContent = 0;

        }
    })

});

plus.forEach((item, u) => {

    plus[u].addEventListener('click', () => {
        if (item.classList.contains('product__quantity-control_inc')) {

            plus[u].previousElementSibling.textContent++;


        }
    })

});


productAdd.forEach((item, b) => {

    
    productAdd[b].addEventListener('click', (e) => {
 
        const id = item.closest('.product').dataset.id;
        const img = item.closest('.product').children[1].getAttribute('src')
        const value = item.parentElement.querySelector('.product__quantity-value').innerText;
        const cartProduct = Array.from(document.getElementsByClassName('cart__product'))
        const elemProduct = cartProduct.find((elem) => {
                        return elem.dataset.id === id;
                    }); 

            cartProducts.insertAdjacentHTML('beforeEnd', `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${value}</div>
            </div>`);
            
            if (elemProduct) {
                elemProduct.remove()
              
            }
    });

        
 });
 


