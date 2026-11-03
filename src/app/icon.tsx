import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 16, background: "linear-gradient(110deg,#F6B73C,#F58A4B)" }}>
        <div style={{ width: 26, height: 26, background: "#0A1020", borderRadius: 6, transform: "rotate(45deg)" }} />
      </div>
    ),
    size,
  );
}
