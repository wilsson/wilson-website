import Script from 'next/script';
import type { AppProps } from 'next/app';
import { DefaultSeo } from "next-seo"
import { seo } from '~/lib/seo';
import { useAnalytics } from '~/lib/useAnalytics';
import '~/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  useAnalytics();
  return(
    <>
      <DefaultSeo {...seo} />
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}


export default App