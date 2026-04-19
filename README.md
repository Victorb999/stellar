# Stellar. 🪐

**Solar System Explorer** built with Next.js and the [CyberNeon](https://www.npmjs.com/package/cyberneon) design system.

This application interfaces with the open [Solar System Rest API](https://api.le-systeme-solaire.net/swagger/) to display data on planets, moons, and other celestial bodies in our solar system through a highly structural, neon-brutalist dashboard.

---

## ⚡ Features

- **CyberNeon Aesthetics**: Zero rounding, neon-brutalist card layouts, `StatusTag` categorizations, and high-contrast typography.
- **Data Integration**: Live data fetched from `api.le-systeme-solaire.net` directly through Next.js Server Components.
- **Client-Side Pagination**: Browse bodies seamlessly (12 items per page) without full page reloads.
- **Responsive Dashboard**: Expanding dense grid layout (up to 5 columns on ultra-wide screens).

## 🛠️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [CyberNeon](https://www.npmjs.com/package/cyberneon)

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Victorb999/stellar.git
   cd stellar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 API Usage

This application queries the telemetry endpoint: `https://api.le-systeme-solaire.net/rest/bodies`. The core fetching logic filters objects by size/gravity and sorts them intuitively for the best exploratory experience.

---
*Built as a study application integrating custom design token systems.*
