import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  define: {
    "import.meta.env.VITE_STATIC_BUILD": JSON.stringify(true),
  },
  resolve: {
    alias: {
      "node:async_hooks": path.resolve(__dirname, "shims/node-async-hooks.js"),
    },
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      input: "index.html",
    },
  },
});
