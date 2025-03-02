import React from "react";
import Container from "../Container";
import ScrollVelocity from "../ui/scroll-velocity";

const AboutSection: React.FC = () => {
  return (
    <Container>
      <section
        className="justify-center items-center bg-[#CAF0F8] flex w-full flex-col overflow-hidden px-20 py-[122px] max-md:max-w-full max-md:px-5 max-md:py-[70px]"
        id="about"
      >
        <Container className="w-[55%]">
          <div className="text-[#031317] text-center font-light text-[24px] leading-[45px] max-md:text-[40px] max-md:leading-[38px]">
            We transform freelance sales agents by connecting them with
            lucrative opportunities to sell premium smartphones and high-demand
            products. Our platform and financing partnerships create a seamless
            ecosystem for agents to grow their income effortlessly.
          </div>
        </Container>
        <Container>
          <h1 className="text-[#E8F9FC] text-center text-[350px] mt-[-120px] font-bold whitespace-nowrap">
            About Us
          </h1>
        </Container>
      </section>
      {/* <Container className="mt-[-460px]">
        <ScrollVelocity velocity={100} className="px-0 mx-0" />
      </Container> */}
    </Container>
  );
};

export default AboutSection;
