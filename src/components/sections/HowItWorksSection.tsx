
import React from "react";

const StepNumber: React.FC<{ number: string }> = ({ number }) => (
  <div className="bg-white self-stretch min-h-12 font-bold whitespace-nowrap leading-none w-12 h-12 my-auto px-2.5 rounded-[200px] flex items-center justify-center">
    {number}
  </div>
);

const VerticalLine: React.FC = () => (
  <div className="border bg-[#4BCDE7] self-center z-10 mt-[-31px] w-px shrink-0 h-[104px] border-[rgba(75,205,231,1)] border-solid" />
);

const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="justify-center items-center bg-[#D2F3F9] flex w-full flex-col overflow-hidden text-[#031317] px-20 py-[120px] max-md:max-w-full max-md:px-5 max-md:py-[100px]"
      id="how-it-works"
    >
      <div className="flex w-[842px] max-w-full flex-col items-stretch -mb-6 max-md:mb-2.5">
        <h2 className="text-center text-[56px] font-medium leading-none max-md:max-w-full max-md:text-[40px]">
          How it Works
        </h2>
        <div className="self-center flex w-full max-w-[842px] flex-col items-stretch text-2xl mt-10 max-md:max-w-full">
          <div className="z-10 flex w-full flex-col pl-[52px] max-md:max-w-full max-md:pl-5">
            <div className="flex items-center gap-[33px]">
              <div className="text-right font-semibold leading-9 self-stretch w-[304px] my-auto">
                Sign Up
                <br />
                <span className="font-normal">
                  Register quickly to join our{" "}
                </span>
                <br />
                <span className="font-normal">network of sales agents</span>.
              </div>
              <StepNumber number="1" />
            </div>
            <VerticalLine />
            <div className="flex items-center gap-[33px]">
              <StepNumber number="2" />
              <div className="font-semibold leading-9 self-stretch w-[372px] my-auto">
                Browse Products <br />
                <span className="font-normal">
                  Explore our extensive catalog{" "}
                </span>
                <br />
                <span className="font-normal">of smartphones and more.</span>
              </div>
            </div>
            <VerticalLine />
          </div>
          <div className="flex mt-[-31px] items-center gap-[33px]">
            <div className="text-right font-semibold leading-9 self-stretch w-[356px] my-auto">
              Sell to Customer
              <br />
              <span className="font-normal">
                Explore our extensive catalog{" "}
              </span>
              <br />
              <span className="font-normal">of smartphones and more.</span>
            </div>
            <StepNumber number="3" />
          </div>
          <div className="z-10 flex mt-[-31px] w-[453px] max-w-full flex-col">
            <div className="border bg-[#4BCDE7] z-10 w-px shrink-0 h-[104px] ml-6 border-[rgba(75,205,231,1)] border-solid max-md:ml-2.5" />
            <div className="self-stretch flex items-center gap-[33px]">
              <StepNumber number="4" />
              <div className="font-semibold leading-9 self-stretch w-[372px] my-auto">
                Facilitate Financing
                <br />
                <span className="font-normal">
                  Assist customers with flexible payment options.
                </span>
              </div>
            </div>
            <div className="border bg-[#4BCDE7] z-10 mt-[-31px] w-px shrink-0 h-[104px] ml-6 border-[rgba(75,205,231,1)] border-solid max-md:ml-2.5" />
          </div>
          <div className="flex mt-[-31px] items-center gap-[33px] ml-4">
            <div className="text-right font-semibold leading-9 self-stretch w-[340px] my-auto">
              Earn Commissions
              <br />
              <span className="font-normal">
                Receive competitive payouts for every successful sale.
              </span>
            </div>
            <StepNumber number="5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
