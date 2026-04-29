import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./agency.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "R3 Creative | Briefing Premium",
  description: "Transforme sua ideia em um projeto estratégico com a R3 Creative.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bricolage.variable} ${plusJakarta.variable} ${jetbrains.variable} antialiased`}>
        <style dangerouslySetInnerHTML={{ __html: `
          body::before { display: none !important; background: none !important; }
          .landing-page::before { display: none !important; }
        `}} />
        {children}
      </body>
    </html>
  );
}
