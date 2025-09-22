import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import AITipsModal from "./AITipsModal";
import talkImage from "@/assets/ai talk sm.jpg";

const AITipsGuideZh = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 只在中文頁面顯示
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");
  if (!isZh) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Text + Logos */}
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    像專業人士一樣掌握 AI 工具
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-6 max-w-2xl md:max-w-none mx-auto md:mx-0">
                    了解使用 AI 有多容易。下載免費小指南，學習在職場中如何善用 ChatGPT、Claude 與 Perplexity 的通用技巧與方法。
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 md:mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                        <img 
                          src="/logos/chatgpt_logo.jpeg" 
                          alt="ChatGPT 標誌" 
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </div>
                      <h3 className="font-semibold mb-2">ChatGPT 祕訣</h3>
                      <p className="text-sm text-muted-foreground">專業提示與工作流程</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                        <img 
                          src="/logos/claude_logo.jpeg" 
                          alt="Claude 標誌" 
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </div>
                      <h3 className="font-semibold mb-2">Claude 策略</h3>
                      <p className="text-sm text-muted-foreground">進階推理與分析</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200">
                        <img 
                          src="/logos/perplexity_ai_logo.jpeg" 
                          alt="Perplexity 標誌" 
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </div>
                      <h3 className="font-semibold mb-2">Perplexity 搜尋</h3>
                      <p className="text-sm text-muted-foreground">高效率資訊蒐集</p>
                    </div>
                  </div>

                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-gradient-primary hover:bg-gradient-primary/90 rounded-lg transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    立即下載
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">免費下載 • 立即存取</p>
                </div>

                {/* Right: Image */}
                <div className="order-first md:order-last">
                  <img 
                    src={talkImage} 
                    alt="AI Jedi 演講照片"
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
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


