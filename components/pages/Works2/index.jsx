import React from 'react'
import Image from 'next/image'
import short from "../../../public/Short.jpg";
import planer from "../../../public/Planet.jpg";
import clover from "../../../public/Clover.jpg";
import veni from "../../../public/veni.jpg";
import shorticon from "../../../public/shorticon.svg";
import planeticon from "../../../public/planeticon.svg";
import clovericon from "../../../public/clovericon.svg";
import veniicon from "../../../public/veniicon.svg"

const index = () => {
  return (
    <>
           <main>
          <div className="sm:w-[50%] w-[75%]  text-left sm:mx-[8rem] mx-[2rem] py-[4rem] flex flex-col ">
            <h1 className="text-[56px] font-[700]">Our Works</h1>
            <p>
              You don’t have to take our word for anything. Here, take a look at
              some of the stuff we’ve done. It perfectly showcases our approach,
              our values, and our work ethic.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 w-screen sm:p-8 p-0 items-center sm:gap-y-8 gap-y-0 ">
              <div className="relative">
                <Image
                  className="sm:h-[85dvh] h-[25dvh] w-screen "
                  src={short}
                  alt=""
                />
                <div className="absolute sm:w-[25%] w-[75%] h-full top-0 left-0 rounded-full text-white sm:text-sm text-xs  sm:justify-center justify-start  items-start sm:pl-0 p-[1rem] sm:items-center flex flex-col sm:mx-[4rem] mx-0 ">
                  <Image
                    src={shorticon}
                    alt=""
                    className="sm:w-[25rem] sm:h-[7.5rem] w-[7.5rem] h-[2.5rem]"
                  />
                  <p className="text-sm  leading-6 mt-[2rem] sm:block hidden">
                    Everyone is using tons of tools on a daily basis. Our team
                    has been working with Short.io - a link management platform-
                    for a while: from logo & branding which defined further look
                    and feel of the whole website with illustrations and to the
                    tool itself.
                  </p>
                  <a
                    className=" text-blue-500 text-md mt-6 text-left sm:block hidden"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  className="sm:h-[75dvh] h-[25dvh] w-screen"
                  src={planer}
                  alt=""
                />{" "}
                <div className="absolute sm:w-[25%] w-[75%] h-full top-0 left-0 rounded-full text-white sm:text-sm text-xs  sm:justify-center justify-start  items-start sm:pl-0 p-[1rem] sm:items-center flex flex-col sm:mx-[4rem] mx-0 ">
                  <Image
                    src={planeticon}
                    alt=""
                    className="sm:w-[25rem] sm:h-[7.5rem] w-[7.5rem] h-[2.5rem]"
                  />
                  <p className="text-sm  leading-6 mt-[2rem] sm:block hidden">
                    Full branding project for canned mineral water Planet. We’ve
                    created naming, packaging design, promotional materials
                    based in 3D.
                  </p>
                  <a
                    className=" text-white text-md mt-6 text-left sm:block hidden"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  className="sm:h-[75dvh] h-[25dvh]w-screen"
                  src={clover}
                  alt=""
                />{" "}
                <div className="absolute sm:w-[25%] w-[75%] h-full top-0 left-0 rounded-full text-white sm:text-sm text-xs  sm:justify-center justify-start  items-start sm:pl-0 p-[1rem] sm:items-center flex flex-col sm:mx-[4rem] mx-0 ">
                  <Image
                    src={clovericon}
                    alt=""
                    className="sm:w-[25rem] sm:h-[7.5rem] w-[7.5rem] h-[2.5rem]"
                  />
                  <p className="text-sm  leading-6 mt-[2rem] sm:block hidden">
                    Our team is proud of having transformed the great idea into
                    a perfect digital product with recognizable branding. Any
                    credit card company has never been that stylish and dope
                    before.
                  </p>
                  <a
                    className=" text-blue-500 text-md mt-6 text-left sm:block hidden"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  className="sm:h-[75dvh] h-[25dvh] w-screen"
                  src={veni}
                  alt=""
                />{" "}
                <div className="absolute sm:w-[25%] w-[75%] h-full top-0 left-0 rounded-full text-white sm:text-sm text-xs  sm:justify-center justify-start  items-start sm:pl-0 p-[1rem] sm:items-center flex flex-col sm:mx-[4rem] mx-0 ">
                  <Image
                    src={veniicon}
                    alt=""
                    className="sm:w-[25rem] sm:h-[7.5rem] w-[7.5rem] h-[2.5rem]"
                  />
                  <p className="text-sm  leading-6 mt-[2rem] sm:block hidden">
                    COVID-19 made a lot of offline businessmen think about how
                    to move their products to a new level. Veni was one of them
                    and we accelerated the growth of a small business thanks to
                    a thoughtful marketing strategy and branding materials.
                  </p>
                  <a
                    className=" text-blue-500 text-md mt-6 text-left sm:block hidden"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default index