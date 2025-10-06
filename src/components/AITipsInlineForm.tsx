import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, CheckCircle, Loader2 } from "lucide-react";

interface AITipsInlineFormProps {
  isZh?: boolean;
}

const AITipsInlineForm = ({ isZh = false }: AITipsInlineFormProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const t = {
    title: isZh ? "$50K 到 $500K：AI 職涯藍圖" : "$50K to $500K: The AI Career Blueprint",
    subtitle: isZh ? "助您爆發性專業成長" : "For Explosive Professional Growth",
    feature1: isZh ? "AI 冠軍攻略" : "AI Champion Playbook",
    feature2: isZh ? "角色專用 AI 工具" : "Role-Specific AI Tools", 
    feature3: isZh ? "真實職涯轉型案例" : "Real Career Transformations",
    feature4: isZh ? "內部晉升策略" : "Internal Promotion Strategies",
    feature5: isZh ? "工作流程系統藍圖" : "Workflow Systems Blueprint",
    emailLabel: isZh ? "電子郵件" : "Email Address",
    firstNameLabel: isZh ? "姓名" : "First Name",
    submit: isZh ? "下載免費書籍" : "Download Free Book",
    sending: isZh ? "發送中..." : "Sending...",
    successMsg: isZh ? "成功！請檢查您的電子郵件以確認訂閱並獲取免費的 AI 職涯藍圖。" : "Success! Check your email to confirm your subscription and get your free AI Career Blueprint.",
    privacy: isZh ? "我們尊重您的隱私。隨時可以取消訂閱。" : "We respect your privacy. Unsubscribe at anytime.",
    newsletter: isZh ? "加入 9,432 名訂閱我免費電子報的員工，立即收到此書……" : "Join 9,432 employees reading my free newsletter and receive the book instantly…"
  };

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
      console.log("Form data being sent:", { email, firstName, formId });
      
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
          fields: {
            subscription_date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
            subscription_timestamp: new Date().toISOString()
          }
        }),
      });

      const responseData = await response.json();
      console.log("ConvertKit API Response:", responseData);
      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        setIsSuccess(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setEmail("");
          setFirstName("");
        }, 5000);
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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Success!</h3>
        <p className="text-green-700">
          {t.successMsg}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full">
      {/* Features Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
          <span className="text-base text-muted-foreground">{t.feature1}</span>
        </div>
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
          <span className="text-base text-muted-foreground">{t.feature2}</span>
        </div>
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
          <span className="text-base text-muted-foreground">{t.feature3}</span>
        </div>
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
          <span className="text-base text-muted-foreground">{t.feature4}</span>
        </div>
        <div className="flex items-start sm:col-span-2">
          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
          <span className="text-base text-muted-foreground">{t.feature5}</span>
        </div>
      </div>

      {/* Newsletter Signup Text */}
      <p className="text-base text-muted-foreground leading-relaxed text-center">
        {t.newsletter}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">{t.emailLabel}</Label>
            <Input
              id="email"
              type="email"
              placeholder={isZh ? "請輸入您的電子郵件" : "Enter your email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="h-11 text-base w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium text-foreground">{t.firstNameLabel}</Label>
            <Input
              id="firstName"
              type="text"
              placeholder={isZh ? "請輸入您的名字" : "Enter your first name"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isSubmitting}
              className="h-11 text-base w-full"
            />
          </div>
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
            {error}
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full h-12 text-base font-semibold" 
          disabled={isSubmitting || !email}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
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

      <p className="text-xs text-center text-muted-foreground leading-relaxed">
        {t.privacy}
      </p>
    </div>
  );
};

export default AITipsInlineForm;
