import classNames from "classnames";

type TProps = {
	images: string[]
	alt: string
	className?: string
}

export const Images: React.FC<TProps> = ({ images, alt, className, }: TProps): JSX.Element => {
	const classes = classNames("product-cart__image-wrapper", className);
	return (
		images && (
			<div className={classes}>
				{
					images[0] && (
						<img src={images[0]} alt={alt} loading={"lazy"} className="product-cart__image" />
					)
				}
			</div>
		)
	);
};