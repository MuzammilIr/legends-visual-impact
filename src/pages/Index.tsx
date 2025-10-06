
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
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text transform hover:scale-105 transition-transform duration-300">
              Abdullah Jamal
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              <Link to="/">
                <Button variant="ghost" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Home
                </Button>
              </Link>
              <Link to="/achievements">
                <Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">
                  Achievements
                </Button>
              </Link>
              <Link to="/companies">
                <Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">
                  Companies & Ventures
                </Button>
              </Link>
              <Link to="/mentorship">
                <Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">
                  Mentorship & Programs
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">
                  Contact
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2 mt-4">
                <Link to="/">
                  <Button variant="ghost" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">Home</Button>
                </Link>
                <Link to="/achievements">
                  <Button variant="ghost" className="w-full bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full">Achievements</Button>
                </Link>
                <Link to="/companies">
                  <Button variant="ghost" className="w-full bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full">Companies & Ventures</Button>
                </Link>
                <Link to="/mentorship">
                  <Button variant="ghost" className="w-full bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full">Mentorship & Programs</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="ghost" className="w-full bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full">Contact</Button>
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
                index === currentImageIndex ? 'opacity-80' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <div className="mb-6">
            <span className="inline-block px-8 py-3 glass-effect text-foreground rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg transform hover:scale-105 transition-transform duration-300">
              Entrepreneur • Educator • Motivational Speaker
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight gradient-text drop-shadow-2xl">
            Abdullah Jamal
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            CEO - Legends Group of Companies & Brands | Skilled Sniper | Martial Artist | 
            Leading the technology of next generation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/achievements">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                View Achievements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/companies">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                Companies & Ventures
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center glass-effect">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Vision & Leadership
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed font-semibold">
                "Lead. Build. Inspire. Empower the next generation with vision and strength."
              </p>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Founder & CEO of Legends Group of Companies and Brands, leading multiple successful 
                ventures in technology, education, and digital innovation. Expert lecturer, motivator, 
                and influencer mentoring thousands of students internationally.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 glass-effect text-white rounded-lg shadow-lg">
                  <div className="text-2xl font-black">10+</div>
                  <div className="text-gray-200 font-semibold">Companies</div>
                </div>
                <div className="text-center p-4 glass-effect text-white rounded-lg shadow-lg">
                  <div className="text-2xl font-black">1000+</div>
                  <div className="text-gray-200 font-semibold">Students Mentored</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-black mb-4">Key Positions</h3>
                <ul className="space-y-3 text-white font-medium">
                  <li>• Director – Positive Pakistan</li>
                  <li>• Chairman – Team Welfare The Legends</li>
                  <li>• Director – Hazary Di Bethak</li>
                  <li>• Former Director – Skills College Haripur</li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-sm text-gray-200 font-medium">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
              Skills & Passion
            </h2>
            <p className="text-xl text-muted-foreground font-semibold">Beyond business - a life of discipline and excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 gradient-bg text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-black mb-3">💼 Business</h3>
              <p className="font-medium">Entrepreneurial leadership, digital innovation, freelancing, e-commerce, cybersecurity</p>
            </div>
            
            <div className="p-6 gradient-bg text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-black mb-3">🥋 Martial Arts</h3>
              <p className="font-medium">Proficient in Judo, Karate, Boxing & Kickboxing. Trained Sniper with steady aim</p>
            </div>
            
            <div className="p-6 gradient-bg text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-black mb-3">🎯 Personal</h3>
              <p className="font-medium">Daily gym goer, swimmer, hiker, horse rider. Passion for cars and luxury lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Clients Hub Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <a 
              href="https://the-clients-hub-agency-website.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="glass-effect text-white rounded-2xl p-12 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] cursor-pointer">
                <div className="text-center">
                  <div className="inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                      <ArrowRight className="w-10 h-10 text-white group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black mb-4 group-hover:gradient-text transition-all duration-300">
                    The Clients Hub (Pvt Ltd)
                  </h2>
                  
                  <p className="text-xl text-white/90 mb-6 font-semibold">
                    Premier Digital Agency & Technology Solutions
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-white/80 group-hover:text-white transition-colors duration-300 font-medium">
                    <span>Visit our agency website</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
