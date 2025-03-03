import { BUSINESS_BENEFITS } from "@/constants/data";
import React from "react";
import BenefitCard from "../BenefitCard";
import Image from "next/image";
import Container from "../Container";

const BusinessBenefitsSection: React.FC = () => {
  const handleContactUs = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd-pEsKiYL-2iKF_okxCVbeZW-XtSRQ1WzPAjuuorpZ3Vn3DA/viewform?usp=header",
      "_blank"
    );
  };

  const handleJoinNow = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd-pEsKiYL-2iKF_okxCVbeZW-XtSRQ1WzPAjuuorpZ3Vn3DA/viewform?usp=header",
      "_blank"
    );
  };

  return (
    <Container className="py-[68px] xl:py-[173px]">
      <section
        className="justify-center items-center flex w-full flex-col overflow-hidden px-20 max-md:max-w-full max-md:px-5 "
        id="benefits"
      >
        <div className="w-full max-w-[1139px] -mb-6 max-md:max-w-full max-md:mb-2.5">
          <h2 className="text-[#E8F9FC] text-center text-[32px] xl:text-[48px] font-medium leading-[77px] max-md:max-w-full  max-md:leading-[48px]">
            Benefits for Business
          </h2>
          <div className="flex w-full gap-[24px_74px] flex-wrap mt-[83px] max-md:max-w-full max-md:mt-[50px]">
            {BUSINESS_BENEFITS?.map(
              ({ title, description, textColor, icon }, i) => (
                <BenefitCard
                  {...{
                    title,
                    textColor,
                    description,
                  }}
                  key={i}
                  icon={<Image src={icon} alt={title} />}
                />
              )
            )}
          </div>
        </div>
      </section>
      <Container className="w-[90%] 3xl:w-[40%]">
        <div className="flex items-center justify-center my-[74px]">
          <button
            onClick={handleContactUs}
            className="h-[58px] rounded-[12px] font-semibold text-[20px] text-[#031317] md:min-w-[552px] min-w-full bg-white"
          >
            Contact Us
          </button>
        </div>
      </Container>
      <Container className="bg-[#12212599] py-[47px] w-[90%] md:w-[65%] 3xl:w-[40%] rounded-[20px]">
        <Container className="w-[80%]">
          <h1 className="text-center text-white font-semibold text-[40px]">
            Earn Serious Money in Your Free Time
          </h1>
          <p className="text-center text-[24px] text-[#CAF0F8]">
            Join Parkatech to sell from anywhere and earn big commissions.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleJoinNow}
              className="h-[64px] flex justify-center items-center rounded-[12px] font-semibold text-[24px] text-[#031317] mt-10  w-[202px] bg-[#CAF0F8]"
            >
              Join Now
            </button>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default BusinessBenefitsSection;
