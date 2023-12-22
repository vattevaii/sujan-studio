import {
  TooltipContent,
  TooltipTrigger,
  TooltipWrapper,
} from "@/components/Tooltip";
import svgs from "@/constants/svgs";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {};
const icons = svgs.callToActionSvgs;
export default function ActionButtons({}: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse gap-3 fixed z-10 bottom-0 right-0 m-5">
      <TooltipWrapper>
        <TooltipTrigger>
          <div
            className="rounded-full p-4 bg-light-grey shadow-around"
            onClick={() => router.push("/contact-us")}
          >
            <Image
              width="35"
              height="35"
              className="w-5 h-5"
              src={icons.bookUs.src}
              alt=""
            ></Image>
          </div>
          <TooltipContent>Call Us Now</TooltipContent>
        </TooltipTrigger>
      </TooltipWrapper>
      <TooltipWrapper>
        <TooltipTrigger>
          <div className="rounded-full p-4 bg-light-grey shadow-around"
            onClick={() => router.push("book-us")}
            >
            <Image
              width="35"
              height="35"
              className="w-5 h-5"
              src={icons.getEstimate.src}
              alt=""
            ></Image>
          </div>
          <TooltipContent>Get Estimate</TooltipContent>
        </TooltipTrigger>
      </TooltipWrapper>
    </div>
  );
}
