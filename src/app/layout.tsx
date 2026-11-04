import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteUrl } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      <body className={`${bricolage.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
