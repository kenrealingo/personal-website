import type { Metadata } from "next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ken Realingo - AI Engineer",
  description: "AI Engineer specializing in AI-powered ESG risk assessment, geospatial analytics, and environmental data science solutions.",
  keywords: ["Machine Learning", "AI", "ESG", "Geospatial Analytics", "Data Science", "Ken Realingo"],
  authors: [{ name: "Ken Realingo" }],
  creator: "Ken Realingo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kenrealingo.com",
    title: "Ken Realingo - AI Engineer",
    description: "Building AI solutions that bridge data, environment, and decision-making",
    siteName: "Ken Realingo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Realingo - AI Engineer",
    description: "Building AI solutions that bridge data, environment, and decision-making",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className="font-sans antialiased animated-bg"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
