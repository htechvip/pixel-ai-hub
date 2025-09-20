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
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>{courseData.title} – Learn AI Through Hands-On Case Studies</title>
        <meta name="description" content={`${courseData.description} Master practical AI skills for career professionals through real-world case studies.`} />
        <link rel="canonical" href={`https://aijedi.hyperionsoft.com${isZh ? '/zh-tw' : ''}/course/${courseId}`} />
        <meta property="og:title" content={`${courseData.title} – Learn AI Through Hands-On Case Studies`} />
        <meta property="og:description" content={`${courseData.description} Master practical AI skills for career professionals through real-world case studies.`} />
        <meta property="og:url" content={`https://aijedi.hyperionsoft.com${isZh ? '/zh-tw' : ''}/course/${courseId}`} />
        <meta property="og:image" content="/ai%20jedi%20class.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${courseData.title} – Learn AI Through Hands-On Case Studies`} />
        <meta name="twitter:description" content={`${courseData.description} Master practical AI skills for career professionals through real-world case studies.`} />
        <meta name="twitter:image" content="/ai%20jedi%20class.png" />
      </Helmet>
      <Header />
      {/* Course Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <button 
                className="text-primary hover:underline bg-transparent border-none cursor-pointer"
                onClick={() => {
                  // Use window.location.assign for better hash handling
                  window.location.assign(`${isZh ? "/zh-tw" : "/"}#online-courses`);
                }}
              >
                ← Back to Courses
              </button>
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
                  {courseData.video ? (
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                    >
                      <source src={`/${courseData.video}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <PlayCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Course Preview</h3>
                        <p className="text-sm text-muted-foreground">Watch this video to see what you'll learn</p>
                      </div>
                    </div>
                  )}
                </div>
                {!courseData.video && (
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white/90 text-black hover:bg-white">
                      <PlayCircle className="w-5 h-5 mr-2" />
                      Play Preview
                    </Button>
                  </div>
                )}
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
                          <div key={lessonIndex} className="flex items-center p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-3">
                              {lesson.type === 'video' ? (
                                <PlayCircle className="w-5 h-5 text-primary" />
                              ) : (
                                <Target className="w-5 h-5 text-orange-500" />
                              )}
                              <span>{lesson.title}</span>
                            </div>
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
                    <span>Basic computer skills (email, web browsing, Excel)</span>
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
                  <p className="text-muted-foreground">
                    {courseData.description}
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
                  {courseData.reviews?.map((review, index) => {
                    // Global unique avatar assignment for all reviewers
                    const getAvatarUrl = (name: string) => {
                      // Predefined mapping of specific reviewer names to unique avatars
                      const reviewerAvatars: { [key: string]: string } = {
                        // AI for Finance Professionals (Course 1)
                        'Sarah Martinez': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Mike Chen': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Emily Rodriguez': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'David Kim': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        
                        // AI for Marketing Professionals (Course 2)
                        'Jessica Wu': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Alex Thompson': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Maria Santos': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Tom Wilson': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        
                        // AI for Software Developers (Course 3)
                        'Robert Johnson': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Linda Chang': 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Carlos Rivera': 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Anna Petrov': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        
                        // AI for Business Leaders (Course 4)
                        'Jennifer Adams': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Marcus Brown': 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Rachel Green': 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Kevin Park': 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        
                        // AI for Healthcare Professionals (Course 5)
                        'Patricia Davis': 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Steven Miller': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Diana Lopez': 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Brian Taylor': 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        
                        // AI for Product Managers - Vibe Coding 101 (Course 6)
                        'Amanda Foster': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'James Rodriguez': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Sophie Chen': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
                        'Michael Johnson': 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face&auto=format&q=80'
                      };
                      
                      return reviewerAvatars[name] || 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face&auto=format&q=80'; // fallback
                    };

                    return (
                    <div key={index} className={index < courseData.reviews!.length - 1 ? "border-b border-border pb-4" : ""}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <img 
                            src={getAvatarUrl(review.name)} 
                            alt={review.name} 
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.timeAgo}</span>
                      </div>
                      <p className="text-muted-foreground">
                        "{review.comment}"
                      </p>
                    </div>
                    );
                  })}
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
