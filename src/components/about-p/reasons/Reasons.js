"use client";

import { work_sans, anton } from "@/styles/fonts";
import { FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";
import { GiTrophyCup, GiGrowth, GiMagnifyingGlass } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";
import { IoIosFlash } from "react-icons/io";
import { motion } from "framer-motion";

const content = [
  {
    icon: BiBrain, // Strategic thinking
    title: "Unlock Strategic Excellence",
    text: "Discover pioneering tools and techniques to craft campaigns that drive results and resonate with audiences.",
  },
  {
    icon: IoIosFlash, // Innovation/speed
    title: "Stay on the Cutting Edge",
    text: "Learn from global and regional leaders about emerging trends, ensuring your strategies remain future-ready.",
  },
  {
    icon: GiTrophyCup, // Achievement
    title: "Achieve Impactful Results",
    text: "Dive into real-world success stories showcasing influencer collaborations that deliver measurable ROI.",
  },
  {
    icon: FaHandshake, // Partnership
    title: "Collaborate with Icons",
    text: "Forge partnerships with leading brands and agencies seeking authentic voices to tell their stories.",
  },
  {
    icon: GiGrowth, // Growth/Success
    title: "Grow Your Brand",
    text: "Master the art of audience engagement, refine your content strategy, and build a lasting personal brand.",
  },
  {
    icon: FaRocket, // New opportunities/launch
    title: "Access New Horizons",
    text: "Explore exclusive opportunities for brand deals, mentorships, and innovative monetization strategies.",
  },
  {
    icon: HiSparkles, // Innovation/disruption
    title: "Showcase Disruptive Technologies",
    text: "Present your cutting-edge MarTech and AdTech innovations to a room filled with decision-makers and trendsetters.",
  },
  {
    icon: FaLightbulb, // Ideas/innovation
    title: "Redefine Campaigns",
    text: "Demonstrate how your solutions can revolutionize marketing strategies, enhance data insights, and drive exceptional outcomes.",
  },
  {
    icon: GiMagnifyingGlass, // Discovery/expertise
    title: "Collaborate with the Best",
    text: "Engage with CMOs, marketing heads, and influencers eager to integrate transformative tech into their campaigns.",
  },
];
function Reasons() {
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
    <div className=" bg-white w-full max-md:pt-10 max-md:max-w-full sm:p-20 p-5 ">
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="self-stretch mt-20 w-full sm:text-4xl my-32 text-3xl italic font-bold  leading-7 text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
      >
        <span className="font-bold  italic">
          What Awaits You at the{" "}
          <span className="font-bold italic text-[#51B6FF]">7th Edition?</span>
        </span>
      </motion.div>

      <motion.section
        className={`mx-auto grid  sm:grid-cols-3 grid-cols-1 gap-20  ${work_sans.className} `}
      >
        {content.map(({ icon: Icon, title, text }) => (
          <motion.div
            initial={offscreen}
            whileInView={onscreen}
            viewport={{ once: true, amount: 0.3 }}
            key={title}
            className="flex flex-col items-center gap-4 group"
          >
            <span
              className="p-8 mb-4 flex sm:scale-100 scale-80  h-32 w-32 items-center justify-center rounded-[1.8rem]  bg-black
            group-hover:transform group-hover:-translate-y-2 transition-transform duration-300
            group-hover:shadow-lg
             "
            >
              <Icon className="h-12 w-12 text-[#ccff00]" />
            </span>
            <h3 className="mb-2 text-xl font-semibold text-black text-center">
              {title}
            </h3>
            <p className="text-lg  text-gray-600 text-justify">{text}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}

export default Reasons;
