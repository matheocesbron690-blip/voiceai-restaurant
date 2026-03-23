import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VoiceAI Restaurant — Agent IA vocal 24h/24 pour votre restaurant",
  description: "Automatisez vos prises de réservation et répondez à vos clients à toute heure grâce à notre agent IA vocal.",
  keywords: ["agent IA vocal", "restaurant", "réservation automatique", "IA"],
  openGraph: { title: "VoiceAI Restaurant", description: "Un agent IA vocal pour votre restaurant, disponible 24h/24 7j/7", type: "website", locale: "fr_FR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
