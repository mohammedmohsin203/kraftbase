import React from "react";
import Image from "next/image"
import light from "../../../public/light6.svg";
import light1 from "../../../public/light1.svg";
import light2 from "../../../public/light2.svg";
import light3 from "../../../public/light3.svg";
import light5 from "../../../public/light5.svg";
import light4 from "../../../public/light4.svg";


const index = () => {
  return (
    <>
      <div className="pt-[10rem] ">
        <h1 className="sm:text-[56px] text-[56px] font-[700] text-left sm:pl-[4rem] pl-[0rem] ">
          Why Us ?
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-[80dvw] m-[6rem] justify-center text-xs justify-self-start content-center items-start">
        <div>
          <Image src={light} height={75} width={75} alt="image" />
          <div className="text-black font-bold text-left my-4">
            Business-centered approach{" "}
          </div>
          <p className="text-gray-400 text-left w-[80%]">
            Everything we do is geared toward your strategic goals. Essentially,
            our designs are an effective way to make your business successful.
          </p>{" "}
        </div>
        <div>
          <Image src={light1} height={75} width={75} alt="image" />
          <div className="text-black font-bold text-left my-4">
            Strong marketing tools{" "}
          </div>
          <p className="text-gray-400 text-left w-[80%]">
            Marketing and design are inextricably linked. We know just how to
            make them complement each other.
          </p>{" "}
        </div>
        <div>
          <Image src={light2} height={75} width={75} alt="image" />
          <div className="text-black font-bold text-left my-4">
            Close communication{" "}
          </div>
          <p className="text-gray-400 text-left w-[80%]">
            We have found that keeping in touch with our clients accounts for
            60% of a given project’s success.
          </p>{" "}
        </div>
        <div>
          <Image src={light3} height={75} width={75} alt="image" />
          <div className="text-black font-bold text-left my-4">
            Meeting the deadlines{" "}
          </div>
          <p className="text-gray-400 text-left w-[80%]">
            We hate falling behind on a project just as much as our clients.
            That’s why we never do it.
          </p>{" "}
        </div>
        <div>
          <Image src={light5} height={75} width={75} alt="image" />
          <div className="text-black font-bold text-left my-4">
            Future-proof results{" "}
          </div>
          <p className="text-gray-400 text-left w-[80%]">
            Fads are fine, but some things are timeless. We make every effort to
            stay on the cutting edge of design.
          </p>{" "}
        </div>
        <div>
          <Image src={light4} height={75} width={75} alt="image" />
          <div className="text-black font-bold text-left my-4">
            Exceeding expectations
          </div>
          <p className="text-gray-400 text-left w-[80%]">
            You know why we really care about your success? Because it motivates
            us like nothing else! So it’s a win-win situation.
          </p>{" "}
        </div>
      </div>
    </>
  );
};

export default index;
