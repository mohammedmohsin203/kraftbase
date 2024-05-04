import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#f6f6f6]  w-screen  text-xs">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-4 px-4 sm:px-[2.5rem] py-6 lg:py-8 md:grid-cols-5 ">
            <div>
              <h2 className="mb-6  text-xs font-semibold text-gray-900   dark:text-white">
                Design
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Advantages
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-xs font-semibold text-gray-900   dark:text-white">
                Branding
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Elements of Branding
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Advantages
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-xs font-semibold text-gray-900   dark:text-white">
                Developement
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Technology Stack
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Desktop Dev
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Mobile Dev
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-xs font-semibold text-gray-900   dark:text-white">
                About
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Mission
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Values
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Clients
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-xs font-semibold text-gray-900   dark:text-white">
                Social Networks
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Dribble
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Behance
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Medium
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-[#f6f6f6] dark:bg-gray-700 md:flex md:items-center md:justify-between text-gray-500 ">
            <span className=" text-xs text-gray-500 dark:text-gray-300 sm:text-center">
              Copyright © 2021 Outcrowd Inc. All rights reserved.
            </span>
            USA
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
