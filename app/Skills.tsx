import React from "react";
import { Carousel } from "react-carousel3";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto w-full px-6 mt-10 lg:mt-[2rem]"
    >
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl lg:text-5xl font-semibold"
      >
        Skills
      </motion.h1>
      <div className="hidden md:block py-6 max-w-4xl mx-auto">
        <Carousel
          height={500}
          width={900}
          yOrigin={42}
          yRadius={70}
          xRadius={500}
          autoPlay={true}
        >
          <div className="w-80 flex flex-col text-center bg-slate-100 shadow-md rounded-xl py-4 px-4">
            <div className="flex items-center w-full justify-center gap-2 pb-4">
              <h1 className="text-xl font-semibold">Frontend</h1>
              <Image
                src="/images/frontend.gif"
                alt="frontend gif"
                width={30}
                height={30}
              />
            </div>
            <ul className="font-medium text-gray-600">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Redux Toolkit</li>
              <li>TailwindCSS</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="w-80 flex flex-col text-center bg-slate-100 shadow-md rounded-xl py-4 px-4">
            <div className="flex items-center w-full justify-center gap-2 pb-4">
              <h1 className="text-xl font-semibold">Backend</h1>
              <Image
                src="/images/backend.gif"
                alt="backend gif"
                width={30}
                height={30}
              />
            </div>
            <ul className="font-medium text-gray-600">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST API</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="w-80 flex flex-col text-center bg-slate-100 shadow-md rounded-xl py-4 px-4">
            <div className="flex items-center w-full justify-center gap-2 pb-4">
              <h1 className="text-xl font-semibold">Miscellaneous</h1>
              <Image
                src="/images/miscellaneous.gif"
                alt="miscellaneous gif"
                width={30}
                height={30}
              />
            </div>
            <ul className="font-medium text-gray-600">
              <li>Java</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Linux</li>
              <li>Nginx</li>
              <li>Python</li>
            </ul>
          </div>
        </Carousel>
      </div>
      <div className="md:hidden py-6 grid grid-cols-1 gap-y-5">
        <div className="w-full flex flex-col text-center justify-self-center bg-slate-100 shadow-md rounded-xl py-4 px-6">
          <div className="flex items-center w-full justify-center gap-2 pb-4">
            <h1 className="font-semibold">Frontend</h1>
            <Image
              src="/images/frontend.gif"
              alt="frontend"
              width={28}
              height={28}
            />
          </div>
          <ul className="text-xs font-medium text-gray-600">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Redux Toolkit</li>
            <li>TailwindCSS</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="w-full flex flex-col text-center justify-self-center bg-slate-100 shadow-md rounded-xl py-4 px-6">
          <div className="flex items-center w-full justify-center gap-2 pb-4">
            <h1 className="font-semibold">Backend</h1>
            <Image
              src="/images/backend.gif"
              alt="backend gif"
              width={30}
              height={30}
            />
          </div>
          <ul className="text-xs font-medium text-gray-600">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="w-full justify-self-center flex flex-col text-center bg-slate-100 shadow-md rounded-xl py-4 px-6">
          <div className="flex items-center w-full justify-center gap-2 pb-4">
            <h1 className="font-semibold">Miscellaneous</h1>
            <Image
              src="/images/miscellaneous.gif"
              alt="miscellaneous"
              width={30}
              height={30}
            />
          </div>
          <ul className="text-xs font-medium text-gray-600">
            <li>Java</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Linux</li>
            <li>Nginx</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
