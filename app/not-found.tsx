// app/not-found.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const NotFound = () => {
  // Automatically redirect to home page after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/"; // Redirect manually to home page
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-xl text-gray-500">
        You'll be redirected to the homepage in a few seconds.
      </p>
      <Button
        onClick={() => (window.location.href = "/")}
        className="mt-4 px-6 py-3 text-lg text-white bg-accent rounded-full hover:bg-accent/80 transition duration-300">
        Go Back Home
      </Button>
    </section>
  );
};

export default NotFound;
