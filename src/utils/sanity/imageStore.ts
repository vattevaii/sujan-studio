import { client } from "../../../sanity/lib/client";

export const getPortfolio: () => Promise<
  { title: string; mainImage: string; images: string[] }[]
> = async function () {
  return await client.fetch(`*[_type=="imageStore"]{
    "title":category[0],
    "mainImage": mainImage.asset->url,
    "images":relatedImages[].asset->url
  }`);
};
