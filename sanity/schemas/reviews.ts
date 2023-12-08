import { defineType, defineField } from "sanity";

export default defineType({
  name: "reviewItem",
  title: "Review Item",
  type: "document",
  fields: [
    // Background image field
    defineField({
      name: "bg",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // Author name field
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),

    // Author image field
    defineField({
      name: "authorSrc",
      title: "Author Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // Company field
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),

    // Review text field as a block
    defineField({
      name: "reviewText",
      title: "Review Text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],

  // Preview configuration
  preview: {
    select: {
      title: "author",
      media: "authorSrc",
    },
  },
});
