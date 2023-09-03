"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.offsetTop;
    window.scroll({ top: offsetTop - 84, behavior: "smooth" });
  }
};

const Header = () => {
  return (
    <header className="fixed bg-white inset-x-0 w-full px-6 pt-7 z-50 max-w-7xl mx-auto flex justify-between">
      <p
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        className="w-fit cursor-pointer"
      >
        <Image
          src="./logo.svg"
          alt="logo"
          width={200}
          height={40}
          className="w-fit"
        />
      </p>
      <Sheet>
        <SheetTrigger>
          <Bars3BottomRightIcon className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle className="flex flex-col gap-6">
              <SheetClose asChild>
                <p
                  className="cursor-pointer"
                  onClick={() => handleScroll("about")}
                >
                  About
                </p>
              </SheetClose>
              <SheetClose asChild>
                <p
                  className="cursor-pointer"
                  onClick={() => handleScroll("projects")}
                >
                  Projects
                </p>
              </SheetClose>
              <SheetClose asChild>
                <p
                  className="cursor-pointer"
                  onClick={() => handleScroll("experience")}
                >
                  Experience
                </p>
              </SheetClose>
              <SheetClose asChild>
                <p
                  className="cursor-pointer"
                  onClick={() => handleScroll("contact")}
                >
                  Contact
                </p>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
