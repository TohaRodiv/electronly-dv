import { Link } from "#ui/Link";
import { Container, } from "react-grid-system";
import type { TMenu } from "#types/TMenu";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import classNames from "classnames";
import { categories } from "#data-transfer-types/src/data/categories";


type TProps = {
	menu: {
		main: TMenu
		catalog: typeof categories
	}
} & HTMLElementAttributes <HTMLElement>

export const Footer: React.FC<TProps> = ({ menu, className, ...footerProps}: TProps): JSX.Element => {

	return (
		<footer className={classNames("footer", className)} {...footerProps}>
			<Container className="footer__container">
				<div className="footer__row">
					<div className="footer__col">
						<h3 className="footer__head">Каталог</h3>
						<ul className="footer-menu footer__menu">
							{
								menu.catalog.map((item, index) => (
									<li key={index} className="footer-menu__item">
										<Link href={`/catalog/${item.id}`} className="footer-menu__link">{item.title}</Link>
									</li>
								))
							}
						</ul>
					</div>
					<div className="footer__col">
						<h3 className="footer__head">Меню</h3>
						<ul className="footer-menu footer__menu">
							{
								menu.main.map((item, index) => (
									<li key={index} className="footer-menu__item">
										<Link href={item.path} className="footer-menu__link">{item.title}</Link>
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</Container>
			<div className="footer__copyright">
				<Container>
					&copy;{(new Date()).getFullYear()} <strong>Electronly</strong>
				</Container>
			</div>
		</footer>
	);
};