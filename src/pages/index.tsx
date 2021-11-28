import { NextPage } from "next";
import Head from "next/head";
import { Section, SectionHead, } from "#skeleton/Section";
import { Container } from "react-grid-system";
import React from "react";
import { ListThumbs } from "#commerce/ListProductThumbs";
import { NewsList } from "#commerce/News";
import { NewsService } from "../services/api/blog/NewsService";
import { ProductService } from "../services/api/shop/ProductService";
import { BannerService } from "../services/api/promo/BannerService";
import { TopBanner } from "../components/commerce/TopBanner";

type TProps = {
	news: any,
	products: any,
	banners: any,
}

type TSprops = Promise<{
	props: TProps
}>


const Home: NextPage<TProps> = ({ news, products, banners, }: TProps) => {

	return (
		<>
			<Head>
				<title>Electronly - магазин цифровой техники по низким ценам</title>
			</Head>
			{banners && banners.length > 0 &&
				<TopBanner banner={banners[0]} />
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

	props.news = (await NewsService.getMany()).payload;
	props.products = (await ProductService.getMany()).payload;
	props.banners = (await BannerService.getMany()).payload;

	return {
		props,
	};
}
