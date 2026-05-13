# 🚀 Quick Start Guide

## Getting Started

### 1. Start Development Server
```bash
npm run dev
```
The portfolio will open at `http://localhost:5173`

### 2. See Your Portfolio Live
Click through all sections using the navigation menu. Try clicking the palette icon 🎨 in the navbar to switch themes!

---

## ⚡ Quick Customization (5 minutes)

### Step 1: Update Your Info
Edit these files to personalize your portfolio:

**File**: `src/components/Hero.jsx`
```jsx
- Change "Full-Stack Developer & Designer" to your title
- Update the subtitle text
- Add your hero image (replace empty src in image-placeholder)
```

**File**: `src/components/About.jsx`
```jsx
- Update bio paragraph
- Change stats numbers (Years coding, Projects shipped, Happy clients)
- Add your profile photo
```

**File**: `src/components/Contact.jsx`
```jsx
- Replace email with your actual email
- Add WhatsApp number
- Update LinkedIn profile link
- Add GitHub profile link
```

### Step 2: Update Projects
Edit `src/components/Projects.jsx`:
```jsx
const projects = [
  {
    id: 1,
    name: "Your Project Name",
    description: "Project description",
    tech: ["REACT", "TAILWIND"],
    image: "",  // Add image path
    liveLink: "#",  // Change to your URL
    codeLink: "#",  // Change to your GitHub URL
  },
  // ... add more projects
];
```

### Step 3: Add Skills
Edit `src/components/Skills.jsx`:
```jsx
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  // ... add your skills
];
```

### Step 4: Add Images
1. Create a folder `public/images/`
2. Add your images there
3. Reference them in components:
```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

### Step 5: Change Colors/Theme
**Edit `src/theme.js`** to customize or create new themes:
```javascript
yourThemeName: {
  name: 'Your Theme',
  primary: '#8b5cf6',      // Main color
  secondary: '#ec4899',    // Accent color
  accent: '#06b6d4',       // Another accent
  // ... other colors
}
```

---

## 📍 Replace All Links

Search & replace all `href="#"` with your actual links:

| Replace | With |
|---------|------|
| `#` (in Contact section) | `https://linkedin.com/in/yourprofile` |
| `#` (GitHub link) | `https://github.com/yourprofile` |
| `#` (Email) | `mailto:youremail@example.com` |

---

## 🎨 Built-in Themes

Click the palette icon in navbar to try these themes:
- **Purple Dream** 💜 - Vibrant purple & pink
- **Ocean Breeze** 🌊 - Cool blues
- **Sunset Glow** 🌅 - Warm oranges & reds
- **Forest Green** 🌲 - Natural greens

---

## 📁 Important Files to Edit

```
src/
├── components/
│   ├── Hero.jsx          ← Your main heading
│   ├── About.jsx         ← Your bio & stats
│   ├── Projects.jsx      ← Your projects
│   ├── Skills.jsx        ← Your skills
│   ├── Contact.jsx       ← Your contact info
│   └── Navbar.jsx        ← Navigation & theme switcher
├── theme.js              ← Color customization
```

---

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Option 3: GitHub Pages
```bash
npm run build
git add .
git commit -m "Deploy portfolio"
git push
```

---

## ✨ Pro Tips

1. **High-Quality Images**: Use crisp, professional photos
2. **Mobile Test**: Check on phone/tablet before deploying
3. **Regular Updates**: Add new projects regularly
4. **SEO**: Update title in `index.html`
5. **Custom Domain**: Point domain to deployed site

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Ensure path starts with `/` and file is in `public/` |
| Styles look weird | Hard refresh browser (Ctrl+Shift+R) |
| Theme not changing | Clear browser cache and localStorage |
| Dev server won't start | Delete `node_modules` and run `npm install` again |

---

## 🎯 Next Steps

1. ✅ Customize content
2. ✅ Add your images
3. ✅ Update links
4. ✅ Test on mobile
5. ✅ Deploy!

**Your portfolio is ready to showcase your amazing work!** 🌟
