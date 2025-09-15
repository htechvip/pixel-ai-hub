import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  PlayCircle, 
  Download,
  Award,
  Target,
  Zap
} from "lucide-react";
import { content } from "@/config/content";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Course = () => {
  const { courseId } = useParams();
  const isZh = window.location.pathname.startsWith("/zh-tw");
  const signupPath = isZh ? "/zh-tw/signup" : "/signup";

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the course from the program features
  const course = content.program.features.find(feature => 
    feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === courseId
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to={isZh ? "/zh-tw" : "/"}>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const courseData = {
    title: course.title,
    description: course.description,
    instructor: "Cho-Nan Tsai",
    rating: 4.9,
    students: 1247,
    duration: "4 hours",
    level: "Beginner",
    price: "$199",
    originalPrice: "$399",
    lastUpdated: "December 2024",
    language: "English",
    features: [
      "No coding experience required",
      "Hands-on projects included",
      "Certificate of completion",
      "Lifetime access",
      "Mobile and desktop access"
    ],
    whatYouWillLearn: [
      "Master AI tools for your specific domain",
      "Build practical workflows you can use immediately",
      "Automate repetitive tasks and processes",
      "Create professional-quality outputs",
      "Scale your productivity with AI assistance"
    ],
    curriculum: [
      {
        section: "Getting Started",
        lessons: [
          { title: "Welcome to AI-Powered Workflows", duration: "15 min", type: "video" },
          { title: "Setting Up Your AI Toolkit", duration: "20 min", type: "video" },
          { title: "Understanding AI Capabilities", duration: "25 min", type: "video" }
        ]
      },
      {
        section: "Core Concepts",
        lessons: [
          { title: "Prompt Engineering Fundamentals", duration: "30 min", type: "video" },
          { title: "Workflow Design Principles", duration: "25 min", type: "video" },
          { title: "Quality Control and Review", duration: "20 min", type: "video" }
        ]
      },
      {
        section: "Hands-On Projects",
        lessons: [
          { title: "Project 1: Build Your First Workflow", duration: "45 min", type: "project" },
          { title: "Project 2: Advanced Automation", duration: "50 min", type: "project" },
          { title: "Project 3: Real-World Application", duration: "60 min", type: "project" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Course Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link to={isZh ? "/zh-tw" : "/"} className="text-primary hover:underline">
                ← Back to Courses
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{courseData.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{courseData.rating}</span>
                <span className="text-muted-foreground">(1,247 ratings)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span>{courseData.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>{courseData.duration}</span>
              </div>
              <Badge variant="secondary">{courseData.level}</Badge>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <Card>
              <CardHeader>
                <CardTitle>What you'll learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {courseData.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle>Course curriculum</CardTitle>
                <CardDescription>{courseData.curriculum.length} sections • {courseData.curriculum.reduce((acc, section) => acc + section.lessons.length, 0)} lessons • {courseData.duration} total</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseData.curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h4 className="font-semibold mb-2">{section.section}</h4>
                      <div className="space-y-2">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-3">
                              {lesson.type === 'video' ? (
                                <PlayCircle className="w-5 h-5 text-primary" />
                              ) : (
                                <Target className="w-5 h-5 text-orange-500" />
                              )}
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>No prior AI experience required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Basic computer skills (email, web browsing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Access to a computer with internet connection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Willingness to learn and experiment with AI tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">
                    This comprehensive course is designed for professionals who want to leverage AI to transform their work processes and boost productivity. Whether you're in customer service, marketing, operations, data analysis, HR, or simply want to build custom solutions, this course provides the practical skills you need.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    You'll learn to use cutting-edge AI tools to automate repetitive tasks, generate high-quality content, analyze data, and create workflows that save you hours every week. Our hands-on approach ensures you'll build real, working solutions you can implement immediately in your job or business.
                  </p>
                  <p className="text-muted-foreground">
                    By the end of this course, you'll have the confidence and skills to use AI as your personal productivity assistant, making you more efficient and valuable in your professional role.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">CT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{content.instructor.name}</h4>
                    <p className="text-muted-foreground mb-2">{content.instructor.role}</p>
                    <p className="text-sm">{content.instructor.bio[0]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Card */}
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">{courseData.price}</div>
                  <div className="text-lg text-muted-foreground line-through mb-2">{courseData.originalPrice}</div>
                  <Badge variant="destructive" className="mb-4">50% OFF</Badge>
                </div>

                <Button asChild className="w-full mb-4" size="lg">
                  <Link to={signupPath}>Enroll Now</Link>
                </Button>

                <div className="text-center text-sm text-muted-foreground mb-4">
                  30-Day Money-Back Guarantee
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <h4 className="font-semibold">This course includes:</h4>
                  <ul className="space-y-2 text-sm">
                    {courseData.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
