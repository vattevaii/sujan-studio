import { client } from "../../../sanity/lib/client";

export const getPortfolio: () => Promise<
  {
    title: string;
    mainImage: { url: string; lqip: string };
    images: { url: string; lqip: string }[];
  }[]
> = async function () {
  return await client.fetch(`*[_type=="imageStore"]|order(orderRank){
    "title":category[0].categoryName,
    "mainImage": mainImage.asset->{url,"lqip":metadata.lqip},
    "images":relatedImages[].asset->{url,"lqip":metadata.lqip}
  }`);
};

export const getImages: (category: string) => Promise<
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
  return await client.fetch(`*[_type=="imageStore" && category[0].categoryValue=="${category}"]|order(orderRank){
        "title":category[0],
        "mainImage": mainImage.asset->url,
        "images":relatedImages[].asset->url,
        brideName,
        groomName,
        "date":eventDate,
        "name":eventName
      }`);
};
