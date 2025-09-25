import { ModernCarousel } from "@/components/ui/carousel-modern";
import weddingImage from "@/assets/wedding-anniversary.jpg";
import birthdayImage from "@/assets/birthday-party.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import gardenImage from "@/assets/garden-party.jpg";

const carouselItems = [
  {
    id: "wedding",
    image: weddingImage,
    title: "Wedding Anniversary",
    description: "The Best Of the month in this year awarded"
  },
  {
    id: "birthday",
    image: birthdayImage,
    title: "Birthday Celebrations",
    description: "Create unforgettable birthday memories"
  },
  {
    id: "corporate",
    image: corporateImage,
    title: "Corporate Events", 
    description: "Professional networking and business gatherings"
  },
  {
    id: "garden",
    image: gardenImage,
    title: "Garden Parties",
    description: "Beautiful outdoor celebrations under the stars"
  }
];

export function EventCarousel() {
  return (
    <section className="py-12 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ModernCarousel items={carouselItems} />
        </div>
      </div>
    </section>
  );
}