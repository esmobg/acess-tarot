# Contributing to Accessible Tarot App

Thank you for your interest in contributing! This project prioritizes accessibility and user experience.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Make your changes
5. Test thoroughly (see Testing section)
6. Submit a pull request

## Code Standards

### Accessibility Requirements

- **WCAG 2.2 Level AA Compliance**: All features must meet accessibility standards
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Screen Reader Support**: Test with NVDA, JAWS, or VoiceOver
- **Semantic HTML**: Use proper HTML elements
- **ARIA Labels**: Provide appropriate ARIA attributes
- **Focus Management**: Ensure clear focus indicators

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain existing code style and patterns
- Add comments for complex logic
- Use descriptive variable and function names

### Translation Guidelines

When adding new features:

1. Add translations to `src/i18n/translations.ts`
2. Add both English and Bulgarian translations
3. Use the `useTranslation()` hook in components
4. Test language switching

## Testing Checklist

Before submitting a PR, please verify:

- [ ] All tests pass (`npm run build`)
- [ ] No linter errors (`npm run lint`)
- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly
- [ ] Works in both light and dark mode
- [ ] Works with high contrast mode
- [ ] Works with reduced motion
- [ ] Font size scaling works
- [ ] Language switching works
- [ ] Mobile responsive
- [ ] No console errors

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Submit PR with clear description
6. Address any review feedback

## Questions?

Feel free to open an issue for questions or discussions.
