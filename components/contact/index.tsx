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
import { toast } from "sonner";

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
      if (response.statusText === "OK") {
        toast.success("Email sent successfully");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email");
    } finally {
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      className="h-screen flex items-center gap-2 flex-col justify-center pt-16 md:pt-24">
      <h2 className="font-bold text-4xl">
        Contact <span className="text-accent">Me.</span>
      </h2>
      <MailSVG />
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4 w-full p-4 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <Input
              {...form.register("name")}
              type="text"
              placeholder="Name"
              className="h-12"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Input
              {...form.register("email")}
              type="email"
              placeholder="Email"
              className="h-12"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Input
            {...form.register("subject")}
            type="text"
            placeholder="Subject"
            className="h-12"
          />
          {form.formState.errors.subject && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.subject.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Textarea
            {...form.register("message")}
            placeholder="Message"
            className="min-h-48 h-auto"
          />
          {form.formState.errors.message && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>
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
