// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import CompareTable from './CompareTable';
import { compareData } from './compareData';
import SectionTitle from '@/components/SectionTitle';

const CompareSection = () => {
  return (
    <section className="py-20 px-4 container overflow-hidden">
      <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
      <SectionTitle
        title="Why Choose FreightFlow?"
        paragraph="See how we compare to traditional freight brokers"
        center={true}
        width="720px"
        mb="48px"
      /></motion.div>

      <CompareTable data={compareData} />
    </section>
  );
};

export default CompareSection;