
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
        "justify-center items-stretch flex min-h-[122px] max-w-full w-[790px] flex-col font-normal px-8 py-[25px] rounded-[20px] max-md:px-5",
        bgColor,
      )}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-xl mt-1.5 max-md:max-w-full">{description}</p>
    </div>
  );
};

export default ReasonCard;
