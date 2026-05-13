# My Portfolio - Modern React Portfolio Template

A beautiful, single-page portfolio website built with React, featuring customizable themes and responsive design.

## 🚀 Features

- **Modern Design** - Clean and professional layout inspired by premium portfolio sites
- **Single Page** - Smooth scrolling navigation with anchor links
- **Customizable Themes** - 4 built-in themes (Purple Dream, Ocean Breeze, Sunset Glow, Forest Green)
- **Theme Switcher** - Easy theme changing via navbar palette button 🎨
- **Image Placeholders** - Space for local images (Hero, About, Projects)
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Subtle animations and hover effects
- **Easy Customization** - All links set to # for you to update

## 🎨 Theme Customization

### How to Change Theme

Click the palette icon (🎨) in the navigation bar to see available themes:
- **Purple Dream** - Vibrant purple and pink gradient
- **Ocean Breeze** - Cool blues and cyans
- **Sunset Glow** - Warm oranges and reds
- **Forest Green** - Natural greens and teals

### Create Custom Theme

Edit `src/theme.js` to add your own theme:

```javascript
export const themes = {
  yourTheme: {
    name: 'Your Theme Name',
    primary: '#yourcolor',
    secondary: '#anothercolor',
    accent: '#thirdcolor',
    dark: '#darkcolor',
    light: '#lightcolor',
    text: '#textcolor',
    textLight: '#lighttextcolor',
    border: '#bordercolor',
    hover: '#hovercolor',
  },
  // ... other themes
};
```

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change heading and subtitle
   - Add your hero image (replace empty src in image-placeholder)

2. **Projects Section** (`src/components/Projects.jsx`)
   - Update project data in the projects array
   - Replace project images

3. **Skills Section** (`src/components/Skills.jsx`)
   - Modify the skills array with your actual skills

4. **About Section** (`src/components/About.jsx`)
   - Update bio text
   - Change statistics (years coding, projects shipped, clients)
   - Add your profile photo

5. **Contact Section** (`src/components/Contact.jsx`)
   - Replace email, WhatsApp, LinkedIn, and GitHub links
   - Update contact information

6. **Footer** (`src/components/Footer.jsx`)
   - Update copyright name and year
   - Update social media links

7. **Navbar** (`src/components/Navbar.jsx`)
   - Change brand name and navigation links as needed

### Adding Images

Create an `images` or `assets` folder in `public/` and reference images like:

```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

### External Links

All external links are currently set to `#`. Replace them with actual URLs:

```jsx
<a href="https://your-website.com">Link Name</a>
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with theme switcher
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Skills.jsx          # Skills grid
│   │   ├── About.jsx           # About section with stats
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Footer.jsx          # Footer
│   │   ├── pages/
│   │   │   └── App.jsx         # Main app component
│   │   └── [components].css    # Styles for each component
│   ├── theme.js                # Theme configuration
│   ├── App.css                 # Global styles
│   └── main.js                 # React entry point
├── index.html                  # HTML template
├── package.json                # Dependencies
└── vite.config.js             # Vite configuration
```

## 🎯 Sections Overview

### 1. Hero Section
- Large headline with gradient text
- Subtitle describing your expertise
- Call-to-action buttons
- Placeholder for your hero image

### 2. Projects Section
- 4 project cards (customizable)
- Project image, title, tech stack
- Links to live demo and code
- Hover animations

### 3. Skills Section
- Skill tags in a responsive grid
- Customizable skill list
- Gradient background

### 4. About Section
- Personal bio
- Key statistics (years, projects, clients)
- Profile image placeholder
- Responsive two-column layout

### 5. Contact Section
- Contact information (email, WhatsApp, LinkedIn, GitHub)
- Contact form with validation
- Professional layout

### 6. Footer
- Copyright information
- Social media links

## 🎨 Styling Tips

- All colors are theme-based using CSS variables
- Update colors in `src/theme.js` and they apply everywhere
- Each component has its own CSS file for easy customization
- Responsive breakpoints at 1024px and 640px

## 📱 Responsive Design

- **Desktop** (1024px+): Full layout with 2-column grids
- **Tablet** (768px - 1024px): Adjusted spacing and font sizes
- **Mobile** (< 768px): Single column layouts, touch-friendly buttons

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... other config
})
```

## 🔧 Troubleshooting

### Images not showing
- Ensure images are in `public/` folder
- Use correct relative paths starting with `/`

### Styles not applying
- Check browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Restart dev server

### Theme not changing
- Clear browser localStorage
- Make sure theme name matches exactly in `theme.js`

## 📚 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **CSS 3** - Styling with CSS variables
- **JavaScript ES6+** - Modern JavaScript

## 📄 License

Free to use and modify for your portfolio.

## 💡 Tips

1. Keep content concise and impactful
2. Use high-quality images
3. Test on mobile devices
4. Update regularly with new projects
5. Consider accessibility (alt text for images)

## 🤝 Support

For issues or questions, check the code comments or customize step by step!

---

**Ready to showcase your work? Update the content and deploy!** 🚀
