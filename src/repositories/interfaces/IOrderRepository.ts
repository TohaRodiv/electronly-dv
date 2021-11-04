import { createOrderDto } from "#data-transfer-types/src/services/api/shop/dto/createOrderDto";

/**
 * TODO: Доработать...
 */
export interface IOrderRepository {
	findById(id: number): Promise<any>
	createAndSave(order: createOrderDto): Promise<any>
}