import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IPackageProps {
  name: string;
  image: string;
  dollars: string;
  privileges: string[];
}

export function Package(props: IPackageProps) {
  return (
    <div className="relative flex flex-col items-center isolate bg-faded p-5 text-project-200">
      <div className="absolute top-0 left-0 w-full h-64 -z-[1]">
        <Image
          className="w-full h-full"
          width={500}
          height={500}
          src={props.image?props.image: "/jpegs/mainSection.jpg"}
          alt={""}
        />
      </div>
      <h3 className="text-light-grey text-21xl text-center flex items-center h-[2.2em] leading-10">{props.name}</h3>
      <p className="text-light-grey text-xl pb-4">Starting From</p>
      <div className="flex items-center justify-center aspect-square border-[6px] p-5 border-faded bg-project-100 text-white rounded-full">
        <p className="text-21xl lg:text-[48px] font-semibold">{props.dollars}</p>
      </div>
      <div className="w-full grid gap-5 font-raleway">
        {props.privileges.map((ptext,key) => (
          <p className="flex items-center gap-5" key={key}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM14.3 7.61L9.73 13.61C9.63685 13.731 9.51721 13.8291 9.38027 13.8967C9.24333 13.9643 9.09272 13.9996 8.94 14C8.78811 14.0008 8.63803 13.967 8.50115 13.9012C8.36426 13.8353 8.24418 13.7392 8.15 13.62L5.71 10.51C5.62924 10.4063 5.5697 10.2876 5.53479 10.1609C5.49988 10.0341 5.49027 9.90172 5.50652 9.77126C5.52277 9.64079 5.56456 9.5148 5.6295 9.40049C5.69444 9.28617 5.78126 9.18576 5.885 9.105C6.09453 8.94189 6.36026 8.8687 6.62375 8.90152C6.75421 8.91777 6.8802 8.95955 6.99452 9.02449C7.10884 9.08943 7.20924 9.17626 7.29 9.28L8.92 11.36L12.7 6.36C12.7801 6.25494 12.8801 6.16669 12.9943 6.10029C13.1086 6.03388 13.2347 5.99062 13.3657 5.97298C13.4966 5.95534 13.6297 5.96365 13.7574 5.99746C13.8851 6.03126 14.0049 6.08989 14.11 6.17C14.2151 6.25011 14.3033 6.35012 14.3697 6.46433C14.4361 6.57855 14.4794 6.70472 14.497 6.83565C14.5147 6.96658 14.5063 7.0997 14.4725 7.22742C14.4387 7.35514 14.3801 7.47494 14.3 7.58V7.61Z"
                fill="#1AA260"
              />
            </svg>{" "}
            {ptext}
          </p>
        ))}
      </div>
      <Link href="/book-us" className="w-full pt-10 mt-auto">
        <button className=" bg-project-100 text-white p-4 w-full">See this Plan</button>
      </Link>
    </div>
  );
}
