import { TResultFetch } from "#repositories/types";
import { CreateOrderDTO } from "../api/shop/dto/CreateOrderDTO";
import { BaseAPIService } from "./BaseAPIService";

export const OrderService = new class extends BaseAPIService {
	async createAndSave(dto: CreateOrderDTO): Promise<TResultFetch<any>> {
		return await this.fetch("/orders", {
			method: "POST",
			body: JSON.stringify(dto),
			headers: new Headers({ "Content-Type": "application/json" }),
		});
	}
};