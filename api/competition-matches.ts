import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { competition, matchday, limit = 5 } = req.query;

  try {
    const response = await axios.get(
      `https://api.football-data.org/v4/competitions/${competition}/matches`,
      {
        params: { matchday, limit },
        headers: {
          "X-Auth-Token": "183c3886c11840bf879073760e80bf91", // use env variable
        },
      }
    );

    res.status(200).json(response.data);
  } catch (err: any) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
}
