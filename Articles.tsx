import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

const Articles = () => {
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
              Articles on Gender Equality and STEM
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Explore our collection of articles on gender equality, STEM education, 
              and the unique challenges and opportunities for women in Kyrgyzstan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Women in STEM" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
                  Featured
                </span>
                <h2 className="font-heading font-bold text-2xl text-primary-800 mb-4">
                  Breaking Barriers: Women in STEM Fields in Central Asia
                </h2>
                <p className="text-gray-700 mb-6">
                  The journey of women in STEM fields across Central Asia has been marked by both 
                  significant challenges and remarkable achievements. Despite cultural barriers and 
                  limited access to resources, a new generation of women is making strides in 
                  science, technology, engineering, and mathematics...
                </p>
                <button className="text-primary-800 font-medium hover:text-primary-700 transition-colors">
                  Continue Reading →
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-secondary-400">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-primary-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-900 mb-6">
              Subscribe to our newsletter to receive the latest articles and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-primary-800"
              />
              <button className="bg-primary-800 hover:bg-primary-700 text-white px-6 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Articles;