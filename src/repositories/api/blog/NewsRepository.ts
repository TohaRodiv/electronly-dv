import { IStorageRepository } from "../../interfaces/IStorageRepository";
import { TFindManyOptions } from "../../types";
import { BaseRepository } from "../BaseRepository";

export class NewsRepository extends BaseRepository implements IStorageRepository {
	public async findMany(options: TFindManyOptions): Promise<any> {
		const {limit} = options;

		const params =
			this.getQueryBuilder()
				.setFilter({ field: "categoryId", operator: "$eq", value: 1 })
				.setLimit(limit || 10)
				.query();

		return await this.fetch(`/blog/articles/?${params}`);
	}

	public async findById(id: number): Promise<any> {
		const params =
			this.getQueryBuilder()
				.setFilter({ field: "categoryId", operator: "$eq", value: 1 })
				.query();

		return await this.fetch(`/blog/articles/${id}?${params}`);
	}
}