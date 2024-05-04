"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import tab1 from "../../../public/tab2.png";
import tab4 from "../../../public/tab1.png";
import tab2 from "../../../public/tab3.png";
import tab3 from "../../../public/tab4.png";
import phone2 from "../../../public/phone2.png";
import phone1 from "../../../public/phone1.png";
import tab6 from "../../../public/tab6.png";
import lap1 from "../../../public/lap2.png";
import lap2 from "../../../public/lap3.png";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#img",
          scrub: 2,
          start: "top 40%",
          end: "top 10%",
           duration:1
        },
      })

      .to("#img", {
        duration: 1,
        ease: "none",
        stagger: 0.1,
        paddingTop: 0,
        
      });
  });
  return (
    <>
      <div className="pt-[5rem] w-full sm:pl-12 pl-0">
        <h1 className="sm:text-[56px] text-[36px] font-[600]  text-left sm:ml-20 ml-2">
          We work with all <br />
          kinds of clients
        </h1>
      </div>
        <div className="grid grid-cols-2  w-[50%] justify-center items-center text-xs">
          <div className="scale-[2] sm:translate-x-[-4rem] translate-x-[-2rem] ">
            <Image src={tab1} height={1080} width={1080} alt="image" id="img" className="sm:pt-[6rem] pt-[2rem]" />
          </div>
          <div className=" rotate-[-1deg]">
            <Image src={tab2} height={1080} width={1080} alt="image"id="img" className="sm:pt-[6rem] pt-[2rem]" />
          </div>
          <div>
            <Image
              src={tab3}
              height={1080}
              width={1080}
              alt="image"
              id="img" className="sm:pt-[6rem] pt-[2rem]"
            />
          </div>
          <div>
            <Image src={phone1} height={250} width={250} alt="image" />
          </div>
          <div className="pl-[4rem] scale-[2.5] translate-x-[-6rem] sm:visible hidden ">
            <Image
              src={lap1}
              height={2170}
              width={2170}
              alt="image"
              id="img" className="sm:pt-[6rem] pt-[2rem]"
            />
          </div>
          <div>
            <Image src={tab4} height={1080} width={1080} alt="image" id="img" className="sm:pt-[6rem] pt-[2rem]" />
          </div>
          <div className="scale-[1.5]">
            <Image src={tab1} height={1080} width={1080} alt="image" id="img" className="sm:pt-[6rem] pt-[2rem] " />
          </div>
          <div className="scale-[1.5] ">
            <Image src={tab6} height={1080} width={1080} alt="image" id="img" className="sm:pt-[6rem] pt-[2rem]" />
          </div>
          <div className="scale-[1.75] sm:scale-[2] translate-x-[2rem] sm:translate-x-[8rem] translate-y-[1rem] sm:translate-y-[2rem]">
            <Image src={lap2} height={1080} width={1080} alt="image" id="img" className="sm:pt-[6rem] pt-[2rem]" />
          </div>
        </div>
    </>
  );
};

export default Work;
