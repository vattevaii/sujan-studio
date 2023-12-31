// package.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "package",
  title: "Package",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // If you want to enable hotspot for the image
      },
    }),
    defineField({
      name: "getEstimateLink",
      title: "Linked Service",
      type: "reference",
      to: [{ type: "serviceItem" }],
    }),
    defineField({
      name: "dollars",
      title: "Dollars",
      type: "string",
    }),
    defineField({
      name: "privileges",
      title: "Privileges",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "orderRank",
      type: "string",
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
