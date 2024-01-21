import { defineField, defineType } from "sanity";

export const mailModel = defineType({
  name: "mailModel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "to",
      type: "string",
      initialValue: "customer",
      options: { list: ["customer", "admin"] },
    }),
    defineField({
        name: "for",
        type: "string",
        initialValue: "contact-us",
        options: { list: ["contact-us", "book-us"] },
      }),
    defineField({ name: "subject", type: "string" }),
    defineField({
      name: "html",
      type: "text",
    }),
  ],
});
