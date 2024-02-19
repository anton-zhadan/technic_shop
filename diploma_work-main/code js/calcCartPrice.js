function calcCartPrice() {
	const cartItems = document.querySelectorAll('.cart_item');
    
    let totalPrice = 0;
    const totalPriceEl = document.querySelector('.total_price');
    

    cartItems.forEach(function (item) {
       const amountEl = item.querySelector('[data-counter]');
       const priceEl = item.querySelector('.bold_text_price_recent_products'); 

       const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
       totalPrice += currentPrice;
    })

    console.log(totalPrice);
    totalPriceEl.innerText = totalPrice;
}