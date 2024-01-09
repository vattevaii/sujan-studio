import { defineField, defineType } from "sanity";
const imageSchema = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
});

export default defineType({
  name: "textBlock",
  type: "document",
  title: "Text Block",
  fields: [
    defineField({
      name: "title",
      title: "sanity title",
      type: "string",
    }),
    defineField({
      name: "blockTitle",
      title: "Block Title",
      type: "string",
    }),
    defineField({
      name: "block",
      title: "Text Block",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: "relatedImages",
      title: "Related Images",
      type: "array",
      of: [imageSchema],
      // validation: (Rule) =>
      //   Rule.max(3).error("Only up to 3 related images are allowed."),
    }),
  ],
  preview:{
    select:{
        title: "title",
        media: "relatedImages.0"
    },
  }
});
