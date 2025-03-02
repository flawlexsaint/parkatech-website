import { NAV_ITEMS } from "../constants/data";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/Logo.svg";
import Container from "./Container";

const Navbar: React.FC = () => {
  return (
    <nav className="pt-[98px] top-[-90px] sticky z-100">
      <Container className="w-[80%] bg-[rgba(0,0,0,0.27)] backdrop-blur-sm h-[76px] px-4 rounded-[11px] flex justify-between">
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
    </nav>
  );
};

export default Navbar;
