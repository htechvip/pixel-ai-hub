import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import { useState } from "react";
import AITipsModal from "./AITipsModal";
import bookCover from "@/assets/career growth book cover sm.jpg";

const AITipsGuideZh = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 只在中文頁面顯示
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");
  if (!isZh) return null;

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
              免費下載
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              $50K 到 $500K：AI 職涯藍圖助您爆發性專業成長
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <p className="text-lg font-semibold text-foreground mb-6">本書內容包含：</p>
                <ul className="space-y-4 text-base md:text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>AI 冠軍手冊</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>角色專用 AI 工具</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>真實職涯轉型案例</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>內部升遷策略</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>工作流程系統藍圖</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={bookCover} 
                  alt="AI 職涯藍圖書籍封面"
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
              下載免費書籍
            </Button>
          </div>
          
          <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
            無需信用卡。立即存取。專為準備加速職涯的企業專業人士設計。
          </p>
        </div>
      </div>

      {/* Modal */}
      <AITipsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default AITipsGuideZh;


