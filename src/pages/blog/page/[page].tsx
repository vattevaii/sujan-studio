import PageBanner from "@/components/PageSections/PageBanner";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import {
  getAllPosts,
  getAllPostsByPage,
  getAllPostsCount,
} from "@/utils/sanity/posts";
import { PortableText } from "@portabletext/react";
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticPaths = (async () => {
  const blogsCount = await getAllPostsCount();
  const pages = Array.from(
    { length: Math.ceil(blogsCount / 6) },
    (_, i) => i + 1
  );
  return {
    paths: pages.map((page) => ({
      params: { page: page.toString() },
    })),
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const query = context.params;
  const locations = await getAllLocations();
  const pageContent = await getPageContent("blog");
  const blogsCount = await getAllPostsCount();
  const lastPage = Math.ceil(blogsCount / 6);
  let page: number = 1;
  if (query && query.page) {
    page = Number(query!.page);
    if (isNaN(page)) {
      return {
        notFound: true,
        props: {
          location: locations,
          pageContent: pageContent,
          posts: [],
          page: 0,
          lastPage: 1,
        },
      };
    }
  }
  const posts = await getAllPostsByPage(page);
  if (posts.length === 0)
    return {
      notFound: true,
      props: {
        location: locations,
        pageContent: pageContent,
        posts: [],
        page: 0,
        lastPage,
      },
    };
  return {
    props: { pageContent, posts, locations, page, lastPage },
    revalidate: 3600,
  };
}) satisfies GetStaticProps;

export default function PostListPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();
  console.log(props);
  if (router.isFallback)
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
        Loading...
      </>
    );
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
      <PageBanner
        image={props.pageContent.image}
        blurDataURL={props.pageContent.blurDataImage}
      >
        <PortableText value={props.pageContent.bannerText} />
      </PageBanner>
      <section className="blog-page">
        <div className="bg-light-grey px-5 py-10 blog-page">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(calc(250px+5vw),1fr))] xl:grid-cols-[repeat(auto-fill,minmax(calc(350px+5vw),1fr))] gap-10">
            {props.posts.map((post, i) => (
              <Link
                key={i}
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
        {props.lastPage === 1 ? (
          <></>
        ) : (
          <div className="flex justify-center items-center px-5 py-10  bg-light-grey text-project-100 gap-3">
            {props.page === 1 ? (
              <div></div>
            ) : (
              <Link
                href={`/blog?page=${props.page - 1}`}
                replace={false}
                className="text-project-100 border hover:bg-opacity-10 hover:bg-project-200 transition-all border-project-200 rounded-full p-3 h-10 w-10 flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 50"
                  className="h-5/6 w-full rotate-180"
                  fill="none"
                >
                  <g stroke="currentColor" strokeWidth={4}>
                    <path d="M0 2L25 25L0 48" />
                  </g>
                </svg>
              </Link>
            )}
            <div className="flex items-center gap-1">
              {Array.from({ length: props.lastPage }, (_, i) => i + 1).map(
                (i) => {
                  if (props.page === i)
                    return (
                      <div
                        key={i}
                        className="bg-project-100 text-light-grey rounded-full p-3 h-10 w-10 flex justify-center items-center"
                      >
                        {i}
                      </div>
                    );
                  return (
                    <Link
                      key={i}
                      replace={false}
                      href={`/blog?page=${i}`}
                      className="text-project-100 border hover:bg-opacity-10 hover:bg-project-200 transition-all border-project-200 rounded-full p-3 h-10 w-10 flex justify-center items-center"
                    >
                      {i}
                    </Link>
                  );
                }
              )}
            </div>
            {props.lastPage > props.page ? (
              <Link
                replace={false}
                href={`/blog?page=${props.page + 1}`}
                className="text-project-100 border hover:bg-opacity-10 hover:bg-project-200 transition-all border-project-200 rounded-full p-3 h-10 w-10 flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 50"
                  className="h-5/6 w-full"
                  fill="none"
                >
                  <g stroke="currentColor" strokeWidth={4}>
                    <path d="M0 2L25 25L0 48" />
                  </g>
                </svg>
              </Link>
            ) : (
              <></>
            )}
          </div>
        )}
      </section>
    </>
  );
}
