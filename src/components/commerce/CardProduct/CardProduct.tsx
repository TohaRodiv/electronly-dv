import { Row, Col, } from "react-grid-system";
import type { TPropsComponent } from "./TPropsComponent";
import classNames from "classnames";

import { Images } from "./components/Images";
import { Stock } from "./components/Stock";
import { Features } from "./components/Features";
import { ActionButtons } from "#commerce/ActionButtons/ActionButtons";
import { ProductPrice } from "#commerce/ProductPrice";


export const CardProduct: React.FC<TPropsComponent> = ({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	data: { product }, handlers, className, ...divProps
}: TPropsComponent): JSX.Element => {

	const classes = classNames ("product-cart", className);
	return (
		<div className={classes} {...divProps}>

			<h2 className="product-cart__head">
				{product.name}
			</h2>

			<form action="" method="POST">
				<Row>
					<Col sm={6}>
						<Images images={product.images.length > 0 ? product.images : [product.image]} alt={product.name} />
					</Col>

					<Col sm={6} className="product-cart__content">

						<ProductPrice price={product.price} className="product-cart__price" />

						<ActionButtons product={product} />

						<Stock count={product.count} />

						<Features features={product.features} />

					</Col>
				</Row>
			</form>
			<hr />
			
			{
				product.description && (
					<div className="product-cart__description">
						{product.description}
					</div>
				)
			}

		</div>
	);
};