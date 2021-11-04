import { preOrder } from "./";

describe ("Test pre order function for three", () => {

	const three = {id: 0, childs: [
		{
			id: 1,
			childs: [
				{
					id: 2,
					childs: [
						{id: 3, childs: []},
						{id: 10, childs: []},
						{id: 11, childs: []},
					]
				},
				{
					id: 9,
					childs: []
				}
			]
		},
		{
			id: 4,
			childs: [
				{id: 5, childs: []},
				{id: 6, childs: []},
				{id: 7, childs: []},
			]
		},
		{
			id: 8,
			childs: [
				{id: 12, childs: []},
				{id: 13, childs: [
					{id: 15, childs: []},
					{id: 16, childs: [
						{id: 18, childs: [
							{id: 19, childs: []}
						]}
					]},
					{id: 17, childs: []}
				]},
				{id: 14, childs: []}
			]
		}
	]};

	test ("#1", () => {
		expect (preOrder(three, 9)).toStrictEqual (three.childs[0].childs[1]);
	});

	test ("#2", () => {
		expect (preOrder(three, 2)).toStrictEqual (three.childs[0].childs[0]);
	});

	test ("#3", () => {
		expect (preOrder(three, 4)).toStrictEqual (three.childs[1]);
	});

	test ("#4", () => {
		/**
		 * Super deep deeper
		 */
		expect (preOrder(three, 18)).toStrictEqual (three.childs[2].childs[1].childs[1].childs[0]);
	});
});