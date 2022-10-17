import type { DefaultSeoProps } from 'next-seo';

const title = 'Wilson Flores';
const domain = 'https://wilsonft83.dev';
const twitter = '@wilsson83';
const bannerImage = 'https://wilsonft83.dev/wilson-banner.png';

export const seo: DefaultSeoProps = {
  title,
  openGraph: {
    title,
    type: 'website',
    url: domain,
    site_name: title,
    images: [
      {
        url: bannerImage,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: 'summary_large_image',
  },
};