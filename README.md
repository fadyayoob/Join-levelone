# Level One Landing Page

A modern, responsive landing page for Level One - an AI-powered health coaching app that helps users take control of their wellbeing through voice logging, pattern recognition, and personalized insights.

## ✨ Key Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Working testimonials carousel, mobile navigation
- **Performance Optimized**: No inline JavaScript, proper React components
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 🚀 Recent Improvements

### 1. **Technical Improvements**
- Converted to client-side React components
- Removed all inline JavaScript
- Created reusable `TestimonialsCarousel` component
- Added proper TypeScript interfaces
- Improved mobile responsiveness

### 2. **User Experience Enhancements**
- Added mobile navigation menu with hamburger button
- Enhanced hero section with trust indicators and dual CTAs
- Improved testimonials with working carousel and dot indicators
- Added FAQ section addressing common concerns
- Added trust indicators section highlighting security features
- Enhanced footer with comprehensive links and information

### 3. **Conversion Optimization**
- Added prominent CTA section before FAQ
- Improved button styling with hover effects
- Added social proof elements (user count, trust badges)
- Enhanced pricing section with better visual hierarchy
- Added "How it works" section with clear step-by-step process

### 4. **Visual Improvements**
- Better color scheme and gradients
- Improved typography hierarchy
- Enhanced mobile phone mockup
- Better spacing and layout consistency
- Smooth transitions and micro-interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Components**: Custom UI components with shadcn/ui
- **Language**: TypeScript
- **State Management**: React hooks (useState, useEffect)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px  
- **Desktop**: ≥ 1024px

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
l1-landing-page/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── testimonials-carousel.tsx  # Custom carousel component
│   └── theme-provider.tsx
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎯 Key Sections

1. **Hero Section**: Main value proposition with dual CTAs
2. **Personal Coach**: Mobile app mockup demonstration
3. **Features**: Key benefits and capabilities
4. **How It Works**: 4-step process explanation
5. **Testimonials**: User success stories with carousel
6. **FAQ**: Common questions and answers
7. **Pricing**: Three-tier pricing structure
8. **Trust Indicators**: Security and reliability highlights
9. **Footer**: Comprehensive site navigation

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.js` or by modifying the CSS variables in `globals.css`.

### Content
All text content is easily editable in the main `page.tsx` file. Images can be replaced in the `public/` directory.

### Components
New components can be added to the `components/` directory and imported as needed.

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized and responsive
- **Animations**: CSS-based for smooth performance

## 🌟 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement analytics tracking
- [ ] Add A/B testing capabilities
- [ ] Integrate with CMS for content management
- [ ] Add multi-language support
- [ ] Implement progressive web app features

## 📄 License

This project is proprietary to Level One Ltd. All rights reserved.

## 🤝 Contributing

For internal development team use only. Please follow the established coding standards and component patterns.
