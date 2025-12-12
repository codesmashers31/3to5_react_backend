import { useState } from 'react';

const Banner = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl mt-8 mb-12">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Animated elements */}
      <div className="absolute top-4 right-4 animate-bounce">
        <span className="text-4xl">⚽</span>
      </div>
      <div className="absolute bottom-4 left-4 animate-bounce delay-300">
        <span className="text-4xl">🏏</span>
      </div>

      <div className="relative p-8 md:p-12 lg:p-16 h-auto md:h-96 flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to 
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Indian Sports Hub #1
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Experience the thrill of sports like never before. From local tournaments 
            to national championships, we bring you closer to the action. Join millions 
            of sports enthusiasts across India.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6 md:gap-10 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500K+</div>
              <div className="text-gray-200">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-gray-200">Sports Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-200">Cities</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Explore More</span>
              <span className={`transition-transform duration-300 ${hover ? 'translate-x-1' : ''}`}>→</span>
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Watch Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;