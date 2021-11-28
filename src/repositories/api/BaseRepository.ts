import { RequestQueryBuilder } from "@nestjsx/crud-request";
import { TResponse, TResultFetch, } from "../types";

export abstract class BaseRepository {
	protected queryBuilder: RequestQueryBuilder;

	constructor() {
		RequestQueryBuilder.setOptions({
			delim: "||",
			delimStr: ",",
			paramNamesMap: {
				fields: ["fields", "select"],
				search: "s",
				filter: ["filter[]", "filter"],
				or: ["or[]", "or"],
				join: ["join[]", "join"],
				sort: ["sort[]", "sort"],
				limit: ["per_page", "limit"],
				offset: ["offset"],
				page: ["page"],
				cache: ["cache"]
			}
		});
	}

	protected async fetch(url: RequestInfo, options?: RequestInit): Promise<TResultFetch <any | any[]> & TResponse> {
		const result = {
			response: null,
			payload: null,
			error: null,
		};

		try {
			const response = await fetch(`${process.env.API_URL}${url}`, options);
			result.response = response;
			const resultJSON = await response.json();

			if ([200, 201,].includes(response.status) === false) {
				result.error = resultJSON;
			} else {
				result.payload = resultJSON;
			}

		} catch (error) {
			result.error = error;
		}

		return result;
	}

	protected getQueryBuilder(): RequestQueryBuilder {
		return RequestQueryBuilder.create();
	}
}