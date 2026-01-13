// vite.config.ts
import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const base = isDev ? "/" : "/tranning/"; // ← динамический base

  return {
    plugins: [
      react({
        babel: {
          plugins: ["babel-plugin-styled-components"],
        },
      }),
    ],
    server: {
      port: 5173,
      open: true,
    },
    base,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@theme": path.resolve(__dirname, "./src/theme"),
        "@app": path.resolve(__dirname, "./src/app"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@shared": path.resolve(__dirname, "./src/shared"),
        "@redux": path.resolve(__dirname, "./src/redux"),
      },
    },
  };
});
