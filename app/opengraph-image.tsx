import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Hitmaker Engineering — end-to-end product development for medical devices and combination products";
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
          padding: "80px",
          background:
            "linear-gradient(135deg, #f6f7f8 0%, #d3d8de 60%, #aab3bd 100%)",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
          color: "#12161c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#12161c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "48px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            H
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Hitmaker Engineering
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
            }}
          >
            End-to-end product development for medical devices and combination
            products.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#414b58",
              lineHeight: 1.3,
              maxWidth: "960px",
            }}
          >
            User research · ideation · engineering · design controls ·
            manufacturing transfer · launch · sustaining.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#5a6573",
          }}
        >
          <div>hitmakerengineering.com</div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span>PE</span>
            <span>·</span>
            <span>LSS</span>
            <span>·</span>
            <span>PMP</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
