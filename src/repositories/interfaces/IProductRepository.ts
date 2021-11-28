import { TResultFetch } from "../types";
import { IStorageRepository } from "./IStorageRepository";

export interface IProductRepository extends IStorageRepository {
	findByCategoryId(categoryId: number): Promise<TResultFetch<any>>	
}