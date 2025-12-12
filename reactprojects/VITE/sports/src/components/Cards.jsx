import cricket from '../assets/img/4.jpg';
import football from '../assets/img/5.jpg';
import kabaddi from '../assets/img/6.jpg';
import { useState } from 'react';

const Cards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      img: cricket,
      sportsName: "Cricket",
      ground: "Chepauk Stadium, Chennai",
      description: "Experience the thrill of cricket at India's most iconic stadium",
      price: "₹999",
      players: "11 vs 11",
      level: "Professional"
    },
    {
      id: 2,
      img: football,
      sportsName: "Football",
      ground: "Bangalore Football Arena",
      description: "Join the beautiful game at state-of-the-art facilities",
      price: "₹799",
      players: "7 vs 7",
      level: "Amateur/Pro"
    },
    {
      id: 3,
      img: kabaddi,
      sportsName: "Kabaddi",
      ground: "Madurai Sports Complex",
      description: "Traditional sport with modern facilities and coaching",
      price: "₹599",
      players: "7 vs 7",
      level: "All Levels"
    }
  ];

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sports</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Choose from our wide range of sports activities. Book your spot now!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform ${
              hoveredCard === card.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'
            }`}
          >
            {/* Card Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </span>
            </div>

            {/* Image Container */}
            <div className="h-56 overflow-hidden">
              <img
                src={card.img}
                alt={card.sportsName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{card.sportsName}</h3>
                <span className="text-3xl">
                  {card.id === 1 && '🏏'}
                  {card.id === 2 && '⚽'}
                  {card.id === 3 && '🤼'}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{card.description}</p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">📍</span>
                  <span className="text-sm text-gray-700">{card.ground}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">👥</span>
                  <span className="text-sm text-gray-700">{card.players}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">⭐</span>
                  <span className="text-sm text-gray-700">{card.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">💰</span>
                  <span className="text-sm font-bold text-green-600">{card.price}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
                  Book Now
                </button>
                <button className="px-4 py-3 border-2 border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Details
                </button>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ${
                hoveredCard === card.id ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          View All Sports →
        </button>
      </div>
    </section>
  );
};

export default Cards;