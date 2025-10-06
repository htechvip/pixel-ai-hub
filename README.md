# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4e1893a0-5759-4bb7-a6d4-ea83e0e5a353

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4e1893a0-5759-4bb7-a6d4-ea83e0e5a353) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Vitest (Unit Testing)
- Playwright (E2E Testing)

## Running Tests

This project includes comprehensive tests for header and footer navigation functionality.

### Prerequisites

Make sure you have installed all dependencies:

```sh
npm install
```

### Unit Tests

Run the header and footer navigation unit tests:

```sh
# Run header and footer tests specifically
npm run test:header-footer

# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### End-to-End Tests (Playwright)

Run the complete E2E test suite:

```sh
# Run all E2E tests
npm run test:e2e

# Run E2E tests with Playwright UI (interactive mode)
npm run test:e2e:ui

# Run E2E tests in headed mode (see browser actions)
npm run test:e2e:headed

# Run mobile-specific E2E tests
npm run test:e2e:mobile
```

### Test Coverage

The test suite covers:

- **Header Navigation**: All navigation links, dropdown menus, mobile hamburger menu
- **Footer Navigation**: All footer links, hash vs page route handling
- **Cross-page Navigation**: Blog ↔ Newsletter ↔ Home page sections
- **Language Support**: English and Chinese navigation
- **Mobile Responsive**: Mobile viewport testing
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Form Focus Rings**: Input focus ring display (fixed clipping issue)

### Test Files

- **Unit Tests**: `src/test/header-footer.test.tsx`
- **E2E Tests**: `tests/e2e/header-footer-navigation.spec.ts`
- **Focus Ring Tests**: `tests/e2e/form-focus-ring.spec.ts`
- **Test Documentation**: `tests/README.md`

### Browser Support

E2E tests run on:
- Chromium (Desktop)
- Firefox (Desktop)  
- WebKit/Safari (Desktop)
- Mobile Chrome (Mobile)
- Mobile Safari (Mobile)

### Test Results

- **Unit Tests**: ✅ 21/21 passing
- **E2E Tests**: Multi-browser compatibility
- **Screenshots**: Captured on test failures in `tests/screenshots/`

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4e1893a0-5759-4bb7-a6d4-ea83e0e5a353) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
