import Image from "next/image";
import * as React from "react";

interface IBlogCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const BlogCard: React.FunctionComponent<
  IBlogCardProps & React.HTMLProps<HTMLDivElement>
> = ({ title, description, imageSrc, ...props }) => {
  return (
    <>
      <div className="grid max-w-[650px]" {...props}>
        <h4 className="text-xl xl:text-5xl font-semibold">{title}</h4>
        <p className="text-sm xl:text-md font-raleway">
          {description.slice(0, 150)}
          {".... "}
          <button className="font-semibold underline">Read More</button>
        </p>
        <div className="w-full aspect-[2/1] row-start-1">
          <Image
            src={imageSrc}
            width={500}
            height={500}
            className="h-full w-full row-start-1 rounded-lg object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
