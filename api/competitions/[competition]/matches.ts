import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { competition } = req.query;
  const matchday = req.query.matchday;
  const limit = req.query.limit;

  try {
    const apiRes = await fetch(
      `https://api.football-data.org/v4/competitions/${competition}/matches?matchday=${matchday}&limit=${limit}`,
      {
        headers: {
          "X-Auth-Token": process.env.API_TOKEN || "",
        },
      }
    );

    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
