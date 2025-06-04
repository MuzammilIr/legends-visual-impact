
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Users, Target, Zap } from "lucide-react";

const Companies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text transform hover:scale-105 transition-transform duration-300">
              Abdullah Jamal
            </div>
            
            <div className="hidden md:flex space-x-1">
              <Link to="/"><Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">Home</Button></Link>
              <Link to="/achievements"><Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">Achievements</Button></Link>
              <Link to="/companies"><Button variant="ghost" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">Companies & Ventures</Button></Link>
              <Link to="/mentorship"><Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">Mentorship & Programs</Button></Link>
              <Link to="/contact"><Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">Contact</Button></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-gray-300 mb-8 transform hover:scale-105 transition-all duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
              Companies & Ventures
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-semibold">
              Building the future through innovative companies and strategic partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Legends Group Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Legends Group of Companies & Brands</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
              A diversified portfolio of companies leading innovation across technology, education, and digital services
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Companies */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Flagship Companies</h2>
            <p className="text-xl text-gray-200 font-semibold">Leading the technology revolution</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Tech Nex Solutions</h3>
              </div>
              <p className="text-lg font-semibold mb-4">"Technology of Next Generation"</p>
              <p className="text-gray-200 font-medium">
                Leading technology company providing cutting-edge solutions in software development, 
                digital innovation, and next-generation technology services.
              </p>
            </div>

            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building2 className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Legends Studio Haripur</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Creative Excellence Hub</p>
              <p className="text-gray-200 font-medium">
                Professional studio services providing creative solutions, multimedia production, 
                and digital content creation for businesses and individuals.
              </p>
            </div>

            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">The Clients Hub Pvt Ltd</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Client-Centric Solutions</p>
              <p className="text-gray-200 font-medium">
                Comprehensive client management and business solutions company focused on 
                delivering exceptional service and building lasting business relationships.
              </p>
            </div>

            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Digital Skills Hub Pvt Ltd</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Skills Development Leader</p>
              <p className="text-gray-200 font-medium">
                Premier training and skill development company offering comprehensive programs 
                in digital literacy, technology skills, and professional development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building2 className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Hazara Drive Pvt Ltd</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Regional Development</p>
              <p className="text-gray-200 font-medium">
                Driving regional development and business growth initiatives across the Hazara region 
                with focus on economic empowerment and community development.
              </p>
            </div>

            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Legends Group of Institutions</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Educational Excellence</p>
              <p className="text-gray-200 font-medium">
                Network of educational institutions providing quality education and skill development 
                programs to empower the next generation of leaders and innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Joint Ventures */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Joint Ventures Across Pakistan</h2>
            <p className="text-xl text-muted-foreground font-semibold">Strategic partnerships driving growth and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">City Swimming Pool</h3>
                <p className="text-muted-foreground text-sm font-medium">Recreation & Fitness</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2069')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Zest Water Ltd</h3>
                <p className="text-muted-foreground text-sm font-medium">Water Solutions</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2071')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Synergy School Haripur</h3>
                <p className="text-muted-foreground text-sm font-medium">Primary Education</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Rise College Haripur</h3>
                <p className="text-muted-foreground text-sm font-medium">Higher Education</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Wisdom House Montessori</h3>
                <p className="text-muted-foreground text-sm font-medium">Early Childhood Education</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Legends Prep Zone</h3>
                <p className="text-muted-foreground text-sm font-medium">Test Preparation</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Islamia Model Public School</h3>
                <p className="text-muted-foreground text-sm font-medium">Public Education</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Heaven Lounge</h3>
                <p className="text-muted-foreground text-sm font-medium">Hospitality & Events</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Impression Engineering</h3>
                <p className="text-muted-foreground text-sm font-medium">Engineering Solutions</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Cheesy Chaska Haripur</h3>
                <p className="text-muted-foreground text-sm font-medium">Food & Beverage</p>
              </div>
            </div>

            <div className="relative rounded-lg p-6 overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-32">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black mb-2 text-foreground">Visionare Institute</h3>
                <p className="text-muted-foreground text-sm font-medium">Skill Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Business Impact</h2>
            <p className="text-xl text-gray-200 font-semibold">Driving economic growth and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 glass-effect text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">6</div>
              <div className="text-gray-200 font-semibold">Flagship Companies</div>
            </div>
            <div className="text-center p-6 glass-effect text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">11</div>
              <div className="text-gray-200 font-semibold">Joint Ventures</div>
            </div>
            <div className="text-center p-6 glass-effect text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">500+</div>
              <div className="text-gray-200 font-semibold">Employees</div>
            </div>
            <div className="text-center p-6 glass-effect text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">5+</div>
              <div className="text-gray-200 font-semibold">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
