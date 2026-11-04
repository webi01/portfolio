import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Webi Muleta | Full Stack Developer",
    short_name: "Webi Muleta",
    description: "Full Stack Developer specializing in React, Next.js, and building impactful digital products.",
    start_url: "/",
    display: "standalone",
    background_color: "#100F0F",
    theme_color: "#C44B4B",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  }
}
