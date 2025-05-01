
export function PromotionBanner() {
  return (
    <div className="w-full bg-gray-900 text-white rounded-lg overflow-hidden mb-8">
      <div className="flex flex-col md:flex-row p-6 items-center">
        <div className="mb-4 md:mb-0 md:flex-1">
          <h3 className="text-lg font-bold mb-2">Listen to this</h3>
          <p className="text-sm text-gray-300 mb-4">Find the best new podcasts for moving ahead from around the world. Premium interviews with global leaders and the latest ideas worth listening to.</p>
          
          <div className="flex gap-2">
            <button className="p-1 bg-white rounded-full">
              <span className="sr-only">Apple Podcasts</span>
              <div className="w-6 h-6 bg-gradient-to-b from-purple-600 to-pink-500 rounded-full"></div>
            </button>
            <button className="p-1 bg-white rounded-full">
              <span className="sr-only">Spotify</span>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            </button>
            <button className="p-1 bg-white rounded-full">
              <span className="sr-only">Google Podcasts</span>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </button>
          </div>
        </div>
        
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="inline-flex items-center justify-center bg-transparent relative">
            <div className="absolute w-32 h-32 rounded-full bg-teal-500/30 animate-pulse"></div>
            <div className="z-10 text-center">
              <div className="font-bold">ON THE MOVE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
