import { defineField, defineType } from "sanity";

const imageTitleUrlField = defineType({
  name: "imageTitleUrl",
  type: "object",
  fields: [
    defineField({
      name: "imageTitle",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "url",
      type: "string",
    }),
    defineField({
      name: "rank",
      type: "number",
    }),
  ],
});

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
      description:
        "Use Left-ALT + 255 for non-breaking spaces (Option + Space for MAC)",
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
    // defineField({
    //   name: "subdomains",
    //   type: "array",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [{type: "string", name:"hello"}],
    //     },
    //   ],

    //   hidden: (context) => {
    //     if (["homepage"].includes(context.parent["pageRoute"])) return false;
    //     return true;
    //   },
    // }),
    // defineField({
    //   name: "whatwedo",
    //   type: "array",
    //   of: [
    //     {
    //       type: "object",
    //       fields: imageTitleUrlField.fields,
    //     },
    //   ],
    //   hidden: (context) => {
    //     console.log("Xontext", context);
    //     if (["homepage"].includes(context.parent["pageRoute"])) return false;
    //     return true;
    //   },
    // }),
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
