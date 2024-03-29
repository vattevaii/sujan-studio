import { z } from "zod";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const timePattern = /^((0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9])$/;
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const bookingSchema = z.object({
  gReCaptchaToken: z.string().optional().or(z.literal("")),
  needs: z.string().min(1).max(255), // Adjust the max length as needed
  purpose: z.string().min(1).max(255),
  exactNeed: z.string().min(1).max(255),
  address: z.object({
    street: z.string().min(1).max(255),
    zip: z.string().min(3).max(255), // Adjust the min and max length for ZIP code
    city: z.string().min(1).max(255),
  }),
  prefer: z.object({
    date: z
      .string()
      .refine((value) => datePattern.test(value), {
        message: "Date must be of pattern YYYY-MM-DD and valid",
      }),
    startTime: z
      .string()
      .refine((value) => timePattern.test(value), {
        message: "Time must be of pattern HH:MM AA and valid",
      }),
    hours: z.number().min(1, {
      message: "Hours must be greater than 1",
    }),
  }),
  personal: z.object({
    fullName: z.string().min(1).max(255),
    email: z.string().email().optional().or(z.literal("")),
    phone: z.string().regex(phoneRegex, { message: "Invalid Phone Number!" }), // Adjust the min and max length for phone number
  }),
});

export default bookingSchema;
