import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#FF5B2E",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#111111",
          fontSize: 20,
          fontWeight: 900,
          fontFamily: "serif",
          letterSpacing: "-0.5px",
        }}
      >
        W
      </div>
    ),
    { ...size }
  )
}
