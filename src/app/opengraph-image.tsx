import { ImageResponse } from "next/og"

export const alt = "Webi Muleta — Full Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#FF5B2E",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <span style={{ fontWeight: 800 }}>webi.</span>
          <span style={{ display: "flex", background: "#111111", color: "#FFF4E6", borderRadius: 999, padding: "10px 24px", fontSize: 24 }}>
            Now building at Synheart
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 190, fontWeight: 900, lineHeight: 0.85, letterSpacing: -10 }}>WEBI</div>
          <div style={{ fontSize: 190, fontWeight: 900, lineHeight: 0.85, letterSpacing: -10 }}>MULETA</div>
          <div style={{ fontSize: 34, marginTop: 28 }}>Full stack developer — bold, fast web products.</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
