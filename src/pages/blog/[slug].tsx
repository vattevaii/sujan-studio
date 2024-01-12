import sanityImageLoader from "@/utils/sanity/imageLoader";
import { getAllLocations } from "@/utils/sanity/location";
import { getAllPosts, getPost } from "@/utils/sanity/posts";
import { PortableText } from "@portabletext/react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  const mapped = posts
    .map((d) => {
      return {
        params: {
          slug: d.slug,
        },
      };
    })
    .flat();
  return {
    paths: mapped,
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const locations = await getAllLocations();
  const slug = context.params?.slug as string;
  if (!slug || slug.length === 0)
    return {
      props: { locations },
      notFound: true,
    };
  const post = await getPost(slug);
  if (!post)
    return {
      props: {
        locations,
      },
      notFound: true,
    };
  return {
    props: {
      locations,
      post,
    },
    revalidate: 180,
  };
}) satisfies GetStaticProps<any>;

export default function PostPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  if (!props.post) return "Loading...";
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>{`${props.post.title} | Sujan Studio`}</title>
        <meta name="description" content={props.post.shortDescription} />
      </Head>
      <section className="blog-page">
        <div className="relative">
          <Image
            src={props.post.mainImage ?? "/jpegs/mainSection.jpg"}
            alt={props.post.title}
            width="1200"
            height="1200"
            priority={true}
            blurDataURL={props.post.mainImageBlur}
            loader={sanityImageLoader}
            className="w-full h-auto max-h-screen object-cover"
          />
          <div className="absolute top-0 h-full w-full flex justify-center items-center isolate ">
            <div className="absolute top-0 -z-[1] w-full h-full bg-project-100 opacity-70" />
            <div className="px-10 py-20 text-center xl:w-2/3">
              <h1>{props.post.title}</h1>
              <h4>
                By {props.post.author.name} -{" "}
                {new Date(props.post.publishedAt).toLocaleDateString("en-au", {
                  dateStyle: "long",
                })}
              </h4>
            </div>
          </div>
        </div>
        <div className=" px-10 pt-3 pb-20 text-project-100 bg-light-grey">
          <PortableText
            value={props.post.body}
            components={{
              types: {
                image: ({ value }) => {
                  return <Image {...value} />;
                },
              },
            }}
          />
        </div>
      </section>
    </>
  );
}
