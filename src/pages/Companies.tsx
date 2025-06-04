
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Users, Briefcase } from "lucide-react";

const Companies = () => {
  const mainCompanies = [
    {
      name: "Tech Nex Solutions",
      tagline: "Technology of Next Generation",
      description: "Leading technology company focused on next-generation solutions and digital innovation."
    },
    {
      name: "Legends Studio Haripur",
      tagline: "Creative Excellence",
      description: "Professional studio services providing creative and media solutions."
    },
    {
      name: "The Clients Hub Pvt Ltd",
      tagline: "Client-Centric Solutions",
      description: "Comprehensive business solutions and client management services."
    },
    {
      name: "Digital Skills Hub Pvt Ltd",
      tagline: "Empowering Digital Literacy",
      description: "Specialized training and skill development in digital technologies."
    },
    {
      name: "Hazara Drive Pvt Ltd",
      tagline: "Transportation Solutions",
      description: "Modern transportation and logistics solutions for the region."
    },
    {
      name: "Legends Group of Institutions",
      tagline: "Educational Excellence",
      description: "Quality education and institutional development across multiple campuses."
    }
  ];

  const jointVentures = [
    "City Swimming Pool",
    "Zest Water Ltd",
    "Synergy School Haripur", 
    "Rise College Haripur",
    "Wisdom House Montessori & School",
    "Legends Prep Zone",
    "Islamia Model Public School",
    "Heaven Lounge",
    "Impression Engineering Services",
    "Cheesy Chaska Haripur",
    "Visionare Institute of Skills Haripur"
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
              <Link to="/achievements" className="hover:text-yellow-400 transition-colors">Achievements</Link>
              <Link to="/companies" className="text-yellow-400">Companies & Ventures</Link>
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
              Companies & Ventures
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building the future through innovative companies and strategic partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Main Companies */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Building2 className="w-8 h-8 text-yellow-400 mr-4" />
            <h2 className="text-4xl font-bold text-yellow-400">Legends Group of Companies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCompanies.map((company, index) => (
              <div key={index} className="bg-black/50 rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{company.name}</h3>
                <p className="text-orange-400 text-sm mb-3 italic">{company.tagline}</p>
                <p className="text-gray-300 leading-relaxed">{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Ventures */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Users className="w-8 h-8 text-yellow-400 mr-4" />
            <h2 className="text-4xl font-bold text-yellow-400">Joint Ventures Across Pakistan</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jointVentures.map((venture, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <h3 className="text-gray-300 font-medium">{venture}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Business Portfolio Overview
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              The Legends Group encompasses a diverse portfolio of companies spanning technology, 
              education, hospitality, engineering, and various other sectors. Through strategic 
              partnerships and joint ventures, we continue to expand our reach across Pakistan, 
              delivering innovative solutions and creating opportunities for growth and development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-black/50 rounded-lg border border-yellow-400/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">6</div>
                <div className="text-gray-400">Main Companies</div>
              </div>
              <div className="p-6 bg-black/50 rounded-lg border border-yellow-400/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">11</div>
                <div className="text-gray-400">Joint Ventures</div>
              </div>
              <div className="p-6 bg-black/50 rounded-lg border border-yellow-400/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Multiple</div>
                <div className="text-gray-400">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
