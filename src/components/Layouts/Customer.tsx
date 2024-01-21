import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar.tsx/Navbar";
import ActionButtons from "@/modules/CallToAction/ActionButtons";
import LocationCard, { LocationItem } from "../LocationCard";
import MailUs from "../cto/MailUs";
import type { siteSettings } from "@/pages/_app";

type Props = {
  locations: LocationItem[];
  siteSettings: siteSettings;
  route: string;
};

export default function CustomerLayout({
  children,
  locations,
  siteSettings,
  route,
}: PropsWithChildren<Props>) {
  const siteSetting = siteSettings ?? {
    companyName: "",
    email: "",
    location: "",
    logo: "",
    phoneNumber: "",
    socialLinks: [],
  };
  return (
    <>
      <div className="flex relative w-full text-left text-light-grey font-source-sans-3">
        <Navbar settings={siteSetting} route={route} />
        <ActionButtons mobileNumber={siteSetting.mobileNumber} />
        <div className="flex-1 pt-24 lg:pt-0">
          <main className="content relative flex-1">{children}</main>
          <footer id="footer" className="bg-darkbg">
            <section className="footer text-white px-4 lg:px-12 py-8 md:py-12 lg:py-16">
              <div className=" text-left md:gap-4 lg:gap-0 lg:justify-between">
                <MailUs email={siteSetting.email} className="pb-6" />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {locations?.map((location, idx) => (
                    <LocationCard key={idx} locationData={location} />
                  ))}
                </div>
              </div>
            </section>
            <section>
              <div className="text-sm leading-[1.5em] font-medium font-raleway opacity-[0.5] py-8">
                <p className="mx-auto w-fit">
                  © 2023 {siteSetting.companyName}. All rights reserved
                </p>
              </div>
            </section>
          </footer>
        </div>
      </div>
      <script>0</script>
    </>
  );
}
