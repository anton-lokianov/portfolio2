import * as z from "zod";

export const emailSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(12, {
      message: "Name must be 20 characters or less",
    }),
  email: z
    .string()
    .email({ message: "Invalid email" })
    .max(50, { message: "Email must be 50 characters or less" }),
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters long" })
    .max(30, { message: "Subject must be 50 characters or less" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(500, { message: "Message must be 500 characters or less" }),
});
