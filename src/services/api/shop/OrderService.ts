import { IOrderRepository } from "#repositories/interfaces/IOrderRepository";
import { OrderRepository } from "#repositories/api/shop/OrderRepository";
import { CreateOrderDTO } from "./dto/CreateOrderDTO";
import { TResultFetch } from "#data-transfer-types/src/repositories/types";

export const OrderService = new class {
	protected repsitory: IOrderRepository;
	
	constructor() {
		this.repsitory = new OrderRepository();
	}

	public async findById(id: number): Promise<TResultFetch<any>> {
		return await this.repsitory.findById(id);
	}

	public async createAndSave(dto: CreateOrderDTO): Promise<TResultFetch<any>> {
		return await this.repsitory.createAndSave(dto);
	}
};