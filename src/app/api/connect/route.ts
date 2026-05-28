import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, interest, message } = body;

    // 1. Server-side Validation
    if (!name || !email || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Missing required fields: Name, Email, and Message are mandatory.' 
      }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL is not defined in environment variables.');
      return NextResponse.json({ success: false, message: 'Notification service not configured.' }, { status: 500 });
    }

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
    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been sent successfully! Our team will be in touch.' 
    });

  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json({ 
      success: false, 
      message: 'An internal server error occurred while sending notification.' 
    }, { status: 500 });
  }
}
