


let openBasket = document.querySelector('.icon_basket');





let cart_for_products = document.querySelector('.cart_for_products');
let items_in_cart = document.querySelector('.cart_item');

let closeBtn = document.querySelector('.close_cart');

function closeCart () {
    cart_for_products.style.display = 'none';
}




function openCart() {
    
    
    cart_for_products.style.display = 'grid';
    cart_for_products.style.position = 'fixed';
    cart_for_products.style.width = '600px';
    cart_for_products.style.top = '100px';
    cart_for_products.style.left = '32%';
    cart_for_products.style.borderRadius = '10px';

    

}



openBasket.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);








const cartWrapper = document.querySelector('.cart_wrapper');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card');
        
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product_image').getAttribute('src'),
            title: card.querySelector('.title_always_in_style').innerText,
            price: card.querySelector('.bold_text_price_recent_products').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };


        // Проверка на наличие похожего товара в корзине, если есть, увеличиваем счетчик, если нет просто добавляем его
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            // Если товара нет в корзине

        

            const cartItemHTML = `
                                        <div class="cart_item">
                                            <div class="card block_with_column_price" data-id="${productInfo.id}">
                                            <img src="${productInfo.imgSrc}" class="product_image" alt="">
                                            <h2 class="title_always_in_style">${productInfo.title}</h2>
                                            <div>
                                                <span class="bold_text_price_recent_products">${productInfo.price}</span>
                                                <div class="items counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter>${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                `;

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

            
        }

        // Сброс счетчика при добавлении товара
        card.querySelector('[data-counter]').innerText = '1';


        calcCartPrice();
    }   
    
});




