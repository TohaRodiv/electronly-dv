import { CategoryService } from "#services/api/shop/CategoryService";
import { NextApiRequest, NextApiResponse } from "next";


export default async function categories(req: NextApiRequest, res: NextApiResponse): Promise<any> {
	if (req.method === "GET") {
		const data = req.body;
		const { payload, error } = await CategoryService.getMany();

		console.log("Data from api:", data);
		
		if (error) {
			res.status(error.statusCode || 500).json(error);
		} else {
			res.status(200).json(payload);
		}
	}
}