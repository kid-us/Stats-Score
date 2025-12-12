import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { competition, matchday, limit = 5 } = req.query;

  try {
    const response = await axios.get(
      `https://api.example.com/competitions/${competition}/matches`,
      {
        params: { matchday, limit },
        headers: {
          "X-Auth-Token": process.env.API_TOKEN, // use env variable
        },
      }
    );

    res.status(200).json(response.data);
  } catch (err: any) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
}
