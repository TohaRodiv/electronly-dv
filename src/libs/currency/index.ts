export const config = {
	defaultChar: "₽"
};

export const getWithCurrency = (value: number): string => {
	return `${value} ${config.defaultChar}`;
};