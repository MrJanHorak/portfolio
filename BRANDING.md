# Jan Horak Portfolio - Branding Guide

## 🎨 Color Palette

### Primary Colors

- **Primary Orange**: `#ff6b35` - Main brand color, used for CTAs and highlights
- **Secondary Amber**: `#f7931e` - Secondary actions and accents
- **Accent Gold**: `#ffb627` - Tertiary highlights and special elements

### Light Theme

- **Background**: `#fef7f0` - Warm light background
- **Text Dark**: `#5d4037` - Primary text color
- **Text Medium**: `#8d6e63` - Secondary text color
- **Card Background**: `rgba(255, 248, 241, 0.8)` - Translucent cards

### Dark Theme

- **Background**: `#2c1810` - Warm dark background
- **Text Light**: `#ffcc9c` - Primary text color
- **Text Secondary**: `#d7b899` - Secondary text color
- **Card Background**: `rgba(62, 39, 35, 0.8)` - Translucent cards

## 🎯 Logo & Favicon

### Design Philosophy

The logo features the initials "JH" in a clean, modern style with:

- Warm gradient background matching the site's color scheme
- Clean typography with rounded edges
- Adaptive colors for light/dark themes
- Subtle glow effects for modern appeal

### Logo Variations

1. **Primary Logo**: Full logo with gradient background
2. **Light Theme**: Light background with dark text
3. **Dark Theme**: Dark background with light text
4. **Adaptive**: Automatically switches based on system preference

### Favicon System

- **favicon.svg**: Modern SVG with theme detection
- **favicon-light.svg**: Optimized for light backgrounds
- **favicon-dark.svg**: Optimized for dark backgrounds
- **apple-touch-icon.svg**: Large format for iOS devices
- **manifest.json**: PWA support with theme colors

## 🔧 Usage

### In Components

```jsx
import Logo from './Components/Logo/Logo';

// Basic usage
<Logo size={40} theme="light" />

// With text
<Logo size={60} showText={true} theme="dark" />
```

### CSS Custom Properties

```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #f7931e;
  --accent-color: #ffb627;
}
```

### Theme Implementation

The favicon automatically updates when users switch between light and dark themes, providing a consistent branded experience across all device interfaces.

## 🎨 Design Tokens

### Spacing

- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 1.5rem (24px)
- LG: 2rem (32px)
- XL: 3rem (48px)

### Border Radius

- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px

### Typography

- **Primary**: 'Inter' - Body text and UI elements
- **Heading**: 'Poppins' - Headlines and titles
- **Code**: 'JetBrains Mono' - Code blocks and technical content

This branding system ensures consistency across all touchpoints while maintaining the warm, modern aesthetic of the portfolio.
