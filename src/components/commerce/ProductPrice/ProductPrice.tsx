import classNames from "classnames";
import { getWithCurrency } from "#libs/currency";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";


type TProps = {
	price: number
	className?: string
} & HTMLElementAttributes <HTMLDivElement>

export const ProductPrice: React.FC<TProps> = ({ price, className, ...divProps }: TProps): JSX.Element => {
	// const classes = classNames("product-cart__price", className);
	const classes = classNames("product-price__primary", className);

	return (

		price && (<div className={classes} {...divProps}>{getWithCurrency(price)}</div>)

	);
};