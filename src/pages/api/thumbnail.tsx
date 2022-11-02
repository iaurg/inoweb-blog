import { ImageResponse } from "@vercel/og";
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge"
};

const categoryEmoji = {
  wordpress: "🔧",
  seo: "🔎",
  programacao: "👨‍💻",
  marketing: "📈",
  default: "📝"
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "inoweb blog";

    // ?category=<category>
    const hasCategory = searchParams.has("category");
    const category = hasCategory
      ? searchParams.get("category").toLowerCase()
      : "default";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "black",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap"
          }}>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "white",
              background: "black",
              width: "100%",
              height: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}>
            <div
              style={{
                letterSpacing: "-0.025em",
                color: "white",
                padding: "30px 120px",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <span
                style={{
                  fontSize: 62,
                  marginBottom: 16
                }}>
                {categoryEmoji[category]}
              </span>
              <span
                style={{
                  fontSize: 32,
                  height: 78,
                  verticalAlign: "middle",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                {title}
              </span>
              <span
                style={{
                  fontSize: 20,
                  textTransform: "uppercase",
                  marginTop: "46px",
                  color: "#db2777"
                }}>
                {category}
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 800,
        height: 450
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
