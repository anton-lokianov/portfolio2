import * as z from "zod";

export const emailSchema = z.object({
  name: z.string().optional(),
  email: z
    .string()
    .email({ message: "Invalid email" })
    .min(2, { message: "Email must be at least 2 characters long" })
    .max(50, { message: "Email must be 50 characters or less" }),
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters long" })
    .max(50, { message: "Subject must be 50 characters or less" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(500, { message: "Message must be 500 characters or less" }),
});
