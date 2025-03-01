
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      className="justify-center items-center bg-[#E8F9FC] flex w-full flex-col overflow-hidden px-20 py-[122px] max-md:max-w-full max-md:px-5 max-md:py-[70px]"
      id="about"
    >
      <div className="flex w-full max-w-[1243px] flex-col items-stretch max-md:max-w-full">
        <div className="flex justify-center items-center gap-[106px] max-md:max-w-full max-md:flex-wrap max-md:gap-[50px]">
          <div className="flex flex-col items-stretch w-[48%] max-md:max-w-full max-md:w-full">
            <div className="text-[#031317] text-[50px] leading-[60px] font-medium max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
              <span className="text-[#1C212E]">
                Your Gateway to Sales Success
              </span>
              <br />
              without the Hassle
            </div>
            <div className="text-[#1C212E] text-xl leading-[35px] mt-14 max-md:max-w-full max-md:mt-10">
              Parka helps freelance sales agents like you earn more by providing
              a platform to sell premium products with easy financing options for
              your customers.
              <br />
              <br />
              No more chasing suppliers or dealing with financing paperwork. We've
              simplified the process so you can focus on what you do best: selling.
            </div>
          </div>
          <div className="flex basis-[0%] flex-col items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59a2ebfb9ca4cf9e38a3a7db4fefa5a9850e25fd6e33dbfa8929c32cdda46551?placeholderIfAbsent=true"
              alt="Sales agent with a digital device"
              className="max-w-[600px] max-h-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
