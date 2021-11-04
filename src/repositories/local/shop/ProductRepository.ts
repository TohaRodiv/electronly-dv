import { TFindManyOptions } from "../../types";
import { products } from "#data/products";
import { IProductRepository } from "../../interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
	findMany(_options: TFindManyOptions): Promise<any[]> {
		return new Promise ((resolve) => {
			resolve(products);
		});
	}

	findById(id: number): Promise<any> {
		return new Promise ((resolve, reject) => {
			for (const product of products) {
				if (product.id === id) {
					resolve(product);
				}
			}
			reject(`Product with id ${id} not found`);
		});
	}

	findByCategoryId(categoryId: number): Promise<any[]> {
		return new Promise ((resolve) => {
			resolve(
				products.filter (product => product.categoryId === categoryId)
			);
		});
	}
	
}