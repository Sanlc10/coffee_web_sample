# Brussels Brewery - Coffee Shop Website

A modern, responsive single-page website for Brussels Brewery, a cozy coffee shop. Built with Vite, React, JavaScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Sticky Navigation**: Smart navbar that stays fixed while scrolling
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Newsletter Signup**: Functional email subscription form
- **Social Media Integration**: Links to Instagram, Facebook, and Pinterest
- **Image Gallery**: Curated photos from Unsplash
- **Multiple Sections**:
  - Hero section with call-to-action
  - Handmade Just For You
  - Made In Brussels story
  - Social media showcase
  - Location information
  - Footer with newsletter

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI component library
- **JavaScript** - Programming language
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Project Structure

```
coffee_web_sample/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar with mobile menu
│   │   ├── Button.jsx       # Reusable button component
│   │   └── Footer.jsx       # Footer with newsletter
│   ├── sections/            # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── HandmadeSection.jsx
│   │   ├── MadeInBrusselsSection.jsx
│   │   ├── SocialMediaSection.jsx
│   │   └── LocationsSection.jsx
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles & Tailwind imports
│   └── main.jsx             # App entry point
├── public/                  # Public assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

## Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Color Palette

The website uses a warm, coffee-inspired color scheme:

- **Cream** (`#F5E6D3`) - Light backgrounds
- **Dark** (`#1A1A1A`) - Primary dark sections
- **Darker** (`#0D0D0D`) - Footer background
- **Brown** (`#6B5D52`) - Social media section
- **Brown Dark** (`#3E342E`) - Accent elements
- **Gold** (`#D4AF37`) - CTA buttons and accents

## Typography

- **Playfair Display** - Headings and titles (serif)
- **Inter** - Body text and UI elements (sans-serif)

## Components

### Button Component
Reusable button with three variants:
- `primary` - Dark background with white text
- `secondary` - Outlined with transparent background
- `outline` - White outline for dark backgrounds

### Navbar Component
- Sticky positioning
- Responsive hamburger menu for mobile
- Smooth scroll navigation
- Changes style on scroll

### Footer Component
- Newsletter signup with email validation
- Social media links (Instagram, Facebook, Pinterest)
- Legal links (Privacy, Terms, Cookies)
- Copyright information

## Sections

1. **Hero Section** - Main headline with CTA buttons
2. **Handmade Section** - Product showcase
3. **Made In Brussels** - Brand story
4. **Social Media** - Instagram/Facebook integration with gallery
5. **Locations** - Three store locations
6. **Footer** - Newsletter and contact info

## Images

All images are sourced from Unsplash with optimized URLs for performance. Images are lazy-loaded and responsive.

## Accessibility

- Semantic HTML elements
- Alt text for all images
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Changing Colors
Edit the `tailwind.config.js` file to modify the color palette:

```javascript
colors: {
  'cream': '#F5E6D3',
  'dark': '#1A1A1A',
  // Add or modify colors here
}
```

### Changing Fonts
Update the Google Fonts import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Adding Sections
1. Create a new component in `src/sections/`
2. Import and add it to `App.jsx`
3. Update navbar links if needed

## Performance Optimizations

- Optimized images from Unsplash CDN
- Tailwind CSS purges unused styles in production
- Vite's fast HMR (Hot Module Replacement)
- Lazy loading for images
- Minimal JavaScript bundle

## License

This project is for educational and commercial use.

## Credits

- **Design & Development**: Brussels Brewery Team
- **Images**: Unsplash
- **Icons**: React Icons
- **Powered by**: CMDigital

## Contact

For questions or support, visit one of our locations:
- Brussels: Rue de Midi 45, 1000 Brussels, Belgium
- Anderlecht: Pl. de Linde 21, 1070 Anderlecht, Belgium
- Machelen: Diegemplein 2, 1830 Machelen, Belgium

---

**Brewed To Perfection, Served With Love** ☕
