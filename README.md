# AP-group Hero Section

A modern, premium website hero section featuring a sleek, futuristic design with an animated 3D parametric wave mesh.

![Hero Section Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20Canvas-blue)

## 🎨 Design Overview

This hero section is designed for **AP-group**, a modern AI/tech consultancy, featuring:

- **Dark graphite background** (#0F1115) with soft atmospheric lighting
- **Floating 3D parametric wave mesh** with organic motion
- **Forest green (#1F6F54) and teal (#2DD4BF)** accent colors
- **Premium typography** using Inter font family
- **Subtle animations** and depth effects
- **Mouse parallax interaction**

### Design Inspiration

Inspired by [Junni](https://next.junni.co.jp) - combining minimalism with visual complexity through the 3D element.

## 📁 Project Structure

```
Demo/
├── index.html              # Main HTML structure
├── styles.css              # Complete styling and animations
├── hero-animation.js       # 3D canvas animation logic
├── design-specs.json       # Comprehensive design specifications
├── README.md              # This file
└── LICENSE                # Project license
```

## 🚀 Quick Start

### Option 1: Direct Browser Open

Simply open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local Server

For best results, serve with a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 🎯 Features

### Visual Elements

- ✨ **Animated 3D Mesh**: Parametric wave form with 625 particles (25×25 grid)
- 🌊 **Organic Motion**: Three-wave algorithm for natural, flowing movement
- 💫 **Atmospheric Glow**: Two floating orbs with blur effects
- 🎭 **Depth Projection**: 3D-to-2D projection with perspective
- 🌈 **Dynamic Colors**: Interpolation between forest green and teal based on wave height

### Layout Components

1. **Navigation Bar**
   - Fixed position with backdrop blur
   - "AP-group" gradient wordmark
   - "Contact" link with animated underline

2. **Hero Content**
   - Center-aligned headline with gradient text
   - Descriptive subheadline
   - Two prominent CTA buttons
   - Horizontal divider with gradient
   - Trust-building tagline

### Interactions

- **Mouse Parallax**: Mesh shifts subtly based on cursor position
- **Button Hover Effects**: Lift animation with shadow increase
- **Ripple Effect**: Click feedback on buttons
- **Navigation Underline**: Animated from left on hover

## 🎨 Design System

### Color Palette

```css
--bg-primary:    #0F1115  /* Dark graphite */
--forest-green:  #1F6F54  /* Primary brand */
--teal:          #2DD4BF  /* Accent highlights */
--text-primary:  #FFFFFF  /* Pure white */
--text-secondary:#A1A1AA  /* Zinc 400 */
--text-muted:    #52525B  /* Zinc 600 */
```

### Typography Scale

| Element       | Size (Desktop) | Weight | Line Height |
|---------------|----------------|--------|-------------|
| Headline      | 5.5rem (88px)  | 800    | 1.1         |
| Subheadline   | 1.25rem (20px) | 400    | 1.6         |
| Button        | 1rem (16px)    | 600    | —           |
| Tagline       | 0.875rem (14px)| 500    | —           |

### Spacing

- Section padding: 4rem
- Content max-width: 900px
- Button gap: 1rem
- Element spacing follows 8px grid system

## 🛠 Technical Implementation

### 3D Animation Algorithm

The parametric wave mesh uses three combined sine/cosine waves:

```javascript
wave1 = sin(x * 0.003 + time * 0.5) * 80
wave2 = cos(y * 0.003 + time * 0.7) * 64
wave3 = sin((x + y) * 0.0015 + time * 0.3) * 40
finalZ = wave1 + wave2 + wave3
```

### Performance

- **Target**: 60 FPS
- **Rendering**: HTML5 Canvas 2D
- **Animation**: requestAnimationFrame
- **Motion Blur**: Frame persistence technique (0.3 opacity)

### Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full  |
| Firefox | 88+     | ✅ Full  |
| Safari  | 14+     | ✅ Full  |
| Edge    | 90+     | ✅ Full  |

### Accessibility

- ♿ **Keyboard Navigation**: Full support
- 🎯 **Focus Indicators**: 2px green outline
- 🎬 **Reduced Motion**: Respects `prefers-reduced-motion`
- 📱 **Responsive**: Mobile, tablet, desktop breakpoints
- 🔤 **Semantic HTML**: Proper heading hierarchy
- 🎨 **Contrast Ratios**: WCAG AAA compliant

## 📱 Responsive Design

### Breakpoints

- **Desktop**: 1920px (default)
- **Tablet**: ≤768px
- **Mobile**: ≤480px

### Mobile Optimizations

- Reduced headline size (2rem on mobile)
- Stacked button layout
- Smaller glow orbs (300px vs 600px)
- Adjusted spacing and padding

## 🎭 Animation Timeline

| Element      | Delay | Duration | Easing   |
|--------------|-------|----------|----------|
| Hero Content | 0s    | 1.2s     | ease-out |
| Headline     | 0.2s  | 1.2s     | ease-out |
| Subheadline  | 0.4s  | 1.2s     | ease-out |
| Buttons      | 0.6s  | 1.2s     | ease-out |
| Divider      | 0.8s  | 1.2s     | ease-out |
| Tagline      | 1.0s  | 1.2s     | ease-out |

## 🔧 Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0F1115;     /* Background */
    --forest-green: #1F6F54;   /* Primary brand */
    --teal: #2DD4BF;           /* Accents */
}
```

### Adjusting 3D Mesh

Modify parameters in `hero-animation.js`:

```javascript
this.gridSize = 30;           // Particle spacing
const rows = 25;              // Grid rows
const cols = 25;              // Grid columns
const amplitude = 80;         // Wave height
const frequency = 0.003;      // Wave density
```

### Typography

Change font in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Then update in `styles.css`:

```css
font-family: 'Satoshi', sans-serif;
```

## 📄 Design Specifications

See `design-specs.json` for complete design system documentation including:

- Viewport settings for multiple devices
- Complete color system with RGB values
- Typography scale and hierarchy
- 3D visual implementation details
- Animation specifications
- Figma implementation guide
- WebGL/Three.js integration specs
- Accessibility requirements
- Performance targets

### AI-Ready Tags

The `design-specs.json` file includes structured data for:

- **Figma Auto Layout**: Layer structure and component definitions
- **WebGL Implementation**: Three.js scene setup and shader suggestions
- **Design Tokens**: Exportable for Figma plugins or CSS-in-JS
- **Animation Specs**: Keyframes and timing functions

## 🎬 Demo & Preview

### Screenshot

The hero section features:
- Full viewport height (100vh)
- Center-aligned content
- Animated background mesh
- Floating glow orbs
- Professional typography hierarchy

## 🚀 Deployment

### Static Hosting

Deploy to any static hosting service:

```bash
# Netlify
netlify deploy --prod

# Vercel
vercel --prod

# GitHub Pages
# (Push to gh-pages branch)

# AWS S3
aws s3 sync . s3://your-bucket-name --acl public-read
```

### Performance Optimization

For production:

1. **Minify CSS/JS**:
   ```bash
   npx csso styles.css -o styles.min.css
   npx terser hero-animation.js -o hero-animation.min.js
   ```

2. **Font Optimization**: Use `font-display: swap`
3. **CDN**: Serve static assets via CDN
4. **Compression**: Enable Gzip/Brotli

## 📊 Performance Metrics

Target metrics:

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Frame Rate**: 60 FPS

## 🔮 Future Enhancements

Potential improvements:

- [ ] WebGL implementation with Three.js for better performance
- [ ] Audio-reactive mesh (responds to music/voice)
- [ ] Dark/light mode toggle
- [ ] Scroll-triggered animations for content below fold
- [ ] Interactive mesh (click to create ripples)
- [ ] Video background alternative
- [ ] A/B testing framework for CTAs
- [ ] Analytics integration

## 📝 License

See `LICENSE` file for details.

## 🤝 Contributing

This is a demo project for AP-group. For modifications:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across browsers
5. Submit a pull request

## 📞 Contact

For inquiries about AP-group or this design:

- **Company**: AP-group
- **Project**: Hero Section Design
- **Style**: Tech-forward, premium, minimalist

---

**Built with precision. Designed for impact.**
