import { defineField, defineType } from "sanity";
import { client } from "../lib/client";
import AsyncSelect from "../components/AsyncSelect";
import { orderBy } from "lodash";

// In your schema definition
const imageStore = defineType({
  name: "imageStore",
  type: "document",
  title: "Image Store",
  groups:[{name:"common", title:"Common",default:true},{name: "images", title:"Images"}],
  fields: [
    defineField({
      name: "eventName",
      title: "Event Name",
      type: "string",
      group:"common",
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
      group:"common",
      type: "date",
    }),
    defineField({
      name: "category",
      title: "Category",
      group:"common",
      type: "array",
      of: [
        {
          name: "categoryItem",
          type: "object",

          fields: [
            { name: "categoryName", type: "string" },
            { name: "categoryValue", type: "string" },
          ],
          preview: {
            select: {
              title: "categoryName",
            },
          },
        },
      ],
      options: {
        list: [
          {
            _type: "categoryItem",
            categoryName: "Wedding Photography",
            categoryValue: "wedding",
          },
          {
            _type: "categoryItem",
            categoryName: "Family and Events Photography",
            categoryValue: "familyAndEvents",
          },
          {
            _type: "categoryItem",
            categoryName: "Corporate Events Photography",
            categoryValue: "corporateEvents",
          },
          {
            _type: "categoryItem",
            categoryName: "Real Estate Photography",
            categoryValue: "realEstate",
          },
          {
            _type: "categoryItem",
            categoryName: "School and Events Photography",
            categoryValue: "schoolAndEvents",
          },
          {
            _type: "categoryItem",
            categoryName: "Others",
            categoryValue: "others",
          },
        ],
      },
    }),defineField({
      name: "otherCategory",
      title: "Other Category",
      type: "string",
      group:"common",
      description: 'Specify if category is "Others"',
      hidden: ({ document }) => {
        if (
          document &&
          document.category &&
          // @ts-expect-error
          document.category[0].categoryValue === "others"
        )
          return false;
        return true;
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // Validate that otherCategory is provided if category is 'Others'
          // @ts-expect-error
          const category = context.parent.category;
          if (category && category[0].categoryValue === "others" && !value) {
            return 'Other Category is required when Category is "Others"';
          }
          return true;
        }),
    }),

    defineField({
      name: "brideName",
      title: "Bride Name",
      group:"common",
      type: "string",
      description: 'Specify if category is "Wedding"',
      hidden: ({ document }) => {
        if (
          document &&
          document.category &&
          // @ts-expect-error
          document.category[0].categoryValue === "wedding"
        )
          return false;
        return true;
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // Validate that otherCategory is provided if category is 'Others'
          // @ts-expect-error
          const category = context.parent.category;
          if (
            category &&
            category[0].categoryValue === "wedding" &&
            !value
          ) {
            return 'Bride Name is required when Category is "Wedding"';
          }
          return true;
        }),
    }),
    defineField({
      name: "groomName",
      title: "Groom Name",
      group:"common",
      type: "string",
      description: 'Specify if category is "Wedding"',
      hidden: ({ document }) => {
        if (
          document &&
          document.category &&
          // @ts-expect-error
          document.category[0].categoryValue === "wedding"
        )
          return false;
        return true;
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // Validate that otherCategory is provided if category is 'Others'
          // @ts-expect-error
          const category = context.parent?.category;
          if (
            category &&
            category[0].categoryValue === "wedding" &&
            !value
          ) {
            return 'Groom Name is required when Category is "Wedding"';
          }
          return true;
        }),
    }),
    defineField({
      name: "mainLocation",
      title: "Main Location",
      type: "reference",
      group:"common",
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
      group:"common",
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
      name: "mainImage",
      title: "Main Image",
      type: "image",
      group:"images",
      options: {
        hotspot: true, // You can enable hotspot for focal point
      },
    }),
    defineField({
      name: "relatedImages",
      title: "Related Images",
      type: "array",
      group:"images",
      of: [{ type: "image" }],
      hidden: (context) => {
        
        return false;
      }
    }),
    defineField({
      name: "orderRank",
      type: "string",
      hidden: true,
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
        subtitle: title + " " + sub?.[0]?.categoryValue ?? "",
        media,
      };
    },
  },
});
export default imageStore;
