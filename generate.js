module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Server configuration is missing ANTHROPIC_API_KEY.'
    });
  }

  const { system, userPrompt, maxTokens = 1000 } = req.body || {};
  if (!system || !userPrompt) {
    return res.status(400).json({ error: 'Missing system or userPrompt.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6',
        max_tokens: Math.min(Math.max(Number(maxTokens) || 1000, 256), 4000),
        system,
        messages: [{ role: 'user', content: userPrompt }]
      })
    });

    const data = await response.json();
    if (!response.ok) {
      const message = data?.error?.message || `Anthropic API request failed (${response.status}).`;
      return res.status(response.status).json({ error: message });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Generation error:', error);
    return res.status(500).json({ error: 'Unable to reach the AI service.' });
  }
};
