// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { counterData } from './counterData';

const Counter = ({ number, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    const increment = number / (duration * 60);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  };

  return { count, startAnimation, hasStarted };
};

const CounterItem = ({ item, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { count, startAnimation } = Counter({ number: item.number, duration: 2 });

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView]);

  const formatNumber = (num) => {
    if (item.number === 2.5) {
      return num.toFixed(1);
    }
    if (item.number === 99.8) {
      return num.toFixed(1);
    }
    if (item.number >= 1000) {
      return Math.floor(num).toLocaleString();
    }
    return Math.floor(num);
  };

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
      >
        {item.prefix && <span>{item.prefix}</span>}
        {formatNumber(count)}
        {item.suffix && <span>{item.suffix}</span>}
      </motion.div>
      <motion.p 
        className="text-sm md:text-base text-text2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
      >
        {item.label}
      </motion.p>
    </motion.div>
  );
};

const CounterSection = () => {
  return (
    <section className="py-16 bg-bg2">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {counterData.map((item, index) => (
            <CounterItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;