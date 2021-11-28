import React from "react";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import { Link } from "#ui/Link";
import { ActionButtons } from "#commerce/ActionButtons/ActionButtons";
import { ProductPrice } from "#commerce/ProductPrice";
import classNames from "classnames";


type TProps = {
	product: any
	className?: string
} & HTMLElementAttributes <HTMLDivElement>

export const Thumb: React.FC<TProps> = ({ product, className, ...divProps }: TProps): JSX.Element => {

	if (!product) return null;

	const href = `/product/${product.id}`;

	const classes = classNames ("product-thumb", className);
	/**
	 * TODO: Доработать получение изображений товара
	 */
	const firstImage = product.images.length > 0 ? product.images[0].path : product.image;

	return (
		<div className={classes} {...divProps}>
			<Link href={href} className="product-thumb__image-wrapper">
				<img
					src={firstImage}
					alt={product.name}
					className="product-thumb__image" />
			</Link>
			<div className="product-thumb__body">
				<h3 className="product-thumb__head">
					<Link href={href} className="product-thumb__head-link">
						{product.name}
					</Link>
				</h3>
				<ProductPrice price={product.price} className="product-thumb__prices" />
				<ActionButtons product={product} className="product-thumb__action-buttons" />
			</div>
		</div>
	);
};