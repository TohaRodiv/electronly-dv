import { IStorageRepository } from "#repositories/interfaces/IStorageRepository";
import { BannerRepository } from "#repositories/local/promo/BannerRepository";

export const BannerService = new class {
	protected repsitory: IStorageRepository;

	constructor() {
		this.repsitory = new BannerRepository();	
	}
	public async getMany(options: any = {}) {
		return await this.repsitory.findMany(options);
	}

	public async findById(id: number) {
		return await this.repsitory.findById(id);
	}
};