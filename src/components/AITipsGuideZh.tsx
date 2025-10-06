import AITipsInlineForm from "./AITipsInlineForm";
import bookCover from "@/assets/career growth book cover sm.jpg";

const AITipsGuideZh = () => {
  // 只在中文頁面顯示
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");
  if (!isZh) return null;

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
              免費下載
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              $50K 到 $500K：AI 職涯藍圖助您爆發性專業成長
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              無需信用卡。立即存取。專為準備加速職涯的企業專業人士設計。
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto mb-12 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div className="flex justify-center">
                <img 
                  src={bookCover} 
                  alt="AI 職涯藍圖書籍封面"
                  className="w-full max-w-sm h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
              
              <div>
                <AITipsInlineForm isZh={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITipsGuideZh;


