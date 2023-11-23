import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar.tsx/Navbar";
import ActionButtons from "@/modules/CallToAction/ActionButtons";
import LocationCard, { LocationItem } from "../LocationCard";

type Props = {
  locations: LocationItem[];
  route: string;
};

export default function CustomerLayout({
  children,
  locations,
  route,
}: PropsWithChildren<Props>) {
  return (
    <>
      <div className="flex relative w-full text-left text-light-grey font-source-sans-3">
        <Navbar route={route} />
        <ActionButtons />
        <div className="flex-1 pt-24 lg:pt-0">
          <main className="content relative flex-1">{children}</main>
          <footer id="footer" className="bg-darkbg">
            <section className="footer text-white px-4 lg:px-12 py-8 md:py-12 lg:py-16">
              <div className=" text-left md:gap-4 lg:gap-0 lg:justify-between">
                <div className="mb-6 flex flex-wrap justify-between flex-col md:flex-row items-start md:items-end">
                  <h2 className="flex-1 text-21xl font-semibold xl:text-61xl">
                    <span className="underline">Let&apos;s talk</span> and
                    create an&nbsp;awesome&nbsp;Memory.
                  </h2>
                  <a
                    href="#"
                    className="flex items-center relative text-xl xl:text-5xl leading-[3em] font-raleway"
                  >
                    <>
                      sujanstudio@gmail.com
                      <span>
                        <svg
                          width="40px"
                          height="40px"
                          viewBox="0 0 120 120"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M50 48V52H67.18L48 71.18L50.82 74L70 54.82V72H74V48H50Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </>
                  </a>
                </div>
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
                  © 2023 Sujan Studio. All rights reserved
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
