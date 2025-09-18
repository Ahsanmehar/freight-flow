// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import home_images from "@/assets/images/home";
import { Button } from "@/components/ui/button";
import STechIcon from "@/components/STechIcon";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${home_images.HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-bg1 opacity-60"></div>

      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionTitle
            title="Connect Freight & Carriers with AI-Powered Precision"
            paragraph="Join thousands of drivers and shippers who trust FreightFlow for fast, secure, and profitable freight matching. Get started in minutes."
            center
            width="700px"
            mb="50px"
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/driver-signup">
            <Button
              variant="secondary"
              className="flex items-center justify-center gap-2 w-72 px-12 py-6 rounded-full shadow-lg bg-bright-blue1 hover:bg-bright-blue2 text-lg"
            >
              <STechIcon name="truck" className="!w-6 !h-6" />
              <span className="whitespace-nowrap">Join as a Driver</span>
              <STechIcon name="move-right" className="!w-6 !h-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
