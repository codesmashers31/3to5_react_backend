import Banner from "./components/Banner";
import Cards from "./components/Cards";
import { useState } from "react";
import './App.css'

const App = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const navlines = [
    { link: "Home", icon: "🏠" },
    { link: "About", icon: "ℹ️" },
    { link: "Events", icon: "📅" },
    { link: "Gallery", icon: "🖼️" },
    { link: "Contact", icon: "📞" }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-lg">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xl">⚽</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  SportsHub
                </h1>
                <p className="text-xs text-gray-300">India's #1 Sports Platform</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navlines.map((item, index) => (
                <a
                  href={`#${item.link.toLowerCase()}`}
                  key={index}
                  onClick={() => setActiveLink(item.link)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeLink === item.link
                      ? "bg-gradient-to-r from-orange-500 to-red-600 shadow-lg"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.link}</span>
                </a>
              ))}
              <button className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-2xl">☰</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <Banner />
        <Cards />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                SportsHub
              </h2>
              <p className="text-gray-400 mt-2">Bringing sports to every Indian</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-6">
            © 2024 SportsHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;