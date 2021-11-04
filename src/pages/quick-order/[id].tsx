import {NextPage, NextPageContext} from "next";
import { ProductDTO } from "#types/DTO";
import {Section} from "#skeleton/Section";
import {Container} from "react-grid-system";
import {Button} from "#ui/Button";
import { ProductService } from "#data-transfer-types/src/services/api/shop/ProductService";
import { SyntheticEvent } from "react";

type TProps = {
	product: ProductDTO | null;
}

type TSProps = Promise <{
	props: TProps;
}>

const QuickOrder: NextPage <TProps> = ({ product, }: TProps): JSX.Element => {

	const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
		/**
		 * TODO: Доработать заказ товара
		 */
		e.preventDefault();
		const target = e.currentTarget;
		const data = new FormData(target);

		await fetch("/api/order", {
			body: data,
			method: "POST",
		});
	};

	return (
		<Section>
			<Container>
				<form action="" method="POST" className="form" onSubmit={handleSubmit}>
					<input type="hidden" name="productId" value={product.id} />
					<input type="hidden" name="productName" value={product.name} />
					<h2 className="form__head">Оформление быстрого заказа</h2>
					<div className="form__row">
						<div className="form__col">
							<label className="form__label">
								<span className="form__name">Имя</span>
								<input type="text" className="form__field" name="fio" />
							</label>
						</div>

						<div className="form__col">
							<label className="form__label">
								<span className="form__name">Телефон</span>
								<input type="text" className="form__field" required={true} name="tel" />
							</label>
						</div>

						<div className="form__col">
							<label className="form__label">
								<span className="form__name">E-mail</span>
								<input type="email" className="form__field" required={false} name="email" />
							</label>
						</div>

						<div className="form__col">
							<label className="form__label">
								<span className="form__name">Название товара</span>
								<input type="text" className="form__field" disabled={true} value={product.name} />
							</label>
						</div>

						<div className="form__col">
							<label className="form__label">
								<span className="form__name">Комментарий</span>
								<textarea className="form__field" name="comment"></textarea>
							</label>
						</div>

						<div className="form__col">
							<Button variant="default">Отправить</Button>
						</div>
					</div>
				</form>
			</Container>
		</Section>
	);
};

export async function getServerSideProps (ctx: NextPageContext): TSProps {
	const productId = Number(ctx.query["id"]);

	const props = {
		product: null,
	};

	if (isFinite(productId)) {
		props.product = await ProductService.findById(productId);
	}

	return { props };
}

export default QuickOrder;