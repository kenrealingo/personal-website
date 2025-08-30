import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Ken Realingo - Machine Learning Engineer",
  description: "Machine Learning Engineer specializing in AI-powered ESG risk assessment, geospatial analytics, and environmental data science solutions.",
  keywords: ["Machine Learning", "AI", "ESG", "Geospatial Analytics", "Data Science", "Ken Realingo"],
  authors: [{ name: "Ken Realingo" }],
  creator: "Ken Realingo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kenrealingo.com",
    title: "Ken Realingo - Machine Learning Engineer",
    description: "Building AI solutions that bridge data, environment, and decision-making",
    siteName: "Ken Realingo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Realingo - Machine Learning Engineer",
    description: "Building AI solutions that bridge data, environment, and decision-making",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable}`}>
      <body 
        className="font-sans antialiased animated-bg"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
