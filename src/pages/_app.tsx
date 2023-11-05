import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
// import { Raleway, Source_Sans_3 } from 'next/font/google';

// const raleway = Raleway({
//   subsets: ['latin'],
//   weight: ["200", "500", "600", "700"],
// });
// const source_sans = Source_Sans_3({
//   subsets: ['latin'],
//   weight: ["400", "500"]
// });

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {/* <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
          --sourcesans-font: ${source_sans.style.fontFamily};
        }
      `}</style> */}
    {/* <Script strategy='lazyOnload'
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    /> */}

    <Script id="googleTagManager" strategy='lazyOnload'>
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
    <Script id="gtagmanager" strategy='lazyOnload'>
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
    <Component {...pageProps} />
  </>
}
