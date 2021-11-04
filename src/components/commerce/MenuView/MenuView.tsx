import React, {ReactNode} from "react";
import classNames from "classnames";
import {TMenu} from "#types/TMenu";
import {Container} from "react-grid-system";
import {Section} from "#skeleton/Section";
import {GridMenu} from "#ui/GridMenu";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import { categories } from "#data-transfer-types/src/data/categories";

type TProps = {
	isActive: boolean
	catalogMenu: typeof categories
	mainMenu: TMenu
	className?: string
} & HTMLElementAttributes <HTMLElement>

export class MenuView extends React.Component<TProps> {

	render(): ReactNode {
		const {isActive, catalogMenu, mainMenu, ...navProps} = this.props;
		const classes = classNames("menu-view", this.props.className, {active: isActive});

		return (
			<nav className={classes} {...navProps}>
				<Container className="menu-view__wrapper">
					{
						catalogMenu.length && (
							<Section>

								<h2 className={"menu-view__head"}>Каталог</h2>
								<GridMenu menu={catalogMenu} isCategories={true} className={"menu-view__menu"}/>

							</Section>
						)
					}

					{
						mainMenu.length && (
							<Section>

								<h2 className={"menu-view__head"}>Главное меню</h2>
								<GridMenu menu={mainMenu} className={"menu-view__menu"}/>

							</Section>
						)
					}
				</Container>
			</nav>
		);
	}
}