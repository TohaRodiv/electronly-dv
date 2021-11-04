import { IStorageRepository } from "../../interfaces/IStorageRepository";
import { TFindManyOptions } from "../../types";
import ordersData from "#data/orders.json";
import { createOrderDto } from "#services/api/shop/dto/createOrderDto";
import { promises as fs } from "fs";
import { cwd } from "process";
import { join as pathJoin } from "path";

const orders: Array<any> = ordersData as Array<any>;

export class OrderRepository implements IStorageRepository {
	public async findMany(_options: TFindManyOptions): Promise<any[]> {
		throw new Error("Method not implemented.");
	}

	public async findById(id: number): Promise<any> {
		return new Promise((resolve, reject) => {
			for (const order of orders as Array<any>) {
				if (order["id"] === id) {
					resolve(order);
				} else {
					reject(`Order with id ${id} not found`);
				}
			}
		});
	}

	public async createAndSave(dto: createOrderDto): Promise<any> {
		return new Promise((resovle, reject) => {

			const date = new Date();

			orders.push({
				id: orders[orders.length - 1]["id"] + 1,
				fio: dto.fio,
				tel: dto.tel,
				email: dto.email,
				comment: dto.comment,
				productName: dto.productName,
				productId: dto.productId,
				status: "new",
				date: `${date.getHours()}:${date.getMinutes()} ${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
			});

			const data: string = JSON.stringify(orders);

			fs.writeFile(pathJoin(cwd(), "src", "data", "orders.json"), data)
				.then(() => {
					resovle(dto);
				}).catch(error => {
					reject(error);
				});

		});
	}

}