"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ABOUT_1 from "../../../public/assets/images/IMG_1.jpg";
import ABOUT_2 from "../../../public/assets/images/IMG_2.jpg";
import ABOUT_3 from "../../../public/assets/images/IMG_3.jpg";
import ABOUT_4 from "../../../public/assets/images/IMG_4.jpg";
import ABOUT_5 from "../../../public/assets/images/IMG_5.jpg";
import ABOUT_6 from "../../../public/assets/images/IMG_6.jpg";
import ABOUT_7 from "../../../public/assets/images/IMG_7.jpg";
import ABOUT_8 from "../../../public/assets/images/IMG_8.jpg";
import Image from "next/image";

const images = [
  ABOUT_1,
  ABOUT_2,
  ABOUT_3,
  ABOUT_4,
  ABOUT_5,
  ABOUT_6,
  ABOUT_7,
  ABOUT_8,
];

export default function InfiniteImageCarousel() {
  // const controls = useAnimation();

  // useEffect(() => {
  //   const startInfiniteScroll = async () => {
  //     while (true) {
  //       await controls.start({
  //         x: ["0%", "-50%"],
  //         transition: { duration: 60, ease: "linear" },
  //       });
  //       await controls.set({ x: "0%" });
  //     }
  //   };

  //   startInfiniteScroll();
  // }, [controls]);

  return (
    <div className="relative w-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="flex space-x-6"
        // animate={{ x: "-50%" }}
        animate={{ x: ["0%", "-50%"] }} // Move halfway since it's duplicated
        initial={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-[300px] h-[420px] flex-shrink-0 rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt="testimonial-images"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
