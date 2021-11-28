import { CreateOrderDTO } from "#data-transfer-types/src/services/api/shop/dto/CreateOrderDTO";
import { TResultFetch } from "../types";

export interface IOrderRepository {
	findById(id: number): Promise<TResultFetch<any>>
	createAndSave(order: CreateOrderDTO): Promise<TResultFetch<any>>
}