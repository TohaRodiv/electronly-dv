import { IStorageRepository } from "#repositories/interfaces/IStorageRepository";
import { CategoryRepository } from "#repositories/api/shop/CategoryRepository";
import { TResultFetch } from "#data-transfer-types/src/repositories/types";


export const CategoryService = new class {
	protected repository: IStorageRepository;

	constructor() {
		this.repository = new CategoryRepository();
	}

	public async getMany(options: any = {}): Promise<TResultFetch<any[]>> {
		return await this.repository.findMany(options);
	}

	public async findById(id: number): Promise<TResultFetch<any>> {
		return await this.repository.findById(id);
	}
};