import { ImageResponse } from "next/og"

export const alt = "Webi Muleta — Full Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#100F0F",
          color: "#F0EDEA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", borderLeft: "6px solid #D65C5C", paddingLeft: 40, flexDirection: "column" }}>
          <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#8A827C" }}>
            Full Stack Developer
          </div>
          <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1.05, marginTop: 16 }}>Webi Muleta</div>
          <div style={{ fontSize: 34, color: "#8A827C", marginTop: 28 }}>
            Building accessible, pixel-perfect web products — from API to UI.
          </div>
        </div>
        <div style={{ position: "absolute", right: 96, bottom: 72, fontSize: 64, fontWeight: 900, color: "#D65C5C" }}>
          WM.
        </div>
      </div>
    ),
    { ...size }
  )
}
