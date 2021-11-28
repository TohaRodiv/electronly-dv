import { TResultFetch } from "#repositories/types";
import { BaseAPIService } from "./BaseAPIService";

export const ShopCategoryService = new class extends BaseAPIService {
	async getMany(): Promise<TResultFetch<any>> {
		return await this.fetch("/shop/categories");
	}
};