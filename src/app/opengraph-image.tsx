import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

// Route segment config + metadata for the generated social card.
export const alt = `${siteConfig.name} — Software Engineer`
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
          justifyContent: "center",
          padding: "80px",
          backgroundImage:
            "linear-gradient(to right, #1e293b, #111827)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#eab308",
          }}
        >
          Software Engineer
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#cbd5e1",
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          I craft intuitive, high-quality web experiences that help products and
          teams succeed.
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 48,
          }}
        >
          sergioalcala.dev
        </div>
      </div>
    ),
    { ...size },
  )
}
