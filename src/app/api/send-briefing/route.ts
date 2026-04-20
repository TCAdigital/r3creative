import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { formatBriefingForEmail } from '@/utils/formatBriefing';

// Instantiate Resend if API Key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!resend) {
      console.warn("RESEND_API_KEY not configured. Simulating email send for development.");
      // In development without API key, just log the successful format
      return NextResponse.json({ success: true, message: "Simulated sending successfully." });
    }

    const htmlContent = formatBriefingForEmail(data);

    const { data: responseData, error } = await resend.emails.send({
      from: 'Briefing Platform <onboarding@resend.dev>', // Resend default for testing, user will update when verifying domain
      to: ['luizyolk@gmail.com'],
      subject: `Novo Briefing Premium: ${data.contactName || 'Contato'}`,
      html: htmlContent,
      replyTo: data.contactEmail || undefined,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error("Failed to parse request or send email:", error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
