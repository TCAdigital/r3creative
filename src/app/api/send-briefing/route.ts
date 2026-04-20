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
      console.error("Resend API Error (Detailed):", JSON.stringify(error, null, 2));
      return NextResponse.json({ 
        success: false, 
        error: error.message,
        code: (error as any).code || "resend_error"
      }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error("Critical Server Error in /api/send-briefing:", error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Internal Server Error' 
    }, { status: 500 });
  }
}
