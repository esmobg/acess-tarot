/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tarot: {
          // WCAG AA/AAA compliant palette — 2026 modern
          primary: '#6B3410',    // Rich sienna — 8.5:1 on white (AAA)
          secondary: '#C49B1A',  // Deep gold — decorative/large text
          accent: '#3A3330',     // Warm dark — 11:1 on white (AAA)
          light: '#FAF7F0',      // Warm cream
          dark: '#1A1410',       // Warm near-black
          muted: '#4A4541',       // Solid muted — ≥4.5:1 on cream (AA)
          'muted-dark': '#B8B4B0', // Solid muted on dark bg — ≥4.5:1 (AA)
        },
      },
      spacing: {
        'touch': '44px',
      },
      fontSize: {
        'xs':  ['0.75rem',  { lineHeight: '1.6' }],
        'sm':  ['0.875rem', { lineHeight: '1.6' }],
        'base':['1rem',     { lineHeight: '1.6' }],
        'lg':  ['1.125rem', { lineHeight: '1.6' }],
        'xl':  ['1.25rem',  { lineHeight: '1.5' }],
        '2xl': ['1.5rem',   { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem',  { lineHeight: '1.2' }],
        '5xl': ['3rem',     { lineHeight: '1.1' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(26,20,16,0.08), 0 4px 16px -4px rgba(26,20,16,0.06)',
        'lifted': '0 8px 24px -4px rgba(26,20,16,0.10), 0 2px 8px -2px rgba(26,20,16,0.04)',
        'glow': '0 0 24px rgba(196,155,26,0.15), 0 0 48px rgba(196,155,26,0.08)',
      },
    },
  },
  plugins: [],
}
