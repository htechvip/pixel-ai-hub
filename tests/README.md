# Header and Footer Navigation Tests

This directory contains comprehensive tests for header and footer navigation functionality.

## Test Structure

### Unit Tests (`src/test/header-footer.test.tsx`)
- **Header Component Tests**: Tests for English and Chinese navigation
- **Footer Component Tests**: Tests for navigation links and content
- **Integration Tests**: Tests for consistency between header and footer

### End-to-End Tests (`tests/e2e/`)
- **header-footer-navigation.spec.ts**: Complete navigation flow tests
- **form-focus-ring.spec.ts**: Tests for input focus ring functionality

## Running Tests

### Unit Tests
```bash
# Run header and footer unit tests
npm run test:header-footer

# Run all unit tests
npm run test
```

### End-to-End Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in headed mode (see browser)
npm run test:e2e:headed

# Run mobile E2E tests
npm run test:e2e:mobile
```

## Test Coverage

### Header Tests
- ✅ Navigation items rendering
- ✅ Hash link navigation (#why-join, #instructor, etc.)
- ✅ Page route navigation (/blog, /newsletter)
- ✅ AI Courses dropdown functionality
- ✅ Mobile hamburger menu
- ✅ Chinese language support

### Footer Tests
- ✅ Navigation links rendering
- ✅ Hash link vs page route handling
- ✅ Co-organizers section
- ✅ Chinese language support
- ✅ Consistent navigation with header

### E2E Tests
- ✅ Complete navigation flows
- ✅ Cross-page navigation
- ✅ Mobile responsive behavior
- ✅ Accessibility features
- ✅ Form focus ring functionality

## Key Features Tested

1. **Navigation Links**: All header and footer links work correctly
2. **Language Support**: Both English and Chinese navigation
3. **Mobile Responsive**: Hamburger menu and mobile navigation
4. **Accessibility**: Proper ARIA labels and keyboard navigation
5. **Focus Management**: Input focus rings display properly
6. **Cross-browser**: Tests run on Chromium, Firefox, and WebKit

## Test Environment Setup

The tests use:
- **Vitest** for unit tests with React Testing Library
- **Playwright** for end-to-end tests
- **Mocked window.location** for pathname testing
- **BrowserRouter** for React Router testing

## Screenshots

E2E tests capture screenshots on failure in `tests/screenshots/`:
- `email-input-focused.png`
- `first-name-input-focused.png`
- `mobile-input-focused.png`
- `chinese-input-focused.png`
