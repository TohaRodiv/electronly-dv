import React from "react";
import classNames from "classnames";
import { TMenu } from "#types/TMenu";
import { Link } from "#ui/Link";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import { categories } from "#data-transfer-types/src/data/categories";


type TProps = {
	menu: TMenu | typeof categories
	isCategories?: boolean
} & HTMLElementAttributes<HTMLUListElement>

export const GridMenu: React.FC<TProps> = ({ menu, isCategories, className, ...ulProps }: TProps): JSX.Element => {
	return (
		menu.length && (
			<ul className={classNames("grid-menu", className)} {...ulProps}>
				{
					menu.map(item => (
						<li key={isCategories ? `/catalog/${item["id"]}` : item.path} className={"grid-menu__item"}>
							<Link href={isCategories ? `/catalog/${item["id"]}` : item.path} className={"grid-menu__link"}>
								{item.title}
							</Link>
						</li>
					))
				}
			</ul>
		)
	);
};