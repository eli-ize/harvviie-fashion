# HARVVIIE - South African Fashion

A sophisticated, modern fashion e-commerce website for HARVVIIE, a South African fashion brand celebrating African heritage through contemporary design.

## 🌍 About HARVVIIE

HARVVIIE is a South African fashion company that blends traditional African aesthetics with modern design sensibilities. Founded in Cape Town, every piece celebrates local craftsmanship, sustainable practices, and the rich cultural heritage of South Africa.

## ✨ Features

- **Modern Design**: Elegant, high-fashion aesthetic with smooth animations
- **Responsive**: Fully optimized for all device sizes
- **Product Showcase**: Filterable collection grid with quick view functionality
- **Lookbook Gallery**: Dynamic image gallery showcasing style inspiration
- **Brand Story**: Compelling narrative about South African heritage and values
- **Newsletter Integration**: Email capture for community building
- **Social Media Ready**: Integrated social links and shareable content

## 🎨 Design System

### Colors
- **Harvviie Black** (#0A0A0A) - Primary dark
- **Harvviie Gold** (#D4AF37) - Accent/luxury
- **Harvviie Sand** (#E8DCC4) - Secondary background
- **Harvviie Cream** (#FAF8F3) - Primary background
- **Harvviie Terracotta** (#C65D3B) - Earth tones
- **Harvviie Sage** (#8B9B87) - Natural accents

### Typography
- **Display**: Cormorant Garamond - Elegant serif for headlines
- **Heading**: Montserrat - Bold sans-serif for titles
- **Body**: Inter - Clean, readable for content

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first styling
- **Tailwind Catalyst** - Premium components
- **@headlessui/react** - Accessible UI primitives

## 📦 Installation

1. Navigate to the project directory:
```bash
cd harvviie-fashion
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser to `http://localhost:5173`

## 📁 Project Structure

```
harvviie-fashion/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation with marquee banner
│   │   ├── Hero.jsx          # Main hero section
│   │   ├── Collection.jsx    # Product grid & lookbook
│   │   ├── Story.jsx         # Brand story & values
│   │   └── Footer.jsx        # Footer with newsletter
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js
└── package.json
```

## 🎯 Key Sections

### Header
- Animated marquee announcement banner
- Sticky navigation with smooth backdrop blur
- Mobile-responsive menu
- Shopping bag counter

### Hero Section
- Full-screen impact with large typography
- Seasonal collection promotion
- Call-to-action buttons
- Brand statistics showcase
- Floating discount badge

### Collection
- Filterable product grid (All, Women, Men, Unisex, Accessories)
- Hover effects with quick view
- Category badges
- Price display in South African Rand (R)

### Lookbook
- Masonry-style image gallery
- Hover overlay with titles
- Responsive grid layout

### Brand Story
- Heritage narrative
- Sustainability commitment
- Community values
- Visual storytelling with images
- Statistics and impact metrics

### Footer
- Newsletter signup form
- Comprehensive link sections
- Social media integration
- Legal links and policies

## 🛠️ Customization

### Adding Products
Edit the `collections` array in `src/components/Collection.jsx`:

```javascript
{
  id: 7,
  name: 'Your Product Name',
  category: 'Women', // or 'Men', 'Unisex', 'Accessories'
  description: 'Product description',
  price: 'From R 1,499',
  image: 'image-url.jpg',
}
```

### Changing Colors
Modify `tailwind.config.js`:

```javascript
colors: {
  'harvviie-black': '#0A0A0A',
  'harvviie-gold': '#D4AF37',
  // Add your custom colors
}
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌟 Animation Features

- Marquee scrolling announcement
- Fade-in effects on load
- Slide-up content animations
- Smooth hover transitions
- Image scale effects
- Bounce scroll indicator

## 🔧 Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This is a demonstration project for HARVVIIE, a South African fashion brand.

## 🙏 Credits

- Images: Unsplash
- Icons: Heroicons
- Fonts: Google Fonts (Cormorant Garamond, Montserrat, Inter)

---

**Made with ❤️ in South Africa**
