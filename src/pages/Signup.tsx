import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import Header from "@/components/Header";
import ProgramOverview from "@/components/ProgramOverview";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Signup = () => {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Helmet>
        <title>AI Training Registration – Hands-On Case Studies for Career Professionals</title>
        <meta name="description" content="Join our intensive AI training program designed for career professionals. Learn through real-world case studies in finance, marketing, healthcare, and business operations." />
        <link rel="canonical" href="https://aijedi.hyperionsoft.com/signup" />
        <meta property="og:title" content="AI Training Registration – Hands-On Case Studies for Career Professionals" />
        <meta property="og:description" content="Join our intensive AI training program designed for career professionals. Learn through real-world case studies in finance, marketing, healthcare, and business operations." />
        <meta property="og:url" content="https://aijedi.hyperionsoft.com/signup" />
        <meta property="og:image" content="/ai%20jedi%20class.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Training Registration – Hands-On Case Studies for Career Professionals" />
        <meta name="twitter:description" content="Join our intensive AI training program designed for career professionals. Learn through real-world case studies in finance, marketing, healthcare, and business operations." />
        <meta name="twitter:image" content="/ai%20jedi%20class.png" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 pb-32 container mx-auto px-4">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <Badge className="px-4 py-2 text-sm font-medium" variant="secondary">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              August 2025 Cohorts
            </div>
          </Badge>
        </div>

        {/* Heading & Description */}
        <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-4">
          August Cohorts - Taipei
        </h1>
        <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Join our intensive in-person 2-day workshop and learn to build full-stack applications with AI as your coding partner.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>2 Days Intensive</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>In-Person (Taipei)</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Limited Spots</span>
          </div>
        </div>

        {/* Cohort Card */}
        <Card className="max-w-3xl mx-auto p-8 relative">
          {/* optional circle number */}
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            1
          </span>
          <h2 className="text-2xl font-bold mb-1">Weekend Intensive</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              August 9-10, 2025
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Sat & Sun, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              In-person workshop (location TBA)
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Sold Out
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            Course Fully Booked
          </Button>
        </Card>

        {/* Second Cohort Card */}
        <Card className="max-w-3xl mx-auto p-8 relative mt-12">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            2
          </span>
          <h2 className="text-2xl font-bold mb-1">Weekend Intensive</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              August 16-17, 2025
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Fri & Sat, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              In-person workshop (location TBA)
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Sold Out
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            Course Fully Booked
          </Button>
        </Card>

        {/* Third Cohort Card */}
        <Card className="max-w-3xl mx-auto p-8 relative mt-12">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            3
          </span>
          <h2 className="text-2xl font-bold mb-1">Weekend Intensive</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              August 23-24, 2025
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Sat & Sun, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              In-person workshop (location TBA)
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Sold Out
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            Course Fully Booked
          </Button>
        </Card>

        {/* ---------------- September Cohorts ---------------- */}

        {/* September Badge */}
        <div className="flex justify-center mt-24 mb-6">
          <Badge className="px-4 py-2 text-sm font-medium" variant="secondary">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              September 2025 Cohorts
            </div>
          </Badge>
        </div>

        {/* September Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
          September Cohorts - Los Angeles
        </h2>

        {/* September Stats Row (same as above) */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>2 Days Intensive</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>In-Person (Los Angeles)</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Limited Spots</span>
          </div>
        </div>

        {/* September Cohort 1 */}
        <Card className="max-w-3xl mx-auto p-8 relative">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            4
          </span>
          <h2 className="text-2xl font-bold mb-1">Weekend Intensive</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              September 6-7, 2025
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Sat & Sun, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              In-person workshop (location TBA)
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Sold Out
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            Course Fully Booked
          </Button>
        </Card>

        {/* ---------------- October Cohorts ---------------- */}

        {/* October Badge */}
        <div className="flex justify-center mt-24 mb-6">
          <Badge className="px-4 py-2 text-sm font-medium" variant="secondary">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              October 2024 Cohorts
            </div>
          </Badge>
        </div>

        {/* October Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
          October Cohorts - Taipei & Los Angeles
        </h2>

        {/* October Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>2 Days Intensive</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>In-Person Workshop</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>All Spots Filled</span>
          </div>
        </div>

        {/* October Cohort 1 - Taipei */}
        <Card className="max-w-3xl mx-auto p-8 relative">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            5
          </span>
          <h2 className="text-2xl font-bold mb-1">Weekend Intensive - Taipei</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              October 5-6, 2024
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Sat & Sun, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              In-person workshop (location TBA)
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Sold Out
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            Course Fully Booked
          </Button>
        </Card>

        {/* October Cohort 2 - Los Angeles */}
        <Card className="max-w-3xl mx-auto p-8 relative mt-12">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            6
          </span>
          <h2 className="text-2xl font-bold mb-1">Weekend Intensive - Los Angeles</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              October 19-20, 2024
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Sat & Sun, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              In-person workshop (location TBA)
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Sold Out
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            Course Fully Booked
          </Button>
        </Card>

        {/* ---------------- November Cohorts ---------------- */}

        {/* November Badge */}
        <div className="flex justify-center mt-24 mb-6">
          <Badge className="px-4 py-2 text-sm font-medium" variant="secondary">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              November 2024 Cohorts
            </div>
          </Badge>
        </div>

        {/* November Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
          November Cohorts - Taipei & Los Angeles
        </h2>

        {/* November Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>2 Days Intensive</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>In-Person Workshop</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>All Spots Filled</span>
          </div>
        </div>

        {/* November Cohort 1 - Taipei */}
        <Card className="max-w-3xl mx-auto p-8 relative">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            7
          </span>
          <h2 className="text-2xl font-bold mb-1">Weekend Intensive - Taipei</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              November 2-3, 2024
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Sat & Sun, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              In-person workshop (location TBA)
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Sold Out
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            Course Fully Booked
          </Button>
        </Card>

        {/* November Cohort 2 - Los Angeles */}
        <Card className="max-w-3xl mx-auto p-8 relative mt-12">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            8
          </span>
          <h2 className="text-2xl font-bold mb-1">Weekend Intensive - Los Angeles</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              November 16-17, 2024
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Sat & Sun, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              In-person workshop (location TBA)
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Sold Out
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            Course Fully Booked
          </Button>
        </Card>

        {/* Waitlist Section */}
        <Card className="max-w-3xl mx-auto p-8 mt-24 text-center bg-card/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Not in LA or Taipei / Can't make the dates?</h3>
          <p className="text-muted-foreground mb-6">
            Join our waitlist for updates and future cohorts
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://forms.gle/UEqKeNwjD67odXhS7" target="_blank" rel="noopener noreferrer">
              Join Waitlist
            </a>
          </Button>
        </Card>

        {/* Important Information Section */}
        <Card className="max-w-3xl mx-auto p-8 mt-24 bg-card/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 justify-center">
            <span role="img" aria-label="info">ℹ️</span>
            Important Information
          </h3>
          <div className="space-y-6 text-left text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-xl" role="img" aria-label="in-person">🧑‍🤝‍🧑</span>
              <p>
                <strong>In-Person Only:</strong> This is a fully hands-on workshop held on-site. Remote attendance isn’t offered.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl" role="img" aria-label="payment">💳</span>
              <p>
                <strong>Registration & Payment:</strong> Your seat is secured once payment has been successfully completed.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl" role="img" aria-label="capacity">📈</span>
              <p>
                <strong>Limited Capacity:</strong> Spots are capped to keep the class intimate—register early to avoid missing out.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl" role="img" aria-label="laptop">💻</span>
              <p>
                <strong>What to Bring:</strong> Bring your laptop. Pre-class we’ll email you any software to install.
              </p>
            </div>
          </div>
        </Card>

        {/* What You Will Learn */}
        <div className="mt-24 max-w-3xl mx-auto">
          <ProgramOverview minimal />
        </div>
      </main>
    </>
  );
};

export default Signup; 