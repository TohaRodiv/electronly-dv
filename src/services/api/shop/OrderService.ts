import { IOrderRepository } from "#repositories/interfaces/IOrderRepository";
import { OrderRepository } from "#repositories/local/shop/OrderRepository";
import { createOrderDto } from "./dto/createOrderDto";

export const OrderService = new class {
	protected repsitory: IOrderRepository;
	
	constructor() {
		this.repsitory = new OrderRepository();
	}

	public async findById(id: number) {
		return await this.repsitory.findById(id);
	}

	public async create(dto: createOrderDto) {
		return await this.repsitory.createAndSave(dto);
	}
};