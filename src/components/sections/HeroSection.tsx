import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[rgba(3,19,23,1)] flex w-full flex-col overflow-hidden items-center justify-center px-20 pb-[116px] pt-[80px] max-md:max-w-full max-md:px-5">
      <div className="flex mb-[-27px] w-full max-w-[1314px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
        <div className="self-center flex w-[821px] max-w-full flex-col items-center text-center">
          <h1 className="text-[rgba(75,205,231,1)] text-[110px] font-semibold leading-[121px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px]">
            Empowering Sales Agents with Simplified Trade & Financing
          </h1>
          <p className="text-white text-xl font-normal leading-[37px] mt-[57px] max-md:max-w-full max-md:mt-10">
            Whether you&rsquo;re experienced or new to sales, our platform helps
            you succeed. Unlock your earning potential and join our growing
            network of freelance sales agents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
