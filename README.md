# Accessible Tarot Web Application

A modern, fully accessible web-based Tarot card reading platform designed primarily for users with visual impairments, including blind and low-vision users. This application prioritizes accessibility, usability with screen readers, and keyboard navigation as core features.

## ✨ Features

### Core Functionality

- **Card of the Day**: Receive a randomly selected card each day with detailed interpretations (automatically resets at midnight)
- **Tarot Readings**: 
  - Single Card Reading
  - Three Card Spread (Past/Present/Future)
- **Card Library**: Browse and search all 78 Tarot cards with detailed meanings
- **Accessibility Settings**: Customize the application to meet your needs
- **Multilingual Support**: English and Bulgarian languages

### Accessibility Features

- **WCAG 2.2 Level AA Compliant**: Fully compliant with web accessibility standards
- **Screen Reader Support**: Tested with NVDA, JAWS, and VoiceOver
- **Keyboard Navigation**: 100% usable without a mouse
- **High Contrast Mode**: Enhanced visibility option
- **Adjustable Font Sizes**: Scale from 80% to 200%
- **Reduced Motion**: Option to disable animations
- **Dark/Light Mode**: Automatic theme switching with manual override
- **ARIA Live Regions**: Dynamic content announcements
- **Focus Indicators**: Clear visual focus indicators
- **Skip Links**: Quick navigation to main content

## 🛠️ Technology Stack

- **React 18+** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **date-fns** for date handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/esmobg/accessible-tarot-app.git
cd accessible-tarot-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:3011`)

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory. You can preview it with:

```bash
npm run preview
```

### Deployment

The app is a static SPA. Deploy the `dist` folder to any static host.

- **Netlify**: Drag-and-drop `dist`, or connect the repo. SPA routing is handled by `public/_redirects`.
- **Vercel**: Connect the repo; build command `npm run build`, output directory `dist`. SPA routing is in `vercel.json`.
- **GitHub Pages**: Set `base` in `vite.config.ts` to your repo path (e.g. `base: '/accessible-tarot-app/'`), then build and deploy `dist` to the `gh-pages` branch or GitHub Actions.

Optional: copy `.env.example` to `.env` and set any `VITE_*` variables for your environment.

For full deployment steps and user delivery checklist, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📁 Project Structure

```
tarrot-app/
├── public/
│   ├── cards/          # Tarot card images (78 cards)
│   ├── icons/          # Application icons
│   ├── flags/          # Language flag icons
│   ├── logo.svg        # Application logo
│   └── favicon.svg     # Browser favicon
├── src/
│   ├── components/
│   │   ├── accessible/     # Accessibility core components
│   │   ├── cards/          # Card display components
│   │   ├── common/         # Reusable UI components
│   │   ├── library/        # Card library components
│   │   ├── layout/         # Layout components
│   │   ├── readings/       # Reading components
│   │   └── settings/       # Settings components
│   ├── data/               # Tarot card data and translations
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization (translations)
│   ├── styles/             # Global styles
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── scripts/                # Utility scripts (optional)
└── package.json
```

## 🌐 Multilingual Support

The application supports two languages:
- 🇬🇧 **English (en)** - Default language
- 🇧🇬 **Bulgarian (bg)** - Full translation

Language can be switched using the language switcher in the header. The preference is saved in localStorage.

## ♿ Accessibility Guidelines

### For Developers

- All interactive elements must be keyboard accessible
- All images must have alt text
- All form inputs must have labels
- Use semantic HTML elements
- Provide ARIA labels where needed
- Test with screen readers
- Ensure sufficient color contrast
- Provide focus indicators
- Use ARIA live regions for dynamic content

### Keyboard Shortcuts

- **Tab**: Navigate between elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and dialogs
- **Arrow Keys**: Navigate card grids
- **Home/End**: Jump to first/last item in lists

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test with NVDA screen reader (Windows)
- [ ] Test with JAWS screen reader (Windows)
- [ ] Test with VoiceOver (macOS/iOS)
- [ ] Test keyboard navigation (Tab, Arrow keys, Enter, Escape)
- [ ] Test with high contrast mode enabled
- [ ] Test with reduced motion enabled
- [ ] Test font size scaling
- [ ] Test dark/light mode switching
- [ ] Test language switching
- [ ] Test Card of the Day reset at midnight
- [ ] Test on mobile devices
- [ ] Test with browser zoom (up to 200%)

### Automated Testing (Playwright)

```bash
# Run all tests (Chromium)
npm run ci

# Run full suite (all browsers; requires npx playwright install)
npm test

# Run tests in UI mode
npm run test:ui
```

Run accessibility audits using:
- Lighthouse (Chrome DevTools)
- axe DevTools
- WAVE browser extension

## 🌍 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run ci` - Run Playwright tests (Chromium, for CI/GitHub)
- `npm test` - Run full Playwright test suite

## 🤝 Contributing

When contributing to this project:

1. Maintain accessibility standards (WCAG 2.2 AA)
2. Test with screen readers
3. Ensure keyboard navigation works
4. Use semantic HTML
5. Provide ARIA labels where needed
6. Test in multiple browsers
7. Update translations for new features

## 🚀 Pushing to GitHub

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `accessible-tarot-app`).
2. In your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Accessible Tarot app"
   git branch -M main
   git remote add origin https://github.com/esmobg/accessible-tarot-app.git
   git push -u origin main
   ```
3. Ensure `.gitignore` excludes `node_modules`, `dist`, `test-results`, and `.env` (already configured).

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Tarot card meanings and interpretations are based on traditional Tarot wisdom
- Accessibility guidelines follow WCAG 2.2 standards
- Design inspired by modern, minimalistic Tarot aesthetics
