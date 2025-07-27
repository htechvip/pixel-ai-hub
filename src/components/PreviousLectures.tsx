import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

import uscLecture from "@/assets/usc ai lecture.png";
import skyTalk from "@/assets/skytalk media interview.png";
import rotaryTalk from "@/assets/rotary club ai talk.png";
import mlWeek from "@/assets/machine learning week ai fintech talk.png";
import ideasConf from "@/assets/IDEAS AI conference.png";
import cvcWorkshop from "@/assets/columbia venture community tech founder workshop.png";
import blackMarketPanel from "@/assets/black market llm security panel.jpeg";

const images = [
  { src: uscLecture, label: "USC AI Lecture" },
  { src: skyTalk, label: "SkyTalk Media Interview" },
  { src: rotaryTalk, label: "Rotary Club AI Talk" },
  { src: mlWeek, label: "Machine Learning Week FinTech Talk" },
  { src: ideasConf, label: "IDEAS AI Conference" },
  { src: cvcWorkshop, label: "Columbia Venture Community Workshop" },
  { src: blackMarketPanel, label: "Black Market LLM Security Panel" }
];

const PreviousLectures = () => {
  return (
    <section id="previous-lectures" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Previous AI Lectures & Talks
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem key={idx} className="basis-[75%] sm:basis-1/2 lg:basis-1/3 pr-2">
                <Card className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className={`h-56 w-full object-cover ${img.label.includes('Rotary') ? 'object-top' : ''}`}
                  />
                  <div className="p-4 text-center text-sm font-medium text-foreground">
                    {img.label}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:block" />
          <CarouselNext className="hidden sm:block" />
        </Carousel>
      </div>
    </section>
  );
};

export default PreviousLectures; 