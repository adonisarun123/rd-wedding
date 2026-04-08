import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Roopashri & Dhakshinamoorthy — Wedding June 7, 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #8f2d2d 0%, #6a2222 45%, #1c1917 100%)",
          color: "#fafaf9",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 42, letterSpacing: "0.2em", opacity: 0.9 }}>WEDDING</div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          Roopashri & Dhakshinamoorthy
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 36,
            padding: "12px 40px",
            border: "2px solid rgba(250,250,249,0.45)",
            borderRadius: 12,
            color: "#fafaf9",
          }}
        >
          R & D
        </div>
        <div style={{ marginTop: 36, fontSize: 28, opacity: 0.95 }}>7 June 2026 · Bengaluru</div>
      </div>
    ),
    { ...size }
  );
}
