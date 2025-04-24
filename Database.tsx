import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/videos';
import { Search, Filter } from 'lucide-react';

const Database = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All', ...Array.from(new Set(videos.map(video => video.category)))];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              STEM Video Database
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Explore our curated collection of educational videos to help you learn programming,
              mathematics, physics, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <AnimatedSection className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="md:flex justify-between items-center">
              <div className="flex-grow md:mr-4 mb-4 md:mb-0">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="bg-white w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                    placeholder="Search videos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="relative inline-block">
                <div className="flex items-center">
                  <Filter size={18} className="text-gray-500 mr-2" />
                  <select
                    className="bg-white pl-3 pr-8 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent appearance-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Filter by category"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      category !== 'All' && <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No videos found. Try adjusting your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Request Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-primary-800 mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-gray-700 mb-6">
              If you're looking for specific STEM resources that aren't in our database,
              let us know and we'll try to find and add them.
            </p>
            <button className="bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-full transition-colors">
              Request a Resource
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Database;