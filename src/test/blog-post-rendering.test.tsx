import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogPost from '@/pages/BlogPost';
import { blogPosts } from '@/config/blog';

// Mock useParams
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ slug: 'mastering-chatgpt-for-career-growth' }),
  };
});

// Mock dynamic import for markdown content
vi.mock('@/content/blog/mastering-chatgpt-for-career-growth.md?raw', () => ({
  default: `---
title: Test
---

# Test Content

This is test markdown content.`
}));

describe('BlogPost Component', () => {
  it('should render blog post without errors', () => {
    const { container } = render(
      <BrowserRouter>
        <BlogPost />
      </BrowserRouter>
    );
    
    expect(container).toBeTruthy();
  });

  it('should find blog post from config', () => {
    const slug = 'mastering-chatgpt-for-career-growth';
    const post = blogPosts.find(p => p.slug === slug);
    
    expect(post).toBeDefined();
    expect(post?.title).toBeTruthy();
    expect(post?.excerpt).toBeTruthy();
    expect(post?.image).toBeTruthy();
  });

  it('should handle all blog posts without errors', () => {
    blogPosts.forEach(post => {
      expect(post.title).toBeTruthy();
      expect(post.slug).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.author).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(post.tags).toBeDefined();
      expect(Array.isArray(post.tags)).toBe(true);
      expect(post.image).toBeTruthy();
      expect(typeof post.image).toBe('string');
    });
  });
});

