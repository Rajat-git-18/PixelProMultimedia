import { ImageResponse } from "next/og";

export const alt = "Pixel Pro Multimedia — Design, Video & Generative AI in Karnal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#FF5A1F",
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Karnal, Haryana
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          PIXEL PRO MULTIMEDIA
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#8A8A8F",
          }}
        >
          Design · Video · Generative AI
        </div>
      </div>
    ),
    size
  );
}
