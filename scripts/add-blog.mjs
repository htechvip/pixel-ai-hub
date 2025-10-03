#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const root = path.resolve(process.cwd());
const blogDir = path.join(root, 'src', 'content', 'blog');
const blogConfigPath = path.join(root, 'src', 'config', 'blog.ts');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function prompt(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (ans) => { rl.close(); resolve(ans); }));
}

function getRandomChonantsaiImage() {
  const assetsDir = path.join(root, 'src', 'assets');
  const files = fs.readdirSync(assetsDir);
  const chonantsaiImages = files.filter(file => file.startsWith('chonantsai_'));
  
  if (chonantsaiImages.length === 0) {
    return 'ai talk sm.jpg'; // fallback
  }
  
  const randomIndex = Math.floor(Math.random() * chonantsaiImages.length);
  return chonantsaiImages[randomIndex];
}

async function main() {
  if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });

  const title = (await prompt('Post title: ')).trim();
  if (!title) {
    console.error('Title is required.');
    process.exit(1);
  }
  const defaultSlug = slugify(title);
  const slug = (await prompt(`Slug [${defaultSlug}]: `)).trim() || defaultSlug;
  const today = new Date().toISOString().slice(0, 10);
  const date = (await prompt(`Date [${today}]: `)).trim() || today;
  const author = (await prompt('Author [Cho-Nan Tsai]: ')).trim() || 'Cho-Nan Tsai';
  const excerpt = (await prompt('Excerpt (1-2 sentences): ')).trim();
  const category = (await prompt('Category [AI Tools]: ')).trim() || 'AI Tools';
  const tagsInput = (await prompt('Tags (comma-separated) [General]: ')).trim() || 'General';
  const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
  // Get random chonantsai image
  const imageName = getRandomChonantsaiImage();
  const imageImportName = path.parse(imageName).name.replace(/([a-z])(\d+)/g, '$1$2').replace(/_/g, '');
  console.log(`📸 Selected random image: ${imageName}`);

  // 1) Write Markdown file
  const mdFrontmatter = `---\n` +
    `title: "${title}"\n` +
    `slug: "${slug}"\n` +
    `date: "${date}"\n` +
    `author: "${author}"\n` +
    `excerpt: "${excerpt.replace(/"/g, '\\"')}"\n` +
    `category: "${category}"\n` +
    `tags: [${tags.map((t) => `"${t}"`).join(', ')}]\n` +
    `image: "/assets/${imageName || 'ai talk sm.jpg'}"\n` +
    `---\n\n# ${title}\n\n`;

  const mdPath = path.join(blogDir, `${slug}.md`);
  fs.writeFileSync(mdPath, mdFrontmatter);
  console.log(`✓ Created ${path.relative(root, mdPath)}`);

  // 2) Update blog config to register post
  let blogConfig = fs.readFileSync(blogConfigPath, 'utf8');

  // Ensure image import exists
  const importLine = `import ${imageImportName} from "@/assets/${imageName}";`;
  if (!blogConfig.includes(importLine)) {
    const importInsertPos = blogConfig.indexOf('\n\nexport interface BlogPost');
    blogConfig = blogConfig.slice(0, importInsertPos) + `\n${importLine}` + blogConfig.slice(importInsertPos);
  }

  const newEntry = `  {\n` +
    `    title: "${title}",\n` +
    `    slug: "${slug}",\n` +
    `    date: "${date}",\n` +
    `    author: "${author}",\n` +
    `    excerpt: "${excerpt.replace(/"/g, '\\"')}",\n` +
    `    category: "${category}",\n` +
    `    tags: [${tags.map((t) => `"${t}"`).join(', ')}],\n` +
    `    image: ${imageImportName}\n` +
    `  },\n`;

  // Insert at top of blogPosts array
  blogConfig = blogConfig.replace(
    /export const blogPosts: BlogPost\[] = \[/,
    (m) => `${m}\n${newEntry}`
  );

  fs.writeFileSync(blogConfigPath, blogConfig);
  console.log(`✓ Updated ${path.relative(root, blogConfigPath)} with new post entry`);

  console.log('\nDone! Visit /blog to see the post listed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


