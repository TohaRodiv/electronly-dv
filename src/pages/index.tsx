import { NextPage } from "next";
import Head from "next/head";
import { Section, SectionHead, } from "#skeleton/Section";
import { Container } from "react-grid-system";
import { TopSlider } from "#commerce/TopSlider";
import React from "react";
import { ListThumbs } from "#commerce/ListProductThumbs";
import { NewsList } from "#commerce/News";
import { NewsService } from "../services/api/blog/NewsService";
import { ProductService } from "../services/api/shop/ProductService";
import { BannerService } from "../services/api/promo/BannerService";

type TProps = {
	news: any,
	products: any,
	banners: any,
}

type TSprops = Promise<{
	props: TProps
}>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: NextPage<TProps> = ({ news, products, banners, }: TProps) => {

	return (
		<>
			<Head>
				<title>Electronly - магазин цифровой техники по низким ценам</title>
			</Head>
			{banners && banners.length > 0 &&
				<TopSlider slides={banners} />
			}

			{products && products.length > 0 &&
				<Section>
					<Container>
						<SectionHead>Наши товары</SectionHead>
						<ListThumbs products={products} />
					</Container>
				</Section>
			}

			{news && news.length > 0 &&
				<Section>
					<Container>
						<SectionHead>Новости</SectionHead>
						<NewsList news={news} />
					</Container>
				</Section>
			}
		</>
	);
};

export default Home;


export async function getServerSideProps(): TSprops {

	const props = {
		news: null,
		products: null,
		banners: null,
	};

	try {
		props.news = await NewsService.getMany();
		props.products = await ProductService.getMany();
		props.banners = await BannerService.getMany();
	}
	catch (e) {
		console.error(e);
	}

	return {
		props,
	};
}
