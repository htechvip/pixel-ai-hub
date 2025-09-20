# Testing Suite for AI Jedi Hub

This directory contains comprehensive test suites for checking broken links, images, and content integrity.

## Test Suites

### 🔗 External Links Tests (`external-links.test.ts`)
- Validates URL format for all external links
- Checks accessibility of external URLs
- Ensures HTTPS usage for external links
- Prevents internal/localhost URLs in content

### 🖼️ Images Tests (`images.test.ts`)
- Validates image URL format
- Checks accessibility of all images
- Verifies proper image content types
- Ensures optimized image URLs (especially Unsplash)

### 👥 Reviewer Avatars Tests (`reviewer-avatars.test.ts`)
- Validates all reviewer avatar URLs
- Ensures unique avatar assignments
- Checks Unsplash URL format compliance
- Verifies accessibility of all avatar images
- Validates avatar mappings for all courses

### 📊 Content Integrity Tests (`content-integrity.test.ts`)
- Validates course data structure
- Checks rating values and ranges
- Ensures consistent data between English/Chinese
- Validates curriculum structure
- Checks review data integrity

### 🧭 Navigation Tests (`navigation.test.ts`)
- Validates navigation structure
- Checks course URL consistency
- Ensures proper hash link format
- Validates AI Courses dropdown structure

## Utility Functions (`utils/url-checker.ts`)

### Core Functions
- `checkUrl(url)` - Check if a URL is accessible
- `checkImageUrl(url)` - Check if a URL points to a valid image
- `checkMultipleUrls(urls, concurrency)` - Check multiple URLs in parallel
- `checkMultipleImages(urls, concurrency)` - Check multiple image URLs in parallel

### Helper Functions
- `extractUrls(text)` - Extract all URLs from text
- `extractImageUrls(text)` - Extract image URLs from text
- `isValidUrl(url)` - Validate URL format

## Running Tests

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Run Specific Test Suites
```bash
# Check all URLs and images
npm run test:urls

# Check external links only
npm run test:broken-links

# Check images only
npm run test:broken-images

# Check reviewer avatars only
npm run test:reviewer-avatars
```

### Run with Coverage
```bash
npm run test:coverage
```

### Run with UI
```bash
npm run test:ui
```

## Standalone URL Checker

The `run-url-checks.ts` script can be run independently to quickly check all URLs and images without running the full test suite:

```bash
npm run test:urls
```

This script will:
- Extract all URLs from content
- Check accessibility of all URLs
- Verify image content types
- Report broken or invalid URLs
- Exit with error code if issues found

## Configuration

### Vitest Config (`vitest.config.ts`)
- Uses jsdom environment for DOM testing
- Includes test setup file
- Configures coverage reporting
- Sets up path aliases

### Test Setup (`setup.ts`)
- Configures jsdom environment
- Mocks browser APIs (IntersectionObserver, ResizeObserver, matchMedia)
- Sets up fetch mocking for HTTP requests

## Best Practices

### Adding New Tests
1. Follow the existing test structure
2. Use descriptive test names
3. Include both positive and negative test cases
4. Use appropriate timeouts for network requests
5. Mock external dependencies when possible

### URL Checking
- Use rate limiting (concurrency parameter) to be respectful to external services
- Include appropriate timeouts for network requests
- Handle both success and error cases
- Log progress for long-running tests

### Content Validation
- Test both English and Chinese content
- Ensure consistency between languages
- Validate data types and ranges
- Check for required fields

## Troubleshooting

### Common Issues

**Network Timeouts**
- Increase timeout values for slow networks
- Reduce concurrency for rate limiting
- Use retry logic for flaky connections

**CORS Errors**
- Use `mode: 'no-cors'` for external URL checks
- Note that no-cors mode doesn't provide status codes
- Consider using a proxy service for production checks

**Image Loading Issues**
- Check if image URLs are accessible
- Verify content-type headers
- Ensure proper image format validation

### Debug Mode
Set `DEBUG=true` environment variable for verbose logging:
```bash
DEBUG=true npm run test:urls
```

## Continuous Integration

These tests are designed to run in CI/CD pipelines:
- Exit codes indicate success/failure
- Comprehensive error reporting
- Parallel execution for speed
- Configurable timeouts and concurrency
