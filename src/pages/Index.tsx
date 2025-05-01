
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryButton } from "@/components/CategoryButton";
import { CardCarousel } from "@/components/CardCarousel";
import { ContentCard } from "@/components/ContentCard";
import { PromotionBanner } from "@/components/PromotionBanner";
import { CommunityPost } from "@/components/CommunityPost";

const categories = [
  { id: 1, name: "Thought leadership", active: true },
  { id: 2, name: "Business trend", active: false },
  { id: 3, name: "Career builder", active: false },
  { id: 4, name: "Remote work", active: false },
  { id: 5, name: "Emotional intelligence", active: false },
  { id: 6, name: "Data privacy", active: false },
];

const contentCards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Key immigration changes: Q4 2023 updates",
    description: "Important policy changes affecting global mobility and immigration strategies.",
    category: "Immigration",
    duration: "5 min read",
    isNew: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Cost optimization: What data reveals",
    description: "Key insights on reducing operational costs while maintaining productivity.",
    category: "Business",
    duration: "8 min read",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Revitalizing global mobility as part of a corporate sustainability strategy",
    description: "How mobility programs can support environmental goals.",
    category: "Sustainability",
    duration: "10 min read",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Navigating global business transformation",
    description: "Steps to successfully implement change across international teams.",
    category: "Leadership",
    duration: "7 min read",
    isPremium: true,
  },
];

const suggestedCards = [
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    title: "US Estate Department announces immigration reforms",
    description: "New policies affecting global mobility and cross-border transitions.",
    category: "Immigration",
    duration: "6 min read",
    isNew: true,
  },
  // Duplicate cards with new IDs for demonstration
  ...contentCards.slice(1).map((card, index) => ({ ...card, id: index + 6 }))
];

const communityPosts = [
  {
    id: 1,
    author: {
      name: "John Watson",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    question: "What are some key strategies to build strong relationships with new team members remotely?",
    answer: "Building strong remote relationships requires intentional effort. First, establish regular video check-ins that aren't just about work - include time for personal connection. Second, create opportunities for informal interaction through virtual coffee breaks or team activities. Third, be accessible and responsive to messages, with clear communication about when you're available. Fourth, recognize achievements publicly and provide constructive feedback privately. Finally, use collaborative tools effectively to maintain transparency and inclusion. Remember that trust development takes longer remotely, so patience and consistency are essential for building meaningful connections.",
  },
  {
    id: 2,
    author: {
      name: "Laura Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    question: "Any tips please for creating a policy around employee recognition in a global company?",
    answer: "Creating an effective global recognition policy requires balancing universal principles with cultural sensitivity. Start with a clear framework that defines core values and behaviors that merit recognition globally. Then, empower regional leaders to adapt implementation methods that resonate locally. Consider varying preferences - some cultures appreciate public praise while others value private acknowledgment. Ensure equitable access to recognition opportunities regardless of location or language. Use a mix of monetary and non-monetary rewards, reflecting local preferences and economic conditions. Implement technology that enables peer-to-peer recognition across time zones. Finally, regularly gather feedback from diverse regions to refine your approach and measure its impact across different cultural contexts.",
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-2xl font-bold mb-6 text-center">What do you want to learn today?</h1>
        <SearchBar placeholder="Search topics, articles, or authors..." />
        
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Your saved interests</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <CategoryButton 
                key={category.id}
                active={category.id === activeCategory}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </CategoryButton>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Pick up where you left off</h2>
          <CardCarousel title="" viewAllLink="/explore">
            {contentCards.map((card) => (
              <ContentCard key={card.id} {...card} />
            ))}
          </CardCarousel>
        </div>
        
        <PromotionBanner />
        
        <CardCarousel title="Suggested for you" viewAllLink="/suggested">
          {suggestedCards.map((card) => (
            <ContentCard key={card.id} {...card} />
          ))}
        </CardCarousel>
        
        <CardCarousel title="Trending" viewAllLink="/trending">
          {contentCards.map((card) => (
            <ContentCard key={card.id} {...card} />
          ))}
        </CardCarousel>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-6">Community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {communityPosts.map((post) => (
              <CommunityPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
