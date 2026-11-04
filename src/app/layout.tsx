import type { Metadata } from "next";
import { Raleway, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteUrl } from "@/lib/site";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#100F0F" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} ${nunitoSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
