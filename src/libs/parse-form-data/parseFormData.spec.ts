import { parseFormData } from "./";

describe ("Test parseFormData", () => {

	const datas: Array<{name: string, value: string}> = [
		{
			name: "Fields_1",
			value: "Value_1"
		},
		{
			name: "Fields_2",
			value: "Value_2"
		},
		{
			name: "Fields_3",
			value: "Value_3"
		},
	];

	const data = new FormData();

	datas.forEach(({name, value}) => {
		data.set(name, value);
	});

	// TODO: Написать тест
});