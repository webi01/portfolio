import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Webi Muleta | Full Stack Developer",
    short_name: "Webi Muleta",
    description: "Full Stack Developer specializing in React, Next.js, and building impactful digital products.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF4E6",
    theme_color: "#FF5B2E",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  }
}
