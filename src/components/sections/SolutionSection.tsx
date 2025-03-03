"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { OUR_SOLUTIONS } from "@/constants/data";
import { GridItemProps } from "@/types";
import Container from "../Container";
import Image from "next/image";

export function SolutionSection() {
  return (
    <div id="our-solution">
      <Container className="w-[95%] md:w-[80%] 3xl:w-[40%] py-[60px] md:py-[174px]">
        <Container className="mb-[48px]">
          <h1 className="text-center font-semibold text-[36px] md:text-[80px] text-[#E8F9FC]">
            Our Solution
          </h1>
        </Container>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-2 lg:gap-4 xl:max-h-[34rem]">
          {OUR_SOLUTIONS?.map(({ title, description, icon }, i) => (
            <GridItem
              {...{
                icon,
                title,
                description,
              }}
              key={i}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none bg-[#FFFFFF0F] rounded-[25px]">
      <div className="relative h-full rounded-[25px] p-2 md:p-3">
        <GlowingEffect
          blur={0}
          spread={40}
          glow={true}
          proximity={64}
          borderWidth={2}
          disabled={false}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <Image src={icon} alt={title} width={64} height={64} />
            <div className="space-y-3">
              <h3 className="pt-0.5 text-white text-[20px] md:text-[24px] font-medium md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="text-[14px] md:text-[16px] text-white">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SolutionSection;
