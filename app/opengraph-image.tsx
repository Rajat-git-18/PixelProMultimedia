import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Pixel Pro Multimedia — Design, Video & Generative AI in Karnal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0A0A0B",
          color: "#F5F5F2",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 420,
            height: 420,
            borderRadius: 420,
            background: "#8A3010",
            opacity: 0.55,
          }}
        />
        <img
          src={logoSrc}
          alt="Pixel Pro Multimedia"
          width={420}
          height={149}
          style={{ marginBottom: 36 }}
        />
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#FF5A1F",
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          Karnal, Haryana
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1,
            maxWidth: 900,
          }}
        >
          Industry-level training in Design, Video & Generative AI.
        </div>
      </div>
    ),
    size
  );
}
