
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
      
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
        
        {/* Scroll button positioned at the right edge of the carousel */}
        <button
          onClick={scrollRight}
          className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          aria-label="Scroll cards right"
        >
          <ChevronRight className="w-5 h-5 text-blue-600" />
        </button>
      </div>
    </div>
  );
}
