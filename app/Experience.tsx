import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 mt-10 md:mt-[4rem]">
      <h1 className="text-4xl md:text-5xl font-semibold">Experience</h1>
      <div className="py-6 md:py-20 grid grid-cols-12">
        <div className="mx-auto w-80 h-80 col-span-5 flex items-start justify-center bg-[#ABECD6] rounded-full">
          <Image
            src="/work.webp"
            alt="work experience image"
            className="w-64 h-64"
            width={100}
            height={100}
          />
        </div>
        <div className="col-span-7 leading-relaxed self-center">
          <div className="-translate-x-5 flex flex-col gap-1">
            <h1 className="text-3xl font-semibold">
              Full Stack Developer Intern
            </h1>
            <p className="text-2xl">
              At <span className="font-medium">Atoms Digital Solutions</span>
            </p>
            <p className="font-medium text-gray-500">March, 2023 - Present</p>
          </div>
          <ul className="list-disc text-xl font-medium py-4">
            <li className="py-2">
              Played a pivotal role in spearheading the creation of various
              websites and web applications for a diverse range of clients.
            </li>
            <li className="py-2">
              Leveraged the MERN stack (MongoDB, Express.js, React.js, Node.js)
              to architect full-stack applications, synergizing backend
              functionality with engaging and interactive frontend components.
            </li>
            <li className="py-2">
              Designed and implemented database schemas in MongoDB, ensuring
              efficient data storage and retrieval for seamless application
              functionality.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
