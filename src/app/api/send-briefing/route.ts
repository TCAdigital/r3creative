import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { formatBriefingForEmail } from '@/utils/formatBriefing';

// Configure SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: (process.env.SMTP_PORT === '465'), // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation of credentials
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP credentials not configured. Simulating email send.");
      return NextResponse.json({ success: true, message: "Simulated sending successfully." });
    }

    const htmlContent = formatBriefingForEmail(data);
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
    const toEmail = process.env.SMTP_TO_EMAIL || 'luizyolk@gmail.com';

    // Send email using Nodemailer
    await transporter.sendMail({
      from: `"Briefing R3" <${fromEmail}>`,
      to: toEmail,
      subject: `Novo Briefing Premium: ${data.contactName || 'Contato'}`,
      html: htmlContent,
      replyTo: data.contactEmail || undefined,
    });

    return NextResponse.json({ success: true, message: "Email enviado com sucesso via SMTP." });
  } catch (error) {
    console.error("Critical Server Error in /api/send-briefing:", error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Internal Server Error' 
    }, { status: 500 });
  }
}
