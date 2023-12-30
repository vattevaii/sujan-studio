import { TypedObject } from "sanity";
import { client } from "../../../sanity/lib/client";

export type Post = {
  title: string;
  slug: string;
  mainImage: string;
  package: string;
  author: {
    name: string;
    slug: string;
    image: string;
  };
  shortDescription: string;
  publishedAt: string;
  body: TypedObject | TypedObject[];
};

export const getAllPosts: () => Promise<Omit<Post, "body">[]> =
  async function () {
    const postQ = `*[_type=="post"]{
        title,"slug":slug.current,"mainImage":mainImage.asset->url,
        "package":packageType->name,publishedAt,
        "author":author->{
            name,"slug":slug.current,"image":image.asset->url
        },shortDescription
      }`;
    return await client.fetch(`${postQ}`);
  };
export const getPost: (slug: string) => Promise<Post> = async function (slug) {
  const postQ = `*[_type=="post" && slug.current=="${slug}"]{
        title,"slug":slug.current,"mainImage":mainImage.asset->url,
        "package":packageType->name,publishedAt,
        "author":author->{
            name,"slug":slug.current,"image":image.asset->url
        },shortDescription,body
      }`;
  return await client.fetch(`${postQ}`).then((d) => d[0]);
};