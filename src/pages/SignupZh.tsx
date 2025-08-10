import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import Header from "@/components/Header";
import ProgramOverview from "@/components/ProgramOverview";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const SignupZh = () => {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Jedi 梯次報名 – 台北 & 洛杉磯</title>
        <meta name="description" content="立即搶先預約 AI Jedi 週末工作坊名額，名額有限。" />
        <link rel="canonical" href="https://aijedi.hyperionsoft.com/zh-tw/signup" />
        <meta property="og:title" content="AI Jedi 梯次報名" />
        <meta property="og:description" content="報名我們即將舉辦的台北與洛杉磯 AI 週末工作坊。" />
        <meta property="og:url" content="https://aijedi.hyperionsoft.com/zh-tw/signup" />
        <meta property="og:image" content="/ai%20jedi%20class.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Jedi 梯次報名" />
        <meta name="twitter:description" content="報名我們即將舉辦的台北與洛杉磯 AI 週末工作坊。" />
        <meta name="twitter:image" content="/ai%20jedi%20class.png" />
      </Helmet>

      <Header />
      <main className="min-h-screen pt-24 pb-32 container mx-auto px-4">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <Badge className="px-4 py-2 text-sm font-medium" variant="secondary">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              2025 年 8 月梯次
            </div>
          </Badge>
        </div>

        {/* Heading & Description */}
        <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-4">
          2025 年 8 月梯次 - 台北
        </h1>
        <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          加入我們兩天密集實體工作坊，學習以 AI 為夥伴打造全端應用。
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>2 天密集</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>實體 (台北)</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>名額有限</span>
          </div>
        </div>

        {/* Cohort Card 1 */}
        <Card className="max-w-3xl mx-auto p-8 relative">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            1
          </span>
          <h2 className="text-2xl font-bold mb-1">週末密集班</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              2025/8/9-10
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              週六 & 週日, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              實體工作坊（地點待定）
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> 已售罄
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            名額已滿
          </Button>
        </Card>

        {/* Cohort Card 2 */}
        <Card className="max-w-3xl mx-auto p-8 relative mt-12">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            2
          </span>
          <h2 className="text-2xl font-bold mb-1">週末密集班</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              2025/8/16-17
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              週五 & 週六, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              實體工作坊（地點待定）
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> 已售罄
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            名額已滿
          </Button>
        </Card>

        {/* ---------------- September Cohorts ---------------- */}

        {/* September Badge */}
        <div className="flex justify-center mt-24 mb-6">
          <Badge className="px-4 py-2 text-sm font-medium" variant="secondary">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              2025 年 9 月梯次
            </div>
          </Badge>
        </div>

        {/* September Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
          2025 年 9 月梯次 - 洛杉磯
        </h2>

        {/* September Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>2 天密集</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>實體 (洛杉磯)</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>名額有限</span>
          </div>
        </div>

        {/* September Cohort 1 */}
        <Card className="max-w-3xl mx-auto p-8 relative">
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            3
          </span>
          <h2 className="text-2xl font-bold mb-1">週末密集班</h2>

          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              2025/9/6-7
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              週六 & 週日, 9:30 AM – 1:30 PM
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              實體工作坊（地點待定）
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-destructive font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> 已售罄
            </span>
          </div>

          <Button disabled variant="secondary" size="lg" className="mt-4 w-full cursor-not-allowed">
            名額已滿
          </Button>
        </Card>

        {/* Waitlist Section */}
        <Card className="max-w-3xl mx-auto p-8 mt-24 text-center bg-card/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">不在洛杉磯或台北 / 無法參加這些日期？</h3>
          <p className="text-muted-foreground mb-6">
            加入候補名單以獲得更新與未來梯次通知
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://forms.gle/UEqKeNwjD67odXhS7" target="_blank" rel="noopener noreferrer">
              加入候補名單
            </a>
          </Button>
        </Card>

        {/* Important Information Section */}
        <Card className="max-w-3xl mx-auto p-8 mt-24 bg-card/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 justify-center">
            <span role="img" aria-label="info">ℹ️</span>
            重要資訊
          </h3>
          <div className="space-y-6 text-left text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-xl" role="img" aria-label="in-person">🧑‍🤝‍🧑</span>
              <p>
                <strong>僅限實體：</strong> 此課程為全程實體，無遠端選項。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl" role="img" aria-label="payment">💳</span>
              <p>
                <strong>報名與付款：</strong> 完成付款後即保留席次。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl" role="img" aria-label="capacity">📈</span>
              <p>
                <strong>名額有限：</strong> 採小班制教學，請盡早報名以免向隅。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl" role="img" aria-label="laptop">💻</span>
              <p>
                <strong>攜帶物品：</strong> 請攜帶筆電。課前我們將透過 email 提供所需安裝軟體資訊。
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

export default SignupZh;
