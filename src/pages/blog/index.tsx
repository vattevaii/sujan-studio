import PageBanner from "@/components/PageSections/PageBanner";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import { getAllPosts } from "@/utils/sanity/posts";
import { PortableText } from "@portabletext/react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const locations = await getAllLocations();
  const pageContent = await getPageContent("blog");
  return {
    props: { pageContent, posts, locations },
    revalidate: 3600,
  };
};

export default function PostListPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <PageBanner image={props.pageContent.image}>
        <PortableText value={props.pageContent.bannerText} />
      </PageBanner>
      <section className="bg-light-grey px-5 py-10">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(calc(250px+5vw),1fr))] lg:grid-cols-[repeat(auto-fill,minmax(calc(350px+5vw),1fr))] gap-10">
          {props.posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-3 border border-divider"
            >
              <Image
                src={post.mainImage}
                width={600}
                height={400}
                alt={post.title}
              />
              <h2 className="text-xl lg:text-5xl">{post.title}</h2>
              <p className="text-sm lg:text-md">{post.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
