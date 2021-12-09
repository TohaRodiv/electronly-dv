import { NextPage, NextPageContext } from "next";
import { ProductDTO } from "#types/DTO";
import { Section } from "#skeleton/Section";
import { Container } from "react-grid-system";
import { Button } from "#ui/Button";
import { ProductService } from "#data-transfer-types/src/services/api/shop/ProductService";
import { SyntheticEvent, useState } from "react";
import { formToJSON } from "#data-transfer-types/src/libs/formToJSON";
import { OrderService } from "#data-transfer-types/src/services/frontend-api/OrderService";
import type { CreateOrderDTO } from "#data-transfer-types/src/services/api/shop/dto/CreateOrderDTO";
import InputMask from "react-input-mask";

type TProps = {
	product: ProductDTO | null;
}

type TSProps = Promise<{
	props: TProps;
}>

const QuickOrder: NextPage<TProps> = ({ product, }: TProps): JSX.Element => {

	const [state, setState] = useState({
		isResponseReceived: false,
		message: null,
	});

	const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const dto = formToJSON(form.elements) as CreateOrderDTO;

		const { error } = await OrderService.createAndSave(dto);

		if (error) {
			setState({
				isResponseReceived: true,
				message: error.message,
			});
		} else {
			setState({
				isResponseReceived: true,
				message: "Ваша заявка успешно отправленна!",
			});
		}
	};

	return (
		<Section>
			<Container>
				{
					state.isResponseReceived && <p>{state.message}</p>
				}

				<form action="" method="POST" className="form" onSubmit={handleSubmit}>
					<input type="hidden" name="status" value={1} />
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
								<InputMask mask="+7 (999) 999-99-99" className="form__field" required={true} name="tel" type="text" />
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
								<span className="form__name">Товары</span>
								<select multiple={true} disabled={true} name="products" defaultValue={[product.id]}>
									<option value={product.id}>{product.name}</option>
								</select>
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

export async function getServerSideProps(ctx: NextPageContext): TSProps {
	const productId = +ctx.query["id"];

	const props = {
		product: null,
	};

	if (isFinite(productId)) {
		props.product = (await ProductService.findById(productId)).payload;
	}

	return { props };
}

export default QuickOrder;