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
import cntColor from "@/assets/cnt-color.jpeg";

const Course = () => {
  const { courseId } = useParams();
  const isZh = window.location.pathname.startsWith("/zh-tw");
  const signupPath = isZh ? "/zh-tw/signup" : "/signup";

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the course from the courses data
  const courseData = content.courses[courseId as keyof typeof content.courses];

  if (!courseData) {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Course Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link to={isZh ? "/zh-tw" : "/"} className="text-primary hover:underline">
                ← Back to Courses
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left side - Course Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{courseData.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{courseData.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{courseData.rating}</span>
                    <span className="text-muted-foreground">({courseData.ratingNum.toLocaleString()} ratings)</span>
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

              {/* Right side - Video Preview */}
              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <PlayCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Course Preview</h3>
                      <p className="text-sm text-muted-foreground">Watch this video to see what you'll learn</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="bg-white/90 text-black hover:bg-white">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Play Preview
                  </Button>
                </div>
              </div>
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
                  <img 
                    src={cntColor} 
                    alt={content.instructor.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{content.instructor.name}</h4>
                    <p className="text-muted-foreground mb-2">{content.instructor.role}</p>
                    <p className="text-sm">{content.instructor.bio[0]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.floor(courseData.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">{courseData.rating}</span>
                    <span className="text-muted-foreground">({courseData.ratingNum.toLocaleString()} ratings)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Review 1 */}
                  <div className="border-b border-border pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face&auto=format&q=80" 
                          alt="Sarah Martinez" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">Sarah Martinez</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      "This course completely transformed how I approach my work. The AI tools I learned here save me 3-4 hours every day. The instructor explains everything clearly and the hands-on projects are exactly what I needed."
                    </p>
                  </div>

                  {/* Review 2 */}
                  <div className="border-b border-border pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format&q=80" 
                          alt="David Johnson" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">David Johnson</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">1 week ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      "As someone with zero AI experience, I was skeptical at first. But this course made everything so accessible. I'm now using AI for content creation, data analysis, and even automating my email responses."
                    </p>
                  </div>

                  {/* Review 3 */}
                  <div className="border-b border-border pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format&q=80" 
                          alt="Lisa Chen" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">Lisa Chen</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">2 weeks ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      "The practical approach is what makes this course special. You're not just learning theory - you're building real workflows you can use immediately. Highly recommend for any professional looking to boost productivity."
                    </p>
                  </div>

                  {/* Review 4 */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format&q=80" 
                          alt="Michael Rodriguez" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">Michael Rodriguez</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">3 weeks ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      "Excellent course! The instructor's industry experience really shows. I've implemented several AI workflows in my company and the ROI has been incredible. Worth every penny."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Card */}
            <Card className="sticky top-24">
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
