import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serra dos Bichos Petshop | Cuidado Premium para seu Pet",
  description:
    "Banho e tosa, alimentação premium e Táxi Dog com conforto, segurança e carinho. O melhor cuidado para quem faz parte da sua família.",
  keywords: ["petshop", "banho e tosa", "táxi dog", "ração premium", "Serra dos Bichos"],
  openGraph: {
    title: "Serra dos Bichos Petshop",
    description: "Cuidado premium para quem faz parte da sua família.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0C0C0C] text-[#F8F8F8] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
