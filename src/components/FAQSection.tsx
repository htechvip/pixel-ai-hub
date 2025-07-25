import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "What prerequisites do I need for the AI Jedi program?",
      answer: "Our program is designed for beginners with basic programming knowledge. While prior experience with Python or JavaScript is helpful, it's not required. We provide pre-course materials to help you get up to speed with the basics before the program starts."
    },
    {
      question: "How long is the program and what's the time commitment?",
      answer: "The core program runs for 12 weeks, with approximately 20-25 hours per week of commitment including live sessions, project work, and self-paced learning. We offer both part-time (evenings/weekends) and full-time options to accommodate different schedules."
    },
    {
      question: "What technologies and tools will I learn?",
      answer: "You'll learn cutting-edge AI tools and frameworks including OpenAI's GPT models, Cursor IDE, Next.js, Supabase, and various AI-powered development tools. The curriculum is constantly updated to include the latest advancements in AI technology."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes! We have a dedicated career services team that provides resume reviews, interview preparation, and connections to our network of hiring partners. Our program includes career workshops and 1-on-1 coaching sessions to help you transition into an AI role."
    },
    {
      question: "What kind of projects will I build during the program?",
      answer: "You'll build several real-world projects including AI-powered web applications, chatbots, and automation tools. All projects are production-ready and can be added to your portfolio. You'll also work on a capstone project that solves a real business problem."
    },
    {
      question: "Is there a payment plan or financing available?",
      answer: "We offer flexible payment options including monthly installments and income share agreements (ISA). We also partner with various financing providers to make the program accessible to everyone. Scholarships are available for underrepresented groups in tech."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Everything you need to know about the AI Jedi program
          </p>

          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 