
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    "Over 10,000 satisfied customers",
    "99.9% uptime guarantee",
    "24/7 customer support",
    "Award-winning design"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're passionate about empowering creators, developers, and businesses to build 
              extraordinary digital experiences. Our platform combines cutting-edge technology 
              with intuitive design to make complex tasks simple.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Since our founding, we've been committed to innovation, quality, and customer 
              satisfaction. Join thousands of users who trust us to bring their visions to life.
            </p>
            
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 mb-6">
                To democratize technology and make powerful tools accessible to everyone, 
                regardless of their technical background or experience level.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-blue-200">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
