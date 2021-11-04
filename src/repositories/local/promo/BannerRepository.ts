import { IStorageRepository } from "../../interfaces/IStorageRepository";
import { TFindManyOptions } from "../../types";
import { banners } from "#data/banners";

export class BannerRepository implements IStorageRepository {
	findMany(_options: TFindManyOptions): Promise<any[]> {
		return new Promise((resolve) => {
			resolve(banners);
		});
	}
	findById(_id: number): Promise<any> {
		throw new Error("Not implemented");
	}
	
}