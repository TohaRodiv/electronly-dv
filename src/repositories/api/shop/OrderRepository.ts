import { IOrderRepository } from "../../interfaces/IOrderRepository";
import { CreateOrderDTO } from "#data-transfer-types/src/services/api/shop/dto/CreateOrderDTO";
import { BaseRepository } from "../BaseRepository";
import { TResultFetch } from "../../types";

export class OrderRepository extends BaseRepository implements IOrderRepository {
	async findById(id: number): Promise<TResultFetch<any>> {
		return await this.fetch(`/shop/orders/${id}`);
	}
	
	async createAndSave(dto: CreateOrderDTO): Promise<TResultFetch<any>> {
		return await this.fetch("/shop/orders", {
			method: "POST",
			body: JSON.stringify(dto),
			headers: new Headers({ "Content-Type": "application/json" }),
		});
	}
}