import { IStorageRepository } from "../../interfaces/IStorageRepository";
import { TFindManyOptions } from "../../types";
import { news } from "#data/news";

export class NewsRepository implements IStorageRepository {
	findMany(_options: TFindManyOptions): Promise<any[]> {
		return new Promise((resolve) => {
			resolve(news);
		});
	}

	findById(id: number): Promise<any> {
		return new Promise((resolve, reject) => {
			for (const item of news) {
				if (item.id === id) {
					resolve(item);
				}
			}
			reject(`News with id ${id} not found`);
		});
	}
}