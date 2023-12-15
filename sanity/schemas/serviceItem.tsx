// serviceItem.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "serviceItem",
  title: "Service Item",
  type: "document",
  fields: [
    defineField({
      name: "serviceName",
      title: "Service Name",
      type: "string",
    }),
    defineField({
      name: "serviceScope",
      title: "Service Scope",
      type: "array",
      options: {
        list: ["personal", "business"],
      },
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      options: {
        list: ["photography", "videography"],
      },
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
        name: "icon",
        title: "Icon",
        type: "image",
        options: {
          hotspot: true, // Enable hotspot for image
        },
      }),
    // Add other fields as needed
  ],
  preview: {
    select: {
      title: "serviceName",
      subtitle: "serviceScope",
      media: "icon.asset.url"
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const sub = subtitle?.join(" - ");
      const m = '🚫';
      console.log(media)
      return {
        title,
        subtitle: sub ?? "No scopes selected",
        media: <img src={media} style={{background: "#dceafd"}} />
      };
    },
  },
});
