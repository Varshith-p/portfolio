import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { AiFillGithub } from "react-icons/ai";

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
    <section className="max-w-7xl mx-auto w-full px-6 mt-16">
      <h1 className="text-4xl font-semibold">Latest Projects</h1>
      <div className="py-8 grid grid-cols-3 gap-8">
        <article className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Job Tracker</h1>
          <div className="flex flex-wrap gap-y-2 justify-between">
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
          <div className="rounded-lg p-6 bg-[#FBED96]">
            <Image
              src="/JobTracker.png"
              alt="job tracker image"
              width={200}
              height={200}
              className="w-full rounded-md"
            />
          </div>
          <div className="flex w-full justify-evenly">
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-medium"
            >
              GitHub <AiFillGithub />
            </a>
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-medium"
            >
              Deployed Link <GlobeAltIcon className="w-4 h-4" />
            </a>
          </div>
        </article>
        <article className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Job Tracker</h1>
          <div className="flex flex-wrap gap-y-2 justify-between">
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
          <div className="rounded-lg p-6 bg-gradient-to-r from-[#FBED96] to-[#ABECD6]">
            <Image
              src="/JobTracker.png"
              alt="job tracker image"
              width={200}
              height={200}
              className="w-full rounded-md"
            />
          </div>
          <div className="flex w-full justify-evenly">
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-medium"
            >
              GitHub <AiFillGithub />
            </a>
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-medium"
            >
              Deployed Link <GlobeAltIcon className="w-4 h-4" />
            </a>
          </div>
        </article>
        <article className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Job Tracker</h1>
          <div className="flex flex-wrap gap-y-2 justify-between">
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
          <div className="rounded-lg p-6 bg-[#ABECD6]">
            <Image
              src="/JobTracker.png"
              alt="job tracker image"
              width={200}
              height={200}
              className="w-full rounded-md"
            />
          </div>
          <div className="flex w-full justify-evenly">
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-medium"
            >
              GitHub <AiFillGithub />
            </a>
            <a
              href="https://github.com/Varshith-p/job-tracker-mern"
              target="_blank"
              className="flex items-center gap-1 font-medium"
            >
              Deployed Link <GlobeAltIcon className="w-4 h-4" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
