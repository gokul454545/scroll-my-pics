import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingImage from "@/assets/wedding-anniversary.jpg";
import birthdayImage from "@/assets/birthday-party.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import gardenImage from "@/assets/garden-party.jpg";

const heroImages = [
  {
    src: weddingImage,
    title: "Traditional Weddings",
    subtitle: "Sacred ceremonies that honor your heritage"
  },
  {
    src: birthdayImage,
    title: "Cultural Celebrations", 
    subtitle: "Meaningful moments with family and community"
  },
  {
    src: corporateImage,
    title: "Corporate Events",
    subtitle: "Professional gatherings infused with tradition"
  },
  {
    src: gardenImage,
    title: "Garden Festivities",
    subtitle: "Outdoor celebrations under nature's blessing"
  }
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Celebrate Your
              <span className="block text-transparent bg-clip-text" 
                    style={{ backgroundImage: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }}>
                Traditional Moments
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
              Connect with authentic vendors and plan unforgettable traditional events, 
              from weddings to cultural celebrations
            </p>
          </div>

          {/* Location Display */}
          <div className="space-y-2 animate-fade-in">
            <p className="text-base sm:text-lg opacity-90 font-medium">
              📍 Chennai, Ruthland Gate 5th Street
            </p>
          </div>

          {/* Current Image Context */}
          <div className="space-y-2 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-semibold">
              {heroImages[currentImageIndex].title}
            </h3>
            <p className="text-base sm:text-lg opacity-80">
              {heroImages[currentImageIndex].subtitle}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Button
          variant="ghost"
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:bg-white/10 p-4 rounded-full animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}