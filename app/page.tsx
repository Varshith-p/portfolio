import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto w-full px-6">
        <div className="bg-gradient-to-r from-[#FBED96] to-[#ABECD6] rounded-lg py-8 flex flex-col gap-6 items-center">
          <div className="bg-white w-14 h-14 flex items-start justify-center rounded-full">
            <Image src="./avatar.svg" alt="avatar" width={50} height={50} />
          </div>
          <p className="font-semibold text-4xl">Hello, I&apos;m Varshith</p>
          <p className="font-medium text-5xl text-center max-w-2xl leading-tight">
            I develop ideas and help build a better world through software.
          </p>
          <div className="flex items-center gap-6">
            <p className="bg-black text-white w-fit rounded-2xl px-6 py-1 font-medium">
              Contact
            </p>
            <div className="flex gap-2">
              <p className="font-semibold">Download Resume</p>
              <ArrowRightIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </main>
      <Projects />
    </>
  );
}
