import { PropsWithChildren, } from "react";
import { Header } from "#skeleton/Header";
import { Footer } from "#skeleton/Footer";
import type { TMenu } from "#types/TMenu";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import classNames from "classnames";
import { categories } from "#data-transfer-types/src/data/categories";


type TLayoutProps = PropsWithChildren<{
	menu: {
		main: TMenu
		catalog: typeof categories
	}
}> & HTMLElementAttributes <HTMLElement>



export const Layout: React.FC<TLayoutProps> = ({ children, menu, className, ...mainProps }: TLayoutProps): JSX.Element => {
	
	return (
		<>
			<Header menu={menu} />
			<main className={classNames("main", className)} {...mainProps}>
				{children}
			</main>
			<Footer menu={menu} />
		</>
	);
};