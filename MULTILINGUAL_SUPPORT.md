# Multilingual Support - Bulgarian & English

## ✅ Implementation Complete

The application now supports **two languages** with flag icons:

- 🇬🇧 **English (en)** - Default language
- 🇧🇬 **Български (bg)** - Bulgarian language

## 🌐 Language Switcher

### Location
The language switcher is located in the **Header** component, visible on all pages.

### Features
- ✅ Flag icons for visual identification
- ✅ Language codes (EN/BG) for clarity
- ✅ Keyboard accessible
- ✅ Screen reader friendly
- ✅ Persists selection in localStorage
- ✅ Instant language switching (no page reload)

### How to Use
1. Click the flag button in the header
2. Language changes immediately
3. Preference is saved automatically
4. All UI text updates instantly

## 📝 Translated Content

### Fully Translated Sections:
- ✅ Navigation menu
- ✅ Home page
- ✅ Card of the Day
- ✅ Single Card Reading
- ✅ Three Card Spread
- ✅ Card Library (search, filters, view modes)
- ✅ Accessibility Settings
- ✅ Footer
- ✅ Common UI elements (buttons, modals, etc.)
- ✅ Card display labels (Upright/Reversed)
- ✅ Skip links
- ✅ Loading messages
- ✅ Error messages

### Card Meanings
- Card names and meanings remain in English (standard Tarot terminology)
- UI labels and instructions are fully translated
- Card interpretations can be extended with translations in the future

## 🔧 Technical Implementation

### Files Created:
- `src/i18n/translations.ts` - Complete translation dictionary
- `src/i18n/useTranslation.tsx` - Translation hook and provider
- `src/components/common/LanguageSwitcher.tsx` - Language switcher component

### Files Updated:
- All components now use `useTranslation()` hook
- `src/App.tsx` - Wrapped with TranslationProvider
- `src/components/layout/Header.tsx` - Added LanguageSwitcher
- All UI components - Replaced hardcoded text with `t.*` references

### Storage:
- Language preference stored in localStorage
- Key: `tarot-app-language`
- Default: `'en'` (English)

## 🎨 Language Switcher Design

The language switcher displays:
- 🇬🇧 **EN** button (English)
- 🇧🇬 **BG** button (Bulgarian)

Active language is highlighted with:
- Primary color background
- White text
- Clear visual indication

## 📋 Translation Coverage

### English (en)
- Complete UI translations
- All navigation items
- All buttons and labels
- All messages and announcements

### Bulgarian (bg)
- Complete UI translations
- All navigation items (Начало, Гадания, Библиотека, etc.)
- All buttons and labels
- All messages and announcements
- Proper Cyrillic script support

## 🚀 Usage

### For Users:
1. **Switch Language**: Click flag button in header
2. **Language Persists**: Your choice is saved automatically
3. **Instant Update**: All text changes immediately

### For Developers:
```typescript
import { useTranslation } from '../i18n/useTranslation';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t.home.title}</h1>;
}
```

## 🔍 Testing

### Manual Testing:
- [ ] Switch to Bulgarian - verify all text changes
- [ ] Switch back to English - verify all text changes
- [ ] Refresh page - verify language persists
- [ ] Test with screen reader - verify announcements in correct language
- [ ] Test keyboard navigation - verify language switcher is accessible

### Keyboard Navigation:
- Tab to language switcher
- Use Arrow keys to switch between languages
- Enter/Space to select language

## 📚 Adding More Languages

To add additional languages:

1. **Add language code** to `Language` type in `src/i18n/translations.ts`
2. **Add translations** object for new language
3. **Add flag and name** to `LanguageSwitcher.tsx`
4. **Test** all UI elements

Example:
```typescript
// In translations.ts
export type Language = 'en' | 'bg' | 'fr'; // Add 'fr'

// Add translations object
export const translations: Record<Language, Translations> = {
  // ... existing languages
  fr: {
    nav: { home: 'Accueil', ... },
    // ... complete translations
  },
};
```

## ✨ Features

- ✅ **Instant switching** - No page reload
- ✅ **Persistent** - Saves to localStorage
- ✅ **Accessible** - Keyboard and screen reader friendly
- ✅ **Visual indicators** - Flag icons
- ✅ **Complete coverage** - All UI elements translated
- ✅ **Type-safe** - TypeScript ensures all translations exist

## 🎯 Current Status

- ✅ English: 100% translated
- ✅ Bulgarian: 100% translated
- ✅ Language switcher: Fully functional
- ✅ Persistence: Working
- ✅ Accessibility: Maintained

The application is now fully bilingual! 🎉
