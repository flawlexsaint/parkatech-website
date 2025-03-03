import React, { useRef } from "react";
import ReasonCard from "../ReasonCard";
import Container from "../Container";
import { motion, useInView } from "framer-motion";

const WhyChooseSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });

  return (
    <Container className="w-[95%] md:w-[80%] 3xl:w-[40%]">
      <section
        id="why-choose-parkatech"
        className="py-[50px] md:py-[180px]"
      >
        <div className="block md:flex items-center justify-between gap-[10rem] mb-2.5">
          <h2 className="self-stretch text-center md:text-left gap-2.5 text-[32px] md:text-[50px] xl:text-[100px] text-[#E8F9FC] font-medium xl:leading-[104px] w-[100%] md:w-[10%] xl:w-[30%] my-auto leading-[66px]">
            Why Choose Parka?
          </h2>
          <div className="flex flex-col gap-3 md:gap-5 text-black leading-none my-auto w-[100%]">
            <motion.div
              ref={ref}
              data-index={1}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 1, delay: 0 }}
            >
              <ReasonCard
                bgColor="bg-[#E8F9FC]"
                title="Unlimited Earnings"
                description="Maximize your income based on your sales performance."
              />
            </motion.div>
            <motion.div
              ref={ref}
              data-index={1}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.5 }}
            >
              <ReasonCard
                bgColor="bg-[#A5E6F3]"
                title="Diverse Product Range"
                description="Offer products that appeal to a broad customer base."
              />
            </motion.div>
            <motion.div
              ref={ref}
              data-index={1}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 1, delay: 1 }}
            >
              <ReasonCard
                bgColor="bg-[#4BCDE7]"
                title="Financing Support"
                description="Increase sales with customer-friendly payment options."
              />
            </motion.div>
            <motion.div
              ref={ref}
              data-index={1}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 1, delay: 1.5 }}
            >
              <ReasonCard
                title="Dedicated Support"
                bgColor="bg-[#189AB4]"
                description="Receive training and assistance to ensure your success."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WhyChooseSection;
