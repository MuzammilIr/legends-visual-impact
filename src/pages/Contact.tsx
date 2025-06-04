
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
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
              <Link to="/companies" className="hover:text-yellow-400 transition-colors">Companies & Ventures</Link>
              <Link to="/contact" className="text-yellow-400">Contact</Link>
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to start your journey? Let's connect and build something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/50 rounded-xl p-8 border border-yellow-400/20">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="First Name" 
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Last Name" 
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Subject" 
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 min-h-[120px]"
                />
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-black/50 rounded-xl p-6 border border-yellow-400/20">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-yellow-400 mr-4" />
                  <h3 className="text-xl font-bold text-yellow-400">Main Office</h3>
                </div>
                <p className="text-gray-300">2 Main Chowk KTS, Haripur</p>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-yellow-400/20">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-yellow-400 mr-4" />
                  <h3 className="text-xl font-bold text-yellow-400">Public Day</h3>
                </div>
                <p className="text-gray-300">Saturday</p>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-yellow-400/20">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-yellow-400 mr-4" />
                  <h3 className="text-xl font-bold text-yellow-400">Email</h3>
                </div>
                <p className="text-gray-300">teamjamal@ichcalifornia.com</p>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-yellow-400/20">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-yellow-400 mr-4" />
                  <h3 className="text-xl font-bold text-yellow-400">Phone</h3>
                </div>
                <p className="text-gray-300">+923115649310</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
