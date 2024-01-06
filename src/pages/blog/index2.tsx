import PageBanner from "@/components/PageSections/PageBanner";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import { getAllPosts } from "@/utils/sanity/posts";
import { PortableText } from "@portabletext/react";
import {
  InferGetStaticPropsType,
  GetStaticProps,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = (async (context) => {
  const query = context;
  console.log("Query ", query);
  const posts = await getAllPosts();
  const locations = await getAllLocations();
  const pageContent = await getPageContent("blog");
  return {
    props: { pageContent, posts, locations },
    revalidate: 3600,
  };
}) satisfies GetStaticProps;

export default function PostListPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>Our Blogs | Sujan Studio</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <PageBanner image={props.pageContent.image}>
        <PortableText value={props.pageContent.bannerText} />
      </PageBanner>
      <section className="blog-page">
        <div className="bg-light-grey px-5 py-10 blog-page">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(calc(250px+5vw),1fr))] xl:grid-cols-[repeat(auto-fill,minmax(calc(350px+5vw),1fr))] gap-10">
            {props.posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-3 border rounded-sm border-divider flex flex-col gap-1"
              >
                <div className="aspect-video w-full">
                  <Image
                    src={post.mainImage}
                    width={600}
                    height={400}
                    alt={post.title}
                    className="w-full object-cover h-full rounded-sm"
                  />
                </div>
                <h2 className="text-xl lg:text-5xl">{post.title}</h2>
                <p className="text-sm lg:text-md">{post.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
