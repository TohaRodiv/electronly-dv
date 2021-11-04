import { getWithCurrency, config } from "./";

describe ("Test currency", () => {

	const value = 1000;
	const expectedValue = `${value} ${config.defaultChar}`;

	test ("Test currency #1", () => {
		expect (getWithCurrency (value)).toBe (expectedValue);
	});
});