import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative asset URLs work both on a local server and on a GitHub Pages project site.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
