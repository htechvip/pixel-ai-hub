import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import Header from "@/components/Header";

const Signup = () => {
  return (
    <>
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
          August Cohorts
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
      </main>
    </>
  );
};

export default Signup; 