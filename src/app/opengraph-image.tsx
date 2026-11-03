import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: software solutions, automation and digital marketing`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: 72,
          color: "#fff",
          background: "linear-gradient(160deg,#0A1020 0%,#121A3D 55%,#1D1246 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 13, background: "linear-gradient(110deg,#F6B73C,#F58A4B)" }} />
          <div style={{ fontSize: 36, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Your business deserves to shine online.
          </div>
          <div style={{ fontSize: 30, color: "#A9B4C8" }}>
            Software solutions · Automation · IoT · Digital marketing
          </div>
        </div>
      </div>
    ),
    size,
  );
}
