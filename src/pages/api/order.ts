import { parseFormData } from "#data-transfer-types/src/libs/parse-form-data";
import { OrderService } from "#data-transfer-types/src/services/api/shop/OrderService";
import { NextApiRequest, NextApiResponse } from "next";


export const config = {
	api: {
		bodyParser: false
	}
};

/**
 * TODO: Доделать API
 * @param req
 * @param res 
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
	if (req.method === "POST") {

		const data = await parseFormData(req);

		const result = await OrderService.create(data.fields);
		// console.log(JSON.stringify(data.fields));
		res.status(201).json(result);
	}
}
