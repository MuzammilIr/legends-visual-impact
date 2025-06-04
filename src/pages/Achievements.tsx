
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Users, Building, BookOpen } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Building,
      category: "Business Leadership",
      items: [
        "Founder & CEO of Legends Group of Companies and Brands",
        "Successfully leading 10+ companies across different sectors",
        "Established Tech Nex Solutions - 'Technology of Next Generation'",
        "Built multiple successful joint ventures across Pakistan"
      ]
    },
    {
      icon: BookOpen,
      category: "Education & Impact",
      items: [
        "BS Computer Science graduate from PAF IAST",
        "Expert Lecturer at top institutions including PAF IAST and University of Haripur",
        "Motivator and Influencer at various universities across Pakistan",
        "Mentor to thousands of students internationally"
      ]
    },
    {
      icon: Users,
      category: "Leadership Positions",
      items: [
        "Director – Positive Pakistan",
        "Chairman – Team Welfare The Legends",
        "Director – Hazary Di Bethak",
        "Former Director – Skills College Haripur"
      ]
    },
    {
      icon: Award,
      category: "Skills & Expertise",
      items: [
        "Expert in entrepreneurial leadership and digital innovation",
        "Specialist in freelancing, e-commerce, and cybersecurity",
        "Public speaking and student mentoring excellence",
        "Skill-building bootcamps conductor",
        "Proficient in Judo, Karate, Boxing & Kickboxing",
        "Trained Sniper with steady aim"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Abdullah Jamal
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <Link to="/achievements" className="text-yellow-400">Achievements</Link>
              <Link to="/companies" className="hover:text-yellow-400 transition-colors">Companies & Ventures</Link>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A journey of leadership, innovation, and empowering the next generation
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-black/50 rounded-xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <achievement.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400">{achievement.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Vision
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8">
              "Lead. Build. Inspire. Empower the next generation with vision and strength."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg border border-yellow-400/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
                <div className="text-gray-400">Companies Founded</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg border border-yellow-400/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
                <div className="text-gray-400">Students Mentored</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg border border-yellow-400/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Multiple</div>
                <div className="text-gray-400">Leadership Positions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
