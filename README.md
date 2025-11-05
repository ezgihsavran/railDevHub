# 🚄 Rail Hub Dev — Local React + Vite Landing Page

**Rail Hub Dev** is a modern, fully offline-ready **React + Vite** landing page template inspired by the industrial aesthetics of next-generation railway technology.  
It serves as a demo front-end for showcasing teams, innovation labs, and infrastructure projects — featuring clean design, responsive layout, and interactive elements.

---

## ⚙️ Features

- ⚡ **Vite + React** — lightning-fast development and build times  
- 🌓 **Light / Dark Theme** — toggle between modes via the sun/moon icon (saved in `localStorage`)  
- 🧭 **Multi-page Navigation** — Home, About, Expertise, Projects, and Stories  
- 🎞️ **Interactive Animations** — hero shimmer, hover lift effects, and smooth fades  
- 📱 **Responsive Design** — optimized for desktop and mobile  
- 🧩 **Modular Components** — easy to customize, extend, and reuse 


---

## 🖥️ Run Locally (requires Node.js 18+)

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

## 🎨 Theming & Styling

- **Default Theme:** Light  
- **Dark Mode:** Toggle using the ☀️ / 🌙 button in the header.  
  - Preference is saved in `localStorage`.  
  - Smooth transition between modes via CSS variables.  

### Theme Variables
All primary design colors are defined in [`src/styles/variables.css`](./src/styles/variables.css):
```css
--accent: #e36414;     /* Safety orange */
--accent-2: #0077b6;   /* Rail blue */
--bg: #f8fafc;         /* Light background */
--text: #0f172a;       /* Primary text */
```

Update these values to instantly rebrand or restyle the app.

---

## 💫 Interactions & Animations

- **Hero Section:** Animated gradient “rail light” shimmer.  
- **Cards:** Subtle lift and glow on hover.  
- **Buttons:** Smooth hover transitions and depth shadows.  
- **Scroll Effects:** Fade-up animation on visible sections.  
- **Sticky Header:** Glass effect with blur and subtle drop shadow.  

---

## 🧩 Customization Notes

- Replace placeholder images in `/src/assets/images/` as needed.  
- Edit project cards and story data in `/src/pages/Projects.jsx` and `/src/pages/Stories.jsx`.  
- Adjust typography or layout spacing in `/src/styles/globals.css`.  
- Extend sections or components to match your project’s brand identity.  

---

## 🧠 Development Tips

- Modify the **color scheme** quickly via CSS variables.  
- Add new pages by creating a `.jsx` file in `/src/pages/` and linking it in `App.jsx`.  
- Use the modular component structure to reuse UI blocks like cards and grids.  
- This setup uses clean CSS only — you can easily extend it with SCSS or Tailwind later.

---

## 📄 License

This demo is provided for **educational and internal presentation purposes only.**  

---

**© 2025 Rail Hub Dev — Built with React, Vite, and creativity.**
