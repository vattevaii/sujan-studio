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

export const getImages: (
  category: string
) => Promise<
  {
    title: string;
    mainImage: string;
    images: string[];
    name: string;
    date: string;
    brideName: string;
    groomName: string;
  }[]
> = async function (category) {
  return await client.fetch(`*[_type=="imageStore" && category[0]=="${category}" ]{
        "title":category[0],
        "mainImage": mainImage.asset->url,
        "images":relatedImages[].asset->url,
        brideName,
        groomName,
        "date":eventDate,
        "name":eventName
      }`);
};
