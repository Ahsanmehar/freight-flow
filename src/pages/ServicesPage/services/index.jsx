// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import ServicesCard from './ServicesCard';
import { servicesData } from './servicesData';
import SectionTitle from '@/components/SectionTitle';

const ServicesSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Our Services"
            paragraph="Explore the wide range of services we offer to help your business thrive."
            center={true}
            width="720px"
            mb="64px"
          />
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServicesCard
              key={service.id}
              service={service}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;