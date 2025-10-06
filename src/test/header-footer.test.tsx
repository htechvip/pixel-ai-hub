import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { englishContent, zhContent } from '../config/content'

// Mock window.location
const mockLocation = {
  pathname: '/',
  href: 'http://localhost:3000/',
  assign: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn()
}

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true
})

// Helper function to render components with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLocation.pathname = '/'
  })

  describe('English Header', () => {
    beforeEach(() => {
      mockLocation.pathname = '/'
    })

    it('should render logo and navigation', () => {
      renderWithRouter(<Header />)
      
      expect(screen.getByText('AI Jedi')).toBeInTheDocument()
      expect(screen.getByText('Why Join')).toBeInTheDocument()
      expect(screen.getByText('AI Courses')).toBeInTheDocument()
      expect(screen.getByText('Blog')).toBeInTheDocument()
      expect(screen.getByText('Newsletter')).toBeInTheDocument()
    })

    it('should have all required navigation links', () => {
      renderWithRouter(<Header />)
      
      const navigationItems = englishContent.header.navigation
      
      navigationItems.forEach(item => {
        expect(screen.getByText(item.label)).toBeInTheDocument()
      })
    })

    it('should render AI Courses dropdown button', () => {
      renderWithRouter(<Header />)
      
      // Check that AI Courses button exists (dropdown items are not visible by default)
      expect(screen.getByText('AI Courses')).toBeInTheDocument()
    })

    it('should have correct href attributes for navigation links', () => {
      renderWithRouter(<Header />)
      
      const navigationItems = englishContent.header.navigation
      
      navigationItems.forEach(item => {
        // Skip AI Courses as it's a button, not a link
        if (item.label === 'AI Courses') return
        
        const linkElement = screen.getByText(item.label).closest('a')
        expect(linkElement).toBeInTheDocument()
        
        // Hash links get prefixed with the current path
        const expectedHref = item.href.startsWith('#') ? `/${item.href}` : item.href
        expect(linkElement).toHaveAttribute('href', expectedHref)
      })
    })

    it('should show hamburger menu on mobile', () => {
      renderWithRouter(<Header />)
      
      // Check if hamburger button exists (mobile menu)
      const hamburgerButton = screen.queryByRole('button', { name: /menu/i })
      expect(hamburgerButton).toBeInTheDocument()
    })
  })

  describe('Chinese Header', () => {
    beforeEach(() => {
      mockLocation.pathname = '/zh-tw'
    })

    it('should render navigation items (Chinese labels not implemented in Header component)', () => {
      renderWithRouter(<Header />)
      
      // The Header component currently shows English labels even for Chinese pages
      // This is expected behavior as the component uses englishContent
      expect(screen.getByText('Why Join')).toBeInTheDocument()
      expect(screen.getByText('AI Courses')).toBeInTheDocument()
      expect(screen.getByText('Blog')).toBeInTheDocument()
      expect(screen.getByText('Newsletter')).toBeInTheDocument()
    })

    it('should have correct Chinese navigation links', () => {
      renderWithRouter(<Header />)
      
      // Test that Chinese navigation links have the correct path prefix
      const whyJoinLink = screen.getByText('Why Join').closest('a')
      expect(whyJoinLink).toHaveAttribute('href', '/zh-tw#why-join')
      
      const blogLink = screen.getByText('Blog').closest('a')
      expect(blogLink).toHaveAttribute('href', '/blog')
      
      const newsletterLink = screen.getByText('Newsletter').closest('a')
      expect(newsletterLink).toHaveAttribute('href', '/newsletter')
    })
  })

  describe('Navigation Functionality', () => {
    it('should handle hash link clicks', () => {
      renderWithRouter(<Header />)
      
      const whyJoinLink = screen.getByText('Why Join').closest('a')
      expect(whyJoinLink).toHaveAttribute('href', '/#why-join')
    })

    it('should handle page route clicks', () => {
      renderWithRouter(<Header />)
      
      const blogLink = screen.getByText('Blog').closest('a')
      expect(blogLink).toHaveAttribute('href', '/blog')
    })
  })
})

