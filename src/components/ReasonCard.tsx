import React from "react";
import { cn } from "@/lib/utils";

interface ReasonCardProps {
  title: string;
  description: string;
  bgColor: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={cn(
        "flex min-h-[100px] w-full flex-col font-normal py-[25px] px-6 rounded-[20px] max-md:px-5",
        bgColor
      )}
    >
      <h3 className="text-[16px] md:text-2xl font-semibold">{title}</h3>
      <p className="text-[14px] md:text-xl mt-1.5 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default ReasonCard;
