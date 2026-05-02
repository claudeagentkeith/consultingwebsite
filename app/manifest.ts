import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hitmaker Engineering",
    short_name: "Hitmaker",
    description:
      "Senior consulting engineering for medical devices and combination products.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#12161c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
