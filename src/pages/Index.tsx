
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const galleryImages = [
    "/lovable-uploads/f1dec5ba-0f4e-43cd-a2b6-2938822ee36d.png",
    "/lovable-uploads/627854a6-7041-4493-95fd-efd15115db4e.png",
    "/lovable-uploads/2c574a2c-96a7-432b-aaf7-a66b3a75ad11.png",
    "/lovable-uploads/02f7773a-13a6-4517-bd0d-20584f8ff956.png",
    "/lovable-uploads/f5946a4a-75b7-471f-b0d9-9a29376e8ffe.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Abdullah Jamal
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <Link to="/achievements" className="hover:text-yellow-400 transition-colors">Achievements</Link>
              <Link to="/companies" className="hover:text-yellow-400 transition-colors">Companies & Ventures</Link>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 mt-4">
                <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                <Link to="/achievements" className="hover:text-yellow-400 transition-colors">Achievements</Link>
                <Link to="/companies" className="hover:text-yellow-400 transition-colors">Companies & Ventures</Link>
                <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gallery */}
        <div className="absolute inset-0 z-0">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium">
              Entrepreneur • Educator • Motivational Speaker
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Abdullah Jamal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            CEO - Legends Group of Companies & Brands | Skilled Sniper | Martial Artist | 
            Leading the technology of next generation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/achievements">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 text-lg">
                View Achievements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/companies">
              <Button variant="outline" size="lg" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-8 py-4 text-lg">
                Companies & Ventures
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Vision & Leadership
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "Lead. Build. Inspire. Empower the next generation with vision and strength."
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Founder & CEO of Legends Group of Companies and Brands, leading multiple successful 
                ventures in technology, education, and digital innovation. Expert lecturer, motivator, 
                and influencer mentoring thousands of students internationally.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                  <div className="text-2xl font-bold text-yellow-400">10+</div>
                  <div className="text-gray-400">Companies</div>
                </div>
                <div className="text-center p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                  <div className="text-2xl font-bold text-yellow-400">1000+</div>
                  <div className="text-gray-400">Students Mentored</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-400/30">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Key Positions</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Director – Positive Pakistan</li>
                  <li>• Chairman – Team Welfare The Legends</li>
                  <li>• Director – Hazary Di Bethak</li>
                  <li>• Former Director – Skills College Haripur</li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-yellow-400/20">
                  <p className="text-sm text-gray-400">
                    📌 Public Day: Saturday<br/>
                    📍 Main Office: 2 Main Chowk KTS, Haripur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Passion */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Skills & Passion
            </h2>
            <p className="text-xl text-gray-400">Beyond business - a life of discipline and excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-black/50 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">💼 Business</h3>
              <p className="text-gray-300">Entrepreneurial leadership, digital innovation, freelancing, e-commerce, cybersecurity</p>
            </div>
            
            <div className="p-6 bg-black/50 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🥋 Martial Arts</h3>
              <p className="text-gray-300">Proficient in Judo, Karate, Boxing & Kickboxing. Trained Sniper with steady aim</p>
            </div>
            
            <div className="p-6 bg-black/50 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🎯 Personal</h3>
              <p className="text-gray-300">Daily gym goer, swimmer, hiker, horse rider. Passion for cars and luxury lifestyle</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
