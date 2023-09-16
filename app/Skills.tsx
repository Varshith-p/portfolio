import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl py-16 mx-auto w-full px-6">
      <div className="md:flex flex-col gap-3 justify-center">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-5xl font-semibold"
        >
          Skills
        </motion.h1>
        <div className="py-6 grid md:grid-cols-3 justify-center gap-x-8 gap-y-5">
          <Image
            src="/images/backend.gif"
            alt="backend gif"
            width={80}
            height={80}
            className="hidden lg:block justify-self-center"
          />
          <Image
            src="/images/frontend.gif"
            alt="frontend"
            width={60}
            height={60}
            className="hidden lg:block justify-self-center"
          />
          <Image
            src="/images/miscellaneous.gif"
            alt="miscellaneous"
            width={80}
            height={80}
            className="hidden lg:block justify-self-center"
          />
          <div className="w-full flex flex-col text-center justify-self-center bg-slate-100 shadow-md rounded-xl py-4 px-6">
            <div className="flex items-center w-full justify-center gap-2 pb-4">
              <h1 className="text-2xl font-semibold">Backend</h1>
              <Image
                src="/images/backend.gif"
                alt="backend gif"
                width={30}
                height={30}
                className="lg:hidden"
              />
            </div>
            <ul className="text-lg flex-1 flex flex-col justify-center font-medium text-gray-600 items-center">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST API</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="w-full flex flex-col h-full text-center bg-slate-100 shadow-lg rounded-xl py-4 px-6">
            <div className="flex items-center w-full justify-center gap-2 pb-4">
              <h1 className="text-2xl font-semibold">Frontend</h1>
              <Image
                src="/images/frontend.gif"
                alt="frontend"
                width={28}
                height={28}
                className="lg:hidden"
              />
            </div>
            <ul className="text-lg flex-1 flex flex-col justify-center font-medium text-gray-600">
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
          <div className="w-full justify-self-center flex flex-col text-center bg-slate-100 shadow-md rounded-xl py-4 px-6">
            <div className="flex items-center w-full justify-center gap-2 pb-4">
              <h1 className="text-2xl font-semibold">Miscellaneous</h1>
              <Image
                src="/images/miscellaneous.gif"
                alt="miscellaneous"
                width={30}
                height={30}
                className="md:hidden"
              />
            </div>
            <ul className="text-lg flex-1 flex flex-col justify-center font-medium text-gray-600">
              <li>Java</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Linux</li>
              <li>Nginx</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
