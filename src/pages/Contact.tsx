import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
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
              <Link to="/companies"><Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">Companies & Ventures</Button></Link>
              <Link to="/mentorship"><Button variant="ghost" className="bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105">Mentorship & Programs</Button></Link>
              <Link to="/contact"><Button variant="ghost" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">Contact</Button></Link>
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-semibold">
              Ready to start your journey? Let's connect and build something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="gradient-bg text-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-black mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="First Name" 
                      className="bg-white text-black border-2 border-gray-300 placeholder-gray-500 font-medium"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Last Name" 
                      className="bg-white text-black border-2 border-gray-300 placeholder-gray-500 font-medium"
                    />
                  </div>
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white text-black border-2 border-gray-300 placeholder-gray-500 font-medium"
                />
                <Input 
                  placeholder="Subject" 
                  className="bg-white text-black border-2 border-gray-300 placeholder-gray-500 font-medium"
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-white text-black border-2 border-gray-300 placeholder-gray-500 min-h-[120px] font-medium"
                />
                <Button className="w-full bg-white text-black hover:bg-gray-200 border-2 border-white font-black transform hover:scale-105 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="glass-effect rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-4 text-primary" />
                  <h3 className="text-xl font-black text-foreground">Main Office</h3>
                </div>
                <p className="text-muted-foreground font-medium">2 Main Chowk KTS, Haripur</p>
              </div>

              <div className="glass-effect rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 mr-4 text-primary" />
                  <h3 className="text-xl font-black text-foreground">Public Day</h3>
                </div>
                <p className="text-muted-foreground font-medium">Saturday</p>
              </div>

              <div className="glass-effect rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 mr-4 text-primary" />
                  <h3 className="text-xl font-black text-foreground">Email</h3>
                </div>
                <p className="text-muted-foreground font-medium">teamjamal@ichcalifornia.com</p>
              </div>

              <div className="glass-effect rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 mr-4 text-primary" />
                  <h3 className="text-xl font-black text-foreground">Phone</h3>
                </div>
                <p className="text-muted-foreground font-medium">+923115649310</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
