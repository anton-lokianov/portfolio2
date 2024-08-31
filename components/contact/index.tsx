"use client";

import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import MailSVG from "../ui/mailSVG";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { emailSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";

type EmailForm = z.infer<typeof emailSchema>;

const Contact = () => {
  const form = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (data: EmailForm) => {
    try {
      const response = await axios.post("/api/emails", data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="h-screen flex items-center gap-2 flex-col justify-center pt-16 md:pt-24">
      <h2 className="font-bold text-4xl">
        Contact <span className="text-accent">Me.</span>
      </h2>
      <p className="text-lg text-white">
        Have a question or want to work together?
      </p>
      <MailSVG />
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4 w-full p-4 max-w-3xl">
        <div className="flex gap-4">
          <Input
            {...form.register("name")}
            type="text"
            placeholder="name"
            className="h-12"
          />
          <Input
            {...form.register("email")}
            type="email"
            placeholder="email"
            className="h-12"
          />
        </div>
        <Input
          {...form.register("subject")}
          type="text"
          placeholder="subject"
          className="h-12"
        />
        <Textarea
          {...form.register("message")}
          placeholder="message"
          className="min-h-48 h-auto"
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="rounded-full py-2 border border-gray-300 max-w-[120px] px-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-semibold text-md tracking-widest">
            SEND
          </span>
          <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
        </Button>
      </form>
    </section>
  );
};

export default Contact;
