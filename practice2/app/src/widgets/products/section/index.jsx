export const Section = ({ title, children }) => {
	return (
		<section>
			<h2 className="category-title">{title}</h2>
			<div className="products-grid">{children}</div>
		</section>
	);
};