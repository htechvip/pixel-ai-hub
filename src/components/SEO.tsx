import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
  noindex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "AI Jedi — Learn AI Through Real-World Case Studies for Career Professionals",
  description = "Master AI skills through real-world case studies designed for finance, marketing, healthcare, and business professionals. No coding required — practical AI training you can apply immediately.",
  canonical,
  ogImage = "/ai%20jedi%20class.png",
  ogType = "website",
  article,
  noindex = false,
  structuredData,
}: SEOProps) => {
  const baseUrl = "https://aijedi.hyperionsoft.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  useEffect(() => {
    // Set title
    document.title = title;

    // Helper function to set or update meta tag
    const setMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          const property = selector.match(/property="([^"]+)"/)?.[1];
          if (property) element.setAttribute('property', property);
        } else if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to set or update link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic Meta Tags
    setMetaTag('meta[name="description"]', 'content', description);
    setLinkTag('canonical', fullCanonical);
    
    // Robots
    setMetaTag('meta[name="robots"]', 'content', noindex ? "noindex, nofollow" : "index, follow");
    
    // Open Graph
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:url"]', 'content', fullCanonical);
    setMetaTag('meta[property="og:image"]', 'content', fullOgImage);
    setMetaTag('meta[property="og:site_name"]', 'content', "AI Jedi");
    
    // Article Meta (for blog posts)
    if (article) {
      if (article.publishedTime) {
        setMetaTag('meta[property="article:published_time"]', 'content', article.publishedTime);
      }
      if (article.modifiedTime) {
        setMetaTag('meta[property="article:modified_time"]', 'content', article.modifiedTime);
      }
      if (article.author) {
        setMetaTag('meta[property="article:author"]', 'content', article.author);
      }
      // Remove existing article tags
      document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
      // Add new tags
      article.tags?.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.setAttribute('content', tag);
        document.head.appendChild(meta);
      });
    }
    
    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'content', "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', fullOgImage);

    // Structured Data (JSON-LD)
    if (structuredData) {
      // Remove any existing structured data script
      const existingScript = document.querySelector('script[data-seo-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script element
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-structured-data', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-seo-structured-data]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, fullCanonical, fullOgImage, ogType, article, noindex, structuredData]);

  return null;
};

export default SEO;

