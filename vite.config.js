import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/static/react/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": "http://127.0.0.1:7860",
      "/ws": {
        target: "ws://127.0.0.1:7860",
        ws: true,
      },
      "/output": "http://127.0.0.1:7860",
      "/generate": "http://127.0.0.1:7860",
    },
  },
  build: {
    outDir: "static/react",
    emptyOutDir: true,
  },
});

