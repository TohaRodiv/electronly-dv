import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { Section } from "#skeleton/Section";
import { Container } from "react-grid-system";
import orders from "#data/orders.json";
import { AdminOrders } from "#data-transfer-types/src/components/commerce/AdminOrders";

type TProps = {
	isLogin: boolean;
};

type TSProps = {
	props: TProps,
}

const Orders: NextPage<TProps> = ({isLogin}: TProps): JSX.Element => {
	if (!isLogin) {
		return null;
	}

	return (
		<>
			<Head>
				<title>Просмотр заказов</title>
			</Head>
			<Container>
				<Section>
					<AdminOrders orders={orders} />
				</Section>
			</Container>
		</>
	);
};

export const getServerSideProps = async (ctx: NextPageContext): Promise<TSProps> => {

	const props = {
		isLogin: ctx.query["next_token"] == "f834r93urdsjfklsdfjsdhfw32"
	};
	return { props };
};

export default Orders;