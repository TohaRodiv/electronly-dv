import { NextPage, NextPageContext } from "next";
import { Section } from "#skeleton/Section";
import { Container } from "react-grid-system";
import { ListThumbs, } from "#commerce/ListProductThumbs";
import { ListCategories } from "#commerce/ListCategories";
import { CategoryService } from "#data-transfer-types/src/services/api/shop/CategoryService";
import { ProductService } from "#data-transfer-types/src/services/api/shop/ProductService";

type TProps = {
	categories: any;
	products: any;
};

type TSProps = Promise<{
	props: TProps;
}>;

const Catalog: NextPage<TProps> = ({ categories, products, }: TProps) => {
	return (
		<Container>
			<Section>
				<ListCategories categories={categories} />
			</Section>
		
			<Section>
				<ListThumbs products={products} />
			</Section>
		</Container>
	);
};

export default Catalog;

export async function getServerSideProps(ctx: NextPageContext): TSProps {
	const props: TProps = {
		categories: null,
		products: null,
	};

	const categoryId = Number(ctx.query.id);
	
	try {

		if (!categoryId) {
			props.categories = await CategoryService.getMany();
			props.products = await ProductService.getMany();
		}
		else if (isFinite(categoryId) && categoryId > 0) {
			// props.categories = [await CategoryService.findById(categoryId)];
			props.categories = await CategoryService.getMany();
			props.products = await ProductService.findByCategoryId(categoryId);
		}

	} catch (e) {
		console.error("Error fetch catalog!", e);
	}

	return {
		props,
	};
}
