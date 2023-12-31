import { z } from "zod";

export const ContactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phoneNumber: z.string().min(10, { message: "Invalid phone number" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  terms: z.string().includes("accept"),
  files: z.array(z.string())
});
