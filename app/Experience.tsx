"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl py-6 xxl:py-16 mx-auto w-full px-6"
    >
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl lg:text-5xl font-semibold"
      >
        Experience
      </motion.h1>
      <div className="py-6 lg:grid grid-cols-12 items-center">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="hidden mx-auto w-80 h-80 col-span-5 lg:flex items-start justify-center bg-[#ABECD6] rounded-full"
        >
          <Image
            src="/work.webp"
            alt="work experience image"
            className="w-64 h-64"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          initial={{ x: 100, opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className="col-span-7 leading-relaxed max-w-xl px-5 py-4 rounded-xl shadow-md self-center bg-slate-100"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-xl md:text-2xl font-semibold">
              Full Stack Developer Intern
            </h1>
            <p className="md:text-xl">
              At <span className="font-medium">Atoms Digital Solutions</span>
            </p>
            <p className="text-xs md:text-base font-medium text-gray-500">
              March, 2023 - Present
            </p>
          </div>
          <ul className="text-sm translate-x-4 text-justify md:text-start pr-2 list-disc md:text-lg font-medium pt-2">
            <li className="py-1">
              Played a pivotal role in spearheading the creation of various
              websites and web applications for a diverse range of clients.
            </li>
            <li className="py-1">
              Leveraged the MERN stack (MongoDB, Express.js, React.js, Node.js)
              to architect full-stack applications, synergizing backend
              functionality with engaging and interactive frontend components.
            </li>
            <li className="py-1">
              Designed and implemented database schemas in MongoDB, ensuring
              efficient data storage and retrieval for seamless application
              functionality.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
