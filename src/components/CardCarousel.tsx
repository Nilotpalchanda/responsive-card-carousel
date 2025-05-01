
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

interface CardCarouselProps {
  title: string;
  viewAllLink?: string;
  children: React.ReactNode;
}

export function CardCarousel({ title, viewAllLink, children }: CardCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ 
        left: 300, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <div className="flex items-center gap-4">
          {viewAllLink && (
            <a href={viewAllLink} className="text-sm text-gray-500 hover:text-gray-700">
              View all
            </a>
          )}
          <button 
            onClick={scrollRight}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  );
}
