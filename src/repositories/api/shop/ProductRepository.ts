import { StorageRepositoryInterface } from "../../StorageRepositoryInterface";
import { TFindManyOptions } from "../../types";
import { BaseRepository } from "../BaseRepository";

export class ProductRepository extends BaseRepository implements StorageRepositoryInterface {
	public async findMany(options: TFindManyOptions): Promise<any> {
		const { limit, } = options;
		
		const params =
			this.getQueryBuilder()
				.setLimit(limit || 10)
				.setFilter({ field: "active", operator: "$eq", value: true })
				.query();

		const res = await this.fetch(`/shop/products/?${params}`);
		return res;
	}

	public async findById(id: number): Promise<any> {
		return await this.fetch(`/shop/products/${id}`);
	}

	public async findByCategoryId(categoryId: number): Promise<any> {
		const params =
			this.getQueryBuilder()
				.setFilter({ field: "categoryId", operator: "$eq", value: categoryId })
				.setFilter({ field: "active", operator: "$eq", value: true })
				.query();

		return await this.fetch(`/shop/products/?${params}`);
	}
}