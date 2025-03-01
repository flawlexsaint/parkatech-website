
import React from "react";
import BenefitCard from "../BenefitCard";

const BusinessBenefitsSection: React.FC = () => {
  return (
    <section
      className="justify-center items-center bg-[#031317] flex w-full flex-col overflow-hidden px-20 py-[173px] max-md:max-w-full max-md:px-5 max-md:py-[100px]"
      id="benefits"
    >
      <div className="w-full max-w-[1139px] -mb-6 max-md:max-w-full max-md:mb-2.5">
        <h2 className="text-[#E8F9FC] text-center text-[64px] font-medium leading-[77px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
          The Business Benefits of Being a Parka Agent
        </h2>
        <div className="flex w-full gap-[24px_74px] flex-wrap mt-[83px] max-md:max-w-full max-md:mt-[50px]">
          <BenefitCard
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c913d04cc73ea8aa2fdf2eda2c8fdce77b02c9c54b66b80bf2f2f46f0ce23f38?placeholderIfAbsent=true"
                alt="Flexibility icon"
                className="aspect-[1] object-contain w-12 self-stretch fill-[rgba(75,205,231,1)]"
              />
            }
            title="Flexibility"
            description="Work on your own schedule. Full-time or part-time, you choose."
            textColor="text-white"
          />
          <BenefitCard
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd91879d1ef7a7a3dfbdac775b7fa1eeac6d0ac2c5ee9bb09a7ab40e25be968e?placeholderIfAbsent=true"
                alt="No inventory icon"
                className="aspect-[1] object-contain w-12 self-stretch fill-[rgba(75,205,231,1)]"
              />
            }
            title="No Inventory"
            description="No need to store or manage products. We handle logistics."
            textColor="text-white"
          />
          <BenefitCard
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd95de60f2ff6e8a84de4a7e5dd89f24af71e9f42cce1cc2d6e0ca8ce32b97df?placeholderIfAbsent=true"
                alt="Training icon"
                className="aspect-[1] object-contain w-12 self-stretch fill-[rgba(75,205,231,1)]"
              />
            }
            title="Training & Support"
            description="Access sales training, product knowledge, and dedicated support."
            textColor="text-white"
          />
          <BenefitCard
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ead2c9ddf6d9abfbd50b40cb1b1b8eca963ba7093d3f2f65bf0784aaa96b85?placeholderIfAbsent=true"
                alt="Technology icon"
                className="aspect-[1] object-contain w-12 self-stretch fill-[rgba(75,205,231,1)]"
              />
            }
            title="Advanced Technology"
            description="Our platform makes selling, financing, and tracking commissions simple."
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsSection;
