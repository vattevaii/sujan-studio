import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface ISFlatNavProps {
  logo?: boolean;
}

export const subdomainLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "/our-story" },
  { name: "Our Works", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

const SFlatNav: React.FunctionComponent<ISFlatNavProps> = ({
  logo = false,
}) => {
  return (
    <>
      <section className="sticky top-8 z-50 shadow-md bg-light-grey text-project-100 px-[10vw] font-raleway text-sm sm:text-md lg:text-xl text-center">
        <nav className="relative flex items-center justify-center gap-[5vw] py-9">
          {logo ? (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5/6 hidden md:block">
              <Image
                alt="Back to Sujan Studio"
                priority={true}
                src="/jpegs/logo-dark.png"
                className="h-full w-auto -translate-x-2/3 md:translate-x-0"
                width="300"
                height="300"
              />
            </div>
          ) : (
            <></>
          )}
          {subdomainLinks.map((i, idx) => (
            <div className="relative group" key={idx}>
              <Link href={i.href}>{i.name}</Link>
              <hr className="absolute -bottom-2 border-project-200 bg-project-200 transition-all duration-300 w-0 group-hover:w-[calc(100%+20px)] -left-[10px]" />
            </div>
          ))}
        </nav>
      </section>
    </>
  );
};

export default SFlatNav;
