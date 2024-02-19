// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

    // Объявляем переменную для счетчика
    let counter;

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		// Находим обертку счетчика
		const counterWrapper = event.target.closest('.counter-wrapper');
		// Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Минус
	if (event.target.dataset.action === 'minus') {

		//Проверка на товар в корзине 
		if (event.target.closest('.cart_wrapper') && parseInt(counter.innerText) === 1) {
			// Удаляем товар из корзины
			event.target.closest('.cart_item').remove();
			
		} else if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		}

		calcCartPrice();
	}

	if (event.target.hasAttribute('data-action') && event.target.closest('.cart_wrapper')) {
		calcCartPrice();
	}
});