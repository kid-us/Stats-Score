import axios from "axios";

export default async function handler(req: any, res: any) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Missing match id" });
    }

    const token = process.env.VITE_ACCESS_TOKEN;
    const baseUrl = process.env.VITE_API_URL;

    const response = await axios.get(`${baseUrl}/matches/${id}`, {
      headers: { "X-Auth-Token": token },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to fetch match details" });
  }
}
