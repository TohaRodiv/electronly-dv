import { THOCArgs } from "#data-transfer-types/src/types/THOCArgs";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";

export type TPropsComponent = THOCArgs & HTMLElementAttributes <HTMLDivElement> & {
	data: {
		product: any
	}

	handlers: {
		// todo
	}
}