#!/usr/bin/env node

/**
 * Standalone script to check all URLs and images in the content
 * Can be run independently of the test suite for quick checks
 */

import { checkMultipleUrls, checkMultipleImages, extractUrls, extractImageUrls } from './utils/url-checker'
import { englishContent, zhContent } from '../config/content'

interface CheckResult {
  type: 'url' | 'image';
  url: string;
  status: number;
  ok: boolean;
  error?: string;
  contentType?: string;
  isImage?: boolean;
  imageFormat?: string;
}

async function runUrlChecks() {
  console.log('🔍 Starting URL and Image Checks...\n');
  
  // Extract all URLs from content
  const contentString = JSON.stringify({ englishContent, zhContent });
  const allUrls = extractUrls(contentString);
  const imageUrls = extractImageUrls(contentString);
  const nonImageUrls = allUrls.filter(url => !imageUrls.includes(url));
  
  console.log(`📊 Found ${allUrls.length} total URLs:`);
  console.log(`   - ${imageUrls.length} image URLs`);
  console.log(`   - ${nonImageUrls.length} non-image URLs\n`);
  
  const results: CheckResult[] = [];
  
  // Check non-image URLs
  if (nonImageUrls.length > 0) {
    console.log('🔗 Checking non-image URLs...');
    const urlResults = await checkMultipleUrls(nonImageUrls, 5);
    
    urlResults.forEach(result => {
      results.push({
        type: 'url',
        url: result.url,
        status: result.status,
        ok: result.ok,
        error: result.error,
        contentType: result.contentType
      });
    });
  }
  
  // Check image URLs
  if (imageUrls.length > 0) {
    console.log('🖼️  Checking image URLs...');
    const imageResults = await checkMultipleImages(imageUrls, 5);
    
    imageResults.forEach(result => {
      results.push({
        type: 'image',
        url: result.url,
        status: result.status,
        ok: result.ok,
        error: result.error,
        contentType: result.contentType,
        isImage: result.isImage,
        imageFormat: result.imageFormat
      });
    });
  }
  
  // Analyze results
  const brokenUrls = results.filter(r => !r.ok);
  const nonImageResults = results.filter(r => r.type === 'image' && r.ok && !r.isImage);
  const workingUrls = results.filter(r => r.ok);
  
  console.log('\n📈 Results Summary:');
  console.log(`   ✅ Working URLs: ${workingUrls.length}`);
  console.log(`   ❌ Broken URLs: ${brokenUrls.length}`);
  console.log(`   🚫 Non-image URLs: ${nonImageResults.length}`);
  
  // Report broken URLs
  if (brokenUrls.length > 0) {
    console.log('\n❌ Broken URLs:');
    brokenUrls.forEach(result => {
      console.log(`   - ${result.url} (${result.error || `Status: ${result.status}`})`);
    });
  }
  
  // Report non-image URLs
  if (nonImageResults.length > 0) {
    console.log('\n🚫 URLs that are not images:');
    nonImageResults.forEach(result => {
      console.log(`   - ${result.url} (${result.contentType || 'Unknown content type'})`);
    });
  }
  
  // Report working URLs
  if (workingUrls.length > 0) {
    console.log('\n✅ Working URLs:');
    workingUrls.forEach(result => {
      const type = result.type === 'image' ? '🖼️' : '🔗';
      const format = result.imageFormat ? ` (${result.imageFormat})` : '';
      console.log(`   ${type} ${result.url}${format}`);
    });
  }
  
  // Exit with error code if there are broken URLs
  if (brokenUrls.length > 0 || nonImageResults.length > 0) {
    console.log('\n💥 Check failed: Found broken or invalid URLs');
    process.exit(1);
  } else {
    console.log('\n🎉 All URLs are working correctly!');
    process.exit(0);
  }
}

// Run the checks
runUrlChecks().catch(error => {
  console.error('💥 Error running URL checks:', error);
  process.exit(1);
});
