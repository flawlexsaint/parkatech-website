import { NAV_ITEMS } from "../constants/data";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/Logo.svg";
import Hamburger from "../../public/assets/images/hamburger.svg";
import Container from "./Container";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:pt-[98px] pt-[48px] top-[-40px] md:top-[-90px] sticky z-100">
      <Container
        className={cn(
          "w-[95%] md:w-[80%] 3xl:w-[40%] bg-[rgba(0,0,0,0.27)] backdrop-blur-sm h-[76px] px-4 flex items-center justify-between",
          !isOpen && "rounded-[11px]"
        )}
      >
        <div className="self-stretch flex items-center gap-4 my-auto">
          <Link href="#home">
            <Image
              src={Logo}
              width={48}
              height={48}
              className="h-12 w-auto"
              alt="Parka Technologies Logo"
            />
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer md:hidden"
        >
          <Image src={Hamburger} alt="alt" width={32} height={32} />
        </div>
        <div className="self-stretch md:flex min-w-60 items-center gap-1 text-sm text-white font-medium flex-wrap my-auto max-md:max-w-full hidden">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={i}
              href={item?.anchor}
              className="self-stretch min-h-8 gap-2.5 my-auto px-4 py-[7px] text-[14px] font-medium hover:text-[rgba(75,205,231,1)] transition-colors"
            >
              {item?.item}
            </Link>
          ))}
        </div>
      </Container>
      {isOpen && (
        <Container className="w-[95%] md:w-[80%] bg-[rgba(0,0,0,0.27)] backdrop-blur-sm p-4 md:hidden">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={i}
              href={item?.anchor}
              onClick={() => setIsOpen(!isOpen)}
              className="block min-h-8 gap-2.5 my-auto px-4 py-[7px] text-[14px] font-medium hover:text-[rgba(75,205,231,1)] transition-colors"
            >
              {item?.item}
            </Link>
          ))}
        </Container>
      )}
    </nav>
  );
};

export default Navbar;
