import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.24), transparent 28%), radial-gradient(circle at 82% 18%, rgba(59,130,246,0.18), transparent 22%), linear-gradient(180deg, #07101a, #09111c 52%, #050b14)",
          color: "white",
          padding: "56px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 24,
              border: "1px solid rgba(34,211,238,0.28)",
              background: "rgba(34,211,238,0.12)",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            RL
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, opacity: 0.8 }}>imraullopez.com</span>
            <span style={{ fontSize: 16, opacity: 0.55 }}>Founder-engineer / AI infrastructure</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.05)",
              padding: "10px 18px",
              fontSize: 15,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(241,233,216,0.92)",
            }}
          >
            Open-source systems
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.03 }}>
            Raul Lopez builds premium infrastructure for agent systems.
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.45, color: "rgba(226,232,240,0.82)", maxWidth: 900 }}>
            Multi-agent orchestration, observability, reusable workflows, and a stronger visual layer for serious technical work.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
