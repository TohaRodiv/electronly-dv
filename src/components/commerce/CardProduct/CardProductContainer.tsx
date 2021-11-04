import { ProductDTO } from "#types/DTO";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import React, { ReactNode } from "react";
import { TPropsComponent } from "./TPropsComponent";


type TProps = {
	product: ProductDTO
} & HTMLElementAttributes <HTMLDivElement>

export const CardProductContainer = (CardProductComponent: React.ComponentType<TPropsComponent>): React.ComponentType<TProps> =>
	class Container extends React.Component <TProps> {
		render(): ReactNode {
			const { product, ...divProps } = this.props;
			return (
				<CardProductComponent
					data={{ product }}
					handlers={{}}
					{...divProps} />
			);
		}
	};