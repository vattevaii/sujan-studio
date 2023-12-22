import * as React from "react";
import BlogCard from "../blog/BlogCard";
import SText from "./text/STextTitle";

interface ISLatestBlogsProps {}

const SLatestBlogs: React.FunctionComponent<
  ISLatestBlogsProps & React.HTMLProps<HTMLDivElement>
> = (props) => {
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
          Lorem ipsum dolor sit amet consectetur. Eget ornare a quisque faucibus
          fusce vitae. Id dolor id nibh sit.
        </SText.Sub>
      </div>
      <div className="flex gap-6">
        <BlogCard
          title="This is title"
          description="Lorem ipsum dolor sit amet consectetur and inter lobortis nisl Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
          imageSrc="/jpegs/FamilyItem.jpg"
        />
        <BlogCard
          title="This is title"
          description="Lorem ipsum dolor sit amet consectetur and inter lobortis nisl Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
          imageSrc="/jpegs/WeddingItem.jpg"
        />
      </div>
    </section>
  );
};

export default SLatestBlogs;
