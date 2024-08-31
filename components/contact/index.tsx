"use client";

import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import MailSVG from "../ui/mailSVG";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useForm();
  return (
    <section
      id="contact"
      className="h-screen flex items-center flex-col justify-center max-w-4xl mx-auto">
      <h2 className="font-bold text-4xl mt-16">
        Contact <span className="text-accent">Me.</span>
      </h2>
      <p className="text-lg text-white mt-4">
        Have a question or want to work together?
      </p>
      <MailSVG />
      <form className="flex flex-col gap-4 w-full p-4">
        <div className="flex gap-4">
          <Input type="text" placeholder="name" className="h-12" />
          <Input type="email" placeholder="email" className="h-12" />
        </div>
        <Input type="text" placeholder="subject" className="h-12" />
        <div className="relative">
          <Textarea placeholder="message" className="h-72" />
        </div>
        <Button type="submit" className="self-start ml-6">
          Send
        </Button>
      </form>
    </section>
  );
};

export default Contact;
