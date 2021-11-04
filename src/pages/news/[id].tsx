import Head from "next/head";
import { Section, SectionHead, } from "#skeleton/Section";
import { Container } from "react-grid-system";
import { NextPage, NextPageContext } from "next";
// import { news } from "#data/news";
import { BlogArticle } from "#types/DTO";
import { NewsService } from "#data-transfer-types/src/services/api/blog/NewsService";

type TProps = {
	news: BlogArticle
}

type TSProps = Promise <{
	props: TProps
}>

const News: NextPage <TProps> = ({ news }: TProps): JSX.Element => {

	return (
		<>
			<Head>
				<title>Новости</title>
			</Head>
			<Container>
				<Section>
					<SectionHead>{news.title}</SectionHead>
					<img src={news.image} alt={news.title} />
					<p>
						{news.content}
					</p>
				</Section>
			</Container>
		</>
	);
};

export default News;

export const getServerSideProps = async (ctx: NextPageContext): TSProps => {
	const props = {
		news: null,
	};

	const newsId = Number(ctx.query["id"]);

	if (isFinite (newsId)) {
		props.news = await NewsService.findById (newsId);
	}

	return {
		props,
	};
};