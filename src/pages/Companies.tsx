import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Users, Target, Zap } from "lucide-react";

const Companies = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b-2 border-black shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black transform hover:scale-105 transition-transform duration-300">
              Abdullah Jamal
            </div>
            
            <div className="hidden md:flex space-x-2">
              <Link to="/"><Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">Home</Button></Link>
              <Link to="/achievements"><Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">Achievements</Button></Link>
              <Link to="/companies"><Button variant="ghost" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">Companies & Ventures</Button></Link>
              <Link to="/mentorship"><Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">Mentorship & Programs</Button></Link>
              <Link to="/contact"><Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">Contact</Button></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-gray-300 mb-8 transform hover:scale-105 transition-all duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
              Companies & Ventures
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              Building the future through innovative companies and strategic partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Legends Group Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">Legends Group of Companies & Brands</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
              A diversified portfolio of companies leading innovation across technology, education, and digital services
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Companies */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Flagship Companies</h2>
            <p className="text-xl text-gray-300 font-semibold">Leading the technology revolution</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Tech Nex Solutions</h3>
              </div>
              <p className="text-lg font-semibold mb-4">"Technology of Next Generation"</p>
              <p className="text-gray-700 font-medium">
                Leading technology company providing cutting-edge solutions in software development, 
                digital innovation, and next-generation technology services.
              </p>
            </div>

            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building2 className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Legends Studio Haripur</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Creative Excellence Hub</p>
              <p className="text-gray-700 font-medium">
                Professional studio services providing creative solutions, multimedia production, 
                and digital content creation for businesses and individuals.
              </p>
            </div>

            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">The Clients Hub Pvt Ltd</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Client-Centric Solutions</p>
              <p className="text-gray-700 font-medium">
                Comprehensive client management and business solutions company focused on 
                delivering exceptional service and building lasting business relationships.
              </p>
            </div>

            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Digital Skills Hub Pvt Ltd</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Skills Development Leader</p>
              <p className="text-gray-700 font-medium">
                Premier training and skill development company offering comprehensive programs 
                in digital literacy, technology skills, and professional development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building2 className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Hazara Drive Pvt Ltd</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Regional Development</p>
              <p className="text-gray-700 font-medium">
                Driving regional development and business growth initiatives across the Hazara region 
                with focus on economic empowerment and community development.
              </p>
            </div>

            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Legends Group of Institutions</h3>
              </div>
              <p className="text-lg font-semibold mb-4">Educational Excellence</p>
              <p className="text-gray-700 font-medium">
                Network of educational institutions providing quality education and skill development 
                programs to empower the next generation of leaders and innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Joint Ventures */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">Joint Ventures Across Pakistan</h2>
            <p className="text-xl text-gray-700 font-semibold">Strategic partnerships driving growth and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">City Swimming Pool</h3>
              <p className="text-gray-200 text-sm font-medium">Recreation & Fitness</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Zest Water Ltd</h3>
              <p className="text-gray-200 text-sm font-medium">Water Solutions</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Synergy School Haripur</h3>
              <p className="text-gray-200 text-sm font-medium">Primary Education</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Rise College Haripur</h3>
              <p className="text-gray-200 text-sm font-medium">Higher Education</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Wisdom House Montessori & School</h3>
              <p className="text-gray-200 text-sm font-medium">Early Childhood Education</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Legends Prep Zone</h3>
              <p className="text-gray-200 text-sm font-medium">Test Preparation</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Islamia Model Public School</h3>
              <p className="text-gray-200 text-sm font-medium">Public Education</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Heaven Lounge</h3>
              <p className="text-gray-200 text-sm font-medium">Hospitality & Events</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Impression Engineering Services</h3>
              <p className="text-gray-200 text-sm font-medium">Engineering Solutions</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Cheesy Chaska Haripur</h3>
              <p className="text-gray-200 text-sm font-medium">Food & Beverage</p>
            </div>

            <div className="bg-black text-white rounded-lg p-6 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-black mb-2">Visionare Institute of Skills Haripur</h3>
              <p className="text-gray-200 text-sm font-medium">Skill Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Business Impact</h2>
            <p className="text-xl text-gray-300 font-semibold">Driving economic growth and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white text-black rounded-lg border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">6</div>
              <div className="text-gray-700 font-semibold">Flagship Companies</div>
            </div>
            <div className="text-center p-6 bg-white text-black rounded-lg border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">11</div>
              <div className="text-gray-700 font-semibold">Joint Ventures</div>
            </div>
            <div className="text-center p-6 bg-white text-black rounded-lg border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Employees</div>
            </div>
            <div className="text-center p-6 bg-white text-black rounded-lg border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">5+</div>
              <div className="text-gray-700 font-semibold">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
