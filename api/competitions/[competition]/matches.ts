import axios from "axios";

export default async function handler(req: any, res: any) {
  const { competition } = req.query;
  const { matchDay, limit = 5 } = req.query;

  if (!competition || !matchDay) {
    return res.status(400).json({ error: "Missing competition or matchDay" });
  }

  try {
    const token = process.env.VITE_ACCESS_TOKEN;
    const baseUrl = process.env.VITE_API_URL;

    const response = await axios.get(
      `${baseUrl}/competitions/${competition}/matches`,
      {
        params: { matchday: matchDay, limit },
        headers: {
          "X-Auth-Token": token,
          "Cache-Control": "no-cache", // ✅ prevents 304
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}
