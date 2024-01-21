import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar.tsx/Navbar";
import ActionButtons from "@/modules/CallToAction/ActionButtons";
import LocationCard, { LocationItem } from "../LocationCard";
import MailUs from "../cto/MailUs";
import Image from "next/image";
import Link from "next/link";
import { subdomainLinks } from "../subdomains/SFlatNav";
import { siteSettings } from "@/pages/_app";
import sanityImageLoader from "@/utils/sanity/imageLoader";

type Props = {
  locations: LocationItem[];
  siteSettings: siteSettings;
  route: string;
};

export default function SubDomainLayout({
  locations,
  siteSettings,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="font-source-sans-3">
      <div>
        <ActionButtons mobileNumber={siteSettings.mobileNumber} />
        <div className="flex-1">
          <main className="content relative flex-1">{children}</main>
          <footer id="footer" className="bg-darkbg">
            <section className="px-4 lg:px-12 py-8 bg-light-grey text-project-100">
              <MailUs email={siteSettings.email} variant="small" className="" />
            </section>
            <section id="footer" className="footer bg-darkbg text-white px-4 lg:px-12 pt-8 md:pt-12 lg:pt-16">
              <div className="mb-6 flex gap-5 flex-wrap items-center justify-between">
                <Link href={"/"} className="flex items-center gap-5 h-full">
                  <Image
                    src={siteSettings.logo}
                    loader={sanityImageLoader}
                    alt={siteSettings.companyName}
                    width={300}
                    height={300}
                    className="h-full max-h-20 w-auto"
                  />
                  <p className="text-light-grey text-5xl">{siteSettings.companyName}</p>
                </Link>
                <div className="flex gap-5">
                  {subdomainLinks.map((i, idx) => (
                    <div className="relative group text-project-200" key={idx}>
                      <Link href={i.href}>{i.name}</Link>
                      <hr className="absolute -bottom-2 border-project-200 bg-project-200 transition-all duration-300 w-0 group-hover:w-[calc(100%+10px)] -left-[5px]" />
                    </div>
                  ))}
                </div>
              </div>
              <div className=" text-left md:gap-4 lg:gap-0 lg:justify-between">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {locations?.map((location, idx) => (
                    <LocationCard key={idx} locationData={location} variant="small" />
                  ))}
                </div>
              </div>
              <div className="text-sm leading-[1.5em] font-medium font-raleway opacity-[0.5] py-8">
                <p className="mx-auto w-fit">
                  © 2023 Sujan Studio. All rights reserved
                </p>
              </div>
            </section>
          </footer>
        </div>
      </div>
      <script>0</script>
    </div>
  );
}
