
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Users, Target, Trophy } from "lucide-react";

const Achievements = () => {
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
              <Link to="/achievements"><Button variant="ghost" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">Achievements</Button></Link>
              <Link to="/companies"><Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">Companies & Ventures</Button></Link>
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
              Achievements
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              A journey of excellence, leadership, and impactful contributions across multiple domains
            </p>
          </div>
        </div>
      </section>

      {/* Educational Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">Educational Excellence</h2>
            <p className="text-xl text-gray-700 font-semibold">Academic foundation and continuous learning</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black text-white rounded-xl p-8 mb-8 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">BS Computer Science</h3>
              </div>
              <p className="text-gray-200 text-lg font-medium">PAF Institute of Aeronautical Sciences and Technology (PAF IAST)</p>
              <p className="text-gray-300 mt-2 font-medium">Specialized in computer science with focus on emerging technologies and innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Positions */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Leadership Positions</h2>
            <p className="text-xl text-gray-300 font-semibold">Key roles and responsibilities in prestigious organizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-4" />
                <h3 className="text-xl font-black">Director – Positive Pakistan</h3>
              </div>
              <p className="text-gray-700 font-medium">Leading initiatives for positive social change and community development across Pakistan</p>
            </div>

            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 mr-4" />
                <h3 className="text-xl font-black">Chairman – Team Welfare The Legends</h3>
              </div>
              <p className="text-gray-700 font-medium">Overseeing welfare programs and team development initiatives for organizational excellence</p>
            </div>

            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 mr-4" />
                <h3 className="text-xl font-black">Director – Hazary Di Bethak</h3>
              </div>
              <p className="text-gray-700 font-medium">Strategic leadership in community engagement and cultural preservation initiatives</p>
            </div>

            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 mr-4" />
                <h3 className="text-xl font-black">Former Director – Skills College Haripur</h3>
              </div>
              <p className="text-gray-700 font-medium">Pioneered skill development programs and educational excellence in technical education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">Professional Excellence</h2>
            <p className="text-xl text-gray-700 font-semibold">Expert lecturer, motivator, and influencer at top institutions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-black text-white rounded-xl p-8 border-2 border-black shadow-lg">
              <h3 className="text-2xl font-black mb-6">Teaching Excellence</h3>
              <ul className="space-y-3 text-gray-200 font-medium">
                <li>• Expert Lecturer at PAF IAST</li>
                <li>• Visiting Faculty at University of Haripur</li>
                <li>• Guest Speaker at various universities across Pakistan</li>
                <li>• Specialized in technology and entrepreneurship</li>
                <li>• Mentor to thousands of students internationally</li>
              </ul>
            </div>

            <div className="bg-black text-white rounded-xl p-8 border-2 border-black shadow-lg">
              <h3 className="text-2xl font-black mb-6">Entrepreneurial Success</h3>
              <ul className="space-y-3 text-gray-200 font-medium">
                <li>• Founded 10+ successful companies</li>
                <li>• CEO of Legends Group of Companies & Brands</li>
                <li>• Pioneer in digital innovation and technology</li>
                <li>• Expert in e-commerce and cybersecurity</li>
                <li>• Leading "Technology of Next Generation"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Skills */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Personal Excellence</h2>
            <p className="text-xl text-gray-300 font-semibold">Beyond professional achievements - discipline and mastery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-black rounded-xl p-6 border-2 border-white shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🥋</div>
              <h3 className="text-xl font-black mb-3">Martial Arts Mastery</h3>
              <p className="text-gray-700 font-medium">Proficient in Judo, Karate, Boxing & Kickboxing</p>
            </div>

            <div className="bg-white text-black rounded-xl p-6 border-2 border-white shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-black mb-3">Precision Training</h3>
              <p className="text-gray-700 font-medium">Trained Sniper with exceptional accuracy and focus</p>
            </div>

            <div className="bg-white text-black rounded-xl p-6 border-2 border-white shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-black mb-3">Physical Excellence</h3>
              <p className="text-gray-700 font-medium">Daily gym training, swimming, hiking, and horse riding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">Impact & Reach</h2>
            <p className="text-xl text-gray-700 font-semibold">Measurable impact across education and business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-black text-white rounded-lg border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">10+</div>
              <div className="text-gray-200 font-semibold">Companies Founded</div>
            </div>
            <div className="text-center p-6 bg-black text-white rounded-lg border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">1000+</div>
              <div className="text-gray-200 font-semibold">Students Mentored</div>
            </div>
            <div className="text-center p-6 bg-black text-white rounded-lg border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">15+</div>
              <div className="text-gray-200 font-semibold">Joint Ventures</div>
            </div>
            <div className="text-center p-6 bg-black text-white rounded-lg border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">5+</div>
              <div className="text-gray-200 font-semibold">Leadership Positions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
