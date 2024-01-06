import { defineField, defineType } from "sanity";

// schemas/siteSettings.js
export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
        name: "logoDark",
        title: "Logo Dark",
        type:"image"
    },
    {
        name: "logoLight",
        title: "Logo Light",
        type:"image"
    },
    {
        name: "companyName",
        title: "Company Name",
        type:"string"
    },
    {
      name: "email",
      title: "E-Mail Address",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "locationLink",
      title: "Location Link (Google Map/Apple Map)",
      type: "string",
    },
    defineField({
      name: "socialLinks",
      type: "array",
      of: [{
        type:"object",
        fields: [
          { name: "name", type: "string" },
          { name: "link", type: "string" },
          { name: "icon", type: "image" },
        ],
      }]
    }),
    defineField({
      name: "clients",
      type: "array",
      of: [{
        type:"object",
        fields: [
          { name: "name", type: "string" },
          { name: "link", type: "string" },
          { name: "icon", type: "image" },
        ],
      }]
    }),
  ],
});
