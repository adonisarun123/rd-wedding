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
          background: "linear-gradient(165deg, #6b7562 0%, #8f9b82 35%, #f0ebe3 100%)",
          color: "#faf7f2",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 36, letterSpacing: "0.18em", opacity: 0.92 }}>WEDDING</div>
        <div
          style={{
            marginTop: 20,
            fontSize: 68,
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.12,
            color: "#2a2622",
          }}
        >
          Roopashri & Dhakshinamoorthy
        </div>
        <div style={{ marginTop: 32, fontSize: 26, color: "#5c564d" }}>7 June 2026 · Bengaluru</div>
      </div>
    ),
    { ...size }
  );
}
