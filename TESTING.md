# 🧪 Testing Guide for AI Jedi Hub

This project now includes comprehensive test suites to check for broken links, images, and content integrity. These tests help prevent issues like broken reviewer images from occurring again.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Run Specific Tests
```bash
# Check Jennifer Liu fix specifically
npm run test:jennifer-liu

# Check all URLs and images (standalone script)
npm run test:urls

# Check reviewer avatars
npm run test:reviewer-avatars

# Check external links
npm run test:broken-links

# Check images
npm run test:broken-images
```

## 📋 Test Suites Overview

### 🔧 **Unit Tests (Mocked Environment)**
These tests run quickly with mocked HTTP requests for CI/CD:

- **`reviewer-avatars.test.ts`** - Validates all reviewer avatar URLs and mappings
- **`external-links.test.ts`** - Checks external link accessibility
- **`images.test.ts`** - Validates image URLs and formats
- **`content-integrity.test.ts`** - Ensures content structure consistency
- **`navigation.test.ts`** - Validates navigation structure
- **`jennifer-liu-fix.test.ts`** - Specific test for the Jennifer Liu avatar fix

### 🌐 **Production Tests (Real HTTP Requests)**
These tests make actual HTTP requests to verify URLs:

- **`production-url-check.test.ts`** - Real URL accessibility checks
- **`run-url-checks.ts`** - Standalone script for quick URL validation

## 🎯 **Specific Issue: Jennifer Liu Broken Image**

### **Problem Solved**
- **Issue**: Jennifer Liu's reviewer image was broken (404 error)
- **Root Cause**: Unsplash URL `photo-1594824388853-8e1b5d4e8e8a` became unavailable
- **Solution**: Replaced with working URL `photo-1517841905240-472988babdf9`

### **Verification**
```bash
# Test the specific fix
npm run test:jennifer-liu

# Test all reviewer avatars
npm run test:reviewer-avatars
```

### **Prevention**
The test suites now catch:
- Broken image URLs
- Invalid URL formats
- Missing avatar mappings
- Duplicate URL assignments

## 🛠️ **Available Test Commands**

| Command | Purpose | Environment |
|---------|---------|-------------|
| `npm test` | Run all tests | Mocked |
| `npm run test:jennifer-liu` | Test Jennifer Liu fix | Mocked |
| `npm run test:urls` | Check all URLs (standalone) | Real HTTP |
| `npm run test:reviewer-avatars` | Check reviewer avatars | Mocked |
| `npm run test:broken-links` | Check external links | Mocked |
| `npm run test:broken-images` | Check images | Mocked |
| `npm run test:production-urls` | Real URL checks | Real HTTP |

## 🔍 **How to Use for Debugging**

### **Check a Specific Broken Image**
1. Run the specific test: `npm run test:jennifer-liu`
2. Check the error message for the broken URL
3. Find a replacement URL from Unsplash
4. Update the avatar mapping in `src/pages/Course.tsx`
5. Re-run the test to verify the fix

### **Check All Images at Once**
```bash
# Quick check (standalone script)
npm run test:urls

# Comprehensive check (test suite)
npm run test:broken-images
```

### **Validate Content Structure**
```bash
npm run test:content-integrity
```

## 📊 **Test Results Interpretation**

### **✅ Success Indicators**
- All tests pass
- No broken URLs reported
- All images accessible
- Content structure valid

### **❌ Failure Indicators**
- HTTP 404 errors (broken URLs)
- Invalid content types (non-images)
- Missing avatar mappings
- Malformed URLs

### **🔧 Common Fixes**
1. **Broken Image URL**: Replace with new Unsplash URL
2. **Missing Mapping**: Add course-reviewer combination to avatar mapping
3. **Invalid Format**: Fix URL parameters or structure
4. **Content Issues**: Update content.ts structure

## 🚨 **CI/CD Integration**

### **Pre-commit Checks**
```bash
# Add to your pre-commit hook
npm run test:jennifer-liu
npm run test:content-integrity
```

### **Build Pipeline**
```bash
# Add to your build pipeline
npm run test:production-urls
```

### **Scheduled Checks**
```bash
# Run daily/weekly to catch broken URLs
npm run test:urls
```

## 🔧 **Configuration**

### **Test Environment**
- **Framework**: Vitest + React Testing Library
- **Mocking**: jsdom environment with mocked fetch
- **Coverage**: Built-in coverage reporting
- **Timeout**: 30-60 seconds for network requests

### **Production Environment**
- **Real HTTP**: Actual network requests
- **Rate Limiting**: 3-5 concurrent requests
- **Timeout**: 10-15 seconds per request
- **Skip in CI**: Automatically skipped in CI environment

## 📁 **File Structure**

```
src/test/
├── utils/
│   └── url-checker.ts          # Core URL checking utilities
├── reviewer-avatars.test.ts    # Reviewer avatar validation
├── external-links.test.ts      # External link checks
├── images.test.ts              # Image validation
├── content-integrity.test.ts   # Content structure checks
├── navigation.test.ts          # Navigation validation
├── jennifer-liu-fix.test.ts    # Specific fix verification
├── production-url-check.test.ts # Real HTTP checks
├── run-url-checks.ts           # Standalone URL checker
├── setup.ts                    # Test environment setup
└── README.md                   # Detailed documentation
```

## 🎉 **Benefits**

### **Prevents Issues Like:**
- Broken reviewer images (like Jennifer Liu)
- Invalid external links
- Missing content data
- Malformed URLs
- Inconsistent content structure

### **Saves Time By:**
- Automatically detecting broken URLs
- Validating content integrity
- Ensuring consistent data structure
- Catching issues before deployment

### **Improves Quality By:**
- Comprehensive URL validation
- Content structure verification
- Navigation consistency checks
- Avatar mapping validation

## 🚀 **Next Steps**

1. **Run the tests**: `npm test`
2. **Fix any issues** found by the tests
3. **Add to CI/CD** pipeline for continuous validation
4. **Schedule regular checks** for external URL monitoring
5. **Use for debugging** when issues arise

---

**Note**: The Jennifer Liu broken image issue has been resolved and is now protected by these comprehensive test suites! 🎯
