import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/Logo.svg";
import Container from "./Container";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgba(0,0,0,0.27)] flex w-full items-center justify-center flex-wrap px-[15px] py-[13px] rounded-[11px] max-md:max-w-full">
      <Container className="mt-[98px] mb-[80px] w-[70%] mx-auto flex justify-between">
        <div className="self-stretch flex items-center gap-4 my-auto">
          <Image
            src={Logo}
            width={48}
            height={48}
            className="h-12 w-auto"
            alt="Parka Technologies Logo"
          />
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-1 text-sm text-white font-medium flex-wrap my-auto max-md:max-w-full">
          <Link
            href="#about-us"
            className="self-stretch min-h-8 gap-2.5 my-auto px-4 py-[7px] hover:text-[rgba(75,205,231,1)] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#our-solution"
            className="self-stretch min-h-8 gap-2.5 my-auto px-4 py-[7px] hover:text-[rgba(75,205,231,1)] transition-colors"
          >
            Our Solution
          </Link>
          <Link
            href="#why-choose-parkatech"
            className="self-stretch min-h-8 gap-2.5 my-auto px-4 py-[7px] hover:text-[rgba(75,205,231,1)] transition-colors"
          >
            Why Choose Parkatech
          </Link>
          <Link
            href="#how-it-works"
            className="self-stretch min-h-8 gap-2.5 my-auto px-4 py-[7px] hover:text-[rgba(75,205,231,1)] transition-colors"
          >
            How it works
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
