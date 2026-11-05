import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteUrl } from "@/lib/site";
import { SmoothScroll } from "@/components/SmoothScroll";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Webi Muleta | Full Stack Developer",
    template: "%s | Webi Muleta"
  },
  description: "Full Stack Developer specializing in React, Next.js, and building impactful digital products.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Web Development", "Portfolio", "Webi Muleta"],
  authors: [{ name: "Webi Muleta", url: siteUrl }],
  creator: "Webi Muleta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Webi Muleta | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and building impactful digital products.",
    siteName: "Webi Muleta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webi Muleta | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and building impactful digital products.",
    creator: "@dirac1235",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF5B2E" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${funnelDisplay.variable} ${funnelSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
