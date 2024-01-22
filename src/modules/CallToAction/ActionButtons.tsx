import {
  TooltipContent,
  TooltipTrigger,
  TooltipWrapper,
} from "@/components/Tooltip";
import svgs from "@/constants/svgs";
import { siteSettings } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = { mobileNumber: string };
const icons = svgs.callToActionSvgs;
export default function ActionButtons({ mobileNumber }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse gap-3 fixed z-10 bottom-0 right-0 m-5">
      <TooltipWrapper>
        <Link
          href={`tel:${mobileNumber?.replace(/\D/g, "")}`}
          
        >
          <TooltipTrigger>
            <div className="rounded-full p-4 bg-light-grey shadow-around block">
              <Image
                width="35"
                height="35"
                className="w-5 h-5"
                src={icons.bookUs.src}
                alt=""
              ></Image>
              <TooltipContent>Call Us Now</TooltipContent>
            </div></TooltipTrigger>
        </Link>
      </TooltipWrapper>
      <TooltipWrapper>
        <TooltipTrigger onClick={() => router.push("/book-us")}>
          <div className="rounded-full p-4 bg-light-grey shadow-around">
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
