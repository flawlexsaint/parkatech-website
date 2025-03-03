import React from "react";
import Container from "./Container";
import Image from "next/image";
import Logo from "../../public/assets/images/Logo.svg";

const Footer: React.FC = () => {
  return (
    <Container className="w-[80%] 3xl:w-[40%]">
      <footer className="w-full mt-[110px] max-md:max-w-full max-md:mt-10 pb-10">
        <div className="border bg-[#189AB4] min-h-0 w-full border-[rgba(24,154,180,1)] border-solid max-md:max-w-full" />
        <div className="block md:flex w-full gap-10 items-center justify-between mt-[27px] max-md:max-w-full">
          <Image alt="Logo" src={Logo} />
          <address className="flex min-w-60 flex-col text-[20px] text-white leading-none justify-center my-auto max-md:mt-6 max-md:max-w-full not-italic">
            <div className="max-md:max-w-full">
              Shop C15, Adeniran Ogunsanya Shopping Complex, Surulere, Lagos.
            </div>
            <div className="mt-2.5">
              <a href="tel:08036342930" className="hover:underline">
                0803 634 2930
              </a>
            </div>
          </address>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
