import classNames from "classnames";

type TProps = {
	className?: string
	count: number
}

export const Stock: React.FC<TProps> = ({ count, className, }: TProps): JSX.Element => {

	let stockClasses = "";
	let title = "";

	if (count > 0) {
		title = "В наличии";
		stockClasses = "in-stock";
	} else {
		title = "Нет в наличии (под заказ)";
		stockClasses = "no-stock";
	}

	const classes = classNames("product-cart__stock", `product-cart__stock--${stockClasses}`, className);
 
	return (
		<div className={classes}>{title}</div>
	);
};