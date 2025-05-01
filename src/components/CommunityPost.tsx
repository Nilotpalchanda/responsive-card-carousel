
interface CommunityPostProps {
  author: {
    name: string;
    avatar: string;
  };
  question: string;
  answer: string;
}

export function CommunityPost({ author, question, answer }: CommunityPostProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <img 
          src={author.avatar} 
          alt={author.name} 
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-medium text-sm">{author.name}</span>
      </div>
      <h3 className="font-medium text-sm mb-2">{question}</h3>
      <p className="text-xs text-gray-700 line-clamp-6">{answer}</p>
    </div>
  );
}
