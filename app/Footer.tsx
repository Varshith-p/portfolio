import Image from "next/image";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-4 text-xs lg:text-base">
      <div className="flex w-full justify-center items-center gap-2 pb-2">
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://www.linkedin.com/in/varshith-p/"
              target="_blank"
              className="text-white md:text-lg flex items-center gap-1 hover:underline"
            >
              <AiFillLinkedin /> <span>LinkedIn</span>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Varshith Puligadda</h4>
                <p className="text-sm">Connect with me on LinkedIn.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://github.com/Varshith-p"
              target="_blank"
              className="text-white md:text-lg flex items-center gap-1 hover:underline"
            >
              <AiFillGithub /> <span>Github</span>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">varshith-p</h4>
                <p className="text-sm">Checkout my github account</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="flex w-full justify-center items-center gap-2">
        <p>
          Developed by Varshith Puligadda | Design by{" "}
          <Image
            src="./rafo.svg"
            alt="rafo logo"
            width={34}
            height={24}
            className="inline-block w-[24px] h-[20px] lg:w-[34px] lg:h-[24px]"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
