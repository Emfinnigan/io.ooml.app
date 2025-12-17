# ooml.io Landing Page

A modern, TypeScript-powered landing page for ooml.io - The Offline Loom for macOS.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   This will start a local server at `http://localhost:3000` and automatically open it in your browser.

   Or use `npm run serve` to start the server without opening the browser automatically.

## 📝 Making Changes

### Easy Customization

All site content can be easily changed in `src/config.ts`. Simply edit the `siteConfig` object to update:
- Brand name and tagline
- Hero section text
- Features list
- Pricing information
- Navigation links
- And more!

### Code Changes

- **TypeScript source files** are in the `src/` directory
- **Main entry point:** `src/main.ts`
- **Individual modules:**
  - `src/navbar.ts` - Navbar scroll effects
  - `src/smooth-scroll.ts` - Smooth scrolling behavior
  - `src/scroll-animations.ts` - Scroll reveal animations
  - `src/mouse-interactions.ts` - 3D tilt and parallax effects

After making changes to TypeScript files, run `npm run build` to compile.

### Watch Mode (Auto-compile)

For development, use watch mode to automatically recompile on file changes:
```bash
npm run watch
```

## 📁 Project Structure

```
├── src/                 # TypeScript source files
│   ├── main.ts         # Application entry point
│   ├── config.ts       # Site configuration (edit this!)
│   ├── navbar.ts       # Navbar functionality
│   ├── smooth-scroll.ts
│   ├── scroll-animations.ts
│   └── mouse-interactions.ts
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # Old JavaScript (backup)
└── package.json        # Node.js dependencies
```

## 🛠 Development

- **Build:** `npm run build`
- **Watch:** `npm run watch` or `npm run dev`
- **Start server:** `npm start` (runs on http://localhost:3000)
- **Serve only:** `npm run serve` (server without auto-open)

## 📦 Technologies

- TypeScript
- Vanilla JavaScript (no frameworks)
- Modern CSS

---

Made with ❤️ for ooml.io

