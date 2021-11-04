import classNames from "classnames";
import {TMenu} from "#types/TMenu";
import {Link} from "#ui/Link";
import React from "react";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";

type TProps = {
	menu: TMenu
	className?: string
} & HTMLElementAttributes <HTMLUListElement>

export const MainMenu: React.FC<TProps> = ({menu, className, ...ulProps}: TProps): JSX.Element => {

	const classes = classNames("main-menu", className);

	return (

		menu.length ? (
			<ul className={classes} {...ulProps}>
				{
					menu.map(item => (
						<li key={item.path} className="main-menu__item">
							<Link href={item.path} className={"main-menu__link"}>
								{item.title}
							</Link>
						</li>
					))
				}
			</ul>
		) : null

	);
};