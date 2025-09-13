// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import STechIcon from '@/components/STechIcon';
import { Badge } from '@/components/ui/badge';

const TrustCard = ({ trust, index }) => {
  return (
    <motion.div
      className="relative group bg-bg2 p-8 shadow-two text-center rounded-2xl transition-shadow duration-300 hover:shadow-orange flex flex-col items-center"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >

      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition duration-500 z-0">
        <div className="w-full h-full bg-bg2 rounded-2xl"></div>
      </div>

      {/* Icon */}
      <motion.div
        className={`${trust.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 200
        }}
      >
        <STechIcon 
          name={trust.iconName} 
          className={`w-8 h-8 ${trust.iconColor}`} 
        />
      </motion.div>

      {/* Title */}
      <motion.h3 
        className="text-xl font-semibold mb-4 relative z-10 text-text1 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
      >
        {trust.title}
      </motion.h3>

      {/* Badge */}
      <motion.div
        className="flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
      >
        <Badge variant="default" className="bg-orange">
          {trust.badge}
        </Badge>
      </motion.div>
    </motion.div>
  );
};

export default TrustCard;