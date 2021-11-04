import React from "react";
import { Container, } from "react-grid-system";
import { Logo } from "#ui/Logo";
import { MenuView } from "#commerce/MenuView";
import { Link } from "#ui/Link";
import { Button } from "#ui/Button";
import { Icon } from "#ui/Icon";
import { MainMenu } from "#commerce/MainMenu";
import classNames from "classnames";

import type { TPropsComponent } from "./TPropsComponent";

export const Header: React.FC<TPropsComponent> = ({ 
	data: { menu, isActiveMenu },
	handlers,
	className,
	...headerProps
}: TPropsComponent): JSX.Element => (

	<header className={classNames("top-header", className)} {...headerProps}>
		<MenuView isActive={isActiveMenu} catalogMenu={menu.catalog} mainMenu={menu.main} />
		<Container className="top-header__container">
			<div className="top-header__row">

				<div className="top-header__col top-header__col-logo">
					<Logo />
				</div>

				<div className="top-header__col top-header__col-menu-btn">
					<Button className="btn top-header__btn" onClick={handlers.toggleMenu}>
						<Icon name={isActiveMenu ? "times" : "bars"} />
					</Button>
					
					<Link href={"/catalog"} className="btn btn--dark top-header__btn top-header__link-catalog">
						Каталог
					</Link>
				</div>

				<div className="top-header__col top-header__col-main-menu">
					<MainMenu menu={menu.main} />
				</div>

			</div>
		</Container>
	</header>

);