"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";
import Image from "next/image";
import soun from "../../../public/soun.png";
import logo from "../../../public/logo (2).png";
import arrow from "../../../public/arrow (2).svg";
import dark1 from "../../../public/dark1.svg";
import dark2 from "../../../public/dark2.svg";
import dark3 from "../../../public/dark3.svg";
import dark4 from "../../../public/dark4.svg";
import dark5 from "../../../public/dark5.svg";
import font from "../../../public/font.png";
import color from "../../../public/color.png";
import element from "../../../public/element.png";


gsap.registerPlugin(ScrollTrigger);
const Elements = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#img1",
          scrub: 1.5,
          start: "top 60%",
          end: "bottom 40%",
        },
      })
      .from("#img1", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      })
      .to("#img1", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      });
  });
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#img2",
          scrub: 1.5,
          start: "top 60%",
          end: "bottom 40%",
           
        },
      })
      .from("#img2", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      })
      .to("#img2", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      });
  });
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#img3",
          scrub: 1.5,
          start: "top 60%",
          end: "bottom 40%",
           
        },
      })
      .from("#img3", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      })
      .to("#img3", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      });
  });
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#img4",
          scrub: 1.5,
          start: "top 60%",
          end: "bottom 40%",
           
        },
      })
      .from("#img4", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      })
      .to("#img4", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      });
  });
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#img5",
          scrub: 1.5,
          start: "top 60%",
          end: "bottom 40%",
           
        },
      })
      .from("#img5", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      })
      .to("#img5", {
        duration: 1,
        ease: "none",
        stagger: 1.5,
        opacity: 0.25,
        margin: 0,
      });
  });
  return (
    <>
      <main>
        <div className=" text-center h-full w-screen bg-black pt-8  items-center justify-center leading-tight tracking-tight flex flex-col p-4" >
          <div className="flex flex-col gap-y-4">
            <h1 className="sm:text-[56px] text-[56px] font-[700] text-white">
              Elements of Branding{" "}
            </h1>
            <span className="text-[24px] font-sans font-extralight text-gray-400 leading-8 ">
              The logo encapsulates the idea behind the brand. <br />
              We know how to make it work for you. <br />
              Colors add a touch of soul that will
              <br />
              resonate better with your customers.
            </span>
          </div>
          <div className="flex justify-center w-full mt-12 " id="img1">
            <Image
              src={soun}
              width={700}
              height={50}
              alt="image"
              className="opacity-1"
            />
          </div>
          <div className="flex justify-center w-full mt-12 " id="img2">
            <Image
              src={logo}
              width={700}
              height={50}
              alt="image"
              className="opacity-1"
            />
          </div>
          <div className="flex justify-center w-full mt-12 " id="img3">
            <Image
              src={font}
              width={700}
              height={50}
              alt="image"
              className="opacity-1"
            />
          </div>
          <div className="flex justify-center w-full mt-12 " id="img4">
            <Image
              src={color}
              width={700}
              height={50}
              alt="image"
              className="opacity-1"
            />
          </div>
          <div className="flex justify-center w-full mt-12 " id="img5">
            <Image
              src={element}
              width={700}
              height={50}
              alt="image"
              className="opacity-1"
            />
          </div>
          {/* Here the Secret page is directly intergreted with this page  */}
          <div className="pt-[10rem] ">
            <h1 className="sm:text-[56px] text-[36px] font-[700] text-white text-left sm:pl-8 pl-2">
              What &#39;s our secret?
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 w-[80dvw] m-[2.5rem] justify-self-start content-center items-start text-xs">
            <div>
              <Image src={arrow} height={75} width={75} alt="image" />
              <div className="text-white font-bold text-left my-4">
                Right on target
              </div>
              <p className="text-gray-400 text-left w-[80%] m-2">
                Branding doesn’t exist in a vacuum. It’s a way to achieve
                business goals. We always keep that in mind.
              </p>{" "}
            </div>
            <div>
              <Image src={dark1} height={75} width={75} alt="image" />
              <div className="text-white font-bold text-left my-4">
                Customer principle
              </div>
              <p className="text-gray-400 text-left w-[80%] m-2 ">
                At the end of the day, it’s all about the customers. They are
                the ones who will be the ultimate judges. 
              </p>{" "}
            </div>
            <div>
              <Image src={dark2} height={75} width={75} alt="image" />
              <div className="text-white font-bold text-left my-4">
                Brand value
              </div>
              <p className="text-gray-400 text-left w-[80%] m-2">
                We go beyond creating beautiful visuals. We unleash a hidden
                potential to increase your brand value. Sounds too good to be
                true? Try us!
              </p>{" "}
            </div>
            <div>
              <Image src={dark3} height={75} width={75} alt="image" />
              <div className="text-white font-bold text-left my-4">
                Future-proof results
              </div>
              <p className="text-gray-400 text-left w-[80%] m-2">
                Businesses run for years and decades. We make sure your branding
                doesn’t lag behind. Think of it as a long-term strategic
                investment.
              </p>{" "}
            </div>
            <div>
              <Image src={dark4} height={75} width={75} alt="image" />
              <div className="text-white font-bold text-left my-4">
                Bragging rights
              </div>
              <p className="text-gray-400 text-left w-[80%] m-2">
                Our branding solutions will always leave you feeling proud.
                You’ll want to plaster your new branding over every surface,
                just so everyone can see how cool it is!
              </p>{" "}
            </div>
            <div>
              <Image src={dark5} height={75} width={75} alt="image" />
              <div className="text-white font-bold text-left my-4">
                Exceeding expectations
              </div>
              <p className="text-gray-400 text-left w-[80%] m-2">
                We always go above and beyond. Why? Because we’re a team of
                perfectionists who love seeing their clients happy.
              </p>{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Elements;
