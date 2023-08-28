import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-4">
      <div className="flex w-full justify-center items-center gap-2">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant="link"
              className="text-white text-lg flex items-center gap-1"
            >
              <AiFillLinkedin /> <span>LinkedIn</span>
            </Button>
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
            <Button
              variant="link"
              className="text-white text-lg flex items-center gap-1"
            >
              <AiFillGithub /> <span>Github</span>
            </Button>
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
        <p>Developed by Varshith Puligadda | Design by </p>
        <Image src="./rafo.svg" alt="rafo logo" width={34} height={24} />
      </div>
    </footer>
  );
};

export default Footer;
