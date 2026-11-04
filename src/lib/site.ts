const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProd ? `https://${vercelProd}` : "https://webimuleta.dev")

export const links = {
  email: "webimuleta01@gmail.com",
  github: "https://github.com/webi01",
  linkedin: "https://www.linkedin.com/in/webi",
  telegram: "https://t.me/dirac02",
  leetcode: "https://leetcode.com/Dirac1235",
}

export const synheartProducts = [
  { name: "Synheart", href: "https://synheart.ai" },
  { name: "Synapse", href: "https://synapse.work" },
  { name: "Synapse App", href: "https://synapse.synheart.ai" },
  { name: "Synheart Platform", href: "https://platform.synheart.ai" },
]
