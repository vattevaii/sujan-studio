import { z } from "zod";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const timePattern = /^\d{2}:\d{2}$/;

const bookingSchema = z.object({
  needs: z.string().min(1).max(255), // Adjust the max length as needed
  purpose: z.string().min(1).max(255),
  exactNeed: z.string().min(1).max(255),
  address: z.object({
    street: z.string().min(1).max(255),
    zip: z.string().min(3).max(10), // Adjust the min and max length for ZIP code
    city: z.string().min(1).max(255),
  }),
  prefer: z.object({
    date: z.string().refine((value) => datePattern.test(value)),
    startTime: z.string().refine((value) => timePattern.test(value)),
    hours: z.number().min(1, {
      message: "Hours must be greater than 1",
    }),
  }),
  personal: z.object({
    fullName: z.string().min(1).max(255),
    email: z.string().email(),
    phone: z
      .string()
      .min(6, {
        message: "Phone Number Must be filled correctly"
      })
      .max(15, {
        message: "Phone Number Must be filled correctly"
      }), // Adjust the min and max length for phone number
  }),
});

export default bookingSchema;
