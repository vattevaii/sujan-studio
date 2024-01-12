// sanitySchema.js
import { defineType, defineField } from "sanity";

// Define a schema for individual attachments (image or PDF)
const attachmentSchema = defineField({
  name: "attachment",
  title: "Attachment",
  type: "file",
  options: {
    accept: ".pdf,image/*", // Adjust file types as needed
  },
});

// Define the main document type for form submissions
export default defineType({
  name: "contactus",
  title: "Contact Us",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    // Related documents field for multiple attachments
    defineField({
      name: "attachments",
      title: "Attachments",
      type: "array",
      of: [attachmentSchema],
    }),
    defineField({
      name: "captchaData",
      title: "Captcha Data",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "firstName",
    },
  },
});
