import { defineType, defineField } from "sanity";
const imageSchema = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
});
const sublocationType = {
  name: "sublocation",
  title: "Sublocation",
  type: "object",
  fields: [
    defineField({
      name: "sublocationName",
      title: "Sublocation Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (_, { parent }) => {
          // @ts-expect-error
          return parent["sublocationName"];
        },
        maxLength: 15,
      },
    }),
    defineField({
      name: "featuredImages",
      title: "Featured Images",
      type: "array",
      of: [imageSchema],
      // validation: (Rule) =>
      //   Rule.max(6).error("Only up to 6 featured images are allowed."),
    }),
    // Add other fields for sublocations as needed
  ],
};

export default defineType({
  name: "locationItem",
  title: "Location Item",
  type: "document",
  fields: [
    defineField({
      name: "locationName",
      title: "Location Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "locationName",
        maxLength: 15,
      },
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "postalCode",
      title: "Postal Code",
      type: "string",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "sublocations",
      title: "Sublocations",
      type: "array",
      of: [sublocationType], // Specify the sublocation type
    }),
    defineField({
      name: "orderRank",
      type: "string",
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: "locationName",
    },
  },
});
