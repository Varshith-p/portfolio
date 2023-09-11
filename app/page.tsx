"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import { motion } from "framer-motion";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <motion.main
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -20, opacity: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl pt-28 mx-auto w-full px-6 pb-6 mb-[5rem]"
      >
        <div className="bg-gradient-to-r from-[#FBED96] to-[#ABECD6] rounded-lg shadow-lg py-8 flex flex-col gap-6 items-center">
          <div className="bg-white w-[90px] h-[90px] px-[8px] py-[8px] flex items-center justify-center rounded-full">
            <Image
              src="./avatar-new.svg"
              alt="avatar"
              width={80}
              height={80}
              className="w-full h-full"
            />
          </div>
          <p className="font-semibold text-2xl md:text-4xl lg:text-5xl">
            Hello, I&apos;m Varshith
          </p>
          <p className="font-medium text-2xl max-w-xs px-2 md:text-4xl lg:text-5xl text-center md:max-w-xl lg:max-w-2xl leading-tight">
            I develop ideas and help build a better world through software.
          </p>
          <div className="flex items-center text-sm md:text-lg md:gap-6">
            <p className="bg-black md:w-fit text-white rounded-3xl px-3 md:px-6 py-1 font-medium cursor-pointer">
              Contact
            </p>
            <div className="flex items-center gap-1 md:gap-2 cursor-pointer hover:bg-white hover:shadow-lg transition-all rounded-2xl px-3 py-1">
              <a
                href="https://drive.google.com/u/0/uc?id=1zNcun3Esl_9JZYRQxzzF_y4zR-wdkqZr&export=download"
                download={"VarshithPuligadda.pdf"}
                className="font-semibold"
              >
                Download Resume
              </a>
              <ArrowRightIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </motion.main>
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
