import { TMenu } from "#types/TMenu";
import React, { ReactNode } from "react";
import { TPropsComponent } from "./TPropsComponent";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import { categories } from "#data-transfer-types/src/data/categories";
import { ShopCategoryService } from "#data-transfer-types/src/services/frontend-api/ShopCategoryService";

type TProps = {
	menu: {
		main: TMenu
		catalog: typeof categories
	}
} & HTMLElementAttributes <HTMLElement>

type TState = {
	isActiveMenu: boolean
	catalogMenu: typeof categories
}

export const Container = (Component: React.ComponentType <TPropsComponent>): React.ComponentType <TProps> =>
	class HeaderContainer extends React.Component<TProps, TState> {
		state: TState = {
			isActiveMenu: false,
			catalogMenu: null,
		}

		async componentDidMount(): Promise<void> {
			const links = document.querySelectorAll(".menu-view a");

			links.forEach(link => {
				link.addEventListener("click", () => {
					this.setState({ isActiveMenu: false });
				});
			});

			const categories = (await ShopCategoryService.getMany()).payload.filter(category => category.active == true);
			this.setState(prevState => ({
				...prevState,
				catalogMenu: categories,
			}));
		}

		handleToggleMenu = () => {
			this.setState({ isActiveMenu: !this.state.isActiveMenu });
		}

		render(): ReactNode {

			const { menu, ...extraProps } = this.props;
			menu.catalog = this.state.catalogMenu || menu.catalog;
			const { isActiveMenu, } = this.state;

			return (
				<Component
					data={{ menu, isActiveMenu, }}
					handlers={{toggleMenu: this.handleToggleMenu}}
					{...extraProps } />
			);
		}
	};