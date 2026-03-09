# Thumbstack Assignment

## 🚀 Project Overview

This repository contains a React-based marketing landing page built using Create React App. It showcases a multi-section layout with a responsive navigation bar, product overview cards, a roadmap section, and a newsletter subscription UI.

The app is located inside the `homepage/` directory.

---

## 🛠️ Run the Project Locally

### Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)

### Steps

1. Open a terminal and navigate to the project folder:

   ```bash
   cd homepage
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and go to:

   ```
   http://localhost:3000
   ```

---

## 📦 Project Structure

Key folders/files:

- `homepage/src/` - React source code
- `homepage/src/components/` - UI sections (Navbar, Hero, ProductCard, AboutUs, RoadMap, Subscribe, Footer)
- `homepage/src/App.js` - Assembles all main sections into the landing page
- `homepage/public/` - Static assets and HTML template

---

## 🧠 Approach & Trade-offs

### Approach

- Built as a **single-page React app** using **Create React App** for fast iteration.
- Used a **component-based layout**: each section has its own component and styles.
- Styled via **component-specific CSS files** (no CSS-in-JS or external UI frameworks beyond `@mui/material` icons).
- Implemented a **responsive navigation bar** with a mobile hamburger toggle.

### Trade-offs

- The app is **static** (no backend/API integration). Interactive UI elements like the newsletter form and "read more" buttons are present but not wired to a backend.
- State has been kept minimal; most content is hard-coded in component files for simplicity.
- Product cards currently use a single boolean state for focus styling, which can be improved to support per-card focus behavior if the UI is extended.
- No routing setup (React Router is not included) since the design is a single landing page.

---

## ✨ Extra Features (Beyond the Design)

These are enhancements added beyond a basic static layout:

- ✅ **Responsive mobile navigation** (hamburger menu using `react-icons`)
- ✅ **Focus-based UI interaction**: Product cards reveal a "Book a demo" button on focus.
- ✅ **Roadmap component** with "Coming Soon" tags for future stages.
- ✅ Modular component structure for easy expansion (new sections can be added via `App.js`).

---
