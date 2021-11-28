import { TFindManyOptions, TResultFetch } from "../types";

export interface IStorageRepository {
	findMany(options: TFindManyOptions): Promise<TResultFetch<any[]>>;
	findById(id: number): Promise<TResultFetch<any>>;
}