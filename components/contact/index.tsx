"use client";

import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="h-screen grid place-content-center">
      <form>
        <Input type="text" placeholder="name" />
        <Input type="email" placeholder="email" />
        <Input type="text" placeholder="subject" />
        <Textarea placeholder="message"/>
      </form>
    </section>
  );
};

export default Contact;
