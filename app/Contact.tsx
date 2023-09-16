"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsLoading(true);
    if (!name || !email || !message) {
      alert("Fill all fields");
      return;
    }
    await axios.post(
      "http://localhost:3000/api/sendMail",
      // @ts-ignore
      { name, email, message }
    );
    toast({ title: "Your message has been sent." });
    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);
  };

  return (
    <section id="contact" className="max-w-7xl py-16 mx-auto w-full px-6">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-semibold max-w-xl leading-snug"
      >
        Do you have an idea?{" "}
        <span className="md:text-4xl">Let&apos;s build it together!</span>
      </motion.h1>
      <form className="pr-1 md:w-[70%] mx-auto py-6 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-1"
        >
          <label htmlFor="name" className="font-semibold">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            className="border border-gray-700 rounded-md px-2 py-1"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="flex flex-col gap-1"
        >
          <label htmlFor="mail" className="font-semibold">
            Your Email
          </label>
          <input
            type="email"
            name="mail"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="mail"
            className="border border-gray-700 rounded-md px-2 py-1"
          />
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:col-span-2 gap-1"
        >
          <label htmlFor="message" className="font-semibold">
            Your Message
          </label>
          <textarea
            className="border border-gray-700 rounded-md px-2 py-1"
            name="message"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="message"
            cols={30}
            rows={7}
          ></textarea>
        </motion.div>
        <motion.button
          onClick={handleSubmit}
          type="submit"
          disabled={isLoading}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`bg-[#ABECD6] text-lg font-semibold py-2 rounded-md hover:shadow-md transition-all cursor-pointer disabled:bg-[#c7e5db] disabled:cursor-not-allowed`}
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
