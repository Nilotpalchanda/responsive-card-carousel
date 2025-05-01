
import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function CategoryButton({ 
  children, 
  active = false, 
  onClick,
  className
}: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors",
        active 
          ? "bg-gray-100 text-gray-900 border border-gray-300" 
          : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50",
        className
      )}
    >
      {children}
    </button>
  );
}
