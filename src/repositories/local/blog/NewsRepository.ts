import { StorageRepositoryInterface } from "../../StorageRepositoryInterface";
import { TFindManyOptions } from "../../types";
import { news } from "#data/news";

export class NewsRepository implements StorageRepositoryInterface {
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