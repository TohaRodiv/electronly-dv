import { MouseEventHandler, } from "react";
import { THOCArgs } from "#types/THOCArgs";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import type { TMenu } from "#types/TMenu";
import { categories } from "#data-transfer-types/src/data/categories";

export type TPropsComponent = THOCArgs & {
	data: {
		menu: {
			main: TMenu
			catalog: typeof categories
		}
		isActiveMenu: boolean
	}

	handlers: {
		toggleMenu: MouseEventHandler
	}
} & HTMLElementAttributes <HTMLElement>