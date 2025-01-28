"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import got from "../../../../public/images/got.png";

import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";

function Ig() {
  const [isMobileView, setIsMobileView] = useState(false);

  const offscreen = {
    x: -50,
    opacity: 0,
  };
  const onscreen = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };

  const offscreen2 = {
    x: 50,
    opacity: 0,
  };
  const onscreen2 = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };

  const offscreen3 = {
    y: 150,
    opacity: 0,
  };
  const onscreen3 = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };

  return (
    <section
      className={`flex items-center justify-center w-full text-2xl pt-40 text-center relative ${work_sans.className}`}
    >
      <div className="flex flex-col w-full items-center overflow-hidden">
        <motion.div
          initial={offscreen3}
          whileInView={onscreen3}
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          <Image
            src={got}
            alt="Igate"
            width="auto"
            height="80%"
            style={{
              transform: "rotate(0deg)",
              scale: "1",
            }}
          />
        </motion.div>
      </div>
      <div className="w-full bg-black absolute bottom-0">
        <h1 className="leading-7 text-[#ccff00] uppercase text-center p-5 sm:text-4xl text-medium sm:mb-0 mb-4 max-md:max-w-full font-bold">
          The D-day for Brands and Marketing Tech in{" "}
          <span className="md:block h-0 hidden">
            <br />
          </span>{" "}
          the World of Influencer Marketing is here!
        </h1>
      </div>
    </section>
  );
}

export default Ig;
