import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-[110px] max-md:max-w-full max-md:mt-10">
      <div className="border bg-[#189AB4] min-h-0 w-full border-[rgba(24,154,180,1)] border-solid max-md:max-w-full" />
      <div className="flex w-full max-w-[1315px] items-center gap-[40px_100px] justify-between flex-wrap mt-[27px] max-md:max-w-full">
        <div className="rounded bg-[rgba(202,240,248,1)] self-stretch flex min-h-[69px] gap-1 text-[rgba(2,62,138,1)] whitespace-nowrap justify-center w-[74px] my-auto pl-2 pr-[9px] pt-[37px] pb-[11px]">
          <div className="w-[57px] rounded-[0px_0px_0px_0px]">
            <div className="text-lg font-extrabold tracking-[0.73px]">
              Parka
            </div>
            <div className="text-[6px] font-medium tracking-[1.8px] mt-1">
              Technologies
            </div>
          </div>
        </div>
        <address className="self-stretch flex min-w-60 flex-col text-xl text-white font-normal text-center leading-none justify-center w-[645px] my-auto max-md:max-w-full not-italic">
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
  );
};

export default Footer;
