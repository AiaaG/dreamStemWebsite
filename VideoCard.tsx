import React from 'react';
import { motion } from 'framer-motion';
import { VideoResource } from '../types';

interface VideoCardProps {
  video: VideoResource;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video">
        <iframe
          src={video.embedUrl}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
          {video.category}
        </span>
        <h4 className="font-heading font-medium text-gray-900 text-lg">{video.title}</h4>
      </div>
    </motion.div>
  );
};

export default VideoCard;