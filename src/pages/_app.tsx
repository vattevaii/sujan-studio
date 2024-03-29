import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Antonio, Raleway, Source_Sans_3, Lato } from "next/font/google";
import Head from "next/head";
import { IntersectionProvider } from "@/packages/use-intersection-observer";
import { useRouter } from "next/router";
import CustomerLayout from "@/components/Layouts/Customer";
import AdminLayout from "@/components/Layouts/Admin";
import { SessionProvider } from "next-auth/react";
import SubDomainLayout from "@/components/Layouts/Subdomain";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "500", "600", "700"],
});
const source_sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400"],
  preload: false,
});
const actay = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  preload: false,
});
export type siteSettings = {
  email: string;
  logo: string;
  phoneNumber: string;
  mobileNumber: string;
  companyName: string;
  location: string;
  locationLink: string;
  socialLinks: { name: string; url: string; logo: string }[];
  clients: { name: string; url: string; logo: string }[];
};
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const firstPath = router.asPath.split("/")[1] || "";
  
  const Layout = firstPath.startsWith("admin")
    ? AdminLayout
    : firstPath.startsWith("sub")
    ? SubDomainLayout
    : CustomerLayout;
  return (
    <>
      <Head>
        <meta name="viewport" id="my-viewport" content="width=486" />
        {/* <meta name="viewport" id="my-viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
          --sourcesans-font: ${source_sans.style.fontFamily};
          --antonio-font: ${antonio.style.fontFamily};
          --actays-font: ${actay.style.fontFamily};
        }
      `}</style>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      {/* <Script id="googleTagManager" strategy='lazyOnload'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
      `}
    </Script>
    {/* <!-- Google Tag Manager --> */}
      <Script id="gtagmanager" strategy="lazyOnload">
        {`
        (function(w,d,s,l,i){
          w[l] = w[l] || [];
          w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.defer=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })
        (window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_M}');
      `}
      </Script>
      {/* <!-- End Google Tag Manager --> */}
      <SessionProvider session={pageProps.session}>
        <IntersectionProvider>
          <Layout
            locations={pageProps.locations?.locations}
            siteSettings={pageProps.locations?.siteSettings?.[0]}
            route={firstPath}
          >
            <Component {...pageProps} />
          </Layout>
        </IntersectionProvider>
      </SessionProvider>
    </>
  );
}
