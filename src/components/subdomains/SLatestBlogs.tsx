import * as React from "react";
import BlogCard from "../blog/BlogCard";
import SText from "./text/STextTitle";
import { getAllPosts } from "@/utils/sanity/posts";
import { useRouter } from "next/router";

interface ISLatestBlogsProps {
  posts: Awaited<ReturnType<typeof getAllPosts>>;
}

const SLatestBlogs: React.FunctionComponent<
  ISLatestBlogsProps & React.HTMLProps<HTMLDivElement>
> = (props) => {
  const router = useRouter();
  const goToBlog = (slug: string) => {
    router.push(`/blog/${slug}`);
  };
  return (
    <section
      className={
        "bg-light-grey text-project-100 grid place-items-center gap-8 py-10 " +
        props.className
      }
    >
      <div className="grid place-items-center text-center">
        <SText.Title>Read Our Latest Blogs</SText.Title>
        <SText.Sub>
          Unlock the World of Captivating Moments – Explore Our Latest Blogs on
          Photography, Weddings, and Real Estate.
        </SText.Sub>
      </div>
      <div className="flex gap-6">
        {props.posts.slice(0, 2).map((item, idx) => (
          <BlogCard
            key={idx}
            title={item.title}
            description={item.shortDescription}
            imageSrc={item.mainImage}
            onClick={() => goToBlog(item.slug)}
          />
        ))}
      </div>
    </section>
  );
};

export default SLatestBlogs;
