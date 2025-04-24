import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-secondary-300 to-secondary-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6">
        <h3 className="text-primary-800 font-heading font-semibold text-xl mb-3">
          {article.title}
        </h3>
        <p className="text-primary-800 mb-4">
          {article.excerpt}
        </p>
        <motion.a
          href={`#${article.slug}`}
          className="inline-flex items-center text-primary-800 font-medium hover:text-primary-700 transition-colors"
          whileHover={{ x: 5 }}
        >
          Read More <ChevronRight size={16} className="ml-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ArticleCard;