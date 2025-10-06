import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AITipsGuide from "@/components/AITipsGuide";
import AITipsGuideZh from "@/components/AITipsGuideZh";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/config/blog";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const RelatedPosts = ({ slug, basePath }: { slug: string; basePath: string }) => {
  const related = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <h3 className="text-2xl font-serif font-bold mb-8 text-slate-900">More from AI Jedi</h3>
      <div className="space-y-8">
        {related.map((relatedPost) => (
          <Link
            key={relatedPost.slug}
            to={`${basePath}/blog/${relatedPost.slug}`}
            className="group block"
          >
            <div className="flex gap-6 pb-8 border-b border-slate-200 hover:border-slate-300 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{relatedPost.category}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-slate-600 transition-colors text-slate-900">
                  {relatedPost.title}
                </h4>
                <p className="text-base text-slate-600 line-clamp-2 mb-3">
                  {relatedPost.excerpt}
                </p>
                <div className="text-sm text-slate-500">
                  {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {Math.ceil(relatedPost.excerpt.split(' ').length / 200)} min read
                </div>
              </div>
              <div className="w-32 h-32 flex-shrink-0 hidden sm:block">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [markdownContent, setMarkdownContent] = useState("");
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");
  const basePath = isZh ? "/zh-tw" : "";

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    // Scroll to top when navigating to a new blog post
    window.scrollTo(0, 0);
    
    if (slug) {
      // Dynamically import the markdown file
      import(`../content/blog/${slug}.md?raw`)
        .then((module) => {
          // Remove frontmatter (everything between --- and ---)
          const content = module.default.replace(/^---[\s\S]*?---\n/, '');
          setMarkdownContent(content);
        })
        .catch((error) => {
          console.error("Error loading blog post:", error);
          setMarkdownContent("# Post not found\n\nThe blog post you're looking for doesn't exist.");
        });
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to={`${basePath}/blog`}>
              <Button variant="outline">← Back to Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const readingTime = Math.ceil(markdownContent.split(/\s+/).length / 200);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} - AI Jedi Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />
      
      <div className="pt-20 pb-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="max-w-3xl mx-auto mb-8">
            <Link to={`${basePath}/blog`}>
              <Button variant="ghost" className="gap-2 hover:bg-slate-100">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <article className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight text-slate-900">
                {post.title}
              </h1>
              
              {/* Meta Info - Medium style */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{post.author}</div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>·</span>
                      <span>{readingTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 -mx-4 md:mx-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Content - Medium-style typography */}
            <div className="prose prose-xl prose-slate max-w-none 
              prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
              prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-10
              prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
              prose-p:text-xl prose-p:leading-relaxed prose-p:text-slate-700 prose-p:mb-8
              prose-li:text-xl prose-li:leading-relaxed prose-li:text-slate-700 prose-li:my-2
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-slate-300 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
              prose-code:text-base prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
              prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-ul:my-8 prose-ol:my-8
              prose-img:rounded-lg prose-img:shadow-md">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </div>

            {/* Author Bio - Medium style */}
            <div className="mt-16 pt-8 border-t border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-900 mb-1">Written by {post.author}</div>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Cho-Nan Tsai teaches AI at USC and has spent 3 decades implementing AI solutions across Fortune 200 companies. 
                    He's helped thousands of professionals leverage AI for career acceleration.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts - Medium style */}
            <RelatedPosts slug={slug} basePath={basePath} />
          </article>
        </div>
      </div>

      {isZh ? <AITipsGuideZh /> : <AITipsGuide />}
      <Footer />
    </div>
  );
};

export default BlogPost;

