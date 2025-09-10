// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ahsan Mehar
        </motion.h1>
      </div>
    </section>
  );
}
