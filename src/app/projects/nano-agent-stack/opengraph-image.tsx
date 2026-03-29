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
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.26), transparent 28%), radial-gradient(circle at 82% 14%, rgba(96,165,250,0.18), transparent 26%), linear-gradient(180deg, #08111a, #07101a)",
          color: "white",
          padding: "54px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: 720 }}>
          <div
            style={{
              display: "flex",
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
            Flagship open-source project
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.02 }}>NANO Agent Stack</div>
            <div style={{ fontSize: 28, lineHeight: 1.35, color: "rgba(226,232,240,0.84)" }}>
              Modular orchestration infrastructure for agent systems that need structure, auditability, and real operational topology.
            </div>
          </div>
          <div style={{ fontSize: 20, color: "rgba(34,211,238,0.92)" }}>github.com/r4ullopezdev/nano-agent-stack</div>
        </div>
        <div
          style={{
            width: 320,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignSelf: "stretch",
          }}
        >
          {["Orchestrator", "Departments", "Workers", "Skills", "Trace hooks"].map((item, index) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "18px 20px",
                borderRadius: 26,
                border: "1px solid rgba(255,255,255,0.1)",
                background: index === 0 ? "rgba(34,211,238,0.12)" : "rgba(255,255,255,0.05)",
                fontSize: 24,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
