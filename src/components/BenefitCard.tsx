
import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  textColor?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  textColor = "text-[#E8F9FC]", // Default text color
}) => {
  return (
    <div className="self-stretch flex min-w-60 flex-col items-stretch grow shrink w-60 my-auto">
      <div className="bg-[rgba(75,205,231,1)] self-center flex min-h-[100px] w-[100px] items-center justify-center h-[100px] px-2 rounded-[25px]">
        {icon}
      </div>
      <div className="flex w-full flex-col items-center text-center leading-none mt-[52px] max-md:mt-10">
        <h3 className="text-[#4BCDE7] text-2xl font-semibold">{title}</h3>
        <p className={`${textColor} text-lg font-normal mt-[11px]`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
