import { IProductRepository } from "#repositories/interfaces/IProductRepository";
import { ProductRepository } from "#repositories/api/shop/ProductRepository";
import { TResultFetch } from "#data-transfer-types/src/repositories/types";

export const ProductService = new class {
	protected repository: IProductRepository;

	constructor () {
		this.repository = new ProductRepository();
	}
	
	public async getMany(options: any = {}): Promise<TResultFetch<any[]>> {
		const result = await this.repository.findMany(options);
		
		result.payload = result.payload && this.getFormattedProduct(result.payload);

		return result;
	}

	public async findById(id: number): Promise<TResultFetch<any>> {
		const result = await this.repository.findById(id);

		result.payload = result.payload &&  this.getFormattedProduct([result.payload])[0];

		return result;
	}

	public async findByCategoryId(categoryId: number): Promise<TResultFetch<any[]>> {
		const result = await this.repository.findByCategoryId(categoryId);

		result.payload = result.payload &&  this.getFormattedProduct(result.payload);

		return result;
	}

	private getFormattedProduct (payload: any): any {
		if (!Array.isArray(payload)) {
			return null;
		}
		return payload.map((product: any) => ({
			...product,
			images: product.images.map((image: any) => ({
				...image,
				path: `${process.env.API_URL}/${image.path}`,
			}))
		}));
	}
};