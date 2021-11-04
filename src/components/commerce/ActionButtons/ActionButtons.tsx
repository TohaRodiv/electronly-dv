import classNames from "classnames";
import { Link } from "#ui/Link";
import { ProductDTO } from "#data-transfer-types/src/types/DTO";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";

type TProps = {
	className?: string
	product: ProductDTO
} & HTMLElementAttributes <HTMLDivElement>

export const ActionButtons: React.FC<TProps> = ({ product, className, }: TProps): JSX.Element => {
	const classes = classNames("action-buttons", className);

	const quickOrderPath = `/quick-order/${product.id}`;

	return (
		<div className={classes}>
			{
				product.count > 0 ? (
					<Link href={quickOrderPath} className="btn action-buttons__btn action-buttons__btn-buy">
						Купить
					</Link>
				) : (
					<Link href={quickOrderPath} className="btn action-buttons__btn action-buttons__btn-order">
						Заказать
					</Link>
				)
			}
		</div>
	);
};