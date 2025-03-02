import React, { useRef } from "react";
import ReasonCard from "../ReasonCard";
import Container from "../Container";
import { motion, useInView } from "framer-motion";

const WhyChooseSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });

  return (
    <Container className="w-[80%]">
      <section
        id="why-choose-parkatech"
        className="bg-[rgba(3,19,23,1)] py-[180px]"
      >
        <div className="flex items-center gap-[40px_76px] flex-wrap -mb-9 max-md:max-w-full max-md:mb-2.5">
          <h2 className="self-stretch min-w-60 gap-2.5 text-[100px] text-[#E8F9FC] font-medium leading-[104px] w-[442px] my-auto max-md:text-[40px] max-md:leading-[46px] max-md:max-w-full">
            Why <br />
            Choose <br />
            Parka?
          </h2>
          <div className="self-stretch flex min-w-60 flex-col items-center gap-5 text-black leading-none w-[790px] my-auto max-md:max-w-full">
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
