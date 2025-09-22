import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Download, X } from "lucide-react";

interface AITipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AITipsModal = ({ isOpen, onClose }: AITipsModalProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Locale detection for Chinese page
  const isZh = typeof window !== "undefined" && window.location.pathname.startsWith("/zh-tw");

  const t = {
    title: isZh ? "免費取得 AI 技巧指南" : "Get Your Free AI Tips Guide",
    featureChatGPT: isZh ? "ChatGPT 祕訣" : "ChatGPT Tips",
    featureClaude: isZh ? "Claude 策略" : "Claude Strategies",
    featurePerplexity: isZh ? "Perplexity 搜尋" : "Perplexity Research",
    emailLabel: isZh ? "電子郵件" : "Email Address",
    firstNameLabel: isZh ? "名字" : "First Name",
    submit: isZh ? "寄給我指南" : "Send me the guide",
    sending: isZh ? "傳送中..." : "Sending...",
    successTitle: isZh ? "成功！" : "Success!",
    successMsg: isZh
      ? "請至您的信箱確認訂閱，即可收到免費 AI 技巧指南。"
      : "Check your email to confirm your subscription and get your free AI tips guide.",
    privacy: isZh ? "我們重視您的隱私。可隨時取消訂閱。" : "We respect your privacy. Unsubscribe at anytime.",
    networkError: isZh ? "網路錯誤，請稍後再試。" : "Network error. Please check your connection and try again.",
  } as const;

  // Fix scrollbar shift when modal opens/closes
  useEffect(() => {
    const handleScrollbarCompensation = () => {
      if (isOpen) {
        // Calculate scrollbar width
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        // Set CSS custom property for scrollbar width
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
        
        // Add data attribute for CSS targeting
        document.body.setAttribute('data-scroll-locked', 'true');
      } else {
        // Remove compensation when modal closes
        document.documentElement.style.removeProperty('--scrollbar-width');
        document.body.removeAttribute('data-scroll-locked');
      }
    };

    // Use a small delay to ensure Radix UI has processed the modal state
    const timeoutId = setTimeout(handleScrollbarCompensation, 0);

    return () => {
      clearTimeout(timeoutId);
      // Cleanup on unmount
      document.documentElement.style.removeProperty('--scrollbar-width');
      document.body.removeAttribute('data-scroll-locked');
    };
  }, [isOpen]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Get API credentials from environment variables
      const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;
      const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID || '8586312';
      
      if (!apiKey) {
        throw new Error('ConvertKit API key not configured');
      }

      console.log("Submitting to ConvertKit with API key and form ID:", formId);
      
      // Submit to ConvertKit API using the proper endpoint
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
          first_name: firstName,
        }),
      });

      const responseData = await response.json();
      console.log("ConvertKit API Response:", responseData);

      if (response.ok) {
        setIsSuccess(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setEmail("");
          setFirstName("");
          onClose();
        }, 3000);
      } else {
        console.error("ConvertKit API Error:", responseData);
        setError(`Error: ${responseData.message || "Something went wrong. Please try again."}`);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.successTitle}</h3>
            <p className="text-muted-foreground">{t.successMsg}</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">{t.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
                <img 
                  src="/logos/chatgpt_logo.jpeg" 
                  alt="ChatGPT Logo" 
                  className="w-10 h-10 rounded object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">{t.featureChatGPT}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
                <img 
                  src="/logos/claude_logo.jpeg" 
                  alt="Claude Logo" 
                  className="w-10 h-10 rounded object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">{t.featureClaude}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
                <img 
                  src="/logos/perplexity_ai_logo.jpeg" 
                  alt="Perplexity AI Logo" 
                  className="w-10 h-10 rounded object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">{t.featurePerplexity}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.emailLabel}</Label>
              <Input
                id="email"
                type="email"
                placeholder={isZh ? "請輸入您的電子郵件" : "Enter your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="firstName">{t.firstNameLabel}</Label>
              <Input
                id="firstName"
                type="text"
                placeholder={isZh ? "請輸入您的名字" : "Enter your first name"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting || !email}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  {t.sending}
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  {t.submit}
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground">{t.privacy}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AITipsModal;
