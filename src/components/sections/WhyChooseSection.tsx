
import React from "react";
import ReasonCard from "../ReasonCard";

const WhyChooseSection: React.FC = () => {
  return (
    <section
      className="bg-[rgba(3,19,23,1)] flex w-full flex-col overflow-hidden items-center justify-center px-[70px] py-[180px] max-md:max-w-full max-md:px-5 max-md:py-[100px]"
      id="why-choose"
    >
      <div className="flex items-center gap-[40px_76px] flex-wrap -mb-9 max-md:max-w-full max-md:mb-2.5">
        <h2 className="self-stretch min-w-60 gap-2.5 text-[100px] text-[#E8F9FC] font-medium leading-[104px] w-[442px] my-auto max-md:text-[40px] max-md:leading-[46px] max-md:max-w-full">
          Why <br />
          Choose <br />
          Parka?
        </h2>
        <div className="self-stretch flex min-w-60 flex-col items-center text-black leading-none w-[790px] my-auto max-md:max-w-full">
          <ReasonCard
            title="Unlimited Earnings"
            description="Maximize your income based on your sales performance."
            bgColor="bg-[#E8F9FC]"
          />
          <ReasonCard
            title="Diverse Product Range"
            description="Offer products that appeal to a broad customer base."
            bgColor="bg-[#A5E6F3]"
          />
          <ReasonCard
            title="Financing Support"
            description="Increase sales with customer-friendly payment options."
            bgColor="bg-[#4BCDE7]"
          />
          <ReasonCard
            title="Dedicated Support"
            description="Receive training and assistance to ensure your success."
            bgColor="bg-[#189AB4]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
