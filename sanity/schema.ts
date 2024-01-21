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
import textBlock from "./schemas/textBlock";
import pageContent from "./schemas/pageContent";
import siteSettings from "./schemas/site-settings";
import { mailModel } from "./schemas/mailModel";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
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
    pageContent,
    textBlock,
    imageStore,
    mailModel
  ],
};
