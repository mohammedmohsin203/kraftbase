import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {

  return (
    <div className="w-full h-full sm:px-[5rem] px-0  mb-[3rem]">
      <h1 className=" font-sans font-bold text-4xl text-left w-full mb-[3rem]">
        FAQ
      </h1>
      <Accordion
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="How long does it take to get started ?"
        >
          Our turnaround is lightning-fast. Just one week from signing off and
          we’re there with the kick-off meeting to get it rolling.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="What is your typical work process ?"
        >
          It all starts with grabbing a cup of coffee, chilling with mates, and
          some quality time at the PlayStation (just kidding!). We always start
          a project with analysis, learning the requirements, and making
          estimates that will be shared in the price proposal. Then it’s off to
          signing off, kicking off, and getting your business to the next level
          with a pinch of our design magic.
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Do you work on a fixed-basis time or material ?"
        >
          Flexibility is the key of success in this crazy world, so we try to
          suggest an appropriate solution for each specific case we deal with.
          The more clear and detailed the requirements are, the more accurate
          will our estimates be. This is the closest we get to the fixed-price
          model.
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 3"
          title="Do you guys work with big companies only ?"
        >
          We’re all for building a borderless world, so we are open to working
          with any project we come across. By the way, we do believe in
          startups, and one of those we helped develop from scratch has been
          sold to https://entercom.com/
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 3"
          title="How do you usually start new collaborations ?"
        >
          Each new engagement starts with an introduction call and filling out
          the design/branding brief. If you have a cool project in mind, feel
          free to get in touch at hello@outcrowd.io
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Accordion 3"
          title="How long it take to get estimate from you ?"
        >
          We hate to keep you waiting. Setting up a team, making preliminary
          research and analysis, and getting back to you with the contract will
          take up to 24 hours from the moment we learn what’s needed. Efficiency
          is one of Outcrowd’s key values.
        </AccordionItem>
        <AccordionItem
          key="12"
          aria-label="Accordion 3"
          title="Do you have a minimum engagement ?"
        >
          We set no entry thresholds for people who want to work with us. But we
          still believe that a product that needs to be designed can’t be made
          within a couple of days. After all, we need some time to research,
          analyze and come up with a strategy. So we’ve set a minimum project
          duration as 30 hours and we’re waiting for you!
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="Accordion 3"
          title="What is the avg. project duration?"
        >
          Our team works full-time on every project, so the overall duration
          will highly depend on the initial estimate. On average, our projects
          last from 2 weeks to 5 months.
        </AccordionItem>
        <AccordionItem
          key="8"
          aria-label="Accordion 3"
          title="Can we start design without wireframes ?"
        >
          Wireframes help to build UX without distractions. The wireframe is an
          essential part of the design process and we would not recommend
          eliminating it. Having everything polished at the wireframing stage,
          we can avoid many amendments and revisions at the design stage, which
          saves both time and money.
        </AccordionItem>
        <AccordionItem
          key="9"
          aria-label="Accordion 3"
          title="How long it take to get estimate from you ?"
        >
          We hate to keep you waiting. Setting up a team, making preliminary
          research and analysis, and getting back to you with the contract will
          take up to 24 hours from the moment we learn what’s needed. Efficiency
          is one of Outcrowd’s key values.
        </AccordionItem>
        <AccordionItem
          key="10"
          aria-label="Accordion 3"
          title="What template are you using ?"
        >
          We don’t use pre-built templates or kits because there’s just no soul
          in them. We’re committed to building fully customized and
          product-based solutions that will meet the expectations of the target
          users. Each pixel and line is designed with love and passion by our
          creative minds.
        </AccordionItem>
        <AccordionItem
          key="11"
          aria-label="Accordion 3"
          title="Where should I start my business ?"
        >
          Hey, you’ve come to the right place! Please get in touch and we’ll
          help you with the ideation, design, and development. Full cycle on us,
          no hassle for you. Easy, right?
        </AccordionItem>
      </Accordion>
    </div>
  );
}
