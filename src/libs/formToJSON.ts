/* eslint-disable @typescript-eslint/ban-types */

const isCheckboxOrRadio = (type: string): boolean => ["checkbox", "radio"].includes(type);
const isExcludedType = (type: string): boolean => ["button", "submit", "reset"].includes(type);

export function formToJSON(elements: HTMLFormControlsCollection): object {
	const result = {};

	for (const element of elements) {
		const {
			type, name, value, checked, selectedOptions
		} = element as HTMLSelectElement & HTMLInputElement;

		
		const preparedValue = value.trim();

		if (isExcludedType(type)) {
			continue;
		}

		if (isCheckboxOrRadio(type)) {

			result[name] = !!checked;
			
		} else if (type === "select-multiple") {
			result[name] = [];
			for (const option of selectedOptions) {
				result[name].push(isFinite(+option.value) ? +option.value : option.value);
			}

		} else if (preparedValue == "") {
			
			continue;

		} else if ((typeof preparedValue === "number" || typeof preparedValue === "string") && isFinite(+preparedValue)) {

			result[name] = +preparedValue;
			
		} else {

			result[name] = preparedValue;
			
		}
	}

	return result;
}