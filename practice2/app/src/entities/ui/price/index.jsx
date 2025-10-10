const fmt = (v) => v.toLocaleString('ru-RU') + ' ₽';

export const Price = ({ price, discountPrice }) => {
	if (discountPrice) {
		return (
			<>
				<span className="price">{fmt(discountPrice)}</span>
				<span className="old-price">{fmt(price)}</span>
			</>
		);
	}
	return <span className="price">{fmt(price)}</span>;
};