import React from 'react';

export const AddToCartButton = ({ inCart, onClick }) => (
	<button className="add-to-cart" data-in-cart={inCart ? 'true' : undefined} onClick={onClick}>
		{inCart ? 'Удалить из корзины' : 'В корзину'}
	</button>
);
