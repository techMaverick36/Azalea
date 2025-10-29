import React, { useState, useEffect } from 'react';
import { Sparkles,  Star, CheckCircle2, Phone, Mail, MapPin, Clock,  ArrowRight } 
from 'lucide-react';
import Navbar from '../components/Navbar';
import { testimonials, services,  features,} from '../../utils/constant';
import Footer from '../components/Footer';


export default function CleaningWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-white montserrat">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <div
  className="relative bg-cover bg-center bg-no-repeat text-white pt-32 pb-20 overflow-hidden"
  style={{
    backgroundImage: "url('/cleaning-cart.jpg')",
  }}
>
  {/* Overlay for readability */}
 <div className="absolute inset-0 bg-gradient-to-br bg-black/80"></div>


  {/* Decorative glowing shapes (kept subtle) */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
  </div>

  {/* Main Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 raleway">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Your Space, <span className="text-blue-200">Sparkling Clean</span>
        </h1>
        <p className="text-xl text-blue-100">
          Professional cleaning services for homes and businesses. Trusted by thousands for exceptional results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center inline-flex items-center justify-center"
          >
            Book Now <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
          >
            View Services
          </a>
        </div>
        <div className="flex items-center gap-8 pt-4">
          <div>
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold">15+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Image Card */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl transform rotate-6"></div>
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
            <Sparkles className="w-16 h-16 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Eco-friendly products and professional equipment for spotless
              results every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* Features Bar */}
      <div className="bg-gray-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 raleway">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 raleway">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 raleway">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Azalea cleaning services?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 3 years of experience, we've built our reputation on reliability, quality, and customer satisfaction. Our team of trained professionals uses eco-friendly products and state-of-the-art equipment to deliver exceptional results.
              </p>
              <div className="space-y-4">
                {[
                  "Background-checked and trained staff",
                  "Eco-friendly cleaning products",
                  "Customized cleaning plans",
                  "Same-day service available",
                  "100% satisfaction guarantee"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years in Business</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Cleaners</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-linear-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today for a free quote and experience the difference professional cleaning makes.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <div className="text-blue-100">  <a href="tel:+256784171845" className="text-blue-100">
    +256 (784) 171-845
  </a>
  </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <div className="text-blue-100">  <a href="mailto:Azaleapropertymanagement2023@gmail.com" className="text-blue-100">
                    Azaleapropertymanagement2023@gmail.com
  </a>
  </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Visit Us</div>
                    <div className="text-blue-100">Baskerville Avenue, Kampala</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Business Hours</div>
                    <div className="text-blue-100">Mon - Fri: 8AM - 6PM<br />Sat: 9AM - 4PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select Service</option>
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move In/Out Cleaning</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your cleaning needs..." 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer/>
    </div>
  );
}