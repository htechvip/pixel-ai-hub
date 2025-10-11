import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const blogContentDir = path.join(root, 'src', 'content', 'blog');

const baseUrl = 'https://aijedi.hyperionsoft.com';

// Static routes with priority and change frequency
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/newsletter', priority: '0.8', changefreq: 'monthly' },
  { path: '/ai-quiz', priority: '0.9', changefreq: 'monthly' },
  { path: '/career-ai-advantage', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh-tw', priority: '0.9', changefreq: 'weekly' },
  { path: '/zh-tw/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/zh-tw/newsletter', priority: '0.7', changefreq: 'monthly' },
];

// Course routes
const courses = [
  'ai-for-product-managers-vibe-coding-101',
  'ai-for-finance-professionals',
  'ai-for-marketing-professionals',
  'ai-for-healthcare-professionals',
  'ai-for-software-developers',
  'ai-for-business-leaders',
];

const courseRoutes = courses.flatMap(course => [
  { path: `/course/${course}`, priority: '0.9', changefreq: 'monthly' },
  { path: `/zh-tw/course/${course}`, priority: '0.8', changefreq: 'monthly' },
]);

// Get blog posts
function getBlogPosts() {
  const posts = [];
  if (fs.existsSync(blogContentDir)) {
    const files = fs.readdirSync(blogContentDir).filter(f => f.endsWith('.md'));
    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(blogContentDir, file);
      const stats = fs.statSync(filePath);
      const lastmod = stats.mtime.toISOString().split('T')[0];
      
      posts.push({
        path: `/blog/${slug}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod,
      });
      posts.push({
        path: `/zh-tw/blog/${slug}`,
        priority: '0.6',
        changefreq: 'monthly',
        lastmod,
      });
    });
  }
  return posts;
}

// Generate XML sitemap
function generateSitemap() {
  const blogPosts = getBlogPosts();
  const allRoutes = [...staticRoutes, ...courseRoutes, ...blogPosts];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ Generated sitemap.xml with ${allRoutes.length} URLs`);
  console.log(`📍 Location: ${path.relative(root, sitemapPath)}`);
}

generateSitemap();

