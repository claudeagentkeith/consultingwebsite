import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hitmaker Engineering",
    short_name: "Hitmaker",
    description:
      "End-to-end product development for medical devices and combination products — research, engineering, design controls, manufacturing transfer, launch, and sustaining.",
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
