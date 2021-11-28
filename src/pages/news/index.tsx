import Head from "next/head";
import { Section, SectionHead, } from "#skeleton/Section";
import { Container } from "react-grid-system";
import { NextPage, NextPageContext } from "next";
import { NewsList } from "#commerce/News";
import { BlogArticle } from "#types/DTO";
import { NewsService } from "#data-transfer-types/src/services/api/blog/NewsService";

type TProps = {
	news: BlogArticle[]
}

type TSProps = Promise<{
	props: TProps
}>

const NewsIndex: NextPage<TProps> = ({ news }: TProps): JSX.Element => {

	return (
		<>
			<Head>
				<title>Новости</title>
			</Head>
			<Container>
				<Section>
					<SectionHead>Новости</SectionHead>
					<NewsList news={news} />
				</Section>
			</Container>
		</>
	);
};

export default NewsIndex;

export const getServerSideProps = async (_ctx: NextPageContext): TSProps => {
	const props = {
		news: null,
	};
	
	props.news = (await NewsService.getMany()).payload;

	return {
		props,
	};
};