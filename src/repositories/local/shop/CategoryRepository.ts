import { IStorageRepository } from "../../interfaces/IStorageRepository";
import { TFindManyOptions } from "../../types";
import { categories } from "#data/categories";

/**
 * TODO: Доработать для работы с деревом категорий
 */
export class CategoryRepository implements IStorageRepository {
	findMany(_options: TFindManyOptions): Promise<any[]> {
		return new Promise((resolve) => {
			resolve(categories);
		});
	}

	findById(id: number): Promise<any> {
		return new Promise((resolve, reject) => {
			const category = this.findRecursive(id, categories);
			if (category) {
				resolve(category);
			} else {
				reject(`Category with id ${id} not found`);
			}
		});
	}

	protected findRecursive(id: number, categories: any): any[] {
		for (const category of categories) {
			if (category.id === id) {
				return category;
			} else if (category.childs) {
				const findedCategory = this.findRecursive(id, category.childs);
				if (findedCategory) {
					return findedCategory;
				}
			}
		}
		return null;
	}
}