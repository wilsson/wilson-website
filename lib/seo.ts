import type { DefaultSeoProps } from 'next-seo';

export const seo: DefaultSeoProps = {
  title: 'wilson',
  openGraph: {
    title: 'wilson',
    type: 'website',
    url: 'https://wilsonft83.dev',
    site_name: 'wilson',
    images: [
      {
        url: 'https://wilsonft83.dev/wilson-banner.png',
        alt: 'wilson',
      }
    ],
  },
  twitter: {
    handle: '@wilsson83',
    cardType: 'summary_large_image',
  },
};