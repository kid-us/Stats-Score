export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing match id parameter' });
  }

  try {
    const token = process.env.VITE_ACCESS_TOKEN;
    const baseUrl = process.env.VITE_API_URL || 'https://api.football-data.org/v4';

    if (!token) {
      console.error('API token not configured');
      return res.status(500).json({ error: 'API token not configured' });
    }

    const url = `${baseUrl}/matches/${id}`;
    
    console.log('Fetching from:', url);

    const apiRes = await fetch(url, {
      headers: {
        'X-Auth-Token': token,
      },
    });

    if (!apiRes.ok) {
      const errorData = await apiRes.json().catch(() => ({}));
      console.error('API Error:', apiRes.status, errorData);
      return res.status(apiRes.status).json({ 
        error: errorData.message || `API request failed with status ${apiRes.status}` 
      });
    }

    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (err: any) {
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
