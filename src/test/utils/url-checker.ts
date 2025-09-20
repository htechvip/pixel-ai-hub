/**
 * Utility functions for checking URLs and images
 */

export interface UrlCheckResult {
  url: string;
  status: number;
  ok: boolean;
  error?: string;
  contentType?: string;
}

export interface ImageCheckResult extends UrlCheckResult {
  isImage: boolean;
  imageFormat?: string;
}

/**
 * Check if a URL is accessible and returns valid response
 */
export async function checkUrl(url: string): Promise<UrlCheckResult> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors', // For external URLs
    });
    
    return {
      url,
      status: response.status || 200, // no-cors doesn't provide status
      ok: response.ok !== false,
      contentType: response.headers.get('content-type') || undefined,
    };
  } catch (error) {
    return {
      url,
      status: 0,
      ok: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Check if a URL points to a valid image
 */
export async function checkImageUrl(url: string): Promise<ImageCheckResult> {
  const result = await checkUrl(url);
  
  if (!result.ok) {
    return {
      ...result,
      isImage: false,
    };
  }

  const contentType = result.contentType || '';
  const isImage = contentType.startsWith('image/');
  const imageFormat = isImage ? contentType.split('/')[1] : undefined;

  return {
    ...result,
    isImage,
    imageFormat,
  };
}

/**
 * Check multiple URLs in parallel with rate limiting
 */
export async function checkMultipleUrls(
  urls: string[],
  concurrency: number = 5
): Promise<UrlCheckResult[]> {
  const results: UrlCheckResult[] = [];
  
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(url => checkUrl(url))
    );
    results.push(...batchResults);
    
    // Small delay between batches to be respectful
    if (i + concurrency < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  return results;
}

/**
 * Check multiple image URLs in parallel
 */
export async function checkMultipleImages(
  urls: string[],
  concurrency: number = 5
): Promise<ImageCheckResult[]> {
  const results: ImageCheckResult[] = [];
  
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(url => checkImageUrl(url))
    );
    results.push(...batchResults);
    
    // Small delay between batches
    if (i + concurrency < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  return results;
}

/**
 * Extract all URLs from a text string
 */
export function extractUrls(text: string): string[] {
  const urlRegex = /https?:\/\/[^\s<>"{}|\\^`[\]]+/g;
  return text.match(urlRegex) || [];
}

/**
 * Extract all image URLs from a text string
 */
export function extractImageUrls(text: string): string[] {
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i;
  const urls = extractUrls(text);
  return urls.filter(url => imageExtensions.test(url));
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
