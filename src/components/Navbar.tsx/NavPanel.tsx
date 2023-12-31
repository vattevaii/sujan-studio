import React, { HTMLAttributes } from "react";
import SvgIcon from "../SvgIcon";
import svgs from "@/constants/svgs";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { siteSettings } from "@/pages/_app";
import sanityImageLoader from "@/utils/sanity/imageLoader";

type Props = {};

const NavItem = ({
  name,
  icon,
  href,
}: { name?: string; icon: { src: string; alt: string } } & LinkProps) => {
  return (
    <Link
      href={href}
      className="flex flex-row items-center p-2.5 gap-[10px] transition-[filter] duration-200 hover:filter hover:contrast-200 text-light-grey"
      aria-label={icon.alt}
    >
      <SvgIcon
        width={30}
        height={30}
        src={icon.src}
        priority={false}
        alt={""}
        className="relative w-5 h-5 overflow-hidden shrink-0"
      />
      {name ? (
        <span className="relative leading-[20px] font-medium">{name}</span>
      ) : (
        <span className="absolute h-0 invisible">{icon.alt}</span>
      )}
    </Link>
  );
};

export default function NavPanel({
  className = "",
  settings,
  activeRoute,
}: HTMLAttributes<HTMLElement> & {
  activeRoute: string;
  settings: siteSettings;
}) {
  // console.log(settings);
  // console.log("Route: ", activeRoute);
  return (
    <aside
      className={
        className +
        " bg-project-100 py-[30px] flex flex-col items-center justify-start gap-[30px] text-base font-raleway overflow-scroll scrollbar-thin scrollbar-thumb-[#fff3]"
      }
    >
      <Link href="/" className="brand-logo w-[3/4] px-[31px]">
        <Image
          width="300"
          height="300"
          priority={true}
          className="relative object-cover max-w-[130px]"
          src={settings.logo}
          loader={sanityImageLoader}
          alt={settings.companyName}
        />
      </Link>
      <nav className="flex flex-col items-start justify-start flex-1 gap-4">
        <ul className="flex flex-col items-start justify-start gap-[10px]">
          {[
            {
              route: "portfolio",
              name: "Our Portfolio",
              icon: svgs.navSvgs.portfolio,
            },
            {
              route: "our-story",
              name: "Our Story",
              icon: svgs.navSvgs.story,
            },
            {
              route: "blog",
              name: "Our Blogs",
              icon: svgs.navSvgs.news,
            },
            {
              route: "packages",
              name: "Our Packages",
              icon: svgs.navSvgs.packages,
            },
            {
              route: "book-us",
              name: "Book a Photographer",
              icon: svgs.navSvgs.book,
            },
            {
              route: "contact-us",
              name: "Contact Us",
              icon: svgs.navSvgs.message,
            },
            // {
            //   route: "my-shop",
            //   name: "My Shop",
            //   icon: svgs.navSvgs.shop,
            // },
          ].map((item) => (
            <li
              key={item.route}
              className={
                (activeRoute === item.route
                  ? "bg-light-grey"
                  : "bg-transparent") + " bg-opacity-10 w-full px-[31px]"
              }
            >
              <NavItem
                href={"/" + item.route}
                name={item.name}
                icon={item.icon}
              />
            </li>
          ))}
          {/* <li className={activeRoute === "portfolio" ? "bg-light-grey" : "bg-transparent"}>
                        <NavItem href="/portfolio" name="Our Portfolio" icon={svgs.navSvgs.portfolio} />
                    </li>
                    <li className={activeRoute === "#" ? "bg-light-grey" : "bg-transparent"}>
                        <NavItem href="#" name="Our Story" icon={svgs.navSvgs.story} />
                    </li>
                    <li className={activeRoute === "#" ? "bg-light-grey" : "bg-transparent"}>
                        <NavItem href="#" name="Our News" icon={svgs.navSvgs.news} />
                    </li>
                    <li className={activeRoute === "#" ? "bg-light-grey" : "bg-transparent"}>
                        <NavItem href="#" name="Packages" icon={svgs.navSvgs.packages} />
                    </li>
                    <li className={activeRoute === "#" ? "bg-light-grey" : "bg-transparent"}>
                        <NavItem href="#" name="Book A Photographer" icon={svgs.navSvgs.book} />
                    </li>
                    <li className={activeRoute === "#" ? "bg-light-grey" : "bg-transparent"}>
                        <NavItem href="#" name="Contact Us" icon={svgs.navSvgs.message} />
                    </li>
                    <li className={activeRoute === "#" ? "bg-light-grey" : "bg-transparent"}>
                        <NavItem href="#" name="My Shop" icon={svgs.navSvgs.shop} />
                    </li> */}
        </ul>
        <div className="grid place-items-center flex-1 w-full px-[31px]">
          <hr className="border-t border-divider w-full" />
        </div>
        <ul className="flex flex-col items-start justify-start gap-[10px]">
          {[
            // {
            //   route: "login",
            //   name: "Login/Register",
            //   icon: svgs.actionsSvg.auth,
            // },
            // {
            //   route: "search",
            //   name: "Search",
            //   icon: svgs.actionsSvg.search,
            // },
            // {
            //   route: "cart",
            //   name: "Cart",
            //   icon: svgs.actionsSvg.shop,
            // },
          ].map(
            (item: {
              route: string;
              name: string;
              icon: { src: string; alt: string };
            }) => (
              <li
                key={item.route}
                className={
                  (activeRoute === item.route
                    ? "bg-light-grey"
                    : "bg-transparent") + " bg-opacity-10 w-full px-[31px]"
                }
              >
                <NavItem
                  href={"/" + item.route}
                  name={item.name}
                  icon={item.icon}
                />
              </li>
            )
          )}
          {/* <li>
                        <NavItem href="#" name="Login/Register" icon={svgs.actionsSvg.auth} />
                    </li>
                    <li>
                        <NavItem href="#" name="Search" icon={svgs.actionsSvg.search} />
                    </li>
                    <li>
                        <NavItem href="#" name="Cart" icon={svgs.actionsSvg.shop} />
                    </li> */}
        </ul>
        <div className="grid place-items-center flex-1 w-full px-[31px]">
          <hr className="border-t  border-divider w-full" />
        </div>
        <div className="social-icons flex justify-center self-center items-center px-[31px]">
          {settings.socialLinks.map((socialLink, idx) => (
            <NavItem
              key={idx}
              href={socialLink.url}
              icon={{ src: socialLink.logo, alt: socialLink.name }}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}
