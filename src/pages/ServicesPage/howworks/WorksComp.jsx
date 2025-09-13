// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import { Badge } from '@/components/ui/badge';

const WorksComp = ({ step, isLast, index }) => {
  return (
    <motion.div
      className="flex items-start space-x-6 "
      initial={{ opacity: 0, y: -30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.2,       
        delay: index * 0.3,  
        ease: "easeOut"
      }}
    >
      <motion.div
        className="flex-shrink-0 relative"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring", 
          stiffness: 120, 
          damping: 18,
          delay: index * 0.3 + 0.3,
          duration: 1.0       
        }}
      >
        <div className="w-16 h-16 bg-bright-blue2 rounded-full flex items-center justify-center">
          <span className="text-text1 text-xl font-semibold">{step.id}</span>
        </div>

        {/* Line */}
        {!isLast && (
          <motion.div
            className="absolute top-16 left-1/2 transform -translate-x-0.5 w-0.5 bg-white"
            initial={{ height: 0 }}
            whileInView={{ height: "4rem" }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.3 + 0.5 }}
          />
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex-1 pb-16"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: index * 0.3 + 0.6 }}
      >
        <div className="flex items-center space-x-3 mb-3">
          <h3 className="text-xl font-semibold text-text1">{step.title}</h3>
          <Badge variant="default" className="bg-white/20 text-orange">{step.duration}</Badge>
        </div>
        <p className="text-text2 text-base leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WorksComp;