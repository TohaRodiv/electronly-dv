import { StorageRepositoryInterface } from "../../StorageRepositoryInterface";
import { TFindManyOptions } from "../../types";
import { BaseRepository } from "../BaseRepository";

export class PromoRepository extends BaseRepository implements StorageRepositoryInterface {
	public async findMany(options: TFindManyOptions): Promise<any> {
		const { limit, } = options;

		const params =
			this.getQueryBuilder()
				.setLimit(limit || 10)
				.setFilter({ field: "active", operator: "$eq", value: true })
				.query();

		return await this.fetch(`/shop/promos/banners/?${params}`);
	}

	public async findById(id: number): Promise<any> {
		return await this.fetch(`/shop/promos/banners/${id}`);
	}
}