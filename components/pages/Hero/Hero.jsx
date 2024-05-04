"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import main from "../../../public/main.png";
import tab from "../../../public/tab.png";
import phone from "../../../public/phone.png";
import speaker from "../../../public/speaker.svg";
import cup from "../../../public/cup.png";
import card from "../../../public/card (2).png";
import pen from "../../../public/pen.png";
import tracker from "../../../public/tracker.svg";
import watch from "../../../public/watch.svg";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#main",
          scrub: 1,
          start: "top 60%",
          end: "bottom 40%",
        },
      })
      .to("#main", {
        duration: 1,
        ease: "none",
        stagger: 0.1,
        margin: 0,
        yPercent: 147,
        xPercent: -1,
        scale: 0.1,
        filter: "blur(0px)",
      });
  },[]); 

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#span",
          scrub: 1,
          start: "top 50%",
          end: "top 40%",
        },
      })
      .to("#span", {
        duration: 1,
        ease: "none",
        stagger: 1,
        opacity: 1,
      });
  });
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#photo",
          scrub: 1,
          start: "top 50%",
          end: "top 40%",
        },
      })
      .to("#photo", {
        duration: 1,
        ease: "none",
        stagger: 0.11,
        paddingTop: 0,
        
      });
  });

  return (
    <div>
      <section className="flex flex-col items-center justify-center  w-full">
        <div>
          <div className=" text-center h-screen  ">
            <div className="w-full h-full flex items-center justify-center relative ">
              <Image
                src={main}
                alt="image"
                id="main"
                width={1440}
                height={1440}
                className=" blur-[12px] "
              />
              <div className="absolute sm:w-full h-full top-0 left-0">
                <div className="flex flex-col">
                  <h1 className="sm:text-[10rem] text-[3.5rem] font-bold">
                    Branding
                  </h1>
                  <span className="text-[32px] font-sans font-extralight">
                    The essence of your business
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen w-full font-sans font-bold  flex flex-col text-center text-[56px]">
            We make it
            <span
              id="span"
              className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text opacity-0"
            >
              Outstanding
            </span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-6 grid-rows-6 sm:m-[5rem] m-0 ">
        <div className="row-span-2 pt-[50dvh]" id="photo" >
          {" "}
          <Image
            src={cup}
            width={500}
            height={500}
            alt="img"
            className="scale-150 translate-x-2 sm:translate-x-12"
          />
        </div>
        <div className="row-span-2 col-start-1 row-start-3 pt-[50dvh]"id="photo">
          {" "}
          <Image
            src={card}
            width={500}
            height={500}
            alt="img"
            className="scale-150  translate-y-[-4rem] sm:translate-y-[-1.5rem] translate-x-1 sm:translate-x-12"
          />
        </div>
        <div className="row-span-3 col-start-2 row-start-1 pt-[50dvh]"id="photo">
          {" "}
          <Image src={pen} width={100} height={100} alt="img" className="translate-x-2 sm:translate-x-12"  />
        </div>
        <div className="row-span-4 col-start-2 sm:row-start-4 row-start-5 pt-[2.5rem]"id="photo">
          {" "}
          <Image
            src={tracker}
            width={50}
            height={50}
            alt="img"
            id="photo"
            className=" sm:translate-x-16 translate-x-2 sm:translate-y-0 translate-y-[-4rem] pt-[50dvh]"
          />
        </div>
        <div className="col-span-2 row-span-6 col-start-3 row-start-1">
          {" "}
          <Image src={tab} width={500} height={500} alt="img" />
        </div>
        <div className="row-span-4 col-start-5 row-start-1 pt-[50dvh]"id="photo">
          {" "}
          <Image src={speaker} width={780} height={780} alt="img"  />
        </div>
        <div className="row-span-8 col-start-6 row-start-1 pt-[50dvh]"id="photo">
          <Image src={watch} width={780} height={780} alt="img"   />
        </div>
        <div className="row-span-2 col-start-5 row-start-2 pt-[50dvh]"id="photo">
          {" "}
          <Image src={phone} width={780} height={780} alt="img" className="translate-y-[-1.5rem]" />
        </div>
        <div className="row-span-2 col-start-5 row-start-4 pt-[50dvh]"id="photo">
          {" "}
          <Image src={card} width={780} height={780} alt="img" className=" translate-y-[-4rem] sm:translate-y-[-1.5rem] scale-1 sm:scale-150" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
