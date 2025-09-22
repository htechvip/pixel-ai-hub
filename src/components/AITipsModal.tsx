import { useState } from "react";
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
            <h3 className="text-lg font-semibold mb-2">Success!</h3>
            <p className="text-muted-foreground">
              Check your email to confirm your subscription and get your free AI tips guide.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Get Your Free AI Tips Guide
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">GPT</span>
              </div>
              <p className="text-sm text-muted-foreground">ChatGPT Tips</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-xs">Claude</span>
              </div>
              <p className="text-sm text-muted-foreground">Claude Strategies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-xs">Perplexity</span>
              </div>
              <p className="text-sm text-muted-foreground">Perplexity Research</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
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
                  Sending...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Send me the guide
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground">
            We respect your privacy. Unsubscribe at anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AITipsModal;
