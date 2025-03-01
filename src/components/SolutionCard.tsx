import React from "react";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] self-stretch flex min-w-60 min-h-[261px] flex-col items-stretch justify-center grow shrink w-[464px] my-auto px-[23px] py-10 rounded-[25px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[84px] items-center gap-2.5 p-2.5">{icon}</div>
      <h3 className="text-white text-2xl font-medium leading-none mt-3.5 max-md:max-w-full">
        {title}
      </h3>
      <p className="text-white text-base font-normal leading-6 mt-3.5 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default SolutionCard;
