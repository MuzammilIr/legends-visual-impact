import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Users, Trophy, Star, Target, BookOpen } from "lucide-react";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect shadow-lg">
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
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-gray-300 mb-8 transform hover:scale-105 transition-all duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
              Achievements
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-semibold">
              A journey of excellence, leadership, and transformational impact
            </p>
          </div>
        </div>
      </section>

      {/* Education & Academic Excellence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Education & Academic Excellence</h2>
            <p className="text-xl text-muted-foreground font-semibold">Building the foundation for technological leadership</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 mr-4 text-primary" />
                <h3 className="text-2xl font-black text-foreground">BS Computer Science</h3>
              </div>
              <p className="text-lg font-semibold mb-4 text-foreground">PAF Institute of Aeronautical Sciences & Technology</p>
              <p className="text-muted-foreground font-medium">
                Graduated with distinction in Computer Science, specializing in cutting-edge technologies 
                and software development. Foundation for leading technological innovation across multiple ventures.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-4 text-primary" />
                <h3 className="text-2xl font-black text-foreground">Expert Lecturer & Educator</h3>
              </div>
              <p className="text-lg font-semibold mb-4 text-foreground">Top Universities Across Pakistan</p>
              <ul className="text-muted-foreground font-medium space-y-2">
                <li>• PAF Institute of Aeronautical Sciences & Technology</li>
                <li>• University of Haripur</li>
                <li>• Multiple prestigious universities nationwide</li>
                <li>• International student mentorship programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Professional Excellence */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Leadership & Professional Excellence</h2>
            <p className="text-xl text-gray-200 font-semibold">Driving change through visionary leadership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Entrepreneurial Success</h3>
              </div>
              <ul className="text-gray-200 font-medium space-y-3">
                <li>• Founded & CEO of Legends Group of Companies & Brands</li>
                <li>• Successfully launched 6+ flagship companies</li>
                <li>• Established 11+ strategic joint ventures across Pakistan</li>
                <li>• Created 500+ employment opportunities</li>
                <li>• Leading "Technology of Next Generation" initiatives</li>
              </ul>
            </div>

            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Key Leadership Positions</h3>
              </div>
              <ul className="text-gray-200 font-medium space-y-3">
                <li>• Director – Positive Pakistan</li>
                <li>• Chairman – Team Welfare The Legends</li>
                <li>• Director – Hazary Di Bethak</li>
                <li>• Former Director – Skills College Haripur</li>
                <li>• Motivational Speaker & Influencer</li>
              </ul>
            </div>

            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Digital Innovation</h3>
              </div>
              <ul className="text-gray-200 font-medium space-y-3">
                <li>• Cybersecurity expertise and implementation</li>
                <li>• E-commerce platform development</li>
                <li>• Digital transformation consulting</li>
                <li>• Freelancing and remote work advocacy</li>
                <li>• Technology skills training programs</li>
              </ul>
            </div>

            <div className="glass-effect text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-black">Impact & Recognition</h3>
              </div>
              <ul className="text-gray-200 font-medium space-y-3">
                <li>• Mentored 1000+ students internationally</li>
                <li>• Conducted skill-building bootcamps</li>
                <li>• Public speaking engagements nationwide</li>
                <li>• Community development initiatives</li>
                <li>• Youth empowerment programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Excellence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Personal Excellence & Skills</h2>
            <p className="text-xl text-muted-foreground font-semibold">Beyond professional success - a life of discipline and mastery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 glass-effect rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-black mb-3 text-foreground">🥋 Martial Arts Mastery</h3>
              <ul className="text-muted-foreground font-medium space-y-2">
                <li>• Proficient in Judo</li>
                <li>• Advanced Karate techniques</li>
                <li>• Boxing & Kickboxing expertise</li>
                <li>• Disciplined training regimen</li>
              </ul>
            </div>

            <div className="p-6 glass-effect rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-black mb-3 text-foreground">🎯 Precision & Focus</h3>
              <ul className="text-muted-foreground font-medium space-y-2">
                <li>• Trained Sniper with steady aim</li>
                <li>• Precision shooting expertise</li>
                <li>• Focus and concentration mastery</li>
                <li>• Strategic thinking under pressure</li>
              </ul>
            </div>

            <div className="p-6 glass-effect rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-black mb-3 text-foreground">💪 Physical Excellence</h3>
              <ul className="text-muted-foreground font-medium space-y-2">
                <li>• Daily gym commitment</li>
                <li>• Swimming proficiency</li>
                <li>• Mountain hiking adventures</li>
                <li>• Horseback riding skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              "Lead. Build. Inspire."
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-semibold">
              Empowering the next generation with vision and strength. Through education, innovation, 
              and unwavering commitment to excellence, we shape tomorrow's leaders and transform communities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
