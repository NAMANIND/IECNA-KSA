"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";

import { motion } from "framer-motion";

import Image from "next/image";

function Mainsponsors() {
  // Define data for sponsors
  const sponsors = [
    {
      title: "Silver Sponsor",
      name: "Collective Artists Network",
      description:
        "Collective Artists Network is India's leading integrated new media company, built at the intersection of content, talent, technology, and commerce. With one of the country's most influential rosters of talent, Collective shapes the way brands, communities, and audiences interact with popular culture. Through its growing ecosystem - spanning creator platforms, youth communities, original IPs, and data-led brand partnerships - Collective seamlessly blends storytelling with distribution and cultural insight.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2FCover%20image.png?alt=media&token=5b83e66a-877f-42c2-adfe-f044a5ae5410",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Flogo.png?alt=media&token=c066e2e5-1fc3-4e4a-826b-956b0e82dda9",
      link: "https://collectiveartists.com/",
      special: true,
    },
    {
      title: "Silver Sponsor",
      name: "Yaqoot & Zumurod Co.",
      description:
        'Established in 2008 in Riyadh, Yaqoot & Zumurod (Y&Z) is an integrated marketing and communications company. Y&Z offers a comprehensive range of services, including corporate communication, public relations, market research, and event management. We pride ourselves on a "warrior\'s mindset," combining innovation, creativity, and an analytical approach to help clients achieve their marketing goals and enhance their brand identity.',
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Fyzog.png?alt=media&token=3d0abcf9-d131-432f-90ac-7fc2e4c3ee37",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Fyz-lo.png?alt=media&token=2b1954eb-b811-4c96-921f-68ac12a67e42",
      link: "https://ynz.sa/",
      special: true,
    },

    {
      title: "Silver Sponsor",
      name: "Social Tweebs",
      description:
        "Social Tweebs is a data-driven, end-to-end influencer marketing agency helping India's leading brands optimise 20–50% of their influencer spend through a powerful blend of intelligence, creativity, and AI-led technology. With a 60+ member team across Mumbai, Delhi, and Bangalore, we partner with brands as strategic consultants to craft content-first campaigns, identify credible creators, and deliver measurable impact. Our proprietary platform - The Tweeb Tool, powers every stage of the influencer journey with data & science, from discovery and insights to fraud detection and performance reporting, ensuring credibility, precision and transparency. Having executed numerous successful campaigns for marquee brands such as Dubai Tourism, Samsung, Coca-Cola, McDonald's, Hero MotoCorp, Harley-Davidson, Domino's, Shoppers Stop, Galderma, AMD, and Cipla, we bring scale, strategy, and storytelling together to transform influencer marketing into a reliable growth engine for brands.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Fsot-cover.png?alt=media&token=d0a6aeb8-5dc8-4081-bcf4-0d3081b5d548",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Fsot-logo.png?alt=media&token=c24397b5-874c-4489-b6eb-12de8b9ad8ea",
      link: "https://www.socialtweebs.com/",
      special: true,
    },

    {
      title: "Supporting Partner",
      name: "Lasting Impact",
      description:
        "Lasting Impact is an innovative advertising and marketing company that transforms ideas into powerful campaigns with measurable results. Built on creativity, strategy, and technology, the company delivers integrated solutions in branding, digital media, influencer marketing, and content production. With a focus on storytelling that resonates, Lasting Impact helps clients capture attention, engage communities, and drive growth across local and international markets. The company's philosophy is rooted in creating campaigns that do more than sell—they inspire, connect, and leave a meaningful mark. At Lasting Impact, advertising is not just about visibility, but about shaping narratives that endure.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Fli-cover.png?alt=media&token=c77bd26a-191a-4a27-9c49-7ec767c86b02",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Fli-logo.png?alt=media&token=0f4549c9-93ad-4178-9285-ca6eeb85042d",
      link: "https://lastingimpact-sa.com/",
      special: true,
    },

    {
      title: "Supporting Partner",
      name: "Trust Corp",
      description:
        "Trust Corp, a visionary holding company, integrates four specialized divisions: Trust Advisory, Trust Pro, Trust Hive, and Trust Minds under one mission: to deliver transformative, cross-sector impact. By combining, Business Consulting, Marketing, Branding , Creative Strategies, Training and Development, Innovation, Market Research and Business Intelligence the company drives progress with a global vision and local agility, empowering organizations to break boundaries and achieve sustainable growth through unified excellence and strategic synergy.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Ftclg.png?alt=media&token=c569e82b-a53f-4355-ad67-b2e5fd3dbce7",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/iena-597b2.appspot.com/o/sponsors%2Fcitc.png?alt=media&token=95186f0d-1a2e-49ec-acdc-d9d2b3cf0004",
      link: "http://www.trustcorpgroup.com/",
      special: true,
    },

    {
      title: "Event contracting partner",
      name: "Pro Expo",
      description:
        "Pro Expo Ltd, based in Kenya, specializes in creative exhibition and stand construction solutions for events and conferences. Since 2016, the company has delivered over 870,000 square meters of stands across 46 exhibitions, serving diverse sectors like health, technology, hospitality, and automotive. Renowned for its efficiency and high-quality service, Pro Expo offers customized event setups, branding, and AV equipment hire. With a strong track record of delivering major projects like Medic East Africa and China Trade Week, Pro Expo is a trusted partner for businesses across East Africa and beyond.",
      imageUrl: "https://uae.theiena.com/images/sponsors/uae/og/proexpo.png",
      logoUrl: "https://uae.theiena.com/images/sponsors/uae/proexpo.png",
      link: "https://www.pro-expo.co.ke/",
      special: true,
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
    <div
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[250px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[130%] max-md:text-4xl ${anton.className} `}
      >
        OUR SPONSORS
      </motion.div>
      {/* <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-2xl font-medium tracking-tighter leading-[130%] text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        We extend our sincere gratitude to our valued sponsors for their
        <br />
        support and contribution towards the success of the event.
      </motion.div> */}
      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[2%] gap-y-14 flex-wrap  max-md:flex-col max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[32%] max-md:ml-0 max-md:w-full"
            >
              <div
                className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter 
              group
               leading-[130%] text-white bg-black rounded-[36px] max-md:mt-6"
              >
                <div className="overflow-hidden rounded-t-[36px]">
                  <img
                    loading="lazy"
                    src={sponsor.imageUrl}
                    className="w-full aspect-[2.38] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <motion.div
                  initial={offscreen}
                  whileInView={onscreen}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col px-11 mt-7 max-md:px-5"
                >
                  <div className="self-center font-medium text-center">
                    {sponsor.title}
                  </div>
                  <div className="mt-9 font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-[130%]">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    {sponsor.special ? (
                      <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                      />
                    ) : (
                      <Image
                        loading="lazy"
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                      />
                    )}
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mainsponsors;
