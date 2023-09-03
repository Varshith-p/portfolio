import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

type Technology = {
  name: String;
  color: String;
};

type Project = {
  title: String;
  technologies: Technology[];
  image: String;
  github: String;
  deployed: String;
};

const projects: Project[] = [
  {
    title: "Job Tracker",
    technologies: [
      { name: "Redux toolkit", color: "#111827" },
      { name: "Node.js", color: "#026e00" },
      { name: "Express.js", color: "#f1f3f4" },
      { name: "React", color: "#38BDF8" },
      { name: "MongoDB", color: "#00684a" },
      { name: "JWT", color: "#d63aff" },
      { name: "Rest API", color: "#F43F5E" },
    ],
    image: "./JobTracker.png",
    github: "https://github.com/Varshith-p/job-tracker-mern",
    deployed: "https://job-tracker-mern.cyclic.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto w-full px-6 mt-10 md:my-[3rem]"
    >
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-semibold max-w-min leading-tight"
      >
        Latest Projects
      </motion.h1>
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.article
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4"
        >
          <h1 className="font-semibold text-2xl">Job Tracker</h1>
          <div className="flex flex-wrap gap-y-2 gap-x-1 md:justify-between">
            <Badge className={`bg-[#38BDF8] hover:bg-[#38BDF8]`}>React</Badge>
            <Badge className={`bg-[#026e00] hover:bg-[#026e00]`}>Node.js</Badge>
            <Badge className={`bg-[#F59E0B] hover:bg-[#F59E0B}`}>
              Express.js
            </Badge>
            <Badge className={`bg-[#00684a] hover:bg-[#00684a]`}>MongoDB</Badge>
            <Badge className={`bg-[#F43F5E] hover:bg-[#F43F5E]`}>
              Rest API
            </Badge>
            <Badge className={`bg-[#d63aff] hover:bg-[#d63aff]`}>JWT</Badge>
          </div>
          <div className="rounded-lg p-3 bg-[#ABECD6]">
            <Image
              src="/JobTracker.png"
              alt="job tracker image"
              width={200}
              height={200}
              className="w-full h-[200px] rounded-md"
            />
          </div>
          <div className="flex w-full justify-evenly">
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-semibold hover:bg-black hover:text-white rounded-xl px-3 py-1 transition-all duration-300"
            >
              GitHub <AiFillGithub />
            </a>
            <a
              href="https://job-tracker-mern.cyclic.app/"
              target="_blank"
              className="flex items-center gap-1 font-semibold hover:bg-black hover:text-white rounded-xl px-3 py-1 transition-all duration-300"
            >
              Deployed Link <GlobeAltIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
        <motion.article
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4"
        >
          <h1 className="font-semibold text-2xl">Assignment Portal</h1>
          <div className="flex flex-wrap gap-y-2 gap-x-1 md:justify-between">
            <Badge className={`bg-red-700 hover:bg-red-700`}>Angular</Badge>
            <Badge className={`bg-[#026e00] hover:bg-[#026e00]`}>Node.js</Badge>
            <Badge className={`bg-[#F59E0B] hover:bg-[#F59E0B}`}>
              Express.js
            </Badge>
            <Badge className={`bg-[#00684a] hover:bg-[#00684a]`}>MongoDB</Badge>
            <Badge className={`bg-[#F43F5E] hover:bg-[#F43F5E]`}>
              Rest API
            </Badge>
            <Badge className={`bg-sky-500 hover:bg-sky-500`}>TailwindCSS</Badge>
          </div>
          <div className="rounded-lg p-3 bg-[#ABECD6]">
            <Image
              src="/AssignmentPortal.png"
              alt="assignment portal image"
              width={200}
              height={200}
              className="w-full h-[200px] rounded-md"
            />
          </div>
          <div className="flex w-full justify-evenly">
            <a
              href="https://github.com/Varshith-p/assignment-portal-express-backend"
              target="_blank"
              className="flex items-center gap-1 font-semibold hover:bg-black hover:text-white rounded-xl px-3 py-1 transition-all duration-300"
            >
              GitHub <AiFillGithub />
            </a>
            <a
              href="https://assignment-portal-angular-frontend.vercel.app/"
              target="_blank"
              className="flex items-center gap-1 font-semibold hover:bg-black hover:text-white rounded-xl px-3 py-1 transition-all duration-300"
            >
              Deployed Link <GlobeAltIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
        <motion.article
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4"
        >
          <h1 className="font-semibold text-2xl">Portfolio</h1>
          <div className="flex flex-wrap gap-y-2 gap-x-1 md:justify-between">
            <Badge className={`bg-black hover:bg-black`}>Next.js</Badge>
            <Badge className={`bg-[#3178c6] hover:bg-[#3178c6]`}>
              TypeScript
            </Badge>
            <Badge className={`bg-sky-500 hover:bg-sky-500`}>TailwindCSS</Badge>
            <Badge className={`bg-[#00684a] hover:bg-[#00684a]`}>MongoDB</Badge>
            <Badge className={`bg-[#026e00] hover:bg-[#026e00]`}>Node.js</Badge>
          </div>
          <div className="rounded-lg p-3 bg-[#ABECD6]">
            <Image
              src="/Portfolio.png"
              alt="job tracker image"
              width={200}
              height={200}
              className="w-full h-[200px] rounded-md"
            />
          </div>
          <div className="flex w-full justify-evenly">
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-semibold hover:bg-black hover:text-white rounded-xl px-3 py-1 transition-all duration-300"
            >
              GitHub <AiFillGithub />
            </a>
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-semibold hover:bg-black hover:text-white rounded-xl px-3 py-1 transition-all duration-300"
            >
              Deployed Link <GlobeAltIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Projects;
