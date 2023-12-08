// pagePortfolio.js
import { defineType, defineField } from "sanity";

// Define a schema for individual images
const imageSchema = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
});

// Define a schema for featured images within a portfolio item
const featuredImagesSchema = defineField({
  name: "featuredImages",
  title: "Featured Images",
  type: "array",
  of: [imageSchema],
  validation: (Rule) =>
    Rule.max(6).error("Only up to 6 featured images are allowed."),
});

// Define a schema for additional images within a portfolio item
const additionalImagesSchema = defineField({
  name: "additionalImages",
  title: "Additional Images",
  type: "array",
  of: [imageSchema],
});

// Define a schema for individual portfolio items
const portfolioItem = {
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    featuredImagesSchema,
    additionalImagesSchema,
    // Add other fields as needed for each portfolio item
  ],
};

// Define the main document type for the portfolio
export default defineType({
  name: "pagePortfolio",
  title: "Page Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
    }),
    // Portfolio Items field
    defineField({
      name: "portfolioItems",
      title: "Portfolio Items",
      type: "array",
      of: [portfolioItem], // Reference the portfolioItem schema
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
