// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import TrustCard from './TrustCard';
import { trustData } from './trustData';
import SectionTitle from '@/components/SectionTitle';

const TrustSection = () => {
  return (
    <section className="py-20 bg-bg1">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Trusted & Certified"
            paragraph="Fully compliant with all industry regulations and standards"
            center
            width="750px"
            mb="70px"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustData.map((trust, index) => (
            <TrustCard key={trust.id} trust={trust} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;