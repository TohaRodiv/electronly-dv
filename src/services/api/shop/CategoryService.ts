import { CategoryRepository } from "#repositories/local/shop/CategoryRepository";


export const CategoryService = new class {
	protected repository: CategoryRepository;

	constructor() {
		this.repository = new CategoryRepository();
	}

	public async getMany(options: any = {}) {
		return await this.repository.findMany(options);
	}

	public async findById(id: number) {
		return await this.repository.findById(id);
	}
};