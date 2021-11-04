import { IStorageRepository } from "./IStorageRepository";

export interface IProductRepository extends IStorageRepository {
	findByCategoryId(categoryId: number): Promise<any[]>	
}