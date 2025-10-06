#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd());
const blogDir = path.join(root, 'src', 'content', 'blog');
const blogConfigPath = path.join(root, 'src', 'config', 'blog.ts');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  
  const frontmatter = match[1];
  const metadata = {};
  
  frontmatter.split('\n').forEach(line => {
    const match = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (match) {
      const [, key, value] = match;
      let parsedValue = value.trim();
      
      // Handle arrays
      if (value.trim().startsWith('[') && value.trim().endsWith(']')) {
        parsedValue = value.trim().slice(1, -1).split(',').map(v => v.trim().replace(/^"|"$/g, ''));
      } else {
        parsedValue = parsedValue.replace(/^"|"$/g, '');
      }
      
      metadata[key] = parsedValue;
    }
  });
  
  return metadata;
}

function generateImageImportName(imagePath) {
  if (!imagePath) return 'aiTalkSm';
  
  const fileName = imagePath.replace('/assets/', '');
  if (fileName === 'ai talk sm.jpg') return 'aiTalkSm';
  
  // Convert filename to valid JS variable name
  return fileName
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^([a-z])/, (match) => match.toUpperCase());
}

function updateBlogConfig() {
  console.log('🔄 Updating blog config...');
  
  // Read all markdown files
  const markdownFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
  console.log(`📝 Found ${markdownFiles.length} blog posts`);
  
  const imports = new Set();
  const posts = [];
  
  markdownFiles.forEach(file => {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const metadata = parseFrontmatter(content);
    
    if (!metadata.title) {
      console.warn(`⚠️  Skipping ${file} - no title found`);
      return;
    }
    
    // Generate import for image
    const imageImportName = generateImageImportName(metadata.image);
    const imagePath = metadata.image?.replace('/assets/', '') || 'ai talk sm.jpg';
    imports.add(`import ${imageImportName} from "@/assets/${imagePath}";`);
    
    posts.push({
      title: metadata.title,
      slug: metadata.slug || file.replace('.md', ''),
      date: metadata.date || new Date().toISOString().split('T')[0],
      author: metadata.author || 'Cho-Nan Tsai',
      excerpt: metadata.excerpt || '',
      category: metadata.category || 'AI Tools',
      tags: Array.isArray(metadata.tags) ? metadata.tags : ['General'],
      image: imageImportName
    });
  });
  
  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Generate blog.ts content
  const importsList = Array.from(imports).sort().join('\n');
  const postsList = posts.map(post => `  {
    title: "${post.title}",
    slug: "${post.slug}",
    date: "${post.date}",
    author: "${post.author}",
    excerpt: "${post.excerpt.replace(/"/g, '\\"')}",
    category: "${post.category}",
    tags: [${post.tags.map(tag => `"${tag}"`).join(', ')}],
    image: ${post.image}
  }`).join(',\n\n');

  const blogConfigContent = `${importsList}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  tags: string[];
  image: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
${postsList}
];

export const categories = [
  "All Posts",
  "AI Tools",
  "Career Growth", 
  "Business Strategy",
  "Industry Insights"
];
`;

  // Write the updated config
  fs.writeFileSync(blogConfigPath, blogConfigContent);
  console.log(`✅ Updated ${path.relative(root, blogConfigPath)} with ${posts.length} posts`);
}

updateBlogConfig();
