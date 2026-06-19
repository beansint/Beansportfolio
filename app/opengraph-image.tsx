import { ImageResponse } from "next/og";
import { DATA } from "./data";

export const alt = `${DATA.profile.name} - ${DATA.profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Cache at build time rather than rendering per request.
export const dynamic = "force-static";

export default function Image() {
  const { name, role, location } = DATA.profile;
  const stack = DATA.skills.techStack.slice(0, 6).join("  ·  ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(1200px 600px at 80% -10%, #0c2a20 0%, #0d0d0f 55%)",
          padding: "80px",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#00ff9d",
            marginBottom: 28,
          }}
        >
          {location}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
          {name}
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#a9a9b2",
            marginTop: 18,
          }}
        >
          {role}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#7c7c86",
            marginTop: 48,
          }}
        >
          {stack}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 70,
            right: 80,
            fontSize: 26,
            color: "#00ff9d",
          }}
        >
          vincentpacana.com
        </div>
      </div>
    ),
    { ...size },
  );
}
