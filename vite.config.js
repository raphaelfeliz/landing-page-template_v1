import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    {
      name: "html-include-section",
      transformIndexHtml(html) {
        return html.replace(/<!--\s*INCLUDE-SECTION:\s*(.*?)\s*-->/g, (_, filePath) => {
          const abs = path.resolve(__dirname, filePath);
          if (fs.existsSync(abs)) {
            return fs.readFileSync(abs, "utf-8");
          } else {
            console.warn(`⚠️ Missing include: ${filePath}`);
            return `<!-- Missing: ${filePath} -->`;
          }
        });
      },
    },
  ],
  build: {
    outDir: "dist",
  },
});
