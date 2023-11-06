import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" id="my-viewport" content="width=device-width, initial-scale=1.0" />
        <Script id="change-meta-viewport" strategy='beforeInteractive'>
          {`
            {
              if(screen.width < 560){
                var mvp = document.getElementById('my-viewport');
                mvp.setAttribute('content', 'width=560');
            }
          `}
        </Script>
      </Head>
      <body>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_M}`}
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
