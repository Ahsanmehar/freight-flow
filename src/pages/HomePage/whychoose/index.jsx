// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import WhyCard from './whyCard';
import { whyData } from './whyData';
import SectionTitle from '@/components/SectionTitle';

const WhyChoose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-bg1" >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Why Choose FreightFlow?"
            paragraph="Built by logistics experts, powered by AI technology, trusted by thousands of drivers and shippers nationwide."
            center
            width="800px"
            mb="70px"
          />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whyData.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <WhyCard feature={feature} showExploreLink={false} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;