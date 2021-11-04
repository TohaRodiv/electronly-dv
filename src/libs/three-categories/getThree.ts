
/**
 * TODO: Переделать типы, чтобы можно было спокойно переиспользовать функцию.
 */

export type TCategory = {
	id: number
	title: string
	childs: TCategory[]
}

export type TPlainCategories = Array <{
	id: number
	parent_id: number
	title: string
}>

export function getThree (categories: TPlainCategories): TCategory {

	function getThreeRecursive (id = 0) {
		const items: TCategory[] = [];

		for (const category of categories) {
			if (category.parent_id === id) {
				items.push ({
					id: category.id,
					title: category.title,
					childs: getThreeRecursive (category.id),
				});
			}
		}
		return items;
	}

	return getThreeRecursive ()[0];
}