"use client";
import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import engaging from "../../../../public/images/aboutnew/engaging.jpg";
import curated from "../../../../public/images/aboutnew/curated.jpg";
import future from "../../../../public/images/about/future.jpg";
import top from "../../../../public/images/aboutnew/top.jpg";

import Image from "next/image";
function Whattoexpect() {
  // Sample data for cards
  const cardData = [
    {
      title: "Strategic Excellence",
      imgUrl: engaging,
      description:
        "Discover pioneering tools and techniques to craft campaigns that drive results and resonate with audiences.",
    },
    {
      title: "Cutting Edge Insights",
      imgUrl: curated,
      description:
        "Learn from global and regional leaders about emerging trends, ensuring your strategies remain future-ready.",
    },
    {
      title: "Impactful Results",
      imgUrl: top,
      description:
        "Dive into real-world success stories showcasing influencer collaborations that deliver measurable ROI.",
    },
    {
      title: "Icon Collaborations",
      imgUrl: future,
      description:
        "Forge partnerships with leading brands and agencies seeking authentic voices to tell their stories.",
    },
    {
      title: "Brand Growth",
      imgUrl: engaging,
      description:
        "Master the art of audience engagement, refine your content strategy, and build a lasting personal brand.",
    },
    {
      title: "New Horizons",
      imgUrl: top,
      description:
        "Explore exclusive opportunities for brand deals, mentorships, and innovative monetization strategies.",
    },
    {
      title: "Disruptive Tech",
      imgUrl: curated,
      description:
        "Present your cutting-edge MarTech and AdTech innovations to a room filled with decision-makers and trendsetters.",
    },
    {
      title: "Campaign Innovation",
      imgUrl: future,
      description:
        "Demonstrate how your solutions can revolutionize marketing strategies, enhance data insights, and drive exceptional outcomes.",
    },
    {
      title: "Elite Network",
      imgUrl: engaging,
      description:
        "Engage with CMOs, marketing heads, and influencers eager to integrate transformative tech into their campaigns.",
    },
  ];

  const offscreen = {
    y: 100,
    opacity: 0,
  };

  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.41,
    },
  };

  return (
    <div className="flex flex-col items-center  bg-white">
      <div className={`${anton.className} w-full`}>
        <h1 className="uppercase text-5xl relative z-10 text-center text-black leading-[62.4px] max-md:text-4xl max-md:leading-7 max-md:max-w-full max-md:mt-10 max-md:mb-5  top-[132px]">
          What to expect
        </h1>
        <Marquee
          gradient={false}
          speed={50}
          autoFill
          className="self-stretch w-full h-[200px] text-8xl text-center leading-[62.4px] text-black text-opacity-10 max-md:max-w-full "
        >
          <h2> &nbsp; EXPECT EVERYTHING UNEXPECTED!</h2>
        </Marquee>
      </div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`mt-10 text-2xl  sm:px-20 px-5 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        The Influence Exchange Confex & Awards in KSA is set to be an
        extraordinary experience, blending inspiration, learning, and
        celebration in the dynamic realm of influencer marketing. This event
        promises to deliver invaluable perspectives, actionable insights, and
        unmatched opportunities to propel your marketing and influencer
        collaborations to new heights.
      </motion.div>

      <div className="w-full max-md:mt-10 max-md:max-w-full sm:p-20 p-5">
        <div className="grid grid-cols-2 gap-x-[4%] gap-y-[1%] rounded-[36px] max-md:gap-0 max-md:grid-cols-1">
          {cardData.map((card, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="flex flex-col w-full h-full max-md:ml-0 max-md:w-full py-5 group"
              style={{ display: "flex" }}
            >
              <div
                className="flex overflow-hidden relative flex-col pt-20 max-md:mt-10 max-md:max-w-full h-full rounded-[36px]"
                style={{ flex: 1 }}
              >
                <Image
                  loading="lazy"
                  src={card.imgUrl}
                  alt={card.title}
                  className="object-cover absolute inset-0 size-full group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-[36px]"
                />
                <div
                  className="flex relative flex-col overflow-hidden px-6 pt-20 pb-8 mt-40 rounded-[36px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    flex: 1,
                  }}
                >
                  <div
                    className={`mt-12 text-5xl text-[#ccff00] uppercase leading-[62px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] ${anton.className}`}
                  >
                    {card.title}
                  </div>
                  <div
                    className={`mt-6 sm:text-2xl text-lg font-medium tracking-tighter leading-7 text-white max-md:max-w-full ${work_sans.className}`}
                  >
                    {card.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whattoexpect;
