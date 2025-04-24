import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Database, Users, Rocket } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              <motion.h1 
                className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4"
                variants={fadeInUp}
              >
                Welcome to <span className="text-secondary-400">DreamSTEM</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl"
                variants={fadeInUp}
              >
                Empowering underserved girls and women in Kyrgyzstan through STEM education and social change
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <Button 
                  to="/database" 
                  variant="secondary"
                  size="lg"
                  icon={<ChevronRight size={18} />}
                >
                  Explore Resources
                </Button>
                <Button 
                  to="/articles" 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Read Our Articles
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Female students learning STEM" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-800 mb-4">Our Mission</h2>
            <div className="h-1 w-24 bg-secondary-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              DreamSTEM is a non-profit organization providing quality STEM education to underserved girls and 
              women in Kyrgyzstan, as well as raising awareness to challenge harmful social norms and practices 
              in the region. Our goal is to help underserved Russian-speaking girls acquire knowledge and skills 
              in STEM, escape cycles of poverty and dependency, participate in global tech markets, and achieve 
              gender equality.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              {
                icon: <BookOpen className="h-12 w-12 mb-4 text-secondary-500" />,
                title: "Education",
                description: "Providing access to quality STEM education through online resources and mentorship"
              },
              {
                icon: <Database className="h-12 w-12 mb-4 text-secondary-500" />,
                title: "Resources",
                description: "Building a comprehensive database of STEM learning materials in Russian and English"
              },
              {
                icon: <Users className="h-12 w-12 mb-4 text-secondary-500" />,
                title: "Community",
                description: "Creating a supportive community for girls interested in STEM fields"
              },
              {
                icon: <Rocket className="h-12 w-12 mb-4 text-secondary-500" />,
                title: "Empowerment",
                description: "Enabling economic independence through tech skills and career opportunities"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                whileHover={{ y: -5 }}
              >
                {item.icon}
                <h3 className="font-heading font-semibold text-xl text-primary-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Roadmap Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-800 mb-4">Our Roadmap</h2>
              <div className="h-1 w-24 bg-secondary-400 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                We are committed to transforming lives and creating change through our comprehensive approach.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Educational Resources",
                description: "Publishing educational articles to raise awareness on gender inequality, access to education, and social issues in Kyrgyzstan.",
                icon: "📚",
                delay: 0.1
              },
              {
                title: "STEM Database",
                description: "Providing a curated STEM video database with tutorials and lectures to support learning in programming, mathematics, physics, and more.",
                icon: "🎓",
                delay: 0.2
              },
              {
                title: "Community Discussion",
                description: "Hosting discussions and campaigns that challenge societal norms and empower women.",
                icon: "💬",
                delay: 0.3
              },
              {
                title: "Mentorship Network",
                description: "Connecting learners with mentors and role models in the STEM community.",
                icon: "🤝",
                delay: 0.4
              },
              {
                title: "Global Participation",
                description: "Supporting girls to become active participants in global tech industries.",
                icon: "🚀",
                delay: 0.5
              }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                className="flex items-start gap-6 mb-8"
                delay={item.delay}
                direction="left"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                to="/database" 
                variant="primary"
                icon={<Database size={18} />}
              >
                Explore STEM Database
              </Button>
              <Button 
                to="/articles" 
                variant="secondary"
                icon={<BookOpen size={18} />}
              >
                Read Our Articles
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary-400 to-secondary-500">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-800 mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-primary-900 mb-8 max-w-2xl mx-auto">
              Help us empower more women and girls through STEM education. Together, we can create 
              meaningful change and opportunities for underserved communities.
            </p>
            <Button 
              to="/contact" 
              variant="primary"
              size="lg"
            >
              Get Involved Today
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;