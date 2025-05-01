
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  isNew?: boolean;
  isPremium?: boolean;
  className?: string;
}

export function ContentCard({
  image,
  title,
  description,
  category,
  duration,
  isNew = false,
  isPremium = false,
  className
}: ContentCardProps) {
  return (
    <div className={cn("flex flex-col w-[260px] min-w-[260px]", className)}>
      <div className="relative h-32 w-full rounded-lg overflow-hidden mb-2">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-xs text-gray-500 mb-1">{category} · {duration}</div>
      <h3 className="font-medium text-sm mb-1 line-clamp-2">{title}</h3>
      <p className="text-xs text-gray-500 line-clamp-2 mb-1">{description}</p>
      <div className="flex mt-auto">
        <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1">
          Read more
          <ArrowRight className="w-3 h-3" />
        </button>
        {isNew && (
          <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">New</span>
        )}
        {isPremium && (
          <span className="ml-auto text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Premium</span>
        )}
      </div>
    </div>
  );
}
