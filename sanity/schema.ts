import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import locations from "./schemas/locations";
import reviews from "./schemas/reviews";
import pagePortfolio from "./schemas/page-portfolio";
import contactUs from "./schemas/contact-us";
import serviceItem from "./schemas/serviceItem";
import booking from "./schemas/booking";
import packageItem from "./schemas/packageItem";
import imageStore from "./schemas/imagestore";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    locations,
    reviews,
    pagePortfolio,
    contactUs,
    serviceItem,
    booking,
    packageItem,
    imageStore
  ],
};