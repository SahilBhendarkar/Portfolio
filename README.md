# 🚀 Premium Developer Portfolio – Sahil Bhendarkar

A modern, highly animated, and fully responsive professional portfolio website built for a Full Stack Java Developer. Designed to look extremely premium with dark glassmorphism effects, colorful glowing accents, smooth spring physics cursor indicators, dynamic page transitions, and subtle hover animations.

## ✨ Tech Stack & Features

- **Frontend Core:** React 18 + Vite (Extremely fast HMR & builds)
- **Styling system:** Tailwind CSS v4 (Native CSS engine with custom `@theme` layers)
- **Animations:** Framer Motion (Page triggers, smooth transitions, scrolling timelines)
- **Icons:** React Icons + Lucide React
- **Forms backend:** EmailJS integration (Fully functional with fallbacks)
- **SEO & Performance:** Perfect semantic structure, Open Graph protocols, preconnected fonts, and responsive layout.

---

## 📂 Folder Structure

```
sahil-portfolio/
├── public/
│   └── resume.pdf (Placeholder PDF)
├── src/
│   ├── assets/          # Static elements & images
│   ├── components/      # Reusable UI Blocks (Navbar, Loading, Modals, GlowButtons, etc.)
│   ├── data/            # Centralized portfolioData.js
│   ├── hooks/           # useScrollAnimation.js hook & variants
│   ├── sections/        # Section views (Hero, About, Skills, Projects, Experience, achievements, Contact, Footer)
│   ├── App.jsx          # App wrapper & component mount
│   ├── index.css        # Tailwind imports & scroll resets
│   └── main.jsx         # Strict mode setup
├── index.html           # HTML5 skeleton & SEO parameters
├── vite.config.js       # Vite configuration with Tailwind Plugin
├── vercel.json          # Routing redirects for production builds
└── package.json         # Project dependency files
```

---

## 🛠️ Local Installation & Development

### 1. Prerequisite
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Clone the repository / Open folder
Navigate to your project directory:
```bash
cd sahil-portfolio
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
To build the application and check for compilation errors:
```bash
npm run build
```

---

## 📧 EmailJS Setup Guide

The portfolio Contact section uses **EmailJS** to send form submissions directly to your email inbox without requiring a backend server. Follow these steps to configure it:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add a new **Email Service** (e.g., Gmail) and note down the `Service ID`.
3. Create a new **Email Template** under the templates section and note down the `Template ID`.
4. Navigate to **Account** -> **API keys** and copy your `Public Key`.
5. Open `src/data/portfolioData.js` and locate the `emailjsConfig` block at the bottom:
   ```javascript
   export const emailjsConfig = {
     serviceId: 'YOUR_EMAILJS_SERVICE_ID',
     templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
     publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
   };
   ```
6. Replace the placeholder values with your actual EmailJS credentials. Restart your development server.

---

## 🚀 Deployment Guide

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Run command inside root folder: `vercel`
3. Link to your Vercel account, set configuration to default, and deploy.
4. **Vite SPA Fix:** The repository includes a `vercel.json` file to handle route redirects, preventing 404 errors on deep linking or page reloads.

### Deploy to Netlify
1. Log in to your [Netlify](https://www.netlify.com/) account.
2. Drag and drop the built `dist` folder (created by running `npm run build`) directly into the Netlify console, or connect your GitHub repository for continuous integration (CI).
3. **Build Command:** `npm run build`
4. **Publish Directory:** `dist`
