import { TFindManyOptions } from "../types";

export interface IStorageRepository {
	findMany(options: TFindManyOptions): Promise<any[]>;
	findById(id: number): Promise<any>;
}