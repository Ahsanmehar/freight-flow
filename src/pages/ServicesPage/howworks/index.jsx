// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import WorksComp from './WorksComp';
import { worksData } from './worksData';
import SectionTitle from '@/components/SectionTitle';

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 container overflow-hidden">
      <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className='container'
              >

      <SectionTitle
        title="How It Works"
        paragraph="Get started in four simple steps"
        center={true}
        width="720px"
        mb="64px"
      /></motion.div>


      <div className="space-y-0">
        {worksData.map((step, index) => (
          <WorksComp 
            key={step.id} 
            step={step} 
            isLast={index === worksData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;