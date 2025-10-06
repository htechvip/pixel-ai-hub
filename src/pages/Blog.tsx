import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/config/blog";
import { Calendar, User, ArrowRight, Download, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import bookCover from "@/assets/career growth book cover sm.jpg";
import AITipsModal from "@/components/AITipsModal";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");
  const basePath = isZh ? "/zh-tw" : "";

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Career Blog - AI Jedi</title>
        <meta name="description" content="Expert insights on AI tools, career growth, and professional development. Learn how to leverage AI for career acceleration." />
      </Helmet>

      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Career Insights</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert strategies for leveraging AI to accelerate your professional growth
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`${basePath}/blog/${post.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Featured Image */}
                  <div className="relative h-60 md:h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No posts found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Download Your Free Copy Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                Download Your Free Copy
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                $50K to $500K: The AI Career Blueprint for Explosive Professional Growth
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground mb-6">Inside this book, you'll discover:</p>
                  <ul className="space-y-4 text-base md:text-lg text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>AI Champion Playbook</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Role-Specific AI Tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Real Career Transformations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Internal Promotion Strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Workflow Systems Blueprint</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src={bookCover} 
                    alt="AI Career Blueprint Book Cover"
                    className="w-full max-w-sm h-auto rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="hero"
                size="lg"
                className="text-lg px-8 py-4 animate-fade-in"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Book
              </Button>
            </div>
            
            <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
              No credit card required. Instant access. Perfect for corporate professionals ready to accelerate their careers.
            </p>
          </div>
        </div>
        
        {/* Modal */}
        <AITipsModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

