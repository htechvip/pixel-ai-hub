import LandingHeader from "@/components/LandingHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, CheckCircle, AlertTriangle, Target, Zap } from "lucide-react";
import aiTalkVilla from "@/assets/ai talk villa.jpeg";
import uscLecture from "@/assets/usc ai lecture.png";
import columbiaWorkshop from "@/assets/columbia venture community tech founder workshop.png";

const CareerAIAdvantage = () => {
  return (
    <div className="min-h-screen bg-background theme-career">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <AlertTriangle className="w-4 h-4" />
                  URGENT: 12 months before AI literacy becomes table stakes
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Nvidia just dropped $100B on OpenAI. Your career window is officially closing.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  This isn't just tech news—it's your <span className="font-semibold text-orange-600">last chance</span> to get ahead of the AI career curve. Here's what you need to know...
                </p>
                <p className="text-base md:text-lg text-slate-700 mb-6">
                  Looking for superior AI training that will differentiate you in a crowded job market? Download a free tips guide with
                  practical strategies for using <span className="font-semibold">ChatGPT, Claude, and Perplexity</span>—built for career professionals. Learn
                  how to apply these tools to real projects that drive <span className="font-semibold">revenue, reduce costs, and lower risk</span>—not just flashy demos.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img 
                    src={aiTalkVilla} 
                    alt="Cho-Nan Tsai speaking about AI" 
                    className="w-full max-w-md rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white border-2 border-slate-200 rounded-lg p-3 shadow-lg">
                    <p className="text-sm font-semibold text-slate-700">Cho-Nan Tsai</p>
                    <p className="text-xs text-slate-500">AI Expert & USC Professor</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Professional split-screen visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-2">You're here</h3>
                  <p className="text-slate-600">Still debating whether AI matters for your career</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Where everyone else will be in 12 months</h3>
                  <p className="text-blue-600">Already implementing AI strategies that make them indispensable</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 animate-pulse">
                Get the free AI career guide now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Hook Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Let me break down what this $100B actually means for your paycheck...
            </h2>
            {/* Contextual image: professionals collaborating */}
            <div className="mb-10">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60"
                alt="Professionals collaborating in a meeting"
                loading="lazy"
                className="w-full h-64 md:h-80 object-cover rounded-xl border border-slate-200 shadow-sm"
              />
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-semibold text-primary">Look, when Nvidia throws around that kind of money, it's not a bet—it's a guarantee</p>
              <p>They're building the infrastructure for AI to become as common as email in every workplace</p>
              <p className="text-slate-700">Translation: more teams will deploy AI that moves real KPIs — <span className="font-semibold">revenue up, costs down, risk reduced</span>.</p>
              <p className="font-semibold text-orange-600">And here's the part everyone's missing: this just put a countdown timer on your current skill set</p>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                <p className="font-semibold text-orange-800">You've got maybe 12 months before 'I don't really do AI' becomes career suicide</p>
              </div>
              <p>But here's the thing—most people are still treating this like it's optional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Okay, real talk about where you stand right now...
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed lg:col-span-2">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                <p className="font-semibold text-slate-700 mb-2">You're actually in the perfect spot.</p>
                <p>While your colleagues are still debating whether ChatGPT is reliable, you could be learning to use it like a strategic weapon</p>
              </div>
              
              <p className="font-semibold text-orange-600">But that window? It's slamming shut fast</p>
              
              <p>Soon everyone will claim they 'know AI'—the question is, will you know it better than them?</p>
              
              <div className="bg-orange-50 border border-orange-200 p-4 rounded">
                <p className="font-semibold text-orange-800">Because in a crowded job market, being 'familiar with AI tools' won't cut it anymore</p>
              </div>
              
              <p className="font-semibold text-primary">You need to be the person who understands how to use AI to actually move business forward</p>
            </div>
            {/* Supporting image: focused professional at work */}
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=60"
                alt="Professional working on a laptop"
                loading="lazy"
                className="w-full h-full max-h-96 object-cover rounded-xl border border-slate-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Insight Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  I've been tracking this shift across industries, and the pattern is crystal clear...
                </h2>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={uscLecture} 
                  alt="Cho-Nan Tsai teaching AI at USC" 
                  className="w-full max-w-xs rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-slate-600 mb-3" />
                  <h3 className="font-bold text-slate-700 mb-2">Marketing Manager</h3>
                  <p className="text-sm text-slate-600">Learned Claude for strategic analysis → Just got promoted over three peers</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-slate-600 mb-3" />
                  <h3 className="font-bold text-slate-700 mb-2">Finance Guy</h3>
                  <p className="text-sm text-slate-600">Using AI for forecasting → Suddenly indispensable to leadership</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-slate-600 mb-3" />
                  <h3 className="font-bold text-slate-700 mb-2">Operations Director</h3>
                  <p className="text-sm text-slate-600">Automating with AI → Saving company millions while others push spreadsheets</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-xl font-semibold">It's not magic—it's just superior training creating superior results</p>
              <p className="text-lg text-primary font-bold">And right now, superior training still creates an unfair advantage</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Stakes Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-orange-800">
              Here's what happens if you wait...
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-orange-700">
              <div className="bg-white border border-orange-200 p-6 rounded-lg shadow-sm">
                <p className="font-semibold mb-2">In 12 months, basic AI literacy will be table stakes—like knowing how to use email</p>
              </div>
              
              <p>The people getting hired and promoted will be those who think strategically about AI</p>
              
              <p className="font-semibold">While you're catching up on the basics, they'll already be implementing advanced strategies</p>
              
              <div className="bg-orange-100 border border-orange-300 p-4 rounded">
                <p className="font-bold text-orange-900">Don't let your competition get a head start while you're still figuring out if this matters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Hook */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Look, I get it—you want to move fast, but you need to start smart
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-semibold text-primary">Everyone's asking me: 'What's the fastest way to get AI-ready for my career?'</p>
              
              <p>The answer isn't jumping into some expensive bootcamp</p>
              
              <div className="bg-slate-50 border border-slate-200 p-4 rounded">
                <p className="font-semibold text-slate-700">It's mastering the core tools first—ChatGPT, Claude, and Perplexity—but mastering them strategically</p>
              </div>
              
              <p className="text-center font-semibold text-xl">So I put together everything you need to start winning with AI tomorrow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Value Proposition */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              This isn't your typical 'intro to AI' fluff...
            </h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
              These are real-world systems and workflows where AI directly and indirectly impacts the bottom line —
              <span className="font-semibold text-slate-800"> driving revenue, reducing costs, de-risking operations</span>.
              No flashy demos. Only tangible business outcomes you can implement.
            </p>
            {/* Image ribbon showing real professionals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60"
                alt="Team working in a modern office"
                loading="lazy"
                className="h-28 w-full object-cover rounded-lg border border-slate-200"
              />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60"
                alt="Professionals collaborating with laptops"
                loading="lazy"
                className="h-28 w-full object-cover rounded-lg border border-slate-200"
              />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
                alt="Engineer working on code"
                loading="lazy"
                className="h-28 w-full object-cover rounded-lg border border-slate-200"
              />
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60"
                alt="Professional presentation"
                loading="lazy"
                className="h-28 w-full object-cover rounded-lg border border-slate-200"
              />
            </div>
            
            <p className="text-xl text-center mb-12">
              I'm talking about the specific prompts, techniques, and strategies that actually move your career forward
            </p>
            
            <div className="bg-white border-2 border-slate-200 rounded-lg p-8 mb-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Inside this free guide:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                  <p>The 15 ChatGPT prompts I teach to executives — focused on <span className="font-semibold">revenue, costs, and risk</span></p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                  <p>Why Claude crushes ChatGPT for strategic thinking — with <span className="font-semibold">use cases tied to KPIs</span></p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                  <p>The Perplexity research method that <span className="font-semibold">shortens decision cycles</span> and improves win rates</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                  <p>Industry-specific use cases you can implement immediately — with <span className="font-semibold">measurable outcomes</span></p>
                </div>
                
                <div className="flex items-start space-x-3 md:col-span-2">
                  <CheckCircle className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                  <p>The mindset shift that separates AI users from AI leaders — <span className="font-semibold">from demos to deployment</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Don't just take my word for it—here's what's happening right now...
            </h2>
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=60"
                alt="Team discussing strategy around a table"
                loading="lazy"
                className="w-full h-56 md:h-64 object-cover rounded-xl border border-slate-200"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="font-semibold text-slate-700 mb-2">Lisa from tech:</div>
                  <p className="text-sm text-slate-600">"Six months ago I was worried about AI taking my job. Last week I got promoted to head our AI strategy initiative"</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="font-semibold text-slate-700 mb-2">David in consulting:</div>
                  <p className="text-sm text-slate-600">"While my team was still manually researching, I was using AI to deliver insights that blew our clients away"</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="font-semibold text-slate-700 mb-2">Jennifer from finance:</div>
                  <p className="text-sm text-slate-600">"I went from being the Excel person to being the AI person. Completely changed how leadership sees me"</p>
                </CardContent>
              </Card>
            </div>
            
              <p className="text-center mt-8 text-lg font-semibold">
                These aren't special people — they applied AI to <span className="font-semibold">real business problems</span> and tied it to results.
              </p>
          </div>
        </div>
      </section>

      {/* Urgency Reinforcement */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-orange-800">
              Why I'm pushing you to act right now...
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-orange-700">
              <div className="bg-white border border-orange-200 p-6 rounded-lg">
                <p className="font-semibold mb-2">This Nvidia investment just accelerated everything</p>
                <p>Google's responding, Microsoft's doubling down, Amazon's making moves</p>
              </div>
              
              <p className="font-semibold">What that means: AI tools are about to get exponentially more powerful</p>
              
              <p>The professionals who understand how to leverage that power strategically? They're going to dominate</p>
              
              <p className="bg-orange-100 border border-orange-300 p-4 rounded">
                <span className="font-bold">But only if they start building that strategic understanding now</span>
              </p>
              
              <p>Because in 12 months, everyone will have access to these tools—but not everyone will know how to use them like a pro</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Main Ask */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              So here's exactly what I want you to do...
            </h2>
            
            <p className="text-xl mb-8">
              Looking for superior AI training that will actually differentiate you in a crowded job market?
            </p>
            
              <p className="text-lg mb-12">
                Start here — grab my free guide with proven strategies for using ChatGPT, Claude, and Perplexity to accelerate any career.
                Every strategy is designed for <span className="font-semibold">real-world application</span> — not demos — and connects back to
                <span className="font-semibold"> revenue, cost, or risk</span>.
              </p>
            
            {/* Guide mockup */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">📖 AI Career Acceleration Guide</h3>
              <p className="text-lg">Professional applying AI tools strategically</p>
            </div>
            
            <div className="text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold mb-4">This guide will help you:</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Start using these tools effectively in your role tomorrow</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Understand what separates AI users from AI leaders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Spot opportunities your colleagues are completely missing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Decide if advanced AI training makes sense for your situation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transition to Advanced Training */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              And if you're ready to go all-in...
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-semibold text-primary">Once you've mastered the fundamentals, we need to talk about next-level strategy</p>
              
              <p>Because knowing the tools is just the entry fee — the outcome is <span className="font-semibold">business impact</span></p>
              
              <p className="bg-blue-50 border border-blue-200 p-4 rounded">
                The real career acceleration comes from understanding how to implement AI thinking in your specific industry —
                and measuring it with <span className="font-semibold">revenue, cost, and risk</span> outcomes.
              </p>
              
              <p>That's what my comprehensive programs are designed for—but honestly, start with the free stuff first</p>
              
              <p className="font-semibold text-center text-xl">
                Master those foundations, then we'll talk about making you the AI leader in your field
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Don't overthink this one
            </h2>
            
            <div className="space-y-6 mb-8">
              <Button size="lg" className="text-lg px-8 py-4 mr-4">
                Send me the free AI career guide
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Tell me about advanced training
              </Button>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-8">
              <p className="font-semibold text-orange-800">
                3,247 professionals have already grabbed this guide. Don't let your competition get the head start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Authority Close */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Quick note about why I'm sharing this with you...
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>I've been helping professionals navigate career transitions for over 27 years</p>
                  
                  <p>I've seen what happens when people get ahead of technology shifts—and what happens when they don't</p>
                  
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded">
                    <p className="font-semibold text-slate-700">Whether you end up working with me or not, please don't sleep on this opportunity</p>
                  </div>
                  
                  <p className="font-semibold text-xl text-primary">
                    The Nvidia investment just made this real. Your move.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img 
                    src={columbiaWorkshop} 
                    alt="Cho-Nan Tsai at Columbia Venture Community workshop" 
                    className="w-full max-w-md rounded-lg shadow-2xl"
                  />
                  {/* Supplementary image */}
                  <img
                    src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60"
                    alt="Focused professional working"
                    loading="lazy"
                    className="hidden md:block absolute -top-6 -right-6 w-28 h-28 object-cover rounded-lg border border-slate-200 shadow"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white border-2 border-slate-200 rounded-lg p-3 shadow-lg">
                    <p className="text-sm font-semibold text-slate-700">27+ Years Experience</p>
                    <p className="text-xs text-slate-500">Fortune 200 Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Urgency Push */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p className="text-xl font-semibold">
                Remember: In 12 months, AI literacy won't make you special—it'll make you employable.
              </p>
              
              <p className="text-2xl font-bold text-slate-800">
                Right now, it can still make you unstoppable.
              </p>
              
              <p className="text-xl font-semibold">
                The choice is yours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerAIAdvantage;
