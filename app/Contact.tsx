"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    toast({ title: "Your message has been sent." });
    console.log("Hello");
  };

  return (
    <section className="max-w-7xl mx-auto w-full px-6 mt-10 md:mt-[5rem] pb-12">
      <h1 className="text-4xl md:text-5xl font-semibold max-w-xl leading-snug">
        Do you have any idea?{" "}
        <span className="text-4xl">Let&apos;s build it together!</span>
      </h1>
      <form className="w-[70%] mx-auto py-6 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-500 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="mail" className="font-semibold">
            Your Email
          </label>
          <input
            type="email"
            name="mail"
            id="mail"
            className="border border-gray-500 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <label htmlFor="message" className="font-semibold">
            Your Message
          </label>
          <textarea
            className="border border-gray-500 rounded-md px-2 py-1"
            name="message"
            id="message"
            cols={30}
            rows={8}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#ABECD6] text-lg font-semibold py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
