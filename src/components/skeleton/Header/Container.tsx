import { TMenu } from "#types/TMenu";
import React, { ReactNode } from "react";
import { TPropsComponent } from "./TPropsComponent";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import { categories } from "#data-transfer-types/src/data/categories";

type TProps = {
	menu: {
		main: TMenu
		catalog: typeof categories
	}
} & HTMLElementAttributes <HTMLElement>

type TState = {
	isActiveMenu: boolean
}

export const Container = (Component: React.ComponentType <TPropsComponent>): React.ComponentType <TProps> =>
	class HeaderContainer extends React.Component<TProps, TState> {
		state: TState = {
			isActiveMenu: false,
		}

		componentDidMount(): void {
			const links = document.querySelectorAll(".menu-view a");

			links.forEach(link => {
				link.addEventListener("click", () => {
					this.setState({ isActiveMenu: false });
				});
			});
		}

		handleToggleMenu = () => {
			this.setState({ isActiveMenu: !this.state.isActiveMenu });
		}

		render(): ReactNode {

			const { menu, ...extraProps } = this.props;
			const { isActiveMenu, } = this.state;

			return (
				<Component
					data={{ menu, isActiveMenu, }}
					handlers={{toggleMenu: this.handleToggleMenu}}
					{...extraProps } />
			);
		}
	};