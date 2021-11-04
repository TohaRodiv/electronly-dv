import { IProductRepository } from "#repositories/interfaces/IProductRepository";
import { ProductRepository } from "#repositories/local/shop/ProductRepository";

export const ProductService = new class {
	protected repository: IProductRepository;

	constructor () {
		this.repository = new ProductRepository();
	}
	
	public async getMany(options: any = {}) {
		return await this.repository.findMany(options);
	}

	public async findById(id: number) {
		return await this.repository.findById(id);
	}

	public async findByCategoryId(categoryId: number) {
		return await this.repository.findByCategoryId(categoryId);
	}
};