
import React from "react";
import SolutionCard from "../SolutionCard";

const SolutionSection: React.FC = () => {
  return (
    <section
      className="justify-center items-center bg-[#031317] flex w-full flex-col overflow-hidden px-20 py-[173px] max-md:max-w-full max-md:px-5 max-md:py-[100px]"
      id="solution"
    >
      <div className="mb-[-34px] w-full max-w-[1182px] max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-[#E8F9FC] text-center text-[80px] font-semibold leading-none max-md:max-w-full max-md:text-[40px]">
          Our Solution{" "}
        </h2>
        <div className="flex w-full gap-[24px_22px] flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
          <div className="flex min-w-60 items-center gap-6 flex-wrap grow shrink w-[946px] max-md:max-w-full">
            <SolutionCard
              icon={
                <div className="self-stretch flex w-16 items-center gap-2.5 overflow-hidden my-auto px-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d115930b4b2fb755969eb32f40385d0c38a1741c026c5715868e83c97a470b03?placeholderIfAbsent=true"
                    alt="Phone icon"
                    className="aspect-[0.63] object-contain w-10 fill-[#4BCDE7] self-stretch my-auto"
                  />
                </div>
              }
              title="Premium Products"
              description="Access a wide range of top-quality smartphones and popular products from trusted suppliers."
            />
            <SolutionCard
              icon={
                <div className="self-stretch flex min-h-[63px] gap-2.5 my-auto py-[5px]" />
              }
              title="Easy Financing"
              description="Partnered with leading financiers to offer customers flexible payment plans, helping you close more sales."
            />
          </div>
          <div className="flex min-w-60 items-center gap-[22px] flex-wrap max-md:max-w-full">
            <SolutionCard
              icon={
                <div className="self-stretch flex w-16 items-center gap-2.5 overflow-hidden my-auto p-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4417b580c35fb72de02376fa2a9c14a87866a2625a321bbf43c636b59bfe62?placeholderIfAbsent=true"
                    alt="Money bag icon"
                    className="aspect-[1] object-contain w-12 fill-[#4BCDE7] self-stretch my-auto"
                  />
                </div>
              }
              title="Unlimited Earnings"
              description="Earn competitive commissions with no cap. Your income grows with your performance."
            />
            <SolutionCard
              icon={
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a8da861b990c2f178f3c917e9e5d93489276c6ff4c2c0daa82e54bb1a43073c?placeholderIfAbsent=true"
                  alt="Laptop icon"
                  className="aspect-[1] object-contain w-16 self-stretch my-auto"
                />
              }
              title="Intuitive Platform"
              description="Manage sales, track commissions, and handle transactions in real-time from one easy-to-use dashboard."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
