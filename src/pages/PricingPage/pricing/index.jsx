import { motion } from "framer-motion";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import SectionTitle from "@/components/SectionTitle";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const leftContainer = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };
  const bottomContainer = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.8,
        delay: 0.2,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const rightContainer = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <section id="pricing" className="overflow-hidden relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple, Transparent Pricing"
          paragraph="Choose the plan that fits your business. No hidden fees, no surprises."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "text-bright-blue1 pointer-events-none"
                  : "text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-white/90 shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 bg-bright-blue1 absolute top-[-4px] left-0 flex h-7 w-7 items-center justify-center rounded-full transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-white"
                  : "text-bright-blue1 pointer-events-none"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Weakly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={leftContainer}
          >
            <PricingBox
              packageName="Starter"
              price={isMonthly ? "99" : "28"}
              duration={isMonthly ? "mo" : "wk"}
              subtitle="Perfect for independent owner-operators"
            >
              <OfferList text="Up to 10 loads per month" status="active" />
              <OfferList text="Basic load matching" status="active" />
              <OfferList
                text="Standard payment terms (7 days)"
                status="active"
              />
              <OfferList text="Email support" status="active" />
              <OfferList text="Mobile app access" status="active" />
              <OfferList text="Lifetime Access" status="inactive" />
            </PricingBox>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={bottomContainer}
          >
            <PricingBox
              packageName="Professional"
              price={isMonthly ? "199" : "59"}
              duration={isMonthly ? "mo" : "wk"}
              subtitle="Most popular for growing carriers"
            >
              <OfferList text="Unlimited loads" status="active" />
              <OfferList text="AI-powered matching" status="active" />
              <OfferList text="Quick pay options (same day)" status="active" />
              <OfferList text="Priority support (24/7)" status="active" />
              <OfferList text="Advanced analytics" status="active" />
              <OfferList text="Multi-equipment support" status="active" />
              <OfferList text="Rate optimization tools" status="active" />
              <OfferList text="Document management" status="inactive" />
              <OfferList text="Free Lifetime Updates" status="inactive" />
            </PricingBox>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={rightContainer}
          >
            <PricingBox
              packageName="Enterprise"
              price={isMonthly ? "499" : "149"}
              duration={isMonthly ? "mo" : "wk"}
              subtitle="For large fleets and carriers"
            >
              <OfferList text="Everything in Professional" status="active" />
              <OfferList text="Dedicated account manager" status="active" />
              <OfferList text="Custom integrations" status="active" />
              <OfferList text="White-label solutions" status="active" />
              <OfferList text="Advanced reporting" status="active" />
              <OfferList text="Fleet management tools" status="active" />
              <OfferList text="Bulk load posting" status="active" />
              <OfferList text="API access" status="active" />
            </PricingBox>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#007bff" />
              <stop offset="1" stopColor="#007bff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#007bff" />
              <stop offset="1" stopColor="#007bff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