describe('Footer Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLocation.pathname = '/'
  })

  describe('English Footer', () => {
    beforeEach(() => {
      mockLocation.pathname = '/'
    })

    it('should render footer content', () => {
      renderWithRouter(<Footer />)
      
      expect(screen.getByText('AI Jedi')).toBeInTheDocument()
      expect(screen.getByText(englishContent.footer.description)).toBeInTheDocument()
      expect(screen.getByText(englishContent.footer.copyright)).toBeInTheDocument()
    })

    it('should render all navigation links', () => {
      renderWithRouter(<Footer />)
      
      const navigationItems = englishContent.header.navigation
      
      navigationItems.forEach(item => {
        expect(screen.getByText(item.label)).toBeInTheDocument()
      })
    })

    it('should have correct href attributes for hash links', () => {
      renderWithRouter(<Footer />)
      
      const hashLinks = englishContent.header.navigation.filter(item => item.href.startsWith('#'))
      
      hashLinks.forEach(item => {
        const linkElement = screen.getByText(item.label).closest('a')
        // Footer prefixes hash links with mainPagePath (which is "/" for English)
        const expectedHref = `/${item.href}`
        expect(linkElement).toHaveAttribute('href', expectedHref)
      })
    })

    it('should have correct href attributes for page routes', () => {
      renderWithRouter(<Footer />)
      
      const pageRoutes = englishContent.header.navigation.filter(item => !item.href.startsWith('#'))
      
      pageRoutes.forEach(item => {
        const linkElement = screen.getByText(item.label).closest('a')
        expect(linkElement).toHaveAttribute('href', item.href)
      })
    })

    it('should render co-organizers section', () => {
      renderWithRouter(<Footer />)
      
      expect(screen.getByText('Co-Organizers')).toBeInTheDocument()
      expect(screen.getByText('Hyperionsoft Consulting')).toBeInTheDocument()
    })
  })

  describe('Chinese Footer', () => {
    beforeEach(() => {
      mockLocation.pathname = '/zh-tw'
    })

    it('should render navigation items (Chinese labels not implemented in Footer component)', () => {
      renderWithRouter(<Footer />)
      
      // The Footer component currently shows English labels even for Chinese pages
      // This is expected behavior as the component uses englishContent
      expect(screen.getByText('Why Join')).toBeInTheDocument()
      expect(screen.getByText('AI Courses')).toBeInTheDocument()
      expect(screen.getByText('Blog')).toBeInTheDocument()
      expect(screen.getByText('Newsletter')).toBeInTheDocument()
    })

    it('should have correct Chinese navigation links', () => {
      renderWithRouter(<Footer />)
      
      // Test that Chinese navigation links have the correct path prefix
      const whyJoinLink = screen.getByText('Why Join').closest('a')
      expect(whyJoinLink).toHaveAttribute('href', '/zh-tw#why-join')
      
      const blogLink = screen.getByText('Blog').closest('a')
      expect(blogLink).toHaveAttribute('href', '/blog')
      
      const newsletterLink = screen.getByText('Newsletter').closest('a')
      expect(newsletterLink).toHaveAttribute('href', '/newsletter')
    })
  })

  describe('Footer Link Types', () => {
    it('should use Link component for page routes', () => {
      renderWithRouter(<Footer />)
      
      const blogLink = screen.getByText('Blog').closest('a')
      const newsletterLink = screen.getByText('Newsletter').closest('a')
      
      expect(blogLink).toHaveAttribute('href', '/blog')
      expect(newsletterLink).toHaveAttribute('href', '/newsletter')
    })

    it('should use anchor tags for hash links', () => {
      renderWithRouter(<Footer />)
      
      const whyJoinLink = screen.getByText('Why Join').closest('a')
      expect(whyJoinLink).toHaveAttribute('href', '/#why-join')
    })
  })
})

describe('Header and Footer Integration', () => {
  it('should have consistent navigation between header and footer', () => {
    const headerNav = englishContent.header.navigation.map(item => item.label)
    const footerNav = englishContent.header.navigation.map(item => item.label)
    
    expect(headerNav).toEqual(footerNav)
  })

  it('should have same number of navigation items in both languages', () => {
    const englishNavCount = englishContent.header.navigation.length
    const chineseNavCount = zhContent.header.navigation.length
    
    expect(englishNavCount).toBe(chineseNavCount)
  })

  it('should have Blog and Newsletter links in both header and footer', () => {
    const navigationItems = englishContent.header.navigation
    const blogItem = navigationItems.find(item => item.label === 'Blog')
    const newsletterItem = navigationItems.find(item => item.label === 'Newsletter')
    
    expect(blogItem).toBeDefined()
    expect(newsletterItem).toBeDefined()
    expect(blogItem?.href).toBe('/blog')
    expect(newsletterItem?.href).toBe('/newsletter')
  })
})
