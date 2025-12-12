import axios from "axios";

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const token = process.env.VITE_ACCESS_TOKEN;
    const baseUrl = process.env.VITE_API_URL || "https://api.football-data.org/v4";

    if (!token) {
      return res.status(500).json({ error: "API token not configured" });
    }

    // Get the path from the catch-all route
    const path = (req.query.path as string[]) || [];
    const apiPath = Array.isArray(path) ? path.join("/") : path;

    // Build the full URL
    const url = `${baseUrl}/${apiPath}`;

    // Forward query parameters (except 'path')
    const queryParams = new URLSearchParams();
    Object.entries(req.query).forEach(([key, value]) => {
      if (key !== "path" && value) {
        queryParams.append(key, value as string);
      }
    });

    const fullUrl = queryParams.toString()
      ? `${url}?${queryParams.toString()}`
      : url;

    const response = await axios.get(fullUrl, {
      headers: {
        "X-Auth-Token": token,
      },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error("API Error:", error.message);
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.message || "Failed to fetch data";
    return res.status(status).json({ error: message });
  }
}

