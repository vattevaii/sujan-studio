import { TypedObject } from "sanity";
import { client } from "../../../sanity/lib/client";

export const getPageContent: (route: string) => Promise<{
  bannerText: TypedObject | TypedObject[];
  bannerSubTitle: string;
  pageTitle: string;
  pageSubTitle: string;
  image: string;
  textBlocks: {
    blockTitle: string;
    relatedImages: string[];
    text: TypedObject | TypedObject[];
  }[];
}> = async function (route) {
  return await client
    .fetch(
      `*[_type=="pageContent" && pageRoute=="${route}"]{
    bannerText,
    bannerSubTitle,
    "image": bannerImage.asset->url,
    pageTitle,
    pageSubTitle,
    "textBlocks":textBlocks[]->{
      blockTitle,
      "relatedImages":relatedImages[].asset->url,
      "text":block
    },
  }`
    )
    .then((d) => d[0]);
};
