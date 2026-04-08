import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

/** R · D monogram favicon — matches wedding palette */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(148deg, #6b7562 0%, #8f9b82 42%, #7d6b62 100%)",
          borderRadius: "22%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: 10,
            fontSize: 200,
            fontWeight: 600,
            color: "#faf7f2",
            letterSpacing: "-0.03em",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          <span>R</span>
          <span style={{ fontSize: 120, opacity: 0.92, marginBottom: 8 }}>·</span>
          <span>D</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
