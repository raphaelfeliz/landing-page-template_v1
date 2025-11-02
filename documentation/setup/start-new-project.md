Excellent — here’s the optimized **“ideal process plan”** summary for next runs, stripped of all side paths and friction points, ready to repeat smoothly:

---

# 🔁 CANONICAL LANDING PAGE BUILD PROCESS

## 0. STRUCTURE

Work always follows:
**Phase → Step → Instruction → Log.**
No skipping ahead. Each step produces **evidence** and a **log entry**.

---

## 1. SETUP

1. **Install Node.js (LTS)**

   * Download + install with defaults.
   * Verify:

     ```bash
     node -v
     npm -v
     ```
   * Expect Node ≥ 22, npm ≥ 8.

2. **Create project + open VS Code**

   ```bash
   mkdir C:\dev\landing-pages\lp-amil_dental
   cd C:\dev\landing-pages\lp-amil_dental
   code .
   ```

3. **Initialize NPM + Install Vite**

   ```bash
   npm init -y
   npm install vite --save-dev
   ```

   Then add to `package.json`:

   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build"
   }
   ```

4. **Test Dev Server**

   ```bash
   npm run dev
   ```

   → confirms toolchain ready.

---

## 2. STRUCTURE

1. Create directories:

   ```bash
   mkdir src
   mkdir src\sections
   ```

2. Create main file:

   ```bash
   ni index.html -ItemType File
   ```

3. Add two section files:

   ```bash
   ni src\sections\header.htm -ItemType File
   ni src\sections\hero.htm -ItemType File
   ```

4. Each file starts with:

   ```html
   <!--
   PATH:
   PURPOSE:
   IMPORTS:
   EXPORTS:
   NOTES:
   -->
   ```

5. Add orchestrator structure to `index.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Landing Page</title>
   </head>
   <body class="lp-shell">
     <!-- INCLUDE-SECTION: src/sections/header.htm -->
     <!-- INCLUDE-SECTION: src/sections/hero.htm -->
   </body>
   </html>
   ```

---

## 3. SECTION FORMAT

* Each `.htm` file is self-contained:
  inline `<style>` and `<script>` allowed.
* All IDs/classes are namespaced (e.g., `.hdr-*`, `.hero-*`).

---

## 4. VITE INCLUSION SYSTEM

1. Create `vite.config.js`:

   ```js
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
             if (fs.existsSync(abs)) return fs.readFileSync(abs, "utf-8");
             console.warn(`⚠️ Missing include: ${filePath}`);
             return `<!-- Missing: ${filePath} -->`;
           });
         },
       },
     ],
     build: { outDir: "dist" },
   });
   ```

2. Run:

   ```bash
   npm run dev
   ```

   → Page loads from `http://localhost:5173/`.

3. Build:

   ```bash
   npm run build
   ```

   → `dist/index.html` contains inlined sections.

---

## 5. FINALIZATION

1. Add `/documentation/conventions.md` summarizing format rules.
2. Confirm final HTML integrity (no comment placeholders left).
3. Save as **“2-section base”** template for reuse.

---