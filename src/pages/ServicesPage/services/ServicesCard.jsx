// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import STechIcon from "@/components/STechIcon";

const ServicesCard = ({ service, index }) => {
  return (
    <motion.div
      className="relative group bg-bg2 rounded-2xl p-6 cursor-pointer overflow-hidden shadow-two transition-shadow duration-300 
                 flex flex-col items-start text-left hover:shadow-orange"
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
      {/*Glow */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="w-full h-full bg-bg2 rounded-2xl"></div>
      </div>

      <motion.div
        className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10`}
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
          name={service.iconName}
          className={`w-8 h-8 ${service.iconColor}`}
        />
      </motion.div>

      <motion.h3
        className="text-xl font-semibold text-orange relative z-10 mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
      >
        {service.title}
      </motion.h3>

      <motion.p
        className="text-text1 text-sm leading-relaxed relative z-10 mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
      >
        {service.description}
      </motion.p>

      {service.points && (
        <motion.ul
          className="mt-2 space-y-2 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
        >
          {service.points.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2 text-sm text-text1"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 0.7 + i * 0.1,
              }}
            >
              <STechIcon name="check-circle" className="w-5 h-5 text-green-500" />
              {point}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default ServicesCard;