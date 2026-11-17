import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JRINK Orange | From Fruit to Fuel",
  description: "Cold-Pressed • Electrifying • No Compromise. High-impact hydration engineered for performance.",
  keywords: ["JRINK", "Orange Juice", "Energy", "Cold-Pressed", "Electrolytes", "Performance Drink"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ff6a00" />
      </head>
      <body className="antialiased bg-[#06090c] text-white selection:bg-[#ff6a00] selection:text-white min-h-screen">
        <div className="cinematic-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
