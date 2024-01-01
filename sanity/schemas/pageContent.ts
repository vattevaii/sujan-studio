import { defineField, defineType } from "sanity";
export default defineType({
  name: "pageContent",
  title: "Page Content",
  type: "document",
  fields: [
    defineField({
      name: "pageRoute",
      title: "Page Route",
      type: "string",
    }),
    defineField({
      name: "bannerText",
      title: "Banner Text",
      description:"Use Left-ALT + 255 for non-breaking spaces (Option + Space for MAC)",
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
      name: "bannerSubTitle",
      title: "Banner Sub Title",
      type: "string",
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
    }),
    defineField({
      name: "pageSubTitle",
      title: "Page Sub Title",
      type: "string",
    }),
    defineField({
      name: "textBlocks",
      title: "Text Blocks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "textBlock" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "pageRoute",
    },
    prepare(Selection) {
      const { title } = Selection;
      return {
        title: "/" + title,
      };
    },
  },
});
