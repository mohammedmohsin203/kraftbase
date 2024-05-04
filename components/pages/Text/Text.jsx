"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from 'react'
gsap.registerPlugin(ScrollTrigger);

const Text = () => {
    useGSAP(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#text",
              scrub: 1.5,
              start: "top 60%",
              end: "bottom 40%",
               
            },
          })
          .from("#text", {
            duration: 1,
            ease: "none",
            stagger: 1.5,
            opacity: 0.25,
            margin: 0,
          })
          .to("#text", {
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
              trigger: "#text1",
              scrub: 1.5,
              start: "top 60%",
              end: "bottom 40%",
               
            },
          })
          .from("#text1", {
            duration: 1,
            ease: "none",
            stagger: 1.5,
            opacity: 0.25,
            margin: 0,
          })
          .to("#text1", {
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
              trigger: "#text3",
              scrub: 1.5,
              start: "top 60%",
              end: "bottom 40%",
               
            },
          })
          .from("#text3", {
            duration: 1,
            ease: "none",
            stagger: 1.5,
            opacity: 0.25,
            margin: 0,
          })
          .to("#text3", {
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
              trigger: "#text4",
              scrub: 1.5,
              start: "top 60%",
              end: "bottom 40%",
               
            },
          })
          .from("#text4", {
            duration: 1,
            ease: "none",
            stagger: 1.5,
            opacity: 0.25,
            margin: 0,
          })
          .to("#text4", {
            duration: 1,
            ease: "none",
            stagger: 1.5,
            opacity: 0.25,
            margin: 0,
          });
      });
      

  return (
    <>
    <section className='w-full h-full'>
    <main>
        <div className=" text-center sm:h-[75dvh] h-[100dvh] sm:w-[30rem] w-full flex items-center leading-tight tracking-tight m-auto">
          <div className="flex flex-col gap-y-4">
            <h1 className="sm:text-[56px] text-[56px] font-[700]">
              A brand system equals higher value
            </h1>
            <span className="text-[24px] font-sans font-extralight text-gray-400 leading-8">
              A brand system is something every business needs. Trust us, we’ve
              seen what branding can do. It’s the best way to impress your
              customers and paint the right image.{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:h-[50dvh] h-[25dvh] w-full text-center  ">
          <span
            id="text"
            className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  sm:text-8xl text-5xl opacity-1"
          >
            Brand Identity
          </span>
        </div>
        <div className="flex flex-col sm:h-[50dvh] h-[25dvh] w-full text-center  ">
          <span
            id="text1"
            className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  sm:text-8xl text-5xl opacity-1"
          >
            Brand Book
          </span>
        </div>
        <div className="flex flex-col sm:h-[50dvh] h-[25dvh] w-full text-center  ">
          <span
            id="text3"
            className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  sm:text-8xl text-5xl opacity-1 h-full"
          >
            Logotype
          </span>
        </div>
        <div className="flex flex-col sm:h-[50dvh] h-[25dvh] w-full text-center  ">
          <span
            id="text4"
            className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  sm:text-8xl text-5xl opacity-1"
          >
            Promo Materials
          </span>
        </div>
      </main>
    </section>
    </>
  )
}

export default Text