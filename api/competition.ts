import axios from "axios";

export default async function handler(req: any, res: any) {
  try {
    const { competition, matchDay, limit = 5 } = req.query;

    if (!competition || !matchDay) {
      return res.status(400).json({ error: "Missing competition or matchDay" });
    }

    // const token = process.env.VITE_ACCESS_TOKEN;
    // const baseUrl = process.env.VITE_API_URL;

    const token = process.env.API_TOKEN;
    const baseUrl = process.env.API_URL;

    const response = await axios.get(
      `${baseUrl}/competitions/${competition}/matches`,
      {
        params: { matchday: matchDay, limit },
        headers: { "X-Auth-Token": token },
      }
    );

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}
