export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, interest, message } = req.body;

  // 1. Server-side Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields: Name, Email, and Message are mandatory.' 
    });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not defined in environment variables.');
    return res.status(500).json({ success: false, message: 'Notification service not configured.' });
  }

  try {
    // 2. Send Notification to Discord via Webhook
    const discordPayload = {
      embeds: [
        {
          title: "🚀 New 508 Business Inquiry",
          color: 0x0096FF, // 508 Azure
          fields: [
            { name: "👤 Name", value: name, inline: true },
            { name: "📧 Email", value: email, inline: true },
            { name: "🎯 Interest", value: interest, inline: false },
            { name: "📝 Message", value: message, inline: false },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Five Zero Eight Ecosystem • Connect Form",
          },
        },
      ],
    };

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discord Webhook failed with status ${discordResponse.status}`);
    }

    // 3. Success Response for the Website UI
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully! Our team will be in touch.' 
    });

  } catch (err) {
    console.error('Server Error:', err);
    return res.status(500).json({ 
      success: false, 
      message: 'An internal server error occurred while sending notification.' 
    });
  }
}
