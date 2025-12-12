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
      console.error("API token not configured");
      return res.status(500).json({ error: "API token not configured" });
    }

    // Get the path from the catch-all route
    // In Vercel, req.query.path is an array for catch-all routes like [...path]
    let apiPath: string;

    // Try to get path from query parameter (Vercel catch-all format)
    if (req.query.path) {
      if (Array.isArray(req.query.path)) {
        apiPath = req.query.path.join("/");
      } else {
        apiPath = String(req.query.path);
      }
    } else {
      // Fallback: extract from URL pathname
      // req.url format: /api/competitions/PL/matches?matchday=16
      const urlPath = req.url?.split("?")[0] || "";
      apiPath = urlPath.replace(/^\/api\//, "");
    }

    if (!apiPath) {
      console.error("No API path found", {
        query: req.query,
        url: req.url,
        pathname: req.url?.split("?")[0],
      });
      return res.status(400).json({ error: "Invalid API path" });
    }

    // Build the full URL
    const url = `${baseUrl}/${apiPath}`;

    // Forward query parameters (except 'path')
    const queryParams = new URLSearchParams();
    Object.entries(req.query).forEach(([key, value]) => {
      if (key !== "path" && value) {
        if (Array.isArray(value)) {
          value.forEach((v) => queryParams.append(key, String(v)));
        } else {
          queryParams.append(key, String(value));
        }
      }
    });

    const fullUrl = queryParams.toString()
      ? `${url}?${queryParams.toString()}`
      : url;

    console.log("Proxying request to:", fullUrl);

    const response = await axios.get(fullUrl, {
      headers: {
        "X-Auth-Token": token,
      },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error("API Error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      url: error.config?.url,
    });
    const status = error.response?.status || 500;
    const message =
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch data";
    return res.status(status).json({ error: message });
  }
}

