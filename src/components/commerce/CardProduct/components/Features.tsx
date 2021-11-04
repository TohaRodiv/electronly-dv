import { FeatureDTO } from "#data-transfer-types/src/types/DTO";

type TProps = {
	features: FeatureDTO
}

function renderFeatures(features: FeatureDTO): JSX.Element[] {
	const featuresToRender = [];

	for (const feature in features) {
		featuresToRender.push(
			<li className="features__item" key={feature}>
				<span className="features__name">{feature}:</span>
				<span className="features__value">{features[feature]}</span>
			</li>
		);
	}

	return featuresToRender;
}

export const Features: React.FC<TProps> = ({ features, }: TProps): JSX.Element => {

	return (
		features ? (
			<>
				<h3 className="product-cart__features-head">Характеристики</h3>
				<ul className="product-cart__features features">
					{
						renderFeatures(features)
					}
				</ul>
			</>
		) : null
	);
};