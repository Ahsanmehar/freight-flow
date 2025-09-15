// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import STechIcon from "@/components/STechIcon";

const WhyCard = ({ feature, index }) => {
  return (
    <motion.div
      className="relative group bg-bg2 container rounded-2xl p-6  cursor-pointer overflow-hidden shadow-two transition-shadow duration-300 
                 flex flex-col items-center text-center hover:shadow-orange"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="w-full h-full bg-bg2 rounded-2xl"></div>
      </div>

      {/* Icon */}
      <motion.div
        className={`${feature.bgColor} w-16 h-16 rounded-4xl flex items-center justify-center mb-6 relative z-10`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 200,
        }}
      >
        <STechIcon
          name={feature.iconName}
          className={`w-8 h-8 ${feature.iconColor}`}
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl font-semibold text-orange relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
      >
        {feature.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-text1 text-sm leading-relaxed relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
};

export default WhyCard;
