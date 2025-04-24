import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              We'd love to hear from you! Whether you're a student, mentor, or supporter, 
              drop us a message and we'll get back to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex gap-8">
              <AnimatedSection 
                className="md:w-1/3 bg-primary-800 text-white rounded-lg p-8 mb-8 md:mb-0"
                direction="left"
              >
                <h2 className="font-heading font-semibold text-2xl mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-700 p-3 rounded-full mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-medium mb-1">Email</h4>
                      <p className="text-primary-200">info@dreamstem.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-700 p-3 rounded-full mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-medium mb-1">Location</h4>
                      <p className="text-primary-200">Bishkek, Kyrgyzstan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-700 p-3 rounded-full mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-medium mb-1">Phone</h4>
                      <p className="text-primary-200">+996 XXX XXX XXX</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-heading font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[...Array(4)].map((_, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        className="bg-primary-700 hover:bg-primary-600 p-2 rounded-full transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="md:w-2/3" direction="right">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="font-heading font-semibold text-2xl text-primary-800 mb-6">Send Us a Message</h2>
                  
                  <form>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                        placeholder="How can we help?"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="inline-flex items-center bg-primary-800 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message <Send size={16} className="ml-2" />
                    </motion.button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Method - Google Form */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-primary-800 mb-4">
              Or Use Our Contact Form
            </h2>
            <p className="text-gray-700 mb-8">
              If you prefer, you can also reach us using our Google Form:
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScWfQKSNGMnP3qfb-JhFtJawBw5zTpqFGT1_iLPWMMgo_nJXw/viewform?embedded=true"
                width="100%"
                height="650"
                className="border-0"
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl text-primary-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700">
                Here are some common questions about DreamSTEM and our programs.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How can I support DreamSTEM's mission?",
                  answer: "There are many ways to support our mission, including donating, volunteering, sharing our resources, and mentoring students. Contact us for more information on how you can help."
                },
                {
                  question: "Do you offer mentorship opportunities?",
                  answer: "Yes, we connect students with mentors in various STEM fields. If you're interested in becoming a mentor or finding a mentor, please contact us."
                },
                {
                  question: "Are your resources available in Russian?",
                  answer: "Yes, many of our resources are available in both English and Russian to serve our target audience in Kyrgyzstan."
                },
                {
                  question: "How can schools partner with DreamSTEM?",
                  answer: "We welcome partnerships with schools to expand STEM education opportunities. Please contact us to discuss potential collaboration."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-secondary-400 p-2 rounded-full">
                        <MessageSquare size={20} className="text-primary-800" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-primary-800 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;