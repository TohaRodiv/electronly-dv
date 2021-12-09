// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
import "#styles/style.scss";
import type { AppProps } from "next/dist/next-server/lib/router/router";
import type { TMenu } from "#types/TMenu";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { Layout } from "#skeleton/Layout";
import { mainMenu } from "#data/main-menu";
import { categories } from "#data/categories";
import NProgress from "nprogress";
import { useRouter } from "next/router";


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
	const router = useRouter();


	useEffect(() => {
		const handleStart = () => {
			NProgress.start();
		};

		const handleStop = () => {
			NProgress.done();
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);

	return (
		<Layout menu={menu}>
			<Component {...pageProps} />
		</Layout>
	);
};

export default Application;