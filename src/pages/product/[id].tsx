import { Container, } from "react-grid-system";
import { NextPage, NextPageContext } from "next";
import { Section } from "#skeleton/Section";
import { CardProduct } from "#commerce/CardProduct";
import { ProductService } from "#data-transfer-types/src/services/api/shop/ProductService";


type TProps = {
	product: any
}

type TSProps = Promise<{
	props: TProps
}>


const Product: NextPage<TProps> = ({ product, }: TProps): JSX.Element => {

	return (

		<Section>
			<Container>

				{ product ? <CardProduct product={product} /> : <h3>Извините, но такого товара не существует.</h3> }

			</Container>
		</Section>
	);
};

export default Product;


export const getServerSideProps = async (ctx: NextPageContext): TSProps => {
	const productId = +ctx.query["id"];

	const props = {
		product: null,
	};

	if (isFinite(productId)) {
		props.product = (await ProductService.findById(productId)).payload;
	}

	return { props };
};