import { IStorageRepository } from "#repositories/interfaces/IStorageRepository";
import { NewsRepository } from "#repositories/local/blog/NewsRepository";

export const NewsService = new class {
	protected repository: IStorageRepository;

	constructor () {
		this.repository = new NewsRepository();
	}

	public async getMany(options: any = {}) {
		return await this.repository.findMany(options);
	}

	public async findById(id: number) {
		return await this.repository.findById(id);
	}
};