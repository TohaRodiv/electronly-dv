export type TThree = null | {
	id: number
	childs: TThree[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[propName: string]: any
}

export function preOrder (three: TThree, id: number): TThree {

	function recursive (childs: TThree): TThree {
		if (!childs) return null;

		for (const child of childs.childs) {
			if (child && child.id === id) {
				return child;
			}

			const result = recursive (child);

			if (result) return result;
			
		}
		return null;
	}

	return recursive (three);
}