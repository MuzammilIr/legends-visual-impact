
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
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b-2 border-black shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black transform hover:scale-105 transition-transform duration-300">
              Abdullah Jamal
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              <Link to="/">
                <Button variant="ghost" className="bg-black text-white hover:bg-gray-800 hover:text-white border-2 border-black hover:border-gray-800 transition-all duration-300 transform hover:scale-105">
                  Home
                </Button>
              </Link>
              <Link to="/achievements">
                <Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                  Achievements
                </Button>
              </Link>
              <Link to="/companies">
                <Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                  Companies & Ventures
                </Button>
              </Link>
              <Link to="/mentorship">
                <Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                  Mentorship & Programs
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                  Contact
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 border-2 border-black rounded hover:bg-black hover:text-white transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t-2 border-black">
              <div className="flex flex-col space-y-2 mt-4">
                <Link to="/">
                  <Button variant="ghost" className="w-full bg-black text-white hover:bg-gray-800">Home</Button>
                </Link>
                <Link to="/achievements">
                  <Button variant="ghost" className="w-full bg-transparent text-black border-2 border-black hover:bg-black hover:text-white">Achievements</Button>
                </Link>
                <Link to="/companies">
                  <Button variant="ghost" className="w-full bg-transparent text-black border-2 border-black hover:bg-black hover:text-white">Companies & Ventures</Button>
                </Link>
                <Link to="/mentorship">
                  <Button variant="ghost" className="w-full bg-transparent text-black border-2 border-black hover:bg-black hover:text-white">Mentorship & Programs</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="ghost" className="w-full bg-transparent text-black border-2 border-black hover:bg-black hover:text-white">Contact</Button>
                </Link>
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
                index === currentImageIndex ? 'opacity-60' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-black text-white border-2 border-black rounded-full text-sm font-bold uppercase tracking-wider shadow-lg transform hover:scale-105 transition-transform duration-300">
              Entrepreneur • Educator • Motivational Speaker
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-black drop-shadow-2xl">
            Abdullah Jamal
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-lg">
            CEO - Legends Group of Companies & Brands | Skilled Sniper | Martial Artist | 
            Leading the technology of next generation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/achievements">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 border-2 border-black px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
                View Achievements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/companies">
              <Button variant="outline" size="lg" className="border-2 border-black text-black bg-white hover:bg-black hover:text-white px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
                Companies & Ventures
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center bg-white">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Vision & Leadership
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed font-semibold">
                "Lead. Build. Inspire. Empower the next generation with vision and strength."
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Founder & CEO of Legends Group of Companies and Brands, leading multiple successful 
                ventures in technology, education, and digital innovation. Expert lecturer, motivator, 
                and influencer mentoring thousands of students internationally.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white text-black rounded-lg border-2 border-white shadow-lg">
                  <div className="text-2xl font-black">10+</div>
                  <div className="text-gray-700 font-semibold">Companies</div>
                </div>
                <div className="text-center p-4 bg-white text-black rounded-lg border-2 border-white shadow-lg">
                  <div className="text-2xl font-black">1000+</div>
                  <div className="text-gray-700 font-semibold">Students Mentored</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white text-black rounded-2xl p-8 border-2 border-white shadow-lg">
                <h3 className="text-2xl font-black mb-4">Key Positions</h3>
                <ul className="space-y-3 text-black font-medium">
                  <li>• Director – Positive Pakistan</li>
                  <li>• Chairman – Team Welfare The Legends</li>
                  <li>• Director – Hazary Di Bethak</li>
                  <li>• Former Director – Skills College Haripur</li>
                </ul>
                
                <div className="mt-6 pt-6 border-t-2 border-gray-300">
                  <p className="text-sm text-gray-700 font-medium">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
              Skills & Passion
            </h2>
            <p className="text-xl text-gray-700 font-semibold">Beyond business - a life of discipline and excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h3 className="text-xl font-black mb-3">💼 Business</h3>
              <p className="font-medium">Entrepreneurial leadership, digital innovation, freelancing, e-commerce, cybersecurity</p>
            </div>
            
            <div className="p-6 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h3 className="text-xl font-black mb-3">🥋 Martial Arts</h3>
              <p className="font-medium">Proficient in Judo, Karate, Boxing & Kickboxing. Trained Sniper with steady aim</p>
            </div>
            
            <div className="p-6 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h3 className="text-xl font-black mb-3">🎯 Personal</h3>
              <p className="font-medium">Daily gym goer, swimmer, hiker, horse rider. Passion for cars and luxury lifestyle</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
