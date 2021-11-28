import classNames from "classnames";
import { Link } from "../../ui/Link";

type TProps = {
	banner: {
		title: string
		subtitle?: string
		image: string
	}
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const TopBanner: React.FC<TProps> = ({ className, banner }): JSX.Element => {
	const classes = classNames("top-slider", className);
	const { title, subtitle, image } = banner;

	return (
		<div className={classes}>
			<div className="top-slider__slide">
				<div className="top-slider__body">
					{
						title && <h2 className="top-slider__head">{title}</h2>
					}

					{
						subtitle && <div className="top-slider__description">{subtitle}</div>
					}

					<div className="top-slider__btn-group">
						<Link href="/about" className="btn btn--dark top-slider__link">Подробнее</Link>
						<Link href="/catalog" className="btn btn--action top-slider__link">В каталог</Link>
					</div>
				</div>
				<img src={image} alt={title} className="top-slider__image" />
			</div>
		</div>
	);
};