import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "#styles/style.scss";
import type { AppProps } from "next/dist/next-server/lib/router/router";
import type { TMenu } from "#types/TMenu";
import { NextPage } from "next";
import React from "react";
import { Layout } from "#skeleton/Layout";
import { mainMenu } from "#data/main-menu";
import { categories } from "#data/categories";


type TProps = AppProps & {
	menu: {
		main: TMenu
		catalog: typeof categories
	}
}

const menu = {
	main: mainMenu,
	catalog: categories,
};


const Application: NextPage<TProps> = ({ Component, pageProps, }: TProps): JSX.Element => {

	return (
		<Layout menu={menu}>
			<Component {...pageProps} />
		</Layout>
	);
};

export default Application;