import { OrderService } from "#data-transfer-types/src/services/api/shop/OrderService";
import { NextApiRequest, NextApiResponse } from "next";


export default async function orders(req: NextApiRequest, res: NextApiResponse): Promise<any> {
	if (req.method === "POST") {
		const data = req.body;
		const { payload, error } = await OrderService.createAndSave(data);
		
		if (error) {
			res.status(error.statusCode || 500).json(error);
		} else {
			res.status(201).json(payload);
		}
	}
}