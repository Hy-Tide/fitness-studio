import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        entry: "server"
      }
    }),
    nitro({
      ...(process.env['VERCEL'] ? { preset: "vercel" as const } : {}),
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
