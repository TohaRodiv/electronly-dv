import { getThree} from "./getThree";

describe ("Test convert plain array from database to object with childs", () => {
	const plainCats = [
		{id: 1, parent_id: 0, title: "Parent 1"},
		{id: 2, parent_id: 1, title: "Child 1"},
		{id: 3, parent_id: 2, title: "Child 2"},
		{id: 4, parent_id: 3, title: "Child 3"},
		{id: 5, parent_id: 4, title: "Child 4"},
	];

	test ("#1", () => {
		const expected =
			{
				id: plainCats[0].id,
				title: plainCats[0].title,
				childs: [
					{
						id: plainCats[1].id,
						title: plainCats[1].title,
						childs: [
							{
								id: plainCats[2].id,
								title: plainCats[2].title,
								childs: [
									{
										id: plainCats[3].id,
										title: plainCats[3].title,
										childs: [
											{
												id: plainCats[4].id,
												title: plainCats[4].title,
												childs: [],
											}
										],
									}
								],
							}
						]
					}
				]
			};

		expect (getThree (plainCats)).toStrictEqual (expected);
	});
});