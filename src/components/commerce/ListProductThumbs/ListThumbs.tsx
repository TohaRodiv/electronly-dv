import React from "react";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import { Thumb } from "./Thumb";
import { ProductDTO } from "#types/DTO";
import classNames from "classnames";


type TProps = {
	products: ProductDTO[]
	className?: string
} & HTMLElementAttributes <HTMLUListElement>

export const ListThumbs: React.FC<TProps> = ({ products, className, ...ulProps }: TProps): JSX.Element => {
	const classes = classNames ("list-thumbs", className);
	return (
		<ul className={classes} {...ulProps}>
			{
				products && products.map((product, index) => (
					<li key={index} className="list-thumbs__item">
						<Thumb product={product} className="list-thumbs__thumb" />
					</li>
				))
			}
		</ul>
	);
};