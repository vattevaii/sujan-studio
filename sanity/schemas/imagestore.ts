import { defineField, defineType } from "sanity";
import { client } from "../lib/client";
import AsyncSelect from "../components/AsyncSelect";
import { orderBy } from "lodash";

// In your schema definition
const imageStore = defineType({
  name: "imageStore",
  type: "document",
  title: "Image Store",
  fields: [
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // You can enable hotspot for focal point
      },
    }),
    defineField({
      name: "relatedImages",
      title: "Related Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "mainLocation",
      title: "Main Location",
      type: "reference",
      to: [{ type: "locationItem" }],
      //   options: {
      //     // list: [],
      //     // url: `*[_type=="locationItem"]{"title":locationName,"value":slug.current}`,
      //     // @ts-expect-error
      //     filter: async function () {
      //       return client.fetch(
      //         `*[_type=="locationItem"]{"title":locationName,"value":slug.current}`
      //       );
      //     },
      //   },
      //   components: {
      //     input: AsyncSelect,
      //   },
    }),
    defineField({
      name: "subLocation",
      title: "Sub Location",
      type: "string",
      options: {
        list: [],
        // @ts-expect-error
        url: `*[_type=="locationItem"]{"sublocations":sublocations[]{"title":sublocationName,"value":slug.current}}`,
        formatResponse: (v: Array<{ sublocations: Array<any> }>) => {
          return orderBy(
            v.flatMap((f) => f.sublocations),
            "value"
          );
        },
      },
      components: {
        input: AsyncSelect,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Wedding", value: "wedding" },
          { title: "Family and Events", value: "familyAndEvents" },
          { title: "Corporate Events", value: "corporateEvents" },
          { title: "Real Estate", value: "realEstate" },
          { title: "School and Events", value: "schoolAndEvents" },
          { title: "Others", value: "others" },
        ],
      },
    }),
    defineField({
      name: "otherCategory",
      title: "Other Category",
      type: "string",
      description: 'Specify if category is "Others"',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // Validate that otherCategory is provided if category is 'Others'
          // @ts-expect-error
          const category = context.parent.category;
          if (category && category.includes("others") && !value) {
            return 'Other Category is required when Category is "Others"';
          }
          return true;
        }),
    }),
    defineField({
      name: "eventName",
      title: "Event Name",
      type: "string",
      description: "Name of the event or title for the photo collection",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (!value) {
            return "Event Name cannot be empty";
          }
          return true;
        }),
    }),
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
    }),
    defineField({
      name: "brideName",
      title: "Bride Name",
      type: "string",
      description: 'Specify if category is "Wedding"',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // Validate that otherCategory is provided if category is 'Others'
          // @ts-expect-error
          const category = context.parent.category;
          if (category && category.includes("wedding") && !value) {
            return 'Bride Name is required when Category is "Wedding"';
          }
          return true;
        }),
    }),
    defineField({
      name: "groomName",
      title: "Groom Name",
      type: "string",
      description: 'Specify if category is "Wedding"',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // Validate that otherCategory is provided if category is 'Others'
          // @ts-expect-error
          const category = context.parent.category;
          if (category && category.includes("wedding") && !value) {
            return 'Groom Name is required when Category is "Wedding"';
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      event: "eventName",
      title: "mainLocation.locationName",
      sub: "category",
      subtitle: "subLocation",
      media: "mainImage",
    },
    prepare(selection) {
      const { event, title, sub, media, subtitle } = selection;
      return {
        title: event,
        subtitle: title + " " + sub[0],
        media,
      };
    },
  },
});
export default imageStore;
