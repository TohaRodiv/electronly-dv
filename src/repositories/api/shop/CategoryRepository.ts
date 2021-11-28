import { IStorageRepository } from "../../interfaces/IStorageRepository";
import { TFindManyOptions } from "../../types";
import { BaseRepository } from "../BaseRepository";

export class CategoryRepository extends BaseRepository implements IStorageRepository {
	public async findMany(options: TFindManyOptions): Promise<any> {
		const { limit, } = options;
		
		const params =
			this.getQueryBuilder()
				.setLimit(limit || 10)
				.setFilter({ field: "active", operator: "$eq", value: true })
				.query();

		const res = await this.fetch(`/shop/categories/?${params}`);
		return res;
	}

	public async findById(id: number): Promise<any> {
		return await this.fetch(`/shop/categories/${id}`);
	}
}