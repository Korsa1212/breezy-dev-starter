# 🚀 Clean Dev Portfolio - Professional Developer Template

A modern, responsive developer portfolio template with dark mode, smooth animations, and clean design. Perfect for showcasing your projects and skills professionally.

![Portfolio Preview](src/assets/hero-developer.jpg)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout with glassmorphism effects
- 🌙 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ⚡ **Smooth Animations** - Subtle animations and transitions using CSS3
- 🧭 **Smooth Navigation** - Auto-highlighting navigation with smooth scroll
- 💼 **Project Showcase** - Interactive project cards with hover effects
- 📬 **Contact Form** - Working contact form with validation
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Performance Optimized** - Fast loading with optimized images and code
- 🛠 **Easy Customization** - Well-structured code with design system

## 🛠 Built With

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **Shadcn/ui** - High-quality UI components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download** this template
   ```bash
   git clone <repository-url>
   cd clean-dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 🎨 Customization Guide

### 1. Personal Information

Edit the content in `src/pages/Portfolio.tsx`:

```typescript
// Update hero section
<h1>Your Name</h1>
<p>Your professional tagline</p>

// Update about section
<p>Your personal story and background</p>

// Update contact links
<a href="mailto:your-email@example.com">
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourprofile">
```

### 2. Projects

Replace the sample projects in `src/pages/Portfolio.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    image: yourProjectImage, // Import your image
    technologies: ['React', 'Node.js', 'etc'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project.com',
    featured: true // Highlight important projects
  }
];
```

### 3. Images

Replace images in `src/assets/`:
- `hero-developer.jpg` - Hero background image
- `project-*.jpg` - Project screenshots
- Add your own project images and import them

### 4. Color Themes

The template includes 3 color schemes. Modify `src/index.css`:

**Theme 1: Professional Blue (Default)**
```css
--primary: 221 83% 53%; /* Blue */
--accent: 262 83% 58%;  /* Purple */
```

**Theme 2: Elegant Green**
```css
--primary: 142 76% 36%; /* Green */
--accent: 158 64% 52%;  /* Teal */
```

**Theme 3: Creative Orange**
```css
--primary: 25 95% 53%;  /* Orange */
--accent: 45 93% 58%;   /* Yellow */
```

### 5. Fonts

Change the font in `index.html` and `tailwind.config.ts`:

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```typescript
// tailwind.config.ts
fontFamily: {
  'poppins': ['Poppins', 'sans-serif'],
}
```

### 6. Contact Form

The contact form currently shows a success toast. To make it functional:

1. **For static hosting**: Use services like Formspree, Netlify Forms, or Getform
2. **For full functionality**: Connect to your backend API

Example with Formspree:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    toast({ title: "Message sent successfully!" });
  }
};
```

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your repository to Vercel
2. Framework preset: Vite
3. Deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 🎯 SEO Optimization

1. **Update meta tags** in `index.html`:
   ```html
   <title>Your Name - Full Stack Developer</title>
   <meta name="description" content="Your professional description">
   ```

2. **Add structured data** for better search visibility
3. **Optimize images** - Compress and use appropriate formats
4. **Add sitemap.xml** for search engines

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/pages/Portfolio.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Custom Animations

Add new animations in `tailwind.config.ts`:
```typescript
keyframes: {
  'slide-up': {
    '0%': { transform: 'translateY(100px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' }
  }
},
animation: {
  'slide-up': 'slide-up 0.6s ease-out'
}
```

### Additional Components

The template uses Shadcn/ui components. Add more:
```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add badge
```

## 📝 License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Support

If you find this template helpful:
- ⭐ Star the repository
- 🐛 Report bugs via issues
- 💡 Suggest improvements
- 📤 Share with other developers

## 📧 Contact

For questions or custom development:
- Email: developer@example.com
- GitHub: @yourusername
- LinkedIn: /in/yourprofile

---

**Made with ❤️ for the developer community**

Start building your professional presence today!