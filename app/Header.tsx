import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Header = () => {
  return (
    <header className="w-full px-6 py-8 max-w-7xl mx-auto flex justify-between">
      <Link href="/" className="w-fit">
        <Image
          src="./logo.svg"
          alt="logo"
          width={200}
          height={40}
          className="w-fit"
        />
      </Link>
      <Sheet>
        <SheetTrigger>
          <Bars3BottomRightIcon className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle className="flex flex-col gap-6">
              <Link href="/">About</Link>
              <Link href="/">Projects</Link>
              <Link href="/">Experience</Link>
              <Link href="/">Contact</Link>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
