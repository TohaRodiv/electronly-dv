import { TFindManyOptions } from "./types";

export interface StorageRepositoryInterface {
	findMany(options: TFindManyOptions): Promise<any[]>;
	findById(id: number): Promise<any>;
}