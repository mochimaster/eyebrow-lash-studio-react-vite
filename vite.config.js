import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub repository: mochimaster/eyebrow-lash-studio-react-vite
  base: "/eyebrow-lash-studio-react-vite/"
});
