import { IStorageRepository } from "#repositories/interfaces/IStorageRepository";
import { NewsRepository } from "#repositories/api/blog/NewsRepository";
import { TResultFetch } from "#data-transfer-types/src/repositories/types";

export const NewsService = new class {
	protected repository: IStorageRepository;

	constructor () {
		this.repository = new NewsRepository();
	}

	public async getMany(options: any = {}): Promise<TResultFetch<any[]>> {
		return await this.repository.findMany(options);
	}

	public async findById(id: number): Promise<TResultFetch<any>> {
		return await this.repository.findById(id);
	}
};