
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, BookOpen, Award, Target } from "lucide-react";

const Mentorship = () => {
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
              <Link to="/companies"><Button variant="ghost" className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">Companies & Ventures</Button></Link>
              <Link to="/mentorship"><Button variant="ghost" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">Mentorship & Programs</Button></Link>
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
              Mentorship & Programs
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              Empowering the next generation through comprehensive training programs and expert mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">Educational Programs</h2>
            <p className="text-xl text-gray-700 font-semibold">Comprehensive training across multiple domains</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* The Clients Hub - Telemarketing */}
            <div className="bg-black text-white rounded-xl p-8 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/be97039e-1e06-4c33-8b3e-cbf31dd4173f.png" 
                alt="The Clients Hub Telemarketing Program"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-4" />
                <h3 className="text-2xl font-black">Telemarketing Training Program</h3>
              </div>
              <ul className="space-y-2 text-gray-200 font-medium mb-4">
                <li>• Virtual Remote Job Opportunities</li>
                <li>• 2 Hours Call Directory Work</li>
                <li>• 12AM to 2AM Night Shift</li>
                <li>• Best Part-time Job for Students</li>
                <li>• Professional Communication Skills</li>
              </ul>
              <p className="text-sm text-gray-300 font-medium">Open Registration till 20th January 2025</p>
            </div>

            {/* Cybersecurity Program */}
            <div className="bg-black text-white rounded-xl p-8 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/031f27f5-126c-4e35-a826-fe5a7064140e.png" 
                alt="Ethical Hacking Cybersecurity Course"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 mr-4" />
                <h3 className="text-2xl font-black">Ethical Hacking & Cybersecurity</h3>
              </div>
              <ul className="space-y-2 text-gray-200 font-medium mb-4">
                <li>• Limited Time Offer</li>
                <li>• Professional Security Training</li>
                <li>• Hands-on Practical Experience</li>
                <li>• Industry-Standard Certification</li>
                <li>• Career Development Support</li>
              </ul>
              <p className="text-sm text-gray-300 font-medium">Advanced cybersecurity training program</p>
            </div>
          </div>

          {/* Digital Skills Hub Programs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Digital Park Internships */}
            <div className="bg-black text-white rounded-xl p-8 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/5ca4980a-c9dd-40aa-beaf-affe5b8aa44a.png" 
                alt="Digital Park Internship Program"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 mr-4" />
                <h3 className="text-2xl font-black">Digital Park Internships</h3>
              </div>
              <ul className="space-y-2 text-gray-200 font-medium mb-4">
                <li>• Paid Internship Opportunities</li>
                <li>• Tech Nex Solutions Partnership</li>
                <li>• Real-world Project Experience</li>
                <li>• Mentorship from Industry Experts</li>
                <li>• Career Pathway Development</li>
              </ul>
              <p className="text-sm text-gray-300 font-medium">Apply Now - Limited Positions Available</p>
            </div>

            {/* E-commerce Shopify Course */}
            <div className="bg-black text-white rounded-xl p-8 border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/5d3c67aa-93c8-4c03-b311-385cd6f2bda0.png" 
                alt="Digital Skills Hub Shopify Course"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 mr-4" />
                <h3 className="text-2xl font-black">E-commerce Shopify Course</h3>
              </div>
              <ul className="space-y-2 text-gray-200 font-medium mb-4">
                <li>• 3 Months Comprehensive Course</li>
                <li>• Website Designing Training</li>
                <li>• Store Creation & Management</li>
                <li>• Product Listing Optimization</li>
                <li>• Learn from Experts</li>
              </ul>
              <p className="text-sm text-gray-300 font-medium">Limited Seats Available in KTS Haripur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Client Hub Opening */}
            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/a51a24ae-88f0-4b55-92c9-503e2a6f445e.png" 
                alt="The Client Hub Software House Opening"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 mr-4" />
                <h3 className="text-2xl font-black">Software House Grand Opening</h3>
              </div>
              <p className="text-gray-700 font-medium mb-4">
                The Clients Hub Software House - شاندار افتتاح - September 22, 2024 at 12 PM
              </p>
              <p className="text-sm text-gray-600 font-medium">
                بلقایل میزان پنگ، کچی چوک، کہلائرت ناؤن شپ - Grand launch celebration of our new software development facility
              </p>
            </div>

            {/* Digital Skills Institute */}
            <div className="bg-white text-black rounded-xl p-8 border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/2b86dcad-1a58-4ddd-9714-794211172cd2.png" 
                alt="The Legends Institute Digital Skills"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-4" />
                <h3 className="text-2xl font-black">Digital Skills Institute</h3>
              </div>
              <ul className="space-y-2 text-gray-700 font-medium mb-4">
                <li>• Online Earning Opportunities</li>
                <li>• Digital Skills Development</li>
                <li>• Free Laptop Program</li>
                <li>• Comprehensive Training Modules</li>
                <li>• The Legends Institute of Sciences</li>
              </ul>
              <p className="text-sm text-gray-600 font-medium">Contact: +923115649310</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">Mentorship Impact</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
              Expert Lecturer, Motivator, and Influencer at top institutions including PAF IAST, 
              University of Haripur, and various universities across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-black text-white rounded-lg border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">1000+</div>
              <div className="text-gray-200 font-semibold">Students Mentored Internationally</div>
            </div>
            <div className="text-center p-6 bg-black text-white rounded-lg border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">15+</div>
              <div className="text-gray-200 font-semibold">Educational Programs</div>
            </div>
            <div className="text-center p-6 bg-black text-white rounded-lg border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black mb-2">5+</div>
              <div className="text-gray-200 font-semibold">Years of Teaching Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;
